import{$ as X,A as Q,B as N,C as O,F as U,G as B,H as V,J as A,L as H,M as W,N as Y,T as $,U as j,V as q,W as z,X as R,Y as G,Z as J,_ as K,a as C,aa as Z,b as f,ba as ee,c as b,ca as te,d as S,da as ne,e as x,ea as oe,f as i,fa as ie,g as I,ga as re,h as p,ha as ae,i as E,j as l,k,l as w,m as M,n,o as t,p as s,q as v,r as y,s as d,t as T,u as r,v as h,w as L,x as P,y as F,z as D}from"./chunk-UFK76HGY.js";import"./chunk-SRUD5PB2.js";import"./chunk-YWO3IHIW.js";import"./chunk-SD5XCXOE.js";import"./chunk-JV7ON635.js";import"./chunk-F7XBNY6P.js";import"./chunk-EXRUNRTN.js";import"./chunk-C4TORFO5.js";import"./chunk-UHUGRIBZ.js";import"./chunk-4WFVMWDK.js";import"./chunk-4I6HJA6T.js";import"./chunk-NMYJD6OP.js";import"./chunk-B43CU5JX.js";import"./chunk-TQEIIVVC.js";import"./chunk-LF5XB4YN.js";import"./chunk-NWJ5J3BN.js";function pe(o,a){o&1&&(n(0,"p"),r(1,"Loading..."),t())}function de(o,a){if(o&1&&(n(0,"div",0),D(1),n(2,"div",1)(3,"div",2),s(4,"ion-icon",3)(5,"ion-icon",3),t(),s(6,"ion-icon",3)(7,"ion-icon",3)(8,"ion-icon",3),t(),n(9,"div",4),s(10,"ion-icon",3)(11,"ion-icon",3),t()()),o&2){let e=d().referralCount();i(4),l("ngClass",e>=1?"green":"gray"),i(),l("ngClass",e>=2?"green":"gray"),i(),l("ngClass",e>=3?"green":"gray"),i(),l("ngClass",e>=4?"green":"gray"),i(),l("ngClass",e>=5?"green":"gray"),i(2),l("ngClass",e>=6?"green":"gray"),i(),l("ngClass",e>=7?"green":"gray")}}var u=class o{referralCount=S(void 0);static \u0275fac=function(e){return new(e||o)};static \u0275cmp=p({type:o,selectors:[["app-invite-status"]],inputs:{referralCount:[1,"referralCount"]},decls:2,vars:1,consts:[[1,"circle","circle-third"],[1,"circle","circle-second"],[1,"circle","circle-first"],["name","person-circle",3,"ngClass"],[2,"display","flex","align-items","center","padding-right","3px"]],template:function(e,c){e&1&&E(0,pe,2,0,"p")(1,de,12,7,"div",0),e&2&&k(c.referralCount()?1:0)},dependencies:[te,O],styles:["ion-icon[_ngcontent-%COMP%]{border-radius:10px}ion-icon.green[_ngcontent-%COMP%]{background:var(--ion-color-strong-green);color:var(--ion-color-light-green)}ion-icon.gray[_ngcontent-%COMP%]{background:var(--ion-color-light);color:var(--ion-color-normal-gray)}.circle[_ngcontent-%COMP%]{display:flex;padding:3px;border-radius:12px;align-items:center;margin-right:2px}.circle-third[_ngcontent-%COMP%]{background:var(--ion-color-strong-blue)}.circle-second[_ngcontent-%COMP%]{background:var(--ion-color-normal-blue)}.circle-first[_ngcontent-%COMP%]{background:var(--ion-color-light-blue)}"]})};var ue={loading:!0,contacts:[]},_=ie(re(ue));var le={botUrl:"https://t.me/referal_prototype_bot"};var ge=(o,a)=>a.username;function Ce(o,a){if(o&1){let e=v();n(0,"ion-item",10,0),y("click",function(){f(e);let m=T(11);return b(m.checked=!m.checked)}),n(2,"ion-avatar"),s(3,"img",11),t(),n(4,"ion-label",12)(5,"h3"),r(6),t(),n(7,"p"),r(8),t()(),s(9,"app-invite-status",13)(10,"ion-checkbox",5,1),t()}if(o&2){let e=a.$implicit;i(3),l("src",e.avatar,x),i(3),h(e.name),i(2),h(e.username),i(),l("referralCount",e.referralCount)}}function fe(o,a){if(o&1){let e=v();n(0,"ion-item")(1,"ion-label"),r(2,"No results found."),t(),n(3,"ion-button",14),y("click",function(){f(e);let m=d();return b(m.copyUserId())}),r(4,"Invite"),t(),s(5,"ion-toast",15),t()}o&2&&(i(5),l("duration",3e3))}var ce=class o{contactsStore=C(_);appStore=C(ae);searchQuery=I("");filteredContacts=N(()=>{let a=this.searchQuery().toLowerCase();return this.contactsStore.contacts().filter(e=>e.name.toLowerCase().includes(a)||e.username.toLowerCase().includes(a)||e.email.toLowerCase().includes(a))});copyUserId(){let a=`${le.botUrl}?start=${this.appStore.user().id}`;navigator.clipboard.writeText(a).then(()=>{console.log("Text copied to clipboard!")}).catch(e=>{console.error("Failed to copy text: ",e)})}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=p({type:o,selectors:[["app-contacts"]],inputs:{searchQuery:[1,"searchQuery"]},outputs:{searchQuery:"searchQueryChange"},features:[Q([_])],decls:41,vars:3,consts:[["item",""],["checkbox",""],[3,"color"],["slot","start"],["defaultHref","home"],["slot","end"],["value","default"],["value","segment"],["placeholder","Search Users",3,"ngModelChange","ngModel"],["detail","false","button",""],["detail","false","button","",3,"click"],["alt","User Avatar",3,"src"],[2,"margin-left","1rem","text-overflow","elipsis","overflow","hidden","white-space","nowrap"],[2,"margin-right","1rem",3,"referralCount"],["id","open-toast","slot","end",3,"click"],["trigger","open-toast","message","Link copied \u{1F517}",3,"duration"]],template:function(e,c){e&1&&(n(0,"ion-header")(1,"ion-toolbar",2)(2,"ion-buttons",3),s(3,"ion-back-button",4),t(),n(4,"ion-title"),r(5,"Contacts"),t()(),n(6,"ion-toolbar")(7,"ion-list")(8,"ion-item")(9,"ion-label"),r(10,"Your Contacts are your resources"),t(),n(11,"ion-label",5),r(12,"9"),t()(),n(13,"ion-item")(14,"ion-label"),r(15,"Your Contacts are your resources"),t(),n(16,"ion-label",5),r(17,"5"),t()(),n(18,"ion-item")(19,"ion-label"),r(20,"Already Recommended"),t(),n(21,"ion-label",5),r(22,"2"),t()()()(),n(23,"ion-toolbar")(24,"ion-segment",6)(25,"ion-segment-button",6)(26,"ion-label"),r(27,"All Friends"),t()(),n(28,"ion-segment-button",7)(29,"ion-label"),r(30,"Select"),t()()()(),n(31,"ion-toolbar")(32,"ion-searchbar",8),F("ngModelChange",function(g){return P(c.searchQuery,g)||(c.searchQuery=g),g}),t()()(),n(33,"ion-content")(34,"ion-list")(35,"ion-list-header")(36,"ion-label"),r(37,"Friends list"),t()(),w(38,Ce,12,4,"ion-item",9,ge,!1,fe,6,1,"ion-item"),t()()),e&2&&(i(),l("color",c.appStore.isLightTheme()?"primary":""),i(31),L("ngModel",c.searchQuery),i(6),M(c.filteredContacts()))},dependencies:[j,Z,K,$,Y,A,oe,J,z,ne,R,G,q,H,ee,V,U,B,u,W,X],styles:["ion-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%}"]})};export{ce as ContactsComponent};
