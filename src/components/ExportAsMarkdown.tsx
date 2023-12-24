import { useState } from "react";

interface ExportAsMarkdownTypes {
  markdown: string;
}

const ExportAsMarkdown: React.FC<ExportAsMarkdownTypes> = ({ markdown }) => {
  const [isContentEmpty, setIsContentEmpty] = useState<boolean>(false);

  const exportMarkdown = () => {
    if (markdown.length == 0) {
      setIsContentEmpty(true);
      setTimeout(() => {
        setIsContentEmpty(false);
      }, 3000);
    } else {
      const markdownText = `data:text/markdown;charset=utf-8,${encodeURIComponent(
        markdown,
      )}`;
      const a = document.createElement("a");
      a.href = markdownText;
      a.download = "snapnote-markdown.md";
      a.style.display = "none";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  return (
    <>
      <button
        className="text-base py-5 font-semibold rounded-lg dark:bg-neutral-600 bg-neutral-200 hover:-translate-y-0.5 transition duration-150 ease-in-out"
        onClick={exportMarkdown}
      >
        {isContentEmpty ? "No Content to Export" : "Export as Markdown"}
      </button>
    </>
  );
}

export default ExportAsMarkdown
