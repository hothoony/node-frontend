
## 프로젝트 생성
```bash
npx create-react-app react-app-01 --template typescript
```

## 패키지 설치
```bash
yarn add react-router-dom
yarn add tailwindcss

# axios
# dotenv
# cross-env
# recoil
```

## tailwindcss 설정

### tailwind.config.js 파일 생성
```bash
npx tailwindcss init
```
```javascript
// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### src/css/tailwind.css 파일 생성
```css
/* src/css/tailwind.css */

@tailwind base;
@tailwind components;
@tailwind utilities;
```

### index.tsx 수정
```javascript
import './css/tailwind.css';
```

### tailwindcss 적용
```javascript
<div className="text-blue-600">
    Home
</div>
```

## react-router-dom v5 v6 차이점
- 라우팅 구성: Switch > Routes
- 라우트 정의: component > element
- 중첩 라우팅: 부모 Route 내에 자식 Route > 부모 Route의 element 내에 자식 Route
- 리다이렉션: Redirect > Navigate
- 네비게이션: useHistory > useNavigate
- 쿼리 스트링: useLocation > useSearchParams
- 중첩 라우트 렌더링: 없음 > Outlet
