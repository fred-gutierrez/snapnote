import { useState } from "react";

export default function ExportMenu({ markdown, html }: any) {
  const [showEmptyMessage, setShowEmptyMessage] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const exportMarkdown = () => {
    if (markdown.length > 0) {
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

  const exportHTML = () => {
    if (html.length > 0) {
      const htmlText = `data:text/html;charset=utf-8,${encodeURIComponent(
        html,
      )}`;
      const a = document.createElement("a");
      a.href = htmlText;
      a.download = "snapnote-html.html";
      a.style.display = "none";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  const openMenu = () => {
    if (markdown.length === 0 || html.length === 0) {
      setShowEmptyMessage(true);
      setTimeout(() => {
        setShowEmptyMessage(false);
      }, 3000);
    } else {
      setIsMenuOpen(true);
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <button
        className="text-base py-5 font-semibold rounded-lg dark:bg-neutral-600 bg-neutral-200"
        onClick={isMenuOpen ? closeMenu : openMenu}
      >
        {showEmptyMessage
          ? "Nothing to Export"
          : isMenuOpen === false
          ? "Export Menu"
          : "Close Export Menu"}
      </button>

      {isMenuOpen && (
        <div className="text-base absolute rounded-lg top-0 ml-2 mt-36 p-5 dark:bg-neutral-700 bg-neutral-100 shadow-lg">
          <button
            className="py-5 w-48 mr-5 font-semibold rounded-lg dark:bg-neutral-600 bg-neutral-200"
            onClick={exportMarkdown}
          >
            Export as Markdown
          </button>
          <button
            className="py-5 w-48 font-semibold rounded-lg dark:bg-neutral-600 bg-neutral-200"
            onClick={exportHTML}
          >
            Export as HTML
          </button>
        </div>
      )}
    </>
  );
}

