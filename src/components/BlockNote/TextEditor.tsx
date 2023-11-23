import { Block, BlockNoteEditor } from "@blocknote/core";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import { theme } from "./Theme";
import "@blocknote/core/style.css";
import { useState } from "react";
import ExportMenu from "../ExportMenu";
import CopyToClipboard from "../CopyToClipboard";
import { useHideExportMenu, useHideCopy } from "../../context/SettingsProvider";
import { useDarkMode } from "../../context/DarkModeProvider";

const initialContent: string | null = localStorage.getItem("editorContent");

export default function TextEditor() {
  const [markdown, setMarkdown] = useState<string>("");
  const [html, setHTML] = useState<string>("");
  const [text, setText] = useState<string>("");

  const { isDarkMode } = useDarkMode();
  const { hideExportMenu } = useHideExportMenu();
  const { hideCopy } = useHideCopy();

  const saveBlocksAsMarkdown = async (blocks: Block[]) => {
    const markdown: string = await editor.blocksToMarkdown(
      blocks.filter((block: Block) => block.type !== "image"),
    );
    setMarkdown(markdown);
  };

  const saveBlocksAsHTML = async (blocks: Block[]) => {
    const html: string = await editor.blocksToHTML(
      blocks.filter((block: Block) => block.type !== "image"),
    );
    setHTML(html);
  };

  const saveText = (blocks: Block[]) => {
    const textContent: string = blocks
      // This specifically remove the image property to be added to the text
      .filter((block: Block) => block.type !== "image")
      .map((block: Block) => block.content?.map((inline: any) => inline.text))
      .join("\n");

    setText(textContent);
  };

  const editor: BlockNoteEditor = useBlockNote({
    // Save on localStorage
    initialContent: initialContent ? JSON.parse(initialContent) : undefined,

    onEditorContentChange: (editor) => {
      // Save on localStorage
      localStorage.setItem(
        "editorContent",
        JSON.stringify(editor.topLevelBlocks),
      );

      saveBlocksAsMarkdown(editor.topLevelBlocks);

      saveBlocksAsHTML(editor.topLevelBlocks);

      saveText(editor.topLevelBlocks);
    },

    onEditorReady: (editor) => {
      if (initialContent) {
        saveBlocksAsMarkdown(editor.topLevelBlocks);
        saveBlocksAsHTML(editor.topLevelBlocks);
        saveText(editor.topLevelBlocks);
      }
    },
  });

  return (
    <div className="flex flex-col h-112">
      <BlockNoteView
        editor={editor}
        className="flex-1 overflow-y-auto rounded-xl dark:bg-neutral-600 bg-neutral-200"
        theme={isDarkMode ? theme.dark : theme.light}
      />
      {!hideCopy && !hideExportMenu ? (
        <div className="grid grid-cols-2 mt-4 gap-4">
          <ExportMenu markdown={markdown} html={html} />
          <CopyToClipboard text={text} />
        </div>
      ) : !hideCopy || !hideExportMenu ? (
        <div className="mt-4 grid w-full">
          {hideExportMenu ? null : (
            <ExportMenu markdown={markdown} html={html} />
          )}
          {hideCopy ? null : <CopyToClipboard text={text} />}
        </div>
      ) : null}
    </div>
  );
}
