import {util as Util} from '../../util';
import {socialNet, flikeUrl} from '../../consts';

export default (editor, config = {}) => {
    const domc = editor.DomComponents;

    const defaultType = domc.getType('default');
    const defaultView = defaultType.view;

    return defaultView.extend({
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
                doc.addEventListener(config.eventName, function () {
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
}
