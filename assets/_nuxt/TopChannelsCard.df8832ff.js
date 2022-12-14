import k from"./ActionButtons.c8f061f8.js";import{a as D,s as Q,Z as A,o as d,f as p,h as o,u as c,i as e,w as i,Q as E,t as y,l as g,$ as r,r as u,p as B,j as I,k as N}from"./entry.7307fc4c.js";import{c as R,u as j}from"./stream.cbe555aa.js";import"./StatStripCard.vue_vue_type_style_index_0_scoped_b87ef05f_lang.ef632115.js";import"./SendMessage.40c86465.js";import"./InputText.a5d51f5e.js";import"./composables.0bc75d07.js";import"./CodeEditor.a3b038a7.js";import"./InputNumber.432bd6c1.js";import"./request.fce72d22.js";import"./useToastMessage.47adc00c.js";import"./index.esm.ec6caf95.js";import"./queues_request.a3bea49d.js";import"./SendMessage.3473bbe6.js";import"./SendMessage.e97cd65c.js";import"./Field.vue_vue_type_script_setup_true_lang.0d667ec2.js";import"./DataField.vue_vue_type_script_setup_true_lang.9a1a6859.js";import"./cqrs_request.ce51b25c.js";import"./AddChannel.vue_vue_type_script_setup_true_lang.ccd0b81d.js";const V=l=>(B("data-v-4c4d0416"),l=l(),I(),l),K=V(()=>o("div",{class:"col-12 md:12"},[o("div",{class:"flex justify-content-start align-items-center border-bottom-1 border-light-grey pb-2"},[o("span",{class:"material-icons-outlined text-grey text-4xl"},"insights"),o("span",{class:"text-grey font-bold text-2xl font-bold ml-2"},"Top Active Channels")])],-1)),L={class:"col-12 md:12"},M={key:0},z={class:"white-space-nowrap overflow-hidden text-overflow-ellipsis"},P={key:1,class:"flex align-items-center justify-content-center",style:{height:"45vh"}},U=D({__name:"TopChannelsCard",setup(l){const m=Q();A();const{setActiveTab:n}=R(),{isStreamReady:h,setPubSubSelectedChannel:b,setQueuesSelectedChannelName:x,setCQRSSelectedChannel:_,dashboardData:v}=j(),C=t=>{switch(t){case"Queue":return"text-queue border-queue";case"Events-Store":return"text-pubsub border-pubsub";case"Events":return"text-pubsub border-pubsub";case"Commands":return"text-cqrs border-cqrs";case"Queries":return"text-cqrs border-cqrs";default:return"bg-gray-500"}},S=t=>{switch(t.data.type){case"Queue":x(t.data.channel),n(1),r("/queues/queue");break;case"Events-Store":b(t.data.channel,"events_store"),n(2),r("/pubsub/channel");break;case"Events":b(t.data.channel,"events"),n(2),r("/pubsub/channel");break;case"Commands":_(t.data.channel,"commands"),n(3),r("/cqrs/channel");break;case"Queries":_(t.data.channel,"queries"),n(3),r("/cqrs/channel");break}};return(t,f)=>{const a=u("Column"),w=u("Tag"),q=u("DataTable"),T=k;return d(),p("div",{class:g(["grid-nogutter grid col-12 p-3",c(h)?"":"div-disabled"])},[K,o("div",L,[c(h)&&c(v).topChannels.length>0?(d(),p("div",M,[e(q,{value:c(v).topChannels,responsiveLayout:"scroll",class:"p-datatable-sm",selection:m.value,"onUpdate:selection":f[0]||(f[0]=s=>m.value=s),selectionMode:"single",dataKey:"channelKey",onRowSelect:S},{default:i(()=>[e(a,{header:"#"},{body:i(({index:s})=>[E(y(s+1),1)]),_:1}),e(a,{field:"type",header:"Type",headerStyle:"width:12rem"},{body:i(({data:s})=>[o("div",null,[e(w,{class:g(["font-light pt-0 pb-0 pl-2 pr-2 bg-white border-1",C(s.type)]),value:s.type,rounded:!0},null,8,["class","value"])])]),_:1}),e(a,{field:"channel",header:"Channel",headerStyle:"width:25rem"},{body:i(({data:s})=>[o("div",z,y(s.channel),1)]),_:1}),e(a,{field:"lastActivity",header:"Last Activity"}),e(a,{field:"sent",header:"Sent (msg/vol)"}),e(a,{field:"delivered",header:"Delivered (msg/vol)"}),e(a,{field:"clients",header:"Clients"})]),_:1},8,["value","selection"])])):(d(),p("div",P,[e(T)]))])],2)}}}),ie=N(U,[["__scopeId","data-v-4c4d0416"]]);export{ie as default};
