import u from"./ActionButtons.d44386d2.js";import f from"./StatStripCard.60db0370.js";import{_ as h}from"./Channels.vue_vue_type_script_setup_true_lang.c44d198d.js";import{u as x}from"./stream.cbe555aa.js";import{a as b,e as v,f as s,h as t,u as e,i as r,t as y,q as g,p as k,j as S,o as n,r as C,k as q}from"./entry.7307fc4c.js";import"./StatStripCard.vue_vue_type_style_index_0_scoped_b87ef05f_lang.ef632115.js";import"./composables.0bc75d07.js";import"./AddChannel.vue_vue_type_script_setup_true_lang.ccd0b81d.js";import"./InputText.a5d51f5e.js";import"./index.esm.ec6caf95.js";import"./request.fce72d22.js";import"./useToastMessage.47adc00c.js";import"./SendMessage.e97cd65c.js";import"./InputNumber.432bd6c1.js";import"./CodeEditor.a3b038a7.js";import"./Field.vue_vue_type_script_setup_true_lang.0d667ec2.js";import"./DataField.vue_vue_type_script_setup_true_lang.9a1a6859.js";import"./cqrs_request.ce51b25c.js";import"./StatStripCardBox.9b7bff0f.js";const w=a=>(k("data-v-f2d4ba2f"),a=a(),S(),a),V={class:"flex flex-column container"},I={class:"flex justify-content-between"},B={class:"flex flex-column header-row"},D=w(()=>t("div",{class:"flex align-items-center mb-1"},[t("span",{class:"material-symbols-outlined mr-1 text-4xl"},"repartition"),t("span",{class:"text-4xl"},"Commands & Queries")],-1)),L={key:0},j={key:1,class:"flex"},A={key:0,class:"material-symbols-outlined text-cqrs mr-1 text-lg"},N={key:1,class:"material-symbols-outlined text-grey mr-1 text-lg"},R={class:"ml-1"},E={key:0,class:"flex justify-content-end align-items-center"},Q={class:"stats-row"},U={class:"flex-grow-1 channels-parent"},$={class:"bg-white border-round-2xl border-1 border-cqrs"},z=b({__name:"index",setup(a){const{cqrsData:o,isStreamReady:c}=x();return v(),(F,i)=>{const l=C("Skeleton"),_=u,d=f,m=h;return n(),s("div",V,[t("div",I,[t("div",B,[D,e(c)?(n(),s("div",j,[e(o).isActive?(n(),s("span",A,"radio_button_checked")):(n(),s("span",N,"radio_button_unchecked")),t("span",R,"Last Activity: "+y(e(o).lastSeen),1)])):(n(),s("div",L,[r(l,{height:"0.9rem",width:"13rem",borderRadius:"12px"})]))]),e(o).channelsList.length>0?(n(),s("div",E,[r(_)])):g("",!0)]),t("div",Q,[r(d,{items:e(o).stats.Items,"background-color":"bg-cqrs","border-color":"border-cqrs"},null,8,["items"])]),t("div",U,[t("div",$,[r(m,{modelValue:e(o).channelsList,"onUpdate:modelValue":i[0]||(i[0]=p=>e(o).channelsList=p)},null,8,["modelValue"])])])])}}});const it=q(z,[["__scopeId","data-v-f2d4ba2f"]]);export{it as default};
