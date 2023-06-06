//check and request microphone permission
function checkAndGetMicrophonePermission() {
  if (navigator.permissions && navigator.permissions.query) {
    navigator.permissions
      .query({ name: "microphone" })
      .then(function (permissionsStatus) {
        if (permissionsStatus.state === "grant") {
          console.log("permission to access the microphone is granted");
        } else if (permissionsStatus.state === "prompt") {
          console.log(
            "permission to access the micrphone is prompted (waiting for user decision"
          );
        } else if (permissionsStatus.state === "denied") {
          console.log("permission to access the microphone is denied");
        } else if (permissionsStatus.state === "inactive") {
          console.log("permission to access the microphone is inactive");
        }

        if (permissionsStatus.state !== "granted") {
          requestMicrophonePermission();
        }
      })
      .catch(function (error) {
        console.error("error checking microphone permissions:", error);
      });
  } else {
    console.log(
      "the navigator.permissions api is not supported in this browser"
    );
  }
}

//request microphone permissions
function requestMicrophonePermissions() {
  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then(function (stream) {
        console.log("Microphone permission granted");
      })
      .catch(function (error) {
        console.log("Error requesting microphone: ", error);
      });
  } else {
    console.log("The getUserMedia API is not supported in this browser");
  }
}

window.addEventListener("load", function () {
  checkAndGetMicrophonePermissions();
});

// - when page loads, get permissions for audio devices:
// - if audido device was not enable -> search for device and get permission
// - if audio devices is enabled -> run script to start recording.
