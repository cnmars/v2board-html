(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{Bl7J:function(e,t,a){"use strict";var i=a("q1tI"),n=a.n(i),s=a("3a4m"),r=a.n(s),l=a("/MKj"),c=a("20nU"),m=a("yWgo");class o extends n.a.Component{constructor(){super(...arguments),this.state={nav:[]}}componentDidMount(){var e=[{title:"\u4eea\u8868\u76d8",type:"item",href:"/dashboard",icon:n.a.createElement("i",{className:"nav-main-link-icon si si-speedometer"})},{title:"\u8ba2\u9605",type:"heading"},{title:"\u6211\u7684\u8ba2\u9605",type:"item",href:"/subscribe",icon:n.a.createElement("i",{className:"nav-main-link-icon si si-badge"})},{title:"\u8d2d\u4e70\u8ba2\u9605",type:"item",href:"/plan",icon:n.a.createElement("i",{className:"nav-main-link-icon si si-bag"})},{title:"\u8d22\u52a1",type:"heading"},{title:"\u6211\u7684\u8ba2\u5355",type:"item",href:"/order",icon:n.a.createElement("i",{className:"nav-main-link-icon si si-list"})},{title:"\u6211\u7684\u9080\u8bf7",type:"item",href:"/invite",icon:n.a.createElement("i",{className:"nav-main-link-icon si si-users"})},{title:"\u7528\u6237",type:"heading"},{title:"\u4e2a\u4eba\u4e2d\u5fc3",type:"item",href:"/profile",icon:n.a.createElement("i",{className:"nav-main-link-icon si si-user"})},{title:"\u6211\u7684\u5de5\u5355",type:"item",href:"/ticket",icon:n.a.createElement("i",{className:"nav-main-link-icon si si-support"})},{title:"\u6d41\u91cf\u660e\u7ec6",type:"item",href:"/traffic",icon:n.a.createElement("i",{className:"nav-main-link-icon si si-bar-chart"})},{title:"\u4f7f\u7528\u6559\u7a0b",type:"item",href:"/tutorial",icon:n.a.createElement("i",{className:"nav-main-link-icon si si-book-open"})}],t=[{title:"\u8fd4\u56de\u7528\u6237\u4e2d\u5fc3",type:"item",href:"/dashboard",icon:n.a.createElement("i",{className:"nav-main-link-icon si si-action-undo"})},{title:"\u4eea\u8868\u76d8",type:"item",href:"/admin/dashboard",icon:n.a.createElement("i",{className:"nav-main-link-icon si si-speedometer"})},{title:"\u8bbe\u7f6e",type:"heading"},{title:"\u7cfb\u7edf\u914d\u7f6e",type:"item",href:"/admin/config/system",icon:n.a.createElement("i",{className:"nav-main-link-icon si si-equalizer"})},{title:"\u652f\u4ed8\u914d\u7f6e",type:"item",href:"/admin/config/payment",icon:n.a.createElement("i",{className:"nav-main-link-icon si si-credit-card"})},{title:"\u670d\u52a1\u5668",type:"heading"},{title:"\u8282\u70b9\u7ba1\u7406",type:"item",href:"/admin/server",icon:n.a.createElement("i",{className:"nav-main-link-icon si si-vector"})},{title:"\u6743\u9650\u7ec4\u7ba1\u7406",type:"item",href:"/admin/server/group",icon:n.a.createElement("i",{className:"nav-main-link-icon si si-wrench"})},{title:"\u8d22\u52a1",type:"heading"},{title:"\u8ba2\u9605\u7ba1\u7406",type:"item",href:"/admin/plan",icon:n.a.createElement("i",{className:"nav-main-link-icon si si-bag"})},{title:"\u8ba2\u5355\u7ba1\u7406",type:"item",href:"/admin/order",icon:n.a.createElement("i",{className:"nav-main-link-icon si si-list"})},{title:"\u4f63\u91d1\u7ba1\u7406",type:"item",href:"/admin/commission",icon:n.a.createElement("i",{className:"nav-main-link-icon si si-user-following"})},{title:"\u7528\u6237",type:"heading"},{title:"\u7528\u6237\u7ba1\u7406",type:"item",href:"/admin/user",icon:n.a.createElement("i",{className:"nav-main-link-icon si si-users"})},{title:"\u516c\u544a\u7ba1\u7406",type:"item",href:"/admin/notice",icon:n.a.createElement("i",{className:"nav-main-link-icon si si-speech"})},{title:"\u5de5\u5355\u7ba1\u7406",type:"item",href:"/admin/ticket",icon:n.a.createElement("i",{className:"nav-main-link-icon si si-support"})}];Object(m["c"])("is_admin")&&e.unshift({title:"\u8fd4\u56de\u7ba1\u7406\u4e2d\u5fc3",type:"item",href:"/admin/dashboard",icon:n.a.createElement("i",{className:"nav-main-link-icon si si-action-undo"})}),this.isAdmin()?this.setState({nav:t}):this.setState({nav:e})}renderMenu(e,t,a,i){switch(e){case"heading":return n.a.createElement("li",{className:"nav-main-heading"},t);case"item":return n.a.createElement("li",{className:"nav-main-item"},n.a.createElement("a",{className:"nav-main-link ".concat(this.props.location.pathname===a&&"active"),onClick:()=>{r.a.push(a),this.props.dispatch({type:"header/showNav"})}},i&&i,n.a.createElement("span",{className:"nav-main-link-name"},t)))}}isAdmin(){return-1!==this.props.location.pathname.indexOf("admin")}render(){return n.a.createElement("nav",{id:"sidebar","aria-label":"Main Navigation"},n.a.createElement("div",{className:"smini-visible-block"},n.a.createElement("div",{className:"content-header bg-black-10"},n.a.createElement("a",{className:"link-fx font-size-lg text-white",href:"index.html"},n.a.createElement("span",{className:"text-white-75"},"X"),n.a.createElement("span",{className:"text-white"},"H")))),n.a.createElement("div",{className:"smini-hidden ".concat(1===c["a"].theme?"":"bg-header-dark")},n.a.createElement("div",{className:"content-header justify-content-lg-center bg-black-10"},n.a.createElement("a",{className:"link-fx font-size-lg text-white",href:"index.html"},n.a.createElement("span",{className:"text-white-75"},window.v2board.title?window.v2board.title:"V2Board")),n.a.createElement("div",{className:"d-lg-none"},n.a.createElement("a",{className:"text-white ml-2","data-toggle":"layout","data-action":"sidebar_close",href:"javascript:void(0)",onClick:()=>this.props.dispatch({type:"header/showNav"})},n.a.createElement("i",{className:"fa fa-times-circle"}))))),n.a.createElement("div",{className:"content-side content-side-full"},n.a.createElement("ul",{className:"nav-main"},this.state.nav.map(e=>{return this.renderMenu(e.type,e.title,e.href,e.icon)}))))}}var d=Object(l["c"])(e=>{var t=e.header;return{header:t}})(o),h=a("t3Un");class p extends n.a.Component{constructor(){super(...arguments),this.state={showAvatarMenu:!1,loading:!1,showSearchBar:!1}}componentDidMount(){var e=this;this.props.header.userInfo.email||this.setState({loading:!0},()=>{this.props.dispatch({type:"header/getUserInfo",complete:()=>e.setState({loading:!1})})})}showAvatarMenu(){var e=this;this.setState({showAvatarMenu:!this.state.showAvatarMenu},()=>{document.onclick=function(t){e.state.showAvatarMenu&&e.setState({showAvatarMenu:!1}),document.onclick=void 0}})}logout(){Object(h["a"])("/user/logout").then(e=>{r.a.push("/login")})}render(){return n.a.createElement("header",{id:"page-header"},n.a.createElement("div",{className:"content-header"},n.a.createElement("div",{className:"sidebar-toggle",style:{display:this.props.search?"block":"none"}},n.a.createElement("button",{type:"button",className:"btn btn-dual mr-1 d-lg-none","data-toggle":"layout","data-action":"sidebar_toggle",onClick:()=>this.props.dispatch({type:"header/showNav"})},n.a.createElement("i",{className:"fa fa-fw fa-bars"})),this.props.search&&n.a.createElement("button",{type:"button",className:"btn btn-dual",onClick:()=>{this.setState({showSearchBar:!0})}},n.a.createElement("i",{className:"fa fa-fw fa-search"})," ",n.a.createElement("span",{className:"ml-1 d-none d-sm-inline-block"},"\u641c\u7d22"))),n.a.createElement("div",null),n.a.createElement("div",null,this.state.loading?n.a.createElement("div",{className:"spinner-grow text-primary"}):n.a.createElement("div",{className:"dropdown d-inline-block"},n.a.createElement("button",{type:"button",className:"btn btn-dual",id:"page-header-user-dropdown","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",onClick:()=>this.showAvatarMenu()},n.a.createElement("img",{className:"img-avatar img-avatar32 img-avatar-thumb",src:this.props.header.userInfo.avatar_url,alt:""}),n.a.createElement("span",{className:"d-none d-lg-inline ml-1"},this.props.header.userInfo.email),n.a.createElement("i",{className:"fa fa-fw fa-angle-down ml-1"})),n.a.createElement("div",{className:"dropdown-menu dropdown-menu-right dropdown-menu-lg p-0 ".concat(this.state.showAvatarMenu&&"show"),"aria-labelledby":"page-header-user-dropdown"},n.a.createElement("div",{className:"p-2"},n.a.createElement("a",{className:"dropdown-item d-flex justify-content-between align-items-center",href:"javascript:;",onClick:()=>this.logout()},"\u9000\u51fa\u767b\u5f55",n.a.createElement("i",{className:"fa fa-fw fa-sign-out-alt text-danger ml-1"}))))))),this.props.search&&n.a.createElement("div",{className:"overlay-header bg-dark ".concat(this.state.showSearchBar?"show":"")},n.a.createElement("div",{className:"content-header bg-dark"},n.a.createElement("div",{className:"w-100"},n.a.createElement("div",{className:"input-group"},n.a.createElement("div",{className:"input-group-prepend"},n.a.createElement("button",{type:"button",className:"btn btn-dark",onClick:()=>{this.setState({showSearchBar:!1})}},n.a.createElement("i",{className:"fa fa-fw fa-times-circle"}))),n.a.createElement("input",{type:"text",className:"form-control border-0",placeholder:this.props.search.placeholder,onChange:e=>this.props.search.onChange(e.target.value)}))))))}}var u=Object(l["c"])(e=>{var t=e.header;return{header:t}})(p);class v extends n.a.Component{render(){return n.a.createElement("footer",{id:"page-footer",className:"bg-body-light"},n.a.createElement("div",{className:"content py-0"},n.a.createElement("div",{className:"row font-size-sm"},n.a.createElement("div",{className:"col-sm-6 order-sm-2 mb-1 mb-sm-0 text-center text-sm-right"},n.a.createElement("i",{className:"fa fa-heart text-danger"})," ",window.v2board.title?window.v2board.title:"V2Board"),n.a.createElement("div",{className:"col-sm-6 order-sm-1 text-center text-sm-left"},n.a.createElement("a",{className:"font-w600",href:"/",target:"_blank"},"V2Board v1.0"),n.a.createElement("span",{"data-toggle":"year-copy"})))))}}class b extends n.a.Component{render(){return n.a.createElement("div",{id:"page-container",className:"sidebar-o ".concat(1===c["a"].theme?"sidebar-dark":"page-header-dark"," side-scroll page-header-fixed main-content-boxed side-trans-enabled ").concat(this.props.header.showNav&&"sidebar-o-xs")},n.a.createElement(d,this.props),n.a.createElement(u,{search:this.props.search}),this.props.loading?n.a.createElement("main",{id:"main-container"},n.a.createElement("div",{className:"content content-full"},n.a.createElement("div",{className:"spinner-grow text-primary",role:"status"},n.a.createElement("span",{className:"sr-only"},"Loading...")))):this.props.children,n.a.createElement(v,null))}}t["a"]=Object(l["c"])(e=>{var t=e.header;return{header:t}})(b)},yjin:function(e,t,a){"use strict";a.r(t);var i=a("jehZ"),n=a.n(i),s=(a("2qtc"),a("kLXV")),r=(a("OaEy"),a("2fM7")),l=(a("5NDa"),a("5rEg")),c=(a("g9YV"),a("wCAj")),m=(a("/zsF"),a("PArb")),o=(a("5Dmo"),a("3S7+")),d=(a("Pwec"),a("CtXQ")),h=(a("BoS7"),a("Sdc0")),p=(a("+BJd"),a("mr32")),u=a("p0pE"),v=a.n(u),b=a("q1tI"),g=a.n(b),E=a("Bl7J"),f=a("/MKj"),y=a("t3Un");class N extends g.a.Component{constructor(){super(...arguments),this.state={plan:[],group:[],visible:!1,submit:{show:0},loading:!0}}componentDidMount(){this.fetchData()}fetchData(){Object(y["a"])("/admin/server/group/fetch").then(e=>{200===e.code&&this.setState({group:e.data})}),Object(y["a"])("/admin/plan/fetch").then(e=>{200===e.code&&(e.data.map((t,a)=>{e.data[a].month_price=e.data[a].month_price/100,e.data[a].quarter_price=e.data[a].quarter_price/100,e.data[a].half_year_price=e.data[a].half_year_price/100,e.data[a].year_price=e.data[a].year_price/100}),this.setState({plan:e.data,loading:!1}))})}create(){Object(y["b"])("/admin/plan/save",v()({},this.state.submit,{month_price:null!==this.state.submit.month_price?100*this.state.submit.month_price:void 0,quarter_price:null!==this.state.submit.quarter_price?100*this.state.submit.quarter_price:void 0,half_year_price:null!==this.state.submit.half_year_price?100*this.state.submit.half_year_price:void 0,year_price:null!==this.state.submit.year_price?100*this.state.submit.year_price:void 0})).then(e=>{200===e.code&&(this.modalVisible(),this.fetchData())})}modalVisible(){this.setState({visible:!this.state.visible},()=>{this.setState({submit:{show:0}})})}getGroup(e){this.state.group.map(t=>{if(t.id===e)return t})}priceOnChange(e,t){this.setState({submit:v()({},this.state.submit,{[e]:t})})}drop(e){Object(y["b"])("/admin/plan/drop",{id:e}).then(e=>{200===e.code&&e.data&&this.fetchData()})}edit(e){this.setState({submit:v()({},this.state.plan[e]),visible:!0})}update(e,t,a){this.setState({[e+t+"_loading"]:!0},()=>{Object(y["b"])("/admin/plan/update",{id:e,[t]:a}).then(a=>{200===a.code&&(this.fetchData(),this.setState({[e+t+"_loading"]:!1}))})})}render(){var e=[{title:"\u5957\u9910\u540d\u79f0",dataIndex:"name",key:"name"},{title:"\u6743\u9650\u7ec4",dataIndex:"group_id",key:"group_id",render:(e,t)=>{t.ext_data;var a=[];return this.state.group.map(t=>{t.id===parseInt(e)&&a.push(g.a.createElement(p["a"],null,t.name))}),a}},{title:"\u6708\u4ed8\u552e\u4ef7",dataIndex:"month_price",key:"month_price",render:e=>{return e.toFixed(2)}},{title:"\u5b63\u4ed8\u552e\u4ef7",dataIndex:"quarter_price",key:"quarter_price",render:e=>{return e.toFixed(2)}},{title:"\u534a\u5e74\u4ed8\u552e\u4ef7",dataIndex:"half_year_price",key:"half_year_price",render:e=>{return e.toFixed(2)}},{title:"\u5e74\u4ed8\u552e\u4ef7",dataIndex:"year_price",key:"year_price",render:e=>{return e.toFixed(2)}},{title:"\u9500\u552e\u72b6\u6001",dataIndex:"show",key:"show",align:"center",render:(e,t)=>{return g.a.createElement(h["a"],{loading:this.state[t.id+"show_loading"],size:"small",checked:parseInt(e),onClick:()=>this.update(t.id,"show",parseInt(e)?0:1)})}},{title:g.a.createElement("span",null,"\u7eed\u8d39 ",g.a.createElement(o["a"],{placement:"top",title:"\u5728\u8ba2\u9605\u505c\u6b62\u9500\u552e\u65f6\uff0c\u5df2\u8d2d\u7528\u6237\u662f\u5426\u53ef\u4ee5\u7eed\u8d39"},g.a.createElement(d["a"],{type:"question-circle"}))),dataIndex:"renew",key:"renew",align:"center",render:(e,t)=>{return g.a.createElement(h["a"],{loading:this.state[t.id+"renew_loading"],size:"small",checked:parseInt(e),onClick:()=>this.update(t.id,"renew",parseInt(e)?0:1)})}},{title:"\u64cd\u4f5c",dataIndex:"action",key:"action",align:"right",render:(e,t,a)=>{return g.a.createElement("div",null,g.a.createElement("a",{href:"javascript:;",onClick:()=>this.edit(a)},"\u7f16\u8f91"),g.a.createElement(m["a"],{type:"vertical"}),g.a.createElement("a",{href:"javascript:;",onClick:()=>this.drop(t.id)},"\u5220\u9664"))}}];return g.a.createElement(E["a"],n()({},this.props,{loading:this.state.loading}),g.a.createElement("main",{id:"main-container"},g.a.createElement("div",{className:"content content-full"},g.a.createElement("div",{className:"d-flex justify-content-between align-items-center"},g.a.createElement("h2",{className:"font-w300 mt-4 mb-3"},"\u8ba2\u9605\u7ba1\u7406"),g.a.createElement("button",{type:"button",className:"btn btn-primary btn-sm btn-primary btn-rounded px-3",onClick:()=>this.modalVisible()},g.a.createElement(d["a"],{type:"plus"})," \u65b0\u5efa\u5957\u9910")),g.a.createElement("div",{className:"bg-white"},g.a.createElement(c["a"],{dataSource:this.state.plan,columns:e,pagination:!1,scroll:{x:1e3}})))),g.a.createElement(s["a"],{title:"".concat(this.state.submit.id?"\u7f16\u8f91\u8ba2\u9605":"\u65b0\u5efa\u8ba2\u9605"),visible:this.state.visible,onCancel:()=>this.modalVisible(),onOk:()=>this.create()},g.a.createElement("div",null,g.a.createElement("div",{className:"form-group"},g.a.createElement("label",{for:"example-text-input-alt"},"\u5957\u9910\u540d\u79f0"),g.a.createElement(l["a"],{placeholder:"\u8bf7\u8f93\u5165\u5957\u9910\u540d\u79f0",value:this.state.submit.name,onChange:e=>{this.setState({submit:v()({},this.state.submit,{name:e.target.value})})}})),g.a.createElement("div",{className:"form-group"},g.a.createElement("label",{for:"example-text-input-alt"},"\u5957\u9910\u63cf\u8ff0"),g.a.createElement(l["a"].TextArea,{rows:4,value:this.state.submit.content,placeholder:"\u8bf7\u8f93\u5165\u5957\u9910\u63cf\u8ff0\uff0c\u652f\u6301HTML",onChange:e=>{this.setState({submit:v()({},this.state.submit,{content:e.target.value})})}})),g.a.createElement(m["a"],{orientation:"center"},"\u552e\u4ef7\u8bbe\u7f6e ",g.a.createElement(o["a"],{placement:"top",title:"\u5c06\u91d1\u989d\u8bbe\u7f6e0\u540e\u5219\u4e0d\u4f1a\u8fdb\u884c\u51fa\u552e"},g.a.createElement(d["a"],{type:"info-circle"}))),g.a.createElement("div",{className:"row"},g.a.createElement("div",{className:"form-group col-3"},g.a.createElement("label",{for:"example-text-input-alt"},"\u6708\u4ed8"),g.a.createElement(l["a"],{placeholder:"0.00",value:this.state.submit.month_price,onChange:e=>this.priceOnChange("month_price",e.target.value)})),g.a.createElement("div",{className:"form-group col-3"},g.a.createElement("label",{for:"example-text-input-alt"},"\u5b63\u4ed8"),g.a.createElement(l["a"],{placeholder:"0.00",value:this.state.submit.quarter_price,onChange:e=>this.priceOnChange("quarter_price",e.target.value)})),g.a.createElement("div",{className:"form-group col-3"},g.a.createElement("label",{for:"example-text-input-alt"},"\u534a\u5e74"),g.a.createElement(l["a"],{placeholder:"0.00",value:this.state.submit.half_year_price,onChange:e=>this.priceOnChange("half_year_price",e.target.value)})),g.a.createElement("div",{className:"form-group col-3"},g.a.createElement("label",{for:"example-text-input-alt"},"\u5e74\u4ed8"),g.a.createElement(l["a"],{placeholder:"0.00",value:this.state.submit.year_price,onChange:e=>this.priceOnChange("year_price",e.target.value)}))),g.a.createElement(m["a"],null),g.a.createElement("div",{className:"form-group"},g.a.createElement("label",{for:"example-text-input-alt"},"\u5957\u9910\u6d41\u91cf(GB)"),g.a.createElement(l["a"],{placeholder:"\u8bf7\u8f93\u5165\u5957\u9910\u6d41\u91cf",value:this.state.submit.transfer_enable,onChange:e=>{this.setState({submit:v()({},this.state.submit,{transfer_enable:e.target.value})})}})),g.a.createElement("div",{className:"form-group"},g.a.createElement("label",{for:"example-text-input-alt"},"\u6743\u9650\u7ec4"),g.a.createElement(r["a"],{placeholder:"\u8bf7\u9009\u62e9\u6743\u9650\u7ec4",style:{width:"100%"},value:this.state.submit.group_id?["".concat(this.state.submit.group_id)]:void 0,onChange:e=>{this.setState({submit:v()({},this.state.submit,{group_id:e})})}},this.state.group.map(e=>{return g.a.createElement(r["a"].Option,{key:e.id},e.name)}))))))}}t["default"]=Object(f["c"])()(N)}}]);