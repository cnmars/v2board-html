(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{"6G7H":function(e,t,a){"use strict";a.r(t);var i=a("jehZ"),n=a.n(i),s=(a("2qtc"),a("kLXV")),r=(a("OaEy"),a("2fM7")),l=(a("5NDa"),a("5rEg")),c=(a("g9YV"),a("wCAj")),m=(a("/zsF"),a("PArb")),o=(a("BoS7"),a("Sdc0")),d=(a("+BJd"),a("mr32")),h=(a("Awhp"),a("KrTs")),p=(a("5Dmo"),a("3S7+")),u=(a("Pwec"),a("CtXQ")),v=a("p0pE"),b=a.n(v),E=a("q1tI"),g=a.n(E),f=a("Bl7J"),N=a("/MKj"),w=a("t3Un");class y extends g.a.Component{constructor(){super(...arguments),this.state={server:[],group:[],visible:!1,submit:{tls:0,rate:1,tags:[]},loading:!0},this.moveRow=((e,t)=>{console.log(e,t)})}componentDidMount(){this.fetchData()}fetchData(){Object(w["a"])("/admin/server/fetch",{group_id:this.props.location.query.group_id}).then(e=>{200===e.code&&this.setState({server:e.data,loading:!1})}),Object(w["a"])("/admin/server/group/fetch").then(e=>{200===e.code&&this.setState({group:e.data})})}modalVisible(){this.setState({visible:!this.state.visible}),this.state.visible&&this.setState({submit:{tls:0,rate:1}})}submit(){Object(w["b"])("/admin/server/save",this.state.submit).then(e=>{200===e.code&&(this.modalVisible(),this.fetchData())})}drop(e){Object(w["b"])("/admin/server/drop",{id:e}).then(e=>{this.fetchData()})}update(e,t,a){this.setState({[e+t+"_loading"]:!0},()=>{Object(w["b"])("/admin/server/update",{id:e,[t]:a}).then(a=>{200===a.code&&(this.fetchData(),this.setState({[e+t+"_loading"]:!1}))})})}edit(e){this.setState({submit:b()({},this.state.server[e]),visible:!0})}render(){var e=[{title:"\u8282\u70b9ID",dataIndex:"id",key:"id"},{title:g.a.createElement("span",null,"\u5728\u7ebf ",g.a.createElement(p["a"],{placement:"top",title:"\u4e94\u5206\u949f\u5185\u8282\u70b9\u5728\u7ebf\u60c5\u51b5"},g.a.createElement(u["a"],{type:"question-circle"}))),dataIndex:"last_check_at",key:"last_check_at",align:"center",render:e=>{return g.a.createElement(h["a"],{status:(new Date).getTime()/1e3-300>e?"error":"processing"})}},{title:"\u6743\u9650\u7ec4",dataIndex:"group_id",key:"group_id",render:(e,t)=>{var a=t.group_id,i=[];return a.map(e=>{this.state.group.map(t=>{if(t.id===parseInt(e))return i.push(g.a.createElement(d["a"],null,t.name))})}),i}},{title:"\u8282\u70b9\u540d\u79f0",dataIndex:"name",key:"name"},{title:"\u5730\u5740",dataIndex:"host",key:"host",render:(e,t)=>{return t.host+":"+t.port}},{title:"TLS",dataIndex:"tls",key:"tls",render:e=>{return 0===e?"\u4e0d\u652f\u6301":"\u652f\u6301"}},{title:g.a.createElement(p["a"],{placement:"top",title:"\u4f7f\u7528\u7684\u6d41\u91cf\u5c06\u4e58\u4ee5\u500d\u7387\u8fdb\u884c\u6263\u9664"},"\u500d\u7387 ",g.a.createElement(u["a"],{type:"question-circle"})),dataIndex:"rate",key:"rate",align:"center",render:e=>{return g.a.createElement(d["a"],{color:"blue",style:{minWidth:60}},e+" x")}},{title:"\u663e\u9690",dataIndex:"show",key:"show",align:"center",render:(e,t)=>{return g.a.createElement(o["a"],{loading:this.state[t.id+"show_loading"],size:"small",checked:parseInt(e),onClick:()=>this.update(t.id,"show",parseInt(e)?0:1)})}},{title:"\u64cd\u4f5c",dataIndex:"action",key:"action",align:"right",render:(e,t,a)=>{return g.a.createElement("div",null,g.a.createElement("a",{href:"javascript:;",onClick:()=>this.edit(a)},"\u7f16\u8f91"),g.a.createElement(m["a"],{type:"vertical"}),g.a.createElement("a",{href:"javascript:;",onClick:()=>this.drop(t.id)},"\u5220\u9664"))}}];return g.a.createElement(f["a"],n()({},this.props,{loading:this.state.loading}),g.a.createElement("main",{id:"main-container"},g.a.createElement("div",{className:"content content-full"},g.a.createElement("div",{className:"d-flex justify-content-between align-items-center"},g.a.createElement("h2",{className:"font-w300 mt-4 mb-3"},"\u8282\u70b9\u7ba1\u7406"),g.a.createElement("button",{type:"button",className:"btn btn-primary btn-sm btn-primary btn-rounded px-3",onClick:()=>this.modalVisible()},"\u6dfb\u52a0\u8282\u70b9")),g.a.createElement("div",{className:"bg-white"},g.a.createElement(c["a"],{dataSource:this.state.server,columns:e,pagination:!1,scroll:{x:1e3},onRow:(e,t)=>({index:t,moveRow:this.moveRow})})))),g.a.createElement(s["a"],{title:"\u65b0\u5efa\u8282\u70b9",visible:this.state.visible,onCancel:()=>this.modalVisible(),onOk:()=>this.submit()},g.a.createElement("div",null,g.a.createElement("div",{className:"row"},g.a.createElement("div",{className:"form-group col-8"},g.a.createElement("label",{for:"example-text-input-alt"},"\u8282\u70b9\u540d\u79f0"),g.a.createElement(l["a"],{placeholder:"\u8bf7\u8f93\u5165\u8282\u70b9\u540d\u79f0",value:this.state.submit.name,onChange:e=>{this.setState({submit:b()({},this.state.submit,{name:e.target.value})})}})),g.a.createElement("div",{className:"form-group col-4"},g.a.createElement("label",{for:"example-text-input-alt"},"\u500d\u7387"),g.a.createElement(l["a"],{addonAfter:"x",placeholder:"\u8bf7\u8f93\u5165\u8282\u70b9\u500d\u7387",value:this.state.submit.rate,onChange:e=>{this.setState({submit:b()({},this.state.submit,{rate:e.target.value})})}}))),g.a.createElement("div",{className:"form-group"},g.a.createElement("label",{for:"example-text-input-alt"},"\u8282\u70b9\u6807\u7b7e"),g.a.createElement(r["a"],{mode:"tags",value:this.state.submit.tags?this.state.submit.tags:[],style:{width:"100%"},placeholder:"\u8f93\u5165\u540e\u56de\u8f66\u6dfb\u52a0\u6807\u7b7e",onChange:e=>{this.setState({submit:b()({},this.state.submit,{tags:e})})}})),g.a.createElement("div",{className:"form-group"},g.a.createElement("label",{for:"example-text-input-alt"},"\u6743\u9650\u7ec4"),g.a.createElement(r["a"],{mode:"tags",value:this.state.submit.group_id,placeholder:"\u8bf7\u9009\u62e9\u6743\u9650\u7ec4",style:{width:"100%"},onChange:e=>{this.setState({submit:b()({},this.state.submit,{group_id:e})})}},this.state.group.map(e=>{return g.a.createElement(r["a"].Option,{key:e.id},e.name)}))),g.a.createElement("div",{className:"row"},g.a.createElement("div",{className:"form-group col-8"},g.a.createElement("label",{for:"example-text-input-alt"},"\u8282\u70b9\u5730\u5740"),g.a.createElement(l["a"],{placeholder:"\u8bf7\u8f93\u5165\u8fde\u63a5\u5730\u5740",value:this.state.submit.host,onChange:e=>{this.setState({submit:b()({},this.state.submit,{host:e.target.value})})}})),g.a.createElement("div",{className:"form-group col-4"},g.a.createElement("label",{for:"example-text-input-alt"},"\u662f\u5426\u652f\u6301TLS"),g.a.createElement(r["a"],{value:parseInt(this.state.submit.tls)?["1"]:["0"],placeholder:"\u662f\u5426\u652f\u6301TLS",style:{width:"100%"},onChange:e=>{console.log(e),this.setState({submit:b()({},this.state.submit,{tls:e})})}},g.a.createElement(r["a"].Option,{key:0},"\u4e0d\u652f\u6301"),g.a.createElement(r["a"].Option,{key:1},"\u652f\u6301")))),g.a.createElement("div",{className:"row"},g.a.createElement("div",{className:"form-group col-4"},g.a.createElement("label",{for:"example-text-input-alt"},"\u8fde\u63a5\u7aef\u53e3"),g.a.createElement(l["a"],{placeholder:"\u7528\u6237\u8fde\u63a5\u7aef\u53e3",value:this.state.submit.port,onChange:e=>{this.setState({submit:b()({},this.state.submit,{port:e.target.value,server_port:e.target.value})})}})),g.a.createElement("div",{className:"form-group col-4"},g.a.createElement("label",{for:"example-text-input-alt"},"\u670d\u52a1\u7aef\u53e3"),g.a.createElement(l["a"],{placeholder:"\u975eNAT\u540c\u8fde\u63a5\u7aef\u53e3",value:this.state.submit.server_port,onChange:e=>{this.setState({submit:b()({},this.state.submit,{server_port:e.target.value})})}})),g.a.createElement("div",{className:"form-group col-4"},g.a.createElement("label",{for:"example-text-input-alt"},"\u4f20\u8f93\u534f\u8bae"),g.a.createElement(r["a"],{value:this.state.submit.network,placeholder:"\u9009\u62e9\u4f20\u8f93\u534f\u8bae",style:{width:"100%"},onChange:e=>{this.setState({submit:b()({},this.state.submit,{network:e})})}},g.a.createElement(r["a"].Option,{value:"tcp"},"TCP"),g.a.createElement(r["a"].Option,{value:"ws"},"WebSocket")))),g.a.createElement("div",{className:"form-group"},g.a.createElement("label",{for:"example-text-input-alt"},"\u534f\u8bae\u8be6\u7ec6\u914d\u7f6e ",g.a.createElement("a",{href:"https://www.v2ray.com/chapter_02/05_transport.html"},g.a.createElement(u["a"],{type:"link"}),"\u53c2\u8003")),g.a.createElement(l["a"].TextArea,{value:this.state.submit.settings,rows:4,onChange:e=>{this.setState({submit:b()({},this.state.submit,{settings:e.target.value})})},placeholder:"\u5982\u9700\u914d\u7f6e\u534f\u8bae\u8bbe\u7f6e\u8bf7\u5728\u6b64\u8f93\u5165json\u914d\u7f6e\u9879\uff0c\u4e0d\u4f1a\u586b\u5199\u53ef\u7559\u7a7a\uff0cQuantumult\u90e8\u5206\u8f6f\u4ef6\u9700\u8981\u5f3a\u5236\u914d\u7f6e"})))))}}t["default"]=Object(N["c"])()(y)},Bl7J:function(e,t,a){"use strict";var i=a("q1tI"),n=a.n(i),s=a("3a4m"),r=a.n(s),l=a("/MKj"),c=a("20nU"),m=a("yWgo");class o extends n.a.Component{constructor(){super(...arguments),this.state={nav:[]}}componentDidMount(){var e=[{title:"\u4eea\u8868\u76d8",type:"item",href:"/dashboard",icon:n.a.createElement("i",{className:"nav-main-link-icon si si-speedometer"})},{title:"\u8ba2\u9605",type:"heading"},{title:"\u6211\u7684\u8ba2\u9605",type:"item",href:"/subscribe",icon:n.a.createElement("i",{className:"nav-main-link-icon si si-badge"})},{title:"\u8d2d\u4e70\u8ba2\u9605",type:"item",href:"/plan",icon:n.a.createElement("i",{className:"nav-main-link-icon si si-bag"})},{title:"\u8d22\u52a1",type:"heading"},{title:"\u6211\u7684\u8ba2\u5355",type:"item",href:"/order",icon:n.a.createElement("i",{className:"nav-main-link-icon si si-list"})},{title:"\u6211\u7684\u9080\u8bf7",type:"item",href:"/invite",icon:n.a.createElement("i",{className:"nav-main-link-icon si si-users"})},{title:"\u7528\u6237",type:"heading"},{title:"\u4e2a\u4eba\u4e2d\u5fc3",type:"item",href:"/profile",icon:n.a.createElement("i",{className:"nav-main-link-icon si si-user"})},{title:"\u6211\u7684\u5de5\u5355",type:"item",href:"/ticket",icon:n.a.createElement("i",{className:"nav-main-link-icon si si-support"})},{title:"\u6d41\u91cf\u660e\u7ec6",type:"item",href:"/traffic",icon:n.a.createElement("i",{className:"nav-main-link-icon si si-bar-chart"})},{title:"\u4f7f\u7528\u6559\u7a0b",type:"item",href:"/tutorial",icon:n.a.createElement("i",{className:"nav-main-link-icon si si-book-open"})}],t=[{title:"\u8fd4\u56de\u7528\u6237\u4e2d\u5fc3",type:"item",href:"/dashboard",icon:n.a.createElement("i",{className:"nav-main-link-icon si si-action-undo"})},{title:"\u4eea\u8868\u76d8",type:"item",href:"/admin/dashboard",icon:n.a.createElement("i",{className:"nav-main-link-icon si si-speedometer"})},{title:"\u8bbe\u7f6e",type:"heading"},{title:"\u7cfb\u7edf\u914d\u7f6e",type:"item",href:"/admin/config/system",icon:n.a.createElement("i",{className:"nav-main-link-icon si si-equalizer"})},{title:"\u652f\u4ed8\u914d\u7f6e",type:"item",href:"/admin/config/payment",icon:n.a.createElement("i",{className:"nav-main-link-icon si si-credit-card"})},{title:"\u670d\u52a1\u5668",type:"heading"},{title:"\u8282\u70b9\u7ba1\u7406",type:"item",href:"/admin/server",icon:n.a.createElement("i",{className:"nav-main-link-icon si si-vector"})},{title:"\u6743\u9650\u7ec4\u7ba1\u7406",type:"item",href:"/admin/server/group",icon:n.a.createElement("i",{className:"nav-main-link-icon si si-wrench"})},{title:"\u8d22\u52a1",type:"heading"},{title:"\u8ba2\u9605\u7ba1\u7406",type:"item",href:"/admin/plan",icon:n.a.createElement("i",{className:"nav-main-link-icon si si-bag"})},{title:"\u8ba2\u5355\u7ba1\u7406",type:"item",href:"/admin/order",icon:n.a.createElement("i",{className:"nav-main-link-icon si si-list"})},{title:"\u4f63\u91d1\u7ba1\u7406",type:"item",href:"/admin/commission",icon:n.a.createElement("i",{className:"nav-main-link-icon si si-user-following"})},{title:"\u7528\u6237",type:"heading"},{title:"\u7528\u6237\u7ba1\u7406",type:"item",href:"/admin/user",icon:n.a.createElement("i",{className:"nav-main-link-icon si si-users"})},{title:"\u516c\u544a\u7ba1\u7406",type:"item",href:"/admin/notice",icon:n.a.createElement("i",{className:"nav-main-link-icon si si-speech"})},{title:"\u5de5\u5355\u7ba1\u7406",type:"item",href:"/admin/ticket",icon:n.a.createElement("i",{className:"nav-main-link-icon si si-support"})}];Object(m["c"])("is_admin")&&e.unshift({title:"\u8fd4\u56de\u7ba1\u7406\u4e2d\u5fc3",type:"item",href:"/admin/dashboard",icon:n.a.createElement("i",{className:"nav-main-link-icon si si-action-undo"})}),this.isAdmin()?this.setState({nav:t}):this.setState({nav:e})}renderMenu(e,t,a,i){switch(e){case"heading":return n.a.createElement("li",{className:"nav-main-heading"},t);case"item":return n.a.createElement("li",{className:"nav-main-item"},n.a.createElement("a",{className:"nav-main-link ".concat(this.props.location.pathname===a&&"active"),onClick:()=>{r.a.push(a),this.props.dispatch({type:"header/showNav"})}},i&&i,n.a.createElement("span",{className:"nav-main-link-name"},t)))}}isAdmin(){return-1!==this.props.location.pathname.indexOf("admin")}render(){return n.a.createElement("nav",{id:"sidebar","aria-label":"Main Navigation"},n.a.createElement("div",{className:"smini-visible-block"},n.a.createElement("div",{className:"content-header bg-black-10"},n.a.createElement("a",{className:"link-fx font-size-lg text-white",href:"index.html"},n.a.createElement("span",{className:"text-white-75"},"X"),n.a.createElement("span",{className:"text-white"},"H")))),n.a.createElement("div",{className:"smini-hidden ".concat(1===c["a"].theme?"":"bg-header-dark")},n.a.createElement("div",{className:"content-header justify-content-lg-center bg-black-10"},n.a.createElement("a",{className:"link-fx font-size-lg text-white",href:"index.html"},n.a.createElement("span",{className:"text-white-75"},window.v2board.title?window.v2board.title:"V2Board")),n.a.createElement("div",{className:"d-lg-none"},n.a.createElement("a",{className:"text-white ml-2","data-toggle":"layout","data-action":"sidebar_close",href:"javascript:void(0)",onClick:()=>this.props.dispatch({type:"header/showNav"})},n.a.createElement("i",{className:"fa fa-times-circle"}))))),n.a.createElement("div",{className:"content-side content-side-full"},n.a.createElement("ul",{className:"nav-main"},this.state.nav.map(e=>{return this.renderMenu(e.type,e.title,e.href,e.icon)}))))}}var d=Object(l["c"])(e=>{var t=e.header;return{header:t}})(o),h=a("t3Un");class p extends n.a.Component{constructor(){super(...arguments),this.state={showAvatarMenu:!1,loading:!1,showSearchBar:!1}}componentDidMount(){var e=this;this.props.header.userInfo.email||this.setState({loading:!0},()=>{this.props.dispatch({type:"header/getUserInfo",complete:()=>e.setState({loading:!1})})})}showAvatarMenu(){var e=this;this.setState({showAvatarMenu:!this.state.showAvatarMenu},()=>{document.onclick=function(t){e.state.showAvatarMenu&&e.setState({showAvatarMenu:!1}),document.onclick=void 0}})}logout(){Object(h["a"])("/user/logout").then(e=>{r.a.push("/login")})}render(){return n.a.createElement("header",{id:"page-header"},n.a.createElement("div",{className:"content-header"},n.a.createElement("div",{className:"sidebar-toggle",style:{display:this.props.search?"block":"none"}},n.a.createElement("button",{type:"button",className:"btn btn-dual mr-1 d-lg-none","data-toggle":"layout","data-action":"sidebar_toggle",onClick:()=>this.props.dispatch({type:"header/showNav"})},n.a.createElement("i",{className:"fa fa-fw fa-bars"})),this.props.search&&n.a.createElement("button",{type:"button",className:"btn btn-dual",onClick:()=>{this.setState({showSearchBar:!0})}},n.a.createElement("i",{className:"fa fa-fw fa-search"})," ",n.a.createElement("span",{className:"ml-1 d-none d-sm-inline-block"},"\u641c\u7d22"))),n.a.createElement("div",null),n.a.createElement("div",null,this.state.loading?n.a.createElement("div",{className:"spinner-grow text-primary"}):n.a.createElement("div",{className:"dropdown d-inline-block"},n.a.createElement("button",{type:"button",className:"btn btn-dual",id:"page-header-user-dropdown","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",onClick:()=>this.showAvatarMenu()},n.a.createElement("img",{className:"img-avatar img-avatar32 img-avatar-thumb",src:this.props.header.userInfo.avatar_url,alt:""}),n.a.createElement("span",{className:"d-none d-lg-inline ml-1"},this.props.header.userInfo.email),n.a.createElement("i",{className:"fa fa-fw fa-angle-down ml-1"})),n.a.createElement("div",{className:"dropdown-menu dropdown-menu-right dropdown-menu-lg p-0 ".concat(this.state.showAvatarMenu&&"show"),"aria-labelledby":"page-header-user-dropdown"},n.a.createElement("div",{className:"p-2"},n.a.createElement("a",{className:"dropdown-item d-flex justify-content-between align-items-center",href:"javascript:;",onClick:()=>this.logout()},"\u9000\u51fa\u767b\u5f55",n.a.createElement("i",{className:"fa fa-fw fa-sign-out-alt text-danger ml-1"}))))))),this.props.search&&n.a.createElement("div",{className:"overlay-header bg-dark ".concat(this.state.showSearchBar?"show":"")},n.a.createElement("div",{className:"content-header bg-dark"},n.a.createElement("div",{className:"w-100"},n.a.createElement("div",{className:"input-group"},n.a.createElement("div",{className:"input-group-prepend"},n.a.createElement("button",{type:"button",className:"btn btn-dark",onClick:()=>{this.setState({showSearchBar:!1})}},n.a.createElement("i",{className:"fa fa-fw fa-times-circle"}))),n.a.createElement("input",{type:"text",className:"form-control border-0",placeholder:this.props.search.placeholder,onChange:e=>this.props.search.onChange(e.target.value)}))))))}}var u=Object(l["c"])(e=>{var t=e.header;return{header:t}})(p);class v extends n.a.Component{render(){return n.a.createElement("footer",{id:"page-footer",className:"bg-body-light"},n.a.createElement("div",{className:"content py-0"},n.a.createElement("div",{className:"row font-size-sm"},n.a.createElement("div",{className:"col-sm-6 order-sm-2 mb-1 mb-sm-0 text-center text-sm-right"},n.a.createElement("i",{className:"fa fa-heart text-danger"})," ",window.v2board.title?window.v2board.title:"V2Board"),n.a.createElement("div",{className:"col-sm-6 order-sm-1 text-center text-sm-left"},n.a.createElement("a",{className:"font-w600",href:"/",target:"_blank"},"V2Board v1.0"),n.a.createElement("span",{"data-toggle":"year-copy"})))))}}class b extends n.a.Component{render(){return n.a.createElement("div",{id:"page-container",className:"sidebar-o ".concat(1===c["a"].theme?"sidebar-dark":"page-header-dark"," side-scroll page-header-fixed main-content-boxed side-trans-enabled ").concat(this.props.header.showNav&&"sidebar-o-xs")},n.a.createElement(d,this.props),n.a.createElement(u,{search:this.props.search}),this.props.loading?n.a.createElement("main",{id:"main-container"},n.a.createElement("div",{className:"content content-full"},n.a.createElement("div",{className:"spinner-grow text-primary",role:"status"},n.a.createElement("span",{className:"sr-only"},"Loading...")))):this.props.children,n.a.createElement(v,null))}}t["a"]=Object(l["c"])(e=>{var t=e.header;return{header:t}})(b)}}]);