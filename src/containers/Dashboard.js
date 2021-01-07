import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// components
import Main from '../components/Main/Main';
import Sidebar from '../components/Sidebar/Sidebar';

function Dashboard({themePalletes}) {
  return (
    <div>
      <Router>
        <Sidebar themePalletes={themePalletes}/>
      </Router>
      <Main />
    </div>
  );
}

export default Dashboard;
