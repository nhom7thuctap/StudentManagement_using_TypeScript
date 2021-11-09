import cityApi from 'api/cityApi';
import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';

function App() {
  useEffect(() => {
    cityApi.getAll().then((response) => console.log(response));
  });

  return (
    <div className="App">
      <Switch>
        <Route path="/login"></Route>
        <Route path="/admin"></Route>
        <Route></Route>
      </Switch>
    </div>
  );
}

export default App;
