const getApiEndpoint = (path: string) => {
  const baseUrl = import.meta.env.VITE_API_BASE_URL ?? (import.meta.env.PROD ? '' : 'http://localhost:3000');

  return `${baseUrl}/api/${path}`;
};

export { getApiEndpoint };
