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
            traits: traits
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

        init: function () {
            var
                    el = this.el
                    , model = this.model
                    , self = this;
            /*Set the z-index to catch every click*/
            setTimeout(function () {
                el.style['z-index'] = '1';
                self.el = el;
            }, 100);

            this.listenTo(model, 'change:text change:hashtags', this.updateLike);
            this.listenTo(model, 'change:style change:attr', this.updatePosition);
        },
        
        updatePosition: function(){
            this.el.style['z-index'] = '1';
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
