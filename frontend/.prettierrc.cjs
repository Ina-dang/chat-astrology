/**
 * @name: .pretteierrc.js
 * @description: Prettier는 코드를 읽어들여서 사용자 옵션에 따라 코드를 다시 포맷팅하는 "코드 포맷터" 입니다.
 * @version: 1.0
 */
module.exports = {
  arrowParens: 'always', // 기본값
  bracketSpacing: true, // 기본값. true인 경우 {foo:bar}는 { foo: bar }로 변환됨
  printWidth: 100,
  quoteProps: 'as-needed',
  semi: true, // 일부 코드에서 라인의 시작 부분에 세미 콜론 추가
  singleQuote: true,
  tabWidth: 2, // 기본값
  trailingComma: 'all', // 기본값
  useTabs: false, // 기본값
};
