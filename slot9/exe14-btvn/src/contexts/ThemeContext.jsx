import { useContext } from 'react';
import { useState } from 'react';
import { createContext } from "react";

const ThemeContext = createContext();

const themes = {
    light: {
        foreground: "#000000",
        background: "#eeeeee"
    },
    dark: {
        foreground: "#ffffff",
        background: "#61dafb"
    }
};

export function ThemeProvider({children}) {
    const [theme, setTheme] = useState(themes.light);

    const toggleTheme = () => {
        setTheme(theme === themes.light ? themes.dark : themes.light);
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    return useContext(ThemeContext);
}