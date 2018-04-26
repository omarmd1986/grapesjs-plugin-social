export default (editor, config = {}) => {
    const bm = editor.BlockManager;

    var isActive = opt => config.blocks.indexOf(opt) >= 0;
    
    const url = encodeURIComponent(window.location.href);
    
    isActive('facebook') && bm.add(`${config.prefix}-facebook`, {
        label: `Facebook`,
        category: config.socialCategory,
        content: `
            <style>
                div.flike-container{
                    width: max-content;
                    position: relative;
                    display: inline-block;
                }
            </style>
            <div class="flike-container" data-type="${config.prefix}-flike"></div>`,
        attributes: {class: 'fa fa-plus-square'}
    });
    /*
     * 
     */

    isActive('link') && bm.add(`${config.prefix}-link`, {
        label: `Social Link`,
        category: config.socialCategory,
        content: `<a href="#" class="fa fa-facebook"></a>`,
        attributes: {class: 'fa fa-twitter-square'}
    });

    isActive('link-block') && bm.add(`${config.prefix}-link-block`, {
        label: `Social Link Block`,
        category: config.socialCategory,
        content: `
        <div class="social-link-block" data-type="${config.prefix}-link-block">
            <a href="#" class="fa fa-facebook"></a>
            <a href="#" class="fa fa-twitter"></a>
            <a href="#" class="fa fa-google"></a>
            <a href="#" class="fa fa-linkedin"></a>
        </div>`,
        attributes: {class: 'fa fa-th'}
    });

}
