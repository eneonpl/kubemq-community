import u from"./ActionButtons.28ebda64.js";import h from"./StatStripCard.60db0370.js";import{_ as x}from"./Channels.vue_vue_type_script_setup_true_lang.07a193b4.js";import{u as f}from"./stream.cbe555aa.js";import{a as v,e as b,f as s,h as e,u as t,i,t as y,q as g,p as k,j as S,o as n,r as w,k as q}from"./entry.7307fc4c.js";import"./StatStripCard.vue_vue_type_style_index_0_scoped_b87ef05f_lang.ef632115.js";import"./composables.0bc75d07.js";import"./AddChannel.vue_vue_type_script_setup_true_lang.ccd0b81d.js";import"./InputText.a5d51f5e.js";import"./index.esm.ec6caf95.js";import"./request.fce72d22.js";import"./useToastMessage.47adc00c.js";import"./SendMessage.40c86465.js";import"./CodeEditor.a3b038a7.js";import"./InputNumber.432bd6c1.js";import"./queues_request.a3bea49d.js";import"./StatStripCardBox.9b7bff0f.js";const C=a=>(k("data-v-03216e02"),a=a(),S(),a),V={class:"flex flex-column container"},I={class:"flex justify-content-between"},B={class:"flex flex-column header-row"},D=C(()=>e("div",{class:"flex align-items-center mb-1"},[e("span",{class:"material-symbols-outlined mr-1 text-4xl"},"calendar_view_week"),e("span",{class:"text-4xl"},"Queues")],-1)),L={key:0},j={key:1,class:"flex"},A={key:0,class:"material-symbols-outlined text-queue mr-1 text-lg"},N={key:1,class:"material-symbols-outlined text-grey mr-1 text-lg"},Q={class:"ml-1"},R={key:0,class:"flex justify-content-end align-items-center"},E={class:"stats-row"},U={class:"flex-grow-1 channels-parent"},$={class:"bg-white border-round-2xl border-1 border-queue"},z=v({__name:"index",setup(a){b();const{queuesData:o,isStreamReady:c}=f();return(F,r)=>{const l=w("Skeleton"),_=u,d=h,m=x;return n(),s("div",V,[e("div",I,[e("div",B,[D,t(c)?(n(),s("div",j,[t(o).isActive?(n(),s("span",A,"radio_button_checked")):(n(),s("span",N,"radio_button_unchecked")),e("span",Q,"Last Activity: "+y(t(o).lastSeen),1)])):(n(),s("div",L,[i(l,{height:"0.9rem",width:"13rem",borderRadius:"12px"})]))]),t(o).channelsList.length>0?(n(),s("div",R,[i(_)])):g("",!0)]),e("div",E,[i(d,{items:t(o).stats.Items,"background-color":"bg-queue","border-color":"border-queue"},null,8,["items"])]),e("div",U,[e("div",$,[i(m,{modelValue:t(o).channelsList,"onUpdate:modelValue":r[0]||(r[0]=p=>t(o).channelsList=p)},null,8,["modelValue"])])])])}}});const ae=q(z,[["__scopeId","data-v-03216e02"]]);export{ae as default};
