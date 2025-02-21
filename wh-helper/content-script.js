var script = document.createElement('script');
script.innerHTML = `(function (Keisho) {
    Object.defineProperty(navigator, "honorifics", {
        get: () => Keisho,
        configurable: false,
        enumerable: true,
    });
})(${await chrome.honorifics.get()});`;

document.body.appendChild(script);
