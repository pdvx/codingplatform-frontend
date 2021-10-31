const getFullUrl = (url) => {
  if (url.startsWith("http")) {
    return url;
  }
  if (!url.startsWith("/")) {
    url = "/" + url;
  }
  return `${process.env.NEXT_API_URL}` + url;
};

export default serviceHelper = { getFullUrl };
