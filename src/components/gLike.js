import {util as Util} from '../util';
import {socialNet, flikeUrl} from '../consts';

export default (editor, config = {}) => {
    const domc = editor.DomComponents;

    const defaultType = domc.getType('default');
    const defaultModel = defaultType.model;
    const defaultView = defaultType.view;

    let model = defaultModel.extend({
        // Extend default properties
        defaults: Object.assign({}, defaultModel.prototype.defaults, {
            type: 'tgoogle',

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

            script: function () {
                var cover = document.createElement('div');
                cover.setAttribute('style', 'position: absolute; z-index: -1; width: 100%; height:100%; top: 0; left: 0;');
                cover.setAttribute('class', 'cover');

                this.appendChild(cover);

                document.dispatchEvent(new Event('glikeload'));

                const url = this.getAttribute('data-url') || window.location.href
                        , text = this.getAttribute('data-text') || '';
                var child = this.querySelectorAll('div')[0] || null;
                
                child && child.addEventListener('click', function () {
                    window.open(`https://plus.google.com/share?app=110&url=${ encodeURIComponent(url) }&text=${text}`, 'Google Shared', 'left=0,top=0,width=420,height=620,personalbar=0,toolbar=0,scrollbars=0,resizable=0');
                });
            }
        }),

        init: function () {

        }
    }, {
        isComponent: function (el) {
            var result = '';
            if (el.tagName === 'DIV' && el.className === `${config.prefix}-tgoogle`) {
                result = {type: 'tgoogle'};
            }
            return result;
        }
    });

    let view = defaultView.extend({
        events: {
            click: 'click',
            dblclick: 'dblclick'
        },

        click: function (event) {
            editor.select(this.model);
            event.preventDefault();
            event.stopPropagation();
        },

        dblclick: function (event) {
            event.preventDefault();
            event.stopPropagation();
        },

        init: function () {
            var self = this
                    , model = this.model;

            var doc = Util.getDocument();
            if (doc) {
                doc.addEventListener('glikeload', function () {
                    self.updatePosition();
                });
            }

            this.listenTo(model, 'change:style change:attr', this.updatePosition);
            this.listenTo(model, 'change:url change:text', this.updateData);
        },

        updateData: function () {
            const model = this.model
                    , url = model.get('url') || window.location.href
                    , text = model.get('text') || '';

            model.setAttributes({'data-url': url, 'data-text': text});

            this.updatePosition();
        },

        updatePosition: function () {
            var cover = this.el.querySelector('div.cover');
            cover ? cover.style['z-index'] = 1 : null;
        }
    });

    domc.addType('tgoogle', {
        // Define the Model
        model: model,

        // Define the View
        view: view
    });
}
