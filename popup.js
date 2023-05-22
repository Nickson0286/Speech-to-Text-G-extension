document.addEventListener("DOMContentLoaded", function () {
  const requestPermissionButton = document.getElementById(
    "request-permission-button"
  );

  requestPermissionButton.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { permission: "microphone" });
    });
  });
});
