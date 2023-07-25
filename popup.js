document.addEventListener("DOMContentLoaded", function () {
    // Trigger the function when the popup is opened
    
    // let options = {
    //     type: 'list',
    //     title: 'Basic Notification',
    //     message: 'This is a Basic Notification',
    //     iconUrl: '222.png'
    //   };
    //   chrome.notifications.create(options);


    // chrome.notifications.create({
    //     type: "list",
    //     iconUrl: "111.png",
    //     title: "List Notification",
    //     message: "This is a list notification.",
    //     items: [
    //       { title: "Item 1", message: "Description for Item 1" },
    //       { title: "Item 2", message: "Description for Item 2" },
    //       { title: "Item 3", message: "Description for Item 3" },
    //     ],
    //   });

    // chrome.notifications.create({
    //     type: "image",
    //     iconUrl: "111.png",
    //     title: "Image Notification",
    //     message: "This is an image notification.",
    //     imageUrl: "222.png",
    //   });

    chrome.notifications.create({
        type: "progress",
        iconUrl: "111.png",
        title: "Progress Notification",
        message: "This is a progress notification.",
        progress: 50, // Set the progress percentage (0 to 100)
      });
      
      
      
  });




