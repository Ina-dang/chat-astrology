const getApiEndpoint = (path: string) => {
  const baseUrl = import.meta.env.PROD ? '' : 'http://localhost:3000';

  return `${baseUrl}/api/${path}`;
};

export { getApiEndpoint };
