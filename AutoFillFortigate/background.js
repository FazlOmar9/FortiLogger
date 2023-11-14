chrome.browserAction.onClicked.addListener(function(tab) {
  if(tab.url.startsWith('http://192.168.55.253') || tab.url.startsWith('https://192.168.55.253')) {
    chrome.tabs.executeScript(tab.id, {file: "contents.js"});
  }
});