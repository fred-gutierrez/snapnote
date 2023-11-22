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

  const editor: BlockNoteEditor = useBlockNote({
    // Save on localStorage
    initialContent: initialContent ? JSON.parse(initialContent) : undefined,

    onEditorContentChange: (editor) => {
      // Save on localStorage
      localStorage.setItem(
        "editorContent",
        JSON.stringify(editor.topLevelBlocks),
      );
      // Save block as markdown
      const saveBlocksAsMarkdown = async () => {
        const markdown: string = await editor.blocksToMarkdown(
          editor.topLevelBlocks.filter(
            (block: Block) => block.type !== "image",
          ),
        );
        setMarkdown(markdown);
      };
      saveBlocksAsMarkdown();

      const saveBlocksAsHTML = async () => {
        const html: string = await editor.blocksToHTML(
          editor.topLevelBlocks.filter(
            (block: Block) => block.type !== "image",
          ),
        );
        setHTML(html);
      };
      saveBlocksAsHTML();
      // Save just the text (No markdown)
      const saveText = async () => {
        const text: string = extractTextFromBlocks(editor.topLevelBlocks);
        setText(text);
      };
      saveText();
    },
  });

  const extractTextFromBlocks = (blocks: Block[]) => {
    const textContent: string = blocks
      // This specifically remove the image property to be added to the text
      .filter((block: Block) => block.type !== "image")
      .map((block: Block) => block.content?.map((inline: any) => inline.text))
      .join("\n");

    return textContent;
  };

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

