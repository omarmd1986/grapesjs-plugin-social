import grapesjs from 'grapesjs';
import loadComponents from './components';
import loadBlocks from './blocks';
import {style, faUrl} from './consts';

export default grapesjs.plugins.add('gjs-social', (editor, opts = {}) => {
    const options = {...{
                blocks: ['facebook', 'twitter', 'google', 'link', 'link-block'],

                prefix: 'social',

                style: style,
                
                socialCategory: 'Social'
        }, ...opts};
    
    // Add components
    loadComponents(editor, options);

    // Add blocks
    loadBlocks(editor, options);

    // Adding the font awesom
    editor.on('load', () => {
        const components = editor.getComponents();
        const link = components.find(m => (m.get('attributes').rel === 'stylesheet' &&  m.get('attributes').href === faUrl));
        
        // Avoid duplicated the FA css.
        if(!link){
            editor.addComponents(`<link rel="stylesheet" href="${faUrl}">`);
        }
        editor.addComponents(options.style);
    });
});
