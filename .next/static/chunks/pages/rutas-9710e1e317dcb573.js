(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[384],{6393:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/rutas",function(){return t(2010)}])},4112:function(e,r,t){"use strict";t.d(r,{m:function(){return i},d:function(){return n.d}});var n=t(7889),l=t(7294);let i=function(e){let[r,t]=(0,l.useState)(e),[n,i]=(0,l.useState)("");return(0,l.useEffect)(()=>{let e="";for(let t in r){let n=r[t];n&&(e=""===e?"?".concat(t,"=").concat(n):e+"&".concat(t,"=").concat(n))}i(e)},[r]),{filters:r,setFilters:t,querystring:n}}},7889:function(e,r,t){"use strict";t.d(r,{d:function(){return l}});var n=t(5678);let l=()=>{let e=(e,r)=>{(0,n.Am)(e,{hideProgressBar:!1,autoClose:2e3,type:null!=r?r:"warning",position:"top-right"})};return{notify:e}}},2010:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return ed}});var n=t(5893),l=t(6863),i=t(1057),s=t(6886),a=t(7294),c=t(629),d=t(1903),o=t(8126),x=t(9521),u=t(7179),h=t(9272),j=t(9294),m=t(6963),g=t(7145),p=t.n(g),f=t(1733),v=t(3946),Z=t(7906),y=t(295),b=t(2882),k=t(3184),w=t(2610);let S=e=>{let{columns:r,form:t,form:{sellers:l},setForm:i}=e,s=a.useCallback(e=>e.id,[]),{getTableProps:c,getTableBodyProps:d,headerGroups:h,rows:j,prepareRow:g}=(0,x.useTable)({data:l,columns:r,getRowId:s}),f=(e,r)=>{let n=l[e];i({...t,sellers:p()(l,{$splice:[[e,1],[r,0,n]]}).map((e,r)=>({...e,order:r+1}))})};return(0,n.jsx)(u.W,{backend:m.PD,children:(0,n.jsxs)(Z.Z,{...c(),children:[(0,n.jsx)(k.Z,{children:h.map(e=>{let{key:r,...t}=e.getHeaderGroupProps();return(0,n.jsxs)(o.AF,{...t,children:[(0,n.jsx)(o.Yk,{}),e.headers.map(e=>{let{key:r,...t}=e.getHeaderProps();return(0,n.jsx)(o.Yk,{align:"center",...t,children:e.render("Header")},r)})]},r)})}),(0,n.jsx)(y.Z,{...d(),children:j.map((e,r)=>null!==g(e)&&g(e)||(0,n.jsx)(P,{index:r,row:e,moveRow:f,...e.getRowProps()}))})]})})},P=e=>{let{row:r,index:t,moveRow:l}=e,i=a.useRef(null),s=a.useRef(null),[,c]=(0,h.L)({accept:"row",hover(e,r){if(!i.current)return;let n=e.index;if(n===t)return;let s=i.current.getBoundingClientRect(),a=(s.bottom-s.top)/2,c=r.getClientOffset(),d=c.y-s.top;n<t&&d<a||n>t&&d>a||(l(n,t),e.index=t)}}),[{isDragging:d},x,u]=(0,j.c)({type:"row",item:{type:"row",index:t},collect:e=>({isDragging:e.isDragging()})});return u(c(i)),x(s),(0,n.jsxs)(o.AF,{ref:i,style:{opacity:d?0:1},children:[(0,n.jsx)(o.Yk,{align:"center",ref:s,children:(0,n.jsx)(w.Z,{})}),r.cells.map(e=>{let{key:r,...t}=e.getCellProps();return(0,n.jsx)(o.Yk,{align:"center",...t,children:e.render("Cell")},r)})]})},Y=e=>{let{sellers:r,form:t,setForm:i}=e,s=a.useMemo(()=>[{Header:"Orden",accessor:"order"},{Header:"UUID",accessor:"uuid"},{Header:"Seller",accessor:"nombre"},{Header:"Acciones",accessor:"id",Cell:e=>(0,n.jsx)(l.Z,{"aria-label":"outlined primary button group",children:(0,n.jsx)(v.Z,{color:"error","aria-label":"delete row",component:"label",onClick:()=>{i({...t,sellers:t.sellers.filter(r=>r.id!==e.row.original.id).map((e,r)=>({...e,order:r+1}))})},children:(0,n.jsx)(f.Z,{})})})}],[t,i]);return(0,n.jsx)(b.Z,{children:(0,n.jsx)(S,{columns:s,form:t,setForm:i})})};var C=t(8719),A=t(8110),F=t(2359),z=t(5188),D=t(3345),N=t(6818),H=t(9518),I=t(4112),R=t(3343),B=t(1459),_=t(7494);let U={date:new Date,driver:null,sellers:[],notes:"",placa:null,pago:""},E=e=>{let{setAction:r,routeSelected:t,setRouteSelected:x}=e,[u,h]=(0,a.useState)(U),[j,m]=(0,a.useState)(null),[g,p]=(0,a.useState)(0),{notify:f}=(0,I.d)();(0,a.useEffect)(()=>{j&&!u.sellers.find(e=>Number(e.id)===Number(j.id))&&(h({...u,sellers:[...u.sellers,{...j,id:"".concat(j.id),order:u.sellers.length+1}]}),m(null))},[j,u]),(0,a.useEffect)(()=>{Object.keys(t).length&&!g&&(h({date:(0,B.j5)(t.date),driver:{id:t.user.id,name:t.user.name},sellers:t.sellers.map((e,r)=>({id:e.id.toString(),uuid:e.uuid,nombre:e.nombre,order:r+1})),notes:t.notes,placa:t.car,pago:t.pago}),p(t.id))},[t,g]);let v=()=>{if(!u.placa)return f("Seleccione una placa");if(!u.date)return f("Seleccione una fecha");if("Invalid Date"===u.date.toString())return f("Formato de fecha invalido");if(!u.driver)return f("Seleccione un driver");let e=u.pago.trim();return e||g?u.sellers.length?void(g?H.pg.update(g,{carId:u.placa.id,date:u.date,userId:u.driver.id,sellers:u.sellers.map(e=>Number(e.id)),notes:u.notes.trim(),pago:e}).then(()=>{f("Ruta actualizada correctamente","success"),r(""),x({})}).catch(e=>{var r,t;return f((null===(r=e.response)||void 0===r?void 0:null===(t=r.data)||void 0===t?void 0:t.message)||e.message)}):H.pg.create({carId:u.placa.id,date:u.date,userId:u.driver.id,sellers:u.sellers.map(e=>Number(e.id)),notes:u.notes.trim(),pago:e}).then(()=>{f("Ruta creada correctamente","success"),r("")}).catch(e=>{var r,t;return f((null===(r=e.response)||void 0===r?void 0:null===(t=r.data)||void 0===t?void 0:t.message)||e.message)})):f("Seleccione los sellers de la ruta"):f("Agregue un pago")};return(0,n.jsxs)(s.ZP,{container:!0,spacing:1,children:[(0,n.jsx)(s.ZP,{item:!0,xs:12,md:6,lg:3,children:(0,n.jsx)(c.Z,{children:(0,n.jsx)(_.D,{value:u.placa,onChange:e=>h({...u,placa:e})})})}),(0,n.jsx)(s.ZP,{item:!0,xs:12,md:6,lg:2,children:(0,n.jsx)(c.Z,{children:(0,n.jsx)(F._,{dateAdapter:A.H,locale:D.Z,children:(0,n.jsx)(z.M,{label:"Fecha",inputFormat:"dd/MM/yyyy",value:u.date,onChange:e=>h({...u,date:e}),renderInput:e=>(0,n.jsx)(d.Z,{...e,fullWidth:!0})})})})}),(0,n.jsx)(s.ZP,{item:!0,xs:12,md:6,lg:2,children:(0,n.jsx)(c.Z,{children:(0,n.jsx)(C.Z,{value:u.driver,onChange:e=>h({...u,driver:e})})})}),(0,n.jsx)(s.ZP,{item:!0,xs:12,md:6,lg:2,children:(0,n.jsx)(c.Z,{children:(0,n.jsx)(o.h1,{value:j,onChange:m,idsDisabled:u.sellers.map(e=>Number(e.id))})})}),(0,n.jsx)(s.ZP,{item:!0,xs:12,md:6,lg:3,children:(0,n.jsx)(c.Z,{children:(0,n.jsx)(d.Z,{label:"Pago",variant:"outlined",fullWidth:!0,type:"number",autoComplete:"off",value:u.pago,onChange:e=>{let{target:{value:r}}=e;return h({...u,pago:r})}})})}),(0,n.jsx)(s.ZP,{item:!0,xs:12,md:12,lg:12,children:(0,n.jsx)(c.Z,{children:(0,n.jsx)(d.Z,{label:"Notas adicionales",multiline:!0,rows:2,maxRows:4,fullWidth:!0,value:u.notes,onChange:e=>{let{target:{value:r}}=e;return h({...u,notes:r})}})})}),(0,n.jsx)(s.ZP,{item:!0,xs:12,md:12,lg:12,children:(0,n.jsxs)(l.Z,{"aria-label":"outlined primary button group",fullWidth:!0,children:[(0,n.jsx)(i.Z,{variant:"outlined",fullWidth:!0,startIcon:(0,n.jsx)(R.Z,{}),sx:{mt:1},onClick:()=>{r(""),x({})},children:"Cancelar"}),(0,n.jsx)(i.Z,{variant:"contained",fullWidth:!0,startIcon:(0,n.jsx)(N.Z,{}),sx:{mt:1},onClick:v,children:"Guardar"})]})}),!!u.sellers.length&&(0,n.jsx)(s.ZP,{item:!0,xs:12,md:12,lg:12,children:(0,n.jsx)(c.Z,{children:(0,n.jsx)(Y,{sellers:u.sellers,form:u,setForm:h})})})]})};var O=t(7357),G=t(7922),L=t(5861),W=t(5503),M=t(813),T=t(1664),Q=t.n(T),X=t(2665),q=t(3823),K=t(7279);let V=q.mM.create({body:{paddingTop:35,paddingBottom:65,paddingHorizontal:35},title:{fontSize:18,textAlign:"center",fontFamily:"Oswald"},author:{fontSize:12,textAlign:"center",marginBottom:20},subtitle:{fontSize:15,margin:2,fontFamily:"Oswald"},subtitleLarge:{fontSize:20,margin:2,fontFamily:"Oswald"},text:{margin:12,fontSize:14,textAlign:"justify",fontFamily:"Times-Roman"},image:{marginHorizontal:120,width:280,height:200},imageQr:{marginHorizontal:150,width:250,height:150},imageRef:{marginHorizontal:50,width:250,height:150},header:{fontSize:12,marginBottom:5,textAlign:"center",color:"grey"},pageNumber:{position:"absolute",fontSize:12,bottom:30,left:0,right:0,textAlign:"center",color:"grey"},link:{fontFamily:"Lato",fontSize:10,color:"black",textDecoration:"none",alignSelf:"flex-end",justifySelf:"flex-end"}});q.Zx.register({family:"Oswald",src:"https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf"});let $=e=>{let{children:r,...t}=e;return(0,n.jsx)(q.xv,{style:V.subtitle,...t,children:r})},J=e=>{let{route:r}=e;return(0,n.jsx)(q.BB,{children:(0,n.jsxs)(q.T3,{size:"A4",style:V.body,wrap:!0,children:[(0,n.jsx)(q.xv,{style:V.header,fixed:!0,children:"~ Ruta  ~"}),(0,n.jsxs)(q.xv,{style:V.header,fixed:!0,children:[r.user.name," - ",(0,B.p6)(r.date)]}),(0,n.jsx)($,{children:"Driver"}),(0,n.jsx)(q.xv,{style:V.text,children:r.user.name}),(0,n.jsx)($,{children:"No. de puntos en la ruta"}),(0,n.jsx)(q.xv,{style:V.text,children:r.sellers.length}),(0,n.jsx)($,{children:"Ciclo"}),(0,n.jsx)(q.xv,{style:V.text,children:r.ciclo}),(0,n.jsx)($,{children:"Fecha de la ruta"}),(0,n.jsx)(q.xv,{style:V.text,children:(0,B.p6)(r.date)}),(0,n.jsx)($,{children:"Nota:"}),(0,n.jsx)(q.xv,{style:V.text,children:r.notes}),(0,n.jsx)($,{children:"Logistica:"}),(0,n.jsx)(q.xv,{style:V.text,children:r.car.logistica.name}),(0,n.jsx)($,{children:"Placa:"}),(0,n.jsx)(q.xv,{style:V.text,children:r.car.placa}),(0,n.jsx)(q.Ee,{style:V.imageQr,src:(0,K.F)(r.car.image,"cars")}),r.sellers.map((e,r)=>(0,n.jsxs)(q.G7,{break:!0,wrap:!1,children:[(0,n.jsx)(q.xv,{style:V.subtitleLarge,children:(0,n.jsx)(q.rU,{src:e.linkUbicacion,children:"Punto ".concat(r+1)})}),(0,n.jsxs)($,{children:[e.nombre," - ",e.uuid]}),(0,n.jsx)(q.Ee,{style:V.image,src:(0,K.F)(e.image)}),(0,n.jsx)($,{children:"Telefonos"}),e.referencePhones.length?(0,n.jsx)(q.G7,{style:{flexDirection:"column"},children:e.referencePhones.map(e=>(0,n.jsxs)(q.G7,{style:{flexDirection:"row",marginBottom:4},children:[(0,n.jsx)(q.xv,{style:{marginHorizontal:8},children:"•"}),(0,n.jsxs)(q.xv,{style:{fontSize:12},children:[e.name," - ",e.phone]})]},e.id))}):(0,n.jsx)(q.G7,{style:{flexDirection:"column"},children:(0,n.jsxs)(q.G7,{style:{flexDirection:"row",marginBottom:4},children:[(0,n.jsx)(q.xv,{style:{marginHorizontal:8},children:"•"}),(0,n.jsx)(q.xv,{style:{fontSize:12},children:"Sin telefonos"})]})}),(0,n.jsx)($,{children:"Referencias"}),e.references.length?(0,n.jsx)(q.G7,{style:{flexDirection:"column"},children:e.references.map(e=>(0,n.jsxs)(q.G7,{children:[(0,n.jsxs)(q.G7,{style:{flexDirection:"row",marginBottom:4},children:[(0,n.jsx)(q.xv,{style:{marginHorizontal:8},children:"•"}),(0,n.jsxs)(q.xv,{style:{fontSize:12},children:[e.description," ",e.link&&" - "," ",e.link&&(0,n.jsx)(q.rU,{src:e.link,children:"Ubicacion"})]})]}),e.image&&(0,n.jsx)(q.Ee,{style:V.imageRef,src:(0,K.F)(e.image)})]},e.id))}):(0,n.jsx)(q.G7,{style:{flexDirection:"column"},children:(0,n.jsxs)(q.G7,{style:{flexDirection:"row",marginBottom:4},children:[(0,n.jsx)(q.xv,{style:{marginHorizontal:8},children:"•"}),(0,n.jsx)(q.xv,{style:{fontSize:12},children:"Sin referencias"})]})}),e.personaQueAtiende&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)($,{children:"Persona que atiende"}),(0,n.jsx)(q.xv,{style:V.text,children:e.personaQueAtiende})]}),(0,n.jsx)($,{children:"Direccion"}),(0,n.jsxs)(q.xv,{style:V.text,children:[e.calle," ",e.numero," ",e.colonia,", ",e.ciudad,", ",e.cp," ",e.municipio,", ",e.estado]})]},e.id)),(0,n.jsx)(q.xv,{style:V.pageNumber,render:e=>{let{pageNumber:r,totalPages:t}=e;return"".concat(r," / ").concat(t)},fixed:!0})]})})};var ee=t(3162),er=t(7957),et=t(9091);function en(e){let{row:r,removeRoute:t,setAction:i,setRouteSelected:s}=e,[c,d]=a.useState(!1),x=async e=>{let t=await (0,q.eA)((0,n.jsx)(J,{route:r})).toBlob();(0,ee.saveAs)(t,e)};return(0,n.jsxs)(a.Fragment,{children:[(0,n.jsxs)(o.AF,{sx:{"& > *":{borderBottom:"unset"}},children:[(0,n.jsx)(o.Yk,{children:(0,n.jsx)(v.Z,{"aria-label":"expand row",size:"small",onClick:()=>d(!c),children:c?(0,n.jsx)(M.Z,{}):(0,n.jsx)(W.Z,{})})}),(0,n.jsx)(o.Yk,{component:"th",scope:"row",children:r.id}),(0,n.jsx)(o.Yk,{children:r.car.logistica.name}),(0,n.jsx)(o.Yk,{children:r.car.placa}),(0,n.jsx)(o.Yk,{children:(0,B.p6)(r.date)}),(0,n.jsx)(o.Yk,{children:r.user.name}),(0,n.jsx)(o.Yk,{children:r.sellers.length}),(0,n.jsx)(o.Yk,{children:r.ciclo}),(0,n.jsx)(o.Yk,{children:et.z.format(Number(r.pago))}),(0,n.jsx)(o.Yk,{children:(0,B.jH)(r.createdAt)}),(0,n.jsx)(o.Yk,{children:(0,B.jH)(r.updatedAt)}),(0,n.jsx)(o.Yk,{align:"center",children:(0,n.jsxs)(l.Z,{"aria-label":"outlined primary button group",children:[(0,n.jsx)(v.Z,{color:"error","aria-label":"delete row",component:"label",onClick:()=>x("".concat((0,B.p6)(r.date)," - ").concat(r.user.name," - Ciclo ").concat(r.ciclo,".pdf")),children:(0,n.jsx)(X.Z,{color:"error"})}),(0,n.jsx)(v.Z,{color:"warning","aria-label":"delete row",component:"label",onClick:()=>{s(r),i("edit")},children:(0,n.jsx)(er.Z,{})}),(0,n.jsx)(v.Z,{color:"error","aria-label":"delete row",component:"label",onClick:()=>t(r.id),children:(0,n.jsx)(f.Z,{})})]})})]}),(0,n.jsx)(o.AF,{children:(0,n.jsx)(o.Yk,{style:{paddingBottom:0,paddingTop:0},colSpan:12,children:(0,n.jsx)(G.Z,{in:c,timeout:"auto",unmountOnExit:!0,children:(0,n.jsxs)(O.Z,{sx:{margin:1},children:[(0,n.jsx)(L.Z,{variant:"h6",gutterBottom:!0,component:"div",children:"Puntos"}),(0,n.jsxs)(Z.Z,{size:"small","aria-label":"purchases",children:[(0,n.jsx)(k.Z,{children:(0,n.jsxs)(o.AF,{children:[(0,n.jsx)(o.Yk,{children:"Punto"}),(0,n.jsx)(o.Yk,{children:"UUID"}),(0,n.jsx)(o.Yk,{children:"NOMBRE"}),(0,n.jsx)(o.Yk,{children:"UBICACION"})]})}),(0,n.jsx)(y.Z,{children:r.sellers.map((e,r)=>(0,n.jsxs)(o.AF,{children:[(0,n.jsx)(o.Yk,{component:"th",scope:"row",children:r+1}),(0,n.jsx)(o.Yk,{children:e.uuid}),(0,n.jsx)(o.Yk,{children:e.nombre}),(0,n.jsx)(o.Yk,{children:(0,n.jsx)(Q(),{href:e.linkUbicacion,target:"_blank",children:e.linkUbicacion})})]},e.id))})]})]})})})})]})}var el=function(e){let{setAction:r,setRouteSelected:t,filters:l}=e,[i,s]=(0,a.useState)([]),{notify:d}=(0,I.d)(),x=()=>H.pg.getAll({...l.id&&{id:l.id},...l.date&&{date:l.date},...l.driver&&{driverId:l.driver.id},...l.placa&&{carId:l.placa.id},...l.logistica&&{logisticaId:l.logistica.id}}).then(s),u=e=>{H.pg.remove(e).then(()=>{x(),d("Ruta eliminada correctamente","success")}).catch(e=>{var r,t;return d((null===(r=e.response)||void 0===r?void 0:null===(t=r.data)||void 0===t?void 0:t.message)||e.message)})};return(0,a.useEffect)(()=>{x()},[l]),(0,n.jsx)(b.Z,{component:c.Z,children:(0,n.jsxs)(Z.Z,{"aria-label":"collapsible table",children:[(0,n.jsx)(k.Z,{children:(0,n.jsxs)(o.AF,{children:[(0,n.jsx)(o.Yk,{}),(0,n.jsx)(o.Yk,{children:"ID"}),(0,n.jsx)(o.Yk,{children:"Logistica"}),(0,n.jsx)(o.Yk,{children:"Placa"}),(0,n.jsx)(o.Yk,{children:"Fecha de ruta"}),(0,n.jsx)(o.Yk,{children:"Driver"}),(0,n.jsx)(o.Yk,{children:"No. de puntos"}),(0,n.jsx)(o.Yk,{children:"Ciclo"}),(0,n.jsx)(o.Yk,{children:"Pago"}),(0,n.jsx)(o.Yk,{children:"Fecha Creacion"}),(0,n.jsx)(o.Yk,{children:"Ultima actualizacion"}),(0,n.jsx)(o.Yk,{align:"center",children:"Acciones"})]})}),(0,n.jsx)(y.Z,{children:i.map(e=>(0,n.jsx)(en,{row:e,removeRoute:u,setAction:r,setRouteSelected:t},e.id))})]})})},ei=t(3318),es=t(5843),ea=t(4162);let ec=e=>{let{filters:r,setFilters:t}=e;return(0,n.jsxs)(s.ZP,{container:!0,spacing:1,children:[(0,n.jsx)(s.ZP,{item:!0,xs:12,md:12,lg:12,children:(0,n.jsxs)(L.Z,{variant:"subtitle1",gutterBottom:!0,children:["Filtros ",(0,n.jsx)(ea.Z,{})]})}),(0,n.jsx)(s.ZP,{item:!0,xs:12,md:6,lg:1,children:(0,n.jsx)(c.Z,{children:(0,n.jsx)(d.Z,{type:"number",label:"ID",variant:"outlined",fullWidth:!0,value:r.id,onChange:e=>{let{target:{value:n}}=e;return t({...r,id:n})}})})}),(0,n.jsx)(s.ZP,{item:!0,xs:12,md:6,lg:3,children:(0,n.jsx)(c.Z,{children:(0,n.jsx)(o.yO,{value:r.logistica,onChange:e=>t({...r,logistica:e})})})}),(0,n.jsx)(s.ZP,{item:!0,xs:12,md:6,lg:3,children:(0,n.jsx)(c.Z,{children:(0,n.jsx)(o.DA,{value:r.placa,onChange:e=>t({...r,placa:e})})})}),(0,n.jsx)(s.ZP,{item:!0,xs:12,md:6,lg:3,children:(0,n.jsx)(c.Z,{children:(0,n.jsx)(C.Z,{value:r.driver,onChange:e=>t({...r,driver:e})})})}),(0,n.jsx)(s.ZP,{item:!0,xs:12,md:6,lg:2,children:(0,n.jsx)(c.Z,{children:(0,n.jsx)(F._,{dateAdapter:A.H,locale:D.Z,children:(0,n.jsx)(z.M,{label:"Fecha",inputFormat:"dd/MM/yyyy",value:r.date,onChange:e=>t({...r,date:e}),renderInput:e=>(0,n.jsx)(d.Z,{...e,fullWidth:!0})})})})})]})};var ed=function(){let[e,r]=(0,a.useState)(""),[t,c]=(0,a.useState)({}),[d,o]=(0,a.useState)({id:"",date:new Date,driver:null,logistica:null,placa:null});return(0,n.jsx)(ei.Z,{title:"Rutas",children:(0,n.jsxs)(s.ZP,{container:!0,spacing:1,children:[""===e&&(0,n.jsx)(s.ZP,{item:!0,xs:12,md:12,lg:12,children:(0,n.jsx)(l.Z,{variant:"contained","aria-label":"outlined primary button group",children:(0,n.jsx)(i.Z,{startIcon:(0,n.jsx)(es.Z,{}),onClick:()=>r("add"),children:"Agregar"})})}),["add","edit"].includes(e)&&(0,n.jsx)(s.ZP,{item:!0,xs:12,md:12,lg:12,children:(0,n.jsx)(E,{setAction:r,routeSelected:t,setRouteSelected:c})}),""===e&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.ZP,{item:!0,xs:12,md:12,lg:12,children:(0,n.jsx)(ec,{filters:d,setFilters:o})}),(0,n.jsx)(s.ZP,{item:!0,xs:12,md:12,lg:12,children:(0,n.jsx)(el,{filters:d,setAction:r,setRouteSelected:c})})]})]})})}},1459:function(e,r,t){"use strict";t.d(r,{a8:function(){return c},j5:function(){return a},jH:function(){return i},p6:function(){return s}});var n=t(381),l=t.n(n);t(5655);let i=e=>l()(e).format("LLLL a"),s=e=>l()(e).format("LL"),a=e=>{let[r,t,n]=e.split("-");return new Date(Number(r),Number(t)-1,Number(n))},c=(e,r)=>l()(e).format(r)},7279:function(e,r,t){"use strict";t.d(r,{F:function(){return n}});let n=function(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"sellers";return"https://api.transportesferreira.com/static/images/".concat(r,"/").concat(e)}},9091:function(e,r,t){"use strict";t.d(r,{z:function(){return n}});let n=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"})},2480:function(){}},function(e){e.O(0,[885,186,445,111,999,58,519,433,786,223,9,110,594,468,476,318,774,888,179],function(){return e(e.s=6393)}),_N_E=e.O()}]);