import './css/styles.css';
import theme from './styles/theme'
import { useSelector } from 'react-redux';
import React ,{useState,useEffect} from 'react';

import Counter from './components/counter'

import PersistentDrawerLeft from './layouts/drawer'
import {ThemeProvider,createMuiTheme} from '@material-ui/core/styles'



function App() {

  return (
    <React.Fragment>
    <ThemeProvider theme={createMuiTheme(theme)}>
    <PersistentDrawerLeft/>
      { (useSelector(state => state.sessions.isLoggedIn)) ? <h1>authenticated welcome</h1> : <h1> not authenticated</h1>}

      

    </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
