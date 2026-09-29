import { useEffect } from 'react';

const KakaoShareButton = () => {
  useEffect(() => {
    const appKey = import.meta.env.VITE_KAKAO_APP_KEY;
    if (window.Kakao && appKey && !window.Kakao.isInitialized()) {
      window.Kakao.init(appKey);
    }
  }, []);

  const handleShare = () => {
    if (window.Kakao?.isInitialized()) {
      window.Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title: '월담 | 사주·타로·포춘쿠키',
          description: '내 포춘쿠키 결과 공유',
          imageUrl:
            'https://k.kakaocdn.net/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
      });
      return;
    }

    alert('카카오톡 공유를 준비하지 못했습니다. 링크 복사를 이용해 주세요.');
  };

  return (
    <button
      aria-label="카카오톡으로 결과 공유"
      className="KakaoShareButton ShareButton"
      type="button"
      onClick={handleShare}
    />
  );
};

export { KakaoShareButton };
