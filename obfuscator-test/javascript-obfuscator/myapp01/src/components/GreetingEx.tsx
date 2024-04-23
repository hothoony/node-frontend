import React from 'react';
import { useCallback, useState } from 'react';
import { Rnd } from 'react-rnd';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

// import greeting from '../utils/Util'; // .js
// import greeting from '../utils/Util.ts'; // .ts
import greeting from '../utils/Util-out'; // .js

type GreetingExProps = {
    name: string;
};


// const GreetingEx: React.FC<GreetingExProps> = ({ name }) => (
//     <div>{greeting(name)}</div>
// );
// export default GreetingEx;

export default function GreetingEx({
    name,
}: GreetingExProps) {
    return (
        <div>GreetingEx = {greeting(name)}</div>
    );
};
