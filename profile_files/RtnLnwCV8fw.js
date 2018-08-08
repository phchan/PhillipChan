if (self.CavalryLogger) { CavalryLogger.start_js(["tAG+N"]); }

__d("ConnectionsPYMLTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(){this.clear()}a.prototype.log=function(){b("GeneratedLoggerUtils").log("logger:ConnectionsPYMLLoggerConfig",this.$1,b("Banzai").BASIC)};a.prototype.logVital=function(){b("GeneratedLoggerUtils").log("logger:ConnectionsPYMLLoggerConfig",this.$1,b("Banzai").VITAL)};a.prototype.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:ConnectionsPYMLLoggerConfig",this.$1,{signal:!0})};a.prototype.clear=function(){this.$1={};return this};a.prototype.getData=function(){return babelHelpers["extends"]({},this.$1)};a.prototype.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.setEvent=function(a){this.$1.event=a;return this};a.prototype.setLikeSource=function(a){this.$1.like_source=a;return this};a.prototype.setPageID=function(a){this.$1.page_id=a;return this};a.prototype.updateExtraData=function(a){a=b("nullthrows")(b("GeneratedLoggerUtils").serializeMap(a));b("GeneratedLoggerUtils").checkExtraDataFieldNames(a,g);this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.addToExtraData=function(a,b){var c={};c[a]=b;return this.updateExtraData(c)};var g={event:!0,like_source:!0,page_id:!0};e.exports=a}),null);
__d("ChatTabViewEvents",["Arbiter"],(function(a,b,c,d,e,f){"use strict";e.exports=new(b("Arbiter"))()}),null);
__d("Tour",["Arbiter","LayerDestroyOnHide","LayerHideOnEscape","NavigationMessage","PageEvents"],(function(a,b,c,d,e,f){__p&&__p();function g(){"use strict";g._instance&&g._instance.setTourComplete(),g._instance=this}g.prototype.init=function(){"use strict";this._pageLeaveToken=b("Arbiter").subscribe(b("PageEvents").AJAXPIPE_ONUNLOAD,this.handleLeavePage.bind(this));this._navigationBeginToken=b("Arbiter").subscribe(b("NavigationMessage").NAVIGATION_BEGIN,this.handleTransition.bind(this));this.steps={};return this};g.prototype.registerStep=function(a,c){"use strict";a.disableBehavior(b("LayerDestroyOnHide")),a.disableBehavior(b("LayerHideOnEscape")),this.steps[c]=a,a.subscribe("show",function(){a.inform("tour-dialog-show",a)}),this.getTourStarted()||this.setTourStart()};g.prototype._unsubscribeSubscriptions=function(){"use strict";this._navigationBeginToken.unsubscribe(),this._pageLeaveToken.unsubscribe()};g.prototype.handleLeavePage=function(){"use strict";this._unsubscribeSubscriptions()};g.prototype.handleTransition=function(){"use strict";this._unsubscribeSubscriptions()};g.prototype.handleTourStart=function(){"use strict"};g.prototype.handleTourStop=function(){"use strict"};g.prototype.handleTourComplete=function(){"use strict"};g.prototype.showStep=function(a){"use strict";a=this.steps[a];this.openDialog==a||this.hideOpenDialog();if(!a)return;this.openDialog=a;a.show()};g.prototype.hideOpenDialog=function(){"use strict";this.openDialog&&(this.openDialog.hide(),this.openDialog=null)};g.prototype.getTourStarted=function(){"use strict";return this.tourStarted};g.prototype.setTourStart=function(){"use strict";this.tourStarted=!0,this.handleTourStart()};g.prototype.setTourStop=function(){"use strict";this.tourStarted=!1,this.hideOpenDialog(),this.handleTourStop()};g.prototype.setTourComplete=function(){"use strict";if(this.tourComplete)return;this.setTourStop();this.tourComplete=!0;this.handleTourComplete()};g.prototype.hideStep=function(a){"use strict";a=this.steps[a];a&&a.hide()};g.getInstance=function(){"use strict";return g._instance||(g._instance=new g())};Object.assign(g.prototype,{tourStarted:!1,tourComplete:!1,_navigationBeginToken:null,_pageLeaveToken:null,steps:{},openDialog:null});e.exports=g}),null);
__d("EgoActionType",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({IMP:1,CLICK:2,CONVERSION:4,SUPPRESS:8,NEXT:16,ERROR:32,XOUT:24,NONE:0})}),null);
__d("EgoPageServiceConstants",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({FAN:"fan",UNFAN:"unfan",PAGE_VIEW:"page_view",FRIEND_VIEW:"friend_view",SEE_ALL:"see_all",ADD_INTEREST:"add_interest",CONTEXT_ITEM:"tap_context_item",BOOST_POST:"tap_boost_post",WATCH_AS_PAGE:"watch_as_page",UNWATCH_AS_PAGE:"unwatch_as_page",SHOP_VIEW:"shop_view",MESSAGE:"message",FOLLOW:"follow",UNFOLLOW:"unfollow",SUBSCRIBE:"subscribe"})}),null);
__d("XPubcontentInteractionLoggingController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/pubcontent/suggestions/interaction_logging/",{})}),null);
__d("PageFanning",["ActorURI","Animation","AsyncRequest","ConnectionsPYMLTypedLogger","CSS","DOM","EgoActionType","EgoPageServiceConstants","Parent","URI","XPubcontentInteractionLoggingController","$","collectDataAttributes"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g={setFanStatus:function(a,c,d,e,f,i,j){__p&&__p();var k={ft:{}};a&&(k={ft:b("collectDataAttributes")(a,["ft"]).ft});var l=new(b("URI"))(window.location.href).getQueryData();d&&(l.ref==="pyml_feed"?new(b("ConnectionsPYMLTypedLogger"))().setEvent("like_page").setLikeSource("profile").setPageID(parseInt(c,10)).log():l.ref==="pyml_permalink"&&new(b("ConnectionsPYMLTypedLogger"))().setEvent("like_page").setLikeSource("post_permalink").setPageID(parseInt(c,10)).log());f=f||function(b){b=b.getPayload();if(!b||!a)return;b.reload?g.reloadOnFanStatusChanged():h(a,b)};l={fbpage_id:c,add:d,reload:e};j!=null&&Object.assign(l,j);Object.assign(l,k);c="/ajax/pages/fan_status.php";j!=null&&j.actor_id!=null&&(c=b("ActorURI").create(c,j.actor_id));e=new(b("AsyncRequest"))().setURI(c).setData(l).setNectarModuleDataSafe(a).setHandler(f);i&&e.setErrorHandler(i);e.send();if(j.fan_origin==="PSYM"&&d&&j.egodata!==null){k={q:j.egodata,action:b("EgoPageServiceConstants").FAN,action_type:b("EgoActionType").CONVERSION};new(b("AsyncRequest"))().setMethod("POST").setURI(b("XPubcontentInteractionLoggingController").getURIBuilder().getURI()).setData(k).send()}return!1},reloadOnFanStatusChanged:function(){var a=b("URI").getRequestURI();window.location.href=a},toggleLikeOnFanStatusChanged:function(a,c){var d=b("$")("liked_pages_like_action_"+a);a=b("$")("liked_pages_undo_action_"+a);b("CSS").conditionClass(d,"hidden_elem",c);b("CSS").conditionClass(a,"hidden_elem",!c)}};function h(a,c){var d=c.feedback;if(!d)return;b("Parent").byClass(a,"fbTimelineEscapeSectionItem")&&(a=b("Parent").byClass(a,"fan_status_inactive")||a);var e=b("DOM").create("span",{className:"fan_status_inactive"},d);a.parentNode.replaceChild(e,a);d=function(){c.can_repeat_action&&e.parentNode.replaceChild(a,e)};new(b("Animation"))(e).duration(3e3).checkpoint().to("backgroundColor","#FFFFFF").duration(1e3).ondone(d).go()}e.exports=g}),null);
__d("PagePostEngagementFictionDialogStrings",["FbtResult","immutable"],(function(a,b,c,d,e,f){"use strict";var g=b("immutable").Map();a={setStrings:function(a,b,c,d,e,f){g=g.set(a,{pageLikeHeader:b,pageLikeBody:c,pageReshareHeader:d,pageReshareBody:e,pageId:f})},getStrings:function(a){return g.get(a)}};e.exports=a}),null);
__d("PagePostEngagementFrictionEngagementType",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({PAGE_LIKE:"page_like",RESHARE:"reshare"})}),null);
__d("PagePostEngagementFrictionDialog.react",["cx","fbt","FDSButton.react","FlexLayout.react","LeftRight.react","PagePostEngagementFictionDialogStrings","PagePostEngagementFrictionEngagementType","React","XUICloseButton.react","XUIDialog.react","XUIText.react","nullthrows"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i,j=function(a){var c=b("nullthrows")(b("PagePostEngagementFictionDialogStrings").getStrings(a.fbid));c=a.engagementType===b("PagePostEngagementFrictionEngagementType").PAGE_LIKE?c.pageLikeHeader:c.pageReshareHeader;return b("React").createElement("div",{className:"_4mgg"},b("React").createElement(b("FlexLayout.react"),{align:"center",justify:"all"},b("React").createElement(b("XUIText.react"),{display:"inline",size:"header3",weight:"bold"},c),b("React").createElement(b("XUICloseButton.react"),{onClick:a.onXOut})))},k=function(a){var c=b("nullthrows")(b("PagePostEngagementFictionDialogStrings").getStrings(a.fbid));a=a.engagementType===b("PagePostEngagementFrictionEngagementType").PAGE_LIKE?c.pageLikeBody:c.pageReshareBody;return b("React").createElement("div",{className:"_4mgc"},b("React").createElement(b("XUIText.react"),{display:"block",size:"body1"},a))},l=h._("Cancel"),m=h._("Like Page"),n=h._("Share Post"),o=h._("Go to Page"),p=function(a){return b("React").createElement("div",{className:"_4mgh"},b("React").createElement(b("LeftRight.react"),null,b("React").createElement(b("FDSButton.react"),{label:o,onClick:a.onGoToPage,size:"medium"}),b("React").createElement("div",null,b("React").createElement(b("FDSButton.react"),{label:m,onClick:a.onLikePage,size:"medium"}),b("React").createElement("div",{className:"_69nv"},b("React").createElement(b("FDSButton.react"),{label:l,onClick:a.onCancel,size:"medium",use:"primary"})))))},q=function(a){return b("React").createElement("div",{className:"_4mgh"},b("React").createElement(b("LeftRight.react"),null,b("React").createElement(b("FDSButton.react"),{label:o,onClick:a.onGoToPage,size:"medium"}),b("React").createElement("div",null,b("React").createElement(b("FDSButton.react"),{label:n,onClick:a.onSharePost,size:"medium"}),b("React").createElement("div",{className:"_69nv"},b("React").createElement(b("FDSButton.react"),{label:l,onClick:a.onCancel,size:"medium",use:"primary"})))))},r=function(a){return a.engagementType===b("PagePostEngagementFrictionEngagementType").PAGE_LIKE?b("React").createElement(p,{onCancel:a.onCancel,onGoToPage:a.onGoToPage,onLikePage:b("nullthrows")(a.onLikePage)}):b("React").createElement(q,{onCancel:b("nullthrows")(a.onCancel),onGoToPage:a.onGoToPage,onSharePost:b("nullthrows")(a.onSharePost)})};c=babelHelpers.inherits(a,b("React").PureComponent);i=c&&c.prototype;function a(){var a,b;for(var c=arguments.length,d=new Array(c),e=0;e<c;e++)d[e]=arguments[e];return b=(a=i.constructor).call.apply(a,[this].concat(d)),this.state={requestedClose:!1},this.$2=function(){this.$1(this.props.onCancel)}.bind(this),this.$3=function(){this.$1(this.props.onLikePage)}.bind(this),this.$4=function(){this.$1(this.props.onSharePost)}.bind(this),this.$5=function(){this.$1(this.props.onGoToPage)}.bind(this),b}a.prototype.$1=function(a){this.setState({requestedClose:!0}),a&&a()};a.prototype.render=function(){var a=!this.state.requestedClose&&this.props.shown;return b("React").createElement(b("XUIDialog.react"),{hideOnEscape:!1,isStrictlyControlled:!0,label:"Dialog that shows up when a user likes a Page that is dubious or reshares a post from a dubious Page",layerHideOnBlur:!1,onHide:this.$2,shown:a,width:400},b("React").createElement(j,{engagementType:this.props.engagementType,fbid:this.props.fbid,onXOut:this.$2}),b("React").createElement(k,{engagementType:this.props.engagementType,fbid:this.props.fbid}),b("React").createElement(r,{engagementType:this.props.engagementType,onCancel:this.$2,onGoToPage:this.$5,onLikePage:this.$3,onSharePost:this.$4}))};e.exports=a}),null);
__d("XPagesLikeAndReshareShownController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/pages/integrity/transparency/reshareAndLikeFrictionShown/",{})}),null);
__d("PagePostEngagementFrictionActions",["AsyncRequest","DOM","FBLogger","PagePostEngagementFrictionDialog.react","PagePostEngagementFrictionEngagementType","React","ReactDOM","XPagesLikeAndReshareShownController","XVanityURLController","goURI"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("DOM").create("div"),h=function(a,c,d,e,f,h){b("ReactDOM").unmountComponentAtNode(g),b("ReactDOM").render(b("React").createElement(b("PagePostEngagementFrictionDialog.react"),{engagementType:h,fbid:a,onCancel:c,onGoToPage:d,onLikePage:e,onSharePost:f,shown:!0}),g)},i=function(a,c){new(b("AsyncRequest"))().setURI(b("XPagesLikeAndReshareShownController").getURIBuilder().getURI()).setMethod("POST").setData({engagement_type:c,page_id:a}).setHandler(function(a){}).setErrorHandler(function(a){b("FBLogger")("pages_integrity").catching(a.toError()).warn("Unable to set that the user has seen the like/reshare friction dialog")}).send()};a=function(a){a=b("XVanityURLController").getURIBuilder().setString("vanity",a).getURI();b("goURI")(a)};c=function(a,c,d,e){h(a,d,e,c,null,b("PagePostEngagementFrictionEngagementType").PAGE_LIKE),i(a,b("PagePostEngagementFrictionEngagementType").PAGE_LIKE)};d=function(a,c,d,e){h(a,d,e,null,c,b("PagePostEngagementFrictionEngagementType").RESHARE),i(a,b("PagePostEngagementFrictionEngagementType").RESHARE)};e.exports={goToPage:a,showPageLikeEngagementFrictionDialog:c,showReshareEngagementFrictionDialog:d}}),null);
__d("PagePostEngagementFrictionStore",["immutable"],(function(a,b,c,d,e,f){"use strict";var g=b("immutable").Set();a={add:function(a){g=g.add(a)},contains:function(a){a=g.get(a);return a!==null&&a!==undefined}};e.exports=a}),null);
__d("PagesLikeFollowNotifActions",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({INIT_DATA:"init_data",LIKE:"like",UNLIKE:"unlike",FOLLOW_CHANGED:"follow_changed",SNOOZE_CHANGED:"snooze_changed",NOTIF_CHANGE:"notif_change",NOTIF_ALL_ON:"notif_all_on",NOTIF_ALL_OFF:"notif_all_off",NEWS_FEED_CHANGE:"news_feed_change"})}),null);
__d("PagesLikeFollowNotifDispatcher",["Arbiter","ExplicitRegistrationReactDispatcher","PageLikeConstants","PagesLikeFollowNotifActions","SubscriptionsHandler"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;c=babelHelpers.inherits(a,b("ExplicitRegistrationReactDispatcher"));g=c&&c.prototype;function a(a){g.constructor.call(this,a);a=new(b("SubscriptionsHandler"))();a.addSubscriptions(b("Arbiter").subscribe(b("PageLikeConstants").LIKED,function(a,b){return this.dispatchLike(b.profile_id)}.bind(this)),b("Arbiter").subscribe(b("PageLikeConstants").UNLIKED,function(a,b){return this.dispatchUnlike(b.profile_id)}.bind(this)))}a.prototype.dispatchLike=function(a){this.dispatch({type:b("PagesLikeFollowNotifActions").LIKE,data:{pageID:a,likeStatus:!0}})};a.prototype.dispatchUnlike=function(a){this.dispatch({type:b("PagesLikeFollowNotifActions").UNLIKE,data:{pageID:a,likeStatus:!1}})};e.exports=new a({strict:!0})}),null);
__d("PagesFollowStore",["FluxReduceStore","PagesLikeFollowNotifActions","PagesLikeFollowNotifDispatcher"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;g=babelHelpers.inherits(a,b("FluxReduceStore"));g&&g.prototype;a.prototype.getInitialState=function(){return{}};a.prototype.reduce=function(a,c){var d=babelHelpers["extends"]({},a);switch(c.type){case b("PagesLikeFollowNotifActions").INIT_DATA:if(c.data.pageID in a)return a;d[c.data.pageID]=c.data.followStatus;return d;case b("PagesLikeFollowNotifActions").FOLLOW_CHANGED:d[c.data.pageID]=c.data.followStatus;return d}return a};function a(){g.apply(this,arguments)}a.__moduleID=e.id;e.exports=new a(b("PagesLikeFollowNotifDispatcher"))}),null);
__d("XPagesLikeCountController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/pages/x/updateLikeCountDomString/",{page_id:{type:"Int",required:!0},like_id:{type:"String",required:!0}})}),null);
__d("PageLikeButton",["Promise","Arbiter","AsyncRequest","AsyncResponse","DOM","EditSubscriptions","Event","FeedBlacklistButton","PageFanning","PageLikeConstants","PagePostEngagementFrictionActions","PagePostEngagementFrictionStore","PagesFollowStore","PagesLikeFollowNotifActions","PagesLikeFollowNotifDispatcher","ProfileSubFollowStatus","SocialGoodCharityActionsLoggerUtils","Tour","XPagesLikeCountController","promiseDone"],(function(a,b,c,d,e,f){__p&&__p();var g=b("PagePostEngagementFrictionActions").goToPage,h=b("PagePostEngagementFrictionActions").showPageLikeEngagementFrictionDialog,i={init:function(a,c,d,e,f,g,h,i,j,k,l,m){__p&&__p();i=this._getOption(m,"isLazy");this._subscribe(b("PageLikeConstants").LIKED,i,function(c,f){this._shouldUpdateButton(e,m,f)&&(a.swap(),j||d.suppressNextMouseEnter&&d.suppressNextMouseEnter(),this._getOption(m,"is_fundraiser")&&b("EditSubscriptions").toggleNotificationsOnJoin(e,!0))}.bind(this));this._subscribe(b("PageLikeConstants").UNLIKED,i,function(c,f){this._shouldUpdateButton(e,m,f)&&(a.unswap(),d.hideFlyout&&d.hideFlyout(),this._getOption(m,"is_fundraiser")&&b("EditSubscriptions").toggleNotificationsOnJoin(e,!1))}.bind(this));l&&this._subscribe(b("PageLikeConstants").SPM_CALLOUT,i,function(a,c){this._shouldUpdateButton(e,m,c)&&(l.show(),b("Arbiter")._releaseAllEvents(b("PageLikeConstants").SPM_CALLOUT))}.bind(this));var n=function(event){var b=a.getCurrentButton();this._likeButtonAction(e,f,g,h,b,event,m,a)}.bind(this);b("Event").listen(c,"click",n);i&&b("Arbiter").subscribe(b("PageLikeConstants").LAZY_CLICK,function(a,b){var event=b.event;a=b.node;if(a!==c)return;n(event)})},_subscribe:function(event,a,c){a=a?[event,event+".lazy"]:[event];b("Arbiter").subscribe(a,c)},initCallout:function(a,c){var d=document.getElementById("pageActionLikeCalloutButton");b("Event").listen(d,"click",this._likeButtonAction(a,c,null,null,null,null))},initUnlike:function(a,c,d,e){var f=this._getOption(e,"actor_id");b("Event").listen(a,"click",function(event){this.doUnlikeAction(event,c,d,f,e)}.bind(this))},initUnlikeAndHide:function(a,c,d,e){var f=this._getOption(e,"actor_id");b("Event").listen(a,"click",function(event){this.doUnlikeAction(event,c,d,f,e),b("DOM").remove(a)}.bind(this))},doUnlikeAction:function(event,a,c,d,e){this._saveLike(event.target,a,!1,function(c){b("Arbiter").inform(b("PageLikeConstants").LIKED,{profile_id:a,actor_id:d}),b("AsyncResponse").defaultErrorHandler(c)},c,null,null,e),this.informUnlike(a,d)},doLikeAction:function(a,c,d,e){var f=this._interceptLikeIfNecessary(c).then(function(f){if(f){f={actor_id:e};this._saveLike(a,c,!0,function(a){a.getError()!==1431019&&b("Arbiter").inform(b("PageLikeConstants").UNLIKED,{profile_id:c,actor_id:e}),b("AsyncResponse").defaultErrorHandler(a)},d,null,null,f);i.informLike(c,a,d,f)}}.bind(this),function(a){throw a});b("promiseDone")(f)},informLike:function(a,c,d,e){e=this._getOption(e,"actor_id");e={profile_id:a,actor_id:e,target:c,origin:d};b("Arbiter").inform(b("PageLikeConstants").LIKED,e);e.connected=!0;c=b("PagesFollowStore").getState();(!(a in c)||!c[a]||c[a]!==b("ProfileSubFollowStatus").SEE_FIRST)&&b("PagesLikeFollowNotifDispatcher").dispatch({type:b("PagesLikeFollowNotifActions").FOLLOW_CHANGED,data:{pageID:e.profile_id,followStatus:!0}});b("Arbiter").inform(b("FeedBlacklistButton").UNBLACKLIST,e)},informLikeSuccess:function(a){a={profile_id:a};b("Arbiter").inform(b("PageLikeConstants").LIKED_SUCCESS,a);b("Arbiter").inform(b("PageLikeConstants").SPM_CALLOUT,a)},informUnlike:function(a,c){var d={profile_id:a,actor_id:c};setTimeout(b("Arbiter").inform.bind(b("Arbiter"),b("PageLikeConstants").UNLIKED,d),0);d.connected=!1;setTimeout(function(){return b("PagesLikeFollowNotifDispatcher").dispatch({type:b("PagesLikeFollowNotifActions").FOLLOW_CHANGED,data:{pageID:d.profile_id,followStatus:!1}})},0);b("Arbiter").inform(b("FeedBlacklistButton").BLACKLIST,d)},updateLikeCount:function(a,c){b("Arbiter").subscribe(b("PageLikeConstants").LIKED_SUCCESS,function(d,e){d=e.profile_id;if(c==d){e=b("XPagesLikeCountController").getURIBuilder().setInt("page_id",c).setString("like_id",a).getURI();new(b("AsyncRequest"))().setURI(e).send()}})},_saveLike:function(a,c,d,e,f,g,h,j){var k=this._getOption(j,"actor_id"),l=this._getOption(j,"egodata");b("Tour").getInstance().hideStep("low_page_likes");this._getOption(j,"is_fundraiser")&&this._getOption(j,"logging_info")&&b("SocialGoodCharityActionsLoggerUtils").logJoinActionClick(d,this._getOption(j,"logging_info"));b("PageFanning").setFanStatus(a,c,d,!1,function(){i.informLikeSuccess(c),(!d&&this._getOption(j,"reload_on_unlike")||d&&this._getOption(j,"reload_on_like"))&&location.reload()}.bind(this),e,{fan_origin:f,fan_source:g,cat:h,actor_id:k,egodata:l})},_likeButtonAction:function(a,c,d,e,f,event,g,h){var i=this._interceptLikeIfNecessary(a).then(function(b){b?this._continueProcessingLikeAfterIntercept(a,c,d,e,f,event,g):h!==null&&h!==undefined&&h.unswap!==null&&h.unswap!==undefined&&h.unswap()}.bind(this),function(a){throw a});b("promiseDone")(i)},_continueProcessingLikeAfterIntercept:function(a,c,d,e,f,event,g){var h=this._getOption(g,"actor_id");this._saveLike(event.getTarget(),a,!0,function(c){b("Arbiter").inform(b("PageLikeConstants").UNLIKED,{profile_id:a,actor_id:h}),b("AsyncResponse").defaultErrorHandler(c)},c,d,e,g);i.informLike(a,f,c,g)},_interceptLikeIfNecessary:function(a){return new(b("Promise"))(function(c,d){d=b("PagePostEngagementFrictionStore").contains(a);d?h(a,function(){return c(!0)},function(){return c(!1)},function(){c(!1),g(a)}):c(!0)})},_shouldUpdateButton:function(a,b,c){b=this._getOption(b,"actor_id");if(a===c.profile_id){if(b===null)return!0;if(c.actor_id!==null&&b===c.actor_id)return!0}return!1},_getOption:function(a,b){return a&&b in a?a[b]:null}};e.exports=i;a.PageLikeButton=i}),null);
__d("PageTimelineChainingTypeConstants",[],(function(a,b,c,d,e,f){e.exports={FANNING:"fanning",FOLLOW:"follow",SHOW_FOLLOW:"show_follow"}}),null);
__d("PagesTimelineChaining",["Arbiter","Banzai","ChatTabViewEvents","CSS","Event","PageLikeConstants","PagesFollowStore","PageTimelineChainingTypeConstants","Run","Style","SubscriptionsHandler","UIPagelet"],(function(a,b,c,d,e,f){__p&&__p();var g=0;a={_recentlyLikedPageIDs:{},_recentlyMessagedPageIDs:{},container:null,_subscriptions:[],_chatSubscriptions:[],_followSubscription:null,_isFollow:!1,_shouldShowRelatedPagesOnBounce:!1,init:function(a,c){this.container=a,this._followSubscription=new(b("SubscriptionsHandler"))(),this._isFollow=c.isFollow,this._shouldShowRelatedPagesOnBounce=c.shouldShowRelatedPagesOnBounce,b("Run").onLeave(function(){return this._unsubscribe()}.bind(this)),this._showChainSuggestions(c.pageID,!1)||(this._subscriptions=[b("Arbiter").subscribe(b("PageLikeConstants").LIKED,this.onLike.bind(this,c.pageID))],c.canFollow&&this._followSubscription.addSubscriptions(b("PagesFollowStore").addListener(function(){var a=b("PagesFollowStore").getState();if(!(c.pageID in a))return;a[c.pageID]&&!this._isFollow&&this._onFollow(c.pageID);this._isFollow=a[c.pageID]}.bind(this))),c.enableLikeCheckup&&this._subscriptions.push(b("Arbiter").subscribe(b("PageLikeConstants").UNLIKED,this.onUnlike.bind(this))),c.onMessageEnabled&&this._chatSubscriptions.push(b("ChatTabViewEvents").subscribe("chat-send-to-page",this.onMessage.bind(this,c.pageID))),c.shouldShowRelatedPagesOnBounce&&window.addEventListener("scroll",this.onScroll.bind(this,c.pageID),!1))},onScroll:function(a){if(document.documentElement){var b=window.pageYOffset||document.documentElement.scrollTop;b<=g&&(this._showChainSuggestions(a,!0),this._unsubscribe());g=b}},onLike:function(a,b,c){c.profile_id===a&&c.target&&(this._recentlyLikedPageIDs[a]=!0,this._showChainSuggestions(a,!1),this._unsubscribe())},_onFollow:function(a){this._showChainFollowSuggestions(a),this._unsubscribe()},onMessage:function(a,b,c){c&&c.pageID===a&&(this._recentlyMessagedPageIDs[a]=!0,this._showMessageSuggestions(a),this._unsubscribe())},onUnlike:function(a,c){b("UIPagelet").loadFromEndpoint("PagesLikeCheckupPagelet",this.container,{},{displayCallback:this.displayCallback.bind(this)}),this._unsubscribe()},displayCallback:function(a){a&&a();a=this.container.firstChild;a&&b("Style").set(this.container,"height",a.offsetHeight+"px")},_showChainSuggestions:function(a,c){if(!(a in this._recentlyLikedPageIDs)&&!(this._shouldShowRelatedPagesOnBounce&&c))return!1;c=b("PageTimelineChainingTypeConstants").FANNING;b("UIPagelet").loadFromEndpoint("PagesTimelineChainingPagelet",this.container,{pageID:a,type:c},{displayCallback:this.displayCallback.bind(this)});return!0},_showChainFollowSuggestions:function(a){var c=b("PageTimelineChainingTypeConstants").FOLLOW;b("UIPagelet").loadFromEndpoint("PagesTimelineChainingPagelet",this.container,{pageID:a,type:c},{displayCallback:this.displayCallback.bind(this)});return!0},_showMessageSuggestions:function(a){if(!(a in this._recentlyMessagedPageIDs))return!1;b("UIPagelet").loadFromEndpoint("PagesMessageChainingPagelet",this.container,{pageID:a},{displayCallback:this.displayCallback.bind(this)});return!0},dismissCallback:function(a,c,d){b("CSS").hide(this.container);delete this._recentlyLikedPageIDs[c];this._unsubscribe();if(d==="friend_inviter_chaining"){a="pages_growth_general_analytical_logger";d={id:c,event:"dismiss_carousel",event_target:"friend_inviter_chaining",feature_name:"friend_inviter_chaining_investigate"};b("Banzai").post(a,d)}},attachDismissCallback:function(a,c,d,e){b("Event").listen(a,"click",this.dismissCallback.bind(this,c,d,e))},_unsubscribe:function(){this._subscriptions.length&&(this._subscriptions.forEach(function(a){return b("Arbiter").unsubscribe(a)}),this._subscriptions=[]),this._chatSubscriptions.length&&(this._chatSubscriptions.forEach(function(a){return b("ChatTabViewEvents").unsubscribe(a)}),this._chatSubscriptions=[]),this._followSubscription&&this._followSubscription.release()}};e.exports=a}),null);
__d("XControllerWithPageTokenURIUpdater",[],(function(a,b,c,d,e,f){a={updateURI:function(a){window.history&&window.history.replaceState(window.history.state,null,a)}};e.exports=a}),null);