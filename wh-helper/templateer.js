(function (Keisho) {
    Object.defineProperty(navigator, "honorifics", {
        get: () => Keisho,
        configurable: false,
        enumerable: true,
    });
})(${await chrome.honorifics.get()});
