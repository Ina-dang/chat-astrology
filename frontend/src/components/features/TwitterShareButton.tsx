interface TwitterShareButtonProps {
  url: string;
  text: string;
}

const TwitterShareButton: React.FC<TwitterShareButtonProps> = ({ url, text }) => {
  const handleClick = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      text,
    )}&url=${encodeURIComponent(url)}`;
    window.open(twitterUrl, '_blank', 'noopener,noreferrer');
  };
  return (
    <div className="TwitterShareButton">
      <button onClick={handleClick} />
    </div>
  );
};

export { TwitterShareButton };