import grapesjs from 'grapesjs';
import loadComponents from './components';
import loadBlocks from './blocks';
import {style, faUrl} from './consts';

export default grapesjs.plugins.add('gjs-social', (editor, opts = {}) => {
    const options = {...{
                blocks: ['facebook', 'twitter', 'google', 'linkedin', 'skype', 'link', 'link-block'],

                prefix: 'social',

                style: style,

                socialCategory: 'Social'
        }, ...opts};

    // Add components
    loadComponents(editor, options);

    // Add blocks
    loadBlocks(editor, options);

    var includeCss = function () {
        const components = editor.getComponents();
        const link = components.find(m => (m.get('attributes').rel === 'stylesheet' && m.get('attributes').href === faUrl));
        const _style = components.find(m => (m.get('attributes')['data-plugincss'] === 'grapesjs-plugin-social'));

        // Avoid duplicated the FA css.
        if (!link) {
            editor.addComponents(`<link rel="stylesheet" href="${faUrl}">`);
        }

        if (!_style) {
            editor.addComponents(options.style);
        }
    };

    // Adding the font awesom
    editor.on('canvas:drop', function(d, m){
        const cat = m.get('category');
        if(cat === `${options.prefix}-component-category`){
            includeCss();
        }
    });
});
