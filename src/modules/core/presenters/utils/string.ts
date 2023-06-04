/* 
  This file contains functions that are used to manipulate strings.
  @example
  const url = replaceUrl('/users/[id]', { id: '1' });
  @returns /users/1
*/
export const replaceUrl = (url: string, params: Record<string, string>) => {
  let newUrl = url;
  Object.keys(params).forEach((key) => {
    newUrl = newUrl.replace(`[${key}]`, params[key]);
  });
  return newUrl;
};
