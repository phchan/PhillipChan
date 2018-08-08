if (self.CavalryLogger) { CavalryLogger.start_js(["yz+Sw"]); }

__d("ComposerXContextConfig",[],(function(a,b,c,d,e,f){e.exports={propertyNames:{actorID:"ACTOR_ID",postID:"POST_ID"},propertyValues:{ACTOR_ID:"actorID",POST_ID:"postID"}}}),null);
__d("FormSubmit",["AsyncRequest","AsyncResponse","CSS","DOMQuery","Event","Form","Parent","trackReferrer"],(function(a,b,c,d,e,f){__p&&__p();var g={buildRequest:function(a,c){__p&&__p();var d=(b("Form").getAttribute(a,"method")||"GET").toUpperCase();c=c&&b("Parent").byTag(c,"button")||c;var e=c&&b("Parent").byClass(c,"stat_elem")||a;if(b("CSS").hasClass(e,"async_saving"))return null;if(c&&(c.form!==a||c.nodeName!="INPUT"&&c.nodeName!="BUTTON"||c.type!="submit")){var f=b("DOMQuery").scry(a,".enter_submit_target")[0];f&&(c=f)}f=b("Form").serialize(a,c);b("Form").setDisabled(a,!0);c=b("Form").getAttribute(a,"ajaxify")||b("Form").getAttribute(a,"action");var g=!!b("Form").getAttribute(a,"data-cors");b("trackReferrer")(a,c);return new(b("AsyncRequest"))().setAllowCrossOrigin(g).setURI(c).setData(f).setNectarModuleDataSafe(a).setReadOnly(d=="GET").setMethod(d).setRelativeTo(a).setStatusElement(e).setInitialHandler(b("Form").setDisabled.bind(null,a,!1)).setHandler(function(c){b("Event").fire(a,"success",{response:c})}).setErrorHandler(function(c){b("Event").fire(a,"error",{response:c})!==!1&&b("AsyncResponse").defaultErrorHandler(c)}).setFinallyHandler(b("Form").setDisabled.bind(null,a,!1))},send:function(a,b){a=g.buildRequest(a,b);a&&a.send();return a}};e.exports=g}),null);
__d("ComposerXAttachmentBootstrap",["csx","cx","CSS","Form","FormSubmit","Parent","URI"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i=[],j={bootstrap:function(a){j.load(b("Parent").byTag(a,"form"),a.getAttribute("data-endpoint"))},load:function(a,c,d){c=new(b("URI"))(c).addQueryData({composerurihash:j.getURIHash(c)});b("CSS").conditionClass(a,"_fu",d);d=b("Parent").bySelector(a,"._2_4");b("CSS").removeClass(d,"async_saving");b("Form").setDisabled(a,!1);a.action=c.toString();b("FormSubmit").send(a)},getURIHash:function(a){if(a==="initial")return"initial";var b=i.indexOf(a);if(b!==-1)return b+"";else{b=i.length;i[b]=a;return b+""}}};e.exports=j}),null);
__d("ComposerXContext",["invariant","ComposerXContextConfig"],(function(a,b,c,d,e,f,g){__p&&__p();var h=function(a){return b("ComposerXContextConfig").propertyNames[a]};function a(a){"use strict";this.$1={};for(var b in a)this.setProperty(b,a[b])}a.prototype.getProperty=function(a){"use strict";h(a)||g(0);return this.$1[a]};a.prototype.setProperty=function(a,b){"use strict";h(a)||g(0);this.$1[a]=b;return this};a.PROPERTIES=b("ComposerXContextConfig").propertyValues;e.exports=a}),null);
__d("ComposerXSessionIDInserter",["csx","ComposerXSessionIDs","DOM","DOMQuery","Event","Parent","onEnclosingPageletDestroy"],(function(a,b,c,d,e,f,g){__p&&__p();var h={init:function(a){var c=b("Event").listen(a,"submit",h._onSubmit);b("onEnclosingPageletDestroy")(a,function(){c.remove()})},_onSubmit:function(a){h.insertSessionInput(a.getTarget())},insertSessionInput:function(a){var c=b("Parent").bySelector(a,"._119");if(!c)return;c=b("ComposerXSessionIDs").getSessionID(c.id);if(!c)return;var d=b("DOMQuery").scry(a,"._5r_b")[0];!d?b("DOM").prependContent(a,b("ComposerXSessionIDs").createSessionIDInput(c)):d.value=c}};e.exports=h}),null);
__d("ComposerX",["csx","cx","ActorURI","Arbiter","ComposerXAttachmentBootstrap","ComposerXContext","ComposerXMarauderLogger","ComposerXSessionIDInserter","ComposerXSessionIDs","ComposerXStore","CSS","DOM","DOMQuery","PrivacyConst","PrivacySelector","PrivacySelectorNewDispatcher","SubscriptionsHandler","URI","getObjectValues","removeFromArray"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i="any";function a(a){"use strict";this._root=a,this._composerID=a.id,this._attachments={},this._context=new(b("ComposerXContext"))({}),b("ComposerXSessionIDs").resetSessionID(this._composerID),b("ComposerXSessionIDInserter").init(this._root),this._subscriptionsHandler=new(b("SubscriptionsHandler"))(),this._subscriptionsHandler.addSubscriptions(b("Arbiter").subscribe(["composer/publish","composer/close"],function(c,d){if(d.composer_id===this._composerID){this.reset();c=b("DOMQuery").scry(a,".hidden_target_specs");c&&c.length&&c.forEach(b("DOM").remove);b("Arbiter").inform("composer/publishDone",d)}}.bind(this))),this._subscriptionsHandler.addSubscriptions.apply(this._subscriptionsHandler,b("ComposerXMarauderLogger").listenForPostEvents(this._composerID,this._getContent())),this._attachmentFetchForm=b("DOMQuery").find(a,"._2_4"),b("Arbiter").inform("composer/ready",{},b("Arbiter").BEHAVIOR_STATE)}a.prototype.getAttachment=function(a,c,d,e){"use strict";a=this._augmentURI(a);var f=b("ComposerXAttachmentBootstrap").getURIHash(a);this._endpointHashToShow=f;var g=this._attachments[f];g&&!e?this._showAttachmentAfterComponentsLoaded(f,d):this.fetchAttachmentData(a,c,e)};a.prototype.fetchAttachmentData=function(a,c,d){"use strict";a=this._augmentURI(a);var e=b("ComposerXAttachmentBootstrap").getURIHash(a);if(this._attachments[e]&&!d)return;this._currentFetchEndpoints.includes(e)||(b("ComposerXAttachmentBootstrap").load(this._attachmentFetchForm,a,c),this._currentFetchEndpoints.push(e))};a.prototype.setAttachment=function(a,c,d,e){"use strict";b("removeFromArray")(this._currentFetchEndpoints,a),this._setupAttachment(a,c,d,e),this._showAttachmentAfterComponentsLoaded(a,!1)};a.prototype.setInitialAttachment=function(a,c,d,e,f){"use strict";f&&(this._context=f);a=this._augmentURI(a);f=b("ComposerXAttachmentBootstrap").getURIHash(a);this._setupAttachment(f,c,d,e);this._initialAttachmentEndpoint=a;this._currentInstance||this._showAttachmentAfterComponentsLoaded(f,!0)};a.prototype.setComponent=function(a,c){"use strict";b("ComposerXStore").get(this._composerID,a)||(b("ComposerXStore").set(this._composerID,a,c),b("DOM").appendContent(this._attachmentFetchForm,b("DOM").create("input",{type:"hidden",name:"loaded_components[]",value:a})))};a.prototype.reset=function(){"use strict";__p&&__p();this._currentInstance&&(this._currentInstance.cleanup(),this._currentInstance=null);b("ComposerXSessionIDs").resetSessionID(this._composerID);for(var a in this._attachments)this._attachments[a].instance.reset();var c=b("ComposerXStore").getAllForComposer(this._composerID);b("getObjectValues")(c).forEach(function(a){a.reset&&a.reset(a)});c=b("PrivacySelector").getAdamaSelectorInstance(b("DOM").scry(this._root,"div._1lo2")[0]);var d=b("ComposerXStore").get(this._composerID,"mainprivacywidget");d=d&&d.instance&&d.instance.getInstance();c?d.setInstance(c):c=d&&d.getInstance();c&&c.shouldReplaceOnPost()&&b("PrivacySelectorNewDispatcher").handleUpdateFromSelector({selector_type:b("PrivacyConst").PrivacyField.CURRENT_COMPOSER.toString(),post_param:"",unique_id:"_reloadStickySelectors",reload:!0});this.getAttachment(this._initialAttachmentEndpoint,!1,!0);b("Arbiter").inform("composer/reset")};a.prototype.destroy=function(){"use strict";this._subscriptionsHandler.release()};a.prototype.addPlaceholders=function(a,b){"use strict";__p&&__p();var c;for(var d in this._attachments){c=this._attachments[d];if(c.instance===a){b.forEach(function(a){c.placeholders.push(a),c.required_components.push(a.component_name)});break}}this._currentInstance===a&&this._fillPlaceholders(b)};a.prototype.hasAttachmentWithClassName=function(a){"use strict";return b("DOMQuery").scry(this._root,"."+a).length>0};a.prototype.showAttachmentThrobber=function(){"use strict";b("CSS").addClass(this._attachmentFetchForm,"async_saving")};a.prototype.hideAttachmentThrobber=function(){"use strict";b("CSS").removeClass(this._attachmentFetchForm,"async_saving")};a.prototype.getContext=function(){"use strict";return this._context};a.prototype.getID=function(){"use strict";return this._composerID};a.prototype._setupAttachment=function(a,c,d,e){"use strict";c.setComposerID(this._composerID);this._attachments[a]={instance:c,placeholders:d,required_components:e};a=this._getContent();d=c.getRoot();d.parentNode!==a&&(b("CSS").hide(d),b("DOM").appendContent(a,d))};a.prototype._getContent=function(){"use strict";return b("DOMQuery").find(this._root,"div._55d0")};a.prototype._showAttachment=function(a,c,d,e){"use strict";__p&&__p();if(this._currentInstance===a)return;if(this._endpointHashToShow===i)this._endpointHashToShow=null;else if(this._endpointHashToShow!==c)return;if(this._currentInstance){if(!this._currentInstance.canSwitchAway())return;this._currentInstance.cleanup()}this._currentInstance=a;c=this._getContent().childNodes;var f=a.getRoot();for(var g=0;g<c.length;g++)c[g]!==f&&b("CSS").hide(c[g]);b("CSS").show(f);this._fillPlaceholders(d);a.initWithComponents(e);this._setAttachmentSelectedClass(a.attachmentClassName);b("Arbiter").inform("composer/initializedAttachment",{composerRoot:this._root,isInitial:e})};a.prototype._showAttachmentAfterComponentsLoaded=function(a,c){"use strict";var d=this._attachments[a];b("ComposerXStore").waitForComponents(this._composerID,d.required_components,this._showAttachment.bind(this,d.instance,a,d.placeholders,c))};a.prototype._fillPlaceholders=function(a){"use strict";a.forEach(function(a){var c=b("ComposerXStore").get(this._composerID,a.component_name);c.element&&a.element!==c.element.parentNode&&b("DOM").setContent(a.element,c.element)}.bind(this))};a.prototype._setAttachmentSelectedClass=function(a){"use strict";var c=b("DOMQuery").scry(this._root,"._519b")[0];c&&(b("CSS").removeClass(c,"_519b"),c=b("DOMQuery").scry(c,'*[aria-pressed="true"]')[0],c&&c.setAttribute("aria-pressed","false"));if(a){a=b("DOMQuery").scry(this._root,"."+a)[0];a&&(b("CSS").addClass(a,"_519b"),c=b("DOMQuery").scry(a,'*[aria-pressed="false"]')[0],c&&c.setAttribute("aria-pressed","true"))}};a.prototype._augmentURI=function(a){"use strict";var c=this._context.getProperty(b("ComposerXContext").PROPERTIES.ACTOR_ID);c=c?b("ActorURI").create(a,c):new(b("URI"))(a);a=this._context.getProperty(b("ComposerXContext").PROPERTIES.POST_ID);a&&c.addQueryData("post_id",a);return c.toString()};Object.assign(a.prototype,{_endpointHashToShow:i,_currentFetchEndpoints:[],_initialAttachmentEndpoint:""});e.exports=a}),null);
__d("registerForLeaveWarning",["fbt","Run","URI","createCancelableFunction"],(function(a,b,c,d,e,f,g){__p&&__p();function c(a){var c=b("URI").getNextURI(),d=b("createCancelableFunction")(a);b("Run").onBeforeUnload(function(){return h(d,c)});return d}function h(c,d){__p&&__p();var e=b("URI").getMostRecentURI(),f=b("URI").getNextURI();e=Object.prototype.hasOwnProperty.call(e.getQueryData(),"theater")&&d.path===f.path;var i=Object.prototype.hasOwnProperty.call(f.getQueryData(),"theater");f=a.DialogNavigationStack&&a.DialogNavigationStack.isActiveURI(f);if(e||i||f){b("Run").onAfterLoad(function(){b("Run").onBeforeUnload(function(){return h(c,d)})});return}if(a.Dialog&&a.Dialog.getCurrent())return;if(c())return g._("You haven't finished your post yet. Do you want to leave without finishing?")}e.exports=c}),null);
__d("ComposerXController",["csx","invariant","ActorURI","Arbiter","ComposerX","ComposerXAttachmentBootstrap","ComposerXContext","ComposerXMarauderLogger","Event","Parent","$","emptyFunction","ge","registerForLeaveWarning"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i={},j={},k={};function l(a){var c=b("ge")(a);if(!c)return null;c=b("Parent").bySelector(b("$")(a),"._119");a=c.id;k[a]||(k[a]=new(b("ComposerX"))(c));return k[a]}function m(a){a=l(a);a!==null||h(0);return a}function n(a){if(!j[a])return;j[a].forEach(function(a){return a.cancel()});delete j[a]}var o={registerConditionForComposerCancel:function(a,c){a=m(a).getID();a in i||(i[a]=[]);i[a].push(c);a in j||(j[a]=[]);j[a].push(b("registerForLeaveWarning")(c))},hasChanges:function(a){a=i[a];return!a?!1:a.some(function(a){return a()})},getAttachment:function(a,b,c,d){a=m(a);a.getAttachment(b,c,null,d)},fetchAttachmentData:function(a,b,c){m(a).fetchAttachmentData(b,c)},setAttachment:function(a,b,c,d,e){a=l(a);a&&a.setAttachment(b,c,d,e)},setInitialAttachment:function(a,b,c,d,e,f){a=m(a);a.setInitialAttachment(b,c,d,e,f)},setComponent:function(a,b,c){a=l(a);a&&a.setComponent(b,c)},reset:function(a){a=m(a);a.reset()},holdTheMarkup:b("emptyFunction"),getEndpoint:function(a,c,d){a=m(a);var e=a.getContext();c=b("ActorURI").create(c,e.getProperty(b("ComposerXContext").PROPERTIES.ACTOR_ID)).toString();b("ComposerXAttachmentBootstrap").load(a._attachmentFetchForm,c,d)},addPlaceholders:function(a,b,c){a=m(a);a.addPlaceholders(b,c)},hasAttachmentWithClassName:function(a,b){a=m(a);return a.hasAttachmentWithClassName(b)},showAttachmentThrobber:function(a){a=m(a);a.showAttachmentThrobber()},hideAttachmentThrobber:function(a){a=m(a);a.hideAttachmentThrobber()},logEventForElement:function(a,c){if(!b("Parent").bySelector(b("$")(a),"._119"))return;b("Event").listen(a,"click",function(){var d=o.getComposerID(a);b("ComposerXMarauderLogger").logEvent(c,d)})},getComposerID:function(a){return m(a).getID()},destroyComposer:function(a){if(!(a in k))return;k[a].destroy();delete k[a];delete i[a];n(a)}};b("ComposerXAttachmentBootstrap").bootstrap=function(a){o.getAttachment(a,a.getAttribute("data-endpoint"))};b("Arbiter").subscribe("page_transition",function(){for(var a in k)b("ge")(a)||o.destroyComposer(a)});e.exports=o}),null);
__d("ComposerXAjaxEndpoint",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({ADS_MEDIA_UPLOAD:"/ajax/ads/create/composerx/attachment/media/upload/",ADS_ATTACHMENT_STATUS:"/ajax/ads/create/composerx/attachment/status/",MEDIA_UPLOAD:"/ajax/composerx/attachment/media/upload/",VIDEO_UPLOAD:"/ajax/composerx/attachment/video/upload/"})}),null);
__d("isAnimatedGif",["Promise"],(function(a,b,c,d,e,f){__p&&__p();var g=1e6;function h(a){return a[0]===71&&a[1]===73&&a[2]===70}function i(a,b){return a[b]===0&&a[b+1]===33&&a[b+2]===249&&a[b+3]===4&&a[b+8]===0&&(a[b+9]===44||a[b+9]===33)}function j(a){if(!h(a))return!1;var b=0;for(var c=0;c+9<a.length;++c){i(a,c)&&b++;if(b>1)return!0}return!1}function a(a){__p&&__p();return new(b("Promise"))(function(b){__p&&__p();var c=new FileReader();c.onloadend=function(a){if(a.target.readyState==FileReader.DONE){a=new Uint8Array(a.target.result);j(a)?b(!0):b(!1)}};c.onerror=function(a){b(!1)};var d=Math.min(g,a.size);d=a.slice(0,d);c.readAsArrayBuffer(d)})}e.exports=a}),null);
__d("ComposerXMediaUploadHandler",["fbt","Arbiter","AsyncRequest","ComposerXAjaxEndpoint","ComposerXController","CSS","Dialog","ImageExtensions","ReloadPage","SubscriptionsHandler","URI","VideoUploadConfig","VideoUploadFile","isAnimatedGif"],(function(a,b,c,d,e,f,g){__p&&__p();var h=b("ComposerXAjaxEndpoint").MEDIA_UPLOAD,i="/ajax/composerx/attachment/video/upload/",j=0;function k(a,b){"use strict";this.$1=a,this.$2=b}k.prototype.fetchAttachments=function(){"use strict";[this.getPhotoUploadAttachmentEndpoint(),i].forEach(function(a){b("ComposerXController").fetchAttachmentData(this.$1,a)}.bind(this))};k.prototype.handleFileSelected=function(a){"use strict";var b=this;k.isVideoOrAnimatedGifAsync(a,function(c){c?b.handleVideoSelected(a):b.handlePhotoSelected(a)})};k.canUploadAnimatedGIF=function(){"use strict";return b("ImageExtensions").GIF in b("VideoUploadConfig").videoExtensions};k.isVideoOrAnimatedGifAsync=function(a,c){"use strict";var d=b("VideoUploadFile").getExtensionFromFileInput(a.getInput());k.canUploadAnimatedGIF()&&d===b("ImageExtensions").GIF?b("isAnimatedGif")(a.getInput().files[0]).then(c):b("VideoUploadConfig").videoExtensions[d]?c(!0):c(!1)};k.prototype.handleVideoSelected=function(a){"use strict";if(this.$2&&this.$2.imagesOnly){var c=new(b("Dialog"))().setModal(!0).setButtons([b("Dialog").OK]);this.$2.isEditComposer?c.setTitle(g._("Can't add video")).setBody(g._("Sorry, you can't add a video to a post you're editing.")):c.setTitle(g._("Invalid Image File")).setBody(g._("Please upload a valid image file."));c.show();return}b("ComposerXController").getAttachment(this.$1,i);b("Arbiter").inform("ComposerXFilesStore/filesAdded/"+this.$1+"/videoupload",{fileInput:a},b("Arbiter").BEHAVIOR_PERSISTENT)};k.prototype.handlePhotoSelected=function(a){"use strict";b("ComposerXController").getAttachment(this.$1,this.getPhotoUploadAttachmentEndpoint()),k.$3(this.$1,a)};k.isVideoFile=function(a){"use strict";a=b("VideoUploadFile").getExtensionFromFileInput(a.getInput());return!!b("VideoUploadConfig").videoExtensions[a]};k.prototype.$4=function(){"use strict";return this.$2?this.$2.photoUploadOverrideEndpoint:null};k.prototype.getPhotoUploadAttachmentEndpoint=function(){"use strict";var a=this.$4();return a?a:h};k.$3=function(a,c){"use strict";b("Arbiter").inform("ComposerXFilesStore/filesAdded/"+a+"/mediaupload",{fileInput:c,receivedBySubscriber:!1},b("Arbiter").BEHAVIOR_PERSISTENT)};k.setupFileUploadToComposerDialog=function(a,c,d,e){"use strict";__p&&__p();var f="composerxmediauploadhandler"+j++,g=function(c){b("CSS").conditionClass(a.getControl(),d,c),a.getInput().disabled=c},h=new(b("URI"))(c),i=h.getQueryData();i.client_ref=f;h.setQueryData(i);c=h.toString();a.subscribe("change",function(){new(b("AsyncRequest"))().setURI(c).setErrorHandler(function(){a.clear(),g(!1)}).send(),g(!0)});b("Arbiter").subscribe("composer/dialog/"+f+"/new",function(c,d){this.$3(d.composerID,a);var f=new(b("SubscriptionsHandler"))();f.addSubscriptions(b("Arbiter").subscribe("composer/publish",function(event,a){e&&d.composerID===a.composer_id&&b("ReloadPage").now()}),d.dialog.subscribe("hide",function(){f.release(),a.clear(),g(!1)}))}.bind(this))};e.exports=k}),null);
__d("TypeaheadShowResultsOnFocus",["Event","Keys"],(function(a,b,c,d,e,f){__p&&__p();function a(a){"use strict";this._typeahead=a}a.prototype.enable=function(){"use strict";this._typeahead.getCore().resetOnKeyup=!1,this._subscription=this._typeahead.subscribe("bootstrap",function(a,b){this.firstFetch(b,this._typeahead.getCore(),this._typeahead.getData())}.bind(this)),this._keyUpListener=b("Event").listen(this._typeahead.getCore().getElement(),"keyup",function(event){(b("Event").getKeyCode(event)==b("Keys").BACKSPACE||b("Event").getKeyCode(event)==b("Keys").DELETE)&&this.respond(this._typeahead.getCore(),this._typeahead.getData())}.bind(this)),this._focusListener=b("Event").listen(this._typeahead.getCore().getElement(),"focus",function(event){this.respond(this._typeahead.getCore(),this._typeahead.getData())}.bind(this))};a.prototype.disable=function(){"use strict";this._typeahead.unsubscribe(this._subscription),this._subscription=null,this._keyUpListener.remove(),this._keyUpListener=null,this._focusListener.remove(),this._focusListener=null};a.prototype.firstFetch=function(a,b,c){"use strict";a.bootstrapping||this.respond(b,c)};a.prototype.respond=function(a,b){"use strict";a.getValue()||this.refreshAndShowNeededResults(a,b)};a.prototype.refreshAndShowNeededResults=function(a,b){"use strict";var c=this.getUidsFromData(b);a.setValue("");a=b.buildUids(" ",c);b.respond("",a)};a.prototype.getUidsFromData=function(a){"use strict";a=a.getAllEntries();var b=[];for(var c in a)b.push({uid:a[c].uid,index:a[c].index});b.sort(function(a,b){return a.index-b.index});return b.map(function(a){return a.uid})};Object.assign(a.prototype,{_subscription:null,_keyUpListener:null,_focusListener:null});e.exports=a}),null);