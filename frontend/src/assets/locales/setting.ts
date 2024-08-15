// index.ts 파일의 내용
import { ko } from './ko';

// 언어 코드에 따라 적절한 언어 파일을 가져오는 함수
const getLanguageData = (langCode: string) => {
  switch (langCode) {
    case 'ko':
      return ko;
    default:
      return ko; // 기본 언어로 한국어를 사용합니다.
  }
};

// 사용자 언어 확인
const lang = (localStorage.getItem('Lang') || navigator.language || 'ko')
  .toLowerCase()
  .split('-')[0];

// 사용자 언어에 맞는 언어 데이터 가져오기
const languageData = getLanguageData(lang);

// 지역화 문자열
const LOCALES = Object.freeze(languageData);

export { LOCALES };
