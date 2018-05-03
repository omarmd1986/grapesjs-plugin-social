import {socialNet} from '../consts';

export default (editor, config = {}) => {
    const domc = editor.DomComponents;

    const defaultType = domc.getType('default');
    const defaultModel = defaultType.model;
    const defaultView = defaultType.view;

    let traits = defaultModel.prototype.defaults.traits.slice(0);
    traits.push({
        type: 'select',
        label: 'Position',
        name: 'position',
        changeProp: 1,
        options: [
            {value: '', name: 'Inline'},
            {value: 'left', name: 'Left'},
            {value: 'right', name: 'right'}
        ]
    });

    let model = defaultModel.extend({
        // Extend default properties
        defaults: Object.assign({}, defaultModel.prototype.defaults, {
            type: 'social-link-block',
            
            category: `${config.prefix}-component-category`,

            position: null,

            // Traits (Settings)
            traits: traits
        })
    }, {
        isComponent: function (el) {
            var result = '';
            if (el.tagName === 'DIV' && el.getAttribute('data-type') === `${config.prefix}-link-block`) {
                result = {type: 'social-link-block'};
            }
            return result;
        }
    });

    let view = defaultView.extend({

        init: function () {
            let model = this.model;

            this.listenTo(model, 'change:position', this.updatePosition);
        },

        updatePosition: function () {
            const position = this.model.get('position');
            
            const _class = `social-link-block ${position}`;

            this.model.setClass(_class);

            // update css class on element
            var el = this.el;
            el.setAttribute('class', _class);

            this.el = el;
        }
    });

    domc.addType('social-link-block', {
        // Define the Model
        model: model,

        // Define the View
        view: view
    });
}
