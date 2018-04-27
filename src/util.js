var Util = function () {};

/**
 * Return the iframe's documents
 * @returns {document}
 */
Util.prototype.getDocument = function () {
    var iframes = document.querySelectorAll("iframe.gjs-frame");
    if (iframes.length < 1) {
        return document;
    }

    return iframes[0].contentDocument || iframes[0].contentWindow.document;
};

/**
 * Return the iframe's documents
 * @returns {document}
 */
Util.prototype.getWindow = function () {
    var doc = this.getDocument();
    return doc.parentWindow || doc.defaultView;
};

/**
 * Create an element from str
 * @param {string} html
 * @returns {NodeElement}
 */
Util.prototype.createElement = function (html) {
    let template = document.createElement('template');
    template.innerHTML = html.trim();
    return template.content.firstChild;
};

/**
 * 
 * @param {NodeElement} nodeElement
 * @returns {string}
 */
Util.prototype.toString = function (nodeElement) {
    let container = document.createElement('div');
    container.appendChild(nodeElement);
    return container.innerHTML;
};

/**
 * Return a random ID
 * @returns {String}
 */
Util.prototype.randomID = function () {
    return Math.random().toString(36).substr(2, 9);
};

export let util = new Util();