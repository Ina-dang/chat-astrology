import { Footer, Headers, Sections } from '../../components';

const PrivacyPage = () => (
  <main className="Pages PrivacyPage">
    <Headers title="개인정보·서비스 안내" />
    <Sections>
      <p className="PrivacyUpdated">마지막 업데이트: 2026년 9월 29일</p>

      <h2>월담이 다루는 정보</h2>
      <p>사주 명식 계산을 위해 입력한 생년월일과 출생시간은 월담 API로 전송됩니다. 월담은 이 값을 별도 데이터베이스에 저장하지 않습니다.</p>
      <p>입력값, 선택한 타로 카드, 생성된 AI 해석은 현재 탭의 세션 저장소에 보관됩니다. 탭을 닫거나 브라우저 저장 데이터를 지우면 삭제할 수 있습니다.</p>

      <h2>AI 해석</h2>
      <p>AI 종합 해석을 요청할 때 OpenAI에는 생년월일 원문과 이름 대신 계산된 사주 기둥, 오행, 십성, 출생시간 확인 여부만 전달합니다. API 요청에는 저장 비활성화 설정을 사용합니다.</p>
      <p>OpenAI는 기본 설정에서 API 입력과 출력을 모델 학습에 사용하지 않지만, 악용 탐지 로그를 최대 30일 보관할 수 있습니다.</p>
      <a href="https://platform.openai.com/docs/models/default-usage-policies-by-endpoint" target="_blank" rel="noreferrer">OpenAI API 데이터 사용 정책</a>

      <h2>외부 서비스</h2>
      <ul>
        <li>Vercel은 서비스 호스팅 과정에서 접속 IP, 기기·사용 정보와 진단 로그를 처리할 수 있습니다.</li>
        <li>카카오 공유 기능과 광고 영역을 사용할 때 카카오 정책에 따른 정보가 처리될 수 있습니다.</li>
        <li>월담은 현재 별도의 방문자 분석 도구를 사용하지 않습니다.</li>
      </ul>
      <p className="PrivacyLinks">
        <a href="https://vercel.com/legal/privacy-notice" target="_blank" rel="noreferrer">Vercel 개인정보 처리방침</a>
        <a href="https://privacy.kakao.com/policy" target="_blank" rel="noreferrer">카카오 개인정보 처리방침</a>
        <a href="https://adfit.kakao.com/info" target="_blank" rel="noreferrer">카카오 AdFit 안내</a>
      </p>

      <h2>공유와 이용 안내</h2>
      <p>결과는 공유 버튼을 직접 누를 때만 외부 서비스로 전달됩니다. 공유 요약에는 생년월일을 넣지 않습니다.</p>
      <p>사주와 타로는 전통적 상징을 바탕으로 한 자기 성찰용 참고 정보입니다. 의료·법률·재정 판단이나 전문가 상담을 대신하지 않습니다.</p>

      <h2>문의</h2>
      <p><a href="https://github.com/Ina-dang/chat-astrology/issues" target="_blank" rel="noreferrer">GitHub 이슈</a>에서 오류나 개인정보 관련 문의를 남길 수 있습니다.</p>
    </Sections>
    <Footer />
  </main>
);

export { PrivacyPage };
