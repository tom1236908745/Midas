(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{408:function(t,e,n){"use strict";n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return l}));n(411);var r=function(t){return!!t||"必須項目です"},o=function(t){return!t||(/.+@.+\..+/.test(t)||"有効なメールアドレスを入力してください")},l=function(t){return!!t||"パスワードを入力してください"}},430:function(t,e,n){"use strict";n.r(e);var r=n(33),o=(n(105),n(27),n(1)),l=n(61),c=n(408),v=o.a.extend({data:function(){return{valid:!0,form:void 0,dialog:!1,postData:{uid:"",name:"",title:"",exp:"",jobs:[],money:0},requireRule:c.c}},mounted:function(){this.form=this.$refs.vform,this.reset()},methods:{addComment:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.$refs.vform.validate()){e.next=3;break}return e.abrupt("return");case 3:Object(l.a)(Object(l.b)(l.d,"posts"),{uid:t.$store.getters.user.uid,name:t.$store.getters.user.name,title:t.postData.title,exp:t.postData.exp,jobs:t.postData.jobs,money:t.postData.money,createdAt:new Date}).then((function(){t.close()})).catch((function(){alert("エラー"),t.close()}));case 4:case"end":return e.stop()}}),e)})))()},close:function(){this.dialog=!1,this.reset()},reset:function(){var form=this.$refs.vform;null==form||form.reset(),null==form||form.resetValidation()}}}),d=n(93),f=n(193),m=n.n(f),x=n(211),h=n(414),_=n(407),D=n(504),k=n(406),w=n(490),V=n(505),C=n(506),j=n(508),y=n(404),$=n(503),component=Object(d.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-form",{ref:"vform",model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("v-row",{staticClass:"mt-5",attrs:{justify:"center"}},[n("v-dialog",{attrs:{persistent:"","max-width":"700px"},on:{"click:outside":function(e){return t.close()}},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-btn",t._g(t._b({attrs:{color:"primary",dark:""}},"v-btn",o,!1),r),[t._v("\n          投稿する\n        ")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),n("v-card",[n("v-card-title",[n("span",{staticClass:"text-h5"},[t._v("新規投稿")])]),t._v(" "),n("v-card-text",[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"10"}},[t._v("\n                タイトル"),n("span",{staticClass:"red--text"},[t._v("*")]),t._v(" "),n("v-text-field",{attrs:{placeholder:"※ パソコンについて相談したい。",hint:"記事のタイトルを入力して下さい。","persistent-hint":"",rules:[t.requireRule],required:""},model:{value:t.postData.title,callback:function(e){t.$set(t.postData,"title",e)},expression:"postData.title"}})],1),t._v(" "),n("v-col",{attrs:{cols:"10"}},[t._v("\n                概要"),n("span",{staticClass:"red--text"},[t._v("*")]),t._v(" "),n("v-text-field",{attrs:{placeholder:"※ 会津大学生にパソコンの事を聞きたい。",hint:"記事の概要を説明して下さい。","persistent-hint":"",rules:[t.requireRule],required:""},model:{value:t.postData.exp,callback:function(e){t.$set(t.postData,"exp",e)},expression:"postData.exp"}})],1),t._v(" "),n("v-col",{attrs:{cols:"10"}},[n("v-select",{attrs:{items:["飲食","アパレルショップ","八百屋","花屋","IT企業","会津大学生"],placeholder:"対象業種",hint:"相談したい対象業種を選択して下さい","persistent-hint":"",multiple:""},model:{value:t.postData.jobs,callback:function(e){t.$set(t.postData,"jobs",e)},expression:"postData.jobs"}})],1),t._v(" "),n("v-col",{attrs:{cols:"10"}},[t._v("\n                金額\n                "),n("v-text-field",{attrs:{placeholder:"0",type:"number"},model:{value:t.postData.money,callback:function(e){t.$set(t.postData,"money",e)},expression:"postData.money"}})],1)],1)],1),t._v(" "),n("small",[n("span",{staticClass:"red--text"},[t._v("*")]),t._v(" ... 必須項目です")])],1),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"red lighten-3 white--text"},on:{click:function(e){return t.close()}}},[t._v(" 閉じる ")]),t._v(" "),n("v-btn",{attrs:{disabled:!t.valid,color:"blue lighten-3 white--text"},on:{click:t.addComment}},[t._v("\n            投稿\n          ")])],1)],1)],1)],1)],1)}),[],!1,null,"b0e49678",null);e.default=component.exports;m()(component,{VBtn:x.a,VCard:h.a,VCardActions:_.a,VCardText:_.b,VCardTitle:_.c,VCol:D.a,VContainer:k.a,VDialog:w.a,VForm:V.a,VRow:C.a,VSelect:j.a,VSpacer:y.a,VTextField:$.a})}}]);