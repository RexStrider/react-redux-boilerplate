import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// The provider is just a component takes a store prop
// and gives all of our other components 
// access to that store when they need it
import { Provider } from 'react-redux';

// We need the creatStore function to house all of our state
import { createStore } from 'redux';

import reducers from './reducers';

const store = createStore(reducers);


ReactDOM.render(
    <Provider store={store}>
       <App />
    </Provider>
 ,
    document.getElementById("root")
 );
