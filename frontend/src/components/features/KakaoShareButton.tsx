import { useEffect } from 'react';

const KakaoShareButton = () => {
  useEffect(() => {
    // 카카오톡 SDK 초기화
    if (window.Kakao && !window.Kakao.isInitialized()) {
      window.Kakao.cleanup();
      window.Kakao.init(import.meta.env.VITE_KAKAO_APP_KEY);
    }
  }, []);

  const handleShare = () => {
    if (window.Kakao) {
      // 카카오톡 공유 기능 호출
      window.Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title: '월담 | 사주·타로·포춘쿠키',
          description: '내 포춘쿠키 결과 공유',
          imageUrl:
            'http://k.kakaocdn.net/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
      });
    }
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
