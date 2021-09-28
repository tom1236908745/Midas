(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{526:function(e,r,t){"use strict";t.r(r);var o=t(1),main=t(501),n=t.n(main),l=t(61),d=o.a.extend({layout:"signin",data:function(){var e=this;return{registerErrorMsg:"",tab:null,register_valid:!0,register_email:"",register_password:"",register_password_again:"",emailRules:[function(e){return!e||(/.+@.+\..+/.test(e)||"有効なメールアドレスを入力してください")}],register_passwordRules:[function(e){return!!e||"パスワードを入力してください"},function(e){return n()(e).score>=3||"大文字・小文字・数字・記号を混ぜた強いパスワードにしてください"}],register_passwordAgainRules:[function(r){return!r||(e.$refs.register_password.value===r||"パスワードと一致しません")}],show_registerPassword:!1}},computed:{progress:function(){return this.score.value},score:function(){switch(n()(this.register_password).score){case 4:return{color:"green",value:100};case 3:return{color:"light-green lighten-1",value:75};case 2:return{color:"amber accent-2",value:50};case 1:return{color:"deep-orange lighten-1",value:25};default:return{color:"red darken-3",value:0}}}},methods:{email_register:function(e){var r=this,t=Object(l.h)();this.$refs.register_form.validate()&&this.$store.dispatch("signUp",{auth:t,email:this.register_email,password:this.register_password}).then((function(){r.register_email="",r.register_password="",r.$router.push({name:"index",params:{dashboard_msg:!0,dashboard_msg_text:"アカウントの登録が完了しました。"}})})).catch((function(e){console.log(e),"auth/email-already-in-use"===e.code?r.registerErrorMsg="このメールアドレスは既に登録されています。":"auth/invalid-email"===e.code?r.registerErrorMsg="無効なメールアドレスです。":r.registerErrorMsg="エラーにより登録できませんでした。"}))}}}),c=t(94),_=t(125),v=t.n(_),w=t(530),f=t(212),m=t(413),h=t(408),x=t(518),k=t(407),y=t(446),V=t(453),P=t(414),C=t(519),E=t(520),R=t(522),M=t(515),component=Object(c.a)(d,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("v-container",[t("v-row",{attrs:{justify:"center"}},[t("v-col",{attrs:{sm:"12",md:"5"}},[t("h2",{staticClass:"text-center subtitle-1 font-weight-bold mb-2"},[e._v("\n        メールアドレスで登録\n      ")]),e._v(" "),t("v-row",[t("v-col",[t("v-tabs",{staticClass:"mb-3",attrs:{"background-color":"transparent",color:"blue accent-2",grow:""},model:{value:e.tab,callback:function(r){e.tab=r},expression:"tab"}},[t("v-tab",{attrs:{to:"/login"}},[e._v("ログイン")]),e._v(" "),t("v-tab",{attrs:{to:"/register"}},[e._v("アカウント登録")])],1),e._v(" "),t("v-row",[t("v-col",{attrs:{sm:"12"}},[t("v-card",{attrs:{flat:""}},[t("v-card-text",{staticClass:"pa-0"},[t("v-form",{ref:"register_form",attrs:{"lazy-validation":""},model:{value:e.register_valid,callback:function(r){e.register_valid=r},expression:"register_valid"}},[t("v-text-field",{attrs:{label:"メールアドレス",rules:e.emailRules,required:"","validate-on-blur":""},model:{value:e.register_email,callback:function(r){e.register_email=r},expression:"register_email"}}),e._v(" "),t("v-text-field",{ref:"register_password",attrs:{label:"パスワード",required:"","append-icon":e.show_registerPassword?"mdi-eye":"mdi-eye-off",type:e.show_registerPassword?"text":"password",rules:e.register_passwordRules,"validate-on-blur":"",loading:""},on:{"click:append":function(r){e.show_registerPassword=!e.show_registerPassword}},scopedSlots:e._u([{key:"progress",fn:function(){return[t("v-progress-linear",{attrs:{value:e.score.value,color:e.score.color,absolute:"",height:"2"}})]},proxy:!0}]),model:{value:e.register_password,callback:function(r){e.register_password=r},expression:"register_password"}}),e._v(" "),t("v-text-field",{attrs:{label:"パスワード（確認）",required:"","append-icon":e.show_registerPassword?"mdi-eye":"mdi-eye-off",type:e.show_registerPassword?"text":"password","validate-on-blur":"",rules:e.register_passwordAgainRules},on:{"click:append":function(r){e.show_registerPassword=!e.show_registerPassword}},model:{value:e.register_password_again,callback:function(r){e.register_password_again=r},expression:"register_password_again"}}),e._v(" "),e.registerErrorMsg?t("v-alert",{attrs:{dense:"",text:"",type:"error"}},[e._v("\n                      "+e._s(e.registerErrorMsg)+"\n                    ")]):e._e(),e._v(" "),t("v-btn",{staticClass:"mr-4 white--text",attrs:{disabled:!e.register_valid,color:"blue darken-3"},on:{click:e.email_register}},[e._v("\n                      登録\n                    ")])],1)],1)],1)],1)],1),e._v(" "),t("v-divider",{staticClass:"my-8"})],1)],1)],1)],1)],1)}),[],!1,null,null,null);r.default=component.exports;v()(component,{VAlert:w.a,VBtn:f.a,VCard:m.a,VCardText:h.b,VCol:x.a,VContainer:k.a,VDivider:y.a,VForm:V.a,VProgressLinear:P.a,VRow:C.a,VTab:E.a,VTabs:R.a,VTextField:M.a})}}]);