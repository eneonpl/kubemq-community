import{a as p,s as c,o as n,f as s,t as f,q as b,i as v,N as y,l as V,r as x,k as C}from"./entry.7307fc4c.js";import"./StatStripCard.vue_vue_type_style_index_0_scoped_b87ef05f_lang.ef632115.js";import"./stream.cbe555aa.js";import"./composables.0bc75d07.js";const _={key:0,class:"text-sm ml-1 font-medium"},g=p({__name:"InputDropbox",props:{label:String,modelValue:String,options:{type:Array,default:void 0},style:{type:String,default:void 0},disabled:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{expose:d,emit:i}){const l=e,t=c(l.modelValue);d({clear:o=>t.value=o||l.options[0].value});function m(o){i("update:modelValue",o.value)}return(o,a)=>{const u=x("Dropdown");return n(),s("div",{class:V(["flex flex-column",e.disabled?"div-disabled":""])},[e.label?(n(),s("label",_,f(e.label),1)):b("",!0),v(u,{modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=r=>t.value=r),options:e.options,optionLabel:"label",optionValue:"value",class:"mt-2",onChange:m,style:y(e.style)},null,8,["modelValue","options","style"])],2)}}}),N=C(g,[["__scopeId","data-v-5b41fb34"]]);export{N as default};
