chrome.commands.onCommand.addListener(function (command) {
  if (command === "accessMicrophone") {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { permission: "microphone" });
    });
  }
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.permission === "microphone") {
    chrome.tabs.create({ url: "microphone-access.html" });
  }
});
