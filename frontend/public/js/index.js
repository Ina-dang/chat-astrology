// 모바일 환경이 아닐 경우 모바일 사이즈에서 테스트할 수 있도록 설정
{
  const win = top.window,
    handleResize = () => {
      const navi = navigator;
      const desktopPath = '/desktop.html';
      const location = win.location;
      const origin = location.origin;
      const href = location.href;
      const reg = /Android|iPhone|iPad|webOS|BlackBerry/i;
      const isMobile = reg.test(navigator.userAgent) || window.opera;

      if (isMobile) {
        if (href.includes(desktopPath)) {
          location.replace(origin);
        }
      } else {
        if (!href.includes(desktopPath)) {
          location.replace(`${origin}${desktopPath}`);
        }
      }
    };

  win.onresize = handleResize;
  new ResizeObserver(handleResize).observe(win.document.body);
}
