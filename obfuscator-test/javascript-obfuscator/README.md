# javascript obfuscator

## 개요
- react typescript 프로젝트를 만들고
- `.js`, `.ts`, `.jsx`, `.tsx` 파일을 `javascript-obfuscator` 로 난독화를 테스트한다
- 난독화한 소스코드를 소스레벨에서 사용 가능한지 확인한다

## 프로젝트 만들기
#### typescript 프로젝트 만들기
```bash
npx create-react-app myapp01 --template typescript
```

#### npm 패키지 설치
```bash
# typescript compiler 설치1
$ sudo npm install tsc -g

# javascript-obfuscator 설치
$ npm install -D javascript-obfuscator -g
```
- 기타
```bash
npm install react-rnd
npm install recoil
```

## javascript-obfuscator
- javascript 파일만 난독화 가능 (.js)
- `.ts`, `.jsx`, `.tsc` 는 난독화 불가
- `.ts` 파일은 `.js` 파일로 변환 후 난독화 가능

## javascript-obfuscator 로 난독화하기

#### `.ts` 파일은 `.js` 로 컴파일한 후에 난독화한다
```bash
# ./src/utils/Util.js 파일이 생성된다
$ tsc ./src/utils/Util.ts
```

#### javascript-obfuscator 로 난독화하기
```bash
$ javascript-obfuscator ./src/utils/Util.js --output ./src/utils/Util-out.js --config ../js-obfuscator-config.js
```

#### javascript-obfuscator 설정 파일
```javascript
// js-obfuscator-config.js
// tested
module.exports =
{
    compact: false, // 한줄로 처리
    controlFlowFlattening: true,
    controlFlowFlatteningThreshold: 1,
    deadCodeInjection: true,
    deadCodeInjectionThreshold: 1,
    debugProtection: false, //
    debugProtectionInterval: 0, //
    disableConsoleOutput: false, //
    identifierNamesGenerator: 'hexadecimal',
    log: false,
    numbersToExpressions: true,
    renameGlobals: false,
    selfDefending: false, //
    simplify: true,
    splitStrings: true,
    splitStringsChunkLength: 5,
    stringArray: true,
    stringArrayCallsTransform: true,
    stringArrayEncoding: [], //
    stringArrayIndexShift: true,
    stringArrayRotate: true,
    stringArrayShuffle: true,
    stringArrayWrappersCount: 5,
    stringArrayWrappersChainedCalls: true,    
    stringArrayWrappersParametersMaxCount: 5,
    stringArrayWrappersType: 'function',
    stringArrayThreshold: 1,
    transformObjectKeys: false, //
    unicodeEscapeSequence: false, //
    reservedStrings: [
        '\w*', // 난독화 제외
    ],
}
```

#### UI 가 들어있는 파일은 난독화가 안된다
```bash
# error
$ javascript-obfuscator ./src/components/Greeting1.jsx --output ./src/components/Greeting1-out.jsx --config ../js-obfuscator-config.js
$ javascript-obfuscator ./src/components/Greeting2.tsx --output ./src/components/Greeting2-out.tsx --config ../js-obfuscator-config.js
$ javascript-obfuscator ./src/components/Greeting3.js --output ./src/components/Greeting3-out.js --config ../js-obfuscator-config.js
$ javascript-obfuscator ./src/components/Greeting4.ts --output ./src/components/Greeting4-out.ts --config ../js-obfuscator-config.js
```

## 난독화한 소스코드로 테스트

#### `tsconfig.json` 수정
```json
{
  "compilerOptions": {
    "allowImportingTsExtensions": true, // .ts 파일을 임포트하기 위해서 추가
  },
}
```

#### 난독화한 파일 `Util-out.js` 를 임포트해서 테스트해본다
- `Util.ts` 소스코드 원본
- `Util.js` .ts 를 컴파일한 파일
- `Util-out.js` 난독화한 파일
```javascript
// src/components/GreetingEx.tsx

// import greeting from '../utils/Util'; // .js
// import greeting from '../utils/Util.ts'; // .ts
import greeting from '../utils/Util-out'; // .js
```
