import socialLink from './components/socialLink';
import socialLinkBlock from './components/socialLinkBlock';

import Facebook from './components/Facebook';
import Twitter from './components/Twitter';
import Google from './components/Google';
import LinkedIn from './components/LinkedIn';
import Skype from './components/Skype';

export default (editor, config = {}) => {

    socialLink(editor, config);
    
    socialLinkBlock(editor, config);
    
    Facebook(editor, config);
    
    Twitter(editor, config);
    
    Google(editor, config);
    
    LinkedIn(editor, config);
    
    Skype(editor, config);
}
