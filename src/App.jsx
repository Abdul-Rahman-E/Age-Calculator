import { createContext, useState } from "react";
import DarkModeSlider from "./components/DarkModeSlider";
import Panel from "./components/Panel";
import { motion } from "framer-motion";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div
        className={`p-5 ${
          theme === "light" ? "bg-Off_white" : "bg-slate-950"
        }  h-screen w-screen`}
      >
        <DarkModeSlider />
        <Panel />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
