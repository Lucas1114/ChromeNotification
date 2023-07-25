// background.js
// here we check if we are on the Google home page or not




// Listen for messages from the content script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "showNotification") {
    showNotification();
    chrome.action.openPopup();
  }
});

// Function to show the notification
function showNotification() {
  let options = {
    type: 'basic',
    title: 'Basic Notification',
    message: 'This is a Basic Notification',
    iconUrl: '111.png'
  };

  chrome.notifications.create(options);
}




// basic.addEventListener('click', () => {
//   let options = {
//     type: 'basic',
//     title: 'Basic Notification',
//     message: 'This is a Basic Notification',
//     iconUrl: 'icon.png'
//   };
//   chrome.notifications.create(options);
// });

  
