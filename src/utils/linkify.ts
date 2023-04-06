export const linkify = (text: string) => {
  const urlRegex = /(https?:\/\/[^\s]+)/g;

  return text.replace(urlRegex, function (url) {
    const formattedUrl = url.length >= 37 ? url.slice(0, 37) + '...' : url;

    return '<a href="' + url + '" target="_blank">' + formattedUrl + '</a>';
  });
};
