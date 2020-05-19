import React, { useState } from 'react';
import { BrowserRouter, HashRouter, hashHistory, Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import styled from 'styled-components'

import LoginGird from './views/LoginGird'
import HomeGrid from './views/home/index'


const AppGrid = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  .App-logo {
    height: 40vmin;
    pointer-events: none;
  }

  @media (prefers-reduced-motion: no-preference) {
    .App-logo {
      animation: App-logo-spin infinite 20s linear;
    }
  }

  .App-header {
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  }

  .App-link {
    color: #61dafb;
  }

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`

function App() {
  return (
    <AppGrid className="App">
      <BrowserRouter>
          <Switch>
            <Route path="/home" component={HomeGrid} />
            <Route path="/login" component={LoginGird} />
            <Route path="/" component={HomeGrid} />
          </Switch>
      </BrowserRouter>
    </AppGrid>
  );
}

export default App;
