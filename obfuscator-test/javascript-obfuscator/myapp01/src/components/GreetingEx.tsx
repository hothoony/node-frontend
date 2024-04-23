import React from 'react';
// import greeting from '../utils/Util'; // .js
import greeting from '../utils/Util.ts'; // .ts
// import greeting from '../utils/Util-out'; // .js

type GreetingExProps = {
    name: string;
};

// const hello = (name: string) => {
//     return greeting(name);
// }

const GreetingEx: React.FC<GreetingExProps> = ({ name }) => (
    // <div>hello(name)</div>
    <div>{greeting(name)}</div>
);

export default GreetingEx;
