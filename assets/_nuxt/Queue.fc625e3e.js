import g from"./StatStripCard.60db0370.js";import{_ as k}from"./ChannelActions.vue_vue_type_script_setup_true_lang.053b1621.js";import{u as w}from"./useToastMessage.47adc00c.js";import{a as y,e as S,b as C,f as o,h as e,t as u,u as t,i as n,r as _,p as q,j as Q,o as a,k as B}from"./entry.7307fc4c.js";import{u as I}from"./stream.cbe555aa.js";import"./StatStripCard.vue_vue_type_style_index_0_scoped_b87ef05f_lang.ef632115.js";import{_ as M}from"./ClearQueue.vue_vue_type_script_setup_true_lang.ec57e7f4.js";import D from"./SendMessage.40c86465.js";import"./StatStripCardBox.9b7bff0f.js";import"./composables.0bc75d07.js";import"./ChannelReceive.ec2f02f2.js";import"./InputNumber.432bd6c1.js";import"./request.fce72d22.js";import"./queues_request.a3bea49d.js";import"./ReceivedMessage.vue_vue_type_script_setup_true_lang.0d343b85.js";import"./Field.vue_vue_type_script_setup_true_lang.0d667ec2.js";import"./DataField.vue_vue_type_script_setup_true_lang.9a1a6859.js";import"./ChannelStream.aec3567a.js";import"./Monitor.b147d523.js";import"./InputText.a5d51f5e.js";import"./Clients.vue_vue_type_script_setup_true_lang.b56898b2.js";import"./CodeEditor.a3b038a7.js";import"./index.esm.ec6caf95.js";const j=i=>(q("data-v-b1582d3a"),i=i(),Q(),i),A={class:"flex flex-column container"},N={class:"flex justify-content-between"},R={class:"flex flex-column header-row"},V=j(()=>e("span",{class:"material-symbols-outlined text-4xl mr-1"},"arrow_back",-1)),$={class:"text-3xl"},E={class:"ml-2"},L={key:0,class:"mb-2"},P={key:1,class:"flex"},T={key:0,class:"material-symbols-outlined text-queue mr-1 text-lg"},z={key:1,class:"material-symbols-outlined text-grey mr-1 text-lg"},F={class:"ml-1"},G={class:"flex justify-content-end align-items-center"},H={class:"mr-2"},J={class:"ml-2"},K={class:"stats-row"},O={class:"flex-grow-1 actions-parent"},U={class:"bg-white border-round-2xl border-1 border-queue flex"},W=y({__name:"Queue",setup(i){const r=S();w();const{queuesSelectedChannelData:l,queuesSelectedChannelName:s,isStreamReady:c}=I(),m=C(),p=()=>{r.open(M,{props:{header:"Clear all messages in channel: "+s.value,style:{width:"30vw"},breakpoints:{"960px":"75vw","640px":"90vw"},modal:!0},data:{channel:s.value}})},h=()=>{r.open(D,{props:{header:"Send Message Channel: "+s.value,style:{width:"60vw"},breakpoints:{"960px":"75vw","640px":"90vw"},modal:!0},data:{isChannelSource:!0,channel:s.value}})},b=()=>{m.back()};return(X,Y)=>{const v=_("Skeleton"),d=_("Button"),x=g,f=k;return a(),o("div",A,[e("div",N,[e("div",R,[e("div",{class:"header-line cursor-pointer mb-2",onClick:b},[V,e("span",$,"Queues / "+u(t(s)),1)]),e("div",E,[t(c)?(a(),o("div",P,[t(l).isActive?(a(),o("span",T,"radio_button_checked")):(a(),o("span",z,"radio_button_unchecked")),e("span",F,"Last Activity: "+u(t(l).lastSeen),1)])):(a(),o("div",L,[n(v,{height:"0.9rem",width:"13rem",borderRadius:"12px"})]))])]),e("div",G,[e("div",H,[n(d,{label:"Send Message",class:"button-queue bg-white",icon:"pi pi-send",onClick:h,disabled:!t(c),style:{"min-width":"12rem"}},null,8,["disabled"])]),e("div",J,[n(d,{label:"Clear Queue",class:"button-queue bg-white",icon:"pi pi-trash",onClick:p,disabled:!t(c),style:{"min-width":"12rem"}},null,8,["disabled"])])])]),e("div",K,[n(x,{items:t(l).stats.Items,"background-color":"bg-queue","border-color":"border-queue"},null,8,["items"])]),e("div",O,[e("div",U,[n(f,{channel:t(s),clients:t(l).channel.clients},null,8,["channel","clients"])])])])}}});const we=B(W,[["__scopeId","data-v-b1582d3a"]]);export{we as default};
