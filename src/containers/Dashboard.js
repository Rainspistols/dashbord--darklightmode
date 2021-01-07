import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
// components
import Main from '../components/Main/Main';
import Sidebar from '../components/Sidebar/Sidebar';

function Dashboard({ themePalletes, activeTheme, onSwitchColors }) {
  return (
    <div>
      <Router>
        <Sidebar
          themePalletes={themePalletes}
          activeTheme={activeTheme}
          onSwitchColors={onSwitchColors}
        />
      </Router>
      <Main />
    </div>
  );
}

export default Dashboard;
