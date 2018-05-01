import {util as Util} from '../util';
import {socialNet, flikeUrl} from '../consts';

export default (editor, config = {}) => {
    const domc = editor.DomComponents;

    const defaultType = domc.getType('default');
    const defaultModel = defaultType.model;
    const defaultView = defaultType.view;

    let traits = [
        {
            type: 'text',
            label: 'Text',
            name: 'text',
            changeProp: 1,
            placeholder: 'custom share text'
        },
        {
            type: 'text',
            label: 'Hashtags',
            name: 'hashtags',
            placeholder: 'example,demo',
            changeProp: 1
        }
    ];

    let model = defaultModel.extend({
        // Extend default properties
        defaults: Object.assign({}, defaultModel.prototype.defaults, {
            type: 'tlike',

            // Traits (Settings)
            traits: traits,

            prefix: config.prefix,

            script: function () {
                window.twttr = (function (d, s, id) {
                    var js, fjs = d.getElementsByTagName(s)[0],
                            t = window.twttr || {};
                    if (d.getElementById(id))
                        return t;
                    js = d.createElement(s);
                    js.id = id;
                    js.src = "https://platform.twitter.com/widgets.js";
                    fjs.parentNode.insertBefore(js, fjs);

                    t._e = [];
                    t.ready = function (f) {
                        t._e.push(f);
                    };

                    return t;
                }(document, "script", "twitter-wjs"));

                var self = this;

                var cover = document.createElement('div');
                cover.setAttribute('style', 'position: absolute; z-index: -1; width: 100%; height:100%; top: 0; left: 0;');
                cover.setAttribute('class', 'cover');

                this.parentNode.setAttribute('style', 'display: inline-block;')

                this.appendChild(cover);

                window.twttr.ready(function () {
                    window.twttr.widgets.createShareButton('/', self, {
                        text: (self.getAttribute('data-text')) || '',
                        hashtags: (self.getAttribute('data-hashtags')) || ''
                    }).then(function (el) {
                        document.dispatchEvent(new Event('tlikeload'));
                    });
                });
            }
        })
    }, {
        isComponent: function (el) {
            var result = '';
            if (el.tagName === 'DIV' && el.className === `${config.prefix}-tlike`) {
                result = {type: 'tlike'};
            }
            return result;
        }
    });

    let view = defaultView.extend({
        events: {
            click: 'click'
        },

        click: function (e) {
            editor.select(this.model);
        },

        init: function () {
            var
                    model = this.model
                    , self = this;

            var doc = Util.getDocument();
            if (doc) {
                doc.addEventListener('tlikeload', function () {
                    self.updatePosition();
                });
            }

            this.listenTo(model, 'change:text change:hashtags', this.updateLike);
            this.listenTo(model, 'change:style change:attr', this.updatePosition);
        },

        updatePosition: function () {
            var cover = this.el.querySelector('div.cover');
            cover ? cover.style['z-index'] = 1 : null;
        },

        updateLike: function () {
            const text = this.model.get('text'),
                    hashtags = this.model.get('hashtags');

            this.model.set('attributes', {
                'data-text': text,
                'data-hashtags': hashtags
            });

            this.updatePosition();
        }
    });

    domc.addType('tlike', {
        // Define the Model
        model: model,

        // Define the View
        view: view
    });
}
