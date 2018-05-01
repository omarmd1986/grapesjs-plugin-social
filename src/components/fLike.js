import {util as Util} from '../util';
import {socialNet, flikeUrl} from '../consts';

export default (editor, config = {}) => {
    const domc = editor.DomComponents;

    const defaultType = domc.getType('default');
    const defaultModel = defaultType.model;
    const defaultView = defaultType.view;

    let traits = [];
    traits.push({
        type: 'text',
        label: 'URL to like',
        name: 'urlLike',
        changeProp: 1
    });
    traits.push({
        type: 'select',
        label: 'Layout',
        name: 'layout',
        changeProp: 1,
        options: [
            {value: 'standard', name: 'Standard'},
            {value: 'box_count', name: 'Box Count'},
            {value: 'button_count', name: 'Button Count'},
            {value: 'button', name: 'Button'}
        ]
    });
    traits.push({
        type: 'select',
        label: 'Action',
        name: 'action',
        changeProp: 1,
        options: [
            {value: 'like', name: 'Like'},
            {value: 'recommend', name: 'Recommend'}
        ]
    });
    traits.push({
        type: 'select',
        label: 'Button Size',
        name: 'btnSize',
        changeProp: 1,
        options: [
            {value: 'small', name: 'Small'},
            {value: 'large', name: 'Large'}
        ]
    });
    traits.push({
        type: 'checkbox',
        label: 'Inclide Share button',
        name: 'includeShareBtn',
        changeProp: 1
    });
    traits.push({
        type: 'checkbox',
        label: 'Show Friend\'s Faces ',
        name: 'showFriendFaces',
        changeProp: 1
    });

    let model = defaultModel.extend({
        // Extend default properties
        defaults: Object.assign({}, defaultModel.prototype.defaults, {
            type: 'flike',

            urlLike: window.location.href,
            layout: 'button_count',
            action: 'like',
            btnSize: 'small',
            includeShareBtn: true,
            showFriendFaces: true,

            // Traits (Settings)
            traits: traits
        })
    }, {
        isComponent: function (el) {
            var result = '';
            if (el.tagName === 'DIV' && el.getAttribute('data-type') === `${config.prefix}-flike`) {
                result = {type: 'flike'};
            }
            return result;
        }
    });

    let view = defaultView.extend({

        init: function () {
            let model = this.model;

            this.listenTo(model, 'change:urlLike change:layout change:action change:btnSize change:includeShareBtn change:showFriendFaces', this.updateLike);

            this.updateLike();
        },

        updateLike: function () {
            var iframe = document.createElement('iframe');
            iframe.setAttribute('scrolling', 'no');
            iframe.setAttribute('frameborder', '0');
            iframe.setAttribute('allowTransparency', 'true');
            iframe.setAttribute('allow', 'encrypted-media');
            iframe.setAttribute('style', 'border:none;overflow:hidden;');

            const model = this.model;

            let
                    url = encodeURIComponent(model.get('urlLike'))
                    , layout = model.get('layout')
                    , action = model.get('action')
                    , btnSize = model.get('btnSize')
                    , includeShareBtn = model.get('includeShareBtn')
                    , showFriendFaces = model.get('showFriendFaces')
                    , width = 0
                    , height = 0;

            switch (layout) {
                case 'standard':
                    width += 450;
                    height += 35;
                    (showFriendFaces === true) ? height += 50 : null;
                    break;
                case 'box_count':
                    width += (btnSize === 'small' ? 90 : 110);
                    height += 100;
                    (action === 'recommend') ? width += 20 : null;
                    break;
                case 'button_count':
                    width += 90;
                    height += 25;
                    (btnSize === 'large') ? width += 25 : null;
                    (action === 'recommend') ? width += 50 : null;
                    (includeShareBtn === true) ? width += 50 : null;
                    (includeShareBtn === true) ? height += 30 : null;
                    break;
                case 'button':
                    width += (btnSize === 'small' ? 100 : 120);
                    height += 70;
                    (action === 'recommend') ? width += 100 : null;
                    (btnSize === 'large') ? width += 25 : null;
                    (includeShareBtn === 'large') ? width += 50 : null;
                    break;
                default:
                    break;
            }

            /**
             * <iframe
             src="https://www.facebook.com/plugins/like.php?href=${url}&layout=button_count&action=like&size=large&show_faces=true&share=true" 
             style="border:none;overflow:hidden" 
             scrolling="no" 
             frameborder="0" 
             allowTransparency="true" 
             allow="encrypted-media">
             </iframe>
             */

            iframe.src = `${flikeUrl}?href=${url}&width=${width}&height=${height}&layout=${layout}&action=${action}&size=${btnSize}&show_faces=${showFriendFaces}&share=${includeShareBtn}`;

            iframe.setAttribute('width', width);
            iframe.setAttribute('height', height);

            model.components(Util.toString(iframe));
            
            var self = this;
            setTimeout(function(){
                self.el.firstChild.className = self.ppfx + 'no-pointer';
            },10);
        }
    });

    domc.addType('flike', {
        // Define the Model
        model: model,

        // Define the View
        view: view
    });
}
