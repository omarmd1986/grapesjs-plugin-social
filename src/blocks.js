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
            
            script: function () {
                window.twttr = (function (d, s, id) {
                    var js, fjs = d.getElementsByTagName(s)[0],
                            t = window.twttr || {};
                    if (d.getElementById(id))
                        return t;
                    js = d.createElement(s);
                    js.id = id;
                    js.src = "https://platform.twitter.com/widgets.js";
                    fjs.parentNode.insertBefore(js, fjs);

                    t._e = [];
                    t.ready = function (f) {
                        t._e.push(f);
                    };

                    return t;
                }(document, "script", "twitter-wjs"));

                this.setAttribute('style', `width: max-content;
                    position: relative;
                    margin: 5px;
                    display: inline-block;`);
                
                var self = this;
                
                window.twttr.ready(function () {
                    var tlike = self.querySelector(`div.{[ prefix ]}-tlike`);
                    window.twttr.widgets.createShareButton('/', self, {
                        text: (tlike && tlike.getAttribute('data-text')) || '',
                        hashtags: (tlike && tlike.getAttribute('data-hashtags')) || ''
                    });
                });
            },
            components: `
                <style>
                div.${config.prefix}-tlike{
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    z-index: -1; // Pass to back. The iframe will catch the clicks.
                }
                </style>
                <div class="${config.prefix}-tlike"></div>`
        },
        attributes: {class: 'fa fa-twitter'}
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
