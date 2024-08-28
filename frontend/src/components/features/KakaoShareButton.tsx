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
          title: '딸기 치즈 케익',
          description: '#케익 #딸기 #삼평동 #카페 #분위기 #소개팅',
          imageUrl:
            'http://k.kakaocdn.net/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
        social: {
          likeCount: 286,
          commentCount: 45,
          sharedCount: 845,
        },
        buttons: [
          {
            title: '웹으로 보기',
            link: {
              mobileWebUrl: 'https://developers.kakao.com',
              webUrl: 'https://developers.kakao.com',
            },
          },
          {
            title: '앱으로 보기',
            link: {
              mobileWebUrl: 'https://developers.kakao.com',
              webUrl: 'https://developers.kakao.com',
            },
          },
        ],
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
