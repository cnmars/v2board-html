(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{AWr6:function(e,a,t){"use strict";t.r(a);var n=t("jehZ"),i=t.n(n),s=(t("2qtc"),t("kLXV")),r=(t("5NDa"),t("5rEg")),l=(t("g9YV"),t("wCAj")),c=(t("/zsF"),t("PArb")),o=t("p0pE"),m=t.n(o),d=t("q1tI"),h=t.n(d),p=t("Bl7J"),u=t("/MKj"),v=t("t3Un");class g extends h.a.Component{constructor(){super(...arguments),this.state={group:[],loading:!0,submit:{},visible:!1}}componentDidMount(){this.fetchData()}fetchData(){Object(v["a"])("/admin/server/group").then(e=>{200===e.code&&this.setState({group:e.data,loading:!1})})}create(){Object(v["b"])("/admin/server/group/save",this.state.submit).then(e=>{200===e.code&&(this.modalVisible(),this.fetchData())})}drop(e){Object(v["b"])("/admin/server/group/drop",{id:e}).then(e=>{200===e.code&&this.fetchData()})}edit(e){this.setState({submit:m()({},this.state.group[e]),visible:!0})}modalVisible(){this.setState({visible:!this.state.visible}),this.state.visible&&this.setState({submit:{}})}render(){var e=[{title:"\u7ec4ID",dataIndex:"id",key:"id"},{title:"\u7ec4\u540d\u79f0",dataIndex:"name",key:"name"},{title:"\u64cd\u4f5c",dataIndex:"action",key:"action",align:"right",render:(e,a,t)=>{return h.a.createElement("div",null,h.a.createElement("a",{href:"javascript:;",onClick:()=>this.edit(t)},"\u7f16\u8f91"),h.a.createElement(c["a"],{type:"vertical"}),h.a.createElement("a",{href:"javascript:;",onClick:()=>this.drop(a.id)},"\u5220\u9664"))}}];return h.a.createElement(p["a"],i()({},this.props,{loading:this.state.loading}),h.a.createElement("main",{id:"main-container"},h.a.createElement("div",{className:"content content-full"},h.a.createElement("div",{className:"d-flex justify-content-between align-items-center"},h.a.createElement("h2",{className:"font-w300 mt-4 mb-3"},"\u6743\u9650\u7ec4\u7ba1\u7406"),h.a.createElement("button",{type:"button",className:"btn btn-primary btn-sm btn-primary btn-rounded px-3",onClick:()=>this.modalVisible()},"\u521b\u5efa\u7ec4")),h.a.createElement("div",{className:"bg-white"},h.a.createElement(l["a"],{columns:e,dataSource:this.state.group,pagination:!1})))),h.a.createElement(s["a"],{title:"".concat(this.state.submit.id?"\u7f16\u8f91\u7ec4":"\u521b\u5efa\u7ec4"),visible:this.state.visible,onCancel:()=>this.modalVisible(),onOk:()=>this.create()},h.a.createElement("div",null,h.a.createElement("div",{className:"form-group"},h.a.createElement("label",{for:"example-text-input-alt"},"\u7ec4\u540d"),h.a.createElement(r["a"],{placeholder:"\u8bf7\u8f93\u5165\u7ec4\u540d",value:this.state.submit.name,onChange:e=>{this.setState({submit:m()({},this.state.submit,{name:e.target.value})})}})))))}}a["default"]=Object(u["c"])()(g)},Bl7J:function(e,a,t){"use strict";var n=t("q1tI"),i=t.n(n),s=t("3a4m"),r=t.n(s),l=t("/MKj"),c=t("20nU"),o=t("yWgo");class m extends i.a.Component{constructor(){super(...arguments),this.state={nav:[]}}componentDidMount(){var e=[{title:"\u4eea\u8868\u76d8",type:"item",href:"/dashboard",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-speedometer"})},{title:"\u8ba2\u9605",type:"heading"},{title:"\u6211\u7684\u8ba2\u9605",type:"item",href:"/subscribe",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-badge"})},{title:"\u8d2d\u4e70\u8ba2\u9605",type:"item",href:"/plan",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-bag"})},{title:"\u8d22\u52a1",type:"heading"},{title:"\u6211\u7684\u8ba2\u5355",type:"item",href:"/order",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-list"})},{title:"\u6211\u7684\u9080\u8bf7",type:"item",href:"/invite",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-users"})},{title:"\u7528\u6237",type:"heading"},{title:"\u4e2a\u4eba\u4e2d\u5fc3",type:"item",href:"/profile",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-user"})},{title:"\u4f7f\u7528\u6559\u7a0b",type:"item",href:"/tutorial",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-book-open"})}],a=[{title:"\u8fd4\u56de\u7528\u6237\u4e2d\u5fc3",type:"item",href:"/dashboard",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-action-undo"})},{title:"\u8bbe\u7f6e",type:"heading"},{title:"\u7cfb\u7edf\u914d\u7f6e",type:"item",href:"/admin/config/system",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-equalizer"})},{title:"\u652f\u4ed8\u914d\u7f6e",type:"item",href:"/admin/config/payment",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-credit-card"})},{title:"\u670d\u52a1\u5668",type:"heading"},{title:"\u8282\u70b9\u7ba1\u7406",type:"item",href:"/admin/server",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-vector"})},{title:"\u6743\u9650\u7ec4\u7ba1\u7406",type:"item",href:"/admin/server/group",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-wrench"})},{title:"\u8d22\u52a1",type:"heading"},{title:"\u8ba2\u9605\u7ba1\u7406",type:"item",href:"/admin/plan",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-bag"})},{title:"\u8ba2\u5355\u7ba1\u7406",type:"item",href:"/admin/order",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-list"})},{title:"\u4f63\u91d1\u7ba1\u7406",type:"item",href:"/admin/commission",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-user-following"})},{title:"\u7528\u6237",type:"heading"},{title:"\u7528\u6237\u7ba1\u7406",type:"item",href:"/admin/user",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-users"})}];Object(o["b"])("is_admin")&&e.unshift({title:"\u8fd4\u56de\u7ba1\u7406\u4e2d\u5fc3",type:"item",href:"/admin/dashboard",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-action-undo"})}),this.isAdmin()?this.setState({nav:a}):this.setState({nav:e})}renderMenu(e,a,t,n){switch(e){case"heading":return i.a.createElement("li",{className:"nav-main-heading"},a);case"item":return i.a.createElement("li",{className:"nav-main-item"},i.a.createElement("a",{className:"nav-main-link ".concat(this.props.location.pathname===t&&"active"),onClick:()=>{r.a.push(t),this.props.dispatch({type:"header/showNav"})}},n&&n,i.a.createElement("span",{className:"nav-main-link-name"},a)))}}isAdmin(){return-1!==this.props.location.pathname.indexOf("admin")}render(){return i.a.createElement("nav",{id:"sidebar","aria-label":"Main Navigation"},i.a.createElement("div",{className:"smini-visible-block"},i.a.createElement("div",{className:"content-header bg-black-10"},i.a.createElement("a",{className:"link-fx font-size-lg text-white",href:"index.html"},i.a.createElement("span",{className:"text-white-75"},"X"),i.a.createElement("span",{className:"text-white"},"H")))),i.a.createElement("div",{className:"smini-hidden ".concat(1===c["a"].theme?"":"bg-header-dark")},i.a.createElement("div",{className:"content-header justify-content-lg-center bg-black-10"},i.a.createElement("a",{className:"link-fx font-size-lg text-white",href:"index.html"},i.a.createElement("span",{className:"text-white-75"},window.v2board.title?window.v2board.title:"V2Board")),i.a.createElement("div",{className:"d-lg-none"},i.a.createElement("a",{className:"text-white ml-2","data-toggle":"layout","data-action":"sidebar_close",href:"javascript:void(0)",onClick:()=>this.props.dispatch({type:"header/showNav"})},i.a.createElement("i",{className:"fa fa-times-circle"}))))),i.a.createElement("div",{className:"content-side content-side-full"},i.a.createElement("ul",{className:"nav-main"},this.state.nav.map(e=>{return this.renderMenu(e.type,e.title,e.href,e.icon)}))))}}var d=Object(l["c"])(e=>{var a=e.header;return{header:a}})(m),h=t("t3Un");class p extends i.a.Component{constructor(){super(...arguments),this.state={showAvatarMenu:!1,loading:!1}}componentDidMount(){var e=this;this.props.header.userInfo.email||this.setState({loading:!0},()=>{this.props.dispatch({type:"header/getUserInfo",complete:()=>e.setState({loading:!1})})})}showAvatarMenu(){var e=this;this.setState({showAvatarMenu:!this.state.showAvatarMenu},()=>{document.onclick=function(a){e.state.showAvatarMenu&&e.setState({showAvatarMenu:!1}),document.onclick=void 0}})}logout(){Object(h["a"])("/user/logout").then(e=>{r.a.push("/login")})}render(){return i.a.createElement("header",{id:"page-header"},i.a.createElement("div",{className:"content-header"},i.a.createElement("div",{className:"sidebar-toggle",style:{display:this.props.search?"none":"block"}},i.a.createElement("button",{type:"button",className:"btn btn-dual mr-1 d-lg-none","data-toggle":"layout","data-action":"sidebar_toggle",onClick:()=>this.props.dispatch({type:"header/showNav"})},i.a.createElement("i",{className:"fa fa-fw fa-bars"}))),this.props.search&&i.a.createElement("div",null,i.a.createElement("input",{type:"text",className:"form-control rounded-lg px-4",placeholder:this.props.search.placeholder,onChange:e=>this.props.search.onChange(e.target.value)})),i.a.createElement("div",null,this.state.loading?i.a.createElement("div",{className:"spinner-grow text-primary"}):i.a.createElement("div",{className:"dropdown d-inline-block"},i.a.createElement("button",{type:"button",className:"btn btn-dual",id:"page-header-user-dropdown","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",onClick:()=>this.showAvatarMenu()},i.a.createElement("img",{className:"img-avatar img-avatar32 img-avatar-thumb",src:this.props.header.userInfo.avatar_url,alt:""}),i.a.createElement("span",{className:"d-none d-lg-inline ml-1"},this.props.header.userInfo.email),i.a.createElement("i",{className:"fa fa-fw fa-angle-down ml-1"})),i.a.createElement("div",{className:"dropdown-menu dropdown-menu-right dropdown-menu-lg p-0 ".concat(this.state.showAvatarMenu&&"show"),"aria-labelledby":"page-header-user-dropdown"},i.a.createElement("div",{className:"p-2"},i.a.createElement("a",{className:"dropdown-item d-flex justify-content-between align-items-center",href:"javascript:;",onClick:()=>this.logout()},"\u9000\u51fa\u767b\u5f55",i.a.createElement("i",{className:"fa fa-fw fa-sign-out-alt text-danger ml-1"}))))))))}}var u=Object(l["c"])(e=>{var a=e.header;return{header:a}})(p);class v extends i.a.Component{render(){return i.a.createElement("footer",{id:"page-footer",className:"bg-body-light"},i.a.createElement("div",{className:"content py-0"},i.a.createElement("div",{className:"row font-size-sm"},i.a.createElement("div",{className:"col-sm-6 order-sm-2 mb-1 mb-sm-0 text-center text-sm-right"},i.a.createElement("i",{className:"fa fa-heart text-danger"})," ",window.v2board.title?window.v2board.title:"V2Board"),i.a.createElement("div",{className:"col-sm-6 order-sm-1 text-center text-sm-left"},i.a.createElement("a",{className:"font-w600",href:"/",target:"_blank"},"V2Board v0.2"),i.a.createElement("span",{"data-toggle":"year-copy"})))))}}class g extends i.a.Component{render(){return i.a.createElement("div",{id:"page-container",className:"sidebar-o ".concat(1===c["a"].theme?"sidebar-dark":"page-header-dark"," side-scroll page-header-fixed main-content-boxed side-trans-enabled ").concat(this.props.header.showNav&&"sidebar-o-xs")},i.a.createElement(d,this.props),i.a.createElement(u,{search:this.props.search}),this.props.loading?i.a.createElement("main",{id:"main-container"},i.a.createElement("div",{className:"content content-full"},i.a.createElement("div",{className:"spinner-grow text-primary",role:"status"},i.a.createElement("span",{className:"sr-only"},"Loading...")))):this.props.children,i.a.createElement(v,null))}}a["a"]=Object(l["c"])(e=>{var a=e.header;return{header:a}})(g)}}]);