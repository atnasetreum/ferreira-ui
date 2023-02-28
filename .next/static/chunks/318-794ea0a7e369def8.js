"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[318],{8719:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(5893),s=t(7294),a=t(1903),i=t(5545),l=t(6470);function o(e){let{value:n,onChange:t}=e,[o,c]=(0,s.useState)([]);return(0,s.useEffect)(()=>{l.Wj.getDrivers().then(c)},[]),(0,r.jsx)(i.Z,{disablePortal:!0,id:"combo-box-demo-drivers",options:o,getOptionLabel:e=>e.name,renderInput:e=>(0,r.jsx)(a.Z,{...e,label:"Drivers",fullWidth:!0}),value:n,onChange:(e,n)=>t(n)})}},7494:function(e,n,t){t.d(n,{D:function(){return o}});var r=t(5893),s=t(7294),a=t(1903),i=t(5545),l=t(6470);let o=e=>{let{value:n,onChange:t}=e,[o,c]=(0,s.useState)([]);return(0,s.useEffect)(()=>{l.BC.getAll().then(c)},[]),(0,r.jsx)(i.Z,{disablePortal:!0,id:"combo-box-demo-placas",options:o,getOptionLabel:e=>"".concat(e.placa," - ").concat(e.logistica.name),renderInput:e=>(0,r.jsx)(a.Z,{...e,label:"Placas",fullWidth:!0}),value:n,onChange:(e,n)=>t(n)})}},5248:function(e,n,t){t.d(n,{wZ:function(){return i},E5:function(){return p},EV:function(){return h},yO:function(){return j},tF:function(){return x},DA:function(){return g.D},h1:function(){return d},Yk:function(){return Z.Y},AF:function(){return Z.A}});var r=t(5893),s=t(3795),a=t(5861);let i=e=>(0,r.jsxs)(a.Z,{variant:"body2",color:"text.secondary",align:"center",...e,children:["Copyright \xa9 ",(0,r.jsx)(s.Z,{color:"inherit",target:"_blank",href:"https://www.google.com/search?q=miguel+ferreira&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjOp8SbnbT8AhU6NEQIHYh7B1oQ_AUoAXoECAEQAw&biw=1920&bih=975&dpr=1#imgrc=6nDBPXCQvl3kgM",children:"Miguel Luis Inc."})," ",new Date().getFullYear(),"."]});var l=t(7294),o=t(1903),c=t(5545),u=t(6470);let d=e=>{let{label:n,value:t,onChange:s,type:a,idsDisabled:i}=e,[d,h]=(0,l.useState)([]);return(0,l.useEffect)(()=>{"noParent"===a?u.Fz.getAllNoParent().then(h):u.Fz.getAllBasicSeller().then(h)},[a]),(0,r.jsx)(c.Z,{options:d,getOptionLabel:e=>"".concat(e.uuid," - ").concat(e.nombre),getOptionDisabled:e=>!!(null==i?void 0:i.includes(e.id)),renderInput:e=>(0,r.jsx)(o.Z,{...e,label:null!=n?n:"Sellers",autoComplete:"off"}),value:t,onChange:(e,n)=>s(n)})},h=e=>{let{entidad:n,setEntidad:t}=e,[s,a]=l.useState([]);return l.useEffect(()=>{u.gZ.getAll().then(a)},[]),(0,r.jsx)(c.Z,{options:s,renderInput:e=>(0,r.jsx)(o.Z,{...e,label:"Estado",autoComplete:"off"}),value:n,onChange:(e,n)=>t(n)})},x=e=>{let{municipio:n,setMunicipio:t,entidad:s}=e,[a,i]=l.useState([]);return l.useEffect(()=>{s&&!a.length?u.Lz.getAll(s).then(i):!s&&a.length&&i([])},[s,a]),(0,r.jsx)(c.Z,{options:a,renderInput:e=>(0,r.jsx)(o.Z,{...e,label:"Municipio",autoComplete:"off"}),value:n,onChange:(e,n)=>t(n)})},p=e=>{let{ciudad:n,setCiudad:t,entidad:s,municipio:a}=e,[i,d]=l.useState([]);return l.useEffect(()=>{s&&a&&!i.length?u.H0.getAll(s,a).then(d):s||a||!i.length||d([])},[s,a,i]),(0,r.jsx)(c.Z,{options:i,renderInput:e=>(0,r.jsx)(o.Z,{...e,label:"Ciudad",autoComplete:"off"}),value:n,onChange:(e,n)=>t(n)})};t(7586),t(8091),t(6778),t(8626);var Z=t(2633);t(8719);let j=e=>{let{value:n,onChange:t}=e,[s,a]=(0,l.useState)([]);return(0,l.useEffect)(()=>{u.N4.getAll().then(a)},[]),(0,r.jsx)(c.Z,{disablePortal:!0,id:"combo-box-demo-logisticas",options:s,getOptionLabel:e=>e.name,renderInput:e=>(0,r.jsx)(o.Z,{...e,label:"Logisticas",fullWidth:!0}),value:n,onChange:(e,n)=>t(n)})};var g=t(7494)},7586:function(e,n,t){var r=t(5893);t(7294);var s=t(7906),a=t(295),i=t(2882),l=t(629),o=t(2633),c=t(6778),u=t(8091),d=t(2974);let h=e=>{let{rows:n,columns:t,renderListItem:h}=e,{page:x,rowsPerPage:p,emptyRows:Z,handleChangePage:j,handleChangeRowsPerPage:g}=(0,d.h0)(n);return(0,r.jsx)(i.Z,{component:l.Z,children:(0,r.jsxs)(s.Z,{sx:{minWidth:500},"aria-label":"custom pagination table",children:[(0,r.jsx)(u.Z,{columns:t}),(0,r.jsxs)(a.Z,{children:[(p>0?n.slice(x*p,x*p+p):n).map(e=>h(e)),Z>0&&(0,r.jsx)(o.A,{style:{height:53*Z},children:(0,r.jsx)(o.Y,{colSpan:t.length})})]}),(0,r.jsx)(c.Z,{rows:n,columns:t,rowsPerPage:p,page:x,handleChangePage:j,handleChangeRowsPerPage:g})]})})};n.Z=h},6778:function(e,n,t){var r=t(5893);t(7294);var s=t(4661),a=t(8509),i=t(519),l=t(8626);let o=e=>{let{rows:n,columns:t,rowsPerPage:o,page:c,handleChangePage:u,handleChangeRowsPerPage:d}=e;return(0,r.jsx)(s.Z,{children:(0,r.jsx)(a.Z,{children:(0,r.jsx)(i.Z,{rowsPerPageOptions:[5,10,25,{label:"All",value:-1}],colSpan:t.length,count:n.length,rowsPerPage:o,page:c,SelectProps:{inputProps:{"aria-label":"rows per page"},native:!0},onPageChange:u,onRowsPerPageChange:d,ActionsComponent:l.Z})})})};n.Z=o},8091:function(e,n,t){var r=t(5893),s=t(3184),a=t(2633);let i=e=>{let{columns:n}=e;return(0,r.jsx)(s.Z,{children:(0,r.jsx)(a.A,{children:n.map(e=>(0,r.jsx)(a.Y,{children:e},e))})})};n.Z=i},8626:function(e,n,t){var r=t(5893);t(7294);var s=t(2734),a=t(7357),i=t(3946),l=t(8066),o=t(6172),c=t(8317),u=t(1290);n.Z=function(e){let n=(0,s.Z)(),{count:t,page:d,rowsPerPage:h,onPageChange:x}=e,p=e=>{x(e,0)},Z=e=>{x(e,d-1)},j=e=>{x(e,d+1)},g=e=>{x(e,Math.max(0,Math.ceil(t/h)-1))};return(0,r.jsxs)(a.Z,{sx:{flexShrink:0,ml:2.5},children:[(0,r.jsx)(i.Z,{onClick:p,disabled:0===d,"aria-label":"first page",children:"rtl"===n.direction?(0,r.jsx)(u.Z,{}):(0,r.jsx)(l.Z,{})}),(0,r.jsx)(i.Z,{onClick:Z,disabled:0===d,"aria-label":"previous page",children:"rtl"===n.direction?(0,r.jsx)(c.Z,{}):(0,r.jsx)(o.Z,{})}),(0,r.jsx)(i.Z,{onClick:j,disabled:d>=Math.ceil(t/h)-1,"aria-label":"next page",children:"rtl"===n.direction?(0,r.jsx)(o.Z,{}):(0,r.jsx)(c.Z,{})}),(0,r.jsx)(i.Z,{onClick:g,disabled:d>=Math.ceil(t/h)-1,"aria-label":"last page",children:"rtl"===n.direction?(0,r.jsx)(l.Z,{}):(0,r.jsx)(u.Z,{})})]})}},2633:function(e,n,t){t.d(n,{A:function(){return l},Y:function(){return o}});var r=t(948),s=t(8102),a=t(9755),i=t(8509);let l=(0,r.ZP)(i.Z)(e=>{let{theme:n}=e;return{"&:nth-of-type(odd)":{backgroundColor:n.palette.action.hover},"&:last-child td, &:last-child th":{border:0}}}),o=(0,r.ZP)(s.Z)(e=>{let{theme:n}=e;return{["&.".concat(a.Z.head)]:{backgroundColor:n.palette.primary.main,color:n.palette.common.white},["&.".concat(a.Z.body)]:{fontSize:14}}})},2974:function(e,n,t){t.d(n,{mN:function(){return a},d$:function(){return r.d},h0:function(){return i}});var r=t(7889),s=t(7294);let a=function(e){let[n,t]=(0,s.useState)(e),[r,a]=(0,s.useState)("");return(0,s.useEffect)(()=>{let e="";for(let t in n){let r=n[t];r&&(e=""===e?"?".concat(t,"=").concat(r):e+"&".concat(t,"=").concat(r))}a(e)},[n]),{filters:n,setFilters:t,querystring:r}},i=e=>{let[n,t]=s.useState(0),[r,a]=s.useState(5),i=n>0?Math.max(0,(1+n)*r-e.length):0,l=(e,n)=>{t(n)},o=e=>{a(parseInt(e.target.value,10)),t(0)};return{page:n,rowsPerPage:r,emptyRows:i,handleChangePage:l,handleChangeRowsPerPage:o}}},7889:function(e,n,t){t.d(n,{d:function(){return s}});var r=t(5678);let s=()=>{let e=(e,n)=>{(0,r.Am)(e,{hideProgressBar:!1,autoClose:2e3,type:null!=n?n:"warning",position:"top-right"})};return{notify:e}}},3318:function(e,n,t){t.d(n,{Z:function(){return V}});var r=t(5893),s=t(7294),a=t(948),i=t(8239),l=t(1927),o=t(6720),c=t(7533),u=t(7357),d=t(2293),h=t(155),x=t(8462),p=t(5861),Z=t(7720),j=t(3946),g=t(4457),f=t(5582),m=t(326),b=t(9572),v=t(5817),C=t(8619),w=t(7594),P=t(9334),A=t(5709),S=t(3540),y=t(1163),k=t(2428),I=t(252),D=t(9308),E=t(8470);let M={ADMIN:"ADMIN",DRIVER:"DRIVER"};var N=t(4637),R=t(3816),F=t(6755);let L=()=>{let e=(0,y.useRouter)(),{user:n}=s.useContext(E.Vo),t=s.useMemo(()=>null==n?void 0:n.userType,[n]);return(0,r.jsxs)(s.Fragment,{children:[(0,r.jsxs)(C.Z,{onClick:()=>e.push("/dashboard"),selected:"/dashboard"===e.pathname,children:[(0,r.jsx)(w.Z,{children:(0,r.jsx)(A.Z,{})}),(0,r.jsx)(P.Z,{primary:"Inicio"})]}),t===M.ADMIN&&(0,r.jsxs)(C.Z,{onClick:()=>e.push("/sellers"),selected:"/sellers"===e.pathname,children:[(0,r.jsx)(w.Z,{children:(0,r.jsx)(I.Z,{})}),(0,r.jsx)(P.Z,{primary:"Sellers"})]}),t===M.ADMIN&&(0,r.jsxs)(C.Z,{onClick:()=>e.push("/rutas"),selected:"/rutas"===e.pathname,children:[(0,r.jsx)(w.Z,{children:(0,r.jsx)(D.Z,{})}),(0,r.jsx)(P.Z,{primary:"Rutas"})]}),t===M.ADMIN&&(0,r.jsxs)(C.Z,{onClick:()=>e.push("/camionetas"),selected:"/camionetas"===e.pathname,children:[(0,r.jsx)(w.Z,{children:(0,r.jsx)(N.Z,{})}),(0,r.jsx)(P.Z,{primary:"Camionetas"})]}),t===M.ADMIN&&(0,r.jsxs)(C.Z,{onClick:()=>e.push("/logisticas"),selected:"/logisticas"===e.pathname,children:[(0,r.jsx)(w.Z,{children:(0,r.jsx)(R.Z,{})}),(0,r.jsx)(P.Z,{primary:"Logisticas"})]}),t===M.ADMIN&&(0,r.jsxs)(C.Z,{onClick:()=>e.push("/reportes"),selected:"/reportes"===e.pathname,children:[(0,r.jsx)(w.Z,{children:(0,r.jsx)(F.Z,{})}),(0,r.jsx)(P.Z,{primary:"Reportes"})]}),t===M.ADMIN&&(0,r.jsxs)(C.Z,{onClick:()=>e.push("/users"),selected:"/users"===e.pathname,children:[(0,r.jsx)(w.Z,{children:(0,r.jsx)(k.Z,{})}),(0,r.jsx)(P.Z,{primary:"Users"})]})]})},O=()=>{(0,y.useRouter)();let{logoutUser:e}=s.useContext(E.Vo);return(0,r.jsx)(s.Fragment,{children:(0,r.jsxs)(C.Z,{onClick:()=>e(),children:[(0,r.jsx)(w.Z,{children:(0,r.jsx)(S.Z,{})}),(0,r.jsx)(P.Z,{primary:"Salir"})]})})};var z=t(5248);let W=(0,a.ZP)(d.Z,{shouldForwardProp:e=>"open"!==e})(e=>{let{theme:n,open:t}=e;return{zIndex:n.zIndex.drawer+1,transition:n.transitions.create(["width","margin"],{easing:n.transitions.easing.sharp,duration:n.transitions.duration.leavingScreen}),...t&&{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:n.transitions.create(["width","margin"],{easing:n.transitions.easing.sharp,duration:n.transitions.duration.enteringScreen})}}}),Y=(0,a.ZP)(c.ZP,{shouldForwardProp:e=>"open"!==e})(e=>{let{theme:n,open:t}=e;return{"& .MuiDrawer-paper":{position:"relative",whiteSpace:"nowrap",width:240,transition:n.transitions.create("width",{easing:n.transitions.easing.sharp,duration:n.transitions.duration.enteringScreen}),boxSizing:"border-box",...!t&&{overflowX:"hidden",transition:n.transitions.create("width",{easing:n.transitions.easing.sharp,duration:n.transitions.duration.leavingScreen}),width:n.spacing(7),[n.breakpoints.up("sm")]:{width:n.spacing(9)}}}}}),B=(0,i.Z)();function V(e){let{children:n,title:t}=e,[a,i]=s.useState(!0),{isLoggedIn:c,user:d}=s.useContext(E.Vo),C=()=>{i(!a)};return c?(0,r.jsx)(l.Z,{theme:B,children:(0,r.jsxs)(u.Z,{sx:{display:"flex"},children:[(0,r.jsx)(o.ZP,{}),(0,r.jsx)(W,{position:"absolute",open:a,children:(0,r.jsxs)(h.Z,{sx:{pr:"24px"},children:[(0,r.jsx)(j.Z,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:C,sx:{marginRight:"36px",...a&&{display:"none"}},children:(0,r.jsx)(m.Z,{})}),(0,r.jsx)(p.Z,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,sx:{flexGrow:1},children:d&&"".concat(d.name," - ").concat(d.userType)}),(0,r.jsx)(j.Z,{color:"inherit",children:(0,r.jsx)(g.Z,{badgeContent:4,color:"secondary",children:(0,r.jsx)(v.Z,{})})})]})}),(0,r.jsxs)(Y,{variant:"permanent",open:a,children:[(0,r.jsx)(h.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"flex-end",px:[1]},children:(0,r.jsx)(j.Z,{onClick:C,children:(0,r.jsx)(b.Z,{})})}),(0,r.jsx)(Z.Z,{}),(0,r.jsxs)(x.Z,{component:"nav",children:[(0,r.jsx)(L,{}),(0,r.jsx)(Z.Z,{sx:{my:1}}),(0,r.jsx)(O,{})]})]}),(0,r.jsxs)(u.Z,{component:"main",sx:{backgroundColor:e=>"light"===e.palette.mode?e.palette.grey[100]:e.palette.grey[900],flexGrow:1,height:"100vh",overflow:"auto"},children:[(0,r.jsx)(h.Z,{}),(0,r.jsxs)(f.Z,{maxWidth:!1,sx:{mt:4,mb:4},children:[(0,r.jsx)(p.Z,{variant:"h4",gutterBottom:!0,children:t}),n,(0,r.jsx)(z.wZ,{sx:{pt:4}})]})]})]})}):null}}}]);