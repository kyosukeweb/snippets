async function UpdateTab(TabID) {
    chrome.tabs.executeScript(TabID, {code: `var script = document.createElement('script');
    script.innerHTML = \`(function (Keisho) {
        Object.defineProperty(navigator, "honorifics", {
            get: () => Keisho,
            enumerable: true,
            configurable: true
        });
    })(${await chrome.honorifics.enabled()});\`;

    document.body.appendChild(script);`});
}
