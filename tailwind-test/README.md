
## vscode 플러그인 설치
- `PostCSS Language Support` 플러그인을 설치한다

## `tailwindcss` 개요
- 유틸리티 클래스
```bash
in.css (src file) -->> tailwind -->> out.css (public file)
```

## `tailwindcss` 설치하기

### `tailwindcss` 설치
```bash
npm install -D tailwindcss
# npm install tailwindcss
```

### `tailwind.config.js` 파일
- ### `tailwind.config.js` 파일을 생성한다
```bash
npx tailwindcss init
```
- ### `tailwind.config.js` 파일 내용을 수정한다
```javascript
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

## `tailwindcss` 사용하기

### in.css 파일을 만든다
```bash
# src/css/in.css

@tailwind base;
@tailwind components;
@tailwind utilities;
```

### in.css 파일을 빌드한다
```bash
# public/css/out.css 파일이 생성된다
npx tailwindcss -i ./src/css/in.css -o ./public/css/out.css
```


## yarn 으로 css 빌드하기
- ### script 에 css 명령을 추가한다
```json
// package.json

  "scripts": {
    "css": "tailwindcss build src/css/in.css -o src/css/out.css",
    // "css": "tailwindcss build src/css/in.css -o public/css/out.css",
  },
```
- ### yarn 명령으로 css 를 빌드한다
```bash
yarn css
```
