/*function checkWebsite() {
  const targetString = "turkiye.gov.tr/sgk-tescil-ve-hizmet-dokumu";
  if (window.location.href.includes(targetString)) {
    return "Evet";
  } else {
    return "Hayır";
  }
}

const currentUrl = window.location.href;
document.getElementById("result").innerText = checkWebsite() + " - " + currentUrl;


function sendMessageToContentScript() {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { action: "checkUrl" }, function (response) {
      document.getElementById("result").innerText = response.result + " - " + response.url;
    });
  });
}

sendMessageToContentScript();
*/

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "checkUrl") {
    const targetString = "turkiye.gov.tr/sgk-tescil-ve-hizmet-dokumu";
    const currentUrl = window.location.href;
    let result;

    if (currentUrl.includes(targetString)) {
      result = "Evet";
    } else {
      result = "Hayır";
    }

    sendResponse({ result: result, url: currentUrl });
  }
});
