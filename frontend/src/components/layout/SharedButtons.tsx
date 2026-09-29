import { ClipboardShareButton, KakaoShareButton, TwitterShareButton } from '../features';

interface SharedButtonsProps {
  text?: string;
  title?: string;
  url?: string;
}

const SharedButtons: React.FC<SharedButtonsProps> = ({
  text = '월담에서 나의 운세를 확인해 보세요.',
  title = '월담 | 사주·타로·포춘쿠키',
  url = location.href,
}) => {
  return (
    <article className="SharedButtons">
      <h4>결과 공유</h4>
      <p>개인정보를 뺀 요약과 다시 보기 링크를 보냅니다.</p>
      <div className="ShareButtons">
        <KakaoShareButton text={text} title={title} url={url} />
        <TwitterShareButton text={text} url={url} />
        <ClipboardShareButton text={text} url={url} />
      </div>
    </article>
  );
};

export { SharedButtons };
