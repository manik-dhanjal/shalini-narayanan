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

// Gatsby's <Link> only handles pages of this site; external urls and static files need a plain <a>
export const isInternalLink = (url: string) =>
  url.startsWith('/') && !url.startsWith('//') && !url.startsWith('/files/');
