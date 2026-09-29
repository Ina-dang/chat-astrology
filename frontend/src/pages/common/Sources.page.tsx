import { Footer, Headers, Sections } from '../../components';

const SourcesPage = () => (
  <main className="Pages PrivacyPage">
    <Headers title="계산·카드 출처" />
    <Sections>
      <h2>사주 명식</h2>
      <p>양력·음력 변환과 사주팔자 계산은 MIT 라이선스의 <a href="https://github.com/6tail/lunar-typescript" target="_blank" rel="noreferrer">lunar-typescript 1.8.6</a>을 사용합니다. 결과 화면에는 계산 엔진과 버전을 함께 표시합니다.</p>
      <p>입력한 민간시각을 기준으로 계산하며 출생지에 따른 진태양시 보정과 학파별 야자시 구분은 적용하지 않습니다. 이런 기준이 중요한 경우 전문 만세력과 함께 확인해 주세요.</p>

      <h2>타로 카드</h2>
      <p>리딩은 메이저·마이너 아르카나를 포함한 78장 Rider–Waite–Smith 덱을 사용합니다. 카드 순서와 정·역방향은 브라우저에서 한 번 결정한 뒤 결과까지 유지됩니다.</p>
      <p>한국어 키워드는 MIT 라이선스의 <a href="https://github.com/fortune-org/fortune-platform" target="_blank" rel="noreferrer">Fortune Platform</a> 자료를 바탕으로 다듬었습니다. 카드 이미지 출처는 <a href="https://commons.wikimedia.org" target="_blank" rel="noreferrer">Wikimedia Commons</a>이며, 1909년 Rider–Waite–Smith 이미지의 공개 자료를 사용합니다.</p>

      <h2>검증 범위</h2>
      <p>자동 검증은 양력, 음력, 윤달, 출생시간 미상, 잘못된 날짜와 미래 날짜, 78장 카드 데이터와 정·역방향을 다룹니다. 명리 해석은 학파에 따라 달라질 수 있으며 외부 명리 전문가의 전수 감수는 아직 완료되지 않았습니다.</p>
      <p><a href="https://github.com/Ina-dang/chat-astrology/blob/main/THIRD_PARTY_NOTICES.md" target="_blank" rel="noreferrer">전체 오픈소스 고지 보기</a></p>
    </Sections>
    <Footer />
  </main>
);

export { SourcesPage };
