import { ClipboardShareButton, KakaoShareButton, TwitterShareButton } from '../features';

const SharedButtons = () => {
  const propsTwitterShareButton = {
    url: location.href,
    text: '월담 | 사주·타로·포춘쿠키',
  };
  return (
    <article className="SharedButtons">
      <h4>결과를 공유하고 싶다면?</h4>
      <div className="ShareButtons">
        <KakaoShareButton />
        <TwitterShareButton {...propsTwitterShareButton} />
        <ClipboardShareButton />
      </div>
    </article>
  );
};

export { SharedButtons };
