# shell999.github.io
github blog

- React.js
- React Router
- React Redux
- TypeScript
- Vscode

/* 초기설정 */
1. npx create-react-app [프로젝트명] --template typescript
2. cd 프로젝트명
3. npm run build
4. npm install --save-dev gh-pages
5. pakege.json : homepage 추가
 - "homepage": "https://[사용자 이름].github.io",
6. pakege.json : scripts 추가사항
 -  "predeploy": "npm run build",  "deploy": "gh-pages -d build",

7. npm run deploy

8. 깃허브 - settings - pages
 - Branch를 main에서 gh-pages로 변경 후 Save
