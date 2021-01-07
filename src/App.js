import React, { useState } from 'react';
import Dashboard from './containers/Dashboard';
// styled components
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/global';
import { lightTheme, darkTheme, themePalletes } from './styles/theme';

function App() {
  const [activeTheme, setActiveThem] = useState('lightTheme');

  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <Dashboard themePalletes={themePalletes} />
    </ThemeProvider>
  );
}

export default App;
