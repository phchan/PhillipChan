if (self.CavalryLogger) { CavalryLogger.start_js(["pw4UK"]); }

__d("UFIAddCommentController",["Parent","PrivateCommentsConfig","React","ReactDOM","UFIAddComment.react","UFIAddCommentActionType","UFIAsyncWrapper","UFICallbackStore","UFICommentEditIDStore","UFIDispatcher","UFIDispatcherContext.react","UFIFeedbackContext.react","UFINewCommentNotifier"],(function(a,b,c,d,e,f){"use strict";__p&&__p();g.factory=function(a,b){b.rootid=a.id;return new g(a,Object.freeze(b))};function g(a,c){this.renderAddComment=function(a,c){return this.$5!==null||!c||!c.cancomment||!c.actorforpost?null:b("React").createElement(b("UFIAddComment.react"),{viewerActorID:c.actorforpost,targetID:c.ownerid,targetName:c.actorname,groupID:c.grouporeventid,initialData:null,ref:null,withoutSeparator:!1,editingComment:{},isEditing:!1,allowLiveVideoCommentReplyMode:!0,mentionsDataSource:c.mentionsdatasource,showSendOnEnterTip:c.showsendonentertip,peopleOutsideCommunityInCommentNotice:c.peopleoutsidecommunityincommentnotice,allowAudienceSelector:!!a.friendConversationsParams,allowPhotoAttachments:c.allowphotoattachments&&!a.islivestreaming,allowVideoAttachments:c.allowvideoattachments&&!a.islivestreaming,allowFileAttachments:c.allowfileattachments&&!a.islivestreaming,allowStickerAttachments:c.allowstickerattachments&&(!a.islivestreaming||c.allowLiveVideoStickerAttachments),allowCustomStickerAttachments:c.allowgaminglivestreamcustomstickers,allowGifAttachments:c.allowgifattachments&&(!a.islivestreaming||c.allowgaminglivestreamgifattachments),allowNativeTipJar:c.isnativetipjarenabled,tipJarModule:c.tipjarmodule,allowFlexibleTipping:c.isflexibletippingenabled,flexibleStarsModule:c.flexiblestarsmodule,allowTogglePrivateComments:(b("PrivateCommentsConfig").composer_lock_enabled||b("PrivateCommentsConfig").composer_unlocked_lock_enabled)&&c.canviewercommentinprivate,privateCommentTarget:c.actorname,contextArgs:a,feedback:c,subtitle:c.subtitle,commentsTargetID:c.commentstargetfbid})}.bind(this),this.$1=a,this.$2=c,this.$3=new(b("UFIDispatcher"))(),this.$4={UFICallbackStore:new(b("UFICallbackStore"))(this.$3)},this.$4.UFICallbackStore.on(b("UFIAddCommentActionType").SUBMIT_NEW,function(c){return b("UFINewCommentNotifier").onNewComment(b("Parent").byTag(a,"form"),this.$2,c.comment,c.target,c.replyCommentID,c.timestamp)}.bind(this)),this.$5=b("UFICommentEditIDStore").getForInstance(this.$2.instanceid),b("UFICommentEditIDStore").addListener(function(){var a=b("UFICommentEditIDStore").getForInstance(this.$2.instanceid);a!=this.$5&&(this.$5=a,this.render())}.bind(this)),this.render()}g.prototype.render=function(){var a=b("React").createElement(b("UFIDispatcherContext.react"),{dispatcher:this.$3,stores:this.$4},b("React").createElement(b("UFIFeedbackContext.react"),{contextArgs:this.$2,render:this.renderAddComment}));b("ReactDOM").render(b("React").createElement(b("UFIAsyncWrapper"),null,a),this.$1)};g.prototype.disable=function(){this.$4.UFICallbackStore.remove()};e.exports=g}),null);
__d("SavedForLaterChromeExtensionInstallLink",["Banzai","Event","TimelineInHouseAppCollections","guid","tidyEvent"],(function(a,b,c,d,e,f){__p&&__p();var g="chrome_extension_install_link",h="saved_for_later:click",i="https://chrome.google.com/webstore/detail/",j="jmfikkaogpplgnfjmbjdpalkhclendgd";function a(a,c){"use strict";var d=document.createElement("link");d.rel="chrome-webstore-item";d.href=i+j;document.head.appendChild(d);b("tidyEvent")(b("Event").listen(a,"click",function(a){b("Banzai").post(h,{collection_id:b("TimelineInHouseAppCollections").SAVED_ALL,surface:c,mechanism:g,event_id:b("guid")()},{delay:0,retry:!0}),window.chrome&&window.chrome.webstore&&window.chrome.webstore.install()}))}e.exports=a}),null);
__d("SavedForLaterChromeExtensionToastNux",["AsyncRequest","DataStore","SavedForLaterChromeExtensionInstallLink","TimelineInHouseAppCollections","XSavedForLaterNUXSeenController"],(function(a,b,c,d,e,f){__p&&__p();var g="impression",h="story",i="chrome_extension_toast_nux",j="SavedForLaterChromeExtensionToastNux";function a(a,c){"use strict";b("DataStore").set(a,j,this),this.installInstance=new(b("SavedForLaterChromeExtensionInstallLink"))(c,h)}a.onDisplay=function(a){"use strict";a=b("DataStore").get(a,j);if(!a)return;new(b("AsyncRequest"))(b("XSavedForLaterNUXSeenController").getURIBuilder().setEnum("action",g).setEnum("surface",h).setEnum("mechanism",i).setEnum("collection_id",b("TimelineInHouseAppCollections").SAVED_ALL).getURI()).setMethod("POST").send()};e.exports=a}),null);
__d("SaveCaretMenuItem",["csx","cx","AdsTransparencyReportAdTypedLogger","Banzai","CSS","DOM","DOMQuery","EntstreamFeedObject","EntstreamFeedObjectFollowup","Event","MenuItem","SavedForLaterChromeExtensionToastNux","SaveState","SaveStateHandler","ge"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i,j="saved_for_later:caret_action",k="imp",l="._22la";c=babelHelpers.inherits(a,b("MenuItem"));i=c&&c.prototype;function a(a){"use strict";i.constructor.call(this,a),this._data=this._updateData(),this.getRoot(),b("Event").listen(this._anchor,"error",this.handleError.bind(this)),b("SaveStateHandler").listen(a.primarysaveid,function(a){this._data=this._updateData(),this._doRender(a)}.bind(this))}a.prototype.handleClick=function(){"use strict";__p&&__p();var a=i.handleClick.call(this),c=b("EntstreamFeedObject").getRoot(b("ge")(this._data.storydomid));if(this._data.isSaveAction){b("SaveStateHandler").saving(this._data.allsaveids);var d=this._data.savefollowupmarkup;this._data.chromeextensionnuxmarkup.hasChildNodes()&&(d=this._data.chromeextensionnuxmarkup,b("SavedForLaterChromeExtensionToastNux").onDisplay(d));if(c){var e=b("DOM").scry(c,"._5va1");if(e&&e.length>0){e=e[0];e&&(c=e)}b("EntstreamFeedObjectFollowup").addFollowup(c,d,["_521o","_4-u3","_3yll"]);e=b("DOMQuery").scry(c,l);if(e.length>0){d=new CustomEvent("savedShow");e[0].dispatchEvent(d)}}}else{b("SaveStateHandler").unsaving(this._data.allsaveids);e=b("EntstreamFeedObjectFollowup").getFollowup(c);e&&b("EntstreamFeedObjectFollowup").removeFollowup(c)}return a};a.prototype.handleError=function(){"use strict";this._data.isSaveAction?b("SaveStateHandler").saved(this._data.allsaveids):b("SaveStateHandler").unsaved(this._data.allsaveids)};a.prototype._updateData=function(){"use strict";var a=babelHelpers["extends"]({},this._data);a.isSaveAction=b("SaveStateHandler").isSaveAction(a.primarysaveid);a.isSaveAction?(a.markup=a.savemarkup,a.ajaxify=a.saveajaxify,a.title=a.savetitle):(a.markup=a.unsavemarkup,a.ajaxify=a.unsaveajaxify,a.title=a.unsavetitle);a.logdata.ad_impression&&new(b("AdsTransparencyReportAdTypedLogger"))().setAdID(a.logdata.ad_id).setEntity(a.logdata.report_entity).setProductLocation(a.logdata.report_location).setSessionID(a.logdata.impression_session_id).setAdsPageType(a.logdata.ads_page_type).addToExtraData("reorder_treatment",a.logdata.reorder_treatment).log();return a};a.prototype._doRender=function(a){"use strict";__p&&__p();if(!this._root)return;switch(a){case b("SaveState").SAVING:case b("SaveState").UNSAVING:b("CSS").addClass(this._root,"_5arm");setTimeout(this.disable.bind(this),10);break;case b("SaveState").SAVED:case b("SaveState").UNSAVED:b("CSS").removeClass(this._root,"_5arm");setTimeout(this.enable.bind(this),10);break}b("DOM").replace(this._anchor,this._renderItemContent());b("Event").listen(this._anchor,"error",this.handleError.bind(this))};a.prototype.onShow=function(){"use strict";var a=this._data.logdata;b("Banzai").post(j,{action:k,surface:a.surface,story_id:a.story_id,is_save:this._data.isSaveAction})};e.exports=a}),null);
__d("VideoChainingToken",["Base64"],(function(a,b,c,d,e,f){__p&&__p();function g(a){"use strict";this.$1=a}g.encode=function(a){"use strict";return new g(b("Base64").encode(JSON.stringify(a)))};g.prototype.decode=function(){"use strict";return JSON.parse(b("Base64").decode(this.$1))};e.exports=g}),null);
__d("TahoeShareButton.react",["React","UFIShareNowMenuBootloader.react"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;g=babelHelpers.inherits(a,b("React").Component);g&&g.prototype;a.prototype.render=function(){var a=this.props,c=a.endpoint;a=a.endpointData;return b("React").createElement(b("UFIShareNowMenuBootloader.react"),{endpoint:c,endpointData:a,openOnInitOverride:!1})};function a(){g.apply(this,arguments)}e.exports=a}),null);