export const getUrlMap = (value: string) => {
  let url = "";
  const arrayMain = value.split("src");
  if (arrayMain.length > 1) {
    url = value.split("src")[1];
    const arrayOthers = url.split('"');
    if (arrayOthers.length > 1) {
      url = arrayOthers[1];
    }
  }
  return url;
};
