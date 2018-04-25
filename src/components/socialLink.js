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
        options: [
            {value: 'fa-facebook', name: 'Facebook'},
            {value: 'fa-twitter', name: 'Twitter'},
            {value: 'fa-google', name: 'Google'},
            {value: 'fa-linkedin', name: 'Linkedin'},
            {value: 'fa-youtube', name: 'Youtube'},
            {value: 'fa-instagram', name: 'Instagram'},
            {value: 'fa-pinterest', name: 'Pinterest'},
            {value: 'fa-snapchat-ghost', name: 'Snapchat'},
            {value: 'fa-skype', name: 'Skype'},
            {value: 'fa-android', name: 'Android'},
            {value: 'fa-dribbble', name: 'Dribbble'},
            {value: 'fa-vimeo', name: 'Vimeo'},
            {value: 'fa-tumblr', name: 'Tumblr'},
            {value: 'fa-vine', name: 'Vine'},
            {value: 'fa-foursquare', name: 'Foursquare'},
            {value: 'fa-stumbleupon', name: 'Stumbleupon'},
            {value: 'fa-flickr', name: 'Flickr'},
            {value: 'fa-yahoo', name: 'Yahoo'},
            {value: 'fa-reddit', name: 'Reddit'},
            {value: 'fa-rss', name: 'RSS'}
        ]
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
            tagName: 'a',

            network: 'fa-facebook',
            color: '',

            // Traits (Settings)
            traits: traits
        })
    }, {
        isComponent: function (el) {
            var result = linkModel.isComponent(el);

            if (!result || result === '') {
                return result;
            }
            if (el.tagName === 'A' && el.className.includes('fa') && el.getAttribute('data-type') === `${config.social}-link`) {
                result = {type: 'social-link'};
            }
            return result;
        }
    });

    let view = linkView.extend({

        init: function () {
            let model = this.model;

            this.listenTo(model, 'change:network change:color', this.updateButton);

            // To update the view
            this.updateButton();
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
