export const downloadFileFromUrl = (url: string, defaultFileName: string = 'shalini-naryanan') => {
  const fileName = url.split('/').pop() || defaultFileName;

  const aTag = document.createElement('a');
  aTag.href = url;
  aTag.setAttribute('download', fileName);
  aTag.setAttribute('target', '_blank');
  document.body.appendChild(aTag);
  aTag.click();
  aTag.remove();
};

export const openLinkInNewTab = (url: string) => {
  window.open(url, '_blank')?.focus();
};
