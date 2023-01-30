(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{3845:function(e,t,r){"use strict";var o=r(4836);t.Z=void 0;var a=o(r(4938)),n=r(5893),i=(0,a.default)((0,n.jsx)("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"}),"LockOutlined");t.Z=i},1057:function(e,t,r){"use strict";r.d(t,{Z:function(){return k}});var o=r(3366),a=r(7462),n=r(7294),i=r(6010),l=r(7925),s=r(4780),c=r(1796),d=r(948),u=r(1657),p=r(9990),h=r(8216),v=r(1588),m=r(4867);function g(e){return(0,m.Z)("MuiButton",e)}let x=(0,v.Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]);var f=r(8363),b=r(5893);let Z=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],S=e=>{let{color:t,disableElevation:r,fullWidth:o,size:n,variant:i,classes:l}=e,c={root:["root",i,`${i}${(0,h.Z)(t)}`,`size${(0,h.Z)(n)}`,`${i}Size${(0,h.Z)(n)}`,"inherit"===t&&"colorInherit",r&&"disableElevation",o&&"fullWidth"],label:["label"],startIcon:["startIcon",`iconSize${(0,h.Z)(n)}`],endIcon:["endIcon",`iconSize${(0,h.Z)(n)}`]},d=(0,s.Z)(c,g,l);return(0,a.Z)({},l,d)},y=e=>(0,a.Z)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}}),z=(0,d.ZP)(p.Z,{shouldForwardProp:e=>(0,d.FO)(e)||"classes"===e,name:"MuiButton",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,t[r.variant],t[`${r.variant}${(0,h.Z)(r.color)}`],t[`size${(0,h.Z)(r.size)}`],t[`${r.variant}Size${(0,h.Z)(r.size)}`],"inherit"===r.color&&t.colorInherit,r.disableElevation&&t.disableElevation,r.fullWidth&&t.fullWidth]}})(({theme:e,ownerState:t})=>{var r,o;return(0,a.Z)({},e.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(e.vars||e).shape.borderRadius,transition:e.transitions.create(["background-color","box-shadow","border-color","color"],{duration:e.transitions.duration.short}),"&:hover":(0,a.Z)({textDecoration:"none",backgroundColor:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,c.Fq)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===t.variant&&"inherit"!==t.color&&{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,c.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===t.variant&&"inherit"!==t.color&&{border:`1px solid ${(e.vars||e).palette[t.color].main}`,backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,c.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===t.variant&&{backgroundColor:(e.vars||e).palette.grey.A100,boxShadow:(e.vars||e).shadows[4],"@media (hover: none)":{boxShadow:(e.vars||e).shadows[2],backgroundColor:(e.vars||e).palette.grey[300]}},"contained"===t.variant&&"inherit"!==t.color&&{backgroundColor:(e.vars||e).palette[t.color].dark,"@media (hover: none)":{backgroundColor:(e.vars||e).palette[t.color].main}}),"&:active":(0,a.Z)({},"contained"===t.variant&&{boxShadow:(e.vars||e).shadows[8]}),[`&.${x.focusVisible}`]:(0,a.Z)({},"contained"===t.variant&&{boxShadow:(e.vars||e).shadows[6]}),[`&.${x.disabled}`]:(0,a.Z)({color:(e.vars||e).palette.action.disabled},"outlined"===t.variant&&{border:`1px solid ${(e.vars||e).palette.action.disabledBackground}`},"contained"===t.variant&&{color:(e.vars||e).palette.action.disabled,boxShadow:(e.vars||e).shadows[0],backgroundColor:(e.vars||e).palette.action.disabledBackground})},"text"===t.variant&&{padding:"6px 8px"},"text"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].main},"outlined"===t.variant&&{padding:"5px 15px",border:"1px solid currentColor"},"outlined"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].main,border:e.vars?`1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)`:`1px solid ${(0,c.Fq)(e.palette[t.color].main,.5)}`},"contained"===t.variant&&{color:e.vars?e.vars.palette.text.primary:null==(r=(o=e.palette).getContrastText)?void 0:r.call(o,e.palette.grey[300]),backgroundColor:(e.vars||e).palette.grey[300],boxShadow:(e.vars||e).shadows[2]},"contained"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].contrastText,backgroundColor:(e.vars||e).palette[t.color].main},"inherit"===t.color&&{color:"inherit",borderColor:"currentColor"},"small"===t.size&&"text"===t.variant&&{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"text"===t.variant&&{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},"small"===t.size&&"outlined"===t.variant&&{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"outlined"===t.variant&&{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},"small"===t.size&&"contained"===t.variant&&{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"contained"===t.variant&&{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},t.fullWidth&&{width:"100%"})},({ownerState:e})=>e.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${x.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${x.disabled}`]:{boxShadow:"none"}}),C=(0,d.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.startIcon,t[`iconSize${(0,h.Z)(r.size)}`]]}})(({ownerState:e})=>(0,a.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===e.size&&{marginLeft:-2},y(e))),j=(0,d.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.endIcon,t[`iconSize${(0,h.Z)(r.size)}`]]}})(({ownerState:e})=>(0,a.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===e.size&&{marginRight:-2},y(e))),w=n.forwardRef(function(e,t){let r=n.useContext(f.Z),s=(0,l.Z)(r,e),c=(0,u.Z)({props:s,name:"MuiButton"}),{children:d,color:p="primary",component:h="button",className:v,disabled:m=!1,disableElevation:g=!1,disableFocusRipple:x=!1,endIcon:y,focusVisibleClassName:w,fullWidth:k=!1,size:I="medium",startIcon:E,type:R,variant:$="text"}=c,M=(0,o.Z)(c,Z),P=(0,a.Z)({},c,{color:p,component:h,disabled:m,disableElevation:g,disableFocusRipple:x,fullWidth:k,size:I,type:R,variant:$}),A=S(P),N=E&&(0,b.jsx)(C,{className:A.startIcon,ownerState:P,children:E}),F=y&&(0,b.jsx)(j,{className:A.endIcon,ownerState:P,children:y});return(0,b.jsxs)(z,(0,a.Z)({ownerState:P,className:(0,i.Z)(r.className,A.root,v),component:h,disabled:m,focusRipple:!x,focusVisibleClassName:(0,i.Z)(A.focusVisible,w),ref:t,type:R},M,{classes:A,children:[N,d,F]}))});var k=w},8363:function(e,t,r){"use strict";var o=r(7294);let a=o.createContext({});t.Z=a},8312:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(4852)}])},8719:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var o=r(5893),a=r(7294),n=r(1903),i=r(5545),l=r(8274);function s(e){let{value:t,onChange:r}=e,[s,c]=(0,a.useState)([]);return(0,a.useEffect)(()=>{l.Wj.getDrivers().then(c)},[]),(0,o.jsx)(i.Z,{disablePortal:!0,id:"combo-box-demo-drivers",options:s,getOptionLabel:e=>e.name,renderInput:e=>(0,o.jsx)(n.Z,{...e,label:"Drivers",fullWidth:!0}),value:t,onChange:(e,t)=>r(t)})}},9147:function(e,t,r){"use strict";r.d(t,{wZ:function(){return i},E5:function(){return v},EV:function(){return p},tF:function(){return h},h1:function(){return u},Yk:function(){return Z},AF:function(){return b},DY:function(){return I}});var o=r(5893),a=r(3795),n=r(5861);let i=e=>(0,o.jsxs)(n.Z,{variant:"body2",color:"text.secondary",align:"center",...e,children:["Copyright \xa9 ",(0,o.jsx)(a.Z,{color:"inherit",target:"_blank",href:"https://www.google.com/search?q=miguel+ferreira&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjOp8SbnbT8AhU6NEQIHYh7B1oQ_AUoAXoECAEQAw&biw=1920&bih=975&dpr=1#imgrc=6nDBPXCQvl3kgM",children:"Miguel Luis Inc."})," ",new Date().getFullYear(),"."]});var l=r(7294),s=r(1903),c=r(5545),d=r(8274);let u=e=>{let{label:t,value:r,onChange:a,type:n,idsDisabled:i}=e,[u,p]=(0,l.useState)([]);return(0,l.useEffect)(()=>{"noParent"===n?d.Fz.getAllNoParent().then(p):d.Fz.getAllBasicSeller().then(p)},[n]),(0,o.jsx)(c.Z,{options:u,getOptionLabel:e=>"".concat(e.uuid," - ").concat(e.nombre),getOptionDisabled:e=>!!(null==i?void 0:i.includes(e.id)),renderInput:e=>(0,o.jsx)(s.Z,{...e,label:null!=t?t:"Sellers",autoComplete:"off"}),value:r,onChange:(e,t)=>a(t)})},p=e=>{let{entidad:t,setEntidad:r}=e,[a,n]=l.useState([]);return l.useEffect(()=>{d.gZ.getAll().then(n)},[]),(0,o.jsx)(c.Z,{options:a,renderInput:e=>(0,o.jsx)(s.Z,{...e,label:"Estado",autoComplete:"off"}),value:t,onChange:(e,t)=>r(t)})},h=e=>{let{municipio:t,setMunicipio:r,entidad:a}=e,[n,i]=l.useState([]);return l.useEffect(()=>{a&&!n.length?d.Lz.getAll(a).then(i):!a&&n.length&&i([])},[a,n]),(0,o.jsx)(c.Z,{options:n,renderInput:e=>(0,o.jsx)(s.Z,{...e,label:"Municipio",autoComplete:"off"}),value:t,onChange:(e,t)=>r(t)})},v=e=>{let{ciudad:t,setCiudad:r,entidad:a,municipio:n}=e,[i,u]=l.useState([]);return l.useEffect(()=>{a&&n&&!i.length?d.H0.getAll(a,n).then(u):a||n||!i.length||u([])},[a,n,i]),(0,o.jsx)(c.Z,{options:i,renderInput:e=>(0,o.jsx)(s.Z,{...e,label:"Ciudad",autoComplete:"off"}),value:t,onChange:(e,t)=>r(t)})};var m=r(948),g=r(8102),x=r(9755),f=r(3816);let b=(0,m.ZP)(f.Z)(e=>{let{theme:t}=e;return{"&:nth-of-type(odd)":{backgroundColor:t.palette.action.hover},"&:last-child td, &:last-child th":{border:0}}}),Z=(0,m.ZP)(g.Z)(e=>{let{theme:t}=e;return{["&.".concat(x.Z.head)]:{backgroundColor:t.palette.primary.main,color:t.palette.common.white},["&.".concat(x.Z.body)]:{fontSize:14}}});r(8719);var S=r(2734),y=r(7357),z=r(3946),C=r(8066),j=r(6172),w=r(8317),k=r(1290);let I=e=>{let t=(0,S.Z)(),{count:r,page:a,rowsPerPage:n,onPageChange:i}=e,l=e=>{i(e,0)},s=e=>{i(e,a-1)},c=e=>{i(e,a+1)},d=e=>{i(e,Math.max(0,Math.ceil(r/n)-1))};return(0,o.jsxs)(y.Z,{sx:{flexShrink:0,ml:2.5},children:[(0,o.jsx)(z.Z,{onClick:l,disabled:0===a,"aria-label":"first page",children:"rtl"===t.direction?(0,o.jsx)(k.Z,{}):(0,o.jsx)(C.Z,{})}),(0,o.jsx)(z.Z,{onClick:s,disabled:0===a,"aria-label":"previous page",children:"rtl"===t.direction?(0,o.jsx)(w.Z,{}):(0,o.jsx)(j.Z,{})}),(0,o.jsx)(z.Z,{onClick:c,disabled:a>=Math.ceil(r/n)-1,"aria-label":"next page",children:"rtl"===t.direction?(0,o.jsx)(j.Z,{}):(0,o.jsx)(w.Z,{})}),(0,o.jsx)(z.Z,{onClick:d,disabled:a>=Math.ceil(r/n)-1,"aria-label":"last page",children:"rtl"===t.direction?(0,o.jsx)(C.Z,{}):(0,o.jsx)(k.Z,{})})]})}},4112:function(e,t,r){"use strict";r.d(t,{m:function(){return n},d:function(){return o.d}});var o=r(7889),a=r(7294);let n=function(e){let[t,r]=(0,a.useState)(e),[o,n]=(0,a.useState)("");return(0,a.useEffect)(()=>{let e="";for(let r in t){let o=t[r];o&&(e=""===e?"?".concat(r,"=").concat(o):e+"&".concat(r,"=").concat(o))}console.log({params:e}),n(e)},[t]),{filters:t,setFilters:r,querystring:o}}},7889:function(e,t,r){"use strict";r.d(t,{d:function(){return a}});var o=r(5678);let a=()=>{let e=(e,t)=>{(0,o.Am)(e,{hideProgressBar:!1,autoClose:2e3,type:null!=t?t:"warning",position:"top-right"})};return{notify:e}}},4852:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return _}});var o=r(5893),a=r(7294),n=r(3366),i=r(7462),l=r(6010),s=r(4780),c=r(948),d=r(1657),u=(0,r(8169).Z)((0,o.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person"),p=r(1588),h=r(4867);function v(e){return(0,h.Z)("MuiAvatar",e)}(0,p.Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);let m=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],g=e=>{let{classes:t,variant:r,colorDefault:o}=e;return(0,s.Z)({root:["root",r,o&&"colorDefault"],img:["img"],fallback:["fallback"]},v,t)},x=(0,c.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,t[r.variant],r.colorDefault&&t.colorDefault]}})(({theme:e,ownerState:t})=>(0,i.Z)({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},"rounded"===t.variant&&{borderRadius:(e.vars||e).shape.borderRadius},"square"===t.variant&&{borderRadius:0},t.colorDefault&&(0,i.Z)({color:(e.vars||e).palette.background.default},e.vars?{backgroundColor:e.vars.palette.Avatar.defaultBg}:{backgroundColor:"light"===e.palette.mode?e.palette.grey[400]:e.palette.grey[600]}))),f=(0,c.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(e,t)=>t.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),b=(0,c.ZP)(u,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(e,t)=>t.fallback})({width:"75%",height:"75%"}),Z=a.forwardRef(function(e,t){let r=(0,d.Z)({props:e,name:"MuiAvatar"}),{alt:s,children:c,className:u,component:p="div",imgProps:h,sizes:v,src:Z,srcSet:S,variant:y="circular"}=r,z=(0,n.Z)(r,m),C=null,j=function({crossOrigin:e,referrerPolicy:t,src:r,srcSet:o}){let[n,i]=a.useState(!1);return a.useEffect(()=>{if(!r&&!o)return;i(!1);let a=!0,n=new Image;return n.onload=()=>{a&&i("loaded")},n.onerror=()=>{a&&i("error")},n.crossOrigin=e,n.referrerPolicy=t,n.src=r,o&&(n.srcset=o),()=>{a=!1}},[e,t,r,o]),n}((0,i.Z)({},h,{src:Z,srcSet:S})),w=Z||S,k=w&&"error"!==j,I=(0,i.Z)({},r,{colorDefault:!k,component:p,variant:y}),E=g(I);return C=k?(0,o.jsx)(f,(0,i.Z)({alt:s,src:Z,srcSet:S,sizes:v,ownerState:I,className:E.img},h)):null!=c?c:w&&s?s[0]:(0,o.jsx)(b,{className:E.fallback}),(0,o.jsx)(x,(0,i.Z)({as:p,ownerState:I,className:(0,l.Z)(E.root,u),ref:t},z,{children:C}))});var S=r(1057),y=r(6720),z=r(1903),C=r(7357),j=r(3845),w=r(5861),k=r(5582),I=r(8239),E=r(1927),R=r(9147),$=r(5545),M=r(3264),P=r(1796),A=r(8274);let N=(0,M.Z)("div")(e=>{let{theme:t}=e;return{position:"sticky",top:"-8px",padding:"4px 10px",color:t.palette.primary.main,backgroundColor:"light"===t.palette.mode?(0,P.$n)(t.palette.primary.light,.85):(0,P._j)(t.palette.primary.main,.8)}}),F=(0,M.Z)("ul")({padding:0}),T=e=>{let{user:t,setUser:r}=e,[n,i]=a.useState([]);return a.useEffect(()=>{A.Wj.getUsersLogin().then(e=>{i(e)})},[]),(0,o.jsx)($.Z,{id:"grouped-demo",options:n.sort((e,t)=>-t.nameUserType.localeCompare(e.nameUserType)),groupBy:e=>e.nameUserType,getOptionLabel:e=>"".concat(e.name," - ").concat(e.nameUserType),renderInput:e=>(0,o.jsx)(z.Z,{...e,label:"Usuarios"}),renderGroup:e=>(0,o.jsxs)("li",{children:[(0,o.jsx)(N,{children:e.group}),(0,o.jsx)(F,{children:e.children})]},e.group),value:t,onChange:(e,t)=>r(t)})};var O=r(8470),W=r(4112),D=r(1163);let L=(0,I.Z)();var _=function(){let[e,t]=a.useState(!1),[r,n]=a.useState(null),[i,l]=a.useState(""),{loginUser:s,isLoggedIn:c}=a.useContext(O.Vo),{notify:d}=(0,W.d)(),u=(0,D.useRouter)(),p=a.useMemo(()=>!r||!(null==i?void 0:i.trim())||e,[r,i,e]),h=async e=>{if(e.preventDefault(),r){t(!0);let{isLoggedIn:o}=await s(r.id,i.trim());if(t(!1),!o)return d("Credenciales no validas")}};return a.useEffect(()=>{c&&u.push("/dashboard")},[d,c,u]),(0,o.jsx)(E.Z,{theme:L,children:(0,o.jsxs)(k.Z,{component:"main",maxWidth:"xs",children:[(0,o.jsx)(y.ZP,{}),(0,o.jsxs)(C.Z,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,o.jsx)(Z,{sx:{m:1,bgcolor:"secondary.main"},children:(0,o.jsx)(j.Z,{})}),(0,o.jsx)(w.Z,{component:"h1",variant:"h5",children:"Ferreira Enterprise."}),(0,o.jsxs)(C.Z,{component:"form",onSubmit:h,noValidate:!0,sx:{mt:1},children:[(0,o.jsx)(T,{user:r,setUser:n}),(0,o.jsx)(z.Z,{margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",value:i,onChange:e=>{let{target:{value:t}}=e;return l(t)}}),(0,o.jsx)(S.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},disabled:p,children:"Inciar Session"})]})]}),(0,o.jsx)(R.wZ,{sx:{mt:8,mb:4}})]})})}}},function(e){e.O(0,[58,519,433,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);