(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2dd660da"],{1681:function(e,t,i){},"2bfd":function(e,t,i){},9533:function(e,t,i){"use strict";i.r(t);var a=i("c6a6"),o=i("8336"),s=i("b0af"),c=i("99d9"),n=i("cc20"),l=i("62ad"),r=i("a523"),d=i("8fea"),u=i("2e4b"),h=i("169a"),_=i("ce7e"),m=i("0e8f"),p=i("132d"),f=i("e449"),g=i("0fd9"),I=i("b974"),v=i("2fa4"),b=i("8654"),x=i("a844"),k=i("71d9"),y=i("2a7f"),D=function(){var e=this,t=e._self._c;return t(s["a"],[t(c["c"],[t(p["a"],{staticClass:"mx-2",attrs:{color:"opcion1"}},[e._v("mdi-clipboard-text-clock")]),t("span",[e._v("Historial Tickets")]),t(_["a"],{staticClass:"mx-2",attrs:{inset:"",vertical:""}}),t(m["a"],{staticClass:"mx-2",attrs:{xs5:"",sm2:"",md3:"",lg2:""}},[t(I["a"],{staticClass:"mt-2",attrs:{outlined:"",items:e.itemTipoTrabajoArray,label:"Tipo Trabajo"},on:{change:function(t){return e.FiltrarTiposTrabajos()}},model:{value:e.select_tipo_Trabajo_ver,callback:function(t){e.select_tipo_Trabajo_ver=t},expression:"select_tipo_Trabajo_ver"}})],1),t(m["a"],{staticClass:"mx-2",attrs:{xs5:"",sm4:"",md5:"",lg4:""}},[t(b["a"],{attrs:{"justify-center":"","append-icon":"mdi-magnify",label:"Busqueda","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),t("vue-excel-xlsx",{directives:[{name:"show",rawName:"v-show",value:e.ticketsArray.length>0,expression:"ticketsArray.length >0"}],staticClass:"mx-2",attrs:{data:e.ticketsArray,columns:e.column_excel,filename:"HistorialTicket",sheetname:"hoja1"}},[t(o["a"],{attrs:{color:"info"}},[t(p["a"],{attrs:{dark:""}},[e._v("get_app")])],1)],1),t(v["a"]),t("span",{staticClass:"text-caption"},[e._v(e._s(e.fecha_inicio))]),e._v("/"),t("span",{staticClass:"text-caption"},[e._v(e._s(e.fecha_fin))]),t(o["a"],{staticClass:"mx-2",attrs:{fab:"",small:"",color:"opcion2",dark:""},on:{click:function(t){e.dialogInicio=!0}}},[t(p["a"],[e._v("today")])],1)],1),t(d["a"],{staticClass:"elevation-1 mt-5 mx-1",attrs:{headers:e.headers,items:e.ticketsArray,search:e.search,"sort-by":"fecha_reportado"},scopedSlots:e._u([{key:"item.actions",fn:function({item:i}){return[t(p["a"],{staticClass:"mr-2",attrs:{color:"green",small:""},on:{click:function(t){return e.editItem(i)}}},[e._v(" mdi-pencil ")]),t(p["a"],{attrs:{color:"red",small:""},on:{click:function(t){return e.deleteItem(i)}}},[e._v(" mdi-delete ")])]}},{key:"no-data",fn:function(){return[t(o["a"],{attrs:{color:"primary"},on:{click:function(t){return e.listar()}}},[e._v("Reset")])]},proxy:!0},{key:"item.fecha_reportado",fn:function({item:i}){return[t("span",{staticClass:"text-caption"},[e._v(e._s(e.getDate(i.fecha_reportado)))])]}},{key:"item.fecha_solucion",fn:function({item:i}){return[t("span",{staticClass:"text-caption"},[e._v(e._s(e.getDate(i.fecha_solucion)))])]}},{key:"item.fecha_llegada_tenico",fn:function({item:i}){return[i.fecha_llegada_tenico&&""!=i.fecha_llegada_tenico?t("span",{staticClass:"text-caption"},[e._v(e._s(e.getDate(i.fecha_llegada_tenico)))]):e._e()]}},{key:"item.fecha_inicio_tenico",fn:function({item:i}){return[i.fecha_inicio_tenico&&""!=i.fecha_inicio_tenico?t("span",{staticClass:"text-caption"},[e._v(e._s(e.getDate(i.fecha_inicio_tenico)))]):e._e()]}},{key:"item.fecha_fin_tecnico",fn:function({item:i}){return[i.fecha_fin_tecnico&&""!=i.fecha_fin_tecnico?t("span",{staticClass:"text-caption"},[e._v(e._s(e.getDate(i.fecha_fin_tecnico)))]):e._e()]}},{key:"item.id_tipo_ticket.nombre_tipo_ticket",fn:function({item:i}){return["Reporte fallas"==i.id_tipo_ticket.nombre_tipo_ticket?t(n["a"],{staticClass:"white--text",attrs:{color:"red",small:""}},[e._v(e._s(i.id_tipo_ticket.nombre_tipo_ticket))]):t(n["a"],{staticClass:"white--text",attrs:{color:"blue",small:""}},[e._v(e._s(i.id_tipo_ticket.nombre_tipo_ticket))])]}},{key:"item.id_tipo_trabajo.nombre_trabajo",fn:function({item:i}){return["Revision fisica"==i.id_tipo_trabajo.nombre_trabajo?t(n["a"],{staticClass:"white--text",attrs:{outlined:"",color:"red","x-small":""}},[e._v(e._s(i.id_tipo_trabajo.nombre_trabajo))]):t(n["a"],{staticClass:"white--text",attrs:{outlined:"",color:"blue","x-small":""}},[e._v(e._s(i.id_tipo_trabajo.nombre_trabajo))])]}},{key:"item.id_equipo",fn:function({item:i}){return[t("span",{staticClass:"text-caption"},[e._v(e._s(i.id_equipo))])]}},{key:"item.nombre_codigo",fn:function({item:i}){return[t("span",{staticClass:"text-caption"},[e._v(e._s(i.nombre_codigo))])]}},{key:"item.grupo",fn:function({item:i}){return[t("span",{staticClass:"text-caption"},[e._v(e._s(i.grupo))])]}},{key:"item.id_tipo_vehiculo.tipo_vehiculo",fn:function({item:i}){return[t("span",{staticClass:"text-caption"},[e._v(e._s(i.id_tipo_vehiculo.tipo_vehiculo))])]}},{key:"item.descripcion",fn:function({item:i}){return[t("span",{staticClass:"text-caption"},[e._v(e._s(i.descripcion))])]}},{key:"item.comentario_atc",fn:function({item:i}){return[t("span",{staticClass:"text-caption"},[e._v(e._s(i.comentario_atc))])]}},{key:"item.cumple_sla",fn:function({item:i}){return[t(p["a"],[e._v(" "+e._s(1==i.cumple_sla?"mdi-check":"mdi-alert-circle")+" ")])]}},{key:"item.status",fn:function({item:i}){return[1==i.status?t(n["a"],{attrs:{color:"success",small:""}},[e._v("Solucionado")]):e._e(),2==i.status?t(n["a"],{attrs:{color:"red",small:""}},[e._v("Vehiculo no disponible")]):e._e()]}}],null,!0)}),t(h["a"],{attrs:{persistent:"","max-width":"280"},model:{value:e.dialogInicio,callback:function(t){e.dialogInicio=t},expression:"dialogInicio"}},[t(s["a"],[t(k["a"],{staticClass:"text-center",attrs:{flat:"",color:"opcion1"}},[t(y["a"],{staticClass:"white--text text-center"},[t("strong",[e._v("Tickets por fechas")])])],1),t(c["b"],[t(m["a"],[t(f["a"],{ref:"menuFecha1",attrs:{"close-on-content-click":!1,"return-value":e.date,transition:"scale-transition","offset-y":"","min-width":"290px"},on:{"update:returnValue":function(t){e.date=t},"update:return-value":function(t){e.date=t}},scopedSlots:e._u([{key:"activator",fn:function({on:i,attrs:a}){return[t(b["a"],e._g(e._b({attrs:{label:"Desde","prepend-icon":"event",readonly:""},model:{value:e.fecha_inicio,callback:function(t){e.fecha_inicio=t},expression:"fecha_inicio"}},"v-text-field",a,!1),i))]}}]),model:{value:e.menuFecha1,callback:function(t){e.menuFecha1=t},expression:"menuFecha1"}},[t(u["a"],{attrs:{locale:"es","no-title":"",scrollable:""},on:{input:function(t){e.menuFecha1=!1}},model:{value:e.fecha_inicio,callback:function(t){e.fecha_inicio=t},expression:"fecha_inicio"}})],1)],1),t(m["a"],[t(f["a"],{ref:"menuFecha2",attrs:{"close-on-content-click":!1,"return-value":e.date,transition:"scale-transition","offset-y":"","min-width":"290px"},on:{"update:returnValue":function(t){e.date=t},"update:return-value":function(t){e.date=t}},scopedSlots:e._u([{key:"activator",fn:function({on:i,attrs:a}){return[t(b["a"],e._g(e._b({attrs:{label:"Hasta","prepend-icon":"event",readonly:""},model:{value:e.fecha_fin,callback:function(t){e.fecha_fin=t},expression:"fecha_fin"}},"v-text-field",a,!1),i))]}}]),model:{value:e.menuFecha2,callback:function(t){e.menuFecha2=t},expression:"menuFecha2"}},[t(u["a"],{attrs:{locale:"es","no-title":"",scrollable:""},on:{input:function(t){e.menuFecha2=!1}},model:{value:e.fecha_fin,callback:function(t){e.fecha_fin=t},expression:"fecha_fin"}})],1)],1),t(m["a"],{attrs:{"justify-center":"","d-flex":""}},[t(o["a"],{staticStyle:{"margin-right":"10px"},attrs:{color:"opcion2",dark:""},on:{click:function(t){return e.listar()}}},[e._v("Generar")]),t(o["a"],{staticStyle:{"margin-right":"10px"},on:{click:function(t){e.dialogInicio=!1}}},[e._v("Cancelar")])],1)],1)],1)],1),t(h["a"],{attrs:{persistent:"","max-width":"1000px"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[t(s["a"],[t(k["a"],{attrs:{color:"opcion1"}},[t(y["a"],{staticClass:"white--text"},[e._v(" "+e._s(e.formTitle)+" ")]),t(v["a"]),t(p["a"],{attrs:{dark:""},on:{click:function(t){e.dialog=!1}}},[e._v("mdi-close")])],1),t(c["b"],[t(r["a"],[t(g["a"],[t(l["a"],{attrs:{cols:"12",sm:"3",md:"3",lg:"3",xl:"2"}},[t(b["a"],{attrs:{"prepend-icon":"mdi-ticket-confirmation",label:"Numero Ticket"},model:{value:e.editedItem.numero_ticket,callback:function(t){e.$set(e.editedItem,"numero_ticket",t)},expression:"editedItem.numero_ticket"}})],1),t(l["a"],{attrs:{cols:"12",sm:"3",md:"3",lg:"3",xl:"2"}},[t(b["a"],{attrs:{"prepend-icon":"mdi-barcode",label:"ID equipo"},model:{value:e.editedItem.id_equipo,callback:function(t){e.$set(e.editedItem,"id_equipo",t)},expression:"editedItem.id_equipo"}})],1),t(l["a"],{attrs:{cols:"12",sm:"3",md:"3",lg:"3",xl:"2"}},[t(b["a"],{attrs:{"prepend-icon":"mdi-subtitles-outline",label:"Nombre - codigo"},model:{value:e.editedItem.nombre_codigo,callback:function(t){e.$set(e.editedItem,"nombre_codigo",t)},expression:"editedItem.nombre_codigo"}})],1),t(l["a"],{attrs:{cols:"12",sm:"3",md:"3",lg:"3",xl:"2"}},[t(b["a"],{attrs:{"prepend-icon":"mdi-tablet",label:"Placa"},model:{value:e.editedItem.placa,callback:function(t){e.$set(e.editedItem,"placa",t)},expression:"editedItem.placa"}})],1),t(l["a"],{attrs:{cols:"12",sm:"3",md:"3",lg:"3",xl:"2"}},[t(a["a"],{attrs:{items:e.items_grupos,label:"Grupo","item-value":"value","item-text":"text","persistent-hint":"","prepend-icon":"mdi-select-group",rules:[e.rules.required],"error-messages":e.errorMessages},model:{value:e.editedItem.grupo,callback:function(t){e.$set(e.editedItem,"grupo",t)},expression:"editedItem.grupo"}})],1),t(l["a"],{attrs:{cols:"12",sm:"3",md:"3",lg:"3",xl:"2"}},[t(I["a"],{attrs:{items:e.tiposVehiculosArray,"prepend-icon":"mdi-train-car",rules:[e.rules.required],"error-messages":e.errorMessages,label:"Tipo Vehiculo"},model:{value:e.editedItem.id_tipo_vehiculo,callback:function(t){e.$set(e.editedItem,"id_tipo_vehiculo",t)},expression:"editedItem.id_tipo_vehiculo"}})],1),t(l["a"],{attrs:{cols:"12",sm:"3",md:"3",lg:"3",xl:"2"}},[t(I["a"],{attrs:{items:e.tipoEquiposArray,"prepend-icon":"mdi-devices",rules:[e.rules.required],"error-messages":e.errorMessages,label:"Tipo Equipo Gps"},model:{value:e.editedItem.id_tipo_equipo,callback:function(t){e.$set(e.editedItem,"id_tipo_equipo",t)},expression:"editedItem.id_tipo_equipo"}})],1),t(l["a"],{attrs:{cols:"12",sm:"3",md:"3",lg:"3",xl:"2"}},[t(I["a"],{attrs:{items:e.tiposTicketsArray,"prepend-icon":"mdi-ticket-confirmation",rules:[e.rules.required],"error-messages":e.errorMessages,label:"Tipo Ticket"},model:{value:e.editedItem.id_tipo_ticket,callback:function(t){e.$set(e.editedItem,"id_tipo_ticket",t)},expression:"editedItem.id_tipo_ticket"}})],1),t(l["a"],{attrs:{cols:"12",sm:"3",md:"3",lg:"3",xl:"2"}},[t("v-datetime-picker",{attrs:{label:"Fecha Abierto Ticket"},model:{value:e.editedItem.fecha_reportado,callback:function(t){e.$set(e.editedItem,"fecha_reportado",t)},expression:"editedItem.fecha_reportado"}})],1),t(l["a"],{attrs:{cols:"12",sm:"8",md:"8",lg:"8",xl:"8"}},[t(b["a"],{attrs:{"prepend-icon":"mdi-comment",label:"Descripcion"},model:{value:e.editedItem.descripcion,callback:function(t){e.$set(e.editedItem,"descripcion",t)},expression:"editedItem.descripcion"}})],1),t(l["a"],{attrs:{cols:"12",sm:"3",md:"3",lg:"3",xl:"2"}},[t(I["a"],{attrs:{items:e.tiposTrabajosArray,"prepend-icon":"mdi-label",rules:[e.rules.required],"error-messages":e.errorMessages,label:"Tipo Trabajo"},model:{value:e.editedItem.id_tipo_trabajo,callback:function(t){e.$set(e.editedItem,"id_tipo_trabajo",t)},expression:"editedItem.id_tipo_trabajo"}})],1),-1!=e.editedIndex?t(l["a"],{attrs:{cols:"12",sm:"3",md:"3",lg:"3",xl:"2"}},[t(I["a"],{attrs:{clearable:!0,items:e.accionesCorrecionArray,"prepend-icon":"mdi-tools",rules:[e.rules.required],"error-messages":e.errorMessages,label:"Accion realizada"},model:{value:e.editedItem.accion_correcion,callback:function(t){e.$set(e.editedItem,"accion_correcion",t)},expression:"editedItem.accion_correcion"}})],1):e._e(),-1!=e.editedIndex?t(l["a"],{attrs:{cols:"4",sm:"4",md:"4",lg:"4",xl:"4"}},[t(I["a"],{attrs:{clearable:!0,items:e.etiquetasArray,"prepend-icon":"mdi-label",rules:[e.rules.required],"error-messages":e.errorMessages,label:"Etiqueta"},model:{value:e.editedItem.id_etiqueta,callback:function(t){e.$set(e.editedItem,"id_etiqueta",t)},expression:"editedItem.id_etiqueta"}})],1):e._e(),-1!=e.editedIndex?t(l["a"],{attrs:{cols:"12",sm:"4",md:"3",lg:"3",xl:"3"}},[t("v-datetime-picker",{attrs:{label:"Fecha Cierre Ticket"},model:{value:e.editedItem.fecha_solucion,callback:function(t){e.$set(e.editedItem,"fecha_solucion",t)},expression:"editedItem.fecha_solucion"}})],1):e._e(),t(l["a"],{attrs:{cols:"6",sm:"6",md:"6"}},[t(x["a"],{attrs:{"prepend-icon":"mdi-comment-account","clear-icon":"mdi-close-circle",rows:"1",label:"Comentario atc"},model:{value:e.editedItem.comentario_atc,callback:function(t){e.$set(e.editedItem,"comentario_atc",t)},expression:"editedItem.comentario_atc"}})],1),-1!=e.editedIndex?t(l["a"],{attrs:{cols:"6",sm:"6",md:"6"}},[t(x["a"],{attrs:{"prepend-icon":"mdi-comment","clear-icon":"mdi-close-circle",rows:"1",label:"Comentario tecnico"},model:{value:e.editedItem.comentario_tecnico,callback:function(t){e.$set(e.editedItem,"comentario_tecnico",t)},expression:"editedItem.comentario_tecnico"}})],1):e._e(),-1!=e.editedIndex?t(l["a"],{attrs:{cols:"12",sm:"3",md:"3",lg:"3",xl:"2"}},[t(I["a"],{attrs:{clearable:!0,items:e.tecnicosArray,"prepend-icon":"mdi-account",rules:[e.rules.required],"error-messages":e.errorMessages,label:"Tecnico"},model:{value:e.editedItem.id_tecnico,callback:function(t){e.$set(e.editedItem,"id_tecnico",t)},expression:"editedItem.id_tecnico"}})],1):e._e(),-1!=e.editedIndex?t(l["a"],{attrs:{cols:"12",sm:"3",md:"3",lg:"3",xl:"2"}},[t("v-datetime-picker",{attrs:{label:"Fecha llegada tecnico"},model:{value:e.editedItem.fecha_llegada_tenico,callback:function(t){e.$set(e.editedItem,"fecha_llegada_tenico",t)},expression:"editedItem.fecha_llegada_tenico"}})],1):e._e(),-1!=e.editedIndex?t(l["a"],{attrs:{cols:"12",sm:"3",md:"3",lg:"3",xl:"2"}},[t("v-datetime-picker",{attrs:{label:"Fecha Inicio Tecnico"},model:{value:e.editedItem.fecha_inicio_tenico,callback:function(t){e.$set(e.editedItem,"fecha_inicio_tenico",t)},expression:"editedItem.fecha_inicio_tenico"}})],1):e._e(),-1!=e.editedIndex?t(l["a"],{attrs:{cols:"12",sm:"3",md:"3",lg:"3",xl:"2"}},[t("v-datetime-picker",{attrs:{label:"Fecha Fin Tecnico"},model:{value:e.editedItem.fecha_fin_tecnico,callback:function(t){e.$set(e.editedItem,"fecha_fin_tecnico",t)},expression:"editedItem.fecha_fin_tecnico"}})],1):e._e(),-1!=e.editedIndex?t(l["a"],{attrs:{cols:"12",sm:"12",md:"12"}},[t("span",[t(p["a"],{staticClass:"mr-1"},[e._v("confirmation_number")]),t("strong",[e._v("Estado Ticket")])],1),t("br"),t("input",{directives:[{name:"model",rawName:"v-model",value:e.editedItem.status,expression:"editedItem.status"}],staticClass:"mt-2",attrs:{type:"radio"},domProps:{value:0,checked:e._q(e.editedItem.status,0)},on:{change:function(t){return e.$set(e.editedItem,"status",0)}}}),e._v(" Abierto "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.editedItem.status,expression:"editedItem.status"}],staticClass:"ml-2 mt-2",attrs:{type:"radio"},domProps:{value:1,checked:e._q(e.editedItem.status,1)},on:{change:function(t){return e.$set(e.editedItem,"status",1)}}}),e._v(" Solucionado "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.editedItem.status,expression:"editedItem.status"}],staticClass:"ml-2",attrs:{type:"radio"},domProps:{value:2,checked:e._q(e.editedItem.status,2)},on:{change:function(t){return e.$set(e.editedItem,"status",2)}}}),e._v(" En espera Vehiculo no disponible ")]):e._e()],1)],1)],1),t(c["a"],[t(v["a"]),t(o["a"],{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v("Cancelar")]),t(o["a"],{attrs:{color:"opcion2",dark:""},on:{click:e.save}},[e._v("Guardar")])],1)],1)],1),t(h["a"],{attrs:{"max-width":"500px"},model:{value:e.dialogDelete,callback:function(t){e.dialogDelete=t},expression:"dialogDelete"}},[t(s["a"],[t(c["c"],{staticClass:"text-h5"},[e._v("deseas deshabilitar Ticket?")]),t(c["a"],[t(v["a"]),t(o["a"],{attrs:{color:"blue darken-1",text:""},on:{click:e.closeDelete}},[e._v("Cancel")]),t(o["a"],{attrs:{color:"opcion1",text:""},on:{click:e.deleteItemConfirm}},[e._v("OK")]),t(v["a"])],1)],1)],1)],1)},T=[],S=(i("14d9"),i("cee4")),w=i("2f62"),q=i("c1df"),C=i.n(q),j={data:()=>({ticketsArray:[],search:"",dialogInicio:!1,dialog:!1,dialogDelete:!1,headers:[{text:"Numero ticket",value:"numero_ticket"},{text:"ID equipo",value:"id_equipo"},{text:"Nombre - codigo",value:"nombre_codigo"},{text:"Grupo",value:"grupo"},{text:"Tipo vehiculo",value:"id_tipo_vehiculo.tipo_vehiculo"},{text:"Tipo ticket",value:"id_tipo_ticket.nombre_tipo_ticket"},{text:"Fecha reportado",value:"fecha_reportado"},{text:"Tipo trabajo",value:"id_tipo_trabajo.nombre_trabajo"},{text:"Descripcion",value:"descripcion"},{text:"Comentario Atc",value:"comentario_atc"},{text:"Fecha Cerrado",value:"fecha_solucion"},{text:"Horas espera ticket",value:"horas_espera_ticket"},{text:"Cumple SLA",value:"cumple_sla"},{text:"Estatus",value:"status"},{text:"Accion correcion",value:"accion_correcion"},{text:"Etiqueta",value:"id_etiqueta.nombre_etiqueta"},{text:"Comentario tecnico",value:"comentario_tecnico"},{text:"llegada tecnico",value:"fecha_llegada_tenico"},{text:"Inicio tecnico",value:"fecha_inicio_tenico"},{text:"Fin tecnico",value:"fecha_fin_tecnico"},{text:"Horas espera tecnico",value:"horas_espera_tecnico"},{text:"Creado",value:"registrado"},{text:"Acciones",value:"actions",sortable:!1}],editedIndex:-1,items_grupos:[{value:"Maquinaria",text:"Maquinaria"},{value:"Maquinaria_Amarilla",text:"Maquinaria_Amarilla"},{value:"Autobuses",text:"Autobuses"},{value:"Cisternas",text:"Cisternas"},{value:"Motocicletas",text:"Motocicletas"},{value:"Otros",text:"Otros"}],accionesCorrecionArray:[{value:"Envio_comandos",text:"Envio comandos"},{value:"Revision_fisica",text:"Revision fisica"}],editedItem:{numero_ticket:"",id_equipo:"",nombre_codigo:"",placa:"",grupo:"",id_tipo_vehiculo:"",id_tipo_equipo:"",id_tipo_ticket:"",descripcion:"",fecha_reportado:new Date,id_tipo_trabajo:"",id_tecnico:"",accion_correcion:"",id_etiqueta:"",fecha_solucion:new Date,comentario_atc:"",comentario_tecnico:"",status:0,horas_espera_ticket:0,cumple_sla:1,fecha_llegada_tenico:new Date,fecha_inicio_tenico:new Date,fecha_fin_tecnico:new Date,horas_espera_tecnico:0,activo:1,creado:new Date},defaultItem:{numero_ticket:"",id_equipo:"",nombre_codigo:"",placa:"",grupo:"",id_tipo_vehiculo:"",id_tipo_equipo:"",id_tipo_ticket:"",descripcion:"",fecha_reportado:new Date,id_tipo_trabajo:"",id_tecnico:"",accion_correcion:"",id_etiqueta:"",fecha_solucion:new Date,comentario_atc:"",comentario_tecnico:"",status:0,horas_espera_ticket:0,cumple_sla:1,fecha_llegada_tenico:new Date,fecha_inicio_tenico:new Date,fecha_fin_tecnico:new Date,horas_espera_tecnico:0,activo:1,creado:new Date},errorMessages:"",valid:!0,rules:{min3Chars:e=>e.length>=3||"Min. 3 characters",required:e=>!!e||"Campo Requerido.",email:e=>{const t=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return t.test(e)||"Invalid e-mail."}},tiposVehiculosArray:[],tipoEquiposArray:[],tiposTicketsArray:[],tiposTrabajosArray:[],tecnicosArray:[],etiquetasArray:[],menu:!1,dialogInicio:!1,menuFecha1:!1,fecha_inicio:(new Date).toISOString().substr(0,10),menuFecha2:!1,fecha_fin:(new Date).toISOString().substr(0,10),date:(new Date).toISOString().substr(0,10),column_excel:[{label:"Numero ticket",field:"numero_ticket"},{label:"Id equipo",field:"id_equipo"},{label:"Nombre codigo",field:"nombre_codigo"},{label:"Placa",field:"placa"},{label:"Tipo vehiculo",field:"grupo"},{label:"Hora fin",field:"id_tipo_vehiculo.tipo_vehiculo"},{label:"Tipo ticket",field:"id_tipo_ticket.nombre_tipo_ticket"},{label:"Fecha reportado",field:"fecha_reportado_"},{label:"Tipo trabajo",field:"id_tipo_trabajo.nombre_trabajo"},{label:"Descripcion",field:"descripcion"},{label:"Comentario_atc",field:"comentario_atc"},{label:"Fecha cierre",field:"fecha_solucion_"},{label:"Comentario tecnico",field:"comentario_tecnico"},{label:"Etiqueta",field:"id_etiqueta.nombre_etiqueta"},{label:"Estatus",field:"status"},{label:"Horas espera ticket",field:"horas_espera_ticket"},{label:"Cumple SLA",field:"cumple_sla"},{label:"Fecha llegada tecnico",field:"fecha_llegada_tenico_"},{label:"Fecha inicio tecnico",field:"fecha_inicio_tenico_"},{label:"Fecha fin tecnico",field:"fecha_fin_tecnico_"},{label:"Horas espera tecnico",field:"horas_espera_tecnico"},{label:"Registrado",field:"registrado"}],select_tipo_Trabajo_ver:"",itemTipoTrabajoArray:[],arrayAllTickets:[]}),computed:{...Object(w["c"])(["usuario","token"]),formTitle(){return-1===this.editedIndex?"Nuevo Ticket":"Edicion Ticket"}},watch:{dialog(e){e||this.close()},dialogDelete(e){e||this.closeDelete()}},created(){let e=new Date;e.toLocaleString("en-US",{timeZone:"America/Managua"});let t=e.getDate();t<10&&(t="0"+t);let i=e.getMonth()+1;i<10&&(i="0"+i),"00"==t&&(t="01"),this.fecha_fin=e.getFullYear()+"-"+i+"-"+t,this.fecha_inicio=this.CalcularFechasemanaPasada(),this.listarTipoTrabajo(),this.listar(),this.listarTipoVehiculo(),this.listarTipoEquipos(),this.listarTipoTicket(),this.listarTecnicos(),this.listarEtiquetas()},methods:{...Object(w["b"])(["mostrarLoading","ocultarLoading"]),listarTipoVehiculo(){this.tiposVehiculosArray=[];let e={headers:{token:this.token}};this.mostrarLoading({titulo:"accediendo a datos"});let t=this;S["a"].get("tipovehiculos",e).then((function(e){let i=e.data;i.map((function(e){t.tiposVehiculosArray.push({text:e.tipo_vehiculo,value:e._id})})),t.ocultarLoading()})).catch((function(e){console.log(e)}))},listarTipoEquipos(){this.tipoEquiposArray=[];let e={headers:{token:this.token}};this.mostrarLoading({titulo:"accediendo a datos"});let t=this;S["a"].get("equipos",e).then((function(e){let i=e.data;i.map((function(e){t.tipoEquiposArray.push({text:e.nombre_equipo,value:e._id})})),t.ocultarLoading()})).catch((function(e){console.log(e)}))},listarTipoTicket(){this.tiposTicketsArray=[];let e={headers:{token:this.token}};this.mostrarLoading({titulo:"accediendo a datos"});let t=this;S["a"].get("tipotickets",e).then((function(e){let i=e.data;i.map((function(e){t.tiposTicketsArray.push({text:e.nombre_tipo_ticket,value:e._id})})),t.ocultarLoading()})).catch((function(e){console.log(e)}))},listarTipoTrabajo(){this.itemTipoTrabajoArray=[],this.itemTipoTrabajoArray.push({text:"Todos",value:1}),this.select_tipo_Trabajo_ver=1,this.tiposTrabajosArray=[];let e={headers:{token:this.token}};this.mostrarLoading({titulo:"accediendo a datos"});let t=this;S["a"].get("trabajos",e).then((function(e){let i=e.data;i.map((function(e){t.tiposTrabajosArray.push({text:e.nombre_trabajo,value:e._id}),t.itemTipoTrabajoArray.push({text:e.nombre_trabajo,value:e._id})})),t.ocultarLoading()})).catch((function(e){console.log(e)}))},listarTecnicos(){this.tecnicosArray=[];let e={headers:{token:this.token}};this.mostrarLoading({titulo:"accediendo a datos"});let t=this;S["a"].get("tecnicos",e).then((function(e){let i=e.data;i.map((function(e){t.tecnicosArray.push({text:e.nombre_tecnico,value:e._id})})),t.ocultarLoading()})).catch((function(e){console.log(e)}))},listarEtiquetas(){this.etiquetasArray=[];let e={headers:{token:this.token}};this.mostrarLoading({titulo:"accediendo a datos"});let t=this;S["a"].get("etiquetas",e).then((function(e){let i=e.data;i.map((function(e){t.etiquetasArray.push({text:e.nombre_etiqueta,value:e._id})})),t.ocultarLoading()})).catch((function(e){console.log(e)}))},listar(){this.arrayAllTickets=[],this.ticketsArray=[];let e={headers:{token:this.token}};this.mostrarLoading({titulo:"accediendo a datos"});let t=this;S["a"].post("tickets-fechas",{desde:new Date(this.fecha_inicio).toISOString().substr(0,10),hasta:new Date(this.fecha_fin).toISOString().substr(0,10)},e).then((function(e){let i=e.data;i.map((function(e){e.fecha_reportado_=t.getDate(e.fecha_reportado),e.fecha_solucion_=t.getDate(e.fecha_solucion),e.fecha_llegada_tenico&&""!=e.fecha_llegada_tenico?e.fecha_llegada_tenico_=t.getDate(e.fecha_llegada_tenico):(e.fecha_llegada_tenico="",e.fecha_llegada_tenico_=""),e.fecha_inicio_tenico&&""!=e.fecha_inicio_tenico?e.fecha_inicio_tenico_=t.getDate(e.fecha_inicio_tenico):(e.fecha_inicio_tenico_="",e.fecha_inicio_tenico=""),e.fecha_fin_tecnico&&""!=e.fecha_fin_tecnico?e.fecha_fin_tecnico_=t.getDate(e.fecha_fin_tecnico):(e.fecha_fin_tecnico_="",e.fecha_fin_tecnico=""),e.id_etiqueta&&e.id_etiqueta.nombre_etiqueta||(e.id_etiqueta={nombre_etiqueta:""}),t.arrayAllTickets.push(e),1!=t.select_tipo_Trabajo_ver&&e.id_tipo_trabajo._id!=t.select_tipo_Trabajo_ver||t.ticketsArray.push(e)})),t.dialogInicio=!1,t.ocultarLoading()})).catch((function(e){console.log(e)}))},FiltrarTiposTrabajos(){this.ticketsArray=[];let e=this;e.arrayAllTickets.map((function(t){1!=e.select_tipo_Trabajo_ver&&t.id_tipo_trabajo._id!=e.select_tipo_Trabajo_ver||e.ticketsArray.push(t)}))},editItem(e){console.log(e),this.editedIndex=this.ticketsArray.indexOf(e),this.editedItem=Object.assign({},e),console.log("indice:"+this.editedIndex),this.editedItem.id_tipo_vehiculo=e.id_tipo_vehiculo._id,this.editedItem.id_tipo_equipo=e.id_tipo_equipo._id,this.editedItem.id_tipo_ticket=e.id_tipo_ticket._id,this.editedItem.id_tipo_trabajo=e.id_tipo_trabajo._id,this.editedItem.fecha_reportado=new Date(e.fecha_reportado),e.fecha_llegada_tenico&&""!=e.fecha_llegada_tenico&&(this.editedItem.fecha_llegada_tenico=new Date(e.fecha_llegada_tenico)),e.fecha_inicio_tenico&&""!=e.fecha_inicio_tenico&&(this.editedItem.fecha_inicio_tenico=new Date(e.fecha_inicio_tenico)),e.fecha_fin_tecnico&&""!=e.fecha_fin_tecnico&&(this.editedItem.fecha_fin_tecnico=new Date(e.fecha_fin_tecnico)),e.fecha_solucion&&""!=e.fecha_solucion&&(this.editedItem.fecha_solucion=new Date(e.fecha_solucion)),this.dialog=!0},deleteItem(e){this.editedIndex=this.ticketsArray.indexOf(e),this.editedItem=Object.assign({},e),this.dialogDelete=!0},deleteItemConfirm(){let e=this.editedItem._id,t={headers:{token:this.token}};this.mostrarLoading({titulo:"accediendo a datos"}),S["a"].put("tickets/"+e,{activo:0},t).then(e=>{this.closeDelete(),this.ocultarLoading(),console.log(e),this.listar()}).catch(e=>{console.log(e)})},close(){this.dialog=!1,this.$nextTick(()=>{this.editedItem=Object.assign({},this.defaultItem),this.editedIndex=-1})},closeDelete(){this.dialogDelete=!1,this.$nextTick(()=>{this.editedItem=Object.assign({},this.defaultItem),this.editedIndex=-1})},save(){if(""!=this.editedItem.id_equipo&&""!=this.editedItem.nombre_codigo&&""!=this.editedItem.id_tipo_vehiculo&&""!=this.editedItem.id_tipo_ticket&&""!=this.editedItem.id_tipo_equipo&&""!=this.editedItem.id_tipo_trabajo)if(this.editedIndex>-1)if(""!=this.editedItem.accion_correcion&&""!=this.editedItem.fecha_solucion){let e=this.editedItem._id;this.mostrarLoading({titulo:"accediendo a datos"});let t={headers:{token:this.token}},i={numero_ticket:this.editedItem.numero_ticket,id_equipo:this.editedItem.id_equipo,nombre_codigo:this.editedItem.nombre_codigo,placa:this.editedItem.placa,grupo:this.editedItem.grupo,id_tipo_vehiculo:this.editedItem.id_tipo_vehiculo,id_tipo_equipo:this.editedItem.id_tipo_equipo,id_tipo_ticket:this.editedItem.id_tipo_ticket,descripcion:this.editedItem.descripcion,fecha_reportado:this.editedItem.fecha_reportado,id_tipo_trabajo:this.editedItem.id_tipo_trabajo,accion_correcion:this.editedItem.accion_correcion,comentario_atc:this.editedItem.comentario_atc,comentario_tecnico:this.editedItem.comentario_tecnico,status:this.editedItem.status,fecha_llegada_tenico:this.editedItem.fecha_llegada_tenico,fecha_inicio_tenico:this.editedItem.fecha_inicio_tenico,fecha_fin_tecnico:this.editedItem.fecha_fin_tecnico};if(""!=this.editedItem.id_tecnico&&(i.id_tecnico=this.editedItem.id_tecnico),console.log("etiqueta"),console.log(this.editedItem.id_etiqueta),null!=this.editedItem.id_etiqueta&&""!=this.editedItem.id_etiqueta.nombre_etiqueta?i.id_etiqueta=this.editedItem.id_etiqueta:i.id_etiqueta=null,""!=this.editedItem.fecha_solucion){i.fecha_solucion=this.editedItem.fecha_solucion;let e=C()(this.editedItem.fecha_reportado),t=C()(this.editedItem.fecha_solucion),a=t.diff(e);a/=1e3,a/=3600,parseFloat(a)>0&&(i.horas_espera_ticket=parseFloat(a).toFixed(2),parseFloat(a)>16?i.cumple_sla=0:i.cumple_sla=1)}if(""!=this.editedItem.fecha_llegada_tenico&&""!=this.editedItem.fecha_inicio_tenico){let e=C()(this.editedItem.fecha_llegada_tenico),t=C()(this.editedItem.fecha_inicio_tenico),a=t.diff(e);a/=1e3,a/=3600,parseFloat(a)>0&&(i.horas_espera_tecnico=parseFloat(a).toFixed(2))}S["a"].put("tickets/"+e,i,t).then(e=>{this.close(),this.ocultarLoading(),console.log(e),this.listar()}).catch(e=>{console.log(e)})}else alert("faltan campos de accion o fecha cerrada");else{let e={headers:{token:this.token}};this.mostrarLoading({titulo:"accediendo a datos"}),S["a"].post("nuevo-ticket",{numero_ticket:this.editedItem.numero_ticket,id_equipo:this.editedItem.id_equipo,nombre_codigo:this.editedItem.nombre_codigo,placa:this.editedItem.placa,grupo:this.editedItem.grupo,id_tipo_vehiculo:this.editedItem.id_tipo_vehiculo,id_tipo_equipo:this.editedItem.id_tipo_equipo,id_tipo_ticket:this.editedItem.id_tipo_ticket,descripcion:this.editedItem.descripcion,fecha_reportado:this.editedItem.fecha_reportado,id_tipo_trabajo:this.editedItem.id_tipo_trabajo,comentario_atc:this.editedItem.comentario_atc},e).then(e=>{this.close(),console.log(e),this.listar(),this.ocultarLoading()}).catch(e=>{console.log(e)})}else alert("faltan campos")},getDate(e){let t=new Date(e),i=t.getFullYear(),a=(t.getMonth()+1).toString(),o=1===a.length?"0"+a:a,s=t.getDate().toString(),c=1===s.length?"0"+s:s,n=t.getHours().toString(),l=1===n.length?"0"+n:n,r=t.getMinutes().toString(),d=1===r.length?"0"+r:r,u=t.getSeconds().toString(),h=1===u.length?"0"+u:u;return c+"-"+o+"-"+i+" "+l+":"+d+":"+h},CalcularFechasemanaPasada(){var e=new Date((new Date).valueOf()-432e6),t=e.getMonth()+1;t<10&&(t="0"+t);var i=e.getDate();i<10&&(i="0"+i);var a=e.getFullYear()+"-"+t+"-"+i;return a},IterarFechas(e,t){let i=[];if(new Date(e).toLocaleDateString()==new Date(t).toLocaleDateString())i.push(e),console.log("mismo dia");else{i.push(e);let c=!0,n=24;while(c){let l=new Date(e.getTime()+60*n*60*1e3);var a=l.getMonth()+1;a<10&&(a="0"+a);var o=l.getDate();o<10&&(o="0"+o);var s=l.getFullYear()+"-"+a+"-"+o;t.toISOString().slice(0,10)==new Date(s).toISOString().slice(0,10)||new Date(s).toISOString().slice(0,10)==(new Date).toISOString().slice(0,10)?c=!1:i.push(new Date(s+" 00:00:00")),n+=24}i.push(t)}return i}}},A=j,F=i("2877"),$=Object(F["a"])(A,D,T,!1,null,null,null);t["default"]=$.exports},a844:function(e,t,i){"use strict";i("1681");var a=i("8654"),o=i("58df");const s=Object(o["a"])(a["a"]);t["a"]=s.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:e=>!isNaN(parseFloat(e))},rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseInt(e,10))}},computed:{classes(){return{"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle,...a["a"].options.computed.classes.call(this)}},noResizeHandle(){return this.noResize||this.autoGrow}},watch:{autoGrow(e){this.$nextTick(()=>{var t;e?this.calculateInputHeight():null===(t=this.$refs.input)||void 0===t||t.style.removeProperty("height")})},lazyValue(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted(){setTimeout(()=>{this.autoGrow&&this.calculateInputHeight()},0)},methods:{calculateInputHeight(){const e=this.$refs.input;if(!e)return;e.style.height="0";const t=e.scrollHeight,i=parseInt(this.rows,10)*parseFloat(this.rowHeight);e.style.height=Math.max(i,t)+"px"},genInput(){const e=a["a"].options.methods.genInput.call(this);return e.tag="textarea",delete e.data.attrs.type,e.data.attrs.rows=this.rows,e},onInput(e){a["a"].options.methods.onInput.call(this,e),this.autoGrow&&this.calculateInputHeight()},onKeyDown(e){this.isFocused&&13===e.keyCode&&e.stopPropagation(),this.$emit("keydown",e)}}})},c6a6:function(e,t,i){"use strict";i("2bfd");var a=i("b974"),o=i("8654"),s=i("d9f7"),c=i("80d2");const n={...a["b"],offsetY:!0,offsetOverflow:!0,transition:!1};t["a"]=a["a"].extend({name:"v-autocomplete",props:{autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:(e,t,i)=>i.toLocaleLowerCase().indexOf(t.toLocaleLowerCase())>-1},hideNoData:Boolean,menuProps:{type:a["a"].options.props.menuProps.type,default:()=>n},noFilter:Boolean,searchInput:{type:String}},data(){return{lazySearch:this.searchInput}},computed:{classes(){return{...a["a"].options.computed.classes.call(this),"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1}},computedItems(){return this.filteredItems},selectedValues(){return this.selectedItems.map(e=>this.getValue(e))},hasDisplayedItems(){return this.hideSelected?this.filteredItems.some(e=>!this.hasItem(e)):this.filteredItems.length>0},currentRange(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems(){return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter(e=>{const t=Object(c["r"])(e,this.itemText),i=null!=t?String(t):"";return this.filter(e,String(this.internalSearch),i)})},internalSearch:{get(){return this.lazySearch},set(e){this.lazySearch!==e&&(this.lazySearch=e,this.$emit("update:search-input",e))}},isAnyValueAllowed(){return!1},isDirty(){return this.searchIsDirty||this.selectedItems.length>0},isSearching(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps(){const e=a["a"].options.computed.$_menuProps.call(this);return e.contentClass=("v-autocomplete__content "+(e.contentClass||"")).trim(),{...n,...e}},searchIsDirty(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem(){return this.multiple?null:this.selectedItems.find(e=>this.valueComparator(this.getValue(e),this.getValue(this.internalValue)))},listData(){const e=a["a"].options.computed.listData.call(this);return e.props={...e.props,items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch},e}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused(e){e?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive(e){!e&&this.hasSlot&&(this.lazySearch=null)},items(e,t){t&&t.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!e.length||this.activateMenu()},searchInput(e){this.lazySearch=e},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created(){this.setSearch()},destroyed(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged(e,t){if(e!==t){if(!this.autoSelectFirst){const i=t[this.$refs.menu.listIndex];i?this.setMenuIndex(e.findIndex(e=>e===i)):this.setMenuIndex(-1),this.$emit("update:list-index",this.$refs.menu.listIndex)}this.$nextTick(()=>{this.internalSearch&&(1===e.length||this.autoSelectFirst)&&(this.$refs.menu.getTiles(),this.autoSelectFirst&&e.length&&(this.setMenuIndex(0),this.$emit("update:list-index",this.$refs.menu.listIndex)))})}},onInternalSearchChanged(){this.updateMenuDimensions()},updateMenuDimensions(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex(e){this.searchIsDirty||(this.multiple&&e===c["x"].left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&e===c["x"].right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:e!==c["x"].backspace&&e!==c["x"].delete||this.deleteCurrentItem())},deleteCurrentItem(){const e=this.selectedIndex,t=this.selectedItems[e];if(!this.isInteractive||this.getDisabled(t))return;const i=this.selectedItems.length-1;if(-1===this.selectedIndex&&0!==i)return void(this.selectedIndex=i);const a=this.selectedItems.length,o=e!==a-1?e:e-1,s=this.selectedItems[o];s?this.selectItem(t):this.setValue(this.multiple?[]:null),this.selectedIndex=o},clearableCallback(){this.internalSearch=null,a["a"].options.methods.clearableCallback.call(this)},genInput(){const e=o["a"].options.methods.genInput.call(this);return e.data=Object(s["a"])(e.data,{attrs:{"aria-activedescendant":Object(c["p"])(this.$refs.menu,"activeTile.id"),autocomplete:Object(c["p"])(e.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),e},genInputSlot(){const e=a["a"].options.methods.genInputSlot.call(this);return e.data.attrs.role="combobox",e},genSelections(){return this.hasSlot||this.multiple?a["a"].options.methods.genSelections.call(this):[]},onClick(e){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(e.target)||this.activateMenu())},onInput(e){if(this.selectedIndex>-1||!e.target)return;const t=e.target,i=t.value;t.value&&this.activateMenu(),this.multiple||""!==i||this.deleteCurrentItem(),this.internalSearch=i,this.badInput=t.validity&&t.validity.badInput},onKeyDown(e){const t=e.keyCode;!e.ctrlKey&&[c["x"].home,c["x"].end].includes(t)||a["a"].options.methods.onKeyDown.call(this,e),this.changeSelectedIndex(t)},onSpaceDown(e){},onTabDown(e){a["a"].options.methods.onTabDown.call(this,e),this.updateSelf()},onUpDown(e){e.preventDefault(),this.activateMenu()},selectItem(e){a["a"].options.methods.selectItem.call(this,e),this.setSearch()},setSelectedItems(){a["a"].options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch(){this.$nextTick(()=>{this.multiple&&this.internalSearch&&this.isMenuActive||(this.internalSearch=!this.selectedItems.length||this.multiple||this.hasSlot?null:this.getText(this.selectedItem))})},updateSelf(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem(e){return this.selectedValues.indexOf(this.getValue(e))>-1},onCopy(e){var t,i;if(-1===this.selectedIndex)return;const a=this.selectedItems[this.selectedIndex],o=this.getText(a);null===(t=e.clipboardData)||void 0===t||t.setData("text/plain",o),null===(i=e.clipboardData)||void 0===i||i.setData("text/vnd.vuetify.autocomplete.item+plain",o),e.preventDefault()}}})}}]);
//# sourceMappingURL=chunk-2dd660da.6612276c.js.map