import { useState } from "react";

export default function CopyToClipboard({ text }: any) {
  const [copyDone, setCopyDone] = useState<string>("");
  const [copyError, setCopyError] = useState<string>("");

  function copyToClipboard() {
    const textToCopy = text;

    if (textToCopy.length === 0) {
      setCopyError("No Content to Copy");
      setCopyDone("");
      setTimeout(() => {
        setCopyError("");
      }, 3000);
      return;
    }

    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setCopyDone("Copied to Clipboard!");
        setCopyError("");
        setTimeout(() => {
          setCopyDone("");
        }, 3000);
      })
      .catch((error) => {
        setCopyError("Copy to Clipboard failed " + error);
        setCopyDone("");
        setTimeout(() => {
          setCopyError("");
        }, 3000);
      });
  }

  return (
    <>
      <button
        className="text-base py-5 font-semibold rounded-lg dark:bg-neutral-600 bg-neutral-200 hover:-translate-y-0.5 transition duration-150 ease-in-out"
        onClick={copyToClipboard}
      >
        {copyDone ? copyDone : copyError ? copyError : "Copy to Clipboard"}
      </button>
    </>
  );
}

