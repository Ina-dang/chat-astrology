module.exports = {
  apps: [
    {
      /* 개발 환경용 서버 */
      autorestart: false,
      instances: 1, // 단일 쓰레드
      name: 'saju-taro-with-gpt-front-dev',
      script: 'react-scripts start',
      watch: false,
      env_development: {
        NODE_ENV: 'development',
      },
    },
    {
      /* 배포 환경용 서버 */
      autorestart: true,
      exec_mode: 'cluster',
      instances: 1,
      merge_logs: true,
      name: 'saju-taro-with-gpt-front-prod',
      script: 'serve',
      watch_delay: 1000,
      env: {
        NODE_ENV: 'production',
        PM2_SERVE_PATH: './dist',
        PM2_SERVE_PORT: 5174,
        PM2_SERVE_SPA: 'true',
      },
    },
  ],
};