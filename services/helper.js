const getFullUrl = (url) => {
  if (url.startsWith("http")) {
    return url;
  }
  if (!url.startsWith("/")) {
    url = "/" + url;
  }
  return `http://localhost:3000` + url;
};
const serviceHelper = { getFullUrl };
export default serviceHelper;
