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

- [x] 포춘쿠키 결과 공유 URL이 배포 환경과 모바일·SNS에서 정상적으로 열리는지 점검
- [x] 계산된 사주 명식을 OpenAI API와 연동해 근거 기반 종합 해석 제공
  - [x] 벡터 DB/RAG 없이 계산된 명식과 로컬 오행 안내만 `gpt-5-mini`에 전달
  - [x] 사용자가 요청할 때만 호출하고 같은 탭의 동일 명식 결과를 재사용해 API 비용 절감
  - [x] Vercel Production 환경에 `OPENAI_API_KEY` 등록
  - [x] 운영 생성 확인: `gpt-5-mini-2025-08-07`, 입력 485토큰, 출력 378토큰
  - 선택 설정: `OPENAI_MODEL` 미등록 시 `gpt-5-mini` 사용
- [x] AI 비용·오남용 방어
  - 동일 명식 6시간 캐시, Vercel 인스턴스별 IP당 시간당 5회 제한
  - 요청 상태·처리 시간·토큰만 구조화 로그로 남기고 생년월일과 IP는 기록하지 않음
- [x] 개인정보·서비스 안내와 계산·카드 출처 페이지 공개
- [x] 사주·타로·포춘쿠키 결과를 개인정보 없이 요약 공유
- [x] 타로 78장 정·역방향 데이터와 이미지 출처 통일
  - 카드 이미지는 Wikimedia Commons의 Rider–Waite–Smith 자료 사용
  - 로컬 대용량 메이저 카드 22장을 번들에서 제외해 배포 자산 약 58MB 절감
- [x] 모바일·폴더블 타로 선택 화면 개선
  - 겹쳐 펼치기, 키보드 포커스, 3~8열 간단 보기, 모션 줄이기 설정 지원
- [x] 접근성 기본 보강
  - 본문 바로가기, 44px 이상 터치 영역, 상태·오류 알림, 키보드 포커스 지원
- [x] 검색·공유 메타데이터, 사이트맵, 앱 매니페스트, 오프라인 셸, `/api/health` 추가
- [ ] 출시 전 수동 확인
  - Galaxy Z Fold 실제 기기에서 접힘·펼침 전환과 카드 선택 상태 유지 확인
  - 배포 후 카카오톡·X 공유 미리보기 캐시 확인
  - 명리 전문가에게 학파별 야자시·진태양시 기준과 해석 문구 감수
- [ ] 아래 조건 중 하나가 충족되면 벡터 DB/RAG 도입 재검토
  - 검수된 사주 해석 자료가 수백~수천 개 단위로 증가
  - 운영 중 해석 문서를 자주 추가하거나 수정해야 함
  - 고전 문헌 등 원문 출처를 검색하고 함께 제시해야 함
  - 일간·오행·십성 기반의 단순 조건 매칭으로 관련 해석을 고르기 어려워짐

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
