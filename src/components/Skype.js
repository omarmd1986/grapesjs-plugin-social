import {util as Util} from '../util';
import {socialNet, flikeUrl} from '../consts';
import getModel from './shareCommon/model';
import getView from './shareCommon/view';

export default (editor, config = {}) => {
    const domc = editor.DomComponents;

    const defaultType = domc.getType('default');
    const defaultModel = defaultType.model;
    const defaultView = defaultType.view;

    const eventName = 'skypeLoaded';

    let model = getModel(editor, {
        type: `${config.prefix}-skype`,
        eventName: eventName,
        baseUrl: `https://web.skype.com/share?source=button`,
        windowTitle: 'Share on Skype'
    });

    let view = getView(editor, {
        eventName: eventName
    });

    domc.addType(`${config.prefix}-skype`, {
        // Define the Model
        model: model,

        // Define the View
        view: view
    });
}
