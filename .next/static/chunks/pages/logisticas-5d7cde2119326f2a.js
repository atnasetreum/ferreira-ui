(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[647],{6540:function(e,t,n){"use strict";var i=n(4836);t.Z=void 0;var r=i(n(4938)),s=n(5893),a=(0,r.default)((0,s.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");t.Z=a},3343:function(e,t,n){"use strict";var i=n(4836);t.Z=void 0;var r=i(n(4938)),s=n(5893),a=(0,r.default)((0,s.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Clear");t.Z=a},7957:function(e,t,n){"use strict";var i=n(4836);t.Z=void 0;var r=i(n(4938)),s=n(5893),a=(0,r.default)((0,s.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");t.Z=a},5874:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/logisticas",function(){return n(8088)}])},4112:function(e,t,n){"use strict";n.d(t,{m:function(){return s},d:function(){return i.d}});var i=n(7889),r=n(7294);let s=function(e){let[t,n]=(0,r.useState)(e),[i,s]=(0,r.useState)("");return(0,r.useEffect)(()=>{let e="";for(let n in t){let i=t[n];i&&(e=""===e?"?".concat(n,"=").concat(i):e+"&".concat(n,"=").concat(i))}console.log({params:e}),s(e)},[t]),{filters:t,setFilters:n,querystring:i}}},7889:function(e,t,n){"use strict";n.d(t,{d:function(){return r}});var i=n(5678);let r=()=>{let e=(e,t)=>{(0,i.Am)(e,{hideProgressBar:!1,autoClose:2e3,type:null!=t?t:"warning",position:"top-right"})};return{notify:e}}},8088:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return _}});var i=n(5893),r=n(6863),s=n(1057),a=n(6886),c=n(3318),l=n(7294),o=n(6308),d=n(629),u=n(1903),h=n(6818),x=n(3343),m=n(4112);let j={name:""},g=e=>{let{setAction:t,getLogisticas:n,logisticaSelected:c,setLogisticaSelected:g}=e,[f,v]=(0,l.useState)(j),[Z,p]=(0,l.useState)(0),{notify:b}=(0,m.d)();(0,l.useEffect)(()=>{Object.keys(c).length&&!Z&&(p(c.id),v({name:c.name}))},[c,Z]);let k=()=>{let e=f.name.trim();if(!e)return b("Agregue el nombre de la logistica");Z?o.N4.update(Z,e).then(()=>{b("Logistica actualizada correctamente","success"),t(""),n(),g({}),p(0)}).catch(e=>{var t,n;return b((null===(t=e.response)||void 0===t?void 0:null===(n=t.data)||void 0===n?void 0:n.message)||e.message)}):o.N4.create(e).then(()=>{b("Logistica creada correctamente","success"),t(""),n()}).catch(e=>{var t,n;return b((null===(t=e.response)||void 0===t?void 0:null===(n=t.data)||void 0===n?void 0:n.message)||e.message)})};return(0,i.jsxs)(a.ZP,{container:!0,spacing:1,children:[(0,i.jsx)(a.ZP,{item:!0,xs:12,md:6,lg:6,children:(0,i.jsx)(d.Z,{children:(0,i.jsx)(u.Z,{label:"Nombre",fullWidth:!0,value:f.name,onChange:e=>{let{target:{value:t}}=e;return v({...f,name:t})}})})}),(0,i.jsx)(a.ZP,{item:!0,xs:12,md:6,lg:6,children:(0,i.jsxs)(r.Z,{"aria-label":"outlined primary button group",fullWidth:!0,children:[(0,i.jsx)(s.Z,{variant:"outlined",fullWidth:!0,startIcon:(0,i.jsx)(x.Z,{}),sx:{mt:1},onClick:()=>{t(""),g({}),p(0)},children:"Cancelar"}),(0,i.jsx)(s.Z,{variant:"contained",fullWidth:!0,startIcon:(0,i.jsx)(h.Z,{}),sx:{mt:1},onClick:k,children:"Guardar"})]})})]})};var f=n(7906),v=n(295),Z=n(2882),p=n(3184),b=n(8126),k=n(1459),L=n(3946),N=n(7957),w=n(1733),A=function(e){let{logisticas:t,getLogisticas:n,setLogisticaSelected:s,setAction:a}=e,{notify:c}=(0,m.d)();return(0,i.jsx)(Z.Z,{component:d.Z,children:(0,i.jsxs)(f.Z,{sx:{minWidth:650},"aria-label":"simple table",children:[(0,i.jsx)(p.Z,{children:(0,i.jsxs)(b.AF,{children:[(0,i.jsx)(b.Yk,{children:"ID"}),(0,i.jsx)(b.Yk,{children:"Nombre"}),(0,i.jsx)(b.Yk,{children:"Fecha Creacion"}),(0,i.jsx)(b.Yk,{children:"Fecha de ultima actualizacion"}),(0,i.jsx)(b.Yk,{children:"Acciones"})]})}),(0,i.jsx)(v.Z,{children:t.map(e=>(0,i.jsxs)(b.AF,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,i.jsx)(b.Yk,{component:"th",scope:"row",children:e.id}),(0,i.jsx)(b.Yk,{children:e.name}),(0,i.jsx)(b.Yk,{children:(0,k.jH)(e.createdAt)}),(0,i.jsx)(b.Yk,{children:(0,k.jH)(e.updatedAt)}),(0,i.jsx)(b.Yk,{children:(0,i.jsxs)(r.Z,{"aria-label":"outlined primary button group",children:[(0,i.jsx)(L.Z,{color:"warning","aria-label":"update row",component:"label",onClick:()=>{a("edit"),s(e)},children:(0,i.jsx)(N.Z,{})}),(0,i.jsx)(L.Z,{color:"error","aria-label":"delete row",component:"label",onClick:()=>o.N4.remove(e.id).then(()=>{c("Logistica eliminada correctamente","success"),n()}).catch(e=>{var t,n;return c((null===(t=e.response)||void 0===t?void 0:null===(n=t.data)||void 0===n?void 0:n.message)||e.message)}),children:(0,i.jsx)(w.Z,{})})]})})]},e.id))})]})})},C=n(6540),_=function(){let[e,t]=(0,l.useState)(""),[n,d]=(0,l.useState)([]),[u,h]=(0,l.useState)({}),x=()=>{o.N4.getAll().then(d)};return(0,l.useEffect)(()=>{x()},[]),(0,i.jsx)(c.Z,{title:"Logisticas",children:(0,i.jsxs)(a.ZP,{container:!0,spacing:1,children:[["add","edit"].includes(e)&&(0,i.jsx)(a.ZP,{item:!0,xs:12,md:12,lg:12,children:(0,i.jsx)(g,{setAction:t,getLogisticas:x,logisticaSelected:u,setLogisticaSelected:h})}),""===e&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.ZP,{item:!0,xs:12,md:12,lg:12,children:(0,i.jsx)(r.Z,{variant:"contained","aria-label":"outlined primary button group",children:(0,i.jsx)(s.Z,{startIcon:(0,i.jsx)(C.Z,{}),onClick:()=>t("add"),children:"Agregar"})})}),(0,i.jsx)(a.ZP,{item:!0,xs:12,md:12,lg:12,children:(0,i.jsx)(A,{logisticas:n,getLogisticas:x,setLogisticaSelected:h,setAction:t})})]})]})})}},1459:function(e,t,n){"use strict";n.d(t,{j5:function(){return c},jH:function(){return s},p6:function(){return a}});var i=n(381),r=n.n(i);n(5655);let s=e=>r()(e).format("LLLL a"),a=e=>r()(e).format("LL"),c=e=>{let[t,n,i]=e.split("-");return new Date(Number(t),Number(n)-1,Number(i))}}},function(e){e.O(0,[885,58,519,433,786,980,840,318,774,888,179],function(){return e(e.s=5874)}),_N_E=e.O()}]);