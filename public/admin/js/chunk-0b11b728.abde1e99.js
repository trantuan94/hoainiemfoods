(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0b11b728"],{2710:function(e,t,a){"use strict";var s=a("ccc6"),o=a.n(s);o.a},"5c5f":function(e,t,a){"use strict";var s=a("e583"),o=a.n(s);o.a},ccc6:function(e,t,a){},e583:function(e,t,a){},f593:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"c-app"},[a("TheSidebar"),a("CWrapper",[a("TheHeader"),a("div",{staticClass:"c-body"},[a("main",{staticClass:"c-main"},[a("CContainer",{attrs:{fluid:""}},[a("transition",{attrs:{name:"fade"}},[a("router-view")],1)],1)],1),a("TheFooter")],1)],1)],1)},o=[],n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("CSidebar",{staticClass:"c-sidebar-light",attrs:{fixed:"",minimize:e.minimize,show:e.show},on:{"update:show":function(t){return e.$store.commit("set",["sidebarShow",t])}}},[a("CSidebarBrand",{staticClass:"d-md-down-none",attrs:{to:"/"}},[a("CIcon",{staticClass:"c-sidebar-brand-full",attrs:{name:"logo",size:"custom-size",height:35,viewBox:"0 0 556 134"}}),a("CIcon",{staticClass:"c-sidebar-brand-minimized",attrs:{name:"logo",size:"custom-size",height:35,viewBox:"0 0 110 134"}})],1),a("CRenderFunction",{attrs:{flat:"","content-to-render":e.$options.nav}}),a("CSidebarMinimizer",{staticClass:"d-md-down-none",nativeOn:{click:function(t){return e.$store.commit("set",["sidebarMinimize",!e.minimize])}}})],1)},r=[],i=[{_name:"CSidebarNav",_children:[{_name:"CSidebarNavItem",name:"Dashboard",to:"/dashboard",icon:"cil-speedometer",badge:{color:"primary",text:"NEW"}},{_name:"CSidebarNavTitle",_children:["Theme"]},{_name:"CSidebarNavItem",name:"Colors",to:"/theme/colors",icon:"cil-drop"},{_name:"CSidebarNavItem",name:"Typography",to:"/theme/typography",icon:"cil-pencil"},{_name:"CSidebarNavTitle",_children:["Components"]},{_name:"CSidebarNavDropdown",name:"Base",route:"/base",icon:"cil-puzzle",items:[{name:"Breadcrumbs",to:"/base/breadcrumbs"},{name:"Cards",to:"/base/cards"},{name:"Carousels",to:"/base/carousels"},{name:"Collapses",to:"/base/collapses"},{name:"Forms",to:"/base/forms"},{name:"Jumbotrons",to:"/base/jumbotrons"},{name:"List Groups",to:"/base/list-groups"},{name:"Navs",to:"/base/navs"},{name:"Navbars",to:"/base/navbars"},{name:"Paginations",to:"/base/paginations"},{name:"Popovers",to:"/base/popovers"},{name:"Progress Bars",to:"/base/progress-bars"},{name:"Switches",to:"/base/switches"},{name:"Tables",to:"/base/tables"},{name:"Tabs",to:"/base/tabs"},{name:"Tooltips",to:"/base/tooltips"}]},{_name:"CSidebarNavDropdown",name:"Buttons",route:"/buttons",icon:"cil-cursor",items:[{name:"Buttons",to:"/buttons/standard-buttons"},{name:"Button Dropdowns",to:"/buttons/dropdowns"},{name:"Button Groups",to:"/buttons/button-groups"},{name:"Brand Buttons",to:"/buttons/brand-buttons"}]},{_name:"CSidebarNavItem",name:"Charts",to:"/charts",icon:"cil-chart-pie"},{_name:"CSidebarNavDropdown",name:"Icons",route:"/icons",icon:"cil-star",items:[{name:"CoreUI Icons",to:"/icons/coreui-icons",badge:{color:"info",text:"NEW"}},{name:"Brands",to:"/icons/brands"},{name:"Flags",to:"/icons/flags"}]},{_name:"CSidebarNavDropdown",name:"Notifications",route:"/notifications",icon:"cil-bell",items:[{name:"Alerts",to:"/notifications/alerts"},{name:"Badges",to:"/notifications/badges"},{name:"Modals",to:"/notifications/modals"}]},{_name:"CSidebarNavItem",name:"Widgets",to:"/widgets",icon:"cil-calculator",badge:{color:"primary",text:"NEW",shape:"pill"}},{_name:"CSidebarNavDivider",_class:"m-2"},{_name:"CSidebarNavTitle",_children:["Extras"]},{_name:"CSidebarNavDropdown",name:"Pages",route:"/pages",icon:"cil-star",items:[{name:"Login",to:"/pages/login"},{name:"Register",to:"/pages/register"},{name:"Error 404",to:"/pages/404"},{name:"Error 500",to:"/pages/500"}]},{_name:"CSidebarNavItem",name:"Download CoreUI",href:"http://coreui.io/vue/",icon:{name:"cil-cloud-download",class:"text-white"},_class:"bg-success text-white",target:"_blank"},{_name:"CSidebarNavItem",name:"Try CoreUI PRO",href:"http://coreui.io/pro/vue/",icon:{name:"cil-layers",class:"text-white"},_class:"bg-danger text-white",target:"_blank"}]}],c={name:"TheSidebar",nav:i,computed:{show:function(){return this.$store.state.sidebarShow},minimize:function(){return this.$store.state.sidebarMinimize}}},l=c,m=a("2877"),d=Object(m["a"])(l,n,r,!1,null,null,null),C=d.exports,u=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("CHeader",{attrs:{fixed:"","with-subheader":"",light:""}},[a("CToggler",{staticClass:"ml-3 d-lg-none",attrs:{"in-header":""},on:{click:function(t){return e.$store.commit("toggleSidebarMobile")}}}),a("CToggler",{staticClass:"ml-3 d-md-down-none",attrs:{"in-header":""},on:{click:function(t){return e.$store.commit("toggleSidebarDesktop")}}}),a("CHeaderBrand",{staticClass:"mx-auto d-lg-none",attrs:{to:"/"}},[a("CIcon",{attrs:{name:"logo",height:"48",alt:"Logo"}})],1),a("CHeaderNav",{staticClass:"d-md-down-none mr-auto"},[a("CHeaderNavItem",{staticClass:"px-3"},[a("CHeaderNavLink",{attrs:{to:"/dashboard"}},[e._v(" Dashboard ")])],1),a("CHeaderNavItem",{staticClass:"px-3"},[a("CHeaderNavLink",{attrs:{to:"/users",exact:""}},[e._v(" Users ")])],1),a("CHeaderNavItem",{staticClass:"px-3"},[a("CHeaderNavLink",[e._v(" Settings ")])],1)],1),a("CHeaderNav",{staticClass:"mr-4"},[a("CHeaderNavItem",{staticClass:"d-md-down-none mx-2"},[a("CHeaderNavLink",[a("CIcon",{attrs:{name:"cil-bell"}})],1)],1),a("CHeaderNavItem",{staticClass:"d-md-down-none mx-2"},[a("CHeaderNavLink",[a("CIcon",{attrs:{name:"cil-list"}})],1)],1),a("CHeaderNavItem",{staticClass:"d-md-down-none mx-2"},[a("CHeaderNavLink",[a("CIcon",{attrs:{name:"cil-envelope-open"}})],1)],1),a("TheHeaderDropdownAccnt")],1),a("CSubheader",{staticClass:"px-3"},[a("CBreadcrumbRouter",{staticClass:"border-0 mb-0"})],1)],1)},b=[],p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("CDropdown",{staticClass:"c-header-nav-items",attrs:{inNav:"",placement:"bottom-end","add-menu-classes":"pt-0"},scopedSlots:e._u([{key:"toggler",fn:function(){return[a("CHeaderNavLink",[a("div",{staticClass:"c-avatar"},[a("img",{staticClass:"c-avatar-img ",attrs:{src:"img/avatars/6.jpg"}})])])]},proxy:!0}])},[a("CDropdownHeader",{staticClass:"text-center",attrs:{tag:"div",color:"light"}},[a("strong",[e._v("Account")])]),a("CDropdownItem",[a("CIcon",{attrs:{name:"cil-bell"}}),e._v(" Updates "),a("CBadge",{staticClass:"ml-auto",attrs:{color:"info"}},[e._v(e._s(e.itemsCount))])],1),a("CDropdownItem",[a("CIcon",{attrs:{name:"cil-envelope-open"}}),e._v(" Messages "),a("CBadge",{staticClass:"ml-auto",attrs:{color:"success"}},[e._v(e._s(e.itemsCount))])],1),a("CDropdownItem",[a("CIcon",{attrs:{name:"cil-task"}}),e._v(" Tasks "),a("CBadge",{staticClass:"ml-auto",attrs:{color:"danger"}},[e._v(e._s(e.itemsCount))])],1),a("CDropdownItem",[a("CIcon",{attrs:{name:"cil-comment-square"}}),e._v(" Comments "),a("CBadge",{staticClass:"ml-auto",attrs:{color:"warning"}},[e._v(e._s(e.itemsCount))])],1),a("CDropdownHeader",{staticClass:"text-center",attrs:{tag:"div",color:"light"}},[a("strong",[e._v("Settings")])]),a("CDropdownItem",[a("CIcon",{attrs:{name:"cil-user"}}),e._v(" Profile ")],1),a("CDropdownItem",[a("CIcon",{attrs:{name:"cil-settings"}}),e._v(" Settings ")],1),a("CDropdownItem",[a("CIcon",{attrs:{name:"cil-dollar"}}),e._v(" Payments "),a("CBadge",{staticClass:"ml-auto",attrs:{color:"secondary"}},[e._v(e._s(e.itemsCount))])],1),a("CDropdownItem",[a("CIcon",{attrs:{name:"cil-file"}}),e._v(" Projects "),a("CBadge",{staticClass:"ml-auto",attrs:{color:"primary"}},[e._v(e._s(e.itemsCount))])],1),a("CDropdownDivider"),a("CDropdownItem",[a("CIcon",{attrs:{name:"cil-shield-alt"}}),e._v(" Lock Account ")],1),a("CDropdownItem",[a("CIcon",{attrs:{name:"cil-lock-locked"}}),e._v(" Logout ")],1)],1)},v=[],g={name:"TheHeaderDropdownAccnt",data:function(){return{itemsCount:42}}},h=g,_=(a("2710"),Object(m["a"])(h,p,v,!1,null,"4c9bcc7e",null)),w=_.exports,f={name:"TheHeader",components:{TheHeaderDropdownAccnt:w}},I=f,N=Object(m["a"])(I,u,b,!1,null,null,null),S=N.exports,x=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("CFooter",{attrs:{fixed:!1}},[a("div",[a("a",{attrs:{href:"https://coreui.io",target:"_blank"}},[e._v("CoreUI")]),a("span",{staticClass:"ml-1"},[e._v("© "+e._s((new Date).getFullYear())+" creativeLabs.")])]),a("div",{staticClass:"ml-auto"},[a("span",{staticClass:"mr-1"},[e._v("Powered by")]),a("a",{attrs:{href:"https://coreui.io/vue",target:"_blank"}},[e._v("CoreUI for Vue")])])])},D=[],H={name:"TheFooter"},T=H,k=Object(m["a"])(T,x,D,!1,null,null,null),B=k.exports,y={name:"TheContainer",components:{TheSidebar:C,TheHeader:S,TheFooter:B}},z=y,L=(a("5c5f"),Object(m["a"])(z,s,o,!1,null,"0c8babf5",null));t["default"]=L.exports}}]);
//# sourceMappingURL=chunk-0b11b728.abde1e99.js.map