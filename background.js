chrome.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
  if (request.action === "checkUrl") {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const currentUrl = tabs[0].url;
      const targetString = "turkiye.gov.tr/sgk-tescil-ve-hizmet-dokumu";
      let result;

      if (currentUrl.includes(targetString)) {
        result = "Evet";
      } else {
        result = "Hayır";
      }

      sendResponse({ result: result, url: currentUrl });
    });
    return true;
  }
});
