import React, { useState } from 'react';
import Dashboard from './containers/Dashboard';
// styled components
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/global';
import { themes, themePalletes } from './styles/theme';

function App() {
  const [activeTheme, setActiveTheme] = useState('lightTheme');

  const onSwitchColors = (e) => {
    setActiveTheme(e.target.id);
  };

  return (
    <ThemeProvider theme={themes.find((item) => item.name === activeTheme)}>
      <GlobalStyles />
      <Dashboard
        themePalletes={themePalletes}
        activeTheme={activeTheme}
        onSwitchColors={onSwitchColors}
      />
    </ThemeProvider>
  );
}

export default App;
