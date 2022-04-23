(function(c,l,m,h,u,n,r){"use strict";function f(e){if(e&&e.__esModule)return e;var i=Object.create(null);return e&&Object.keys(e).forEach(function(s){if(s!=="default"){var d=Object.getOwnPropertyDescriptor(e,s);Object.defineProperty(i,s,d.get?d:{enumerable:!0,get:function(){return e[s]}})}}),i.default=e,Object.freeze(i)}var t=f(m);const[g,p,{GuildFeatures:N},a,o,b,I,P]=h.batchFind(({findByProps:e,findByDisplayName:i})=>{i("SettingsView"),e("dirtyDispatch"),e("GuildFeatures"),i("FormTitle"),i("FormText"),i("FormDivider"),i("Switch"),e("Sizes","Colors","Looks","DropdownSizes")});function E(e){return t.createElement("div",{className:"beef-meddle-settings-section"},t.createElement("div",{className:"beef-meddle-settings-title"},t.createElement(a,{tag:"h1"},"Meddle"),t.createElement(o,null,"A tool for those who like to mess with the Maze."),t.createElement(o,{className:"beef-meddle-settings-title-subtext"},"Currently very WIP")))}function S(e){return t.createElement("div",{className:"beef-meddle-settings-section"},t.createElement(a,{tag:"h3"},"FluxDispatcher"),t.createElement(n.SSwitch,{k:"dispatchLogEnabled"},"Log all FluxDispatcher calls to console"),t.createElement(n.SSwitch,{k:"dispatchWhiteListMode"},"Dispatch logger whitelist mode"),t.createElement(n.SText,{k:"dispatchIgnoreList"},"FluxDispatcher calls to hide when not in whitelist mode (comma separated)"),t.createElement(n.SText,{k:"dispatchWhiteList"},"FluxDispatcher calls to allow when in whitelist mode (comma separated)"))}function v(e){return t.createElement(u.ErrorBoundary,null,t.createElement("div",{className:"beef-meddle-settings"},t.createElement(E,null),t.createElement(b,{className:"beef-meddle-settings-divider"}),t.createElement(S,null)))}var w=()=>l.findAndPatch(()=>g,e=>l.after("getPredicateSections",e.prototype,(i,s)=>{if(s[1]?.section!="My Account")return;let d=s.findIndex(M=>M.section=="changelog")-1;const x=[{section:"DIVIDER"},{section:"HEADER",label:"Meddle"},{section:"beef_meddle_SETTINGS",label:"Settings",element:n.dependPersist(v)}];return s.splice(d,0,...x),s})),y=()=>l.after("dispatch",p,e=>{!r.persist.ghost.dispatchLogEnabled||r.persist.ghost.dispatchWhiteListMode&&!r.persist.ghost.dispatchWhiteList.split(",").includes(e[0].type)||r.persist.ghost.dispatchIgnoreList.split(",").includes(e[0].type)||console.log(e[0])}),D=()=>l.injectCSS(".beef-meddle-settings .beef-meddle-settings-title{margin-bottom:1rem}.beef-meddle-settings .beef-meddle-settings-title h1{margin-bottom:.2rem}.beef-meddle-settings .beef-meddle-settings-title :nth-child(3){color:var(--text-muted)}.beef-meddle-settings .beef-meddle-settings-title .beef-meddle-settings-title-subtext{font-size:x-small}.beef-meddle-settings .beef-meddle-settings-divider{margin-top:.5rem;margin-bottom:.5rem}");n.setDefaults({dispatchLogEnabled:!1,dispatchIgnoreList:"",dispatchWhiteList:"",dispatchWhiteListMode:!1});const F=[w(),y(),D()];function L(){_.forEachRight(F,e=>e())}return c.onUnload=L,Object.defineProperty(c,"__esModule",{value:!0}),c})({},cumcord.patcher,cumcord.modules.common.React,cumcord.modules.webpack,cumcord.ui.components,cumcordTools,cumcord.pluginData);
