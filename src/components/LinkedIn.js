import {util as Util} from '../util';
import {socialNet, flikeUrl} from '../consts';
import getModel from './shareCommon/model';
import getView from './shareCommon/view';

export default (editor, config = {}) => {
    const domc = editor.DomComponents;

    const defaultType = domc.getType('default');
    const defaultModel = defaultType.model;
    const defaultView = defaultType.view;

    const eventName = 'linkedinLoaded';

    let model = getModel(editor, {
        type: `${config.prefix}-linkedin`,
        eventName: eventName,
        baseUrl: `http://www.linkedin.com/shareArticle?mini=true`,
        windowTitle: 'Share on LinkedIn'
    });

    let view = getView(editor, {
        eventName: eventName
    });

    domc.addType(`${config.prefix}-linkedin`, {
        // Define the Model
        model: model,

        // Define the View
        view: view
    });
}
