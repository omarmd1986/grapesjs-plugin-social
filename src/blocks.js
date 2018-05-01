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
        attributes: {class: 'fa fa-facebook'}
    });

    isActive('twitter') && bm.add(`${config.prefix}-twitter`, {
        label: `Twitter`,
        category: config.socialCategory,
        content: {
            prefix: config.prefix,

            components: `
                <style>
                div.${config.prefix}-tlike{
                    margin: 5px;
                    position:relative;
                    display: inline;
                    width: fit-content;
                    height: fit-content;
                    vertical-align: top;
                }
                </style>
                <div class="${config.prefix}-tlike"></div>`
        },
        attributes: {class: 'fa fa-twitter'}
    });

    isActive('google') && bm.add(`${config.prefix}-google`, {
        label: `Google`,
        category: config.socialCategory,
        content: `
            <style>
                div.${config.prefix}-tgoogle{
                    width: max-content;
                    position: relative;
                    display: inline-block;
                    margin-left: 5px;
                    margin-right: 5px;
                    vertical-align:top;
                }
            </style>
            <div class="${config.prefix}-tgoogle">
                <div class="social-share" title="Share">
                    <div>
                        <div class="social-share-icon">
                            <i class="fa fa-google-plus"></i>
                        </div>
                        <span class="social-share-text">Share</span>
                    </div>
                </div>
            </div>`,
        attributes: {class: 'fa fa-google-plus'}
    });
    
    isActive('linkedin') && bm.add(`${config.prefix}-linkedin`, {
        label: `Google`,
        category: config.socialCategory,
        content: `
            <style>
                div.${config.prefix}-linkedin{
                    width: max-content;
                    position: relative;
                    display: inline-block;
                    margin-left: 5px;
                    margin-right: 5px;
                    vertical-align:top;
                }
            </style>
            <div class="${config.prefix}-linkedin">
                <div class="social-share" title="Share">
                    <div>
                        <div class="social-share-icon">
                            <i class="fa fa-linkedin"></i>
                        </div>
                        <span class="social-share-text">Share</span>
                    </div>
                </div>
            </div>`,
        attributes: {class: 'fa fa-linkedin'}
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
