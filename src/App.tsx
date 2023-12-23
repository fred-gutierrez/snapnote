import { Routes } from "react-router";
import { Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import DarkModeProvider from "./context/DarkModeProvider";
import SettingsProvider from "./context/SettingsProvider";
import Home from "./pages/Home";
import Settings from "./pages/Settings";

export default function App() {
  return (
    <html lang="en">
      <DarkModeProvider>
        <SettingsProvider>
          <body>
            <div className="app m-auto">
              <div className="py-5 dark:bg-neutral-700 dark:text-white bg-neutral-100 text-black">
                <Routes>
                  <Route
                    path="*"
                    element={<Home />}
                  />
                  <Route
                    path="/"
                    element={<Home />}
                  />
                  <Route
                    path="/settings"
                    element={<Settings />}
                  />
                </Routes>
              </div>
              <Navbar />
            </div>
          </body>
        </SettingsProvider>
      </DarkModeProvider>
    </html>
  );
}
