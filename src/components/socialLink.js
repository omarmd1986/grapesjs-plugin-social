import {socialNet} from '../consts';

export default (editor, config = {}) => {
    const domc = editor.DomComponents;

    const linkType = domc.getType('link');
    const linkModel = linkType.model;
    const linkView = linkType.view;

    let traits = linkModel.prototype.defaults.traits.slice(0);
    traits.push({
        type: 'select',
        label: 'Network',
        name: 'network',
        changeProp: 1,
        options: socialNet.map(function (c) {
            const name = c.split('-')[1] || '';
            return {value: c, name: name};
        })
    });
    traits.push({
        type: 'select',
        label: 'Color',
        name: 'color',
        changeProp: 1,
        options: [
            {value: '', name: 'Color'},
            {value: 'fa-black', name: 'Black'}
        ]
    });

    let model = linkModel.extend({
        init: function () {
        },

        // Extend default properties
        defaults: Object.assign({}, linkModel.prototype.defaults, {
            // Can't drop other elements inside it
            droppable: false,

            type: 'social-link',

            category: `${config.prefix}-component-category`,
            
            tagName: 'a',

            network: null,
            color: null,

            // Traits (Settings)
            traits: traits
        })
    }, {
        isComponent: function (el) {
            var result = '';//linkModel.isComponent(el);

//            if (!result || result === '') {
//                return result;
//            }
            var IsSocialLink = {};

            var isSocial = function () {
                try {
                    socialNet.forEach(function (c) {
                        if (el.className.includes(c)) {
                            throw IsSocialLink;
                        }
                    });
                } catch (e) {
                    return true;
                }
                return false;
            };

            if (el.tagName === 'A' && isSocial()) {
                result = {type: 'social-link'};
            }
            return result;
        }
    });

    let view = linkView.extend({

        init: function () {
            let model = this.model;

            this.listenTo(model, 'change:network change:color', this.updateButton);
        },

        updateButton: function () {
            const networl = this.model.get('network');
            const color = this.model.get('color');

            const _class = `fa ${networl} ${color}`;

            this.model.setClass(_class);

            // update css class on element
            var el = this.el;
            el.setAttribute('class', _class);

            this.el = el;
        }

    });

    domc.addType('social-link', {
        // Define the Model
        model: model,

        // Define the View
        view: view
    });
}
