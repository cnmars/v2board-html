(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[12],{Bl7J:function(e,a,t){"use strict";var n=t("q1tI"),i=t.n(n),s=t("3a4m"),r=t.n(s),l=t("/MKj"),c=t("20nU"),m=t("yWgo");class o extends i.a.Component{constructor(){super(...arguments),this.state={nav:[]}}componentDidMount(){var e=[{title:"\u4eea\u8868\u76d8",type:"item",href:"/dashboard",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-speedometer"})},{title:"\u8ba2\u9605",type:"heading"},{title:"\u6211\u7684\u8ba2\u9605",type:"item",href:"/subscribe",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-badge"})},{title:"\u8d2d\u4e70\u8ba2\u9605",type:"item",href:"/plan",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-bag"})},{title:"\u8d22\u52a1",type:"heading"},{title:"\u6211\u7684\u8ba2\u5355",type:"item",href:"/order",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-list"})},{title:"\u6211\u7684\u9080\u8bf7",type:"item",href:"/invite",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-users"})},{title:"\u7528\u6237",type:"heading"},{title:"\u4e2a\u4eba\u4e2d\u5fc3",type:"item",href:"/profile",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-user"})},{title:"\u6211\u7684\u5de5\u5355",type:"item",href:"/ticket",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-support"})},{title:"\u6d41\u91cf\u660e\u7ec6",type:"item",href:"/traffic",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-bar-chart"})},{title:"\u4f7f\u7528\u6559\u7a0b",type:"item",href:"/tutorial",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-book-open"})}],a=[{title:"\u8fd4\u56de\u7528\u6237\u4e2d\u5fc3",type:"item",href:"/dashboard",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-action-undo"})},{title:"\u4eea\u8868\u76d8",type:"item",href:"/admin/dashboard",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-speedometer"})},{title:"\u8bbe\u7f6e",type:"heading"},{title:"\u7cfb\u7edf\u914d\u7f6e",type:"item",href:"/admin/config/system",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-equalizer"})},{title:"\u652f\u4ed8\u914d\u7f6e",type:"item",href:"/admin/config/payment",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-credit-card"})},{title:"\u670d\u52a1\u5668",type:"heading"},{title:"\u8282\u70b9\u7ba1\u7406",type:"item",href:"/admin/server",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-vector"})},{title:"\u6743\u9650\u7ec4\u7ba1\u7406",type:"item",href:"/admin/server/group",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-wrench"})},{title:"\u8d22\u52a1",type:"heading"},{title:"\u8ba2\u9605\u7ba1\u7406",type:"item",href:"/admin/plan",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-bag"})},{title:"\u8ba2\u5355\u7ba1\u7406",type:"item",href:"/admin/order",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-list"})},{title:"\u4f63\u91d1\u7ba1\u7406",type:"item",href:"/admin/commission",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-user-following"})},{title:"\u7528\u6237",type:"heading"},{title:"\u7528\u6237\u7ba1\u7406",type:"item",href:"/admin/user",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-users"})},{title:"\u516c\u544a\u7ba1\u7406",type:"item",href:"/admin/notice",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-speech"})},{title:"\u5de5\u5355\u7ba1\u7406",type:"item",href:"/admin/ticket",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-support"})}];Object(m["c"])("is_admin")&&e.unshift({title:"\u8fd4\u56de\u7ba1\u7406\u4e2d\u5fc3",type:"item",href:"/admin/dashboard",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-action-undo"})}),this.isAdmin()?this.setState({nav:a}):this.setState({nav:e})}renderMenu(e,a,t,n){switch(e){case"heading":return i.a.createElement("li",{className:"nav-main-heading"},a);case"item":return i.a.createElement("li",{className:"nav-main-item"},i.a.createElement("a",{className:"nav-main-link ".concat(this.props.location.pathname===t&&"active"),onClick:()=>{r.a.push(t),this.props.dispatch({type:"header/showNav"})}},n&&n,i.a.createElement("span",{className:"nav-main-link-name"},a)))}}isAdmin(){return-1!==this.props.location.pathname.indexOf("admin")}render(){return i.a.createElement("nav",{id:"sidebar","aria-label":"Main Navigation"},i.a.createElement("div",{className:"smini-visible-block"},i.a.createElement("div",{className:"content-header bg-black-10"},i.a.createElement("a",{className:"link-fx font-size-lg text-white",href:"index.html"},i.a.createElement("span",{className:"text-white-75"},"X"),i.a.createElement("span",{className:"text-white"},"H")))),i.a.createElement("div",{className:"smini-hidden ".concat(1===c["a"].theme?"":"bg-header-dark")},i.a.createElement("div",{className:"content-header justify-content-lg-center bg-black-10"},i.a.createElement("a",{className:"link-fx font-size-lg text-white",href:"index.html"},i.a.createElement("span",{className:"text-white-75"},window.v2board.title?window.v2board.title:"V2Board")),i.a.createElement("div",{className:"d-lg-none"},i.a.createElement("a",{className:"text-white ml-2","data-toggle":"layout","data-action":"sidebar_close",href:"javascript:void(0)",onClick:()=>this.props.dispatch({type:"header/showNav"})},i.a.createElement("i",{className:"fa fa-times-circle"}))))),i.a.createElement("div",{className:"content-side content-side-full"},i.a.createElement("ul",{className:"nav-main"},this.state.nav.map(e=>{return this.renderMenu(e.type,e.title,e.href,e.icon)}))))}}var d=Object(l["c"])(e=>{var a=e.header;return{header:a}})(o),h=t("t3Un");class p extends i.a.Component{constructor(){super(...arguments),this.state={showAvatarMenu:!1,loading:!1,showSearchBar:!1}}componentDidMount(){var e=this;this.props.header.userInfo.email||this.setState({loading:!0},()=>{this.props.dispatch({type:"header/getUserInfo",complete:()=>e.setState({loading:!1})})})}showAvatarMenu(){var e=this;this.setState({showAvatarMenu:!this.state.showAvatarMenu},()=>{document.onclick=function(a){e.state.showAvatarMenu&&e.setState({showAvatarMenu:!1}),document.onclick=void 0}})}logout(){Object(h["a"])("/user/logout").then(e=>{r.a.push("/login")})}render(){return i.a.createElement("header",{id:"page-header"},i.a.createElement("div",{className:"content-header"},i.a.createElement("div",{className:"sidebar-toggle",style:{display:this.props.search?"block":"none"}},i.a.createElement("button",{type:"button",className:"btn btn-dual mr-1 d-lg-none","data-toggle":"layout","data-action":"sidebar_toggle",onClick:()=>this.props.dispatch({type:"header/showNav"})},i.a.createElement("i",{className:"fa fa-fw fa-bars"})),this.props.search&&i.a.createElement("button",{type:"button",className:"btn btn-dual",onClick:()=>{this.setState({showSearchBar:!0})}},i.a.createElement("i",{className:"fa fa-fw fa-search"})," ",i.a.createElement("span",{className:"ml-1 d-none d-sm-inline-block"},"\u641c\u7d22"))),i.a.createElement("div",null),i.a.createElement("div",null,this.state.loading?i.a.createElement("div",{className:"spinner-grow text-primary"}):i.a.createElement("div",{className:"dropdown d-inline-block"},i.a.createElement("button",{type:"button",className:"btn btn-dual",id:"page-header-user-dropdown","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",onClick:()=>this.showAvatarMenu()},i.a.createElement("img",{className:"img-avatar img-avatar32 img-avatar-thumb",src:this.props.header.userInfo.avatar_url,alt:""}),i.a.createElement("span",{className:"d-none d-lg-inline ml-1"},this.props.header.userInfo.email),i.a.createElement("i",{className:"fa fa-fw fa-angle-down ml-1"})),i.a.createElement("div",{className:"dropdown-menu dropdown-menu-right dropdown-menu-lg p-0 ".concat(this.state.showAvatarMenu&&"show"),"aria-labelledby":"page-header-user-dropdown"},i.a.createElement("div",{className:"p-2"},i.a.createElement("a",{className:"dropdown-item d-flex justify-content-between align-items-center",href:"javascript:;",onClick:()=>this.logout()},"\u9000\u51fa\u767b\u5f55",i.a.createElement("i",{className:"fa fa-fw fa-sign-out-alt text-danger ml-1"}))))))),this.props.search&&i.a.createElement("div",{className:"overlay-header bg-dark ".concat(this.state.showSearchBar?"show":"")},i.a.createElement("div",{className:"content-header bg-dark"},i.a.createElement("div",{className:"w-100"},i.a.createElement("div",{className:"input-group"},i.a.createElement("div",{className:"input-group-prepend"},i.a.createElement("button",{type:"button",className:"btn btn-dark",onClick:()=>{this.setState({showSearchBar:!1})}},i.a.createElement("i",{className:"fa fa-fw fa-times-circle"}))),i.a.createElement("input",{type:"text",className:"form-control border-0",placeholder:this.props.search.placeholder,onChange:e=>this.props.search.onChange(e.target.value)}))))))}}var u=Object(l["c"])(e=>{var a=e.header;return{header:a}})(p);class g extends i.a.Component{render(){return i.a.createElement("footer",{id:"page-footer",className:"bg-body-light"},i.a.createElement("div",{className:"content py-0"},i.a.createElement("div",{className:"row font-size-sm"},i.a.createElement("div",{className:"col-sm-6 order-sm-2 mb-1 mb-sm-0 text-center text-sm-right"},i.a.createElement("i",{className:"fa fa-heart text-danger"})," ",window.v2board.title?window.v2board.title:"V2Board"),i.a.createElement("div",{className:"col-sm-6 order-sm-1 text-center text-sm-left"},i.a.createElement("a",{className:"font-w600",href:"/",target:"_blank"},"V2Board v0.2"),i.a.createElement("span",{"data-toggle":"year-copy"})))))}}class v extends i.a.Component{render(){return i.a.createElement("div",{id:"page-container",className:"sidebar-o ".concat(1===c["a"].theme?"sidebar-dark":"page-header-dark"," side-scroll page-header-fixed main-content-boxed side-trans-enabled ").concat(this.props.header.showNav&&"sidebar-o-xs")},i.a.createElement(d,this.props),i.a.createElement(u,{search:this.props.search}),this.props.loading?i.a.createElement("main",{id:"main-container"},i.a.createElement("div",{className:"content content-full"},i.a.createElement("div",{className:"spinner-grow text-primary",role:"status"},i.a.createElement("span",{className:"sr-only"},"Loading...")))):this.props.children,i.a.createElement(g,null))}}a["a"]=Object(l["c"])(e=>{var a=e.header;return{header:a}})(v)},LbTH:function(e,a,t){"use strict";a["a"]={cycleText:{month_price:"\u6708\u4ed8",quarter_price:"\u5b63\u4ed8",half_year_price:"\u534a\u5e74\u4ed8",year_price:"\u5e74\u4ed8"},orderStatusText:["\u5f85\u652f\u4ed8","\u5f00\u901a\u4e2d","\u5df2\u53d6\u6d88","\u5df2\u5b8c\u6210"],commissionStatusText:["\u786e\u8ba4\u4e2d","\u5df2\u786e\u8ba4","\u5df2\u5b8c\u6210"],ticketStatusText:["\u5f00\u542f","\u5f85\u56de\u590d","\u5f85\u7b54\u590d","\u5173\u95ed"]}},blCH:function(e,a,t){"use strict";t.r(a),t.d(a,"default",function(){return y});var n=t("jehZ"),i=t.n(n),s=(t("2qtc"),t("kLXV")),r=(t("OaEy"),t("2fM7")),l=(t("iQDF"),t("+eQT")),c=(t("5NDa"),t("5rEg")),m=(t("g9YV"),t("wCAj")),o=(t("Awhp"),t("KrTs")),d=(t("5Dmo"),t("3S7+")),h=(t("Pwec"),t("CtXQ")),p=t("p0pE"),u=t.n(p),g=t("q1tI"),v=t.n(g),f=t("Bl7J"),E=t("t3Un"),b=(t("LbTH"),t("wd/R")),N=t.n(b);class y extends v.a.Component{constructor(){super(...arguments),this.state={users:[],pagination:{current:1,pageSize:10,total:0},email:void 0,visible:!1,submit:{enable:1,banned:0,is_admin:0},loading:!0,plan:[]}}componentDidMount(){this.fetchData(),this.getPlan()}getPlan(){Object(E["a"])("/admin/plan").then(e=>{200===e.code&&this.setState({plan:e.data})})}paginationOnChange(e){this.setState({pagination:e},()=>this.fetchData())}fetchData(){var e;e=u()({},this.state.pagination),this.state.email&&Object.assign(e,{email:this.state.email}),Object(E["a"])("/admin/user",e).then(e=>{200===e.code&&this.setState({users:e.data,pagination:u()({},this.state.pagination,{total:e.total}),loading:!1})})}searchOnChange(e){this.inputDelayTimer&&clearTimeout(this.inputDelayTimer),this.inputDelayTimer=setTimeout(function(){this.inputDelayTimer=null,this.setState({email:e,pagination:u()({},this.state.pagination,{current:1})},()=>{this.fetchData()})}.bind(this),400)}modalVisible(){this.setState({visible:!this.state.visible},()=>{this.setState({submit:{enable:1,banned:0,is_admin:0}})})}formChange(e,a){this.setState({submit:u()({},this.state.submit,{[e]:a})})}edit(e){this.setState({submit:u()({},this.state.users[e],{password:"",transfer_enable:(this.state.users[e].transfer_enable/1073741824).toFixed(2)}),visible:!0})}submit(){var e=this.state.submit.id?"/admin/user/update":"";Object(E["b"])(e,this.state.submit).then(e=>{this.modalVisible(),this.fetchData()})}render(){var e=[{title:"#",dataIndex:"id",key:"id"},{title:"\u90ae\u7bb1",dataIndex:"email",key:"email"},{title:"\u8ba2\u9605",dataIndex:"plan_name",key:"plan_name",render:e=>{return e||"-"}},{title:v.a.createElement("span",null,"\u5728\u7ebf ",v.a.createElement(d["a"],{placement:"top",title:"\u7528\u6237\u534a\u5c0f\u65f6\u5185\u5728\u7ebf\u60c5\u51b5"},v.a.createElement(h["a"],{type:"question-circle"}))),dataIndex:"t",key:"t",align:"center",render:e=>{return v.a.createElement(o["a"],{status:(new Date).getTime()/1e3-1800>e?"default":"processing"})}},{title:"\u5df2\u7528\u6d41\u91cf(G)",dataIndex:"u",key:"u",render:(e,a)=>{return((a.u+a.d)/1073741824).toFixed(2)}},{title:"\u6d41\u91cf(G)",dataIndex:"transfer_enable",key:"transfer_enable",render:(e,a)=>{return(e/1073741824).toFixed(2)}},{title:"\u5230\u671f\u65f6\u95f4",dataIndex:"expired_at",key:"expired_at",render:e=>{return e?N()(1e3*e).format("YYYY/MM/DD HH:mm"):"-"}},{title:"\u52a0\u5165\u65f6\u95f4",dataIndex:"created_at",key:"created_at",render:e=>{return N()(1e3*e).format("YYYY/MM/DD HH:mm")}},{title:"\u64cd\u4f5c",dataIndex:"action",key:"action",align:"right",render:(e,a,t)=>{return v.a.createElement("div",null,v.a.createElement("a",{onClick:()=>this.edit(t),href:"javascript:;"},"\u7f16\u8f91"))}}];return v.a.createElement(f["a"],i()({},this.props,{search:{placeholder:"\u901a\u8fc7\u90ae\u7bb1\u641c\u7d22",onChange:e=>this.searchOnChange(e)},loading:this.state.loading}),v.a.createElement("main",{id:"main-container"},v.a.createElement("div",{className:"content content-full"},v.a.createElement("div",{className:"d-flex justify-content-between align-items-center"},v.a.createElement("h2",{className:"font-w300 mt-4 mb-3"},"\u7528\u6237\u7ba1\u7406")),v.a.createElement("div",{className:"bg-white"},v.a.createElement(m["a"],{dataSource:this.state.users,pagination:u()({},this.state.pagination,{size:"small"}),columns:e,scroll:{x:1100},onChange:e=>this.paginationOnChange(e)})))),v.a.createElement(s["a"],{title:"".concat(this.state.submit.id?"\u7f16\u8f91\u7528\u6237":"\u65b0\u5efa\u7528\u6237"),visible:this.state.visible,onCancel:()=>this.modalVisible(),onOk:()=>this.submit()},v.a.createElement("div",null,v.a.createElement("div",{className:"form-group"},v.a.createElement("label",{for:"example-text-input-alt"},"\u90ae\u7bb1"),v.a.createElement(c["a"],{placeholder:"\u8bf7\u8f93\u5165\u90ae\u7bb1",value:this.state.submit.email,onChange:e=>this.formChange("email",e.target.value)})),v.a.createElement("div",{className:"form-group"},v.a.createElement("label",{for:"example-text-input-alt"},"\u5bc6\u7801"),v.a.createElement(c["a"],{value:this.state.submit.password,placeholder:"\u5982\u9700\u4fee\u6539\u5bc6\u7801\u8bf7\u8f93\u5165",onChange:e=>this.formChange("password",e.target.value)})),v.a.createElement("div",{className:"form-group"},v.a.createElement("label",{for:"example-text-input-alt"},"\u6d41\u91cf"),v.a.createElement(c["a"],{addonAfter:"GiB",value:this.state.submit.transfer_enable,placeholder:"\u8bf7\u8f93\u5165\u6d41\u91cf",onChange:e=>this.formChange("transfer_enable",e.target.value)})),v.a.createElement("div",{className:"form-group"},v.a.createElement("label",{for:"example-text-input-alt"},"\u5230\u671f\u65f6\u95f4"),v.a.createElement("div",null,v.a.createElement(l["a"],{placeholder:"\u8bf7\u9009\u62e9\u7528\u6237\u5230\u671f\u65e5\u671f",value:this.state.submit.expired_at&&N()(1e3*this.state.submit.expired_at),style:{width:"100%"},onChange:e=>this.formChange("expired_at",e.format("X"))}))),v.a.createElement("div",{className:"form-group"},v.a.createElement("label",{for:"example-text-input-alt"},"\u8ba2\u9605\u8ba1\u5212"),v.a.createElement(r["a"],{placeholder:"\u8bf7\u9009\u62e9\u7528\u6237\u8ba2\u9605\u8ba1\u5212",style:{width:"100%"},value:this.state.submit.plan_id?["".concat(this.state.submit.plan_id)]:void 0,onChange:e=>this.formChange("plan_id",e)},this.state.plan.map(e=>{return v.a.createElement(r["a"].Option,{key:e.id},e.name)}))),v.a.createElement("div",{className:"form-group"},v.a.createElement("label",{for:"example-text-input-alt"},"\u662f\u5426\u5c01\u7981"),v.a.createElement(r["a"],{placeholder:"\u8bf7\u9009\u62e9\u5c01\u7981\u72b6\u6001",style:{width:"100%"},value:this.state.submit.banned?["1"]:["0"],onChange:e=>this.formChange("banned",e)},v.a.createElement(r["a"].Option,{key:1},"\u662f"),v.a.createElement(r["a"].Option,{key:0},"\u5426"))),v.a.createElement("div",{className:"form-group"},v.a.createElement("label",{for:"example-text-input-alt"},"\u63a8\u8350\u8fd4\u5229\u6bd4\u4f8b"),v.a.createElement(c["a"],{addonAfter:"%",value:this.state.submit.commission_rate,placeholder:"\u8bf7\u8f93\u5165\u63a8\u8350\u8fd4\u5229\u6bd4\u4f8b(\u4e3a\u7a7a\u5219\u8ddf\u968f\u7ad9\u70b9\u8bbe\u7f6e\u8fd4\u5229\u6bd4\u4f8b)",onChange:e=>this.formChange("commission_rate",e.target.value)})),v.a.createElement("div",{className:"form-group"},v.a.createElement("label",{for:"example-text-input-alt"},"\u662f\u5426\u7ba1\u7406\u5458"),v.a.createElement(r["a"],{placeholder:"\u8bf7\u9009\u62e9\u5c01\u7981\u72b6\u6001",style:{width:"100%"},value:this.state.submit.is_admin?["1"]:["0"],onChange:e=>this.formChange("is_admin",e)},v.a.createElement(r["a"].Option,{key:1},"\u662f"),v.a.createElement(r["a"].Option,{key:0},"\u5426"))))))}}}}]);