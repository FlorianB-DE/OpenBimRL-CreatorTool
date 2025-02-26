import{d as R,c as q,o as d,a as n,b as m,w as C,e as t,f as v,v as I,F as y,r as w,t as g,R as S,p as M,g as x,_ as V,u as c,h as z,i as G,j as H,k as B,l as ee,m as te,n as $,q as D,s as J,B as X,x as Y,y as W,z as Z,T as se,A as le,C as O,D as j,E as ae,G as oe,H as re,I as A,J as T,N as de,K as ne,L as ue,M as ie,O as pe}from"./index-Dq24nOfW.js";import{_ as E}from"./InputField.vue_vue_type_script_setup_true_lang-CKcRoFk_.js";const F=p=>(M("data-v-68ee5edf"),p=p(),x(),p),ce={class:"result_set-form"},fe=F(()=>t("p",null,[t("span",{class:"text-xl"}," Edit RuleSet ")],-1)),me=F(()=>t("span",null,"Name",-1)),be={class:"flex gap-2"},he={class:"flex w-full rounded overflow-hidden border dark:border-default-medium"},ve=F(()=>t("label",{class:"p-2 text-sm cursor-text select-none bg-default-light border-r border-inherit dark:bg-default-dark",for:"rule-form-operator-select"},[t("span",null,"Elements")],-1)),_e=["value"],ke={class:"flex w-full rounded overflow-hidden border dark:border-default-medium"},Se=F(()=>t("label",{class:"p-2 text-sm cursor-text select-none bg-default-light border-r border-inherit dark:bg-default-dark",for:"rule-form-operator-select"},[t("span",null,"Filter")],-1)),$e=["value"],ge=R({__name:"ResultSetForm",props:{resultSet:{},subChecks:{},graphNodes:{}},setup(p){const r=p,l=q(()=>{const u=[];return r.subChecks.forEach(o=>u.push(...e(o.rulesOrRuleSets))),u}),e=u=>{const o=[];return u.forEach(a=>{switch(a.type){case S.RULE:o.push(a);break;case S.RULESET:o.push(...e(a.rulesOrRuleSets));break}}),o};return(u,o)=>(d(),n("div",ce,[fe,m(E,{modelValue:u.resultSet.name,"onUpdate:modelValue":o[0]||(o[0]=a=>u.resultSet.name=a)},{default:C(()=>[me]),_:1},8,["modelValue"]),t("div",be,[t("div",he,[ve,v(t("select",{"onUpdate:modelValue":o[1]||(o[1]=a=>u.resultSet.elements=a),class:"w-full pl-1 bg-default-light dark:bg-default-dark focus-visible:outline-none",id:"rule-form-operator-select"},[(d(!0),n(y,null,w(u.graphNodes.filter(a=>a.type==="ruleIdentifier"),a=>{var i,s;return d(),n("option",{value:(i=a.data)==null?void 0:i.label,key:a.id},g((s=a.data)==null?void 0:s.label),9,_e)}),128))],512),[[I,u.resultSet.elements]])]),t("div",ke,[Se,v(t("select",{"onUpdate:modelValue":o[2]||(o[2]=a=>u.resultSet.filter=a),class:"w-full pl-1 bg-default-light dark:bg-default-dark focus-visible:outline-none",id:"rule-form-operator-select"},[(d(!0),n(y,null,w(l.value,(a,i)=>(d(),n("option",{value:a.label,key:i},g(a.label),9,$e))),128))],512),[[I,u.resultSet.filter]])])])]))}}),ye=V(ge,[["__scopeId","data-v-68ee5edf"]]),U=p=>(M("data-v-5916f832"),p=p(),x(),p),we={class:"rule-form"},Re=U(()=>t("p",null,[t("span",{class:"text-xl"},"Edit Rule")],-1)),Ce=U(()=>t("span",null,"Label",-1)),Ee={class:"flex gap-2"},Ve={class:"flex w-full rounded overflow-hidden border dark:border-default-medium"},Ue=U(()=>t("label",{class:"p-2 text-sm cursor-text select-none bg-default-light border-r border-inherit dark:bg-default-dark",for:"rule-form-operator-select"},[t("span",null,"Quantifier")],-1)),Ne=["value"],Ie={class:"flex w-full rounded overflow-hidden border dark:border-default-medium"},Oe=U(()=>t("label",{class:"p-2 text-sm cursor-text select-none bg-default-light border-r border-inherit dark:bg-default-dark",for:"rule-form-operator-select"},[t("span",null,"Operator")],-1)),Ae=["value"],Te={class:"flex gap-2"},Le=U(()=>t("span",null,"Operand 1",-1)),Me=U(()=>t("span",null,"Operand 2",-1)),xe=R({__name:"RuleForm",props:{rule:{}},setup(p){return(r,l)=>(d(),n("div",we,[Re,m(E,{modelValue:r.rule.label,"onUpdate:modelValue":l[0]||(l[0]=e=>r.rule.label=e)},{default:C(()=>[Ce]),_:1},8,["modelValue"]),t("div",Ee,[t("div",Ve,[Ue,v(t("select",{"onUpdate:modelValue":l[1]||(l[1]=e=>r.rule.quantifier=e),class:"w-full pl-1 bg-default-light dark:bg-default-dark focus-visible:outline-none",id:"rule-form-operator-select"},[(d(!0),n(y,null,w(c(z),(e,u)=>(d(),n("option",{value:e,key:e},g(u),9,Ne))),128))],512),[[I,r.rule.quantifier]])]),t("div",Ie,[Oe,v(t("select",{"onUpdate:modelValue":l[2]||(l[2]=e=>r.rule.operator=e),class:"w-full pl-1 bg-default-light dark:bg-default-dark focus-visible:outline-none",id:"rule-form-operator-select"},[(d(!0),n(y,null,w(c(G),(e,u)=>(d(),n("option",{value:e,key:e},g(u),9,Ae))),128))],512),[[I,r.rule.operator]])])]),t("div",Te,[m(E,{modelValue:r.rule.operand1,"onUpdate:modelValue":l[3]||(l[3]=e=>r.rule.operand1=e)},{default:C(()=>[Le]),_:1},8,["modelValue"]),m(E,{modelValue:r.rule.operand2,"onUpdate:modelValue":l[4]||(l[4]=e=>r.rule.operand2=e)},{default:C(()=>[Me]),_:1},8,["modelValue"])])]))}}),Fe=V(xe,[["__scopeId","data-v-5916f832"]]),K=p=>(M("data-v-4a0b92ab"),p=p(),x(),p),Be={class:"rule_set-form"},De=K(()=>t("p",null,[t("span",{class:"text-xl"}," Edit RuleSet ")],-1)),qe=K(()=>t("span",null,"Label",-1)),je={class:"flex w-full rounded overflow-hidden border dark:border-default-medium"},Ke=K(()=>t("label",{class:"p-2 text-sm cursor-text select-none bg-default-light border-r border-inherit dark:bg-default-dark",for:"rule-form-operator-select"},[t("span",null,"Operator")],-1)),Pe=["value"],Qe=R({__name:"RuleSetForm",props:{ruleSet:{}},setup(p){return(r,l)=>(d(),n("div",Be,[De,m(E,{modelValue:r.ruleSet.label,"onUpdate:modelValue":l[0]||(l[0]=e=>r.ruleSet.label=e)},{default:C(()=>[qe]),_:1},8,["modelValue"]),t("div",je,[Ke,v(t("select",{"onUpdate:modelValue":l[1]||(l[1]=e=>r.ruleSet.operator=e),class:"w-full pl-1 bg-default-light dark:bg-default-dark focus-visible:outline-none",id:"rule-form-operator-select"},[(d(!0),n(y,null,w(c(H),(e,u)=>(d(),n("option",{value:e,key:e},g(u),9,Pe))),128))],512),[[I,r.ruleSet.operator]])])]))}}),ze=V(Qe,[["__scopeId","data-v-4a0b92ab"]]),Ge=["onClick"],He=["onDblclick","onClick"],Je=["onClick"],Xe=["onClick"],Ye={key:0},We=R({__name:"TreeNode",props:{nodes:{},data:{},parent:{}},emits:["select"],setup(p,{emit:r}){const l=p,e=B(new Array),u=s=>{s.state.expanded=!s.state.expanded,!s.state.expanded&&r("select",s.id)},o=()=>structuredClone({label:"new Rule",operand1:"",operand2:"",operator:G.EQUALS,quantifier:z.EXISTS,type:S.RULE}),a=s=>{const b=l.data[s];ae(b)?b.rulesOrRuleSets.push(o()):oe(b)&&(l.data[s]={label:"new Rule Set",operator:H.OR,rulesOrRuleSets:[b],type:S.RULESET})},i=q(()=>l.data.map((s,b)=>{var P,Q;const k=re(s),f=`${k}_${A()}`;(P=l.parent)==null||P.nodes.push(f);const _=e.value[b]||T({expanded:!1,hover:!1,selected:!1});e.value[b]=_;const h={addable:[S.RULESET,de.SUB_CHECK,S.RULE].includes(k),id:f,nodes:T(new Array),path:[...((Q=l.parent)==null?void 0:Q.path)||[],f],selectable:!0,state:_,text:s.name||s.label||k,data:s,type:k};return l.nodes.set(f,h),h}));return ee(()=>i.value.forEach(s=>l.nodes.delete(s.id))),(s,b)=>{const k=te("TreeNode",!0);return d(),n("ul",null,[(d(!0),n(y,null,w(i.value,(f,_)=>(d(),n("li",{key:_},[t("p",null,[t("button",{onClick:h=>u(f),class:"w-4"},[v((d(),D(J(f.state.expanded?c(X):c(Y)),{class:"inline-block"},null,512)),[[$,f.nodes.length]])],8,Ge),t("span",{class:W({hover:f.state.hover,"text-default-contrast":f.state.selected}),onDblclick:h=>u(f),onClick:h=>{f.selectable&&s.$emit("select",f.id)}},g(f.text),43,He),v(t("button",{onClick:h=>a(_)},[m(c(Z),{class:"inline-block w-4"})],8,Je),[[$,f.addable]]),t("button",{onClick:h=>s.data.splice(_,1)},[m(c(se),{class:"inline-block w-4"})],8,Xe)]),c(le)(s.data[_])?(d(),n("div",Ye,[v(m(L,O({nodes:s.nodes,data:s.data[_].applicability,parent:f,header:"Applicability"},{onSelect:b[0]||(b[0]=h=>s.$emit("select",h)),onAdd:h=>s.data[_].applicability.push(o()),class:"ml-4"}),null,16,["onAdd"]),[[$,f.state.expanded]]),v(m(L,O({nodes:s.nodes,data:s.data[_].rulesOrRuleSets,parent:f,header:"Rules and Rule Sets"},{onSelect:b[1]||(b[1]=h=>s.$emit("select",h)),onAdd:h=>s.data[_].rulesOrRuleSets.push(o()),class:"ml-4"}),null,16,["onAdd"]),[[$,f.state.expanded]])])):f.type===c(S).RULESET?v((d(),D(k,O({key:1},{nodes:s.nodes,data:s.data[_].rulesOrRuleSets,parent:f},{onSelect:b[2]||(b[2]=h=>s.$emit("select",h)),class:"ml-4"}),null,16)),[[$,f.state.expanded]]):j("",!0)]))),128))])}}}),Ze=V(We,[["__scopeId","data-v-afbd03a7"]]),et={key:0},tt={class:"w-4"},st=R({__name:"CategoryNode",props:{nodes:{},data:{},parent:{},header:{},open:{type:Boolean}},emits:["select","add"],setup(p){var u;const r=p,l=`${r.header}_${A()}`;r.nodes.set(l,{addable:!0,id:l,text:r.header,nodes:T(new Array),path:[...((u=r.parent)==null?void 0:u.path)||[],l],selectable:!1,type:"CATEGORY",state:{expanded:r.open||!1,hover:!1,selected:!1}}),ne(()=>{var o;return(o=r.parent)==null?void 0:o.nodes.push(l)});const e=q(()=>r.nodes.get(l));return(o,a)=>e.value?(d(),n("li",et,[t("p",{onClick:a[1]||(a[1]=i=>e.value.state.expanded=!e.value.state.expanded)},[t("button",tt,[v((d(),D(J(e.value.state.expanded?c(X):c(Y)),{class:"inline-block"},null,512)),[[$,o.data.length]])]),t("span",{class:W({hover:e.value.state.hover,"text-default-contrast":e.value.state.selected})},g(o.header),3),v(t("button",{onClick:a[0]||(a[0]=ue(i=>{o.$emit("add"),e.value.state.expanded=!0},["stop"]))},[m(c(Z),{class:"inline-block w-4"})],512),[[$,e.value.addable]])]),v(m(Ze,O({nodes:o.nodes,data:o.data,parent:e.value},{onSelect:a[2]||(a[2]=i=>o.$emit("select",i)),class:"ml-4"}),null,16),[[$,e.value.state.expanded]])])):j("",!0)}}),L=V(st,[["__scopeId","data-v-7fad5f2d"]]),lt=R({__name:"Tree",props:{data:{}},emits:["select"],setup(p,{expose:r,emit:l}){const e=T(new Map),u=()=>{e.forEach(a=>{a.state.selected=!1})},o=a=>{if(u(),!a)l("select",null);else{const i=e.get(a);if(!i)throw new Error("Node not found");i.state.selected=!0,l("select",i)}};return r({selectNode:o,deselectAll:u,nodeStateMap:e}),(a,i)=>(d(),n("div",null,[t("ul",null,[m(L,{data:a.data.subChecks,header:"Sub Checks",nodes:e,open:!0,onSelect:i[0]||(i[0]=s=>o(s)),onAdd:i[1]||(i[1]=s=>a.data.subChecks.push({applicability:[],label:c(A)(),name:"new Sub Check",resultSets:[],rulesOrRuleSets:[]}))},null,8,["data","nodes"]),m(L,{data:a.data.resultSets,header:"Result Sets",nodes:e,open:!0,onSelect:i[2]||(i[2]=s=>o(s)),onAdd:i[3]||(i[3]=s=>a.data.resultSets.push({elements:"",filter:"",label:c(A)(),name:"new Result Set",type:"resultSet"}))},null,8,["data","nodes"])])]))}}),N=p=>(M("data-v-99474b63"),p=p(),x(),p),at={class:"grid w-full h-full dark:bg-default-dark p-5"},ot=N(()=>t("div",{style:{"grid-area":"header"},class:"flex"},[t("h1",{class:"text-2xl my-auto"},"Checks")],-1)),rt={style:{"grid-area":"sidebar"},class:"p-2 mr-2 rounded-lg border select-none"},dt={style:{"grid-area":"main"},class:"relative overflow-hidden p-10 border rounded-lg bg-default-medium dark:bg-default-darkest dark:bg-opacity-50"},nt={key:0},ut={key:0},it=["onMouseenter","onMouseleave","onClick"],pt=N(()=>t("hr",{class:"border-default-dark"},null,-1)),ct={key:0},ft={key:1},mt={key:2},bt={key:3},ht=N(()=>t("p",{class:"my-1"},[t("span",{class:"text-xl"},"Edit Name")],-1)),vt=N(()=>t("span",null,"Name",-1)),_t={key:4},kt=N(()=>t("span",{class:"text-2xl"},"Error! Could not get type!",-1)),St=[kt],$t={key:1},gt=N(()=>t("span",{class:"text-xl"},"Select a node",-1)),yt=[gt],wt=R({__name:"view",setup(p){const{graph:r}=ie(pe),l=B(null),e=B(null);return(u,o)=>{var a,i;return d(),n("div",at,[ot,t("div",rt,[m(c(lt),{ref_key:"tree",ref:l,data:c(r),onSelect:o[0]||(o[0]=s=>e.value=s)},null,8,["data"])]),t("div",dt,[e.value&&l.value?(d(),n("div",nt,[t("p",null,[(d(!0),n(y,null,w(e.value.path,(s,b)=>(d(),n("span",{key:b},[b!=0?(d(),n("span",ut," / ")):j("",!0),t("button",{onMouseenter:k=>l.value.nodeStateMap.get(s).state.hover=!0,onMouseleave:k=>l.value.nodeStateMap.get(s).state.hover=!1,onClick:k=>l.value.selectNode(s)},g(l.value.nodeStateMap.get(s).text),41,it)]))),128))]),pt,e.value.type===c(S).RULESET?(d(),n("div",ct,[m(c(ze),{"rule-set":e.value.data},null,8,["rule-set"])])):e.value.type===c(S).RULE?(d(),n("div",ft,[m(c(Fe),{rule:e.value.data},null,8,["rule"])])):((a=e.value.data)==null?void 0:a.type)==="resultSet"?(d(),n("div",mt,[m(c(ye),{"result-set":e.value.data,"graph-nodes":c(r).elements,"sub-checks":c(r).subChecks},null,8,["result-set","graph-nodes","sub-checks"])])):(i=e.value.data)!=null&&i.hasOwnProperty("name")?(d(),n("div",bt,[ht,m(c(E),{class:"my-1",modelValue:e.value.data.name,"onUpdate:modelValue":o[1]||(o[1]=s=>e.value.data.name=s)},{default:C(()=>[vt]),_:1},8,["modelValue"])])):(d(),n("div",_t,St))])):(d(),n("div",$t,yt))])])}}}),Et=V(wt,[["__scopeId","data-v-99474b63"]]);export{Et as default};
