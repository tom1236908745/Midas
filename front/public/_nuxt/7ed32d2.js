(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{475:function(t,o,l){"use strict";l.r(o);var n=l(1),e=l(61),r=n.a.extend({layout:"signin",data:function(){return{tab:null,login_valid:!0,login_email:"",login_password:"",show_loginpassword:!1,loginErrorMsg:"",socialLoginErrorMsg:""}},methods:{email_login:function(t){var o=this,l=Object(e.c)();this.$store.dispatch("signInWithEmail",{auth:l,email:this.login_email,password:this.login_password}).then((function(){o.login_email="",o.login_password="",o.$router.push("/")})).catch((function(t){"auth/user-disabled"===t.code?o.loginErrorMsg="このアカウントはロックされています。":o.loginErrorMsg="メールアドレスまたはパスワードが間違っています。"}))}}}),c=l(93),d=l(123),v=l.n(d),_=l(482),w=l(205),m=l(405),f=l(402),h=l(468),x=l(400),V=l(469),k=l(470),y=l(471),C=l(472),E=l(474),M=l(473),component=Object(c.a)(r,(function(){var t=this,o=t.$createElement,l=t._self._c||o;return l("v-container",[l("v-row",{attrs:{justify:"center"}},[l("v-col",{attrs:{sm:"12",md:"5"}},[l("h2",{staticClass:"text-center subtitle-1 font-weight-bold mb-2"},[t._v("\n        メールアドレスでログイン\n      ")]),t._v(" "),l("v-row",[l("v-col",[l("v-tabs",{staticClass:"mb-3",attrs:{"background-color":"transparent",color:"blue accent-2",grow:""},model:{value:t.tab,callback:function(o){t.tab=o},expression:"tab"}},[l("v-tab",{attrs:{to:"/login"}},[t._v("ログイン")]),t._v(" "),l("v-tab",{attrs:{to:"/register"}},[t._v("アカウント登録")])],1),t._v(" "),l("v-row",[l("v-col",{attrs:{sm:"12"}},[l("v-card",{attrs:{flat:""}},[l("v-card-text",{staticClass:"pa-0"},[l("v-form",{ref:"login_form",attrs:{"lazy-validation":""},model:{value:t.login_valid,callback:function(o){t.login_valid=o},expression:"login_valid"}},[l("v-text-field",{attrs:{label:"メールアドレス",required:""},model:{value:t.login_email,callback:function(o){t.login_email=o},expression:"login_email"}}),t._v(" "),l("v-text-field",{attrs:{label:"パスワード",required:"","append-icon":t.show_loginpassword?"mdi-eye":"mdi-eye-off",type:t.show_loginpassword?"text":"password"},on:{"click:append":function(o){t.show_loginpassword=!t.show_loginpassword}},model:{value:t.login_password,callback:function(o){t.login_password=o},expression:"login_password"}}),t._v(" "),t.loginErrorMsg?l("v-alert",{attrs:{dense:"",text:"",type:"error"}},[t._v("\n                      "+t._s(t.loginErrorMsg)+"\n                    ")]):t._e(),t._v(" "),l("v-btn",{staticClass:"my-4 white--text",attrs:{disabled:!t.login_valid,color:"blue darken-3"},on:{click:t.email_login}},[t._v("\n                      ログイン\n                    ")])],1)],1)],1)],1)],1),t._v(" "),l("v-divider",{staticClass:"my-8"})],1)],1)],1)],1)],1)}),[],!1,null,null,null);o.default=component.exports;v()(component,{VAlert:_.a,VBtn:w.a,VCard:m.a,VCardText:f.a,VCol:h.a,VContainer:x.a,VDivider:V.a,VForm:k.a,VRow:y.a,VTab:C.a,VTabs:E.a,VTextField:M.a})}}]);