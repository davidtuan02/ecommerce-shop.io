"use strict";(self.webpackChunkfisrtAngular=self.webpackChunkfisrtAngular||[]).push([[592],{4023:(u,i,e)=>{e.d(i,{p:()=>a});var h=e(9862),n=e(5879);let a=(()=>{class r{constructor(t){this.http=t,this.url="https://first-nodejs-qsgl.onrender.com/orders",this.headers=new h.WM({"Content-Type":"application/json"}),this.isLogin=!1,this.currentUrl=""}getListOrder(){return this.http.get(this.url)}createOrder(t){return this.http.post(this.url,t,{headers:this.headers})}updateOrder(t,s){return this.http.put(`${this.url}/${t}`,s,{headers:this.headers})}deleteOrder(t){return this.http.delete(`${this.url}/${t}`)}static#t=this.\u0275fac=function(s){return new(s||r)(n.LFG(h.eN))};static#r=this.\u0275prov=n.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})()}}]);