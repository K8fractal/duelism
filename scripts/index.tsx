import React from 'react';
import ReactDOM from 'react-dom';
import { Counter } from './counter';




ReactDOM.render(
    <>
        <div>Hello world</div>
        <Counter name = "cats"/>
        <Counter name = "trees"/>
    </>
    ,document.getElementById("main")
);