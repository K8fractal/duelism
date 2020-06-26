import React, { useState } from 'react';
import ReactDOM from 'react-dom';

interface Props {
    name:string
}

export const Counter = ({name}:Props):JSX.Element => {
    const [value,setValue] = useState(0);

    return <>
        <div>{name}: {value}</div>
        <div><button onClick = {()=> setValue(value+1)}>Increase</button><button onClick = {()=> setValue(value-1)}>Decrease</button></div>
        </>;
}