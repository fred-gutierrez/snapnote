import { useEffect, useRef, useState } from "react"

const SelectedTextMenu = () => {
  const menuRef = useRef(document.createElement("div"))
  const [position, setPosition] = useState({ top: 0, left: 0 })

  const showMenu = (selectedText: string) => {
    const menu = menuRef.current
    // Clear previous content to prevent multiple buttons
    menu.innerHTML = ""

    const selection = window.getSelection();
    const range = selection?.getRangeAt(0);

    if (range) {
      const rect = range.getBoundingClientRect();
      setPosition({
        top: rect.top + window.scrollY - menu.clientHeight,
        left: rect.left + window.scrollX + rect.width / 2 - menu.clientWidth / 2
      })
    }

    menu.classList.add("absolute", "z-100", "opacity-50", "hover:opacity-100");
    menu.style.top = `${position.top}px`
    menu.style.top = `${position.left}px`

    const copyButton = document.createElement("button");
    copyButton.classList.add("dark:bg-neutral-800", "bg-neutral-100", "py-2", "rounded-3xl", "focus:outline-none", "border-2", "dark:border-neutral-700", "border-neutral-300", "font-semibold")

    const sendText = document.createElement("span")
    sendText.textContent = "Send to"
    sendText.classList.add("dark:text-white", "text-black", "pl-3", "pr-1.5", "rounded-2xl")

    const snapNoteLogo = document.createElement("span");
    snapNoteLogo.textContent = "Sn"
    snapNoteLogo.classList.add("dark:bg-neutral-700", "bg-neutral-300", "dark:text-white", "text-black", "py-2.5", "px-2.5", "rounded-3xl")

    menu.appendChild(copyButton);
    copyButton.appendChild(sendText);
    copyButton.appendChild(snapNoteLogo);

    copyButton.addEventListener("click", () => {
      console.log("Copying to SnapNote: ", selectedText)
      sendText.textContent = "Sent!"
    });

    document.body.appendChild(menu)
  }

  const closeMenu = () => {
    const menu = menuRef.current;
    if (menu.parentNode) {
      menu.parentNode.removeChild(menu)
    }
  }

  useEffect(() => {
    const handleSelection = () => {
      const selectedText = window.getSelection()?.toString();
      if (selectedText) {
        showMenu(selectedText)
      } else {
        closeMenu();
      }
    };

    document.addEventListener("selectionchange", handleSelection);

    return () => {
      document.removeEventListener("selectionchange", handleSelection)
    }
  }, []);

  return null
}

export default SelectedTextMenu
