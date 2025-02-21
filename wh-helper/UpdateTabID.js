async function UpdateTab(TabID) {
    chrome.tabs.executeScript(TabID, {code: `var script = document.createElement('script');
    script.innerHTML = \`(function (Keisho) {
        Object.defineProperty(navigator, "honorifics", {
            get: () => Keisho,
            enumerable: true,
        });
    })(${await chrome.honorifics.get()});\`;

    document.body.appendChild(script);`});
}
