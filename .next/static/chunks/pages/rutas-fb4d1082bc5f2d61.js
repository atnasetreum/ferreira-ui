(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[384],{6393:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/rutas",function(){return n(5493)}])},4112:function(e,r,n){"use strict";n.d(r,{m:function(){return s},d:function(){return t.d}});var t=n(7889),l=n(7294);let s=function(e){let[r,n]=(0,l.useState)(e),[t,s]=(0,l.useState)("");return(0,l.useEffect)(()=>{let e="";for(let n in r){let t=r[n];t&&(e=""===e?"?".concat(n,"=").concat(t):e+"&".concat(n,"=").concat(t))}console.log({params:e}),s(e)},[r]),{filters:r,setFilters:n,querystring:t}}},7889:function(e,r,n){"use strict";n.d(r,{d:function(){return l}});var t=n(5678);let l=()=>{let e=(e,r)=>{(0,t.Am)(e,{hideProgressBar:!1,autoClose:2e3,type:null!=r?r:"warning",position:"top-right"})};return{notify:e}}},5493:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return es}});var t=n(5893),l=n(6863),s=n(1057),i=n(6886),c=n(7294),o=n(629),a=n(1903),d=n(9147),x=n(9521),u=n(7179),h=n(9272),m=n(9294),j=n(6963),g=n(7145),f=n.n(g),p=n(1733),v=n(3946),b=n(7906),Z=n(295),y=n(2882),k=n(3184),w=n(2610);let S=e=>{let{columns:r,form:n,form:{sellers:l},setForm:s}=e,i=c.useCallback(e=>e.id,[]),{getTableProps:o,getTableBodyProps:a,headerGroups:h,rows:m,prepareRow:g}=(0,x.useTable)({data:l,columns:r,getRowId:i}),p=(e,r)=>{let t=l[e];s({...n,sellers:f()(l,{$splice:[[e,1],[r,0,t]]}).map((e,r)=>({...e,order:r+1}))})};return(0,t.jsx)(u.W,{backend:j.PD,children:(0,t.jsxs)(b.Z,{...o(),children:[(0,t.jsx)(k.Z,{children:h.map(e=>{let{key:r,...n}=e.getHeaderGroupProps();return(0,t.jsxs)(d.AF,{...n,children:[(0,t.jsx)(d.Yk,{}),e.headers.map(e=>{let{key:r,...n}=e.getHeaderProps();return(0,t.jsx)(d.Yk,{align:"center",...n,children:e.render("Header")},r)})]},r)})}),(0,t.jsx)(Z.Z,{...a(),children:m.map((e,r)=>null!==g(e)&&g(e)||(0,t.jsx)(Y,{index:r,row:e,moveRow:p,...e.getRowProps()}))})]})})},Y=e=>{let{row:r,index:n,moveRow:l}=e,s=c.useRef(null),i=c.useRef(null),[,o]=(0,h.L)({accept:"row",hover(e,r){if(!s.current)return;let t=e.index;if(t===n)return;let i=s.current.getBoundingClientRect(),c=(i.bottom-i.top)/2,o=r.getClientOffset(),a=o.y-i.top;t<n&&a<c||t>n&&a>c||(l(t,n),e.index=n)}}),[{isDragging:a},x,u]=(0,m.c)({type:"row",item:{type:"row",index:n},collect:e=>({isDragging:e.isDragging()})});return u(o(s)),x(i),(0,t.jsxs)(d.AF,{ref:s,style:{opacity:a?0:1},children:[(0,t.jsx)(d.Yk,{align:"center",ref:i,children:(0,t.jsx)(w.Z,{})}),r.cells.map(e=>{let{key:r,...n}=e.getCellProps();return(0,t.jsx)(d.Yk,{align:"center",...n,children:e.render("Cell")},r)})]})},A=e=>{let{sellers:r,form:n,setForm:s}=e,i=c.useMemo(()=>[{Header:"Orden",accessor:"order"},{Header:"UUID",accessor:"uuid"},{Header:"Seller",accessor:"nombre"},{Header:"Acciones",accessor:"id",Cell:e=>(0,t.jsx)(l.Z,{"aria-label":"outlined primary button group",children:(0,t.jsx)(v.Z,{color:"error","aria-label":"delete row",component:"label",onClick:()=>{s({...n,sellers:n.sellers.filter(r=>r.id!==e.row.original.id).map((e,r)=>({...e,order:r+1}))})},children:(0,t.jsx)(p.Z,{})})})}],[n,s]);return(0,t.jsx)(y.Z,{children:(0,t.jsx)(S,{columns:i,form:n,setForm:s})})};var C=n(8719),F=n(8110),P=n(2359),z=n(5188),D=n(3345),N=n(6818),R=n(8274),H=n(4112),B=n(3343),_=n(1459);let E={date:new Date,driver:null,sellers:[],notes:""},U=e=>{let{setAction:r,routeSelected:n,setRouteSelected:x}=e,[u,h]=(0,c.useState)(E),[m,j]=(0,c.useState)(null),[g,f]=(0,c.useState)(0),{notify:p}=(0,H.d)();(0,c.useEffect)(()=>{m&&!u.sellers.find(e=>Number(e.id)===Number(m.id))&&(h({...u,sellers:[...u.sellers,{...m,id:"".concat(m.id),order:u.sellers.length+1}]}),j(null))},[m,u]),(0,c.useEffect)(()=>{Object.keys(n).length&&!g&&(h({date:(0,_.j5)(n.date),driver:{id:n.user.id,name:n.user.name},sellers:n.sellers.map((e,r)=>({id:e.id.toString(),uuid:e.uuid,nombre:e.nombre,order:r+1})),notes:n.notes}),f(n.id))},[n,g]);let v=()=>u.date?"Invalid Date"===u.date.toString()?p("Formato de fecha invalido"):u.driver?u.sellers.length?void(g?R.pg.update(g,{date:u.date,userId:u.driver.id,sellers:u.sellers.map(e=>Number(e.id)),notes:u.notes.trim()}).then(()=>{p("Ruta actualizada correctamente","success"),r(""),x({})}).catch(e=>{var r,n;return p((null===(r=e.response)||void 0===r?void 0:null===(n=r.data)||void 0===n?void 0:n.message)||e.message)}):R.pg.create({date:u.date,userId:u.driver.id,sellers:u.sellers.map(e=>Number(e.id)),notes:u.notes.trim()}).then(()=>{p("Ruta creada correctamente","success"),r("")}).catch(e=>{var r,n;return p((null===(r=e.response)||void 0===r?void 0:null===(n=r.data)||void 0===n?void 0:n.message)||e.message)})):p("Seleccione los sellers de la ruta"):p("Seleccione un driver"):p("Seleccione una fecha");return(0,t.jsxs)(i.ZP,{container:!0,spacing:1,children:[(0,t.jsx)(i.ZP,{item:!0,xs:12,sm:6,md:3,children:(0,t.jsx)(o.Z,{children:(0,t.jsx)(P._,{dateAdapter:F.H,locale:D.Z,children:(0,t.jsx)(z.M,{label:"Fecha",inputFormat:"dd/MM/yyyy",value:u.date,onChange:e=>h({...u,date:e}),renderInput:e=>(0,t.jsx)(a.Z,{...e,fullWidth:!0})})})})}),(0,t.jsx)(i.ZP,{item:!0,xs:12,md:6,lg:3,children:(0,t.jsx)(o.Z,{children:(0,t.jsx)(C.Z,{value:u.driver,onChange:e=>h({...u,driver:e})})})}),(0,t.jsx)(i.ZP,{item:!0,xs:12,md:6,lg:3,children:(0,t.jsx)(o.Z,{children:(0,t.jsx)(d.h1,{value:m,onChange:j,idsDisabled:u.sellers.map(e=>Number(e.id))})})}),(0,t.jsx)(i.ZP,{item:!0,xs:12,md:6,lg:3,children:(0,t.jsx)(o.Z,{children:(0,t.jsx)(a.Z,{label:"Notas adicionales",multiline:!0,rows:2,maxRows:4,fullWidth:!0,value:u.notes,onChange:e=>{let{target:{value:r}}=e;return h({...u,notes:r})}})})}),(0,t.jsx)(i.ZP,{item:!0,xs:12,md:12,lg:12,children:(0,t.jsxs)(l.Z,{"aria-label":"outlined primary button group",fullWidth:!0,children:[(0,t.jsx)(s.Z,{variant:"outlined",fullWidth:!0,startIcon:(0,t.jsx)(B.Z,{}),sx:{mt:1},onClick:()=>{r(""),x({})},children:"Cancelar"}),(0,t.jsx)(s.Z,{variant:"contained",fullWidth:!0,startIcon:(0,t.jsx)(N.Z,{}),sx:{mt:1},onClick:v,children:"Guardar"})]})}),!!u.sellers.length&&(0,t.jsx)(i.ZP,{item:!0,xs:12,md:12,lg:12,children:(0,t.jsx)(o.Z,{children:(0,t.jsx)(A,{sellers:u.sellers,form:u,setForm:h})})})]})};var G=n(7357),I=n(7922),O=n(5861),T=n(5503),L=n(813),W=n(1664),M=n.n(W),X=n(2665),Q=n(1822),q=n(7279);let K=Q.mM.create({body:{paddingTop:35,paddingBottom:65,paddingHorizontal:35},title:{fontSize:18,textAlign:"center",fontFamily:"Oswald"},author:{fontSize:12,textAlign:"center",marginBottom:20},subtitle:{fontSize:15,margin:2,fontFamily:"Oswald"},text:{margin:12,fontSize:14,textAlign:"justify",fontFamily:"Times-Roman"},image:{marginHorizontal:150,width:250,height:150},imageRef:{marginHorizontal:50,width:100},header:{fontSize:12,marginBottom:5,textAlign:"center",color:"grey"},pageNumber:{position:"absolute",fontSize:12,bottom:30,left:0,right:0,textAlign:"center",color:"grey"},link:{fontFamily:"Lato",fontSize:10,color:"black",textDecoration:"none",alignSelf:"flex-end",justifySelf:"flex-end"}});Q.Zx.register({family:"Oswald",src:"https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf"});let V=e=>{let{children:r,...n}=e;return(0,t.jsx)(Q.xv,{style:K.subtitle,...n,children:r})},$=e=>{let{route:r}=e;return(0,t.jsx)(Q.BB,{children:(0,t.jsxs)(Q.T3,{size:"A4",style:K.body,wrap:!0,children:[(0,t.jsx)(Q.xv,{style:K.header,fixed:!0,children:"~ Ruta  ~"}),(0,t.jsxs)(Q.xv,{style:K.header,fixed:!0,children:[r.user.name," - ",(0,_.p6)(r.date)]}),(0,t.jsx)(V,{children:"Driver"}),(0,t.jsx)(Q.xv,{style:K.text,children:r.user.name}),(0,t.jsx)(V,{children:"No. de puntos en la ruta"}),(0,t.jsx)(Q.xv,{style:K.text,children:r.sellers.length}),(0,t.jsx)(V,{children:"Ciclo"}),(0,t.jsx)(Q.xv,{style:K.text,children:r.ciclo}),(0,t.jsx)(V,{children:"Fecha de la ruta"}),(0,t.jsx)(Q.xv,{style:K.text,children:(0,_.p6)(r.date)}),(0,t.jsx)(V,{children:"Nota:"}),(0,t.jsx)(Q.xv,{style:K.text,children:r.notes}),r.sellers.map((e,r)=>(0,t.jsxs)(Q.G7,{break:!0,wrap:!1,children:[(0,t.jsxs)(V,{children:[(0,t.jsx)(Q.rU,{src:e.linkUbicacion,children:"Punto ".concat(r+1)})," : ",e.nombre," - ",e.uuid]}),(0,t.jsx)(Q.Ee,{style:K.image,src:(0,q.F)(e.image)}),(0,t.jsx)(V,{children:"Telefonos"}),e.referencePhones.length?(0,t.jsx)(Q.G7,{style:{flexDirection:"column"},children:e.referencePhones.map(e=>(0,t.jsxs)(Q.G7,{style:{flexDirection:"row",marginBottom:4},children:[(0,t.jsx)(Q.xv,{style:{marginHorizontal:8},children:"•"}),(0,t.jsxs)(Q.xv,{style:{fontSize:12},children:[e.name," - ",e.phone]})]},e.id))}):(0,t.jsx)(Q.G7,{style:{flexDirection:"column"},children:(0,t.jsxs)(Q.G7,{style:{flexDirection:"row",marginBottom:4},children:[(0,t.jsx)(Q.xv,{style:{marginHorizontal:8},children:"•"}),(0,t.jsx)(Q.xv,{style:{fontSize:12},children:"Sin telefonos"})]})}),(0,t.jsx)(V,{children:"Referencias"}),e.references.length?(0,t.jsx)(Q.G7,{style:{flexDirection:"column"},children:e.references.map(e=>(0,t.jsxs)(Q.G7,{children:[(0,t.jsxs)(Q.G7,{style:{flexDirection:"row",marginBottom:4},children:[(0,t.jsx)(Q.xv,{style:{marginHorizontal:8},children:"•"}),(0,t.jsxs)(Q.xv,{style:{fontSize:12},children:[e.description," ",e.link&&" - "," ",e.link&&(0,t.jsx)(Q.rU,{src:e.link,children:"Ubicacion"})]})]}),e.image&&(0,t.jsx)(Q.Ee,{style:K.imageRef,src:(0,q.F)(e.image)})]},e.id))}):(0,t.jsx)(Q.G7,{style:{flexDirection:"column"},children:(0,t.jsxs)(Q.G7,{style:{flexDirection:"row",marginBottom:4},children:[(0,t.jsx)(Q.xv,{style:{marginHorizontal:8},children:"•"}),(0,t.jsx)(Q.xv,{style:{fontSize:12},children:"Sin referencias"})]})}),e.personaQueAtiende&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(V,{children:"Persona que atiende"}),(0,t.jsx)(Q.xv,{style:K.text,children:e.personaQueAtiende})]}),(0,t.jsx)(V,{children:"Direccion"}),(0,t.jsxs)(Q.xv,{style:K.text,children:[e.calle," ",e.numero," ",e.colonia,", ",e.ciudad,", ",e.cp," ",e.municipio,", ",e.estado]})]},e.id)),(0,t.jsx)(Q.xv,{style:K.pageNumber,render:e=>{let{pageNumber:r,totalPages:n}=e;return"".concat(r," / ").concat(n)},fixed:!0})]})})};var J=n(3162),ee=n(7957);function er(e){let{row:r,removeRoute:n,setAction:s,setRouteSelected:i}=e,[o,a]=c.useState(!1),x=async e=>{let n=await (0,Q.eA)((0,t.jsx)($,{route:r})).toBlob();(0,J.saveAs)(n,e)};return(0,t.jsxs)(c.Fragment,{children:[(0,t.jsxs)(d.AF,{sx:{"& > *":{borderBottom:"unset"}},children:[(0,t.jsx)(d.Yk,{children:(0,t.jsx)(v.Z,{"aria-label":"expand row",size:"small",onClick:()=>a(!o),children:o?(0,t.jsx)(L.Z,{}):(0,t.jsx)(T.Z,{})})}),(0,t.jsx)(d.Yk,{component:"th",scope:"row",children:r.id}),(0,t.jsx)(d.Yk,{children:(0,_.p6)(r.date)}),(0,t.jsx)(d.Yk,{children:r.user.name}),(0,t.jsx)(d.Yk,{children:r.sellers.length}),(0,t.jsx)(d.Yk,{children:r.ciclo}),(0,t.jsx)(d.Yk,{children:(0,_.jH)(r.createdAt)}),(0,t.jsx)(d.Yk,{children:(0,_.jH)(r.updatedAt)}),(0,t.jsx)(d.Yk,{align:"center",children:(0,t.jsxs)(l.Z,{"aria-label":"outlined primary button group",children:[(0,t.jsx)(v.Z,{color:"error","aria-label":"delete row",component:"label",onClick:()=>x("".concat((0,_.p6)(r.date)," - ").concat(r.user.name," - Ciclo ").concat(r.ciclo,".pdf")),children:(0,t.jsx)(X.Z,{color:"error"})}),(0,t.jsx)(v.Z,{color:"warning","aria-label":"delete row",component:"label",onClick:()=>{i(r),s("edit")},children:(0,t.jsx)(ee.Z,{})}),(0,t.jsx)(v.Z,{color:"error","aria-label":"delete row",component:"label",onClick:()=>n(r.id),children:(0,t.jsx)(p.Z,{})})]})})]}),(0,t.jsx)(d.AF,{children:(0,t.jsx)(d.Yk,{style:{paddingBottom:0,paddingTop:0},colSpan:9,children:(0,t.jsx)(I.Z,{in:o,timeout:"auto",unmountOnExit:!0,children:(0,t.jsxs)(G.Z,{sx:{margin:1},children:[(0,t.jsx)(O.Z,{variant:"h6",gutterBottom:!0,component:"div",children:"Puntos"}),(0,t.jsxs)(b.Z,{size:"small","aria-label":"purchases",children:[(0,t.jsx)(k.Z,{children:(0,t.jsxs)(d.AF,{children:[(0,t.jsx)(d.Yk,{children:"Punto"}),(0,t.jsx)(d.Yk,{children:"UUID"}),(0,t.jsx)(d.Yk,{children:"NOMBRE"}),(0,t.jsx)(d.Yk,{children:"UBICACION"})]})}),(0,t.jsx)(Z.Z,{children:r.sellers.map((e,r)=>(0,t.jsxs)(d.AF,{children:[(0,t.jsx)(d.Yk,{component:"th",scope:"row",children:r+1}),(0,t.jsx)(d.Yk,{children:e.uuid}),(0,t.jsx)(d.Yk,{children:e.nombre}),(0,t.jsx)(d.Yk,{children:(0,t.jsx)(M(),{href:e.linkUbicacion,target:"_blank",children:e.linkUbicacion})})]},e.id))})]})]})})})})]})}var en=function(e){let{setAction:r,setRouteSelected:n}=e,[l,s]=(0,c.useState)([]),{notify:i}=(0,H.d)(),a=()=>R.pg.getAll().then(s),x=e=>{R.pg.remove(e).then(()=>{a(),i("Ruta eliminada correctamente","success")}).catch(e=>{var r,n;return i((null===(r=e.response)||void 0===r?void 0:null===(n=r.data)||void 0===n?void 0:n.message)||e.message)})};return(0,c.useEffect)(()=>{a()},[]),(0,t.jsx)(y.Z,{component:o.Z,children:(0,t.jsxs)(b.Z,{"aria-label":"collapsible table",children:[(0,t.jsx)(k.Z,{children:(0,t.jsxs)(d.AF,{children:[(0,t.jsx)(d.Yk,{}),(0,t.jsx)(d.Yk,{children:"ID"}),(0,t.jsx)(d.Yk,{children:"Fecha de ruta"}),(0,t.jsx)(d.Yk,{children:"Driver"}),(0,t.jsx)(d.Yk,{children:"No. de puntos"}),(0,t.jsx)(d.Yk,{children:"Ciclo"}),(0,t.jsx)(d.Yk,{children:"Fecha Creacion"}),(0,t.jsx)(d.Yk,{children:"Ultima actualizacion"}),(0,t.jsx)(d.Yk,{align:"center",children:"Acciones"})]})}),(0,t.jsx)(Z.Z,{children:l.map(e=>(0,t.jsx)(er,{row:e,removeRoute:x,setAction:r,setRouteSelected:n},e.id))})]})})},et=n(3318),el=n(5843),es=function(){let[e,r]=(0,c.useState)(""),[n,o]=(0,c.useState)({});return(0,t.jsx)(et.Z,{title:"Rutas",children:(0,t.jsxs)(i.ZP,{container:!0,spacing:1,children:[""===e&&(0,t.jsx)(i.ZP,{item:!0,xs:12,md:12,lg:12,children:(0,t.jsx)(l.Z,{variant:"contained","aria-label":"outlined primary button group",children:(0,t.jsx)(s.Z,{startIcon:(0,t.jsx)(el.Z,{}),onClick:()=>r("add"),children:"Agregar"})})}),["add","edit"].includes(e)&&(0,t.jsx)(i.ZP,{item:!0,xs:12,md:12,lg:12,children:(0,t.jsx)(U,{setAction:r,routeSelected:n,setRouteSelected:o})}),""===e&&(0,t.jsx)(i.ZP,{item:!0,xs:12,md:12,lg:12,children:(0,t.jsx)(en,{setAction:r,setRouteSelected:o})})]})})}},1459:function(e,r,n){"use strict";n.d(r,{j5:function(){return c},jH:function(){return s},p6:function(){return i}});var t=n(381),l=n.n(t);n(5655);let s=e=>l()(e).format("LLLL a"),i=e=>l()(e).format("LL"),c=e=>{let[r,n,t]=e.split("-");return new Date(Number(r),Number(n)-1,Number(t))}},7279:function(e,r,n){"use strict";n.d(r,{F:function(){return t}});let t=e=>"https://api.transportesferreira.com/static/images/sellers/".concat(e)},2480:function(){}},function(e){e.O(0,[885,111,445,186,58,519,433,786,917,289,840,250,30,318,774,888,179],function(){return e(e.s=6393)}),_N_E=e.O()}]);