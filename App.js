import React, { useState, useEffect } from 'react';
import { FontLoader } from './src/helpers/FontLoader';
import AppNavigation from './src/components/ui/navigation/AppNavigation';
import i18n from './src/i18';
import LangStore from './src/store/LangStore';
import { ThemeProvider } from './src/themes/ThemeProvider';
import ThemeStore from './src/store/ThemeStore';
import { useTheme } from './src/themes/ThemeProvider';
import { OnlineProvider } from './src/context/OnlineProvider';

const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const { setScheme } = useTheme();

  useEffect(() => {
    const loadFontsAndLanguage = async () => {
      await FontLoader();
      setFontsLoaded(true);

      const lang = await LangStore.getLanguage();
      if (lang === 'default') {
        i18n.changeLanguage('ru');
      } else {
        i18n.changeLanguage(lang);
      }

      const scheme = await ThemeStore.getScheme();
      console.log("scheme", scheme);
      setScheme(scheme);
    };

    loadFontsAndLanguage();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <OnlineProvider>
      <ThemeProvider>
        <AppNavigation />
      </ThemeProvider>
    </OnlineProvider>
  );
};

export default App;
