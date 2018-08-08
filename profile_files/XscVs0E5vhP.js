if (self.CavalryLogger) { CavalryLogger.start_js(["2frCR"]); }

__d("AbstractBadge.react",["cx","invariant","React","formatNumber","joinClasses"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i;c=b("React").PropTypes;function j(a){return parseInt(a,10)===a}i=babelHelpers.inherits(a,b("React").PureComponent);i&&i.prototype;a.prototype.render=function(){"use strict";__p&&__p();var a=this.props,c=a.count,d=a.maxcount,e=a.label;a=babelHelpers.objectWithoutProperties(a,["count","maxcount","label"]);j(c)||h(0);j(d)||h(0);var f="_51lp"+(c>d?" _51lr":"")+(!this.props.allowZero&&c===0?" hidden_elem":"");e=e?b("React").createElement("span",{className:"accessible_elem","aria-hidden":c?"false":"true"},"\xa0",e):null;c=b("formatNumber").withMaxLimit(c,d);e!==null&&(c=b("React").createElement("span",{"aria-hidden":"true"},c));return b("React").createElement("span",babelHelpers["extends"]({},a,{className:b("joinClasses")(this.props.className,f)}),c,e)};function a(){"use strict";i.apply(this,arguments)}a.propTypes={className:c.string,count:c.number.isRequired,maxcount:c.number,label:c.string};a.defaultProps={maxcount:20};e.exports=a}),null);
__d("XUIBadge.react",["cx","AbstractBadge.react","React","joinClasses"],(function(a,b,c,d,e,f,g){__p&&__p();var h;c=b("React").PropTypes;h=babelHelpers.inherits(a,b("React").Component);h&&h.prototype;a.prototype.render=function(){"use strict";var a=this.props.type;a="_5ugh"+(a==="regular"?" _5ugf":"")+(a==="special"?" _5ugg":"");return b("React").createElement(b("AbstractBadge.react"),babelHelpers["extends"]({},this.props,{className:b("joinClasses")(this.props.className,a),type:null}))};function a(){"use strict";h.apply(this,arguments)}a.propTypes={type:c.oneOf(["regular","special"]),allowZero:c.bool};a.defaultProps={type:"regular"};e.exports=a}),null);
__d("EventPlanExperiment",["EventRemindersGating","QE2Logger"],(function(a,b,c,d,e,f){"use strict";var g="event_plan_entry_point_nux";a={shouldShowEntryPointNuxWithExposure:function(){b("QE2Logger").logExposureForUser(g);return b("EventRemindersGating").shouldShowEntryPointNux},shouldShowReminderExtension:function(){b("QE2Logger").logExposureForUser("omni_m_experiments_reminders");return b("EventRemindersGating").omniMAlwaysShowReminderExtension}};e.exports=a}),null);
__d("StickersTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(){this.clear()}a.prototype.log=function(){b("GeneratedLoggerUtils").log("logger:StickersLoggerConfig",this.$1,b("Banzai").BASIC)};a.prototype.logVital=function(){b("GeneratedLoggerUtils").log("logger:StickersLoggerConfig",this.$1,b("Banzai").VITAL)};a.prototype.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:StickersLoggerConfig",this.$1,{signal:!0})};a.prototype.clear=function(){this.$1={};return this};a.prototype.getData=function(){return babelHelpers["extends"]({},this.$1)};a.prototype.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.setEvent=function(a){this.$1.event=a;return this};a.prototype.setNumsearchresults=function(a){this.$1.numsearchresults=a;return this};a.prototype.setPackid=function(a){this.$1.packid=a;return this};a.prototype.setPackids=function(a){this.$1.packids=b("GeneratedLoggerUtils").serializeVector(a);return this};a.prototype.setSearchtoken=function(a){this.$1.searchtoken=a;return this};a.prototype.setStickerid=function(a){this.$1.stickerid=a;return this};a.prototype.setTagid=function(a){this.$1.tagid=a;return this};a.prototype.setTriggeredword=function(a){this.$1.triggeredword=a;return this};a.prototype.setTriggerused=function(a){this.$1.triggerused=a;return this};c={event:!0,numsearchresults:!0,packid:!0,packids:!0,searchtoken:!0,stickerid:!0,tagid:!0,triggeredword:!0,triggerused:!0};e.exports=a}),null);
__d("ContextualLayerAutoFlipHorizontal",["ContextualLayerAutoFlip"],(function(a,b,c,d,e,f){__p&&__p();var g;g=babelHelpers.inherits(a,b("ContextualLayerAutoFlip"));g&&g.prototype;a.prototype.getValidPositions=function(a){"use strict";return[a.getPosition()]};function a(){"use strict";g.apply(this,arguments)}e.exports=a}),null);
__d("MessengerReactionsContextualDialog.react",["cx","AccessibleLayer","ContextualLayerAutoFlipHorizontal","ContextualLayerHideOnScrollOut","ContextualLayerUpdateOnScroll","LayerHideOnEscape","ReactAbstractContextualDialog","ReactLayer"],(function(a,b,c,d,e,f,g){"use strict";a=b("ReactLayer").createClass(b("ReactAbstractContextualDialog").createSpec({addedBehaviors:[b("ContextualLayerAutoFlipHorizontal"),b("ContextualLayerHideOnScrollOut"),b("ContextualLayerUpdateOnScroll"),b("LayerHideOnEscape"),b("AccessibleLayer")],displayName:"MessengerReactionsContextualDialog",shouldSetARIAProperties:!1,theme:{wrapperClassName:"_4owc"}}));e.exports=a}),null);
__d("MNPlatformAttributionTags",[],(function(a,b,c,d,e,f){e.exports={ATTRIBUTION_TAGS_PREFIX:"bnp:trigger:",CUSTOMER_CHAT_PLUGIN:"customer_chat_plugin",MESSENGERDOTCOM:"messengerdotcom",MESSENGER_WEB:"messenger_web",MESSENGER_WEB_SEARCH:"messenger_web_search",M_DOT_ME:"m_dot_me"}}),null);
__d("MessengerStore",["MessengerDispatcher","mixInEventEmitter"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(){this.$1=b("MessengerDispatcher").register(this.__onDispatch.bind(this))}a.prototype.getDispatchToken=function(){return this.$1};a.prototype.emitChange=function(){this.emit("change")};a.prototype.destroy=function(){b("MessengerDispatcher").unregister(this.$1)};b("mixInEventEmitter")(a,{change:!0});e.exports=a}),null);
__d("MessengerAttributionTagsStore",["MessengerActions","MessengerStore"],(function(a,b,c,d,e,f){__p&&__p();var g;c=babelHelpers.inherits(a,b("MessengerStore"));g=c&&c.prototype;function a(){"use strict";g.constructor.call(this),this.$MessengerAttributionTagsStore1={messagingTags:null,threadID:null}}a.prototype.getState=function(){"use strict";return this.$MessengerAttributionTagsStore1};a.prototype.__onDispatch=function(a){"use strict";__p&&__p();switch(a.type){case b("MessengerActions").Types.UPDATE_THREAD_TAG:this.$MessengerAttributionTagsStore1.messagingTags=a.messagingTags;this.$MessengerAttributionTagsStore1.threadID=a.threadID;this.emitChange();break;case b("MessengerActions").Types.SELECT_THREAD:this.$MessengerAttributionTagsStore1.messagingTags=null;this.$MessengerAttributionTagsStore1.threadID=null;this.emitChange();break}};e.exports=new a()}),null);
__d("MessengerDiscoveryLoggingEnums",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({ENTRYPOINT_PREFIX:"entrypoint:"})}),null);
__d("MessengerDiscoveryEntryPointsLoggingHelper",["MessengerDiscoveryEntryPoint","MessengerDiscoveryLoggingEnums"],(function(a,b,c,d,e,f){"use strict";a={getEntryPointsLoggingTagStr:function(a){if(a.length==0||Object.values(b("MessengerDiscoveryEntryPoint")).indexOf(a[0])==-1)throw new Error("Please use enums in MessengerDiscoveryEntryPoints class");return b("MessengerDiscoveryLoggingEnums").ENTRYPOINT_PREFIX+a.join(":")}};e.exports=a}),null);
__d("MNPlatformTagsDataManager",["MessagingSourceEnum","MessengerActions","MessengerAttributionTagsStore","MessengerDiscoveryEntryPoint","MessengerDiscoveryEntryPointsLoggingHelper","MNPlatformAttributionTags"],(function(a,b,c,d,e,f){"use strict";__p&&__p();e.exports={getTags:function(a){__p&&__p();a===void 0&&(a=null);var c=null,d=null;switch(a){case b("MessagingSourceEnum").PAGES_MESSAGE_SHORTLINK:c=b("MNPlatformAttributionTags").M_DOT_ME;break;case b("MessagingSourceEnum").MESSENGER_WEB:c=b("MNPlatformAttributionTags").MESSENGER_WEB;break;case b("MessagingSourceEnum").MESSENGER_WEB_SEARCH:c=b("MNPlatformAttributionTags").MESSENGER_WEB_SEARCH;d=b("MessengerDiscoveryEntryPointsLoggingHelper").getEntryPointsLoggingTagStr([b("MessengerDiscoveryEntryPoint").MESSENGERDOTCOM_WEB_SEARCH]);break;case b("MessagingSourceEnum").CUSTOMER_CHAT_PLUGIN:c=b("MNPlatformAttributionTags").CUSTOMER_CHAT_PLUGIN;break;case b("MessagingSourceEnum").PAGE_PLUGIN_MESSAGE:c=b("MessengerDiscoveryEntryPointsLoggingHelper").getEntryPointsLoggingTagStr([b("MessengerDiscoveryEntryPoint").MESSENGERDOTCOM_PAGES_PLUGIN]);break;default:c="";break}a=[c];d!==null&&a.push(d);return a},updateThreadTabAfterSelectThread:function(a,c){a===void 0&&(a=null);c===void 0&&(c=null);a=this.getTags(a);b("MessengerActions").changeThreadTag(a,c)},hasThreadTags:function(a){var c=b("MessengerAttributionTagsStore").getState();return!!(c.messagingTags&&a&&c.threadID&&c.threadID.toString()===a)},getThreadTags:function(){var a=b("MessengerAttributionTagsStore").getState();return a.messagingTags}}}),null);
__d("MessengerReactionsUtil.bs",["EmojiFormat.bs"],(function(a,b,c,d,e,f){"use strict";__p&&__p();c=[[128525],[128518],[128558],[128546],[128544],[128077],[128078]];var g={};c.forEach(function(a,c){g[b("EmojiFormat.bs").codeArrayToUnicode(a)]=c+1|0;return 0});function a(a,b){a=g[a];b=g[b];if(a!==undefined)if(b!==undefined)return a-b|0;else return-1;else if(b!==undefined)return 1;else return 0}d=c.map(b("EmojiFormat.bs").codeArrayToUnicode);f.reactionsSortOrder=c;f.orderMap=g;f.sortFunction=a;f.defaultReactions=d}),null);
__d("MercuryThreadTitle.react",["fbt","MercuryIDs","MercuryParticipantListRenderer","MessengerParticipants.bs","MessengerTextWithEmoticons.react","React"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=b("React").PropTypes;c=b("React").createClass({displayName:"MercuryThreadTitle",propTypes:{className:a.string,isNewThread:a.bool,maxTitle:a.number,showUnreadCount:a.bool,thread:a.object.isRequired,useAndSeparator:a.bool,useShortName:a.bool,viewer:a.string.isRequired},getDefaultProps:function(){return{isNewThread:!1,showUnreadCount:!1,useShortName:!1,useAndSeparator:!1}},getInitialState:function(){return{participantNames:""}},componentDidMount:function(){this._renderParticipantsList(this.props)},UNSAFE_componentWillReceiveProps:function(a){this._renderParticipantsList(a)},render:function(){return b("React").createElement("span",{className:this.props.className},this.props.thread.name?this._renderThreadTitle():this.state.participantNames,this.props.children)},getTitle:function(){return this.state.participantNames},_renderThreadTitle:function(){var a=this.props.thread,c=this.props.maxTitle?this.props.maxTitle<a.name.length?a.name.slice(0,this.props.maxTitle)+"...":a.name:a.name;c=b("React").createElement(b("MessengerTextWithEmoticons.react"),{renderEmoticons:!0,renderEmoji:!0,text:c});return!a.unread_count||!this.props.showUnreadCount?c:this._renderTitleWithUnreadCount(c,a.unread_count)},_renderParticipantsList:function(a){__p&&__p();if(a.thread.name)return;this.setState({participantNames:""});var c=b("MercuryIDs").getParticipantIDFromUserID(a.viewer),d=a.thread.participants||[];d.length>1&&(d=d.filter(function(a){return a!=c}));b("MessengerParticipants.bs").getMulti(d,function(c){__p&&__p();if(!this.isMounted())return;var e=d.map(function(a){return c[a]}),f=a.thread.custom_nickname?{}:null,g=b("MessengerTextWithEmoticons.react");if(f)for(var h in a.thread.custom_nickname)f[h]=b("React").createElement(g,{renderEmoticons:!0,renderEmoji:!0,text:a.thread.custom_nickname[h]});g=new(b("MercuryParticipantListRenderer"))().setUseShortName(a.useShortName).setUseAndSeparator(a.useAndSeparator).setIsNewThread(a.isNewThread).setNickname(f).renderParticipantList(e);f=a.showUnreadCount&&a.thread.unread_count?this._renderTitleWithUnreadCount(g,a.thread.unread_count):g;this.setState({participantNames:f})}.bind(this))},_renderTitleWithUnreadCount:function(a,b){return g._("{conversation-title} ({unread-count})",[g._param("conversation-title",a),g._param("unread-count",b)])}});e.exports=c}),null);
__d("MercuryTypingAnimation.react",["cx","React","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h;c=b("React").PropTypes;h=babelHelpers.inherits(a,b("React").Component);h&&h.prototype;a.prototype.render=function(){var a="_4a0v _1x3z";return b("React").createElement("div",{className:b("joinClasses")(this.props.className,a)},b("React").createElement("div",{className:"_4b0g"},b("React").createElement("div",{className:"_5pd7"}),b("React").createElement("div",{className:"_5pd7"}),b("React").createElement("div",{className:"_5pd7"})))};function a(){h.apply(this,arguments)}a.propTypes={color:c.oneOf(["light","dark"])};a.defaultProps={color:"dark"};e.exports=a}),null);
__d("InstantGameContextType",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({THREAD:"THREAD",GROUP:"GROUP",STORY:"STORY",SOLO:"SOLO",LINK:"LINK"})}),null);
__d("MercuryTimePassed",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({TODAY:0,WEEK_AGO:1,MONTH_AGO:2,CURRENT_YEAR:3,OTHER_YEAR:4})}),null);
__d("QuicksilverSources",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({ALOHA_GAMEHOST:"aloha_gamehost",EMBEDDED_PLAYER:"embedded_player",FB_CANVAS:"fb_canvas",FB_CANVAS_MIGRATION:"fb_canvas_migration",FB_FEED:"fb_feed",FB_FEED_EGO:"fb_ego_igyml",FB_FEED_GROUP_CHALLENGE_EDGE_STORY:"fb_feed_group_challenge_edge_story",FB_FEED_PLAY_FROM_POST_EDGE_STORY:"fb_feed_play_from_post_edge_story",FB_FEED_RATING:"fb_feed_rating",FB_FEED_SCREENSHOT:"fb_feed_screenshot",FB_SCORE_PASSED_NOTIF:"fb_score_passed_notif",FB_SEARCH:"big_blue_search",FB_FEED_IGYML_QP:"fb_qp_igyml",FB_FEED_IGYFAP_QP:"fb_qp_igyfap",FB_FEED_NEW_RELEASES_QP:"fb_qp_new_releases",FB_FEED_PLAY_WITH_FRIENDS:"fb_feed_play_with_friends",FB_FEED_PLAYING_WITH_FRIENDS_QP:"fb_qp_playing_with_friends",FB_FEED_PLAYED_RECENTLY_QP:"fb_qp_played_recently",FB_FEED_LEADERBOARD_HIGH_SCORE:"fb_feed_leaderboard_high_score",FB_FEED_LIVE_VIDEO:"fb_feed_live_video",FB_FEED_QUICK_PROMOTION:"fb_feed_quick_promotion",FB_AD:"fb_ad",FB_GROUP_CHALLENGE:"fb_group_challenge",FB_GROUP_COMPOSER:"fb_group_composer",FB_GROUP_GAMES_TAB:"fb_group_games_tab",FB_GROUP_MALL:"fb_group_mall",FB_GROUP_MALL_EGO:"fb_group_mall_ego",FB_GROUP_MALL_SCREENSHOT:"fb_group_mall_screenshot",FB_GROUP_NEWS_FEED:"fb_group_news_feed",FB_GROUP_NEWSFEED_SCREENSHOT:"fb_group_newsfeed_screenshot",FB_GROUP_RHC_LEADERBOARD:"fb_group_rhc_leaderboard",FB_GROUP_SCORE_PASSED_NOTIF:"fb_group_score_passed_notif",FB_GROUP_POST_ACTION_LINK:"fb_group_post_action_link",FB_GROUP_POST_CONTEXT_UPDATE:"fb_group_post_context_update",FB_MESSENGER_AD:"fb_messenger_ad",FB_PAGE_PLAY_GAME_BUTTON:"fb_page_play_game_button",FB_STORY_ATTRIBUTION_LINK:"fb_story_attribution_link",FB_NON_MESSENGER_WAP_INVITE_NOTIF:"fb_non_messenger_wap_invite_notif",FB_TURN_REMINDER_NOTIF:"fb_turn_reminder_notif",GAMEROOM_FEED_POST:"gameroom_feed_post",GAMEROOM_HOME:"gameroom_home",GAME_SWITCH:"game_switch",BIG_BLUE_IG_SEARCH:"big_blue_ig_search",HOME_SCREEN_SHORTCUT:"home_screen_shortcut",INTERNAL:"internal",LIVE_VIDEO_CTA:"live_video_cta",STREAMER_DASHBOARD:"streamer_dashboard",CUSTOM_SHARE:"in_game_custom_share",M_ME_LINK:"m_me_link",MESSENGER_AD:"messenger_ad",MESSENGER_ADMIN_MESSAGE:"admin_message",MESSENGER_BBALL_EMOJI:"bball_emoji",MESSENGER_BOT_MENU:"bot_menu",MESSENGER_COMPOSER:"composer",MESSENGER_COMPOSER_SMS:"composer_sms",MESSENGER_CUSTOM_ADMIN_MESSAGE:"custom_admin_message",MESSENGER_GAME_BOT_MENU:"game_bot_menu",MESSENGER_GAME_BOT_NULL_STATE:"game_bot_null_state_cta",MESSENGER_GAME_EMOJI:"game_emoji",MESSENGER_GAME_PUSH_NOTIFICATION:"game_push_notification",MESSENGER_GAME_SHARE:"game_share",MESSENGER_GAME_THREAD_ROW_CTA:"game_thread_row_cta",MESSENGER_GAMES_HUB:"games_hub",MESSENGER_M_SUGGESTION:"game_m_suggestion",MESSENGER_MORE_DRAWER_CHAT_EXTENSION:"more_drawer_chat_extension",MESSENGER_NEW_FRIEND_BUMP:"new_friend_bump",MESSENGER_ONE_LINE_COMPOSER:"one_line_composer",MESSENGER_RTC:"rtc",MESSENGER_SEARCH:"messenger_search",MESSENGER_SOCCER_EMOJI:"soccer_emoji",MESSENGER_STALE_THREAD_QUICK_REPLY:"stale_thread_quick_reply",MESSENGER_STICKER:"sticker",PRESENCE_ON_MESSENGER:"presence_on_messenger",THREAD_ACTIVITY_BANNER:"thread_activity_banner",MARKETPLACE:"marketplace",MOBILE_BOOKMARK:"mobile_bookmark",MSITE_BOOKMARK:"msite_bookmark",MOBILE_APP_BOOKMARK:"mobile_app_bookmark",MOBILE_BOOKMARK_PRESENCE:"mobile_bookmark_presence",MSITE:"msite",WWW_BOOKMARK:"www_bookmark",WWW_APP_CENTER_BROWSE:"www_app_center_browse",WWW_APP_CENTER_CHALLENGE:"www_app_center_challenge",WWW_APP_CENTER_MAIN:"www_app_center_main",WWW_GAMES_HUB:"www_games_hub",WWW_GAMES_HUB_SEARCH:"www_games_hub_search",WWW_GAMES_HUB_BOOKMARKS:"www_games_hub_bookmarks",WWW_GAMES_DIVEBAR_PAGELET:"www_games_divebar_pagelet",WWW_GAMES_RHC_PAGELET:"www_games_rhc_pagelet",WWW_GAMES_UNIFIED_RHC:"www_games_unified_rhc",WWW_LINK_SHARE:"www_link_share",WWW_MESSENGER_UPSELL:"www_messenger_upsell",WWW_PLAY_URL:"www_play_url",WWW_REQUEST_HOVERCARD:"www_request_hovercard",WWW_SPOTLIGHT_RHC:"www_spotlight_rhc",WWW_CHAT_SIDEBAR_PRESENCE:"www_chat_sidebar_presence",WWW_GAME_THREAD_ROW_CTA:"www_game_thread_row_cta",WWW_APP_BOOKMARK:"www_app_bookmark",WWW_PROFILE_HOVERCARD:"www_profile_hovercard",WWW_PLAY_GAME_LOGGED_OUT_VIEW:"www_play_game_logged_out_view",CANVAS_DIVEBAR:"canvas_divebar",CANVAS_GAME_MODAL:"canvas_game_modal",FB_GG_SEARCH:"fb_gg_search",FB_GG_NOTIFICATION:"fb_gg_notification",FB_GG_URL:"fb_gg_url",FB_HOMESCREEN_SHORTCUT:"fb_homescreen_shortcut",GAME_CTA:"game_cta",MESSENGER_BUSINESS_ATTACHMENT:"business_attachment",MESSENGER_CALL_TO_ACTION:"call_to_action",MESSENGER_GAME_SCORE_SHARE:"game_score_share",MESSENGER_GAME_SEARCH:"search",THREAD_SETTINGS:"thread_settings",UNKNOWN:"unknown"})}),null);
__d("BootloadOnInteraction.react",["BootloadOnRender.react","React"],(function(a,b,c,d,e,f){__p&&__p();var g;c=babelHelpers.inherits(a,b("React").Component);g=c&&c.prototype;function a(a){"use strict";g.constructor.call(this,a),this.$1=function(){this.setState({hadUserInteraction:!0})}.bind(this),this.state={hadUserInteraction:!1}}a.prototype.render=function(){"use strict";if(!this.state.hadUserInteraction)return b("React").cloneElement(this.props.placeholder,{onFocus:this.$1,onMouseOver:this.$1,onClick:this.$1});var a=this.props,c=a.loader,d=a.component;a=a.placeholder;return b("React").createElement(b("BootloadOnRender.react"),{placeholder:a,loader:c,component:d})};e.exports=a}),null);
__d("MessengerLightweightActionUtils",["MercuryAttachmentType"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function g(a){return!!(a&&a.attach_type===b("MercuryAttachmentType").SHARE&&a.share&&a.share.target&&a.share.target.lwa_type)}function a(a){a=a.attachments;return!!(a&&a.length===1&&g(a[0]))}function c(a){return a.attachments[0].share.title}function d(a){return a[0].share.title}e.exports={isLWAMessage:a,isLWAAttachment:g,getCollapsedLWAText:c,getLWASnippetText:d}}),null);
__d("MercuryTimestamp",["fbt","MercuryTimePassed","formatDate"],(function(a,b,c,d,e,f,g){__p&&__p();a=864e5;var h=6*a,i={getFormatedTimestamp:function(a){var b=a/1e3;return i.getFormattedTimestampByBucket(b,this.getTimeBucket(a))},getAbsoluteTimestamp:function(a){if(a==null)return null;else{a=i.getFormatedTimestamp(a);return a.absolute}},getRelativeTimestamp:function(a){a=i.getFormatedTimestamp(a);return a.relative},getFormattedTimestampByBucket:function(a,c){switch(c){case b("MercuryTimePassed").TODAY:return{absolute:g._("Today"),relative:b("formatDate")(a,"g:ia")};case b("MercuryTimePassed").WEEK_AGO:return{absolute:b("formatDate")(a,"l"),relative:b("formatDate")(a,"D")};case b("MercuryTimePassed").CURRENT_YEAR:return{absolute:b("formatDate")(a,"F j"),relative:b("formatDate")(a,"M j")};default:return{absolute:b("formatDate")(a,"F j, Y"),relative:b("formatDate")(a,"n/j/y")}}},getTimeBucket:function(a){__p&&__p();a=new Date(a);var c=new Date();c=new Date(c.getFullYear(),c.getMonth(),c.getDate());if(c<a)return b("MercuryTimePassed").TODAY;else if(c-h<a)return b("MercuryTimePassed").WEEK_AGO;else if(c.getFullYear()===a.getFullYear())return b("MercuryTimePassed").CURRENT_YEAR;else return b("MercuryTimePassed").OTHER_YEAR},getPreciseTimestamp:function(a){return b("formatDate")(new Date(a),i.getPreciseFormat(a))},getPreciseFormat:function(a){a=i.getTimeBucket(a);switch(a){case b("MercuryTimePassed").TODAY:return"g:ia";case b("MercuryTimePassed").WEEK_AGO:return"l g:ia";case b("MercuryTimePassed").CURRENT_YEAR:return"F jS, g:ia";case b("MercuryTimePassed").OTHER_YEAR:default:return"F j, Y g:i a"}}};e.exports=i}),null);
__d("XGamesQuicksilverSpotlightPlayerController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/games/quicksilver/spotlight/",{app_id:{type:"String"},context_source_id:{type:"String"},context_type:{type:"Enum",enumType:1},analytics_info:{type:"TypeAssert"},source:{type:"String"},entry_point_data:{type:"String"},previous_app_id:{type:"String"}})}),null);