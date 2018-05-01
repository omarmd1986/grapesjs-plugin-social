import {util as Util} from '../../util';
import {socialNet, flikeUrl} from '../../consts';

export default (editor, config = {}) => {
    const domc = editor.DomComponents;

    const defaultType = domc.getType('default');
    const defaultModel = defaultType.model;
    
    return defaultModel.extend({
        // Extend default properties
        defaults: Object.assign({}, defaultModel.prototype.defaults, {
            type: config.type,

            traits: [
                {
                    type: 'text',
                    label: 'Url',
                    name: 'url',
                    changeProp: 1,
                    placeholder: 'Url to share'
                },
                {
                    type: 'text',
                    label: 'Text',
                    name: 'text',
                    changeProp: 1,
                    placeholder: 'Text to share'
                }
            ],
            
            eventName: config.eventName,
            baseUrl: config.baseUrl,
            windowSize: (config.windowSize || `left=0,top=0,width=420,height=620,personalbar=0,toolbar=0,scrollbars=0,resizable=0`),
            windowTitle: (config.windowTitle || `Share`),

            script: function () {
                var cover = document.createElement('div');
                cover.setAttribute('style', 'position: absolute; z-index: -1; width: 100%; height:100%; top: 0; left: 0;');
                cover.setAttribute('class', 'cover');

                this.appendChild(cover);

                document.dispatchEvent(new Event('{[ eventName ]}'));

                const url = this.getAttribute('data-url') || window.location.href
                        , text = this.getAttribute('data-text') || '';
                var child = this.querySelectorAll('div')[0] || null;

                const windowSize = '{[ windowSize ]}' ,
                        windowTitle = `{[ windowTitle ]}`;

                child && child.addEventListener('click', function () {
                    const baseUrl = '{[ baseUrl ]}';
                    window.open(`${baseUrl}&url=${ encodeURIComponent(url) }&text=${text}`, windowTitle, windowSize);
                });
            }
        })
    }, {
        isComponent: function (el) {
            var result = '';
            if (el.tagName === 'DIV' && el.className === config.type) {
                result = {type: config.type};
            }
            return result;
        }
    });
}
