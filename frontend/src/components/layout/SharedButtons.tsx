import { ClipboardShareButton, KakaoShareButton, TwitterShareButton } from '../features';

const SharedButtons = () => {
  const propsTwitterShareButton = {
    url: location.href,
    text: 'GPT가 말아주는 사주🍶&타로🍺',
  };
  return (
    <article className="SharedButtons">
      <h4>결과를 공유하고싶다면?</h4>
      <div className="ShareButtons">
        <KakaoShareButton />
        <TwitterShareButton {...propsTwitterShareButton} />
        <ClipboardShareButton />
      </div>
    </article>
  );
};

export { SharedButtons };
