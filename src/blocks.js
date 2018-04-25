export default (editor, config = {}) => {
    const bm = editor.BlockManager;

    var isActive = opt => config.blocks.indexOf(opt) >= 0;

    !isActive('facebook') && bm.add(`${config.prefix}-facebook`, {
        label: `Facebook`,
        category: config.socialCategory,
        content: `<div data-type="flike" class="fb-like" data-href="" data-layout="button_count" data-action="like" data-size="large" data-show-faces="true" data-share="true" style="min-height:50px; width:100px;"></div>`,
        attributes: {class: 'fa fa-plus-square'}
    });
    
    
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
