import{u as i}from"./stream.cbe555aa.js";import{a as p,e as d,o as l,f as c,h as t,i as a,l as m,u,r as _,k as h}from"./entry.7307fc4c.js";import"./StatStripCard.vue_vue_type_style_index_0_scoped_b87ef05f_lang.ef632115.js";import{_ as f}from"./AddChannel.vue_vue_type_script_setup_true_lang.ccd0b81d.js";import b from"./SendMessage.40c86465.js";import"./composables.0bc75d07.js";import"./InputText.a5d51f5e.js";import"./index.esm.ec6caf95.js";import"./request.fce72d22.js";import"./useToastMessage.47adc00c.js";import"./CodeEditor.a3b038a7.js";import"./InputNumber.432bd6c1.js";import"./queues_request.a3bea49d.js";const v={class:"mr-2"},w={class:"ml-2"},x=p({__name:"ActionButtons",setup(C){const{isStreamReady:s,dashboardData:S}=i(),e=d(),n=()=>{e.open(f,{props:{header:"Add a Queue Channel",style:{width:"30vw"},breakpoints:{"960px":"75vw","640px":"90vw"},modal:!0},data:{channelType:1}})},r=()=>{e.open(b,{props:{header:"Send Queue Message",style:{width:"60vw"},breakpoints:{"960px":"75vw","640px":"90vw"},modal:!0},data:{isChannelSource:!1,channel:""}})};return(k,g)=>{const o=_("Button");return l(),c("div",{class:m(["flex",u(s)?"":"div-disabled"])},[t("div",v,[a(o,{label:"Send Message",onClick:r,class:"button-queue header-button button-hero",icon:"pi pi-send",style:{width:"12rem"}})]),t("div",w,[a(o,{label:"Add Channel",onClick:n,class:"button-queue header-button",icon:"pi pi-plus",style:{width:"12rem"}})])],2)}}}),T=h(x,[["__scopeId","data-v-a13b401f"]]);export{T as default};
