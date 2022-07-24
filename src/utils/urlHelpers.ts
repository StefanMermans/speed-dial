export const formatUrl = (url: string): string => {
  return `${process.env.REACT_APP_BACKEND_URL}${url}`;
};
