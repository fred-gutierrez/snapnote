import { useState } from "react";
import { Block, BlockNoteEditor } from "@blocknote/core";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import { theme } from "./Theme";
import ExportAsMarkdown from "../ExportAsMarkdown";
import CopyMenu from "../CopyMenu";
import "@blocknote/core/style.css";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { toggleClearText } from "../../redux/clearTextSlice";

const TextEditor = () => {
  const [markdown, setMarkdown] = useState<string>("");
  const [text, setText] = useState<string>("");

  // Redux state managment
  const darkMode = useSelector((state: RootState) => state.darkMode.value)
  const hideExport = useSelector((state: RootState) => state.settings.hideExport)
  const hideCopy = useSelector((state: RootState) => state.settings.hideCopy)
  const isClearText = useSelector((state: RootState) => state.clearText.value)
  const dispatch: AppDispatch = useDispatch()

  const saveBlocksAsMarkdown = async (blocks: Block[]) => {
    const markdown: string = await editor.blocksToMarkdown(
      blocks.filter((block: Block) => block.type !== "image"),
    );
    setMarkdown(markdown);
  };

  const saveText = (blocks: Block[]) => {
    const textContent: string = blocks
      .filter((block: Block) => block.type !== "image")
      .map(
        (block: Block) =>
          block.content?.map((inline) => {
            if (inline.type === "text") {
              return inline.text;
            }
          }),
      )
      .join("\n");

    setText(textContent);
  };

  // This gets the previously stored editor contents (Must be within the text editor to ensure that when changing routes it gets the most recent text)
  const initialContent: string | null = localStorage.getItem("editorContent");

  const editor: BlockNoteEditor = useBlockNote({
    // If the editor contents were previously saved, this restores them
    initialContent: initialContent ? JSON.parse(initialContent) : undefined,

    onEditorContentChange: (editor) => {
      // Serializes and saves the editor contents to local storage.
      localStorage.setItem(
        "editorContent",
        JSON.stringify(editor.topLevelBlocks),
      );

      saveBlocksAsMarkdown(editor.topLevelBlocks);

      saveText(editor.topLevelBlocks);
    },

    onEditorReady: (editor) => {
      if (initialContent) {
        saveBlocksAsMarkdown(editor.topLevelBlocks);
        saveText(editor.topLevelBlocks);
      }
    },
  });

  if (isClearText) {
    // clear all the blocks in the editor
    editor.removeBlocks(editor.topLevelBlocks);
    // then set the isClearText to false
    dispatch(toggleClearText())
  }

  return (
    <div className="flex flex-col h-112 overflow-hidden">
      <BlockNoteView
        editor={editor}
        className="flex-1 overflow-y-auto rounded-xl dark:bg-neutral-600 bg-neutral-200"
        theme={darkMode ? theme.dark : theme.light}
      />
      {!hideCopy && !hideExport ? (
        <div className="grid grid-cols-2 mt-4 gap-4">
          <ExportAsMarkdown markdown={markdown} />
          <CopyMenu
            text={text}
            markdown={markdown}
          />
        </div>
      ) : !hideCopy || !hideExport ? (
        <div className="mt-4 grid w-full">
          {hideExport ? null : <ExportAsMarkdown markdown={markdown} />}
          {hideCopy ? null : (
            <CopyMenu
              text={text}
              markdown={markdown}
            />
          )}
        </div>
      ) : null}
    </div>
  );
}

export default TextEditor
