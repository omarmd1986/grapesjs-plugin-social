export const
        faUrl = `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css`,
    
        flikeUrl = 'https://www.facebook.com/plugins/like.php',
                
        socialNet = [
            'fa-facebook',
            'fa-twitter',
            'fa-google',
            'fa-linkedin',
            'fa-youtube',
            'fa-instagram',
            'fa-pinterest',
            'fa-snapchat-ghost',
            'fa-skype',
            'fa-android',
            'fa-dribbble',
            'fa-vimeo',
            'fa-tumblr',
            'fa-vine',
            'fa-foursquare',
            'fa-stumbleupon',
            'fa-flickr',
            'fa-yahoo',
            'fa-reddit',
            'fa-rss'
        ],
        style = `
            <style>
                div.social-link-block{
                    text-align:center;
                }
                
                div.social-link-block.left{
                    position:fixed;
                    display: grid;
                    top:25%;
                    left:0px;
                }

                div.social-link-block.right{
                    position:fixed;
                    display: grid;
                    top:25%;
                    right:0px;
                }
                
                .fa {
                  padding: 10px;
                  font-size: 30px !important;
                  width: 50px;
                  text-align: center;
                  text-decoration: none;
                  margin: 5px 2px;
                  border-radius: 50%;
                }

                .fa:hover {
                    opacity: 0.7;
                    text-decoration: none !important;
                }

                .fa-black{
                    background-color: white !important;
                    color: black !important;
                    border-color: black !important;
                    border-width: 3px !important;
                    border-style: solid !important;
                    opacity: 0.8 !important;
                    padding: 7px !important;
                }

                .fa-facebook {
                  background: #3B5998;
                  color: white !important;
                }

                .fa-twitter {
                  background: #55ACEE;
                  color: white !important;
                }

                .fa-google {
                  background: #dd4b39;
                  color: white !important;
                }

                .fa-linkedin {
                  background: #007bb5;
                  color: white !important;
                }

                .fa-youtube {
                  background: #bb0000;
                  color: white !important;
                }

                .fa-instagram {
                  background: #125688;
                  color: white !important;
                }

                .fa-pinterest {
                  background: #cb2027;
                  color: white !important;
                }

                .fa-snapchat-ghost {
                  background: #fffc00;
                  color: white !important;
                  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
                }

                .fa-skype {
                  background: #00aff0;
                  color: white !important;
                }

                .fa-android {
                  background: #a4c639;
                  color: white !important;
                }

                .fa-dribbble {
                  background: #ea4c89;
                  color: white !important;
                }

                .fa-vimeo {
                  background: #45bbff;
                  color: white !important;
                }

                .fa-tumblr {
                  background: #2c4762;
                  color: white !important;
                }

                .fa-vine {
                  background: #00b489;
                  color: white !important;
                }

                .fa-foursquare {
                  background: #45bbff;
                  color: white !important;
                }

                .fa-stumbleupon {
                  background: #eb4924;
                  color: white !important;
                }

                .fa-flickr {
                  background: #f40083;
                  color: white !important;
                }

                .fa-yahoo {
                  background: #430297;
                  color: white !important;
                }

                .fa-soundcloud {
                  background: #ff5500;
                  color: white !important;
                }

                .fa-reddit {
                  background: #ff5700;
                  color: white !important;
                }

                .fa-rss {
                  background: #ff6600;
                  color: white !important;
                }
                    
                // Shared Styles
                div.social-share{
                    height: 20px;
                    width: max-content;
                    display: inline-block;
                    border: 1px solid #d5d5d5;
                    border: 1px solid rgba(0,0,0,.17);
                    -webkit-border-radius: 2px;
                    border-radius: 2px;
                    -webkit-box-shadow: 0 1px 0 rgba(0,0,0,.05);
                    box-shadow: 0 1px 0 rgba(0,0,0,.05);
                    -webkit-box-sizing: border-box;
                    box-sizing: border-box;
                    -webkit-transition: background-color .218s,border-color .218s,box-shadow .218s;
                    transition: background-color .218s,border-color .218s,box-shadow .218s;
                    -webkit-user-select: none;
                    -webkit-appearance: none;
                    background-color: #fff;
                    background-image: none;
                    color: #262626;
                    cursor: pointer;
                    outline: none;
                    overflow: hidden;
                    position: relative;
                    text-align: center;
                    vertical-align: middle;
                    white-space: nowrap;
                }
                
                </style>
            `;