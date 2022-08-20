import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Homepage from './Pages/Homepage';
const App = () => {
  return ( 
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Homepage}/>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;