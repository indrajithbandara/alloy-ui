YUI.add("aui-datepicker-popover",function(e,t){function i(){}var n=e.Lang,r=e.one(e.config.doc);i.ATTRS={autoHide:{validator:n.isBoolean,value:!0},popover:{setter:"_setPopover",value:{},writeOnce:!0},popoverCssClass:{validator:n.isString,value:e.getClassName("datepicker-popover")}},e.mix(i.prototype,{popover:null,alignTo:function(e){var t=this,n=t.getPopover();n.set("align.node",e)},getPopover:function(){var t=this,n=t.popover;return n||(n=new e.Popover(t.get("popover")),n.get("boundingBox").on("clickoutside",t._onPopoverClickOutside,t),n.get("boundingBox").on("keydown",t._handleKeyEvent,t),t.popover=n),n},hide:function(){var e=this;e.getPopover().hide()},show:function(){var e=this;e.getPopover().show()},_handleKeyEvent:function(e){var t=this;e.isKey("esc")&&(e.stopPropagation(),t.hide())},_isActiveInputFocused:function(){var e=this,t=e.get("activeInput");return t===r.get("activeElement")},_onPopoverClickOutside:function(e){var t=this,n=e.target,r=t.get("activeInput");r&&!t._isActiveInputFocused()&&!r.contains(n)&&t.hide()},_setPopover:function(t){var n=this;return e.merge({bodyContent:"",cssClass:n.get("popoverCssClass"),constrain:!0,hideOn:[{node:r,eventName:"key",keyCode:"esc"}],position:"bottom",render:!0,triggerShowEvent:"click",triggerToggleEvent:null,visible:!1},t)}},!0),e.DatePickerPopover=i},"3.1.0-deprecated.30",{requires:["aui-classnamemanager","aui-popover"]});
