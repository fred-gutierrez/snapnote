import { Link } from "react-router-dom";
import Coffee from "../components/Coffee";
import { useHideCopy, useHideExportMenu } from "../context/SettingsProvider";
import { useState } from "react";

export default function Settings() {
  const { hideExportMenu, setHideExportMenu } = useHideExportMenu();
  const { hideCopy, setHideCopy } = useHideCopy();
  const [goBack, setGoBack] = useState(false);

  const toggleHideExportMenu = () => {
    const newHideExportMenu = !hideExportMenu;
    setHideExportMenu(newHideExportMenu);

    if (typeof window !== "undefined") {
      localStorage.setItem("hideExportMenu", newHideExportMenu.toString());
    }
  };

  const toggleHideCopy = () => {
    const newHideCopy = !hideCopy;
    setHideCopy(newHideCopy);

    if (typeof window !== "undefined") {
      localStorage.setItem("hideCopy", newHideCopy.toString());
    }
  };

  return (
    <section className="mx-5">
      <header className="flex justify-between items-center mb-5">
        <div
          onMouseEnter={() => setGoBack(true)}
          onMouseLeave={() => setGoBack(false)}
        >
          {goBack ? (
            <Link to={"/"}>
              <h1 className="text-3xl font-bold underline">
                <i className="fa-solid fa-chevron-left mr-2 text-2xl"></i>
                Go Back
              </h1>
            </Link>
          ) : (
            <h1 className="text-3xl font-bold underline">Settings</h1>
          )}
        </div>
        <Coffee />
      </header>
      <div className="h-96 p-5 text-lg overflow-y-auto rounded leading-8 dark:bg-neutral-600 bg-neutral-200">
        <button onClick={toggleHideExportMenu}>
          <i
            className={`fa-classic fa-regular fa-${
              hideExportMenu ? "square-check" : "square"
            } mr-2`}
          ></i>
          Hide Export Menu
        </button>
        <br />
        <button onClick={toggleHideCopy}>
          <i
            className={`fa-classic fa-regular fa-${
              hideCopy ? "square-check" : "square"
            } mr-2`}
          ></i>
          Hide Copy to Clipboard
        </button>
      </div>
    </section>
  );
}
