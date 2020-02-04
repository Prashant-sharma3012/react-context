import React, { useState } from 'react';
import './App.css';
import Header from './components/header';
import { ThemeContext, themes } from './context/theme-context';

function App() {

  const [theme, toggle] = useState({ pallette: themes.dark, isDark: true })

  const toggleTheme = () => theme.isDark ?
    toggle({ pallette: themes.light, isDark: false }) :
    toggle({ pallette: themes.dark, isDark: true });

  return (
    <ThemeContext.Provider value={theme}>
      <div className="App">
        <Header toggleTheme={toggleTheme} />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
