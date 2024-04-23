import React from 'react';

// Props 타입 정의
interface GreetingProps {
  name: string;
}

// 함수형 컴포넌트 정의
const Greeting2: React.FC<GreetingProps> = ({ name }) => {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>This is a simple example of a TypeScript React component</p>
    </div>
  );
};

export default Greeting2;