(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{408:function(e,t,r){"use strict";r.d(t,"c",(function(){return n})),r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return c}));r(411);var n=function(e){return!!e||"必須項目です"},o=function(e){return!e||(/.+@.+\..+/.test(e)||"有効なメールアドレスを入力してください")},c=function(e){return!!e||"パスワードを入力してください"}},460:function(e,t,r){"use strict";r.r(t);var n=r(33),o=(r(105),r(29),r(1)),c=r(408),l=r(61),v={name:"",birth:new Date,jobs:[],intro:""},d=o.a.extend({data:function(){return{dialog:!1,users:{name:"",birth:new Date,jobs:[],intro:""},requireRule:c.c}},methods:{close:function(){this.dialog=!1,this.users=v},save:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=new Date,Object(l.a)(Object(l.b)(l.d,"users"),{name:e.users.name,birth:e.users.birth,jobs:e.users.jobs,intro:e.users.intro,avatar:"https://picsum.photos/50?image="+(Math.floor(400*Math.random())+1),createdAt:r}),e.close();case 3:case"end":return t.stop()}}),t)})))()}}}),f=r(93),h=r(193),m=r.n(h),_=r(211),x=r(413),k=r(407),w=r(505),j=r(406),V=r(491),C=r(506),R=r(508),$=r(404),D=r(504),component=Object(f.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-row",{staticClass:"mt-7",attrs:{justify:"center"}},[r("v-dialog",{attrs:{persistent:"","max-width":"700px"},on:{"click:outside":function(t){return e.close()}},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,o=t.attrs;return[r("v-btn",e._g(e._b({attrs:{color:"orange",dark:""}},"v-btn",o,!1),n),[e._v(" 編集 ")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e._v(" "),r("v-card",[r("v-card-title",[r("span",{staticClass:"text-h5"},[e._v(" プロフィールの編集")])]),e._v(" "),r("v-card-text",[r("v-container",[r("v-row",[r("v-col",{attrs:{cols:"10"}},[e._v("\n              氏名 *\n              "),r("v-text-field",{attrs:{placeholder:"※ 会津太郎",hint:"氏名を入力して下さい。","persistent-hint":"",required:"",rules:[e.requireRule]},model:{value:e.users.name,callback:function(t){e.$set(e.users,"name",t)},expression:"users.name"}})],1),e._v(" "),r("v-col",{attrs:{cols:"10"}},[e._v("\n              生年月日 *\n              "),r("v-text-field",{attrs:{hint:"生年月日を入力して下さい。","persistent-hint":"",type:"date",required:"",rules:[e.requireRule]},model:{value:e.users.birth,callback:function(t){e.$set(e.users,"birth",t)},expression:"users.birth"}})],1),e._v(" "),r("v-col",{attrs:{cols:"10"}},[r("v-select",{attrs:{items:["飲食","アパレルショップ","八百屋","花屋","IT企業","会津大学生"],placeholder:"業種",hint:"経験したことのある業種を選択して下さい(複数選択可)","persistent-hint":"",multiple:""},model:{value:e.users.jobs,callback:function(t){e.$set(e.users,"jobs",t)},expression:"users.jobs"}})],1),e._v(" "),r("v-col",{attrs:{cols:"10"}},[e._v("\n              自己紹介\n              "),r("v-text-field",{attrs:{placeholder:"※ 会津が大好きです。趣味は旅行です。",hint:"自己紹介を入力して下さい。","persistent-hint":"",rules:[e.requireRule]},model:{value:e.users.intro,callback:function(t){e.$set(e.users,"intro",t)},expression:"users.intro"}})],1)],1)],1),e._v(" "),r("small",[e._v("* ... 必須項目です")])],1),e._v(" "),r("v-card-actions",[r("v-spacer"),e._v(" "),r("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(t){return e.close()}}},[e._v(" Close ")]),e._v(" "),r("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(t){return e.save()}}},[e._v(" Save ")])],1)],1)],1)],1)}),[],!1,null,"11a0e246",null);t.default=component.exports;m()(component,{VBtn:_.a,VCard:x.a,VCardActions:k.a,VCardText:k.b,VCardTitle:k.c,VCol:w.a,VContainer:j.a,VDialog:V.a,VRow:C.a,VSelect:R.a,VSpacer:$.a,VTextField:D.a})}}]);