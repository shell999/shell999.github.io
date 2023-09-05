# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

<br/>

# CRA(Create-React-App)

## public
### favicon.ico
- 브라우저 탭에 나타나는 아이콘

### mainfest.json
- PWA(Progressive Web Apps)에 필수적으로 포함되는 파일
- short_name : 사용자 홈 화면에서 아이콘 이름으로 사용
- icons : 홈 화면에 추가할 때 사용할 이미지
- start_url : 웹앱 실행시 시작되는 URL 주소
- display : 디스플레이 유형(fullscreen, standalone, browser)
- theme_color : 상단 툴바 색상
- background_color : 화면 배경 색상
- orientation : 화면 방향(landscape, portrait) 강제 지정 가능

### index.html
- 개발한 React 프로젝트를 브라우저에 나타내기 위한 파일
- React는 SPA(Single Page App)이므로 하나의 html 안에서 컴포넌트를 통해 각 페이지를 구분
- id가 root인 src/index.tsx 컴포넌트만을 html에서 불러오고 있다

### robots.txt
- 웹사이트에 웹 크롤러같은 로봇들의 접근을 제어하기 위한 규약

## src

### App.test.tsx
- DOM을 테스트하기 위한 도구
- React Testing Library나 Jest 등 테스트 라이브러리를 사용

### App.tsx
- src/index.tsx 파일에 import 되어 불러와진다.
- 해당 프로젝트와 관련된 Theme, Globalstyle, Router 등을 설정할 수 있다.
- App 컴포넌트 존재

### index.tsx
- App.tsx 안의 App 컴포넌트와 public/index.html을 연결해주는 역할
- ReactDom.createRoot를 통해 root를 생성하고 실질적으로 public/index.tsx 파일을 rendering하도록 설정

### react-app-env.d.ts
- TypeScript 타입 선언을 참조

### reportWebVitals.ts
- React 프로젝트의 성능을 측정하기 위한 파일
- index.tsx에 'reportWebVitals(console.log)', 'reportWebVitals() : 구글 애널리틱스로 보내는 함수' 등으로 사용

### setupTests.ts
- React 프로젝트에서 테스트를 실행하기 위한 설정 파일

<br/>

# Directory

## assets
- image, font
- Used inside components (need Compile)
- Used in index.html is located in publish (need not Compile)

## components
- Reuse component
- Classified into subfolders according to type

## config
- Config file

## constants
- Define common use constants

## hooks
- Custom hook

## pages
- Use react router
- Page components

## services
- API

## store
- Use react redux

## styles
- CSS file

## utils
- Regular expression patterns
- common functions


# UI/UX

## Top Nav
- main page 이동

## Profile
- 소개글

## Category
- 페이지 목록

## Content
- 해당 페이지 내용

## Comment
- 댓글 및 깃허브연동

## Side Nav
- 구글 애드센스
- 상단 이동버튼
- 스크롤 이동시 고정

![alt](./Blog%20UI.PNG)

<br/>