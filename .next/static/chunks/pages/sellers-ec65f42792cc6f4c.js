(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[15],{2676:function(e,n,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/sellers",function(){return l(838)}])},4112:function(e,n,l){"use strict";l.d(n,{m:function(){return t},d:function(){return i.d}});var i=l(7889),r=l(7294);let t=function(e){let[n,l]=(0,r.useState)(e),[i,t]=(0,r.useState)("");return(0,r.useEffect)(()=>{let e="";for(let l in n){let i=n[l];i&&(e=""===e?"?".concat(l,"=").concat(i):e+"&".concat(l,"=").concat(i))}t(e)},[n]),{filters:n,setFilters:l,querystring:i}}},7889:function(e,n,l){"use strict";l.d(n,{d:function(){return r}});var i=l(5678);let r=()=>{let e=(e,n)=>{(0,i.Am)(e,{hideProgressBar:!1,autoClose:2e3,type:null!=n?n:"warning",position:"top-right"})};return{notify:e}}},838:function(e,n,l){"use strict";l.r(n),l.d(n,{default:function(){return eJ}});var i=l(5893),r=l(6886),t=l(629),a=l(1057),s=l(7294),o=l(7314),c=l(2734),d=l(2293),u=l(8409),x=l(44),h=l(5861),m=l(7357),j=l(1903),g=l(3946),p=l(6861),f=l(6540),Z=l(9521),b=l(7179),v=l(9272),k=l(9294),C=l(6963),P=l(7145),w=l.n(P),y=l(7957),S=l(1733),F=l(6863),A=l(5675),U=l.n(A),W=l(8126),R=l(7906),Y=l(295),I=l(2882),D=l(3184),O=l(2610),L=l(4666),N=l(1425),H=l(6580),E=l(7645),_=l(4386),z=l(8752),T=l(7279);function Q(e){let{referencia:n,setRefSelected:l,setForm:r,form:t,sellerSelected:s}=e,o=e=>{if(e){let{referencias:i}=t,a=i.findIndex(e=>e.id===n.id),s=[...i];s[a]=n,r({...t,referencias:s}),l({})}else l({})};return(0,i.jsxs)(L.Z,{open:!0,onClose:()=>o(),children:[(0,i.jsx)(E.Z,{children:"Referencia"}),(0,i.jsxs)(H.Z,{children:[(0,i.jsx)(j.Z,{autoFocus:!0,margin:"dense",label:"Descripcion",fullWidth:!0,variant:"standard",autoComplete:"off",value:n.description,onChange:e=>{let{target:{value:i}}=e;return l({...n,description:i})}}),(0,i.jsx)(j.Z,{autoFocus:!0,margin:"dense",label:"Link de la ubicacion",fullWidth:!0,variant:"standard",autoComplete:"off",value:n.linkUbicacion,onChange:e=>{let{target:{value:i}}=e;return l({...n,linkUbicacion:i})}}),(0,i.jsxs)("center",{children:[(e=>{if(e)return(0,i.jsx)(U(),{src:URL.createObjectURL(e),alt:"",width:150,height:150});if(Object.keys(s).length){let l=n.id,r=s.references.find(e=>e.id.toString()===l);if(r&&r.image)return(0,i.jsx)(U(),{src:(0,T.F)(r.image),alt:"",width:150,height:150})}return null})(n.image),(0,i.jsx)("br",{}),(0,i.jsxs)(F.Z,{"aria-label":"outlined primary button group",children:[(0,i.jsxs)(g.Z,{color:"primary","aria-label":"upload picture",component:"label",children:[(0,i.jsx)("input",{hidden:!0,accept:"image/*",type:"file",onChange:e=>{let i=e.target.files;i&&i.length>0&&l({...n,image:i[0]})}}),n.image?(0,i.jsx)(_.Z,{title:"Actualizar imagen",children:(0,i.jsx)(z.Z,{})}):(0,i.jsx)(_.Z,{title:"Agregar imagen",children:(0,i.jsx)(p.Z,{})})]}),n.image&&(0,i.jsx)(_.Z,{title:"Eliminar imagen",children:(0,i.jsx)(g.Z,{color:"error","aria-label":"upload picture",component:"label",onClick:()=>l({...n,image:null}),children:(0,i.jsx)(S.Z,{})})})]})]})]}),(0,i.jsxs)(N.Z,{children:[(0,i.jsx)(a.Z,{onClick:()=>o(),children:"Cancelar"}),(0,i.jsx)(a.Z,{onClick:()=>o("ok"),variant:"contained",children:"Actualizar"})]})]})}let M=e=>{let{columns:n,form:l,form:{referencias:r},setForm:t}=e,a=s.useCallback(e=>e.id,[]),{getTableProps:o,getTableBodyProps:c,headerGroups:d,rows:u,prepareRow:x}=(0,Z.useTable)({data:r,columns:n,getRowId:a}),h=(e,n)=>{let i=r[e];t({...l,referencias:w()(r,{$splice:[[e,1],[n,0,i]]}).map((e,n)=>({...e,order:n+1}))})};return(0,i.jsx)(b.W,{backend:C.PD,children:(0,i.jsxs)(R.Z,{...o(),children:[(0,i.jsx)(D.Z,{children:d.map(e=>{let{key:n,...l}=e.getHeaderGroupProps();return(0,i.jsxs)(W.AF,{...l,children:[(0,i.jsx)(W.Yk,{}),e.headers.map(e=>{let{key:n,...l}=e.getHeaderProps();return(0,i.jsx)(W.Yk,{align:"center",...l,children:e.render("Header")},n)})]},n)})}),(0,i.jsx)(Y.Z,{...c(),children:u.map((e,n)=>null!==x(e)&&x(e)||(0,i.jsx)(B,{index:n,row:e,moveRow:h,...e.getRowProps()}))})]})})},B=e=>{let{row:n,index:l,moveRow:r}=e,t=s.useRef(null),a=s.useRef(null),[,o]=(0,v.L)({accept:"row",hover(e,n){if(!t.current)return;let i=e.index;if(i===l)return;let a=t.current.getBoundingClientRect(),s=(a.bottom-a.top)/2,o=n.getClientOffset(),c=o.y-a.top;i<l&&c<s||i>l&&c>s||(r(i,l),e.index=l)}}),[{isDragging:c},d,u]=(0,k.c)({type:"row",item:{type:"row",index:l},collect:e=>({isDragging:e.isDragging()})});return u(o(t)),d(a),(0,i.jsxs)(W.AF,{ref:t,style:{opacity:c?0:1},children:[(0,i.jsx)(W.Yk,{align:"center",ref:a,children:(0,i.jsx)(O.Z,{})}),n.cells.map(e=>{let{key:n,...l}=e.getCellProps();return(0,i.jsx)(W.Yk,{align:"center",...l,children:e.render("Cell")},n)})]})},G=e=>{let{form:n,setForm:l,sellerSelected:r}=e,[t,a]=(0,s.useState)({}),o=(0,s.useCallback)((e,i)=>{switch(e){case"editRow":let r=n.referencias.find(e=>e.id===i);r&&a(r);break;case"deleteRow":let t=n.referencias.filter(e=>e.id!==i).map((e,n)=>({...e,order:n+1}));l({...n,referencias:t})}},[n.referencias]),c=s.useMemo(()=>[{Header:"Orden",accessor:"order"},{Header:"Descripcion",accessor:"description"},{Header:"Ubicacion",accessor:"linkUbicacion"},{Header:"Imagen",accessor:"image",Cell:e=>{if(e.value)return(0,i.jsx)(U(),{src:URL.createObjectURL(e.value),alt:"",width:150,height:150});if(Object.keys(r).length){let n=e.row.id,l=r.references.find(e=>e.id.toString()===n);if(l&&l.image)return(0,i.jsx)(U(),{src:(0,T.F)(l.image),alt:"",width:150,height:150})}return null}},{Header:"Acciones",accessor:"id",Cell:e=>{let{value:n}=e;return(0,i.jsxs)(F.Z,{"aria-label":"outlined primary button group",children:[(0,i.jsx)(g.Z,{color:"warning","aria-label":"update row",component:"label",onClick:()=>o("editRow",n),children:(0,i.jsx)(y.Z,{})}),(0,i.jsx)(g.Z,{color:"error","aria-label":"delete row",component:"label",onClick:()=>o("deleteRow",n),children:(0,i.jsx)(S.Z,{})})]})}}],[o,r]);return(0,i.jsxs)(i.Fragment,{children:[!!Object.keys(t).length&&(0,i.jsx)(Q,{referencia:t,setRefSelected:a,form:n,setForm:l,sellerSelected:r}),(0,i.jsx)(I.Z,{children:(0,i.jsx)(M,{columns:c,form:n,setForm:l})})]})},q={description:"",linkUbicacion:"",image:null},J=e=>{let{form:n,setForm:l,sellerSelected:o}=e,[c,d]=(0,s.useState)(q);return(0,i.jsxs)(r.ZP,{container:!0,spacing:1,sx:{mt:1,mb:1},children:[(0,i.jsx)(r.ZP,{item:!0,xs:12,md:6,lg:4,children:(0,i.jsx)(t.Z,{children:(0,i.jsx)(j.Z,{label:"Descripcion",variant:"outlined",fullWidth:!0,autoComplete:"off",value:c.description,onChange:e=>{let{target:{value:n}}=e;return d({...c,description:n})}})})}),(0,i.jsx)(r.ZP,{item:!0,xs:12,md:6,lg:2,children:(0,i.jsx)(t.Z,{children:(0,i.jsx)(j.Z,{label:"Link de la ubicacion",variant:"outlined",fullWidth:!0,autoComplete:"off",value:c.linkUbicacion,onChange:e=>{let{target:{value:n}}=e;return d({...c,linkUbicacion:n})}})})}),(0,i.jsx)(r.ZP,{item:!0,xs:12,md:6,lg:2,container:!0,children:(0,i.jsxs)(g.Z,{color:"primary","aria-label":"upload picture",component:"label",children:[(0,i.jsx)("input",{hidden:!0,accept:"image/*",type:"file",onChange:e=>{let n=e.target.files;n&&n.length>0&&d({...c,image:n[0]})}}),(0,i.jsx)(p.Z,{fontSize:"large"}),(0,i.jsxs)(h.Z,{variant:"subtitle1",gutterBottom:!0,sx:{mt:1},children:[c.image&&c.image.name.substring(0,10),"..."]})]})}),(0,i.jsx)(r.ZP,{item:!0,xs:12,md:6,lg:4,children:(0,i.jsx)(a.Z,{sx:{mt:1},fullWidth:!0,variant:"contained",startIcon:(0,i.jsx)(f.Z,{}),disabled:!c.description.trim(),onClick:()=>{let e=n.referencias.length+1;l({...n,referencias:[...n.referencias,{...c,order:e,id:"new".concat(e)}]}),d(q)},children:"Agregar"})}),!!n.referencias.length&&(0,i.jsx)(r.ZP,{item:!0,xs:12,md:12,lg:12,sx:{mt:4},children:(0,i.jsx)(G,{form:n,setForm:l,sellerSelected:o})})]})};function V(e){let{telefono:n,setRefSelected:l,setForm:r,form:t}=e,s=e=>{if(e){let{telefonos:i}=t,a=i.findIndex(e=>e.id===n.id),s=[...i];s[a]=n,r({...t,telefonos:s}),l({})}else l({})};return(0,i.jsxs)(L.Z,{open:!0,onClose:()=>s(),children:[(0,i.jsx)(E.Z,{children:"Referencia Telefonica"}),(0,i.jsxs)(H.Z,{children:[(0,i.jsx)(j.Z,{autoFocus:!0,margin:"dense",label:"Nombre",fullWidth:!0,variant:"standard",autoComplete:"off",value:n.name,onChange:e=>{let{target:{value:i}}=e;return l({...n,name:i})}}),(0,i.jsx)(j.Z,{autoFocus:!0,margin:"dense",label:"Telefono",fullWidth:!0,variant:"standard",autoComplete:"off",value:n.phone,onChange:e=>{let{target:{value:i}}=e;return l({...n,phone:i})}})]}),(0,i.jsxs)(N.Z,{children:[(0,i.jsx)(a.Z,{onClick:()=>s(),children:"Cancelar"}),(0,i.jsx)(a.Z,{onClick:()=>s("ok"),variant:"contained",children:"Actualizar"})]})]})}let X=e=>{let{columns:n,form:l,form:{telefonos:r},setForm:t}=e,a=s.useCallback(e=>e.id,[]),{getTableProps:o,getTableBodyProps:c,headerGroups:d,rows:u,prepareRow:x}=(0,Z.useTable)({data:r,columns:n,getRowId:a}),h=(e,n)=>{let i=r[e];t({...l,telefonos:w()(r,{$splice:[[e,1],[n,0,i]]}).map((e,n)=>({...e,order:n+1}))})};return(0,i.jsx)(b.W,{backend:C.PD,children:(0,i.jsxs)(R.Z,{...o(),children:[(0,i.jsx)(D.Z,{children:d.map(e=>{let{key:n,...l}=e.getHeaderGroupProps();return(0,i.jsxs)(W.AF,{...l,children:[(0,i.jsx)(W.Yk,{}),e.headers.map(e=>{let{key:n,...l}=e.getHeaderProps();return(0,i.jsx)(W.Yk,{align:"center",...l,children:e.render("Header")},n)})]},n)})}),(0,i.jsx)(Y.Z,{...c(),children:u.map((e,n)=>null!==x(e)&&x(e)||(0,i.jsx)($,{index:n,row:e,moveRow:h,...e.getRowProps()}))})]})})},$=e=>{let{row:n,index:l,moveRow:r}=e,t=s.useRef(null),a=s.useRef(null),[,o]=(0,v.L)({accept:"row",hover(e,n){if(!t.current)return;let i=e.index;if(i===l)return;let a=t.current.getBoundingClientRect(),s=(a.bottom-a.top)/2,o=n.getClientOffset(),c=o.y-a.top;i<l&&c<s||i>l&&c>s||(r(i,l),e.index=l)}}),[{isDragging:c},d,u]=(0,k.c)({type:"row",item:{type:"row",index:l},collect:e=>({isDragging:e.isDragging()})});return u(o(t)),d(a),(0,i.jsxs)(W.AF,{ref:t,style:{opacity:c?0:1},children:[(0,i.jsx)(W.Yk,{align:"center",ref:a,children:(0,i.jsx)(O.Z,{})}),n.cells.map(e=>{let{key:n,...l}=e.getCellProps();return(0,i.jsx)(W.Yk,{align:"center",...l,children:e.render("Cell")},n)})]})},K=e=>{let{form:n,setForm:l}=e,[r,t]=(0,s.useState)({}),a=(0,s.useCallback)((e,i)=>{switch(e){case"editRow":let r=n.telefonos.find(e=>e.id===i);r&&t(r);break;case"deleteRow":let a=n.telefonos.filter(e=>e.id!==i).map((e,n)=>({...e,order:n+1}));l({...n,telefonos:a})}},[n.telefonos]),o=s.useMemo(()=>[{Header:"Orden",accessor:"order"},{Header:"Nombre",accessor:"name"},{Header:"Telefono",accessor:"phone"},{Header:"Acciones",accessor:"id",Cell:e=>{let{value:n}=e;return(0,i.jsxs)(F.Z,{"aria-label":"outlined primary button group",children:[(0,i.jsx)(g.Z,{color:"warning","aria-label":"update row",component:"label",onClick:()=>a("editRow",n),children:(0,i.jsx)(y.Z,{})}),(0,i.jsx)(g.Z,{color:"error","aria-label":"delete row",component:"label",onClick:()=>a("deleteRow",n),children:(0,i.jsx)(S.Z,{})})]})}}],[a]);return(0,i.jsxs)(i.Fragment,{children:[!!Object.keys(r).length&&(0,i.jsx)(V,{telefono:r,setRefSelected:t,form:n,setForm:l}),(0,i.jsx)(I.Z,{children:(0,i.jsx)(X,{columns:o,form:n,setForm:l})})]})},ee={name:"",phone:""},en=e=>{let{form:n,setForm:l}=e,[o,c]=(0,s.useState)(ee);return(0,i.jsxs)(r.ZP,{container:!0,spacing:1,sx:{mt:2,mb:2},children:[(0,i.jsx)(r.ZP,{item:!0,xs:12,md:6,lg:4,children:(0,i.jsx)(t.Z,{children:(0,i.jsx)(j.Z,{label:"Nombre",variant:"outlined",fullWidth:!0,value:o.name,onChange:e=>{let{target:{value:n}}=e;return c({...o,name:n})}})})}),(0,i.jsx)(r.ZP,{item:!0,xs:12,md:6,lg:4,children:(0,i.jsx)(t.Z,{children:(0,i.jsx)(j.Z,{label:"Telefono",variant:"outlined",fullWidth:!0,value:o.phone,onChange:e=>{let{target:{value:n}}=e;return c({...o,phone:n})}})})}),(0,i.jsx)(r.ZP,{item:!0,xs:12,md:6,lg:4,children:(0,i.jsx)(a.Z,{fullWidth:!0,variant:"contained",startIcon:(0,i.jsx)(f.Z,{}),sx:{mt:1},disabled:!o.name.trim()||!o.phone.trim(),onClick:()=>{let e=n.telefonos.length+1;l({...n,telefonos:[...n.telefonos,{...o,order:e,id:"new".concat(e)}]}),c(ee)},children:"Agregar"})}),!!n.telefonos.length&&(0,i.jsx)(r.ZP,{item:!0,xs:12,md:12,lg:12,sx:{mt:4},children:(0,i.jsx)(K,{form:n,setForm:l})})]})};var el=l(3203);let ei=e=>{let{form:n,setForm:l,initialForm:o,sellerSelected:c}=e,[d,u]=(0,s.useState)("");return(0,s.useEffect)(()=>{if(!n.image){u("");return}let e=URL.createObjectURL(n.image);return u(e),()=>URL.revokeObjectURL(e)},[n]),(0,i.jsxs)(r.ZP,{container:!0,spacing:1,children:[(0,i.jsx)(r.ZP,{item:!0,xs:12,md:6,lg:2,children:(0,i.jsx)(t.Z,{children:(0,i.jsx)(j.Z,{label:"ID",variant:"outlined",fullWidth:!0,autoComplete:"off",value:n.id,onChange:e=>{let{target:{value:i}}=e;return l({...n,id:i})}})})}),(0,i.jsx)(r.ZP,{item:!0,xs:12,md:6,lg:2,children:(0,i.jsx)(t.Z,{children:(0,i.jsx)(j.Z,{label:"Nombre",variant:"outlined",fullWidth:!0,autoComplete:"off",value:n.nombre,onChange:e=>{let{target:{value:i}}=e;return l({...n,nombre:i})}})})}),(0,i.jsx)(r.ZP,{item:!0,xs:12,md:6,lg:2,children:(0,i.jsx)(t.Z,{children:(0,i.jsx)(W.EV,{entidad:n.estado,setEntidad:e=>{e?l({...n,estado:e}):l({...n,estado:e,municipio:null,ciudad:null})}})})}),(0,i.jsx)(r.ZP,{item:!0,xs:12,md:6,lg:2,children:(0,i.jsx)(t.Z,{children:(0,i.jsx)(W.tF,{entidad:n.estado,municipio:n.municipio,setMunicipio:e=>{e?l({...n,municipio:e}):l({...n,municipio:e,ciudad:null})}})})}),(0,i.jsx)(r.ZP,{item:!0,xs:12,md:6,lg:2,children:(0,i.jsx)(t.Z,{children:(0,i.jsx)(W.E5,{entidad:n.estado,municipio:n.municipio,ciudad:n.ciudad,setCiudad:e=>l({...n,ciudad:e})})})}),(0,i.jsx)(r.ZP,{item:!0,xs:12,md:6,lg:2,children:(0,i.jsx)(t.Z,{children:(0,i.jsx)(j.Z,{label:"Colonia",variant:"outlined",fullWidth:!0,autoComplete:"off",value:n.colonia,onChange:e=>{let{target:{value:i}}=e;return l({...n,colonia:i})}})})}),(0,i.jsx)(r.ZP,{item:!0,xs:12,md:6,lg:2,children:(0,i.jsx)(t.Z,{children:(0,i.jsx)(j.Z,{label:"Calle",variant:"outlined",fullWidth:!0,autoComplete:"off",value:n.calle,onChange:e=>{let{target:{value:i}}=e;return l({...n,calle:i})}})})}),(0,i.jsx)(r.ZP,{item:!0,xs:12,md:6,lg:2,children:(0,i.jsx)(t.Z,{children:(0,i.jsx)(j.Z,{label:"Numero",variant:"outlined",fullWidth:!0,autoComplete:"off",value:n.numero,onChange:e=>{let{target:{value:i}}=e;return l({...n,numero:i})}})})}),(0,i.jsx)(r.ZP,{item:!0,xs:12,md:6,lg:2,children:(0,i.jsx)(t.Z,{children:(0,i.jsx)(j.Z,{label:"Codigo postal",variant:"outlined",fullWidth:!0,autoComplete:"off",value:n.cp,onChange:e=>{let{target:{value:i}}=e;return l({...n,cp:i})}})})}),(0,i.jsx)(r.ZP,{item:!0,xs:12,md:6,lg:2,children:(0,i.jsx)(t.Z,{children:(0,i.jsx)(j.Z,{label:"Link de la ubicacion",variant:"outlined",fullWidth:!0,autoComplete:"off",value:n.linkUbicacion,onChange:e=>{let{target:{value:i}}=e;return l({...n,linkUbicacion:i})}})})}),(0,i.jsx)(r.ZP,{item:!0,xs:12,md:6,lg:2,children:(0,i.jsx)(t.Z,{children:(0,i.jsx)(j.Z,{label:"Persona que atiende",variant:"outlined",fullWidth:!0,autoComplete:"off",value:n.personaQueAtiende,onChange:e=>{let{target:{value:i}}=e;return l({...n,personaQueAtiende:i})}})})}),(0,i.jsx)(r.ZP,{item:!0,xs:12,md:6,lg:2,children:(0,i.jsx)(t.Z,{children:(0,i.jsx)(W.h1,{label:"Seller padre",type:"noParent",value:n.seller,onChange:e=>l({...n,seller:e})})})}),(0,i.jsx)(r.ZP,{item:!0,xs:12,md:6,lg:6,container:!0,spacing:0,direction:"column",justifyContent:"center",children:(0,i.jsxs)(g.Z,{color:"primary","aria-label":"upload picture",component:"label",children:[(0,i.jsx)("input",{hidden:!0,accept:"image/*",type:"file",onChange:e=>{let i=e.target.files;i&&i.length>0&&l({...n,image:i[0]})}}),(0,i.jsx)(p.Z,{fontSize:"large"}),(0,i.jsxs)(h.Z,{variant:"subtitle1",gutterBottom:!0,sx:{mt:1},children:[n.image&&n.image.name.substring(0,10),"..."]})]})}),(0,i.jsx)(r.ZP,{item:!0,xs:12,md:6,lg:6,children:(0,i.jsx)(a.Z,{variant:"contained",startIcon:(0,i.jsx)(el.Z,{}),fullWidth:!0,onClick:()=>l(o),children:"Reinciar Formulario"})}),(0,i.jsx)(r.ZP,{item:!0,xs:12,md:6,lg:6,children:d?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("center",{children:"Imagen Seleccionada"}),(0,i.jsx)("center",{children:(0,i.jsx)(U(),{src:d,alt:"",width:350,height:350})})]}):Object.keys(c).length?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("center",{children:"Imagen Seleccionada"}),(0,i.jsx)("center",{children:(0,i.jsx)(U(),{src:(0,T.F)(c.image),alt:"",width:350,height:350})})]}):null})]})};function er(e){let{children:n,value:l,index:r,...t}=e;return(0,i.jsx)("div",{role:"tabpanel",hidden:l!==r,id:"full-width-tabpanel-".concat(r),"aria-labelledby":"full-width-tab-".concat(r),...t,children:l===r&&(0,i.jsx)(m.Z,{sx:{p:3},children:(0,i.jsx)(h.Z,{children:n})})})}function et(e){return{id:"full-width-tab-".concat(e),"aria-controls":"full-width-tabpanel-".concat(e)}}function ea(e){let{form:n,setForm:l,initialForm:r,sellerSelected:t}=e,a=(0,c.Z)(),[h,j]=s.useState(0),g=(e,n)=>{j(n)},p=e=>{j(e)};return(0,i.jsxs)(m.Z,{sx:{bgcolor:"background.paper"},children:[(0,i.jsx)(d.Z,{position:"static",children:(0,i.jsxs)(u.Z,{value:h,onChange:g,indicatorColor:"secondary",textColor:"inherit",variant:"fullWidth","aria-label":"full width tabs example",children:[(0,i.jsx)(x.Z,{label:"General",...et(0)}),(0,i.jsx)(x.Z,{label:"Referencias",...et(1)}),(0,i.jsx)(x.Z,{label:"Telefonos",...et(2)})]})}),(0,i.jsxs)(o.ZP,{axis:"rtl"===a.direction?"x-reverse":"x",index:h,onChangeIndex:p,children:[(0,i.jsx)(er,{value:h,index:0,dir:a.direction,children:(0,i.jsx)(ei,{form:n,setForm:l,initialForm:r,sellerSelected:t})}),(0,i.jsx)(er,{value:h,index:1,dir:a.direction,children:(0,i.jsx)(J,{form:n,setForm:l,sellerSelected:t})}),(0,i.jsx)(er,{value:h,index:2,dir:a.direction,children:(0,i.jsx)(en,{form:n,setForm:l})})]})]})}var es=l(6818),eo=l(7889),ec=l(6308),ed=l(594);let eu={id:"",nombre:"",estado:null,municipio:null,ciudad:null,colonia:"",calle:"",numero:"",cp:"",linkUbicacion:"",personaQueAtiende:"",seller:null,image:null,referencias:[],telefonos:[]},ex=e=>{let{closeForm:n,getSellers:l,sellerSelected:t}=e,[o,c]=(0,s.useState)(eu),[d,u]=(0,s.useState)(0),{notify:x}=(0,eo.d)();(0,s.useEffect)(()=>{if(Object.keys(t).length&&!d){var e,n,l,i,r,a,s,o;u(t.id),c({id:t.uuid,nombre:t.nombre,estado:null!==(e=t.estado)&&void 0!==e?e:"",municipio:null!==(n=t.municipio)&&void 0!==n?n:"",ciudad:null!==(l=t.ciudad)&&void 0!==l?l:"",colonia:null!==(i=t.colonia)&&void 0!==i?i:"",calle:null!==(r=t.calle)&&void 0!==r?r:"",numero:null!==(a=t.numero)&&void 0!==a?a:"",cp:null!==(s=t.cp)&&void 0!==s?s:"",linkUbicacion:t.linkUbicacion,personaQueAtiende:null!==(o=t.personaQueAtiende)&&void 0!==o?o:"",seller:t.parent?{id:t.parent.id,uuid:t.parent.uuid,nombre:t.parent.nombre}:null,image:null,referencias:t.references.map(e=>({id:"".concat(e.id),description:e.description,linkUbicacion:e.link,image:null,order:e.order})),telefonos:t.referencePhones.map(e=>({id:"".concat(e.id),name:e.name,phone:e.phone,order:e.order}))})}},[t,d]);let h=()=>{var e;let i=o.id.trim();if(!i)return x("Agregue un ID");let r=o.nombre.trim();if(!r)return x("Agregue un nombre");let t=o.estado,a=o.municipio,s=o.ciudad,h=o.colonia.trim(),m=o.calle.trim(),j=o.numero.trim(),g=o.cp.trim(),p=o.linkUbicacion.trim();if(!p)return x("Agregue el link de la ubicacion");let f=o.image;if(!f&&!d)return x("Agregue una imagen del seller");let Z=o.personaQueAtiende.trim(),b=null===(e=o.seller)||void 0===e?void 0:e.id,v=o.referencias,k=o.telefonos,C=new FormData;if(C.append("uuid",i),C.append("nombre",r),t&&C.append("estado",t),a&&C.append("municipio",a),s&&C.append("ciudad",s),h&&C.append("colonia",h),m&&C.append("calle",m),j&&C.append("numero",j),g&&C.append("cp",g),C.append("linkUbicacion",p),f&&C.append("image",f),Z&&C.append("personaQueAtiende",Z),b&&C.append("idGroup",b.toString()),v.length){C.append("referencias",JSON.stringify(v.map(e=>{var n;return{...e,image:(null===(n=e.image)||void 0===n?void 0:n.name)||""}})));for(let P=0,w=v.length;P<w;P++){let y=v[P];y.image&&C.append("refImage",y.image,y.image.name)}}k.length&&C.append("telefonos",JSON.stringify(k));let S=()=>{x("Seller ".concat(d?"actualizado":"creado"," correctamente"),"success"),c(eu),l(),n(),u(0)};d?ec.Fz.update(d,C).then(()=>S()).catch(e=>{var n,l;return x((null===(n=e.response)||void 0===n?void 0:null===(l=n.data)||void 0===l?void 0:l.message)||e.message)}):ec.Fz.create(C).then(()=>S()).catch(e=>{var n,l;return x((null===(n=e.response)||void 0===n?void 0:null===(l=n.data)||void 0===l?void 0:l.message)||e.message)})};return(0,i.jsxs)(r.ZP,{container:!0,spacing:1,children:[(0,i.jsx)(r.ZP,{item:!0,xs:12,md:12,lg:12,children:(0,i.jsx)(ea,{sellerSelected:t,form:o,setForm:c,initialForm:eu})}),(0,i.jsx)(r.ZP,{item:!0,xs:6,md:6,lg:6,children:(0,i.jsx)(a.Z,{fullWidth:!0,startIcon:(0,i.jsx)(ed.Z,{}),variant:"outlined",onClick:()=>{n(),u(0)},children:"Cancelar"})}),(0,i.jsx)(r.ZP,{item:!0,xs:6,md:6,lg:6,children:(0,i.jsx)(a.Z,{fullWidth:!0,startIcon:(0,i.jsx)(es.Z,{}),variant:"contained",onClick:h,children:"Guardar"})})]})};var eh=l(8102),em=l(4661),ej=l(519),eg=l(8509),ep=l(7908),ef=l(1459),eZ=l(3795),eb=l(4112);function ev(e){let{sellers:n,setSellerSelected:l,setAction:r,getSellers:a}=e,{notify:o}=(0,eb.d)(),[c,d]=s.useState(0),[u,x]=s.useState(5),m=c>0?Math.max(0,(1+c)*u-n.length):0,j=(e,n)=>{d(n)},p=e=>{x(parseInt(e.target.value,10)),d(0)};return(0,i.jsx)(I.Z,{component:t.Z,children:(0,i.jsxs)(R.Z,{sx:{minWidth:500},"aria-label":"custom pagination table",children:[(0,i.jsx)(D.Z,{children:(0,i.jsxs)(W.AF,{children:[(0,i.jsx)(W.Yk,{children:"ID"}),(0,i.jsx)(W.Yk,{children:"UUID"}),(0,i.jsx)(W.Yk,{children:"Nombre"}),(0,i.jsx)(W.Yk,{children:"Ubicacion"}),(0,i.jsx)(W.Yk,{children:"Imagen"}),(0,i.jsx)(W.Yk,{children:"Ids, sucursales"}),(0,i.jsx)(W.Yk,{children:"Telefonos"}),(0,i.jsx)(W.Yk,{children:"Ultima Actualizacion"}),(0,i.jsx)(W.Yk,{align:"center",children:"Detalles"}),(0,i.jsx)(W.Yk,{align:"center",children:"Acciones"})]})}),(0,i.jsxs)(Y.Z,{children:[(u>0?n.slice(c*u,c*u+u):n).map(e=>(0,i.jsxs)(W.AF,{children:[(0,i.jsx)(W.Yk,{component:"th",scope:"row",children:e.id}),(0,i.jsx)(W.Yk,{children:e.uuid}),(0,i.jsx)(W.Yk,{children:e.nombre}),(0,i.jsx)(W.Yk,{children:(0,i.jsx)(h.Z,{sx:{display:"inline"},component:eZ.Z,color:"text.primary",children:(0,i.jsx)(eZ.Z,{href:e.linkUbicacion,underline:"none",target:"_blank",children:e.linkUbicacion})})}),(0,i.jsx)(W.Yk,{children:(0,i.jsx)(U(),{src:(0,T.F)(e.image),alt:e.image,width:125,height:125})}),(0,i.jsx)(W.Yk,{children:e.sellers.map(e=>e.uuid).join(" - ")}),(0,i.jsx)(W.Yk,{children:e.referencePhones.map(e=>e.phone).join(" - ")}),(0,i.jsx)(W.Yk,{children:(0,ef.jH)(e.updatedAt)}),(0,i.jsx)(W.Yk,{align:"center",children:(0,i.jsx)(ep.Z,{style:{cursor:"pointer"},color:"primary",onClick:()=>l(e)})}),(0,i.jsx)(W.Yk,{align:"center",children:(0,i.jsxs)(F.Z,{"aria-label":"outlined primary button group",children:[(0,i.jsx)(g.Z,{color:"warning","aria-label":"update row",component:"label",onClick:()=>{l(e),r("edit")},children:(0,i.jsx)(y.Z,{})}),(0,i.jsx)(g.Z,{color:"error","aria-label":"delete row",component:"label",onClick:()=>{ec.Fz.remove(e.id).then(()=>{o("Seller eliminado correctamente","success"),a()}).catch(e=>{var n,l;return o((null===(n=e.response)||void 0===n?void 0:null===(l=n.data)||void 0===l?void 0:l.message)||e.message)})},children:(0,i.jsx)(S.Z,{})})]})})]},e.id)),m>0&&(0,i.jsx)(eg.Z,{style:{height:53*m},children:(0,i.jsx)(eh.Z,{colSpan:10})})]}),(0,i.jsx)(em.Z,{children:(0,i.jsx)(eg.Z,{children:(0,i.jsx)(ej.Z,{rowsPerPageOptions:[5,10,25,{label:"All",value:-1}],colSpan:10,count:n.length,rowsPerPage:u,page:c,SelectProps:{inputProps:{"aria-label":"rows per page"},native:!0},onPageChange:j,onRowsPerPageChange:p,ActionsComponent:W.DY})})})]})})}var ek=l(3318),eC=l(948),eP=l(8462),ew=l(7212),ey=l(9334),eS=l(7720),eF=l(6242),eA=l(9974),eU=l(3965);let eW={width:"100%",bgcolor:"background.paper"};function eR(e){let{details:n}=e;return(0,i.jsx)(eP.Z,{sx:eW,component:"nav","aria-label":"mailbox folders",children:n.map(e=>(0,i.jsxs)("div",{children:[(0,i.jsx)(ew.ZP,{children:(0,i.jsx)(ey.Z,{primary:e.value,secondary:e.label})}),(0,i.jsx)(eS.Z,{})]},e.label))})}let eY=(0,eC.ZP)(r.ZP)(e=>{let{theme:n}=e;return{width:"100%",...n.typography.body2,'& [role="separator"]':{margin:n.spacing(0,2)}}});function eI(e){let{sellerSelected:n}=e;return(0,i.jsxs)(eY,{container:!0,children:[(0,i.jsx)(eY,{item:!0,xs:12,sm:12,md:12,children:(0,i.jsx)("center",{children:(0,i.jsx)(eF.Z,{sx:{maxWidth:345},children:(0,i.jsx)(eA.Z,{children:(0,i.jsx)(eU.Z,{component:"img",height:"300",image:(0,T.F)(n.image),alt:n.nombre})})})})}),(0,i.jsx)(eY,{item:!0,xs:!0,children:(0,i.jsx)(eR,{details:[{label:"ID",value:n.id},{label:"UUID",value:n.uuid},{label:"Nombre",value:n.nombre},{label:"Link de la ubicacion",value:(0,i.jsx)(h.Z,{sx:{display:"inline"},component:eZ.Z,color:"text.primary",children:(0,i.jsx)(eZ.Z,{href:n.linkUbicacion,underline:"none",target:"_blank",children:n.linkUbicacion})})},{label:"Persona que atiende",value:n.personaQueAtiende},{label:"Fecha de creacion",value:(0,ef.jH)(n.createdAt)},{label:"Ultima Actualizacion",value:(0,ef.jH)(n.updatedAt)}]})}),(0,i.jsx)(eS.Z,{orientation:"vertical",flexItem:!0,children:"Direccion"}),(0,i.jsx)(eY,{item:!0,xs:!0,children:(0,i.jsx)(eR,{details:[{label:"Estado",value:n.estado},{label:"Municipio",value:n.municipio},{label:"Ciudad",value:n.ciudad},{label:"Colonia",value:n.colonia},{label:"Calle",value:n.calle},{label:"Numero",value:n.numero},{label:"C.P.",value:n.cp}]})})]})}var eD=l(4267),eO=function(e){let{sellerSelected:n}=e;return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(r.ZP,{container:!0,spacing:{xs:2,md:3},columns:{xs:4,sm:8,md:12},children:n.references.map(e=>(0,i.jsx)(r.ZP,{item:!0,xs:2,sm:4,md:4,children:(0,i.jsx)(eF.Z,{sx:{maxWidth:345},children:(0,i.jsxs)(eA.Z,{children:[e.image&&(0,i.jsx)(eU.Z,{component:"img",height:"140",image:(0,T.F)(e.image),alt:e.description}),(0,i.jsxs)(eD.Z,{children:[(0,i.jsx)(h.Z,{sx:{display:"inline"},component:eZ.Z,color:"text.primary",children:(0,i.jsx)(eZ.Z,{href:e.link,underline:"none",target:"_blank",children:e.link})}),(0,i.jsx)(h.Z,{variant:"body2",color:"text.secondary",children:e.description})]})]})})},e.id))})})},eL=function(e){let{sellerSelected:n}=e;return(0,i.jsx)(I.Z,{component:t.Z,children:(0,i.jsxs)(R.Z,{sx:{minWidth:650},"aria-label":"simple table",children:[(0,i.jsx)(D.Z,{children:(0,i.jsxs)(eg.Z,{children:[(0,i.jsx)(W.Yk,{children:"Nombre"}),(0,i.jsx)(W.Yk,{children:"Telefono"})]})}),(0,i.jsx)(Y.Z,{children:n.referencePhones.map(e=>(0,i.jsxs)(W.AF,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,i.jsx)(W.Yk,{component:"th",scope:"row",children:e.name}),(0,i.jsx)(W.Yk,{children:e.phone})]},e.id))})]})})},eN=function(e){let{sellerSelected:n}=e;return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(r.ZP,{container:!0,spacing:{xs:2,md:3},columns:{xs:4,sm:8,md:12},children:n.sellers.map(e=>(0,i.jsx)(r.ZP,{item:!0,xs:2,sm:4,md:4,children:(0,i.jsx)(eF.Z,{sx:{maxWidth:345},children:(0,i.jsxs)(eA.Z,{children:[e.image&&(0,i.jsx)(eU.Z,{component:"img",height:"140",image:(0,T.F)(e.image),alt:e.nombre}),(0,i.jsxs)(eD.Z,{children:[(0,i.jsx)(h.Z,{sx:{display:"inline"},component:eZ.Z,color:"text.primary",children:(0,i.jsx)(eZ.Z,{href:e.linkUbicacion,underline:"none",target:"_blank",children:e.linkUbicacion})}),(0,i.jsx)(h.Z,{variant:"body2",color:"text.secondary",children:e.nombre})]})]})})},e.id))})})};function eH(e){let{children:n,value:l,index:r,...t}=e;return(0,i.jsx)("div",{role:"tabpanel",hidden:l!==r,id:"full-width-tabpanel-".concat(r),"aria-labelledby":"full-width-tab-".concat(r),...t,children:l===r&&(0,i.jsx)(m.Z,{sx:{p:3},children:(0,i.jsx)(h.Z,{children:n})})})}function eE(e){return{id:"full-width-tab-".concat(e),"aria-controls":"full-width-tabpanel-".concat(e)}}function e_(e){let{sellerSelected:n}=e,l=(0,c.Z)(),[r,t]=s.useState(0),a=(e,n)=>{t(n)},h=e=>{t(e)};return(0,i.jsxs)(m.Z,{sx:{bgcolor:"background.paper"},children:[(0,i.jsx)(d.Z,{position:"static",children:(0,i.jsxs)(u.Z,{value:r,onChange:a,indicatorColor:"secondary",textColor:"inherit",variant:"fullWidth","aria-label":"full width tabs example",children:[(0,i.jsx)(x.Z,{label:"General",...eE(0)}),(0,i.jsx)(x.Z,{label:"Referencias ".concat(n.references.length),...eE(1)}),(0,i.jsx)(x.Z,{label:"Telefonos ".concat(n.referencePhones.length),...eE(2)}),(0,i.jsx)(x.Z,{label:"Sucursales ".concat(n.sellers.length),...eE(3)})]})}),(0,i.jsxs)(o.ZP,{axis:"rtl"===l.direction?"x-reverse":"x",index:r,onChangeIndex:h,children:[(0,i.jsx)(eH,{value:r,index:0,dir:l.direction,children:(0,i.jsx)(eI,{sellerSelected:n})}),(0,i.jsx)(eH,{value:r,index:1,dir:l.direction,children:(0,i.jsx)(eO,{sellerSelected:n})}),(0,i.jsx)(eH,{value:r,index:2,dir:l.direction,children:(0,i.jsx)(eL,{sellerSelected:n})}),(0,i.jsx)(eH,{value:r,index:3,dir:l.direction,children:(0,i.jsx)(eN,{sellerSelected:n})})]})]})}let ez=(0,eC.ZP)(L.Z)(e=>{let{theme:n}=e;return{"& .MuiDialogContent-root":{padding:n.spacing(2)},"& .MuiDialogActions-root":{padding:n.spacing(1)}}});function eT(e){let{children:n,onClose:l,...r}=e;return(0,i.jsxs)(E.Z,{sx:{m:0,p:2},...r,children:[n,l?(0,i.jsx)(g.Z,{"aria-label":"close",onClick:l,sx:{position:"absolute",right:8,top:8,color:e=>e.palette.grey[500]},children:(0,i.jsx)(ed.Z,{})}):null]})}function eQ(e){let{sellerSelected:n,setSellerSelected:l}=e,r=()=>{l({})};return(0,i.jsxs)(ez,{onClose:r,"aria-labelledby":"customized-dialog-seller",open:!!Object.keys(n).length,fullWidth:!0,maxWidth:"lg",children:[(0,i.jsxs)(eT,{id:"customized-dialog-seller",onClose:r,children:["Detalles del seller: ",null==n?void 0:n.nombre]}),(0,i.jsx)(H.Z,{dividers:!0,children:Object.keys(n).length&&(0,i.jsx)(e_,{sellerSelected:n})}),(0,i.jsx)(N.Z,{})]})}var eM=l(9069),eB=l(4162);let eG=e=>{let{filters:n,setFilters:l}=e;return(0,i.jsxs)(r.ZP,{container:!0,spacing:1,children:[(0,i.jsx)(r.ZP,{item:!0,xs:12,md:12,lg:12,children:(0,i.jsxs)(h.Z,{variant:"subtitle1",gutterBottom:!0,children:["Filtros ",(0,i.jsx)(eB.Z,{})]})}),(0,i.jsx)(r.ZP,{item:!0,xs:12,md:6,lg:1,children:(0,i.jsx)(t.Z,{children:(0,i.jsx)(j.Z,{type:"number",label:"ID",variant:"outlined",fullWidth:!0,value:n.id,onChange:e=>{let{target:{value:i}}=e;return l({...n,id:i})}})})}),(0,i.jsx)(r.ZP,{item:!0,xs:12,md:6,lg:1,children:(0,i.jsx)(t.Z,{children:(0,i.jsx)(j.Z,{label:"UUID",variant:"outlined",fullWidth:!0,value:n.uuid,onChange:e=>{let{target:{value:i}}=e;return l({...n,uuid:i})}})})}),(0,i.jsx)(r.ZP,{item:!0,xs:12,md:6,lg:2,children:(0,i.jsx)(t.Z,{children:(0,i.jsx)(j.Z,{label:"Nombre",variant:"outlined",fullWidth:!0,value:n.nombre,onChange:e=>{let{target:{value:i}}=e;return l({...n,nombre:i})}})})}),(0,i.jsx)(r.ZP,{item:!0,xs:12,md:6,lg:2,children:(0,i.jsx)(t.Z,{children:(0,i.jsx)(W.EV,{entidad:n.estado,setEntidad:e=>{e?l({...n,estado:e}):l({...n,estado:e,municipio:null,ciudad:null})}})})}),(0,i.jsx)(r.ZP,{item:!0,xs:12,md:6,lg:2,children:(0,i.jsx)(t.Z,{children:(0,i.jsx)(W.tF,{entidad:n.estado,municipio:n.municipio,setMunicipio:e=>{e?l({...n,municipio:e}):l({...n,municipio:e,ciudad:null})}})})}),(0,i.jsx)(r.ZP,{item:!0,xs:12,md:6,lg:2,children:(0,i.jsx)(t.Z,{children:(0,i.jsx)(W.E5,{entidad:n.estado,municipio:n.municipio,ciudad:n.ciudad,setCiudad:e=>l({...n,ciudad:e})})})})]})},eq={id:"",uuid:"",nombre:"",personaQueAtiende:"",estado:null,municipio:null,ciudad:null};var eJ=function(){let[e,n]=(0,s.useState)(""),[l,o]=(0,s.useState)([]),[c,d]=(0,s.useState)({}),{filters:u,setFilters:x,querystring:h}=(0,eb.m)(eq),m=()=>{ec.Fz.getAll(h).then(o)};return(0,s.useEffect)(()=>{m()},[h]),(0,i.jsxs)(ek.Z,{title:"Sellers",children:[""===e&&(0,i.jsx)(eQ,{sellerSelected:c,setSellerSelected:d}),(0,i.jsxs)(r.ZP,{container:!0,spacing:1,children:[""===e&&(0,i.jsx)(r.ZP,{item:!0,xs:12,md:12,lg:12,children:(0,i.jsx)(F.Z,{variant:"contained","aria-label":"outlined primary button group",children:(0,i.jsx)(a.Z,{startIcon:(0,i.jsx)(eM.Z,{}),onClick:()=>n("add"),children:"Agregar"})})}),["add","edit"].includes(e)&&(0,i.jsx)(r.ZP,{item:!0,xs:12,md:12,lg:12,children:(0,i.jsx)(t.Z,{sx:{p:2},children:(0,i.jsx)(ex,{sellerSelected:c,getSellers:m,closeForm:()=>{d({}),n("")}})})}),""===e&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.ZP,{item:!0,xs:12,md:12,lg:12,children:(0,i.jsx)(eG,{filters:u,setFilters:x})}),(0,i.jsx)(r.ZP,{item:!0,xs:12,md:12,lg:12,children:(0,i.jsx)(ev,{sellers:l,setSellerSelected:d,setAction:n,getSellers:m})})]})]})]})}},1459:function(e,n,l){"use strict";l.d(n,{j5:function(){return s},jH:function(){return t},p6:function(){return a}});var i=l(381),r=l.n(i);l(5655);let t=e=>r()(e).format("LLLL a"),a=e=>r()(e).format("LL"),s=e=>{let[n,l,i]=e.split("-");return new Date(Number(n),Number(l)-1,Number(i))}},7279:function(e,n,l){"use strict";l.d(n,{F:function(){return i}});let i=function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"sellers";return"".concat("https://api.transportesferreira.com","/static/images/").concat(n,"/").concat(e)}}},function(e){e.O(0,[885,58,519,433,786,980,840,231,246,788,318,774,888,179],function(){return e(e.s=2676)}),_N_E=e.O()}]);