webpackJsonp([1],{"0IpB":function(t,i,e){"use strict";function n(t){e("pQa1")}Object.defineProperty(i,"__esModule",{value:!0});var s=e("FvAR"),a=e("K2YM"),o=e("/Xao"),r=n,l=o(s.a,a.a,!1,r,"data-v-2efca354",null);i.default=l.exports},"0aAL":function(t,i,e){"use strict";var n=e("AA3o"),s=e.n(n),a=function t(i){var e=i.id,n=i.name;s()(this,t),this.id=e,this.name=n,this.avatar="https://y.gtimg.cn/music/photo_new/T001R300x300M000"+e+".jpg?max_age=2592000"};i.a=a},"8PL7":function(t,i,e){var n=e("woa3");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e("8bSs")("b2b47d84",n,!0)},AA3o:function(t,i,e){"use strict";i.__esModule=!0,i.default=function(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}},FvAR:function(t,i,e){"use strict";var n=e("4YfN"),s=e.n(n),a=e("Sgn/"),o=e("T452"),r=e("0aAL"),l=e("sODj"),A=e("9rMa");i.a={name:"singer",data:function(){return{singers:[]}},computed:{},created:function(){this._getSingerList()},components:{ListView:l.a},watch:{},methods:s()({},Object(A.mapMutations)({setSinger:"SET_SINGER"}),{selectSinger:function(t){this.$router.push({path:"/singer/"+t.id}),this.setSinger(t)},_getSingerList:function(){var t=this;Object(a.a)().then(function(i){i.code===o.a&&(t.singers=t._normalizeSinger(i.data.list))})},_normalizeSinger:function(t){var i={hot:{title:"热门",items:[]}};t.forEach(function(t,e){e<10&&i.hot.items.push(new r.a({id:t.Fsinger_mid,name:t.Fsinger_name}));var n=t.Findex;i[n]||(i[n]={title:n,items:[]}),i[n].items.push(new r.a({id:t.Fsinger_mid,name:t.Fsinger_name}))});var e=[],n=[];for(var s in i){var a=i[s];a.title.match(/[a-zA-Z]/)?n.push(a):"热门"===a.title&&e.push(a)}return n.sort(function(t,i){return t.title.charCodeAt(0)-i.title.charCodeAt(0)}),e.concat(n)}})}},K2YM:function(t,i,e){"use strict";var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{ref:"singer",staticClass:"singer"},[e("list-view",{ref:"list",attrs:{data:t.singers},on:{select:t.selectSinger}}),t._v(" "),e("router-view")],1)},s=[],a={render:n,staticRenderFns:s};i.a=a},eSqg:function(t,i,e){"use strict";var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("scroll",{ref:"listview",staticClass:"listview",attrs:{data:t.data,listenScroll:t.listenScroll,probeType:t.probeType},on:{scroll:t.scroll}},[e("ul",t._l(t.data,function(i,n){return e("li",{key:n,ref:"listGroup",refInFor:!0,staticClass:"list-group"},[e("h2",{staticClass:"list-group-title"},[t._v(t._s(i.title))]),t._v(" "),e("ul",t._l(i.items,function(i,n){return e("li",{key:n,staticClass:"list-group-item",on:{click:function(e){t.selectItem(i)}}},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:i.avatar,expression:"item.avatar"}],staticClass:"avatar"}),t._v(" "),e("span",{staticClass:"name"},[t._v(t._s(i.name))])])}))])})),t._v(" "),e("div",{staticClass:"list-shortcut",on:{touchstart:function(i){i.stopPropagation(),i.preventDefault(),t.onShortcutTouchStart(i)},touchmove:function(i){i.stopPropagation(),i.preventDefault(),t.onShortcutTouchMove(i)},touchend:function(t){t.stopPropagation()}}},[e("ul",t._l(t.shortcutList,function(i,n){return e("li",{key:n,staticClass:"item",class:{current:t.currentIndex===n},attrs:{"data-index":n}},[t._v("\n            "+t._s(i)+"\n            ")])}))]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.fixedTitle,expression:"fixedTitle"}],ref:"fixed",staticClass:"list-fixed"},[e("h1",{staticClass:"fixed-title"},[t._v(t._s(t.fixedTitle))])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.data.length,expression:"!data.length"}],staticClass:"loading-container"},[e("loading")],1)])},s=[],a={render:n,staticRenderFns:s};i.a=a},hNwc:function(t,i,e){"use strict";var n=e("qwAB"),s=e("y/jF"),a=e("3Q4o");i.a={data:function(){return{scrollY:-1,currentIndex:0,diff:-1}},props:{data:{type:Array,default:[]}},components:{Scroll:n.a,Loading:s.a},created:function(){this.touch={},this.listenScroll=!0,this.listHeight=[],this.probeType=3},computed:{shortcutList:function(){return this.data.map(function(t){return t.title.slice(0,1)})},fixedTitle:function(){if(!(this.scrollY>0))return this.data[this.currentIndex]?this.data[this.currentIndex].title:""}},methods:{selectItem:function(t){this.$emit("select",t)},onShortcutTouchStart:function(t){var i=Object(a.b)(t.target,"index"),e=t.touches[0];this.touch.y1=e.pageY,this.touch.anchorIndex=i,this._scrollTo(i)},onShortcutTouchMove:function(t){var i=t.touches[0];this.touch.y2=i.pageY;var e=(this.touch.y2-this.touch.y1)/18|0,n=parseInt(this.touch.anchorIndex)+e;this._scrollTo(n)},refresh:function(){},scroll:function(t){this.scrollY=t.y},_scrollTo:function(t){(t||0===t)&&(t<0?t=0:t>this.listHeight.length-2&&(t=this.listHeight.length-2),this.scrollY=-this.listHeight[t],this.$refs.listview.scrollToElement(this.$refs.listGroup[t],0))},_calculateHeight:function(){this.listHeight=[];var t=this.$refs.listGroup,i=0;this.listHeight.push(i);for(var e=0;e<t.length;e++){i+=t[e].clientHeight,this.listHeight.push(i)}}},watch:{data:function(){var t=this;setTimeout(function(){t._calculateHeight()},20)},scrollY:function(t){var i=this.listHeight;if(t>0)return void(this.currentIndex=0);for(var e=0;e<i.length-1;e++){var n=i[e],s=i[e+1];if(-t>=n&&-t<s)return this.currentIndex=e,void(this.diff=s+t)}this.currentIndex=i.length-2},diff:function(t){var i=t>0&&t<30?t-30:0;this.fixedTop!==i&&(this.fixedTop=i,this.$refs.fixed.style.transform="translate3d(0, "+i+"px, 0)")}}}},leAj:function(t,i,e){i=t.exports=e("BkJT")(!0),i.push([t.i,".singer[data-v-2efca354]{position:fixed;top:88px;bottom:0;width:100%;overflow:hidden}","",{version:3,sources:["D:/Vue/project/vue-music/src/components/singer/singer.vue"],names:[],mappings:"AACA,yBACE,eAAgB,AAChB,SAAU,AACV,SAAU,AACV,WAAY,AACZ,eAAiB,CAClB",file:"singer.vue",sourcesContent:["\n.singer[data-v-2efca354] {\n  position: fixed;\n  top: 88px;\n  bottom: 0;\n  width: 100%;\n  overflow: hidden;\n}"],sourceRoot:""}])},pQa1:function(t,i,e){var n=e("leAj");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e("8bSs")("6ef4b1eb",n,!0)},sODj:function(t,i,e){"use strict";function n(t){e("8PL7")}var s=e("hNwc"),a=e("eSqg"),o=e("/Xao"),r=n,l=o(s.a,a.a,!1,r,"data-v-b6d710c8",null);i.a=l.exports},woa3:function(t,i,e){i=t.exports=e("BkJT")(!0),i.push([t.i,".listview[data-v-b6d710c8]{width:100%;height:100%;overflow:hidden;background:#222}.listview .list-group[data-v-b6d710c8]{padding-bottom:30px}.listview .list-group .list-group-title[data-v-b6d710c8]{height:30px;line-height:30px;padding-left:20px;font-size:12px;color:hsla(0,0%,100%,.5);background:#333;text-align:left}.listview .list-group .list-group-item[data-v-b6d710c8]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:20px 0 0 30px}.listview .list-group .list-group-item .avatar[data-v-b6d710c8]{width:50px;height:50px;border-radius:50%}.listview .list-group .list-group-item .name[data-v-b6d710c8]{margin-left:20px;color:hsla(0,0%,100%,.5);font-size:14px}.listview .list-shortcut[data-v-b6d710c8]{position:absolute;z-index:30;right:0;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);width:20px;padding:20px 0;border-radius:10px;text-align:center;background:rgba(0,0,0,.3);font-family:Helvetica}.listview .list-shortcut .item[data-v-b6d710c8]{padding:3px;line-height:1;color:hsla(0,0%,100%,.5);font-size:12px}.listview .list-shortcut .item.current[data-v-b6d710c8]{color:#ffcd32}.listview .list-fixed[data-v-b6d710c8]{position:absolute;top:0;left:0;width:100%}.listview .list-fixed .fixed-title[data-v-b6d710c8]{height:30px;line-height:30px;padding-left:20px;font-size:12px;color:hsla(0,0%,100%,.5);background:#333;text-align:left}.listview .loading-container[data-v-b6d710c8]{position:absolute;width:100%;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}","",{version:3,sources:["D:/Vue/project/vue-music/src/base/listview/listview.vue"],names:[],mappings:"AACA,2BACE,WAAY,AACZ,YAAa,AACb,gBAAiB,AACjB,eAAiB,CAClB,AACD,uCACE,mBAAqB,CACtB,AACD,yDACE,YAAa,AACb,iBAAkB,AAClB,kBAAmB,AACnB,eAAgB,AAChB,yBAA6B,AAC7B,gBAAiB,AACjB,eAAiB,CAClB,AACD,wDACE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,yBAA0B,AACtB,sBAAuB,AACnB,mBAAoB,AAC5B,qBAAuB,CACxB,AACD,gEACE,WAAY,AACZ,YAAa,AACb,iBAAmB,CACpB,AACD,8DACE,iBAAkB,AAClB,yBAA6B,AAC7B,cAAgB,CACjB,AACD,0CACE,kBAAmB,AACnB,WAAY,AACZ,QAAS,AACT,QAAS,AACT,mCAAoC,AAC5B,2BAA4B,AACpC,WAAY,AACZ,eAAgB,AAChB,mBAAoB,AACpB,kBAAmB,AACnB,0BAA4B,AAC5B,qBAAuB,CACxB,AACD,gDACE,YAAa,AACb,cAAe,AACf,yBAA6B,AAC7B,cAAgB,CACjB,AACD,wDACE,aAAe,CAChB,AACD,uCACE,kBAAmB,AACnB,MAAO,AACP,OAAQ,AACR,UAAY,CACb,AACD,oDACE,YAAa,AACb,iBAAkB,AAClB,kBAAmB,AACnB,eAAgB,AAChB,yBAA6B,AAC7B,gBAAiB,AACjB,eAAiB,CAClB,AACD,8CACE,kBAAmB,AACnB,WAAY,AACZ,QAAS,AACT,mCAAoC,AAC5B,0BAA4B,CACrC",file:"listview.vue",sourcesContent:["\n.listview[data-v-b6d710c8] {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  background: #222;\n}\n.listview .list-group[data-v-b6d710c8] {\n  padding-bottom: 30px;\n}\n.listview .list-group .list-group-title[data-v-b6d710c8] {\n  height: 30px;\n  line-height: 30px;\n  padding-left: 20px;\n  font-size: 12px;\n  color: rgba(255,255,255,0.5);\n  background: #333;\n  text-align: left;\n}\n.listview .list-group .list-group-item[data-v-b6d710c8] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 20px 0 0 30px;\n}\n.listview .list-group .list-group-item .avatar[data-v-b6d710c8] {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n}\n.listview .list-group .list-group-item .name[data-v-b6d710c8] {\n  margin-left: 20px;\n  color: rgba(255,255,255,0.5);\n  font-size: 14px;\n}\n.listview .list-shortcut[data-v-b6d710c8] {\n  position: absolute;\n  z-index: 30;\n  right: 0;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  width: 20px;\n  padding: 20px 0;\n  border-radius: 10px;\n  text-align: center;\n  background: rgba(0,0,0,0.3);\n  font-family: Helvetica;\n}\n.listview .list-shortcut .item[data-v-b6d710c8] {\n  padding: 3px;\n  line-height: 1;\n  color: rgba(255,255,255,0.5);\n  font-size: 12px;\n}\n.listview .list-shortcut .item.current[data-v-b6d710c8] {\n  color: #ffcd32;\n}\n.listview .list-fixed[data-v-b6d710c8] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n}\n.listview .list-fixed .fixed-title[data-v-b6d710c8] {\n  height: 30px;\n  line-height: 30px;\n  padding-left: 20px;\n  font-size: 12px;\n  color: rgba(255,255,255,0.5);\n  background: #333;\n  text-align: left;\n}\n.listview .loading-container[data-v-b6d710c8] {\n  position: absolute;\n  width: 100%;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}"],sourceRoot:""}])}});
//# sourceMappingURL=1.6567491cb567e34a677a.js.map