if (self.CavalryLogger) { CavalryLogger.start_js(["WdeAL"]); }

__d("DimensionLogging",["BanzaiNectar","getViewportDimensions"],(function(a,b,c,d,e,f){a=b("getViewportDimensions")();b("BanzaiNectar").log("browser_dimension","homeload",{x:a.width,y:a.height,sw:window.screen.width,sh:window.screen.height,aw:window.screen.availWidth,ah:window.screen.availHeight,at:window.screen.availTop,al:window.screen.availLeft})}),null);
__d("LikeConfirmer",["AsyncDialog","AsyncRequest"],(function(a,b,c,d,e,f){__p&&__p();var g=!1,h=!1;a={likeContent:function(){},like:function(a,c){__p&&__p();this.likeContent=a;if(h)return;if(g)this.likeContent();else{a=new(b("AsyncRequest"))().setURI("/like/confirm_like.php").setRelativeTo(c);b("AsyncDialog").send(a,function(a){h=!0,a.subscribe("hide",this.onCloseLikeConfirmDialog.bind(this)),a.setCausalElement(c)}.bind(this))}return!1},isShowingConfirmation:function(){return h},onCloseLikeConfirmDialog:function(){h=!1},likeSkipConfirmation:function(a){g=a,this.likeContent()}};e.exports=a}),null);
__d("FbFeedKeyboardController",["csx","cx","fbt","Arbiter","AsyncRequest","CSS","DOM","DOMQuery","DOMScroll","Event","FbFeedHighlight","Focus","JSXDOM","KeyboardShortcuts","LikeConfirmer","NavigationMessage","Parent","ReactComposerEvents","ReactComposerIDGenerator","Run","Scroll","SubscriptionsHandler","UITinyViewportAction","Vector","ViewportBounds","emptyFunction","ge","getActiveElement","isAsyncScrollQuery","isElementNode","throttle","translateKey"],(function(a,b,c,d,e,f,g,h,i){__p&&__p();var j=45,k=0;function l(){k=b("UITinyViewportAction").isTiny()?0:b("ViewportBounds").getTop()}function m(a){if(!a)return null;if(a.previousElementSibling instanceof HTMLElement)return a.previousElementSibling;a=a.previousSibling;while(a&&!(a instanceof HTMLElement))a=a.previousSibling;return a||null}function n(a){if(a.nextElementSibling instanceof HTMLElement)return a.nextElementSibling;a=a.nextSibling;while(a&&!(a instanceof HTMLElement))a=a.nextSibling;return a||null}function o(a){"use strict";this.root=a,this.init()}o.prototype.getStories=function(a){"use strict";return b("DOMQuery").scry(a||this.root,"._5jmm")};o.prototype.isStory=function(a){"use strict";return b("CSS").matchesSelector(a,"._5jmm")};o.prototype.clickLike=function(){"use strict";__p&&__p();var a=this.$3();this.clickElement(a,"._3l2t",".UFILikeLink");if(a!==this.selected)return;a=this.getParentStory(b("getActiveElement")());if(a){a=[].concat(b("DOMQuery").scry(a,"._3l2t"),b("DOMQuery").scry(a,".UFILikeLink"));for(var c=0;c<a.length;c++)b("CSS").hasClass(a[c],"accessible_elem")||b("Focus").setWithoutOutline(a[c])}};o.prototype.clickComment=function(){"use strict";this.clickElement(this.$3(),"._666h","._2pgm",".comment_link")};o.prototype.clickShare=function(){"use strict";this.click("._2nj7",".share_action_link")};o.prototype.clickSeeMore=function(){"use strict";this.click(".see_more_link")};o.prototype.clickLeft=function(){"use strict";this.click("._1mri")};o.prototype.clickRight=function(){"use strict";this.click("._2fu-")};o.prototype.openAttachment=function(){"use strict";this.click("._5dec","a._52c6","._4-eo",".uiVideoThumb")};o.prototype.getHeadline=function(a){"use strict";return b("DOMQuery").scry(a,"h5._5pbw")[0]};o.prototype.$4=function(a){"use strict";var c=b("Parent").bySelector(a,"._5pcb"),d=b("ge")("pagelet_soft_permalink_posts");return!!(c||d&&b("DOM").contains(d,a))};o.prototype.getPreviousSibling=function(a){"use strict";__p&&__p();var c=m(a);if(c&&this.getParentStory(c))return c;c=null;if(this.$4(a)){var d=this.getStories(this.root);a=d.indexOf(a);while(a>-1){if(a===0)c=b("ge")("pagelet_composer"),c=c&&b("Parent").bySelector(c,"._5jmm");else if(a>0){c=d[a-1];if(c.offsetHeight>0)break}a--}}return c instanceof HTMLElement?c:this.selected};o.prototype.getPreviousStory=function(a){"use strict";a=this.getPreviousSibling(a);while(a&&!this.isStory(a))a=this.getPreviousSibling(a);return a};o.prototype.getParentStory=function(a){"use strict";a=b("Parent").bySelector(a,"._5jmm");return a instanceof HTMLElement?a:null};o.prototype.getNextSibling=function(a){"use strict";__p&&__p();var c=n(a);if(c&&this.getParentStory(c))return c;c=null;if(this.$4(a)){var d=this.getStories(this.root),e=d.indexOf(a);if(e>-1){c=d[++e];while(c&&c.offsetHeight===0)c=d[++e]}}else b("ge")("pagelet_composer",a)&&(c=b("DOMQuery").scry(document,"div._5pcb ._5jmm")[0]);return c||this.selected};o.prototype.getNextStory=function(a){"use strict";a=this.getNextSibling(a);while(a&&!this.isStory(a))a=this.getNextSibling(a);return a};o.prototype.setSelected=function(a,c){"use strict";if(a){var d="_5qdu",e=b("DOMQuery").scry(a,"._5qdu");!e.length&&c&&b("DOM").prependContent(a,b("JSXDOM").div({className:d}))}c&&(this.selected&&this.setTabindexOnStory(this.selected,"-1"),this.selected&&b("CSS").removeClass(this.selected,"_5qdv"),this.selected=a,a&&this.setTabindexOnStory(a,"0"),a&&b("CSS").addClass(a,"_5qdv"),a&&b("FbFeedHighlight").highlightSingle(a))};o.prototype.$3=function(){"use strict";var a=b("DOM").scry(this.selected,"._1qch");return a.length>0?b("DOM").scry(this.selected,"._3el7")[0]:this.selected};o.prototype.focusComposer=function(){"use strict";__p&&__p();var a=["pagelet_composer","pagelet_group_composer","pagelet_event_composer","PageComposerPagelet_","PageComposerPagelet_Admin_View","timeline_composer_container"],c=null;for(var d=0;d<a.length;d++){var e=a[d];c=b("ge")(e);if(c)break}if(c){e=b("DOM").scry(c,"textarea")[0];if(e)b("Focus").set(e),b("DOMScroll").scrollTo(c,!0);else{d=b("DOM").scry(c,"div._36bx")[0];a=d&&d.id;b("ReactComposerIDGenerator").isComposerID(a)&&(b("Arbiter").inform(b("ReactComposerEvents").ACTIVATE_ATTACHMENT+d.id),b("DOMScroll").scrollTo(c,!0))}}};o.prototype.getScrollOffset=function(){"use strict";return 10+(this.scrollOffset||0)};o.prototype.getAnimationLength=function(a){"use strict";return Math.min(Math.abs(b("Vector").getElementPosition(a).y-b("ViewportBounds").getTop()-b("Scroll").getTop(document.body)),400)};o.prototype.findTop=function(){"use strict";var a=this.getStories();for(var c=0;c<a.length;c++)if(b("Vector").getElementPosition(a[c]).y>b("Vector").getScrollPosition().y)return a[c];return null};o.prototype.onLeave=function(){"use strict";this.subscriptions&&this.subscriptions.release()};o.prototype.init=function(){"use strict";__p&&__p();b("Run").onLeave(this.onLeave.bind(this)),this.subscriptions=new(b("SubscriptionsHandler"))(),this.subscriptions.addSubscriptions(b("Arbiter").subscribe(b("NavigationMessage").NAVIGATION_BEGIN,this.onLeave.bind(this)),b("KeyboardShortcuts").register("j",this.vert.bind(this,1),{shortcutInfo:{displayKeys:[b("translateKey")("j")],description:i._("Scroll to the next News Feed post")}}),b("KeyboardShortcuts").register("k",this.vert.bind(this,-1),{shortcutInfo:{displayKeys:[b("translateKey")("k")],description:i._("Scroll to the previous News Feed post")}}),b("KeyboardShortcuts").register("p",this.focusComposer.bind(this),{shortcutInfo:{displayKeys:[b("translateKey")("p")],description:i._("Make a new post")}}),b("KeyboardShortcuts").register("l",function(){var a=this.getParentStory(b("getActiveElement")());b("LikeConfirmer").like(function(){this.setSelected(a,!1),this.clickLike()}.bind(this),b("getActiveElement")())}.bind(this),{filter:this.hasActiveStory.bind(this),shortcutInfo:{displayKeys:[b("translateKey")("l")],description:i._("Like or unlike the selected post")}}),b("KeyboardShortcuts").register("c",this.clickComment.bind(this),{filter:this.hasActiveStory.bind(this),shortcutInfo:{displayKeys:[b("translateKey")("c")],description:i._("Comment on the selected post")}}),b("KeyboardShortcuts").register("s",this.clickShare.bind(this),{filter:this.hasActiveStory.bind(this),shortcutInfo:{displayKeys:[b("translateKey")("s")],description:i._("Share the selected post")}}),b("KeyboardShortcuts").register("o",this.openAttachment.bind(this),{filter:this.hasActiveStory.bind(this),shortcutInfo:{displayKeys:[b("translateKey")("o")],description:i._("Open attachment of the selected post")}}),b("KeyboardShortcuts").register("RETURN",this.clickSeeMore.bind(this),{filter:this.hasExpandableStoryInFocus.bind(this),shortcutInfo:{displayKeys:[b("translateKey")("enter")],description:i._("See more of the selected post")}}),b("KeyboardShortcuts").register("LEFT",this.clickLeft.bind(this),{filter:this.hasActiveStory.bind(this)}),b("KeyboardShortcuts").register("RIGHT",this.clickRight.bind(this),{filter:this.hasActiveStory.bind(this)}),b("Event").listen(this.root,"focusin",function(event){var a=event.getTarget();if(!this.isStory(a)){var c=b("DOM").isNodeOfType(a,["object","embed","iframe"]);a=this.getParentStory(a);var d=this.selected;a&&!c&&d&&(this.setSelected(a,!0),this.selected=a)}}.bind(this)))};o.prototype.hasActiveStory=function(event,a){"use strict";a=b("getActiveElement")();return!(a&&b("CSS").shown(a))||!!this.getParentStory(a)};o.prototype.hasExpandableStoryInFocus=function(event,a){"use strict";a=b("getActiveElement")();return!!(a&&a.getElementsByClassName("text_exposed_root").length&&!a.getElementsByClassName("text_exposed_root text_exposed").length)};o.prototype.clickElement=function(a){"use strict";__p&&__p();if(!a)return;var c;for(var d=0,e=arguments.length<=1?0:arguments.length-1;d<e;d++){c=b("DOM").scry(a,d+1<1||arguments.length<=d+1?undefined:arguments[d+1])[0];if(c&&b("CSS").shown(c)){c.click();return}}};o.prototype.click=function(){"use strict";for(var a=arguments.length,b=new Array(a),c=0;c<a;c++)b[c]=arguments[c];this.clickElement.apply(this,[this.selected].concat(b))};o.prototype.$5=function(){"use strict";if(!this.$1){this.scrollOffset=0;var a=b("ge")("pagelet_feed_switcher_root");a&&(this.scrollOffset+=a.getBoundingClientRect().height);this.subscriptions.addSubscriptions(b("Event").listen(document,"scroll",function(){this.selected&&!this.scrolling&&this.setSelected(null,!1)}.bind(this)));this.$1=!0}};o.prototype.$6=function(){"use strict";this.$2||(l(),this.subscriptions.addSubscriptions(b("Event").listen(window,"resize",b("throttle")(l))),this.$2=!0)};o.prototype.vert=function(a){"use strict";__p&&__p();this.$5();var c;if(this.selected){this.selected.id=="pagelet_composer"?c=a>0?this.getStories()[0]:null:a===0?c=this.selected:c=a>0?this.getNextStory(this.selected):this.getPreviousStory(this.selected)||b("ge")("pagelet_composer");if(!c)return;else if(!b("isElementNode")(c)||b("CSS").hasClass(c,"hidden_elem")){this.selected&&b("CSS").removeClass(this.selected,"selectedStorySimple");this.selected=c;this.vert(a);return}}(!c||b("Parent").byClass(c,"hidden_elem")||!b("DOM").contains(document,c))&&(c=this.findTop(),c&&a<0&&(c=this.getPreviousStory(c)));if(!c)return;this.anim&&this.anim();var d=Date.now()-(this.lastScroll||0)>30,e=b("emptyFunction");a!==0&&(e=this.setFocused.bind(this,c));b("isAsyncScrollQuery")()&&(d=!1,e(),e=b("emptyFunction"));this.scrolling=!0;this.scrollingTimer&&clearTimeout(this.scrollingTimer);this.$6();var f=b("Vector").getViewportDimensions().y-k-this.getScrollOffset();if(this.selected){var g=b("DOM").scry(this.selected,"._2pum")[0],h=b("DOM").scry(c,"._2pum")[0];g&&a>0&&(this.isExplore=!0);h&&(this.isExplore=!1)}this.root.id==="pagelet_explore_feed"&&(this.isExplore=!0);this.isExplore&&(f-=j);this.anim=b("DOMScroll").scrollTo(c,d?this.getAnimationLength(c):0,!1,f,0,function(){this.scrollingTimer=setTimeout(function(){this.scrolling=!1}.bind(this),300);var a=b("Vector").getScrollPosition();e();a.distanceTo(b("Vector").getScrollPosition())!==0&&b("DOMScroll").scrollTo(a,0)}.bind(this));this.setSelected(c,!0);this.lastScroll=Date.now()};o.prototype.setTabindexOnStory=function(a,b){"use strict";a&&this.isStory(a)&&(a.tabIndex=parseInt(b,10))};o.prototype.setFocused=function(a){"use strict";a&&this.isStory(a)&&b("Focus").setWithoutOutline(a)};o.init=function(a){"use strict";return new o(a)};e.exports=o}),null);