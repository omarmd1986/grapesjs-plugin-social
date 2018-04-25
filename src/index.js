import grapesjs from 'grapesjs';
import loadComponents from './components';
import loadBlocks from './blocks';
import {style} from './consts';

export default grapesjs.plugins.add('gjs-social', (editor, opts = {}) => {
    const options = {...{
                blocks: ['facebook', 'link'],

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
        editor.addComponents('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">');
        editor.addComponents(options.style);
    });
});
