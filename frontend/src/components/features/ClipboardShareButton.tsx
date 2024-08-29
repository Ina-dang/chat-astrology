const ClipboardShareButton = () => {
  const handleCopyToClipboard = () => {
    navigator.clipboard
      .writeText(location.href)
      .then(() => alert('링크가 클립보드에 복사되었습니다!'))
      .catch((error) => console.error('클립보드 복사 실패:', error));
  };

  return (
    <button className="ClipboardShareButton" onClick={handleCopyToClipboard}>
      링크 복사하기
    </button>
  );
};

export { ClipboardShareButton };
