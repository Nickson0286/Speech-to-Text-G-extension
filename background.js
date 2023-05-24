//this file will run in background an will process the data. here we will use command to request for microphone permission and record and process the audio file.

chrome.commands.onCommand.addListener(() => {
  console.log("command was pressed");
});
