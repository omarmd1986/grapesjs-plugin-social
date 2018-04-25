export default (editor, config = {}) => {
    const bm = editor.BlockManager;

    var isActive = opt => config.blocks.indexOf(opt) >= 0;

    isActive('facebook') && bm.add(`${config.social}-facebook`, {
        label: `Facebook`,
        category: config.socialCategory,
        content: `<div data-type="flike" class="fb-like" data-href="" data-layout="button_count" data-action="like" data-size="large" data-show-faces="true" data-share="true" style="min-height:50px; width:100px;"></div>`,
        attributes: {class: 'fa fa-plus-square'}
    });
    
    
    isActive('link') && bm.add(`${config.social}-link`, {
        label: `Social Link`,
        category: config.socialCategory,
        content: `<a href="#" class="fa fa-facebook" data-type="${config.social}-link"></a>`,
        attributes: {class: 'fa fa-twitter-square'}
    });

}
