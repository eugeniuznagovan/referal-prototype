import{A as C,B as b,C as S,D as g,G as v,H as x,J as w,a as I,b as A,ba as O,c as a,ca as y,fa as E,ga as T,h as d,i as h,ia as M,j as m,n as i,o as t,p as r,t as n,v as u}from"./chunk-C5RKNFPO.js";import"./chunk-SRUD5PB2.js";import"./chunk-YWO3IHIW.js";import"./chunk-SD5XCXOE.js";import"./chunk-JV7ON635.js";import"./chunk-F7XBNY6P.js";import"./chunk-EXRUNRTN.js";import"./chunk-C4TORFO5.js";import"./chunk-UHUGRIBZ.js";import"./chunk-4WFVMWDK.js";import"./chunk-4I6HJA6T.js";import"./chunk-NMYJD6OP.js";import"./chunk-B43CU5JX.js";import"./chunk-TQEIIVVC.js";import"./chunk-LF5XB4YN.js";import"./chunk-NWJ5J3BN.js";var s=class e{static \u0275fac=function(o){return new(o||e)};static \u0275cmp=m({type:e,selectors:[["app-shell"]],decls:17,vars:0,consts:[["slot","bottom","color","primary"],["tab","home"],["name","home-outline"],["tab","resources"],["name","documents-outline"],["tab","wish"],["name","heart-outline"],["tab","other"],["name","create-outline"],["tab","earn"],["name","cash-outline"]],template:function(o,f){o&1&&(i(0,"ion-tabs")(1,"ion-tab-bar",0)(2,"ion-tab-button",1),r(3,"ion-icon",2),n(4," Home "),t(),i(5,"ion-tab-button",3),r(6,"ion-icon",4),n(7," Resources "),t(),i(8,"ion-tab-button",5),r(9,"ion-icon",6),n(10," Wish "),t(),i(11,"ion-tab-button",7),r(12,"ion-icon",8),n(13," Others "),t(),i(14,"ion-tab-button",9),r(15,"ion-icon",10),n(16," Earn "),t()()())},dependencies:[O,E,M,y],encapsulation:2})};var R=[{path:"",component:s,children:[{path:"",pathMatch:"full",redirectTo:"home"},{path:"home",loadComponent:()=>import("./chunk-SXLY7WHW.js").then(e=>e.HomeComponent)},{path:"home/contacts",loadComponent:()=>import("./chunk-FEIL3OEH.js").then(e=>e.ContactsComponent)},{path:"resources",loadComponent:()=>import("./chunk-FZAX52X3.js").then(e=>e.ResourcesComponent)},{path:"wish",loadComponent:()=>import("./chunk-OLTSKTQK.js").then(e=>e.WishComponent)},{path:"other",loadComponent:()=>import("./chunk-G32WXRVB.js").then(e=>e.OtherComponent)},{path:"earn",loadComponent:()=>import("./chunk-N6WK4WYH.js").then(e=>e.EarnComponent)}]}];var W=new A("WindowToken",{providedIn:"root",factory:()=>window.Telegram.WebApp}),P={providers:[S(),w(R),T({mode:"ios"})]};var c=class e{twa=a(W);constructor(){this.twa.ready()}getSafeAreaInset(){return this.twa.safeAreaInset}getContentSafeaAreaInset(){return this.twa.contentSafeAreaInset}requestFullScreen(){this.twa.requestFullscreen()}static \u0275fac=function(o){return new(o||e)};static \u0275prov=I({token:e,factory:e.\u0275fac,providedIn:"root"})};var l=class e{twaService=a(c);document=a(g);contentSafeAreaInset=h(this.twaService.getContentSafeaAreaInset());safeAreaInset=h(this.twaService.getSafeAreaInset());ngOnInit(){this.twaService.requestFullScreen()}static \u0275fac=function(o){return new(o||e)};static \u0275cmp=m({type:e,selectors:[["app-root"]],decls:12,vars:6,consts:[[1,"container"]],template:function(o,f){o&1&&(i(0,"div",0),r(1,"header"),i(2,"main")(3,"p"),n(4,"Safe Area:"),t(),n(5),C(6,"json"),i(7,"p"),n(8,"Content safe area:"),t(),n(9),C(10,"json"),t(),r(11,"footer"),t()),o&2&&(d(5),u(" ",b(6,2,f.safeAreaInset())," "),d(4),u(" ",b(10,4,f.contentSafeAreaInset())," "))},dependencies:[v],styles:[".container[_ngcontent-%COMP%]{display:flex;height:100%;flex-direction:column}main[_ngcontent-%COMP%]{flex-grow:1}header[_ngcontent-%COMP%], footer[_ngcontent-%COMP%]{background:var(--ion-color-strong-blue);height:50px;color:#fff}"]})};x(l,P).catch(e=>console.error(e));
