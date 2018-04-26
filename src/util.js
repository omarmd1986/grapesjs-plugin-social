var Util = function () {};

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

export let util = new Util();