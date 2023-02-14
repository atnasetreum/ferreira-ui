(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[647],{6540:function(e,t,n){"use strict";var i=n(4836);t.Z=void 0;var a=i(n(4938)),r=n(5893),s=(0,a.default)((0,r.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");t.Z=s},3343:function(e,t,n){"use strict";var i=n(4836);t.Z=void 0;var a=i(n(4938)),r=n(5893),s=(0,a.default)((0,r.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Clear");t.Z=s},1733:function(e,t,n){"use strict";var i=n(4836);t.Z=void 0;var a=i(n(4938)),r=n(5893),s=(0,a.default)((0,r.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");t.Z=s},7957:function(e,t,n){"use strict";var i=n(4836);t.Z=void 0;var a=i(n(4938)),r=n(5893),s=(0,a.default)((0,r.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");t.Z=s},6818:function(e,t,n){"use strict";var i=n(4836);t.Z=void 0;var a=i(n(4938)),r=n(5893),s=(0,a.default)((0,r.jsx)("path",{d:"M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"}),"Save");t.Z=s},5874:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/logisticas",function(){return n(8088)}])},8088:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return w}});var i=n(5893),a=n(6863),r=n(1057),s=n(6886),c=n(3318),l=n(7294),o=n(6470),d=n(629),u=n(1903),h=n(6818),m=n(3343),v=n(2974);let x={name:""},j=e=>{let{setAction:t,getLogisticas:n,logisticaSelected:c,setLogisticaSelected:j}=e,[f,g]=(0,l.useState)(x),[Z,p]=(0,l.useState)(0),{notify:b}=(0,v.d$)();(0,l.useEffect)(()=>{Object.keys(c).length&&!Z&&(p(c.id),g({name:c.name}))},[c,Z]);let L=()=>{let e=f.name.trim();if(!e)return b("Agregue el nombre de la logistica");Z?o.N4.update(Z,e).then(()=>{b("Logistica actualizada correctamente","success"),t(""),n(),j({}),p(0)}).catch(e=>{var t,n;return b((null===(t=e.response)||void 0===t?void 0:null===(n=t.data)||void 0===n?void 0:n.message)||e.message)}):o.N4.create(e).then(()=>{b("Logistica creada correctamente","success"),t(""),n()}).catch(e=>{var t,n;return b((null===(t=e.response)||void 0===t?void 0:null===(n=t.data)||void 0===n?void 0:n.message)||e.message)})};return(0,i.jsxs)(s.ZP,{container:!0,spacing:1,children:[(0,i.jsx)(s.ZP,{item:!0,xs:12,md:6,lg:6,children:(0,i.jsx)(d.Z,{children:(0,i.jsx)(u.Z,{label:"Nombre",fullWidth:!0,autoComplete:"off",value:f.name,onChange:e=>{let{target:{value:t}}=e;return g({...f,name:t})}})})}),(0,i.jsx)(s.ZP,{item:!0,xs:12,md:6,lg:6,children:(0,i.jsxs)(a.Z,{"aria-label":"outlined primary button group",fullWidth:!0,children:[(0,i.jsx)(r.Z,{variant:"outlined",fullWidth:!0,startIcon:(0,i.jsx)(m.Z,{}),sx:{mt:1},onClick:()=>{t(""),j({}),p(0)},children:"Cancelar"}),(0,i.jsx)(r.Z,{variant:"contained",fullWidth:!0,startIcon:(0,i.jsx)(h.Z,{}),sx:{mt:1},onClick:L,children:"Guardar"})]})})]})};var f=n(5248),g=n(1459),Z=n(3946),p=n(7957),b=n(1733),L=n(7586),k=function(e){let{logisticas:t,getLogisticas:n,setLogisticaSelected:r,setAction:s}=e,{notify:c}=(0,v.d$)();return(0,i.jsx)(L.Z,{rows:t,columns:["ID","Nombre","Fecha Creacion","Fecha de ultima actualizacion","Acciones"],renderListItem:e=>(0,i.jsxs)(f.AF,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,i.jsx)(f.Yk,{component:"th",scope:"row",children:e.id}),(0,i.jsx)(f.Yk,{children:e.name}),(0,i.jsx)(f.Yk,{children:(0,g.jH)(e.createdAt)}),(0,i.jsx)(f.Yk,{children:(0,g.jH)(e.updatedAt)}),(0,i.jsx)(f.Yk,{children:(0,i.jsxs)(a.Z,{"aria-label":"outlined primary button group",children:[(0,i.jsx)(Z.Z,{color:"warning","aria-label":"update row",component:"label",onClick:()=>{s("edit"),r(e)},children:(0,i.jsx)(p.Z,{})}),(0,i.jsx)(Z.Z,{color:"error","aria-label":"delete row",component:"label",onClick:()=>o.N4.remove(e.id).then(()=>{c("Logistica eliminada correctamente","success"),n()}).catch(e=>{var t,n;return c((null===(t=e.response)||void 0===t?void 0:null===(n=t.data)||void 0===n?void 0:n.message)||e.message)}),children:(0,i.jsx)(b.Z,{})})]})})]},e.id)})},N=n(6540),w=function(){let[e,t]=(0,l.useState)(""),[n,d]=(0,l.useState)([]),[u,h]=(0,l.useState)({}),m=()=>{o.N4.getAll().then(d)};return(0,l.useEffect)(()=>{m()},[]),(0,i.jsx)(c.Z,{title:"Logisticas",children:(0,i.jsxs)(s.ZP,{container:!0,spacing:1,children:[["add","edit"].includes(e)&&(0,i.jsx)(s.ZP,{item:!0,xs:12,md:12,lg:12,children:(0,i.jsx)(j,{setAction:t,getLogisticas:m,logisticaSelected:u,setLogisticaSelected:h})}),""===e&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.ZP,{item:!0,xs:12,md:12,lg:12,children:(0,i.jsx)(a.Z,{variant:"contained","aria-label":"outlined primary button group",children:(0,i.jsx)(r.Z,{startIcon:(0,i.jsx)(N.Z,{}),onClick:()=>t("add"),children:"Agregar"})})}),(0,i.jsx)(s.ZP,{item:!0,xs:12,md:12,lg:12,children:(0,i.jsx)(k,{logisticas:n,getLogisticas:m,setLogisticaSelected:h,setAction:t})})]})]})})}},1459:function(e,t,n){"use strict";n.d(t,{a8:function(){return l},j5:function(){return c},jH:function(){return r},p6:function(){return s}});var i=n(381),a=n.n(i);n(5655);let r=e=>a()(e).format("LLLL a"),s=e=>a()(e).format("LL"),c=e=>{let[t,n,i]=e.split("-");return new Date(Number(t),Number(n)-1,Number(i))},l=(e,t)=>a()(e).format(t)}},function(e){e.O(0,[885,681,102,633,976,649,318,774,888,179],function(){return e(e.s=5874)}),_N_E=e.O()}]);