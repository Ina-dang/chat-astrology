import { useEffect } from 'react';

const KakaoShareButton: React.FC = () => {
  useEffect(() => {
    // 카카오톡 SDK 초기화
    if (window.Kakao && !window.Kakao.isInitialized()) {
      window.Kakao.cleanup();
      console.log(import.meta.env.VITE_KAKAO_APP_KEY);
      window.Kakao.init(import.meta.env.VITE_KAKAO_APP_KEY);
    }
  }, []);

  const handleShare = () => {
    if (window.Kakao) {
      // 카카오톡 공유 기능 호출
      window.Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title: 'GPT가 말아주는 사주🍶&타로🍺',
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
    <button className="KakaoShareButton" onClick={handleShare}>
      <img
        src="https://developers.kakao.com/assets/img/about/logos/kakaotalksharing/kakaotalk_sharing_btn_medium.png"
        alt="카카오톡 공유 보내기 버튼"
      />
    </button>
  );
};

export { KakaoShareButton };
