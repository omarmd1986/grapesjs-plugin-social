import {util as Util} from '../util';
import {socialNet, flikeUrl} from '../consts';

export default (editor, config = {}) => {
    const domc = editor.DomComponents;

    const defaultType = domc.getType('default');
    const defaultModel = defaultType.model;
    const defaultView = defaultType.view;

    let traits = [];

    let model = defaultModel.extend({
        // Extend default properties
        defaults: Object.assign({}, defaultModel.prototype.defaults, {
            type: 'flike',

            // Traits (Settings)
            traits: traits
        })
    }, {
        isComponent: function (el) {
            var result = '';
            if (el.tagName === 'DIV' && el.className === `tlike`) {
                result = {type: 'tlike'};
            }
            return result;
        }
    });

    let view = defaultView.extend({

        init: function () {
            let model = this.model;
        }
    });

    domc.addType('tlike', {
        // Define the Model
        model: model,

        // Define the View
        view: view
    });
}
