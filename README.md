# chat-astrology

## chat GPT를 활용한 운세보기 사이트

- 초기는 바닐라 + express로 제작
- 배포는 page cloudflare와 aws lambda를 통해 진행 하다가 중단
- 현재 리액트 + 타입스크립트로 고도화 진행 중 (2024.08 ~)
- 리액트 + 타입스크립트 이후에는 넥스트로 한번 더 고도화를 할 계획
- 스타일은 시간날 때 쫌쫌따리 수정 중!

## 운영주소

- [운세보는 유우리 (구버전-api통신불가)](https://chat-astrology-cjp.pages.dev/)
- [🔮 GPT가 말아주는 사주&타로 🔮 (모바일사용권장)](https://chat-astrology.vercel.app)

## 앞으로 해야 할 일

- [ ] 포춘쿠키 결과 공유 URL이 배포 환경과 모바일·SNS에서 정상적으로 열리는지 점검
- [ ] 계산된 사주 명식을 OpenAI API와 연동해 근거 기반 종합 해석 제공

## 프로젝트 구조

```
📦chat-astrology
 ┣ 📂api
 ┃ ┣ 📜.env
 ┃ ┣ 📜.gitignore
 ┃ ┣ 📜datas.js
 ┃ ┣ 📜index.js
 ┃ ┣ 📜package-lock.json
 ┃ ┣ 📜package.json
 ┃ ┗ 📜tools.js
 ┣ 📂frontend
 ┃ ┣ 📂public
 ┃ ┣ 📂src
 ┃ ┃ ┣ 📂assets
 ┃ ┃ ┃ ┣ 📂images
 ┃ ┃ ┃ ┣ 📂locales
 ┃ ┃ ┃ ┣ 📂styles
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┣ 📂features
 ┃ ┃ ┃ ┣ 📂layout
 ┃ ┃ ┣ 📂pages
 ┃ ┃ ┃ ┣ 📂common
 ┃ ┃ ┃ ┣ 📂fortune
 ┃ ┃ ┃ ┣ 📂saju
 ┃ ┃ ┣ 📂types
 ┃ ┃ ┣ 📜App.tsx
 ┃ ┃ ┣ 📜global.d.ts
 ┃ ┃ ┣ 📜main.tsx
 ┃ ┃ ┣ 📜Router.tsx
 ┃ ┃ ┗ 📜vite-env.d.ts
 ┗ 📜README.md
```
