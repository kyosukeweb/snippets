// For Safari
if(typeof chrome === 'undefined') { chrome = browser; }

if(chrome.honorifics) {
    chrome.honorifics.enabled().then(useKeishou => {
        if (useKeishou) {
            console.log("Honorifics are turned on.");
            console.log("Hello, user-san!");
        } else {
            console.log("Honorifics are turned off.");
            console.log("Hello, user!");
        }
    }).catch(_ => {
        console.warn("We failed to retrieve the setting...");
        console.log("Hello, user!");
    });
} else {
    console.warn("Your browser doesn't support the WebExtensions Honorifics API.");
    console.log("Hello, user!");
}
