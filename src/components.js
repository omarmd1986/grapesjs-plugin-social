import socialLink from './components/socialLink';
import socialLinkBlock from './components/socialLinkBlock';

export default (editor, config = {}) => {

    socialLink(editor, config);
    
    socialLinkBlock(editor, config);

}
