// background.js
// here we check if we are on the Google home page or not


chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete') {
    setPopupForTab(tab);
  }
});

chrome.tabs.onActivated.addListener((activeInfo) => {
  chrome.tabs.get(activeInfo.tabId, (tab) => {
    setPopupForTab(tab);
  });
});


function setPopupForTab(tab) {
  if (tab.url.includes('www.google.com')) {
    chrome.action.setPopup({ tabId: tab.id, popup: 'popup.html' });
  } else {
    chrome.action.setPopup({ tabId: tab.id, popup: 'popup1.html' });
  }
}






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

  
