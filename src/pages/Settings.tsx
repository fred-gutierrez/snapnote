import { Link } from "react-router-dom";
import Coffee from "../components/Coffee";
import { useState } from "react";
import { useHideExport } from "../utils/hideExport";
import { useHideCopy } from "../utils/hideCopy";

const Settings = () => {
  const { hideExport, setHideExport } = useHideExport();
  const { hideCopy, setHideCopy } = useHideCopy();
  const [goBack, setGoBack] = useState(false);

  const toggleHideExport = () => {
    const newHideExport = !hideExport;
    setHideExport(newHideExport);

    if (typeof window !== "undefined") {
      localStorage.setItem("hideExport", newHideExport.toString());
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
              <h1 className="text-3xl font-bold underline hover:scale-105 transition duration-100 ease-in-out">
                <i className="fa-solid fa-chevron-left mr-2 text-2xl"></i>
                Go Back
              </h1>
            </Link>
          ) : (
            <h1 className="text-3xl font-bold underline">Settings</h1>
          )}
        </div>
        <div className="flex items-center">
          <a
            href="https://github.com/fred-gutierrez/SnapNote"
            className="text-lg mr-4"
            target="_blank"
          >
            <i className="fa-brands fa-github fa-xl"></i>
          </a>
          <Coffee />
        </div>
      </header>

      <div className="h-96 p-5 text-lg overflow-y-auto rounded leading-8 dark:bg-neutral-600 bg-neutral-200">
        <button onClick={toggleHideExport}>
          <i
            className={`fa-classic fa-regular fa-${hideExport ? "square-check" : "square"
              } mr-2`}
          ></i>
          Hide Export To Markdown
        </button>
        <br />
        <button onClick={toggleHideCopy}>
          <i
            className={`fa-classic fa-regular fa-${hideCopy ? "square-check" : "square"
              } mr-2`}
          ></i>
          Hide Copy to Clipboard
        </button>
      </div>
    </section>
  );
}

export default Settings
