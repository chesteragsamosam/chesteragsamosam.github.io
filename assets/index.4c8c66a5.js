import{bp as C,k as c,ar as D,ax as k,V as H,W as o,D as w,x as i,h as p,b2 as _,bl as x}from"./index.a1e78462.js";const N={class:"canvas-container"},S=["width","height"],b={setup(B){const[a,n]=[c(1920),c(1080)],f=c(1);c(1);let s,e,u=null,g=0;function r(d,l,t,m,y,I){const v=(d+l*a.value)*4;u.data[v+0]=t,u.data[v+1]=m,u.data[v+2]=y,u.data[v+3]=I}function A(){e.moveTo(0,n.value/2),e.lineTo(a.value,n.value/2),e.moveTo(a.value/2,0),e.lineTo(a.value/2,n.value),e.stroke()}function V(d,l){e.beginPath(),e.arc(d,l,100,0,2*Math.PI),e.stroke()}function h(){s=document.getElementById("canvas"),e=s.getContext("2d"),u=e.getImageData(0,0,a.value,n.value)}function T(){e.clearRect(0,0,a.value,n.value),r(1,1,255,0,0,255),r(2,2,255,0,0,255),r(0,0,255,0,0,255),r(1,1,255,0,0,255),A(),V(Math.sin(g*1.3),0),g++,window.requestAnimationFrame(T)}return D(()=>{h(),T(),e.moveTo(2,2),e.lineTo(200,100),e.stroke()}),(d,l)=>(k(),H("div",null,[o("pre",null,"{CANVAS_WIDTH: "+w(i(a))+", CANVAS_HEIGHT: "+w(i(n))+"}",1),o("div",N,[o("canvas",{id:"canvas",ref:(t,m)=>{m.canvas=t,p(s)?s.value=t:s=t},width:i(a),height:i(n)},null,8,S)]),_(o("input",{"onUpdate:modelValue":l[0]||(l[0]=t=>p(a)?a.value=t:null),type:"range",min:"0",max:"10000"},null,512),[[x,i(a)]]),_(o("input",{"onUpdate:modelValue":l[1]||(l[1]=t=>p(n)?n.value=t:null),type:"range",min:"0",max:"10000"},null,512),[[x,i(n)]]),_(o("input",{"onUpdate:modelValue":l[2]||(l[2]=t=>f.value=t),type:"range",min:"0",max:"100"},null,512),[[x,f.value]])]))}};var M=C(b,[["__scopeId","data-v-56552d20"]]);export{M as default};
