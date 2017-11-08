YUI.add("aui-resize-constrain-deprecated",function(e,t){function _(){_.superclass.constructor.apply(this,arguments)}var n=e.Lang,r=n.isBoolean,i=n.isNumber,s=n.isString,o=function(t){return t instanceof e.Node},u="borderBottomWidth",a="borderLeftWidth",f="borderRightWidth",l="borderTopWidth",c="bottom",h="con",p="constrain",d="host",v="left",m="maxHeight",g="maxWidth",y="minHeight",b="minWidth",w="node",E="offsetHeight",S="offsetWidth",x="preserveRatio",T="region",N="resizeConstrained",C="right",k="tickX",L="tickY",A="top",O="view",M="viewportRegion";e.mix(_,{NAME:N,NS:h,ATTRS:{constrain:{setter:function(t){return t&&(o(t)||s(t)||t.nodeType)&&(t=e.one(t)),t}},minHeight:{value:15,validator:i},minWidth:{value:15,validator:i},maxHeight:{value:Infinity,validator:i},maxWidth:{value:Infinity,validator:i},preserveRatio:{value:!1,validator:r},tickX:{value:!1},tickY:{value:!1}}}),e.extend(_,e.Plugin.Base,{constrainBorderInfo:null,initializer:function(){var t=this,n=t.get(d);t.constrainBorderInfo={bottom:0,left:0,right:0,top:0},n.delegate.dd.plug(e.Plugin.DDConstrained,{tickX:t.get(k),tickY:t.get(L)}),n.after("resize:align",e.bind(t._handleResizeAlignEvent,t)),n.on("resize:start",e.bind(t._handleResizeStartEvent,t))},_checkConstrain:function(e,t,n){var r=this,i=r.get(d),s=i.info,o=r._getConstrainRegion();if(o){var u=s[e]+s[n],a=o[t]-r.constrainBorderInfo[t];u>=a&&(s[n]-=u-a);var f=s[e],l=o[e]+r.constrainBorderInfo[e];f<=l&&(s[e]+=l-f,s[n]-=l-f)}},_checkHeight:function(){var e=this,t=e.get(d),n=t.info,r=t.originalInfo,i=e.get(m),s=e.get(y);e._checkConstrain(A,c,E),n.offsetHeight>i&&t._checkSize(E,i),n.offsetHeight<s&&t._checkSize(E,s)},_checkRatio:function(){var t=this,n=t.get(d),r=n.info,s=n.originalInfo,o=s.offsetWidth,u=s.offsetHeight,a=s.top,f=s.left,l=s.bottom,c=s.right,h=function(){return r.offsetWidth/o},v=function(){return r.offsetHeight/u},m=n.changeHeightHandles;if(t.get(p)&&n.changeHeightHandles&&n.changeWidthHandles){var g=t._getConstrainRegion(),y=t.constrainBorderInfo,b=g.bottom-y.bottom-l,w=f-(g.left+y.left),E=g.right-y.right-c,S=a-(g.top+y.top);n.changeLeftHandles&&n.changeTopHandles?m=S<w:n.changeLeftHandles?m=b<w:n.changeTopHandles?m=S<E:m=b<E}m?(r.offsetWidth=o*v(),t._checkWidth(),r.offsetHeight=u*h()):(r.offsetHeight=u*h(),t._checkHeight(),r.offsetWidth=o*v()),n.changeTopHandles&&(r.top=a+(u-r.offsetHeight)),n.changeLeftHandles&&(r.left=f+(o-r.offsetWidth)),e.each(r,function(e,t){i(e)&&(r[t]=Math.round(e))})},_checkRegion:function(){var t=this,n=t.get(d),r=t._getConstrainRegion();return e.DOM.inRegion(null,r,!0,n.info)},_checkWidth:function(){var e=this,t=e.get(d),n=t.info,r=t.originalInfo,i=e.get(g),s=e.get(b);e._checkConstrain(v,C,S),n.offsetWidth<s&&t._checkSize(S,s),n.offsetWidth>i&&t._checkSize(S,i)},_getConstrainRegion:function(){var e=this,t=e.get(d),n=t.get(w),r=e.get(p),i=null;return r&&(r==O?i=n.get(M):o(r)?i=r.get(T):i=r),i},_handleResizeAlignEvent:function(e){var t=this,n=t.get(d);t._checkHeight(),t._checkWidth(),t.get(x)&&t._checkRatio(),t.get(p)&&!t._checkRegion()&&(n.info=n.lastInfo)},_handleResizeStartEvent:function(e){var t=this;t._updateConstrainBorderInfo()},_updateConstrainBorderInfo:function(){var e=this,t=e.get(p);if(o(t)){var n=function(e){return parseFloat(t.getStyle(e))||0};e.constrainBorderInfo.bottom=n(u),e.constrainBorderInfo.left=n(a),e.constrainBorderInfo.right=n(f),e.constrainBorderInfo.top=n(l)}}}),e.namespace("Plugin"),e.Plugin.ResizeConstrained=_},"3.1.0-deprecated.30",{requires:["dd-constrain","plugin","aui-resize-base-deprecated"]});
