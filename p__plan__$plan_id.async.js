(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[18],{"+URf":function(e,t,a){"use strict";a.r(t);var i=a("jehZ"),n=a.n(i),s=(a("Pwec"),a("CtXQ")),r=(a("7Kak"),a("9yH6")),l=a("p0pE"),c=a.n(l),o=a("q1tI"),m=a.n(o),d=a("Bl7J"),h=a("/MKj"),p=a("t3Un"),u=a("LbTH"),v=a("3a4m"),b=a.n(v);class g extends m.a.Component{constructor(){super(...arguments),this.state={submit:{plan_id:this.props.match.params.plan_id},loading:!1,layout_login:!0}}componentDidMount(){Object(p["b"])("/user/plan/info",{plan_id:this.props.match.params.plan_id}).then(e=>{200===e.code&&this.setState(c()({},e.data,{layout_login:!1}),()=>{this.setState({submit:c()({},this.state.submit,{cycle:this.getFirstPrice()})})})})}getFirstPrice(){return this.state.month_price?"month_price":this.state.quarter_price?"quarter_price":this.state.half_year_price?"half_year_price":this.state.year_price?"year_price":void 0}submit(){this.setState({loading:!0},()=>{Object(p["b"])("/user/order/save",this.state.submit).then(e=>{if(200!==e.code)return this.setState({loading:!1});this.setState({loading:!1}),b.a.push("/order/"+e.data)})})}submitOnChange(e,t){this.setState({submit:c()({},this.state.submit,{[e]:t})})}render(){return console.log(this.state),m.a.createElement(d["a"],n()({},this.props,{loading:this.state.layout_login}),m.a.createElement("main",{id:"main-container"},m.a.createElement("div",{className:"content content-full"},m.a.createElement("h2",{className:"font-w300 mt-4 mb-3"},"\u914d\u7f6e\u8ba2\u9605"),m.a.createElement("div",{className:"row",id:"cashier"},m.a.createElement("div",{className:"col-md-8 col-sm-12"},m.a.createElement("div",{className:"block block-link-pop block-rounded block-bordered px-3 py-3 block-fx-shadow"},m.a.createElement("h4",{className:"mb-0"},this.state.name),this.state.content?m.a.createElement("div",{dangerouslySetInnerHTML:{__html:this.state.content},className:"mt-4"}):""),m.a.createElement("h3",{className:"font-w300 mt-4 mb-3"},"\u4ed8\u6b3e\u5468\u671f"),m.a.createElement("div",{className:"mb-3"},m.a.createElement(r["a"].Group,{defaultValue:this.getFirstPrice(),size:"large",onChange:e=>this.submitOnChange("cycle",e.target.value)},this.state.month_price?m.a.createElement(r["a"].Button,{value:"month_price"},"\u6708\u4ed8"):"",this.state.quarter_price?m.a.createElement(r["a"].Button,{value:"quarter_price"},"\u5b63\u4ed8"):"",this.state.half_year_price?m.a.createElement(r["a"].Button,{value:"half_year_price"},"\u534a\u5e74\u4ed8"):"",this.state.year_price?m.a.createElement(r["a"].Button,{value:"year_price"},"\u5e74\u4ed8"):""))),m.a.createElement("div",{className:"col-md-4 col-sm-12"},m.a.createElement("div",{className:"block block-link-pop block-rounded block-bordered px-3 py-3 text-light",style:{background:"#35383D"}},m.a.createElement("h5",{className:"text-light mb-3"},"\u8ba2\u5355\u603b\u989d"),m.a.createElement("div",{className:"row no-gutters pb-3",style:{borderBottom:"1px solid #646669"}},m.a.createElement("div",{className:"col-8"},this.state.name," x ",u["a"].cycleText[this.state.submit.cycle]),m.a.createElement("div",{className:"col-4 text-right"},"\xa5",0===this.state.type?(this.state.price/100).toFixed(2):(this.state[this.state.submit.cycle]/100).toFixed(2))),m.a.createElement("div",{className:"pt-3",style:{color:"#646669"}},"\u603b\u8ba1"),m.a.createElement("h1",{className:"text-light mt-3 mb-3"},"\xa5 ",(this.state[this.state.submit.cycle]/100).toFixed(2)," CNY"),m.a.createElement("button",{type:"button",className:"btn btn-block btn-primary",disabled:this.state.loading,onClick:()=>this.submit()},this.state.loading?m.a.createElement(s["a"],{type:"loading"}):m.a.createElement("span",null,m.a.createElement("i",{className:"far fa-check-circle"})," \u4e0b\u5355"))))))))}}t["default"]=Object(h["c"])()(g)},Bl7J:function(e,t,a){"use strict";var i=a("q1tI"),n=a.n(i),s=a("3a4m"),r=a.n(s),l=a("/MKj"),c=a("20nU"),o=a("yWgo");class m extends n.a.Component{constructor(){super(...arguments),this.state={nav:[]}}componentDidMount(){var e=[{title:"\u4eea\u8868\u76d8",type:"item",href:"/dashboard",icon:n.a.createElement("i",{className:"nav-main-link-icon si si-speedometer"})},{title:"\u8ba2\u9605",type:"heading"},{title:"\u6211\u7684\u8ba2\u9605",type:"item",href:"/subscribe",icon:n.a.createElement("i",{className:"nav-main-link-icon si si-badge"})},{title:"\u8d2d\u4e70\u8ba2\u9605",type:"item",href:"/plan",icon:n.a.createElement("i",{className:"nav-main-link-icon si si-bag"})},{title:"\u8d22\u52a1",type:"heading"},{title:"\u6211\u7684\u8ba2\u5355",type:"item",href:"/order",icon:n.a.createElement("i",{className:"nav-main-link-icon si si-list"})},{title:"\u6211\u7684\u9080\u8bf7",type:"item",href:"/invite",icon:n.a.createElement("i",{className:"nav-main-link-icon si si-users"})},{title:"\u7528\u6237",type:"heading"},{title:"\u4e2a\u4eba\u4e2d\u5fc3",type:"item",href:"/profile",icon:n.a.createElement("i",{className:"nav-main-link-icon si si-user"})},{title:"\u4f7f\u7528\u6559\u7a0b",type:"item",href:"/tutorial",icon:n.a.createElement("i",{className:"nav-main-link-icon si si-book-open"})}],t=[{title:"\u8fd4\u56de\u7528\u6237\u4e2d\u5fc3",type:"item",href:"/dashboard",icon:n.a.createElement("i",{className:"nav-main-link-icon si si-action-undo"})},{title:"\u8bbe\u7f6e",type:"heading"},{title:"\u7cfb\u7edf\u914d\u7f6e",type:"item",href:"/admin/config/system",icon:n.a.createElement("i",{className:"nav-main-link-icon si si-equalizer"})},{title:"\u652f\u4ed8\u914d\u7f6e",type:"item",href:"/admin/config/payment",icon:n.a.createElement("i",{className:"nav-main-link-icon si si-credit-card"})},{title:"\u670d\u52a1\u5668",type:"heading"},{title:"\u8282\u70b9\u7ba1\u7406",type:"item",href:"/admin/server",icon:n.a.createElement("i",{className:"nav-main-link-icon si si-vector"})},{title:"\u6743\u9650\u7ec4\u7ba1\u7406",type:"item",href:"/admin/server/group",icon:n.a.createElement("i",{className:"nav-main-link-icon si si-wrench"})},{title:"\u8d22\u52a1",type:"heading"},{title:"\u8ba2\u9605\u7ba1\u7406",type:"item",href:"/admin/plan",icon:n.a.createElement("i",{className:"nav-main-link-icon si si-bag"})},{title:"\u8ba2\u5355\u7ba1\u7406",type:"item",href:"/admin/order",icon:n.a.createElement("i",{className:"nav-main-link-icon si si-list"})},{title:"\u4f63\u91d1\u7ba1\u7406",type:"item",href:"/admin/commission",icon:n.a.createElement("i",{className:"nav-main-link-icon si si-user-following"})},{title:"\u7528\u6237",type:"heading"},{title:"\u7528\u6237\u7ba1\u7406",type:"item",href:"/admin/user",icon:n.a.createElement("i",{className:"nav-main-link-icon si si-users"})}];Object(o["b"])("is_admin")&&e.unshift({title:"\u8fd4\u56de\u7ba1\u7406\u4e2d\u5fc3",type:"item",href:"/admin/dashboard",icon:n.a.createElement("i",{className:"nav-main-link-icon si si-action-undo"})}),this.isAdmin()?this.setState({nav:t}):this.setState({nav:e})}renderMenu(e,t,a,i){switch(e){case"heading":return n.a.createElement("li",{className:"nav-main-heading"},t);case"item":return n.a.createElement("li",{className:"nav-main-item"},n.a.createElement("a",{className:"nav-main-link ".concat(this.props.location.pathname===a&&"active"),onClick:()=>{r.a.push(a),this.props.dispatch({type:"header/showNav"})}},i&&i,n.a.createElement("span",{className:"nav-main-link-name"},t)))}}isAdmin(){return-1!==this.props.location.pathname.indexOf("admin")}render(){return n.a.createElement("nav",{id:"sidebar","aria-label":"Main Navigation"},n.a.createElement("div",{className:"smini-visible-block"},n.a.createElement("div",{className:"content-header bg-black-10"},n.a.createElement("a",{className:"link-fx font-size-lg text-white",href:"index.html"},n.a.createElement("span",{className:"text-white-75"},"X"),n.a.createElement("span",{className:"text-white"},"H")))),n.a.createElement("div",{className:"smini-hidden ".concat(1===c["a"].theme?"":"bg-header-dark")},n.a.createElement("div",{className:"content-header justify-content-lg-center bg-black-10"},n.a.createElement("a",{className:"link-fx font-size-lg text-white",href:"index.html"},n.a.createElement("span",{className:"text-white-75"},window.v2board.title?window.v2board.title:"V2Board")),n.a.createElement("div",{className:"d-lg-none"},n.a.createElement("a",{className:"text-white ml-2","data-toggle":"layout","data-action":"sidebar_close",href:"javascript:void(0)",onClick:()=>this.props.dispatch({type:"header/showNav"})},n.a.createElement("i",{className:"fa fa-times-circle"}))))),n.a.createElement("div",{className:"content-side content-side-full"},n.a.createElement("ul",{className:"nav-main"},this.state.nav.map(e=>{return this.renderMenu(e.type,e.title,e.href,e.icon)}))))}}var d=Object(l["c"])(e=>{var t=e.header;return{header:t}})(m),h=a("t3Un");class p extends n.a.Component{constructor(){super(...arguments),this.state={showAvatarMenu:!1,loading:!1}}componentDidMount(){var e=this;this.props.header.userInfo.email||this.setState({loading:!0},()=>{this.props.dispatch({type:"header/getUserInfo",complete:()=>e.setState({loading:!1})})})}showAvatarMenu(){var e=this;this.setState({showAvatarMenu:!this.state.showAvatarMenu},()=>{document.onclick=function(t){e.state.showAvatarMenu&&e.setState({showAvatarMenu:!1}),document.onclick=void 0}})}logout(){Object(h["a"])("/user/logout").then(e=>{r.a.push("/login")})}render(){return n.a.createElement("header",{id:"page-header"},n.a.createElement("div",{className:"content-header"},n.a.createElement("div",{className:"sidebar-toggle",style:{display:this.props.search?"none":"block"}},n.a.createElement("button",{type:"button",className:"btn btn-dual mr-1 d-lg-none","data-toggle":"layout","data-action":"sidebar_toggle",onClick:()=>this.props.dispatch({type:"header/showNav"})},n.a.createElement("i",{className:"fa fa-fw fa-bars"}))),this.props.search&&n.a.createElement("div",null,n.a.createElement("input",{type:"text",className:"form-control rounded-lg px-4",placeholder:this.props.search.placeholder,onChange:e=>this.props.search.onChange(e.target.value)})),n.a.createElement("div",null,this.state.loading?n.a.createElement("div",{className:"spinner-grow text-primary"}):n.a.createElement("div",{className:"dropdown d-inline-block"},n.a.createElement("button",{type:"button",className:"btn btn-dual",id:"page-header-user-dropdown","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",onClick:()=>this.showAvatarMenu()},n.a.createElement("img",{className:"img-avatar img-avatar32 img-avatar-thumb",src:this.props.header.userInfo.avatar_url,alt:""}),n.a.createElement("span",{className:"d-none d-lg-inline ml-1"},this.props.header.userInfo.email),n.a.createElement("i",{className:"fa fa-fw fa-angle-down ml-1"})),n.a.createElement("div",{className:"dropdown-menu dropdown-menu-right dropdown-menu-lg p-0 ".concat(this.state.showAvatarMenu&&"show"),"aria-labelledby":"page-header-user-dropdown"},n.a.createElement("div",{className:"p-2"},n.a.createElement("a",{className:"dropdown-item d-flex justify-content-between align-items-center",href:"javascript:;",onClick:()=>this.logout()},"\u9000\u51fa\u767b\u5f55",n.a.createElement("i",{className:"fa fa-fw fa-sign-out-alt text-danger ml-1"}))))))))}}var u=Object(l["c"])(e=>{var t=e.header;return{header:t}})(p);class v extends n.a.Component{render(){return n.a.createElement("footer",{id:"page-footer",className:"bg-body-light"},n.a.createElement("div",{className:"content py-0"},n.a.createElement("div",{className:"row font-size-sm"},n.a.createElement("div",{className:"col-sm-6 order-sm-2 mb-1 mb-sm-0 text-center text-sm-right"},n.a.createElement("i",{className:"fa fa-heart text-danger"})," ",window.v2board.title?window.v2board.title:"V2Board"),n.a.createElement("div",{className:"col-sm-6 order-sm-1 text-center text-sm-left"},n.a.createElement("a",{className:"font-w600",href:"/",target:"_blank"},"V2Board v0.2"),n.a.createElement("span",{"data-toggle":"year-copy"})))))}}class b extends n.a.Component{render(){return n.a.createElement("div",{id:"page-container",className:"sidebar-o ".concat(1===c["a"].theme?"sidebar-dark":"page-header-dark"," side-scroll page-header-fixed main-content-boxed side-trans-enabled ").concat(this.props.header.showNav&&"sidebar-o-xs")},n.a.createElement(d,this.props),n.a.createElement(u,{search:this.props.search}),this.props.loading?n.a.createElement("main",{id:"main-container"},n.a.createElement("div",{className:"content content-full"},n.a.createElement("div",{className:"spinner-grow text-primary",role:"status"},n.a.createElement("span",{className:"sr-only"},"Loading...")))):this.props.children,n.a.createElement(v,null))}}t["a"]=Object(l["c"])(e=>{var t=e.header;return{header:t}})(b)},LbTH:function(e,t,a){"use strict";t["a"]={cycleText:{month_price:"\u6708\u4ed8",quarter_price:"\u5b63\u4ed8",half_year_price:"\u534a\u5e74\u4ed8",year_price:"\u5e74\u4ed8"},orderStatusText:["\u5f85\u652f\u4ed8","\u5f00\u901a\u4e2d","\u5df2\u53d6\u6d88","\u5df2\u5b8c\u6210"],commissionStatusText:["\u786e\u8ba4\u4e2d","\u5df2\u786e\u8ba4","\u5df2\u5b8c\u6210"]}}}]);