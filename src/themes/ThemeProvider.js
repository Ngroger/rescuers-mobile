import { lightColors, darkColors } from "./colors";
import { useColorScheme } from "react-native";
import React, { createContext, useContext, useEffect, useState } from "react";
import ThemeStore from "../store/ThemeStore";

export const ThemeContext = createContext({
    dark: false,
    colors: lightColors,
    setScheme: () => {},
});

export const ThemeProvider = ({ children }) => {
    const colorScheme = useColorScheme();
    const [isDark, setIsDark] = useState(colorScheme === 'dark');

    useEffect(() => {
        const loadInitialScheme = async () => {
            const scheme = await ThemeStore.getScheme();
            setIsDark(scheme === 'dark');
        };
        
        loadInitialScheme();
    }, []);

    useEffect(() => {
        setIsDark(colorScheme === 'dark');
    }, [colorScheme]);

    const setScheme = (scheme) => {
        setIsDark(scheme === 'dark');
        ThemeStore.saveScheme(scheme);
    };

    const defaultTheme = {
        dark: isDark,
        colors: isDark ? darkColors : lightColors,
        setScheme,
    };

    return (
        <ThemeContext.Provider value={defaultTheme}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
