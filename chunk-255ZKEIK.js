import{A as k,B as j,F as P,G as L,H as R,J as B,L as O,N as T,T as F,U,V as D,W as N,X as V,Y as W,Z as z,aa as Q,ba as A,d as g,e as h,ea as J,f as _,fa as H,g as x,ga as Y,h as a,ha as q,i as u,j as p,k as l,l as w,m as t,n,o as c,p as I,q as C,r as M,s as r,t as S,u as b,v as y,w as v,x as E}from"./chunk-ZLSMSIKY.js";function Z(o,i){o&1&&(t(0,"p"),r(1,"Loading..."),n())}function $(o,i){if(o&1&&(t(0,"div",0),E(1),t(2,"div",1)(3,"div",2),c(4,"ion-icon",3)(5,"ion-icon",3),n(),c(6,"ion-icon",3)(7,"ion-icon",3)(8,"ion-icon",3),n(),t(9,"div",4),c(10,"ion-icon",3)(11,"ion-icon",3),n()()),o&2){let e=M().referalStatus();a(4),l("ngClass",e.firstCircle===1?"green":"gray"),a(),l("ngClass",e.firstCircle===2?"green":"gray"),a(),l("ngClass",e.secondCircle===1?"green":"gray"),a(),l("ngClass",e.secondCircle===2?"green":"gray"),a(),l("ngClass",e.secondCircle===3?"green":"gray"),a(2),l("ngClass",e.thirdCircle===1?"green":"gray"),a(),l("ngClass",e.thirdCircle===2?"green":"gray")}}var f=class o{referalStatus=_(void 0);static \u0275fac=function(e){return new(e||o)};static \u0275cmp=u({type:o,selectors:[["app-referal-status"]],inputs:{referalStatus:[1,"referalStatus"]},decls:2,vars:1,consts:[[1,"circle","circle-third"],[1,"circle","circle-second"],[1,"circle","circle-first"],["name","person-circle",3,"ngClass"],[2,"display","flex","align-items","center","padding-right","3px"]],template:function(e,s){e&1&&p(0,Z,2,0,"p")(1,$,12,7,"div",0),e&2&&w(s.referalStatus()?1:0)},dependencies:[H,k],styles:["ion-icon[_ngcontent-%COMP%]{border-radius:10px}ion-icon.green[_ngcontent-%COMP%]{background:var(--ion-color-strong-green);color:var(--ion-color-light-green)}ion-icon.gray[_ngcontent-%COMP%]{background:var(--ion-color-light);color:var(--ion-color-normal-gray)}.circle[_ngcontent-%COMP%]{display:flex;padding:3px;border-radius:12px;align-items:center;margin-right:2px}.circle-third[_ngcontent-%COMP%]{background:var(--ion-color-strong-blue)}.circle-second[_ngcontent-%COMP%]{background:var(--ion-color-normal-blue)}.circle-first[_ngcontent-%COMP%]{background:var(--ion-color-light-blue)}"]})};function ee(o,i){if(o&1){let e=I();t(0,"ion-item",8),C("click",function(){let m=g(e).$implicit;return h(m.selected=!m.selected)}),t(1,"ion-avatar"),c(2,"img",9),n(),t(3,"ion-label",10)(4,"h3"),r(5),n(),t(6,"p"),r(7),n()(),c(8,"app-referal-status",11),t(9,"ion-checkbox",12),v("ngModelChange",function(m){let d=g(e).$implicit;return y(d.selected,m)||(d.selected=m),h(m)}),n()()}if(o&2){let e=i.$implicit;a(2),l("src",e.avatar,x),a(3),S(e.name),a(2),S(e.username),a(),l("referalStatus",e.referalStatus),a(),b("ngModel",e.selected)}}var K=class o{referalStatus={firstCircle:1,secondCircle:1,thirdCircle:1};users=[{name:"Kenneth Black",username:"paula85",email:"kmacdonald@hotmail.com",avatar:"https://randomuser.me/api/portraits/thumb/men/1.jpg",selected:!1,referalStatus:this.referalStatus},{name:"Valerie Davis",username:"william04",email:"vbrown@yahoo.com",avatar:"https://randomuser.me/api/portraits/thumb/men/2.jpg",selected:!1,referalStatus:this.referalStatus},{name:"Justin Ballard",username:"denise65",email:"jamesmunoz@gmail.com",avatar:"https://randomuser.me/api/portraits/thumb/men/3.jpg",selected:!1,referalStatus:this.referalStatus},{name:"Bernard Foster",username:"hudsonmaria",email:"vlittle@graham.biz",avatar:"https://randomuser.me/api/portraits/thumb/men/4.jpg",selected:!1,referalStatus:this.referalStatus},{name:"Charles Johnson",username:"drakemark",email:"leslie57@gmail.com",avatar:"https://randomuser.me/api/portraits/thumb/men/5.jpg",selected:!1,referalStatus:this.referalStatus},{name:"Maria Jones",username:"lindarodriguez",email:"josehaley@smith-conway.info",avatar:"https://randomuser.me/api/portraits/thumb/men/6.jpg",selected:!1,referalStatus:this.referalStatus},{name:"Dustin Burns",username:"jacobjones",email:"jeffreyruiz@hotmail.com",avatar:"https://randomuser.me/api/portraits/thumb/men/7.jpg",selected:!1,referalStatus:this.referalStatus},{name:"Joshua Robinson",username:"fieldsrebecca",email:"annfrench@yahoo.com",avatar:"https://randomuser.me/api/portraits/thumb/men/8.jpg",selected:!1,referalStatus:this.referalStatus},{name:"David Simpson",username:"danielduffy",email:"nicolemitchell@hotmail.com",avatar:"https://randomuser.me/api/portraits/thumb/men/9.jpg",selected:!1,referalStatus:this.referalStatus},{name:"Emily Leonard",username:"nevans",email:"tylercampbell@hotmail.com",avatar:"https://randomuser.me/api/portraits/thumb/men/10.jpg",selected:!1,referalStatus:this.referalStatus}];filteredUsers=[...this.users];searchQuery="";selectedUser=null;onUserSelect(i){i.detail.selected=i.detail.selected}filterUsers(){let i=this.searchQuery.toLowerCase();this.filteredUsers=this.users.filter(e=>e.name.toLowerCase().includes(i)||e.username.toLowerCase().includes(i)||e.email.toLowerCase().includes(i))}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=u({type:o,selectors:[["app-contacts"]],decls:39,vars:2,consts:[["color","primary"],["slot","start"],["defaultHref","home"],["slot","end"],["value","default"],["value","segment"],["placeholder","Search Users",3,"ngModelChange","ionInput","ngModel"],["detail","false","button","",3,"click",4,"ngFor","ngForOf"],["detail","false","button","",3,"click"],["alt","User Avatar",3,"src"],[2,"margin-left","1rem","text-overflow","elipsis","overflow","hidden","white-space","nowrap"],[2,"margin-right","1rem",3,"referalStatus"],["slot","end",3,"ngModelChange","ngModel"]],template:function(e,s){e&1&&(t(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-buttons",1),c(3,"ion-back-button",2),n(),t(4,"ion-title"),r(5,"Contacts"),n()(),t(6,"ion-toolbar")(7,"ion-list")(8,"ion-item")(9,"ion-label"),r(10,"Your Contacts are your resources"),n(),t(11,"ion-label",3),r(12,"9"),n()(),t(13,"ion-item")(14,"ion-label"),r(15,"Your Contacts are your resources"),n(),t(16,"ion-label",3),r(17,"5"),n()(),t(18,"ion-item")(19,"ion-label"),r(20,"Already Recommended"),n(),t(21,"ion-label",3),r(22,"2"),n()()()(),t(23,"ion-toolbar")(24,"ion-segment",4)(25,"ion-segment-button",4)(26,"ion-label"),r(27,"All Friends"),n()(),t(28,"ion-segment-button",5)(29,"ion-label"),r(30,"Select"),n()()()(),t(31,"ion-toolbar")(32,"ion-searchbar",6),v("ngModelChange",function(d){return y(s.searchQuery,d)||(s.searchQuery=d),d}),C("ionInput",function(){return s.filterUsers()}),n()()(),t(33,"ion-content")(34,"ion-list")(35,"ion-list-header")(36,"ion-label"),r(37,"Friends list"),n()(),p(38,ee,10,5,"ion-item",7),n()()),e&2&&(a(32),b("ngModel",s.searchQuery),a(6),l("ngForOf",s.filteredUsers))},dependencies:[U,A,Q,F,T,B,q,z,N,Y,V,W,D,O,j,J,R,P,L,f],styles:["ion-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%}.username-container[_ngcontent-%COMP%]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}"]})};export{K as a};
