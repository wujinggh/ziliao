(window.webpackJsonpclient=window.webpackJsonpclient||[]).push([[0],{213:function(e,t,n){e.exports=n.p+"static/media/defaultposter.b4e877ba.png"},222:function(e,t,n){e.exports=n(448)},227:function(e,t,n){},229:function(e,t,n){},448:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),i=n(7),o=n.n(i),c=(n(227),n(228),n(229),n(62)),u=n(51),s=n(29),l=n(30),p=n(39),d=n(37),m=n(40),f=function(e){function t(){return Object(s.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("h1",null,"\u7535\u5f71\u9996\u9875")}}]),t}(r.a.Component),h=n(14),v=n.n(h),b=n(21),y=n(80),g=n(458),w=n(454),E=n(455),O=n(457),j=n(449),k=n(27),C=n(8),x=n(453),I=n(456),S=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={showModal:!1},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"getUploadContent",value:function(){return this.props.value?null:r.a.createElement("div",null,r.a.createElement(C.a,{type:"plus"}),r.a.createElement("div",null,"\u70b9\u51fb\u4e0a\u4f20"))}},{key:"getFileList",value:function(){return this.props.value?[{uid:this.props.value,name:this.props.value,url:this.props.value}]:[]}},{key:"handleRequest",value:function(){var e=Object(b.a)(v.a.mark(function e(t){var n,a,r;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return(n=new FormData).append(t.filename,t.file),a=new Request(t.action,{method:"post",body:n}),e.next=5,fetch(a).then(function(e){return e.json()});case 5:(r=e.sent).err?g.a.error("\u4e0a\u4f20\u5931\u8d25\uff01"):this.props.onChange&&this.props.onChange(r.data);case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(x.a,{action:"/api/upload",name:"imgfile",accept:".jpg,.png,.gif",listType:"picture-card",fileList:this.getFileList(),customRequest:this.handleRequest.bind(this),onRemove:function(){e.props.onChange&&e.props.onChange("")},onPreview:function(){e.setState({showModal:!0})}},this.getUploadContent()),r.a.createElement(I.a,{visible:this.state.showModal,footer:null,onCancel:function(){e.setState({showModal:!1})}},r.a.createElement("img",{alt:"",style:{width:"100%"},src:this.props.value})))}}]),t}(r.a.Component),P={labelCol:{span:4},wrapperCol:{span:19,offset:1}},M=[{label:"\u4e2d\u56fd\u5927\u9646",value:"\u4e2d\u56fd\u5927\u9646"},{label:"\u7f8e\u56fd",value:"\u7f8e\u56fd"},{label:"\u4e2d\u56fd\u53f0\u6e7e",value:"\u4e2d\u56fd\u53f0\u6e7e"},{label:"\u4e2d\u56fd\u9999\u6e2f",value:"\u4e2d\u56fd\u9999\u6e2f"}],_=y.a.Group,D=[{label:"\u559c\u5267",value:"\u559c\u5267"},{label:"\u707e\u96be",value:"\u707e\u96be"},{label:"\u52a8\u4f5c",value:"\u52a8\u4f5c"},{label:"\u7231\u60c5",value:"\u7231\u60c5"}],F=y.a.Group,A=function(e){function t(){return Object(s.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),this.props.form.validateFields(function(){var e=Object(b.a)(v.a.mark(function e(n){var a,r;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=6;break}return a=t.props.form.getFieldsValue(),e.next=4,t.props.onSubmit(a);case 4:(r=e.sent)?g.a.error(r):g.a.success("\u5904\u7406\u6210\u529f",1,function(){t.props.history.push("/movie")});case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}())}},{key:"render",value:function(){var e=this.props.form.getFieldDecorator;return r.a.createElement(w.a,Object.assign({onSubmit:this.handleSubmit.bind(this)},P,{style:{width:"400px"}}),r.a.createElement(w.a.Item,{label:"\u7535\u5f71\u540d\u79f0"},e("name",{rules:[{required:!0,message:"\u8bf7\u586b\u5199\u7535\u5f71\u540d\u79f0"}]})(r.a.createElement(E.a,null))),r.a.createElement(w.a.Item,{label:"\u5c01\u9762\u56fe"},e("poster")(r.a.createElement(S,null))),r.a.createElement(w.a.Item,{label:"\u5730\u533a"},e("areas",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u5730\u533a"}]})(r.a.createElement(_,{options:M}))),r.a.createElement(w.a.Item,{label:"\u7c7b\u578b"},e("types",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u7c7b\u578b"}]})(r.a.createElement(F,{options:D}))),r.a.createElement(w.a.Item,{label:"\u65f6\u957f(\u5206\u949f)"},e("timeLong",{rules:[{required:!0,message:"\u8bf7\u586b\u5199\u65f6\u957f"}]})(r.a.createElement(O.a,{min:1,step:10}))),r.a.createElement(w.a.Item,{label:"\u6b63\u5728\u70ed\u6620"},e("isHot",{initialValue:!1,valuePropName:"checked"})(r.a.createElement(j.a,null))),r.a.createElement(w.a.Item,{label:"\u5373\u5c06\u4e0a\u6620"},e("isComing",{initialValue:!1,valuePropName:"checked"})(r.a.createElement(j.a,null))),r.a.createElement(w.a.Item,{label:"\u7ecf\u5178\u5f71\u7247"},e("isClassic",{initialValue:!1,valuePropName:"checked"})(r.a.createElement(j.a,null))),r.a.createElement(w.a.Item,{label:"\u63cf\u8ff0"},e("description")(r.a.createElement(E.a.TextArea,null))),r.a.createElement(w.a.Item,{labelCol:{span:0},wrapperCol:{span:19,offset:5}},r.a.createElement(k.a,{type:"primary",htmlType:"submit"},"\u63d0\u4ea4")))}}]),t}(r.a.Component);var q,L=Object(u.e)(w.a.create({mapPropsToFields:function(e){if(e.movie)return function(e){var t={};for(var n in e)t[n]=w.a.createFormField({value:e[n]});return console.log(t),t}(e.movie)}})(A)),N=n(82),H=n.n(N),R=function(){function e(){Object(s.a)(this,e)}return Object(l.a)(e,null,[{key:"add",value:function(){var e=Object(b.a)(v.a.mark(function e(t){var n,a;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H.a.post("/api/movie",t);case 2:return n=e.sent,a=n.data,e.abrupt("return",a);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},{key:"edit",value:function(){var e=Object(b.a)(v.a.mark(function e(t,n){var a,r;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H.a.put("/api/movie/"+t,n);case 2:return a=e.sent,r=a.data,e.abrupt("return",r);case 5:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}()},{key:"delete",value:function(){var e=Object(b.a)(v.a.mark(function e(t){var n,a;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H.a.delete("/api/movie/"+t);case 2:return n=e.sent,a=n.data,e.abrupt("return",a);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},{key:"getMovieById",value:function(){var e=Object(b.a)(v.a.mark(function e(t){var n,a;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H.a.get("/api/movie/"+t);case 2:return n=e.sent,a=n.data,e.abrupt("return",a);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},{key:"getMovies",value:function(){var e=Object(b.a)(v.a.mark(function e(t){var n,a;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H.a.get("/api/movie",{params:t});case 2:return n=e.sent,a=n.data,e.abrupt("return",a);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}]),e}(),T=function(e){function t(){return Object(s.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(L,{onSubmit:function(){var e=Object(b.a)(v.a.mark(function e(t){var n;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.add(t);case 2:if(!(n=e.sent).data){e.next=7;break}return e.abrupt("return","");case 7:return e.abrupt("return",n.err);case 8:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()})}}]),t}(r.a.Component),V=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={movie:void 0},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=Object(b.a)(v.a.mark(function e(){var t;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.getMovieById(this.props.match.params.id);case 2:(t=e.sent).data&&this.setState({movie:t.data});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement(L,{movie:this.state.movie,onSubmit:function(){var t=Object(b.a)(v.a.mark(function t(n){var a;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,R.edit(e.props.match.params.id,n);case 2:if(!(a=t.sent).data){t.next=7;break}return t.abrupt("return","");case 7:return t.abrupt("return",a.err);case 8:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()})}}]),t}(r.a.Component),z=n(450),B=n(452);!function(e){e.isHot="isHot",e.isComing="isComing",e.isClassic="isClassic"}(q||(q={}));var K=n(213),G=n.n(K),J=function(e){function t(){return Object(s.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.onload&&this.props.onload()}},{key:"getFilterDropDown",value:function(e){var t=this;return r.a.createElement("div",{style:{padding:8}},r.a.createElement(E.a,{style:{width:188,marginBottom:8,display:"block"},value:this.props.condition.key,onChange:function(e){return t.props.onKeyChange(e.target.value)},onPressEnter:this.props.onSearch}),r.a.createElement(k.a,{type:"primary",icon:"search",size:"small",style:{width:90,marginRight:8},onClick:this.props.onSearch},"\u641c\u7d22"),r.a.createElement(k.a,{size:"small",style:{width:90},onClick:function(){t.props.onKeyChange(""),t.props.onSearch()}},"\u91cd\u7f6e"))}},{key:"getColumns",value:function(){var e=this;return[{title:"\u5c01\u9762",dataIndex:"poster",render:function(e){return e?r.a.createElement("img",{alt:"",className:"tablePoster",src:e}):r.a.createElement("img",{alt:"",className:"tablePoster",src:G.a})}},{title:"\u540d\u79f0",dataIndex:"name",filterDropdown:this.getFilterDropDown.bind(this),filterIcon:r.a.createElement(C.a,{type:"search"})},{title:"\u5730\u533a",dataIndex:"areas",render:function(e){return e.join(", ")}},{title:"\u7c7b\u578b",dataIndex:"types",render:function(e){return e.join(", ")}},{title:"\u65f6\u957f",dataIndex:"timeLong",render:function(e){return e+"\u5206\u949f"}},{title:"\u6b63\u5728\u70ed\u6620",dataIndex:"isHot",render:function(t,n){return r.a.createElement(j.a,{defaultChecked:t,onChange:function(t){e.props.onSwitchChange(q.isHot,t,n._id)}})}},{title:"\u5373\u5c06\u4e0a\u6620",dataIndex:"isComing",render:function(t,n){return r.a.createElement(j.a,{defaultChecked:t,onChange:function(t){e.props.onSwitchChange(q.isComing,t,n._id)}})}},{title:"\u7ecf\u5178\u5f71\u7247",dataIndex:"isClassic",render:function(t,n){return r.a.createElement(j.a,{defaultChecked:t,onChange:function(t){e.props.onSwitchChange(q.isClassic,t,n._id)}})}},{title:"\u64cd\u4f5c",dataIndex:"_id",render:function(t){return r.a.createElement("div",null,r.a.createElement(c.b,{to:"/movie/edit/"+t},r.a.createElement(k.a,{type:"primary",size:"small"},"\u7f16\u8f91")),r.a.createElement(z.a,{title:"\u786e\u5b9a\u8981\u5220\u9664\u5417?",onConfirm:Object(b.a)(v.a.mark(function n(){return v.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.props.onDelete(t);case 2:g.a.success("\u5220\u9664\u6210\u529f");case 3:case"end":return n.stop()}},n)})),okText:"\u786e\u5b9a",cancelText:"\u53d6\u6d88"},r.a.createElement(k.a,{type:"danger",size:"small"},"\u5220\u9664")))}}]}},{key:"getPageConfig",value:function(){return 0!==this.props.total&&{current:this.props.condition.page,pageSize:this.props.condition.limit,total:this.props.total}}},{key:"handleChange",value:function(e){this.props.onChange(e.current)}},{key:"render",value:function(){return r.a.createElement(B.a,{rowKey:"_id",dataSource:this.props.data,columns:this.getColumns(),pagination:this.getPageConfig(),onChange:this.handleChange.bind(this),loading:this.props.loading})}}]),t}(r.a.Component),U=n(114),Q=n(113);function W(e,t){return{type:"movie_save",payload:{movies:e,total:t}}}function X(e){return{type:"movie_setLoading",payload:e}}function Y(e){return{type:"movie_setCondition",payload:e}}function Z(e){return{type:"movie_delete",payload:e}}function $(e,t,n){return{type:"movie_switch",payload:{type:e,newVal:t,id:n}}}var ee={saveMoviesAction:W,setLoadingAction:X,setConditionAction:Y,deleteAction:Z,fetchMovies:function(e){return function(){var t=Object(b.a)(v.a.mark(function t(n,a){var r,i;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n(X(!0)),n(Y(e)),r=a().movie.condition,t.next=5,R.getMovies(r);case 5:i=t.sent,n(W(i.data,i.total)),n(X(!1));case 8:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}()},deleteMovie:function(e){return function(){var t=Object(b.a)(v.a.mark(function t(n){return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n(X(!0)),t.next=3,R.delete(e);case 3:n(Z(e)),n(X(!1));case 5:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},changeSwitchAction:$,changeSwitch:function(e,t,n){return function(){var a=Object(b.a)(v.a.mark(function a(r){return v.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return r($(e,t,n)),a.next=3,R.edit(n,Object(Q.a)({},e,t));case 3:case"end":return a.stop()}},a)}));return function(e){return a.apply(this,arguments)}}()}};var te=Object(U.b)(function(e){return e.movie},function(e){return{onload:function(){e(ee.fetchMovies({limit:10,key:"",page:1}))},onSwitchChange:function(t,n,a){e(ee.changeSwitch(t,n,a))},onDelete:function(){var t=Object(b.a)(v.a.mark(function t(n){return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e(ee.deleteMovie(n));case 2:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),onChange:function(t){e(ee.fetchMovies({page:t}))},onKeyChange:function(t){e(ee.setConditionAction({key:t}))},onSearch:function(){e(ee.fetchMovies({page:1}))}}})(J),ne=n(451),ae=n(153),re=ne.a.Header,ie=ne.a.Sider,oe=ne.a.Content,ce=function(){return r.a.createElement("div",{className:"container"},r.a.createElement(ne.a,null,r.a.createElement(re,{className:"header"},r.a.createElement(c.b,{to:"/"},"\u732b\u773c\u7535\u5f71\u7ba1\u7406\u7cfb\u7edf")),r.a.createElement(ne.a,null,r.a.createElement(ie,null,r.a.createElement(ae.a,{mode:"inline",theme:"dark"},r.a.createElement(ae.a.Item,{key:"1"},r.a.createElement(c.b,{to:"/movie"},"\u7535\u5f71\u5217\u8868")),r.a.createElement(ae.a.Item,{key:"2"},r.a.createElement(c.b,{to:"/movie/add"},"\u6dfb\u52a0\u7535\u5f71")))),r.a.createElement(oe,null,r.a.createElement("div",{className:"main"},r.a.createElement(u.a,{path:"/",component:f,exact:!0}),r.a.createElement(u.a,{path:"/movie",component:te,exact:!0}),r.a.createElement(u.a,{path:"/movie/add",component:T}),r.a.createElement(u.a,{path:"/movie/edit/:id",component:V}))))))},ue=n(71);function se(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function le(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?se(n,!0).forEach(function(t){Object(Q.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):se(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var pe={data:[],condition:{limit:10,page:1,key:""},total:0,loading:!1,totalPage:0},de=function(e,t){return le({},e,{data:t.payload.movies,total:t.payload.total,totalPage:Math.ceil(t.payload.total/e.condition.limit)})},me=function(e,t){var n=le({},e,{condition:le({},e.condition,{},t.payload)});return n.totalPage=Math.ceil(n.total/n.condition.limit),n},fe=function(e,t){return le({},e,{loading:t.payload})},he=function(e,t){return le({},e,{data:e.data.filter(function(e){return e._id!==t.payload}),total:e.total-1,totalPage:Math.ceil((e.total-1)/e.condition.limit)})},ve=function(e,t){var n=e.data.find(function(e){return e._id===t.payload.id});if(!n)return e;var a=le({},n);a[t.payload.type]=t.payload.newVal;var r=e.data.map(function(e){return e._id===t.payload.id?a:e});return le({},e,{data:r})},be=Object(ue.c)({movie:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"movie_save":return de(e,t);case"movie_setLoading":return fe(e,t);case"movie_setCondition":return me(e,t);case"movie_delete":return he(e,t);case"movie_switch":return ve(e,t);default:return e}}}),ye=n(219),ge=n.n(ye),we=n(220),Ee=Object(ue.d)(be,Object(ue.a)(we.a,ge.a)),Oe=function(){return r.a.createElement(U.a,{store:Ee},r.a.createElement(c.a,null,r.a.createElement(u.a,{path:"/",component:ce})))};o.a.render(r.a.createElement(Oe,null),document.getElementById("root"))}},[[222,1,2]]]);
//# sourceMappingURL=main.4ff9538a.chunk.js.map