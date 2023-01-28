"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[318],{8719:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(5893),i=t(7294),s=t(1903),a=t(5545),l=t(8274);function o(e){let{value:n,onChange:t}=e,[o,c]=(0,i.useState)([]);return(0,i.useEffect)(()=>{l.Wj.getDrivers().then(c)},[]),(0,r.jsx)(a.Z,{disablePortal:!0,id:"combo-box-demo-drivers",options:o,getOptionLabel:e=>e.name,renderInput:e=>(0,r.jsx)(s.Z,{...e,label:"Drivers",fullWidth:!0}),value:n,onChange:(e,n)=>t(n)})}},9147:function(e,n,t){t.d(n,{wZ:function(){return a},E5:function(){return p},EV:function(){return h},tF:function(){return x},h1:function(){return u},Yk:function(){return b},AF:function(){return m},DY:function(){return E}});var r=t(5893),i=t(3795),s=t(5861);let a=e=>(0,r.jsxs)(s.Z,{variant:"body2",color:"text.secondary",align:"center",...e,children:["Copyright \xa9 ",(0,r.jsx)(i.Z,{color:"inherit",target:"_blank",href:"https://www.google.com/search?q=miguel+ferreira&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjOp8SbnbT8AhU6NEQIHYh7B1oQ_AUoAXoECAEQAw&biw=1920&bih=975&dpr=1#imgrc=6nDBPXCQvl3kgM",children:"Miguel Luis Inc."})," ",new Date().getFullYear(),"."]});var l=t(7294),o=t(1903),c=t(5545),d=t(8274);let u=e=>{let{label:n,value:t,onChange:i,type:s,idsDisabled:a}=e,[u,h]=(0,l.useState)([]);return(0,l.useEffect)(()=>{"noParent"===s?d.Fz.getAllNoParent().then(h):d.Fz.getAllBasicSeller().then(h)},[s]),(0,r.jsx)(c.Z,{options:u,getOptionLabel:e=>"".concat(e.uuid," - ").concat(e.nombre),getOptionDisabled:e=>!!(null==a?void 0:a.includes(e.id)),renderInput:e=>(0,r.jsx)(o.Z,{...e,label:null!=n?n:"Sellers",autoComplete:"off"}),value:t,onChange:(e,n)=>i(n)})},h=e=>{let{entidad:n,setEntidad:t}=e,[i,s]=l.useState([]);return l.useEffect(()=>{d.gZ.getAll().then(s)},[]),(0,r.jsx)(c.Z,{options:i,renderInput:e=>(0,r.jsx)(o.Z,{...e,label:"Estado",autoComplete:"off"}),value:n,onChange:(e,n)=>t(n)})},x=e=>{let{municipio:n,setMunicipio:t,entidad:i}=e,[s,a]=l.useState([]);return l.useEffect(()=>{i&&!s.length?d.Lz.getAll(i).then(a):!i&&s.length&&a([])},[i,s]),(0,r.jsx)(c.Z,{options:s,renderInput:e=>(0,r.jsx)(o.Z,{...e,label:"Municipio",autoComplete:"off"}),value:n,onChange:(e,n)=>t(n)})},p=e=>{let{ciudad:n,setCiudad:t,entidad:i,municipio:s}=e,[a,u]=l.useState([]);return l.useEffect(()=>{i&&s&&!a.length?d.H0.getAll(i,s).then(u):i||s||!a.length||u([])},[i,s,a]),(0,r.jsx)(c.Z,{options:a,renderInput:e=>(0,r.jsx)(o.Z,{...e,label:"Ciudad",autoComplete:"off"}),value:n,onChange:(e,n)=>t(n)})};var Z=t(948),j=t(8102),g=t(9755),f=t(3816);let m=(0,Z.ZP)(f.Z)(e=>{let{theme:n}=e;return{"&:nth-of-type(odd)":{backgroundColor:n.palette.action.hover},"&:last-child td, &:last-child th":{border:0}}}),b=(0,Z.ZP)(j.Z)(e=>{let{theme:n}=e;return{["&.".concat(g.Z.head)]:{backgroundColor:n.palette.primary.main,color:n.palette.common.white},["&.".concat(g.Z.body)]:{fontSize:14}}});t(8719);var C=t(2734),v=t(7357),w=t(3946),k=t(8066),y=t(6172),S=t(8317),I=t(1290);let E=e=>{let n=(0,C.Z)(),{count:t,page:i,rowsPerPage:s,onPageChange:a}=e,l=e=>{a(e,0)},o=e=>{a(e,i-1)},c=e=>{a(e,i+1)},d=e=>{a(e,Math.max(0,Math.ceil(t/s)-1))};return(0,r.jsxs)(v.Z,{sx:{flexShrink:0,ml:2.5},children:[(0,r.jsx)(w.Z,{onClick:l,disabled:0===i,"aria-label":"first page",children:"rtl"===n.direction?(0,r.jsx)(I.Z,{}):(0,r.jsx)(k.Z,{})}),(0,r.jsx)(w.Z,{onClick:o,disabled:0===i,"aria-label":"previous page",children:"rtl"===n.direction?(0,r.jsx)(S.Z,{}):(0,r.jsx)(y.Z,{})}),(0,r.jsx)(w.Z,{onClick:c,disabled:i>=Math.ceil(t/s)-1,"aria-label":"next page",children:"rtl"===n.direction?(0,r.jsx)(y.Z,{}):(0,r.jsx)(S.Z,{})}),(0,r.jsx)(w.Z,{onClick:d,disabled:i>=Math.ceil(t/s)-1,"aria-label":"last page",children:"rtl"===n.direction?(0,r.jsx)(k.Z,{}):(0,r.jsx)(I.Z,{})})]})}},3318:function(e,n,t){t.d(n,{Z:function(){return L}});var r=t(5893),i=t(7294),s=t(948),a=t(8239),l=t(1927),o=t(6720),c=t(7533),d=t(7357),u=t(2293),h=t(155),x=t(8462),p=t(5861),Z=t(7720),j=t(3946),g=t(1594),f=t(5582),m=t(326),b=t(9572),C=t(5817),v=t(8619),w=t(7594),k=t(9334),y=t(5709),S=t(3540),I=t(1163),E=t(2428),A=t(252),D=t(9308),M=t(8470);let P={ADMIN:"ADMIN",DRIVER:"DRIVER"},F=()=>{let e=(0,I.useRouter)(),{user:n}=i.useContext(M.Vo);return(0,r.jsxs)(i.Fragment,{children:[(0,r.jsxs)(v.Z,{onClick:()=>e.push("/dashboard"),selected:"/dashboard"===e.pathname,children:[(0,r.jsx)(w.Z,{children:(0,r.jsx)(y.Z,{})}),(0,r.jsx)(k.Z,{primary:"Inicio"})]}),(null==n?void 0:n.userType)===P.ADMIN&&(0,r.jsxs)(v.Z,{onClick:()=>e.push("/sellers"),selected:"/sellers"===e.pathname,children:[(0,r.jsx)(w.Z,{children:(0,r.jsx)(A.Z,{})}),(0,r.jsx)(k.Z,{primary:"Sellers"})]}),(0,r.jsxs)(v.Z,{onClick:()=>e.push("/rutas"),selected:"/rutas"===e.pathname,children:[(0,r.jsx)(w.Z,{children:(0,r.jsx)(D.Z,{})}),(0,r.jsx)(k.Z,{primary:"Rutas"})]})]})},N=()=>{let e=(0,I.useRouter)(),{logoutUser:n,user:t}=i.useContext(M.Vo);return(0,r.jsxs)(i.Fragment,{children:[(null==t?void 0:t.userType)===P.ADMIN&&(0,r.jsxs)(v.Z,{onClick:()=>e.push("/users"),selected:"/users"===e.pathname,children:[(0,r.jsx)(w.Z,{children:(0,r.jsx)(E.Z,{})}),(0,r.jsx)(k.Z,{primary:"Users"})]}),(0,r.jsxs)(v.Z,{onClick:()=>n(),children:[(0,r.jsx)(w.Z,{children:(0,r.jsx)(S.Z,{})}),(0,r.jsx)(k.Z,{primary:"Salir"})]})]})};var R=t(9147);let z=(0,s.ZP)(u.Z,{shouldForwardProp:e=>"open"!==e})(e=>{let{theme:n,open:t}=e;return{zIndex:n.zIndex.drawer+1,transition:n.transitions.create(["width","margin"],{easing:n.transitions.easing.sharp,duration:n.transitions.duration.leavingScreen}),...t&&{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:n.transitions.create(["width","margin"],{easing:n.transitions.easing.sharp,duration:n.transitions.duration.enteringScreen})}}}),V=(0,s.ZP)(c.ZP,{shouldForwardProp:e=>"open"!==e})(e=>{let{theme:n,open:t}=e;return{"& .MuiDrawer-paper":{position:"relative",whiteSpace:"nowrap",width:240,transition:n.transitions.create("width",{easing:n.transitions.easing.sharp,duration:n.transitions.duration.enteringScreen}),boxSizing:"border-box",...!t&&{overflowX:"hidden",transition:n.transitions.create("width",{easing:n.transitions.easing.sharp,duration:n.transitions.duration.leavingScreen}),width:n.spacing(7),[n.breakpoints.up("sm")]:{width:n.spacing(9)}}}}}),_=(0,a.Z)();function L(e){let{children:n,title:t}=e,[s,a]=i.useState(!0),{isLoggedIn:c,user:u}=i.useContext(M.Vo),v=()=>{a(!s)};return c?(0,r.jsx)(l.Z,{theme:_,children:(0,r.jsxs)(d.Z,{sx:{display:"flex"},children:[(0,r.jsx)(o.ZP,{}),(0,r.jsx)(z,{position:"absolute",open:s,children:(0,r.jsxs)(h.Z,{sx:{pr:"24px"},children:[(0,r.jsx)(j.Z,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:v,sx:{marginRight:"36px",...s&&{display:"none"}},children:(0,r.jsx)(m.Z,{})}),(0,r.jsx)(p.Z,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,sx:{flexGrow:1},children:u&&"".concat(u.name," - ").concat(u.userType)}),(0,r.jsx)(j.Z,{color:"inherit",children:(0,r.jsx)(g.Z,{badgeContent:4,color:"secondary",children:(0,r.jsx)(C.Z,{})})})]})}),(0,r.jsxs)(V,{variant:"permanent",open:s,children:[(0,r.jsx)(h.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"flex-end",px:[1]},children:(0,r.jsx)(j.Z,{onClick:v,children:(0,r.jsx)(b.Z,{})})}),(0,r.jsx)(Z.Z,{}),(0,r.jsxs)(x.Z,{component:"nav",children:[(0,r.jsx)(F,{}),(0,r.jsx)(Z.Z,{sx:{my:1}}),(0,r.jsx)(N,{})]})]}),(0,r.jsxs)(d.Z,{component:"main",sx:{backgroundColor:e=>"light"===e.palette.mode?e.palette.grey[100]:e.palette.grey[900],flexGrow:1,height:"100vh",overflow:"auto"},children:[(0,r.jsx)(h.Z,{}),(0,r.jsxs)(f.Z,{maxWidth:!1,sx:{mt:4,mb:4},children:[(0,r.jsx)(p.Z,{variant:"h4",gutterBottom:!0,children:t}),n,(0,r.jsx)(R.wZ,{sx:{pt:4}})]})]})]})}):null}}}]);