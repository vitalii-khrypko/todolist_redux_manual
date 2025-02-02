import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from "./data/state";

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderDOM = (state) => {
    root.render(
        <App state={state} store={store} dispatch={store.dispatch.bind(store)}/>
    );
}

store.subscribe(rerenderDOM);
rerenderDOM(store.getState());


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <App />
// );