(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{408:function(t,e,r){"use strict";r.d(e,"c",(function(){return n})),r.d(e,"a",(function(){return o})),r.d(e,"b",(function(){return c}));r(411);var n=function(t){return!!t||"必須項目です"},o=function(t){return!t||(/.+@.+\..+/.test(t)||"有効なメールアドレスを入力してください")},c=function(t){return!!t||"パスワードを入力してください"}},459:function(t,e,r){"use strict";r.r(e);var n=r(33),o=(r(105),r(27),r(1)),c=r(408),l=r(61),v={name:"",birth:new Date,jobs:[],intro:"",uid:""},d=o.a.extend({data:function(){return{valid:!0,form:void 0,dialog:!1,users:{name:"",birth:new Date,jobs:[],intro:"",uid:this.$store.getters.uid},requireRule:c.c}},mounted:function(){this.form=this.$refs.vform,this.reset()},methods:{save:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.$refs.vform.validate()){e.next=3;break}return e.abrupt("return");case 3:r=new Date,Object(l.a)(Object(l.b)(l.d,"users"),{name:t.users.name,birth:t.users.birth,jobs:t.users.jobs,intro:t.users.intro,avatar:"https://picsum.photos/50?image="+(Math.floor(400*Math.random())+1),createdAt:r}).then((function(){t.$store.commit("setUserName",t.users.name),t.close()})).catch((function(){alert("エラー"),t.close()}));case 5:case"end":return e.stop()}}),e)})))()},close:function(){this.dialog=!1,this.users=v,this.reset()},reset:function(){var form=this.$refs.vform;null==form||form.reset(),null==form||form.resetValidation()}}}),f=r(93),h=r(193),m=r.n(h),_=r(211),x=r(414),w=r(407),k=r(504),V=r(406),j=r(490),C=r(505),$=r(506),R=r(508),D=r(404),O=r(503),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-form",{ref:"vform",model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[r("v-row",{staticClass:"mt-7",attrs:{justify:"center"}},[r("v-dialog",{attrs:{persistent:"","max-width":"700px"},on:{"click:outside":function(e){return t.close()}},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,o=e.attrs;return[r("v-btn",t._g(t._b({attrs:{color:"orange",dark:""}},"v-btn",o,!1),n),[t._v(" 編集 ")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),r("v-card",[r("v-card-title",[r("span",{staticClass:"text-h5"},[t._v(" プロフィールの編集")])]),t._v(" "),r("v-card-text",[r("v-container",[r("v-row",[r("v-col",{attrs:{cols:"10"}},[t._v("\n                氏名 "),r("span",{staticClass:"red--text"},[t._v("*")]),t._v(" "),r("v-text-field",{attrs:{placeholder:"※ 会津太郎",hint:"氏名を入力して下さい。","persistent-hint":"",required:"",rules:[t.requireRule]},model:{value:t.users.name,callback:function(e){t.$set(t.users,"name",e)},expression:"users.name"}})],1),t._v(" "),r("v-col",{attrs:{cols:"10"}},[t._v("\n                生年月日 "),r("span",{staticClass:"red--text"},[t._v("*")]),t._v(" "),r("v-text-field",{attrs:{hint:"生年月日を入力して下さい。","persistent-hint":"",type:"date",required:"",rules:[t.requireRule]},model:{value:t.users.birth,callback:function(e){t.$set(t.users,"birth",e)},expression:"users.birth"}})],1),t._v(" "),r("v-col",{attrs:{cols:"10"}},[r("v-select",{attrs:{items:["飲食","アパレルショップ","八百屋","花屋","IT企業","会津大学生"],placeholder:"業種",hint:"経験したことのある業種を選択して下さい(複数選択可)","persistent-hint":"",multiple:""},model:{value:t.users.jobs,callback:function(e){t.$set(t.users,"jobs",e)},expression:"users.jobs"}})],1),t._v(" "),r("v-col",{attrs:{cols:"10"}},[t._v("\n                自己紹介\n                "),r("v-text-field",{attrs:{placeholder:"※ 会津が大好きです。趣味は旅行です。",hint:"自己紹介を入力して下さい。","persistent-hint":""},model:{value:t.users.intro,callback:function(e){t.$set(t.users,"intro",e)},expression:"users.intro"}})],1)],1)],1),t._v(" "),r("small",[r("span",{staticClass:"red--text"},[t._v("*")]),t._v(" ... 必須項目です")])],1),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{color:"red lighten-3 white--text"},on:{click:function(e){return t.close()}}},[t._v(" 閉じる ")]),t._v(" "),r("v-btn",{attrs:{color:"blue lighten-3 white--text",disabled:!t.valid},on:{click:function(e){return t.save()}}},[t._v("\n            保存\n          ")])],1)],1)],1)],1)],1)}),[],!1,null,"9d2009c4",null);e.default=component.exports;m()(component,{VBtn:_.a,VCard:x.a,VCardActions:w.a,VCardText:w.b,VCardTitle:w.c,VCol:k.a,VContainer:V.a,VDialog:j.a,VForm:C.a,VRow:$.a,VSelect:R.a,VSpacer:D.a,VTextField:O.a})}}]);