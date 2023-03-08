(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0ad2f668"],{1681:function(e,t,i){},"2bfd":function(e,t,i){},a844:function(e,t,i){"use strict";i("1681");var a=i("8654"),s=i("58df");const o=Object(s["a"])(a["a"]);t["a"]=o.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:e=>!isNaN(parseFloat(e))},rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseInt(e,10))}},computed:{classes(){return{"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle,...a["a"].options.computed.classes.call(this)}},noResizeHandle(){return this.noResize||this.autoGrow}},watch:{autoGrow(e){this.$nextTick(()=>{var t;e?this.calculateInputHeight():null===(t=this.$refs.input)||void 0===t||t.style.removeProperty("height")})},lazyValue(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted(){setTimeout(()=>{this.autoGrow&&this.calculateInputHeight()},0)},methods:{calculateInputHeight(){const e=this.$refs.input;if(!e)return;e.style.height="0";const t=e.scrollHeight,i=parseInt(this.rows,10)*parseFloat(this.rowHeight);e.style.height=Math.max(i,t)+"px"},genInput(){const e=a["a"].options.methods.genInput.call(this);return e.tag="textarea",delete e.data.attrs.type,e.data.attrs.rows=this.rows,e},onInput(e){a["a"].options.methods.onInput.call(this,e),this.autoGrow&&this.calculateInputHeight()},onKeyDown(e){this.isFocused&&13===e.keyCode&&e.stopPropagation(),this.$emit("keydown",e)}}})},ac31:function(e,t,i){},bc2c:function(e,t,i){"use strict";i("ac31")},c6a6:function(e,t,i){"use strict";i("2bfd");var a=i("b974"),s=i("8654"),o=i("d9f7"),c=i("80d2");const n={...a["b"],offsetY:!0,offsetOverflow:!0,transition:!1};t["a"]=a["a"].extend({name:"v-autocomplete",props:{autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:(e,t,i)=>i.toLocaleLowerCase().indexOf(t.toLocaleLowerCase())>-1},hideNoData:Boolean,menuProps:{type:a["a"].options.props.menuProps.type,default:()=>n},noFilter:Boolean,searchInput:{type:String}},data(){return{lazySearch:this.searchInput}},computed:{classes(){return{...a["a"].options.computed.classes.call(this),"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1}},computedItems(){return this.filteredItems},selectedValues(){return this.selectedItems.map(e=>this.getValue(e))},hasDisplayedItems(){return this.hideSelected?this.filteredItems.some(e=>!this.hasItem(e)):this.filteredItems.length>0},currentRange(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems(){return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter(e=>{const t=Object(c["r"])(e,this.itemText),i=null!=t?String(t):"";return this.filter(e,String(this.internalSearch),i)})},internalSearch:{get(){return this.lazySearch},set(e){this.lazySearch!==e&&(this.lazySearch=e,this.$emit("update:search-input",e))}},isAnyValueAllowed(){return!1},isDirty(){return this.searchIsDirty||this.selectedItems.length>0},isSearching(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps(){const e=a["a"].options.computed.$_menuProps.call(this);return e.contentClass=("v-autocomplete__content "+(e.contentClass||"")).trim(),{...n,...e}},searchIsDirty(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem(){return this.multiple?null:this.selectedItems.find(e=>this.valueComparator(this.getValue(e),this.getValue(this.internalValue)))},listData(){const e=a["a"].options.computed.listData.call(this);return e.props={...e.props,items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch},e}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused(e){e?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive(e){!e&&this.hasSlot&&(this.lazySearch=null)},items(e,t){t&&t.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!e.length||this.activateMenu()},searchInput(e){this.lazySearch=e},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created(){this.setSearch()},destroyed(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged(e,t){if(e!==t){if(!this.autoSelectFirst){const i=t[this.$refs.menu.listIndex];i?this.setMenuIndex(e.findIndex(e=>e===i)):this.setMenuIndex(-1),this.$emit("update:list-index",this.$refs.menu.listIndex)}this.$nextTick(()=>{this.internalSearch&&(1===e.length||this.autoSelectFirst)&&(this.$refs.menu.getTiles(),this.autoSelectFirst&&e.length&&(this.setMenuIndex(0),this.$emit("update:list-index",this.$refs.menu.listIndex)))})}},onInternalSearchChanged(){this.updateMenuDimensions()},updateMenuDimensions(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex(e){this.searchIsDirty||(this.multiple&&e===c["x"].left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&e===c["x"].right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:e!==c["x"].backspace&&e!==c["x"].delete||this.deleteCurrentItem())},deleteCurrentItem(){const e=this.selectedIndex,t=this.selectedItems[e];if(!this.isInteractive||this.getDisabled(t))return;const i=this.selectedItems.length-1;if(-1===this.selectedIndex&&0!==i)return void(this.selectedIndex=i);const a=this.selectedItems.length,s=e!==a-1?e:e-1,o=this.selectedItems[s];o?this.selectItem(t):this.setValue(this.multiple?[]:null),this.selectedIndex=s},clearableCallback(){this.internalSearch=null,a["a"].options.methods.clearableCallback.call(this)},genInput(){const e=s["a"].options.methods.genInput.call(this);return e.data=Object(o["a"])(e.data,{attrs:{"aria-activedescendant":Object(c["p"])(this.$refs.menu,"activeTile.id"),autocomplete:Object(c["p"])(e.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),e},genInputSlot(){const e=a["a"].options.methods.genInputSlot.call(this);return e.data.attrs.role="combobox",e},genSelections(){return this.hasSlot||this.multiple?a["a"].options.methods.genSelections.call(this):[]},onClick(e){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(e.target)||this.activateMenu())},onInput(e){if(this.selectedIndex>-1||!e.target)return;const t=e.target,i=t.value;t.value&&this.activateMenu(),this.multiple||""!==i||this.deleteCurrentItem(),this.internalSearch=i,this.badInput=t.validity&&t.validity.badInput},onKeyDown(e){const t=e.keyCode;!e.ctrlKey&&[c["x"].home,c["x"].end].includes(t)||a["a"].options.methods.onKeyDown.call(this,e),this.changeSelectedIndex(t)},onSpaceDown(e){},onTabDown(e){a["a"].options.methods.onTabDown.call(this,e),this.updateSelf()},onUpDown(e){e.preventDefault(),this.activateMenu()},selectItem(e){a["a"].options.methods.selectItem.call(this,e),this.setSearch()},setSelectedItems(){a["a"].options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch(){this.$nextTick(()=>{this.multiple&&this.internalSearch&&this.isMenuActive||(this.internalSearch=!this.selectedItems.length||this.multiple||this.hasSlot?null:this.getText(this.selectedItem))})},updateSelf(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem(e){return this.selectedValues.indexOf(this.getValue(e))>-1},onCopy(e){var t,i;if(-1===this.selectedIndex)return;const a=this.selectedItems[this.selectedIndex],s=this.getText(a);null===(t=e.clipboardData)||void 0===t||t.setData("text/plain",s),null===(i=e.clipboardData)||void 0===i||i.setData("text/vnd.vuetify.autocomplete.item+plain",s),e.preventDefault()}}})},d464:function(e,t,i){"use strict";i.r(t);var a=i("c6a6"),s=i("8336"),o=i("b0af"),c=i("99d9"),n=i("cc20"),r=i("62ad"),d=i("a523"),l=i("8fea"),h=i("169a"),u=i("ce7e"),m=i("0e8f"),p=i("132d"),_=i("0fd9"),f=i("b974"),I=i("2fa4"),g=i("8654"),v=i("a844"),x=i("71d9"),b=i("2a7f"),k=function(){var e=this,t=e._self._c;return t(o["a"],[t(c["c"],[t(p["a"],{staticClass:"mx-2",attrs:{color:"opcion1"}},[e._v("mdi-ticket-confirmation")]),t("span",[e._v("Tickets abiertos")]),t(u["a"],{staticClass:"mx-2",attrs:{inset:"",vertical:""}}),t(m["a"],{staticClass:"mx-2",attrs:{xs5:"",sm4:"",md5:"",lg4:""}},[t(g["a"],{attrs:{"justify-center":"","append-icon":"mdi-magnify",label:"Busqueda","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),t(I["a"]),t(s["a"],{attrs:{color:"primary"},on:{click:function(t){e.dialog=!0}}},[t(p["a"],[e._v("mdi-plus-thick")])],1),t(s["a"],{staticClass:"mx-2",attrs:{color:"success"},on:{click:function(t){return e.listar()}}},[t(p["a"],[e._v("mdi-autorenew")])],1)],1),t(l["a"],{staticClass:"elevation-1 mt-5 mx-1",attrs:{headers:e.headers,items:e.ticketsArray,search:e.search,"sort-by":"fecha_reportado"},scopedSlots:e._u([{key:"item.actions",fn:function({item:i}){return[t(p["a"],{staticClass:"mr-2",attrs:{color:"green",small:""},on:{click:function(t){return e.editItem(i)}}},[e._v(" mdi-pencil ")]),t(p["a"],{attrs:{color:"red",small:""},on:{click:function(t){return e.deleteItem(i)}}},[e._v(" mdi-delete ")])]}},{key:"no-data",fn:function(){return[t(s["a"],{attrs:{color:"primary"},on:{click:function(t){return e.listar()}}},[e._v("Reset")])]},proxy:!0},{key:"item.fecha_reportado",fn:function({item:i}){return[t("span",{staticClass:"text-caption"},[e._v(e._s(e.getDate(i.fecha_reportado)))])]}},{key:"item.id_tipo_ticket.nombre_tipo_ticket",fn:function({item:i}){return["Reporte fallas"==i.id_tipo_ticket.nombre_tipo_ticket?t(n["a"],{staticClass:"white--text",attrs:{color:"red",small:""}},[e._v(e._s(i.id_tipo_ticket.nombre_tipo_ticket))]):t(n["a"],{staticClass:"white--text",attrs:{color:"blue",small:""}},[e._v(e._s(i.id_tipo_ticket.nombre_tipo_ticket))])]}},{key:"item.id_tipo_trabajo.nombre_trabajo",fn:function({item:i}){return["Revision fisica"==i.id_tipo_trabajo.nombre_trabajo?t(n["a"],{staticClass:"white--text",attrs:{outlined:"",color:"red","x-small":""}},[e._v(e._s(i.id_tipo_trabajo.nombre_trabajo))]):t(n["a"],{staticClass:"white--text",attrs:{outlined:"",color:"blue","x-small":""}},[e._v(e._s(i.id_tipo_trabajo.nombre_trabajo))])]}},{key:"item.id_equipo",fn:function({item:i}){return[t("span",{staticClass:"text-caption"},[e._v(e._s(i.id_equipo))])]}},{key:"item.nombre_codigo",fn:function({item:i}){return[t("span",{staticClass:"text-caption"},[e._v(e._s(i.nombre_codigo))])]}},{key:"item.grupo",fn:function({item:i}){return[t("span",{staticClass:"text-caption"},[e._v(e._s(i.grupo))])]}},{key:"item.id_tipo_vehiculo.tipo_vehiculo",fn:function({item:i}){return[t("span",{staticClass:"text-caption"},[e._v(e._s(i.id_tipo_vehiculo.tipo_vehiculo))])]}},{key:"item.descripcion",fn:function({item:i}){return[t("span",{staticClass:"text-caption"},[e._v(e._s(i.descripcion))])]}},{key:"item.comentario_atc",fn:function({item:i}){return[t("span",{staticClass:"text-caption"},[e._v(e._s(i.comentario_atc))])]}},{key:"item.cumple_sla",fn:function({item:i}){return[t(p["a"],[e._v(" "+e._s(1==i.cumple_sla?"mdi-check":"mdi-alert-circle")+" ")])]}},{key:"item.registrado",fn:function({item:i}){return[t("span",{staticClass:"text-caption"},[e._v(e._s(i.registrado))])]}}],null,!0)}),t("span",[t(p["a"],{attrs:{color:"red"}},[e._v("mdi-alert-circle")]),e._v("Ticket debera ser cerrado en cado de indisponiblidad del vehiculo maximo 16 hrs de abierto")],1),t(h["a"],{attrs:{"max-width":"1000px"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[t(o["a"],[t(x["a"],{attrs:{color:"opcion1"}},[t(b["a"],{staticClass:"white--text"},[e._v(" "+e._s(e.formTitle)+" ")]),t(I["a"]),t(p["a"],{attrs:{dark:""},on:{click:function(t){e.dialog=!1}}},[e._v("mdi-close")])],1),t(c["b"],[t(d["a"],[t(_["a"],[t(r["a"],{attrs:{cols:"12",sm:"3",md:"3",lg:"3",xl:"2"}},[t(g["a"],{attrs:{"prepend-icon":"mdi-barcode",label:"ID equipo"},model:{value:e.editedItem.id_equipo,callback:function(t){e.$set(e.editedItem,"id_equipo",t)},expression:"editedItem.id_equipo"}})],1),t(r["a"],{attrs:{cols:"12",sm:"3",md:"3",lg:"3",xl:"2"}},[t(g["a"],{attrs:{"prepend-icon":"mdi-subtitles-outline",label:"Nombre - codigo"},model:{value:e.editedItem.nombre_codigo,callback:function(t){e.$set(e.editedItem,"nombre_codigo",t)},expression:"editedItem.nombre_codigo"}})],1),t(r["a"],{attrs:{cols:"12",sm:"3",md:"3",lg:"3",xl:"2"}},[t(g["a"],{attrs:{"prepend-icon":"mdi-tablet",label:"Placa"},model:{value:e.editedItem.placa,callback:function(t){e.$set(e.editedItem,"placa",t)},expression:"editedItem.placa"}})],1),t(r["a"],{attrs:{cols:"12",sm:"3",md:"3",lg:"3",xl:"2"}},[t(a["a"],{attrs:{items:e.items_grupos,label:"Grupo","item-value":"value","item-text":"text","persistent-hint":"","prepend-icon":"mdi-select-group",rules:[e.rules.required],"error-messages":e.errorMessages},model:{value:e.editedItem.grupo,callback:function(t){e.$set(e.editedItem,"grupo",t)},expression:"editedItem.grupo"}})],1),t(r["a"],{attrs:{cols:"12",sm:"3",md:"3",lg:"3",xl:"2"}},[t(f["a"],{attrs:{items:e.tiposVehiculosArray,"prepend-icon":"mdi-train-car",rules:[e.rules.required],"error-messages":e.errorMessages,label:"Tipo Vehiculo"},model:{value:e.editedItem.id_tipo_vehiculo,callback:function(t){e.$set(e.editedItem,"id_tipo_vehiculo",t)},expression:"editedItem.id_tipo_vehiculo"}})],1),t(r["a"],{attrs:{cols:"12",sm:"3",md:"3",lg:"3",xl:"2"}},[t(f["a"],{attrs:{items:e.tipoEquiposArray,"prepend-icon":"mdi-devices",rules:[e.rules.required],"error-messages":e.errorMessages,label:"Tipo Equipo Gps"},model:{value:e.editedItem.id_tipo_equipo,callback:function(t){e.$set(e.editedItem,"id_tipo_equipo",t)},expression:"editedItem.id_tipo_equipo"}})],1),t(r["a"],{attrs:{cols:"12",sm:"3",md:"3",lg:"3",xl:"2"}},[t(f["a"],{attrs:{items:e.tiposTicketsArray,"prepend-icon":"mdi-ticket-confirmation",rules:[e.rules.required],"error-messages":e.errorMessages,label:"Tipo Ticket"},model:{value:e.editedItem.id_tipo_ticket,callback:function(t){e.$set(e.editedItem,"id_tipo_ticket",t)},expression:"editedItem.id_tipo_ticket"}})],1),t(r["a"],{attrs:{cols:"12",sm:"3",md:"3",lg:"3",xl:"2"}},[t("v-datetime-picker",{attrs:{label:"Fecha Abierto Ticket"},model:{value:e.editedItem.fecha_reportado,callback:function(t){e.$set(e.editedItem,"fecha_reportado",t)},expression:"editedItem.fecha_reportado"}})],1),t(r["a"],{attrs:{cols:"12",sm:"8",md:"8",lg:"8",xl:"8"}},[t(g["a"],{attrs:{"prepend-icon":"mdi-comment",label:"Descripcion"},model:{value:e.editedItem.descripcion,callback:function(t){e.$set(e.editedItem,"descripcion",t)},expression:"editedItem.descripcion"}})],1),t(r["a"],{attrs:{cols:"12",sm:"3",md:"3",lg:"3",xl:"2"}},[t(f["a"],{attrs:{items:e.tiposTrabajosArray,"prepend-icon":"mdi-label",rules:[e.rules.required],"error-messages":e.errorMessages,label:"Tipo Trabajo"},model:{value:e.editedItem.id_tipo_trabajo,callback:function(t){e.$set(e.editedItem,"id_tipo_trabajo",t)},expression:"editedItem.id_tipo_trabajo"}})],1),-1!=e.editedIndex?t(r["a"],{attrs:{cols:"12",sm:"3",md:"3",lg:"3",xl:"2"}},[t(f["a"],{attrs:{clearable:!0,items:e.accionesCorrecionArray,"prepend-icon":"mdi-tools",rules:[e.rules.required],"error-messages":e.errorMessages,label:"Accion realizada"},model:{value:e.editedItem.accion_correcion,callback:function(t){e.$set(e.editedItem,"accion_correcion",t)},expression:"editedItem.accion_correcion"}})],1):e._e(),-1!=e.editedIndex?t(r["a"],{attrs:{cols:"4",sm:"4",md:"4",lg:"4",xl:"4"}},[t(f["a"],{attrs:{clearable:!0,items:e.etiquetasArray,"prepend-icon":"mdi-label",rules:[e.rules.required],"error-messages":e.errorMessages,label:"Etiqueta"},model:{value:e.editedItem.id_etiqueta,callback:function(t){e.$set(e.editedItem,"id_etiqueta",t)},expression:"editedItem.id_etiqueta"}})],1):e._e(),-1!=e.editedIndex?t(r["a"],{attrs:{cols:"12",sm:"4",md:"3",lg:"3",xl:"3"}},[t("v-datetime-picker",{attrs:{label:"Fecha Cierre Ticket"},model:{value:e.editedItem.fecha_solucion,callback:function(t){e.$set(e.editedItem,"fecha_solucion",t)},expression:"editedItem.fecha_solucion"}})],1):e._e(),t(r["a"],{attrs:{cols:"6",sm:"6",md:"6"}},[t(v["a"],{attrs:{"prepend-icon":"mdi-comment-account","clear-icon":"mdi-close-circle",rows:"1",label:"Comentario atc"},model:{value:e.editedItem.comentario_atc,callback:function(t){e.$set(e.editedItem,"comentario_atc",t)},expression:"editedItem.comentario_atc"}})],1),-1!=e.editedIndex?t(r["a"],{attrs:{cols:"6",sm:"6",md:"6"}},[t(v["a"],{attrs:{"prepend-icon":"mdi-comment","clear-icon":"mdi-close-circle",rows:"1",label:"Comentario tecnico"},model:{value:e.editedItem.comentario_tecnico,callback:function(t){e.$set(e.editedItem,"comentario_tecnico",t)},expression:"editedItem.comentario_tecnico"}})],1):e._e(),-1!=e.editedIndex?t(r["a"],{attrs:{cols:"12",sm:"3",md:"3",lg:"3",xl:"2"}},[t(f["a"],{attrs:{clearable:!0,items:e.tecnicosArray,"prepend-icon":"mdi-account",rules:[e.rules.required],"error-messages":e.errorMessages,label:"Tecnico"},model:{value:e.editedItem.id_tecnico,callback:function(t){e.$set(e.editedItem,"id_tecnico",t)},expression:"editedItem.id_tecnico"}})],1):e._e(),-1!=e.editedIndex?t(r["a"],{attrs:{cols:"12",sm:"3",md:"3",lg:"3",xl:"2"}},[t("v-datetime-picker",{attrs:{label:"Fecha llegada tecnico"},model:{value:e.editedItem.fecha_llegada_tenico,callback:function(t){e.$set(e.editedItem,"fecha_llegada_tenico",t)},expression:"editedItem.fecha_llegada_tenico"}})],1):e._e(),-1!=e.editedIndex?t(r["a"],{attrs:{cols:"12",sm:"3",md:"3",lg:"3",xl:"2"}},[t("v-datetime-picker",{attrs:{label:"Fecha Inicio Tecnico"},model:{value:e.editedItem.fecha_inicio_tenico,callback:function(t){e.$set(e.editedItem,"fecha_inicio_tenico",t)},expression:"editedItem.fecha_inicio_tenico"}})],1):e._e(),-1!=e.editedIndex?t(r["a"],{attrs:{cols:"12",sm:"3",md:"3",lg:"3",xl:"2"}},[t("v-datetime-picker",{attrs:{label:"Fecha Fin Tecnico"},model:{value:e.editedItem.fecha_fin_tecnico,callback:function(t){e.$set(e.editedItem,"fecha_fin_tecnico",t)},expression:"editedItem.fecha_fin_tecnico"}})],1):e._e(),-1!=e.editedIndex?t(r["a"],{attrs:{cols:"12",sm:"12",md:"12"}},[t("span",[t(p["a"],{staticClass:"mr-1"},[e._v("confirmation_number")]),t("strong",[e._v("Estado Ticket")])],1),t("br"),t("input",{directives:[{name:"model",rawName:"v-model",value:e.editedItem.status,expression:"editedItem.status"}],staticClass:"mt-2",attrs:{type:"radio"},domProps:{value:0,checked:e._q(e.editedItem.status,0)},on:{change:function(t){return e.$set(e.editedItem,"status",0)}}}),e._v(" Abierto "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.editedItem.status,expression:"editedItem.status"}],staticClass:"ml-2 mt-2",attrs:{type:"radio"},domProps:{value:1,checked:e._q(e.editedItem.status,1)},on:{change:function(t){return e.$set(e.editedItem,"status",1)}}}),e._v(" Solucionado "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.editedItem.status,expression:"editedItem.status"}],staticClass:"ml-2",attrs:{type:"radio"},domProps:{value:2,checked:e._q(e.editedItem.status,2)},on:{change:function(t){return e.$set(e.editedItem,"status",2)}}}),e._v(" Cerrado Vehiculo no disponible ")]):e._e()],1)],1)],1),t(c["a"],[t(I["a"]),t(s["a"],{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v("Cancelar")]),t(s["a"],{attrs:{color:"opcion2",dark:""},on:{click:e.save}},[e._v("Guardar")])],1)],1)],1),t(h["a"],{attrs:{"max-width":"500px"},model:{value:e.dialogDelete,callback:function(t){e.dialogDelete=t},expression:"dialogDelete"}},[t(o["a"],[t(c["c"],{staticClass:"text-h5"},[e._v("deseas deshabilitar Ticket?")]),t(c["a"],[t(I["a"]),t(s["a"],{attrs:{color:"blue darken-1",text:""},on:{click:e.closeDelete}},[e._v("Cancel")]),t(s["a"],{attrs:{color:"opcion1",text:""},on:{click:e.deleteItemConfirm}},[e._v("OK")]),t(I["a"])],1)],1)],1)],1)},y=[],w=(i("14d9"),i("cee4")),D=i("2f62"),q=i("c1df"),S=i.n(q),C={data:()=>({ticketsArray:[],search:"",dialog:!1,dialogDelete:!1,headers:[{text:"Numero ticket",value:"numero_ticket"},{text:"ID equipo",value:"id_equipo"},{text:"Nombre - codigo",value:"nombre_codigo"},{text:"Grupo",value:"grupo"},{text:"Tipo vehiculo",value:"id_tipo_vehiculo.tipo_vehiculo"},{text:"Tipo ticket",value:"id_tipo_ticket.nombre_tipo_ticket"},{text:"Fecha reportado",value:"fecha_reportado"},{text:"Tipo trabajo",value:"id_tipo_trabajo.nombre_trabajo"},{text:"Descripcion",value:"descripcion"},{text:"Comentario Atc",value:"comentario_atc"},{text:"Horas espera ticket",value:"horas_espera_ticket"},{text:"Cumple SLA",value:"cumple_sla"},{text:"Acciones",value:"actions",sortable:!1},{text:"Creado",value:"registrado"}],editedIndex:-1,items_grupos:[{value:"Maquinaria",text:"Maquinaria"},{value:"Maquinaria_Amarilla",text:"Maquinaria_Amarilla"},{value:"Autobuses",text:"Autobuses"},{value:"Cisternas",text:"Cisternas"},{value:"Camionetas",text:"Camionetas"},{value:"Motocicletas",text:"Motocicletas"},{value:"Otros",text:"Otros"}],accionesCorrecionArray:[{value:"Envio_comandos",text:"Envio comandos"},{value:"Revision_fisica",text:"Revision fisica"},{value:"Otra",text:"otra"}],editedItem:{numero_ticket:"",id_equipo:"",nombre_codigo:"",placa:"",grupo:"",id_tipo_vehiculo:"",id_tipo_equipo:"",id_tipo_ticket:"",descripcion:"",fecha_reportado:new Date,id_tipo_trabajo:"",id_tecnico:"",accion_correcion:"",id_etiqueta:"",fecha_solucion:new Date,comentario_atc:"",comentario_tecnico:"",status:0,horas_espera_ticket:0,cumple_sla:1,fecha_llegada_tenico:new Date,fecha_inicio_tenico:new Date,fecha_fin_tecnico:new Date,horas_espera_tecnico:0,activo:1,creado:new Date},defaultItem:{numero_ticket:"",id_equipo:"",nombre_codigo:"",placa:"",grupo:"",id_tipo_vehiculo:"",id_tipo_equipo:"",id_tipo_ticket:"",descripcion:"",fecha_reportado:new Date,id_tipo_trabajo:"",id_tecnico:"",accion_correcion:"",id_etiqueta:"",fecha_solucion:new Date,comentario_atc:"",comentario_tecnico:"",status:0,horas_espera_ticket:0,cumple_sla:1,fecha_llegada_tenico:new Date,fecha_inicio_tenico:new Date,fecha_fin_tecnico:new Date,horas_espera_tecnico:0,activo:1,creado:new Date},errorMessages:"",valid:!0,rules:{min3Chars:e=>e.length>=3||"Min. 3 characters",required:e=>!!e||"Campo Requerido.",email:e=>{const t=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return t.test(e)||"Invalid e-mail."}},tiposVehiculosArray:[],tipoEquiposArray:[],tiposTicketsArray:[],tiposTrabajosArray:[],tecnicosArray:[],etiquetasArray:[]}),computed:{...Object(D["c"])(["usuario","token"]),formTitle(){return-1===this.editedIndex?"Nuevo Ticket":"Edicion Ticket"}},watch:{dialog(e){e||this.close()},dialogDelete(e){e||this.closeDelete()}},created(){this.listar(),this.listarTipoVehiculo(),this.listarTipoEquipos(),this.listarTipoTicket(),this.listarTipoTrabajo(),this.listarTecnicos(),this.listarEtiquetas()},methods:{...Object(D["b"])(["mostrarLoading","ocultarLoading"]),listarTipoVehiculo(){this.tiposVehiculosArray=[];let e={headers:{token:this.token}};this.mostrarLoading({titulo:"accediendo a datos"});let t=this;w["a"].get("tipovehiculos",e).then((function(e){let i=e.data;i.map((function(e){t.tiposVehiculosArray.push({text:e.tipo_vehiculo,value:e._id})})),t.ocultarLoading()})).catch((function(e){console.log(e)}))},listarTipoEquipos(){this.tipoEquiposArray=[];let e={headers:{token:this.token}};this.mostrarLoading({titulo:"accediendo a datos"});let t=this;w["a"].get("equipos",e).then((function(e){let i=e.data;i.map((function(e){t.tipoEquiposArray.push({text:e.nombre_equipo,value:e._id})})),t.ocultarLoading()})).catch((function(e){console.log(e)}))},listarTipoTicket(){this.tiposTicketsArray=[];let e={headers:{token:this.token}};this.mostrarLoading({titulo:"accediendo a datos"});let t=this;w["a"].get("tipotickets",e).then((function(e){let i=e.data;i.map((function(e){t.tiposTicketsArray.push({text:e.nombre_tipo_ticket,value:e._id})})),t.ocultarLoading()})).catch((function(e){console.log(e)}))},listarTipoTrabajo(){this.tiposTrabajosArray=[];let e={headers:{token:this.token}};this.mostrarLoading({titulo:"accediendo a datos"});let t=this;w["a"].get("trabajos",e).then((function(e){let i=e.data;i.map((function(e){t.tiposTrabajosArray.push({text:e.nombre_trabajo,value:e._id})})),t.ocultarLoading()})).catch((function(e){console.log(e)}))},listarTecnicos(){this.tecnicosArray=[];let e={headers:{token:this.token}};this.mostrarLoading({titulo:"accediendo a datos"});let t=this;w["a"].get("tecnicos",e).then((function(e){let i=e.data;i.map((function(e){t.tecnicosArray.push({text:e.nombre_tecnico,value:e._id})})),t.ocultarLoading()})).catch((function(e){console.log(e)}))},listarEtiquetas(){this.etiquetasArray=[];let e={headers:{token:this.token}};this.mostrarLoading({titulo:"accediendo a datos"});let t=this;w["a"].get("etiquetas",e).then((function(e){let i=e.data;i.map((function(e){t.etiquetasArray.push({text:e.nombre_etiqueta,value:e._id})})),t.ocultarLoading()})).catch((function(e){console.log(e)}))},listar(){this.ticketsArray=[];let e={headers:{token:this.token}};this.mostrarLoading({titulo:"accediendo a datos"});let t=this;w["a"].get("tickets-abiertos",e).then((function(e){let i=e.data;i.map((function(e){let i=S()(e.fecha_reportado),a=S()(new Date),s=a.diff(i);s/=1e3,s/=3600,parseFloat(s)>0&&(e.horas_espera_ticket=parseFloat(s).toFixed(2),parseFloat(s)>16?e.cumple_sla=0:e.cumple_sla=1),t.ticketsArray.push(e)})),t.ocultarLoading()})).catch((function(e){console.log(e)}))},editItem(e){console.log(e),this.editedIndex=this.ticketsArray.indexOf(e),this.editedItem=Object.assign({},e),console.log("indice:"+this.editedIndex),this.editedItem.id_tipo_vehiculo=e.id_tipo_vehiculo._id,this.editedItem.id_tipo_equipo=e.id_tipo_equipo._id,this.editedItem.id_tipo_ticket=e.id_tipo_ticket._id,this.editedItem.id_tipo_trabajo=e.id_tipo_trabajo._id,this.editedItem.fecha_reportado=new Date(e.fecha_reportado),e.fecha_llegada_tenico&&""!=e.fecha_llegada_tenico&&(this.editedItem.fecha_llegada_tenico=new Date(e.fecha_llegada_tenico)),e.fecha_inicio_tenico&&""!=e.fecha_inicio_tenico&&(this.editedItem.fecha_inicio_tenico=new Date(e.fecha_inicio_tenico)),e.fecha_fin_tecnico&&""!=e.fecha_fin_tecnico&&(this.editedItem.fecha_fin_tecnico=new Date(e.fecha_fin_tecnico)),e.fecha_solucion&&""!=e.fecha_solucion&&(this.editedItem.fecha_solucion=new Date(e.fecha_solucion)),this.dialog=!0},deleteItem(e){this.editedIndex=this.ticketsArray.indexOf(e),this.editedItem=Object.assign({},e),this.dialogDelete=!0},deleteItemConfirm(){let e=this.editedItem._id,t={headers:{token:this.token}};this.mostrarLoading({titulo:"accediendo a datos"}),w["a"].put("tickets/"+e,{activo:0},t).then(e=>{this.closeDelete(),this.ocultarLoading(),console.log(e),this.listar()}).catch(e=>{console.log(e)})},close(){this.dialog=!1,this.$nextTick(()=>{this.editedItem=Object.assign({},this.defaultItem),this.editedIndex=-1})},closeDelete(){this.dialogDelete=!1,this.$nextTick(()=>{this.editedItem=Object.assign({},this.defaultItem),this.editedIndex=-1})},save(){if(""!=this.editedItem.id_equipo&&""!=this.editedItem.nombre_codigo&&""!=this.editedItem.id_tipo_vehiculo&&""!=this.editedItem.id_tipo_ticket&&""!=this.editedItem.id_tipo_equipo&&""!=this.editedItem.id_tipo_trabajo)if(this.editedIndex>-1)if(0==this.editedItem.status||1==this.editedItem.status&&void 0!=this.editedItem.fecha_solucion){console.log(this.editedItem.fecha_solucion);let e=this.editedItem._id;this.mostrarLoading({titulo:"accediendo a datos"});let t={headers:{token:this.token}},i={id_equipo:this.editedItem.id_equipo,nombre_codigo:this.editedItem.nombre_codigo,placa:this.editedItem.placa,grupo:this.editedItem.grupo,id_tipo_vehiculo:this.editedItem.id_tipo_vehiculo,id_tipo_equipo:this.editedItem.id_tipo_equipo,id_tipo_ticket:this.editedItem.id_tipo_ticket,descripcion:this.editedItem.descripcion,fecha_reportado:this.editedItem.fecha_reportado,id_tipo_trabajo:this.editedItem.id_tipo_trabajo,accion_correcion:this.editedItem.accion_correcion,comentario_atc:this.editedItem.comentario_atc,comentario_tecnico:this.editedItem.comentario_tecnico,status:this.editedItem.status,fecha_llegada_tenico:this.editedItem.fecha_llegada_tenico,fecha_inicio_tenico:this.editedItem.fecha_inicio_tenico,fecha_fin_tecnico:this.editedItem.fecha_fin_tecnico};if(""!=this.editedItem.id_tecnico&&(i.id_tecnico=this.editedItem.id_tecnico),""!=this.editedItem.id_etiqueta&&(i.id_etiqueta=this.editedItem.id_etiqueta),""!=this.editedItem.fecha_solucion){i.fecha_solucion=this.editedItem.fecha_solucion;let e=S()(this.editedItem.fecha_reportado),t=S()(this.editedItem.fecha_solucion),a=t.diff(e);a/=1e3,a/=3600,console.log("horas espera ticket:"+a),i.horas_espera_ticket=parseFloat(a).toFixed(2),parseFloat(a)>16?i.cumple_sla=0:i.cumple_sla=1}if(""!=this.editedItem.fecha_llegada_tenico&&""!=this.editedItem.fecha_inicio_tenico){let e=S()(this.editedItem.fecha_llegada_tenico),t=S()(this.editedItem.fecha_inicio_tenico),a=t.diff(e);a/=1e3,a/=3600,parseFloat(a)>0&&(i.horas_espera_tecnico=parseFloat(a).toFixed(2))}w["a"].put("tickets/"+e,i,t).then(e=>{this.close(),this.ocultarLoading(),console.log(e),this.listar()}).catch(e=>{console.log(e)})}else alert("faltan campos de accion o fecha cerrada");else{let e={headers:{token:this.token}};this.mostrarLoading({titulo:"accediendo a datos"}),w["a"].post("nuevo-ticket",{id_equipo:this.editedItem.id_equipo,nombre_codigo:this.editedItem.nombre_codigo,placa:this.editedItem.placa,grupo:this.editedItem.grupo,id_tipo_vehiculo:this.editedItem.id_tipo_vehiculo,id_tipo_equipo:this.editedItem.id_tipo_equipo,id_tipo_ticket:this.editedItem.id_tipo_ticket,descripcion:this.editedItem.descripcion,fecha_reportado:this.editedItem.fecha_reportado,id_tipo_trabajo:this.editedItem.id_tipo_trabajo,comentario_atc:this.editedItem.comentario_atc,registrado:this.usuario.nombre_usuario+" a las:"+this.ConvertirFecha(new Date)},e).then(e=>{this.close(),console.log(e),this.listar(),this.ocultarLoading()}).catch(e=>{console.log(e)})}else alert("faltan campos")},getDate(e){let t=new Date(e),i=t.getFullYear(),a=(t.getMonth()+1).toString(),s=1===a.length?"0"+a:a,o=t.getDate().toString(),c=1===o.length?"0"+o:o,n=t.getHours().toString(),r=1===n.length?"0"+n:n,d=t.getMinutes().toString(),l=1===d.length?"0"+d:d,h=t.getSeconds().toString(),u=1===h.length?"0"+h:h;return c+"-"+s+"-"+i+" "+r+":"+l+":"+u},ConvertirFecha(e){let t=new Date(e).toLocaleDateString()+" "+new Date(e).toLocaleTimeString();return t}}},T=C,A=(i("bc2c"),i("2877")),$=Object(A["a"])(T,k,y,!1,null,null,null);t["default"]=$.exports}}]);
//# sourceMappingURL=chunk-0ad2f668.f03fdc84.js.map