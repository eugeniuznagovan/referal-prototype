import{B as P,C as R,D as B,F as T,H as F,J as O,P as U,Q as D,R as N,S as z,T as V,U as W,V as j,Y as Q,Z as A,a as g,aa as J,b as h,ba as H,c as _,ca as Y,d as I,da as q,e as a,f as u,g as p,h as i,i as x,j as t,k as n,l as m,m as M,n as C,o as E,p as r,q as S,r as y,s as v,t as b,u as w,w as k,x as L}from"./chunk-66MFMG2W.js";function Z(l,o){l&1&&(t(0,"p"),r(1,"Loading..."),n())}function $(l,o){if(l&1&&(t(0,"div",0),w(1),m(2,"ion-icon",1)(3,"ion-icon",1)(4,"ion-icon",1),t(5,"div",2),m(6,"ion-icon",1)(7,"ion-icon",1)(8,"ion-icon",1)(9,"ion-icon",1),t(10,"div",3),m(11,"ion-icon",1)(12,"ion-icon",1)(13,"ion-icon",1),n()()()),l&2){let e=E().referalStatus();a(2),i("ngClass",e.firstCircle===1?"green":"gray"),a(),i("ngClass",e.firstCircle===2?"green":"gray"),a(),i("ngClass",e.firstCircle===3?"green":"gray"),a(2),i("ngClass",e.secondCircle===1?"green":"gray"),a(),i("ngClass",e.secondCircle===2?"green":"gray"),a(),i("ngClass",e.secondCircle===3?"green":"gray"),a(),i("ngClass",e.secondCircle===4?"green":"gray"),a(2),i("ngClass",e.thirdCircle===1?"green":"gray"),a(),i("ngClass",e.thirdCircle===2?"green":"gray"),a(),i("ngClass",e.thirdCircle===3?"green":"gray")}}var f=class l{referalStatus=_(void 0);static \u0275fac=function(e){return new(e||l)};static \u0275cmp=u({type:l,selectors:[["app-referal-status"]],inputs:{referalStatus:[1,"referalStatus"]},decls:2,vars:1,consts:[[1,"circle","circle-first"],["size","small","name","person-circle",3,"ngClass"],[1,"circle","circle-second"],[1,"circle","circle-third"]],template:function(e,s){e&1&&p(0,Z,2,0,"p")(1,$,14,10,"div",0),e&2&&x(s.referalStatus()?1:0)},dependencies:[H,k],styles:["ion-icon[_ngcontent-%COMP%]{border-radius:10px}ion-icon.green[_ngcontent-%COMP%]{background:var(--ion-color-strong-green);color:var(--ion-color-light-green)}ion-icon.gray[_ngcontent-%COMP%]{background:var(--ion-color-light);color:var(--ion-color-normal-gray)}.circle[_ngcontent-%COMP%]{display:flex;padding:3px;border-radius:10px;align-items:center}.circle-third[_ngcontent-%COMP%]{background:var(--ion-color-strong-blue)}.circle-second[_ngcontent-%COMP%]{background:var(--ion-color-normal-blue)}.circle-first[_ngcontent-%COMP%]{background:var(--ion-color-light-blue)}"]})};function ee(l,o){if(l&1){let e=M();t(0,"ion-item",8),C("click",function(){let c=g(e).$implicit;return h(c.selected=!c.selected)}),t(1,"ion-avatar",1),m(2,"img",9),n(),t(3,"ion-label")(4,"h2"),r(5),n(),t(6,"p"),r(7),n()(),t(8,"ion-label"),m(9,"app-referal-status",10),n(),t(10,"ion-checkbox",11),b("ngModelChange",function(c){let d=g(e).$implicit;return v(d.selected,c)||(d.selected=c),h(c)}),n()()}if(l&2){let e=o.$implicit;a(2),i("src",e.avatar,I),a(3),S(e.name),a(2),S(e.username),a(2),i("referalStatus",e.referalStatus),a(),y("ngModel",e.selected)}}var K=class l{referalStatus={firstCircle:1,secondCircle:1,thirdCircle:1};users=[{name:"Kenneth Black",username:"paula85",email:"kmacdonald@hotmail.com",avatar:"https://via.placeholder.com/50",selected:!1,referalStatus:this.referalStatus},{name:"Valerie Davis",username:"william04",email:"vbrown@yahoo.com",avatar:"https://via.placeholder.com/50",selected:!1,referalStatus:this.referalStatus},{name:"Justin Ballard",username:"denise65",email:"jamesmunoz@gmail.com",avatar:"https://via.placeholder.com/50",selected:!1,referalStatus:this.referalStatus},{name:"Bernard Foster",username:"hudsonmaria",email:"vlittle@graham.biz",avatar:"https://via.placeholder.com/50",selected:!1,referalStatus:this.referalStatus},{name:"Charles Johnson",username:"drakemark",email:"leslie57@gmail.com",avatar:"https://via.placeholder.com/50",selected:!1,referalStatus:this.referalStatus},{name:"Maria Jones",username:"lindarodriguez",email:"josehaley@smith-conway.info",avatar:"https://via.placeholder.com/50",selected:!1,referalStatus:this.referalStatus},{name:"Dustin Burns",username:"jacobjones",email:"jeffreyruiz@hotmail.com",avatar:"https://via.placeholder.com/50",selected:!1,referalStatus:this.referalStatus},{name:"Joshua Robinson",username:"fieldsrebecca",email:"annfrench@yahoo.com",avatar:"https://via.placeholder.com/50",selected:!1,referalStatus:this.referalStatus},{name:"David Simpson",username:"danielduffy",email:"nicolemitchell@hotmail.com",avatar:"https://via.placeholder.com/50",selected:!1,referalStatus:this.referalStatus},{name:"Emily Leonard",username:"nevans",email:"tylercampbell@hotmail.com",avatar:"https://via.placeholder.com/50",selected:!1,referalStatus:this.referalStatus}];filteredUsers=[...this.users];searchQuery="";selectedUser=null;onUserSelect(o){o.detail.selected=o.detail.selected}filterUsers(){let o=this.searchQuery.toLowerCase();this.filteredUsers=this.users.filter(e=>e.name.toLowerCase().includes(o)||e.username.toLowerCase().includes(o)||e.email.toLowerCase().includes(o))}static \u0275fac=function(e){return new(e||l)};static \u0275cmp=u({type:l,selectors:[["app-contacts"]],decls:39,vars:2,consts:[["color","primary"],["slot","start"],["defaultHref","home"],["slot","end"],["value","default"],["value","segment"],["placeholder","Search Users",3,"ngModelChange","ionInput","ngModel"],["detail","false","button","",3,"click",4,"ngFor","ngForOf"],["detail","false","button","",3,"click"],["alt","User Avatar",3,"src"],[3,"referalStatus"],["slot","end",3,"ngModelChange","ngModel"]],template:function(e,s){e&1&&(t(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-buttons",1),m(3,"ion-back-button",2),n(),t(4,"ion-title"),r(5,"Contacts"),n()(),t(6,"ion-toolbar")(7,"ion-list")(8,"ion-item")(9,"ion-label"),r(10,"Your Contacts are your resources"),n(),t(11,"ion-label",3),r(12,"9"),n()(),t(13,"ion-item")(14,"ion-label"),r(15,"Your Contacts are your resources"),n(),t(16,"ion-label",3),r(17,"5"),n()(),t(18,"ion-item")(19,"ion-label"),r(20,"Already Recommended"),n(),t(21,"ion-label",3),r(22,"2"),n()()()(),t(23,"ion-toolbar")(24,"ion-segment",4)(25,"ion-segment-button",4)(26,"ion-label"),r(27,"All Friends"),n()(),t(28,"ion-segment-button",5)(29,"ion-label"),r(30,"Select"),n()()()(),t(31,"ion-toolbar")(32,"ion-searchbar",6),b("ngModelChange",function(d){return v(s.searchQuery,d)||(s.searchQuery=d),d}),C("ionInput",function(){return s.filterUsers()}),n()()(),t(33,"ion-content")(34,"ion-list")(35,"ion-list-header")(36,"ion-label"),r(37,"Friends list"),n()(),p(38,ee,11,5,"ion-item",7),n()()),e&2&&(a(32),y("ngModel",s.searchQuery),a(6),i("ngForOf",s.filteredUsers))},dependencies:[D,A,Q,U,O,T,q,j,z,Y,V,W,N,F,L,J,B,P,R,f],styles:["ion-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%}"]})};export{K as a};
