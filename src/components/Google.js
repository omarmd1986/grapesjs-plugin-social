import {util as Util} from '../util';
import {socialNet, flikeUrl} from '../consts';
import getModel from './shareCommon/model';
import getView from './shareCommon/view';

export default (editor, config = {}) => {
    const domc = editor.DomComponents;

    const defaultType = domc.getType('default');
    const defaultModel = defaultType.model;
    const defaultView = defaultType.view;

    const eventName = 'googleLoaded';

    let model = getModel(editor, {
        type: `${config.prefix}-google`,
        prefix: config.prefix,
        eventName: eventName,
        baseUrl: `https://plus.google.com/share?app=110`,
        windowTitle: 'Share on Google'
    });

    let view = getView(editor, {
        eventName: eventName
    });

    domc.addType(`${config.prefix}-google`, {
        // Define the Model
        model: model,

        // Define the View
        view: view
    });
}

