interface ClipboardShareButtonProps {
  text: string;
  url: string;
}

const ClipboardShareButton: React.FC<ClipboardShareButtonProps> = ({ text, url }) => {
  const handleCopyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(`${text}\n${url}`);
      alert('결과 요약과 링크가 복사되었습니다.');
    } catch {
      alert('링크를 복사하지 못했습니다. 브라우저 주소창에서 직접 복사해 주세요.');
    }
  };

  return (
    <button
      aria-label="결과 요약과 링크 복사"
      className="ShareButton ClipboardShareButton"
      type="button"
      onClick={handleCopyToClipboard}
    />
  );
};

export { ClipboardShareButton };
