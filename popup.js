async function checkUrl() {
    return new Promise((resolve) => {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        const currentUrl = tabs[0].url;
        const targetString = "turkiye.gov.tr/sgk-tescil-ve-hizmet-dokumu";
        let result;
  
        if (currentUrl.includes(targetString)) {
          result = "Evet";
        } else {
          result = "Hayır";
        }
  
        resolve({ result: result, url: currentUrl });
      });
    });
  }
  
  async function init() {
    try {
      const response = await checkUrl();
      document.getElementById("result").innerText = response.result + " - " + response.url;
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
  init();
  