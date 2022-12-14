import{a as v,c as V,w as r,r as m,o,h as e,t as s,i,u as b,f as l,q as n,N as h,$ as p,k as _}from"./entry.7307fc4c.js";import{u as k}from"./stream.cbe555aa.js";import"./StatStripCard.vue_vue_type_style_index_0_scoped_b87ef05f_lang.ef632115.js";import"./composables.0bc75d07.js";const q={class:"flex justify-content-start align-items-center"},w={class:"material-icons-outlined text-grey text-3xl"},C={class:"ml-1"},S={class:"text-grey font-bold text-2xl font-bold"},j={key:0},$={key:1,class:"flex align-items-center align-content-center justify-content-around"},I={class:"flex flex-column align-items-center align-content-center justify-content-center mr-4"},B={class:"block text-grey font-bold mb-1 text-4xl"},Q={class:"text-center text-grey"},R={key:0,class:"flex flex-column align-items-center align-content-center justify-content-center ml-4"},D={class:"block text-grey font-bold mb-1 text-4xl"},N={class:"text-center text-grey"},F={key:0},T={class:"list-none p-0 m-0"},z={class:"flex justify-content-between align-items-center"},E={class:"font-medium text-queue"},G={class:"text-queue font-medium"},O={class:"bg-mid-light-grey w-full mt-2",style:{height:"7px","border-radius":"4px"}},A={class:"flex justify-content-between align-items-center"},H={class:"font-medium text-pubsub"},J={class:"text-pubsub font-medium"},K={class:"bg-mid-light-grey w-full mt-2",style:{height:"7px","border-radius":"4px"}},L={class:"flex justify-content-between align-items-center"},M={class:"font-medium text-cqrs"},P={class:"text-cqrs font-medium"},U={class:"bg-mid-light-grey w-full mt-2",style:{height:"7px","border-radius":"4px"}},W=v({__name:"StatCard",props:{modelValue:{type:Object,default:()=>({})},title:{type:String,default:""},icon:{type:String,default:""},showFooter:{type:Boolean,default:!1}},setup(t){const{isStreamReady:d}=k(),c=x=>{p(`/${x}`)};return(x,a)=>{const y=m("Divider"),u=m("Skeleton"),g=m("Card");return o(),V(g,{class:"shadow-none border-round-2xl kubemq-border-color border-1",style:{"min-height":"34vh"}},{title:r(()=>[e("div",q,[e("span",w,s(t.icon),1),e("div",C,[e("span",S,s(t.title),1)])]),i(y)]),content:r(()=>[b(d)?n("",!0):(o(),l("div",j,[i(u,{class:"mb-2",height:"6rem",borderRadius:"16px"}),i(u,{class:"mb-2 mt-6",height:"1rem",borderRadius:"16px"}),i(u,{class:"mb-2",height:"1rem",borderRadius:"16px"}),i(u,{class:"mb-2",height:"1rem",borderRadius:"16px"})])),b(d)?(o(),l("div",$,[e("div",I,[e("span",B,s(t.modelValue.primaryItemValue),1),e("span",Q,s(t.modelValue.primaryItemCaption),1)]),t.modelValue.secondaryItemValue?(o(),l("div",R,[e("span",D,s(t.modelValue.secondaryItemValue),1),e("span",N,s(t.modelValue.secondaryItemCaption),1)])):n("",!0)])):n("",!0)]),footer:r(()=>[t.showFooter&&b(d)?(o(),l("div",F,[e("ul",T,[t.modelValue.queues?(o(),l("li",{key:0,class:"mb-5 cursor-pointer",onClick:a[0]||(a[0]=f=>c("queues"))},[e("div",z,[e("span",E,s(t.modelValue.queues.title),1),e("span",G,s(t.modelValue.queues.caption)+" "+s(t.modelValue.queues.value),1)]),e("div",O,[e("div",{class:"bg-queue h-full",style:h([{"border-radius":"4px"},`width:${t.modelValue.queues.value};`])},null,4)])])):n("",!0),t.modelValue.pubsub?(o(),l("li",{key:1,class:"mb-5 cursor-pointer",onClick:a[1]||(a[1]=f=>c("pubsub"))},[e("div",A,[e("span",H,s(t.modelValue.pubsub.title),1),e("span",J,s(t.modelValue.pubsub.caption)+" "+s(t.modelValue.pubsub.value),1)]),e("div",K,[e("div",{class:"bg-pubsub h-full",style:h([{"border-radius":"4px"},`width:${t.modelValue.pubsub.value};`])},null,4)])])):n("",!0),t.modelValue.commandsQueries?(o(),l("li",{key:2,class:"cursor-pointer",onClick:a[2]||(a[2]=f=>c("cqrs"))},[e("div",L,[e("span",M,s(t.modelValue.commandsQueries.title),1),e("span",P,s(t.modelValue.commandsQueries.caption)+" "+s(t.modelValue.commandsQueries.value),1)]),e("div",U,[e("div",{class:"bg-cqrs h-full",style:h([{"border-radius":"4px"},`width:${t.modelValue.commandsQueries.value};`])},null,4)])])):n("",!0)])])):n("",!0)]),_:1})}}}),te=_(W,[["__scopeId","data-v-886b8b07"]]);export{te as default};
