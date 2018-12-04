(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{124:function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__),styles={color:"#fff",cursor:"pointer",backgroundColor:"#33c066",border:"none",borderRadius:5,fontSize:14,padding:"20px 30px"},propTypes={label:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,disabled:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,onClick:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired};function Button(_ref){var disabled=_ref.disabled,label=_ref.label,onClick=_ref.onClick;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button",{type:"button",disabled:disabled,onClick:onClick,style:styles},label)}Button.propTypes=propTypes,Button.defaultProps={label:"Button Label",disabled:!1},__webpack_exports__.a=Button,Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{label:{defaultValue:{value:"'Button Label'",computed:!1},type:{name:"string"},required:!1,description:""},disabled:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},onClick:{type:{name:"func"},required:!0,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["example/Button.js"]={name:"Button",docgenInfo:Button.__docgenInfo,path:"example/Button.js"})},546:function(module,__webpack_exports__,__webpack_require__){"use strict";var helpers_extends=__webpack_require__(32),extends_default=__webpack_require__.n(helpers_extends),react=__webpack_require__(0),react_default=__webpack_require__.n(react),theme={border:"#ccd6dd",grayDarkest:"#363a45",grayDarker:"#565d6b",grayDark:"#898d97",gray:"#ccd6dd",grayLight:"#eaeff2",grayLighter:"#f7f9fb",infoStyle:{color:"#565d6b",fontSize:14,lineHeight:1.5}},possibleConstructorReturn=__webpack_require__(8),possibleConstructorReturn_default=__webpack_require__.n(possibleConstructorReturn),getPrototypeOf=__webpack_require__(9),getPrototypeOf_default=__webpack_require__.n(getPrototypeOf),inherits=__webpack_require__(10),inherits_default=__webpack_require__.n(inherits),classCallCheck=__webpack_require__(3),classCallCheck_default=__webpack_require__.n(classCallCheck),createClass=__webpack_require__(4),createClass_default=__webpack_require__.n(createClass),objectSpread=__webpack_require__(6),objectSpread_default=__webpack_require__.n(objectSpread),prop_types=__webpack_require__(1),prop_types_default=__webpack_require__.n(prop_types),dist=__webpack_require__(67),Node=__webpack_require__(210),Node_default=__webpack_require__.n(Node),propTypes={component:prop_types_default.a.func,useTheme:prop_types_default.a.bool},PropTypesMap=new Map;Object.keys(prop_types_default.a).forEach(function(typeName){var type=prop_types_default.a[typeName];PropTypesMap.set(type,typeName),PropTypesMap.set(type.isRequired,typeName)});var propTableStyles={propTable:{fontSize:13,marginLeft:-10},propTableTh:{color:theme.grayDarker,padding:10},propTableTd:{borderTop:"1px solid ".concat(theme.grayLight),padding:10}},PropTable_PropTable=function(_Component){function PropTable(){return classCallCheck_default()(this,PropTable),possibleConstructorReturn_default()(this,getPrototypeOf_default()(PropTable).apply(this,arguments))}return inherits_default()(PropTable,_Component),createClass_default()(PropTable,[{key:"render",value:function(){var _this$props=this.props,component=_this$props.component,useTheme=_this$props.useTheme;if(!component)return null;var props={};component.propTypes&&Object.keys(component.propTypes).forEach(function(property){var typeInfo=component.propTypes[property],propType=PropTypesMap.get(typeInfo)||"other",required=void 0===typeInfo.isRequired?"Yes":"No";props[property]={property:property,propType:propType,required:required}}),component.defaultProps&&Object.keys(component.defaultProps).forEach(function(property){var value=component.defaultProps[property];props[property]||(props[property]={property:property}),props[property].defaultValue=value});var propsList=Object.values(props);if(!propsList.length)return react_default.a.createElement("small",null,"No propTypes defined!");propsList.sort(function(a,b){return a.property>b.property});var thStyle=useTheme?propTableStyles.propTableTh:{},tdStyle=useTheme?propTableStyles.propTableTd:{};return react_default.a.createElement("table",{style:useTheme?propTableStyles.propTable:{},className:"propTable"},react_default.a.createElement("thead",null,react_default.a.createElement("tr",null,react_default.a.createElement("th",{style:thStyle,className:"propTable-th"},"Property"),react_default.a.createElement("th",{style:thStyle,className:"propTable-th"},"PropType"),react_default.a.createElement("th",{style:thStyle,className:"propTable-th"},"Required"),react_default.a.createElement("th",{style:thStyle,className:"propTable-th"},"Default"))),react_default.a.createElement("tbody",null,propsList.map(function(row){return react_default.a.createElement("tr",{key:row.property},react_default.a.createElement("td",{style:tdStyle,className:"propTable-td"},row.property),react_default.a.createElement("td",{style:tdStyle,className:"propTable-td"},row.propType),react_default.a.createElement("td",{style:tdStyle,className:"propTable-td"},row.required),react_default.a.createElement("td",{style:tdStyle,className:"propTable-td"},void 0===row.defaultValue?"-":react_default.a.createElement(Node_default.a,{val:row.defaultValue})))})))}}]),PropTable}(react.Component);PropTable_PropTable.displayName="PropTable",PropTable_PropTable.propTypes=propTypes,PropTable_PropTable.defaultProps={useTheme:!1,component:{}},PropTable_PropTable.__docgenInfo={description:"",methods:[],displayName:"PropTable",props:{useTheme:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},component:{defaultValue:{value:"{}",computed:!1},type:{name:"func"},required:!1,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/PropTable.jsx"]={name:"PropTable",docgenInfo:PropTable_PropTable.__docgenInfo,path:"src/components/PropTable.jsx"});var lib=__webpack_require__(545),lib_default=__webpack_require__.n(lib),markdown=__webpack_require__(58),defaultMarksyConf={h1:markdown.H1,h2:markdown.H2,h3:markdown.H3,h4:markdown.H4,h5:markdown.H5,h6:markdown.H6,code:markdown.Code,a:markdown.A,p:markdown.P,li:markdown.LI,ul:markdown.UL};function renderInfoContent(content){var markdownInfo=lib_default()(defaultMarksyConf,content);if(!content||""===content||"string"!=typeof content)return null;for(var lines=content.split("\n");""===lines[0].trim();)lines.shift();var padding=0,matches=lines[0].match(/^ */);matches&&(padding=matches[0].length);var source=lines.map(function(s){return s.slice(padding)}).join("\n");return react_default.a.createElement("div",null,markdownInfo(source).tree)}renderInfoContent.__docgenInfo={description:"",methods:[],displayName:"renderInfoContent"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/utils/info-content.js"]={name:"renderInfoContent",docgenInfo:renderInfoContent.__docgenInfo,path:"src/utils/info-content.js"});var Section_propTypes={title:prop_types_default.a.string,subtitle:prop_types_default.a.string,info:prop_types_default.a.string,showSource:prop_types_default.a.bool,showPropTables:prop_types_default.a.bool,propTables:prop_types_default.a.arrayOf(prop_types_default.a.func),children:prop_types_default.a.oneOfType([prop_types_default.a.object,prop_types_default.a.array]).isRequired,allowSourceToggling:prop_types_default.a.bool,allowPropTablesToggling:prop_types_default.a.bool,addonInfo:prop_types_default.a.object.isRequired,useTheme:prop_types_default.a.bool},sectionButtonStyles={backgroundColor:"transparent",border:"1px solid ".concat(theme.gray),borderRadius:3,color:theme.grayDark,cursor:"pointer",float:"right",marginLeft:5,padding:"5px 10px"},sectionStyles={container:{marginBottom:100},header:{marginBottom:60},title:{color:theme.grayDarkest,fontSize:18,marginBottom:10},subtitle:{color:theme.grayDark,fontSize:14,marginBottom:20,marginTop:0},buttonContainer:{height:15},button:sectionButtonStyles,"button-active":objectSpread_default()({},sectionButtonStyles,{backgroundColor:theme.grayLight,borderColor:theme.grayLight,color:theme.grayDark}),info:theme.infoStyle,componentContainer:{marginBottom:60},subsection:{marginBottom:60},subsectionTitle:{color:theme.grayDark,fontSize:12,letterSpacing:2,textTransform:"uppercase"},pre:{fontSize:".88em",fontFamily:'Menlo, Monaco, "Courier New", monospace',backgroundColor:"rgb(250, 250, 250)",padding:"0.5rem",lineHeight:"1.5",overflowX:"scroll"}},Section_SectionDecorator=function(){function SectionDecorator(){classCallCheck_default()(this,SectionDecorator)}return createClass_default()(SectionDecorator,null,[{key:"main",value:function(header,component,additional,useTheme){return react_default.a.createElement("div",{style:useTheme?sectionStyles.container:{},className:"section-container"},header,component,additional)}},{key:"header",value:function(_header,useTheme){return react_default.a.createElement("div",{style:useTheme?sectionStyles.header:{},className:"section-header"},react_default.a.createElement("div",null,_header))}},{key:"title",value:function(_title,useTheme){return react_default.a.createElement("h3",{style:useTheme?sectionStyles.title:{},className:"section-title"},_title)}},{key:"subtitle",value:function(_subtitle,useTheme){return react_default.a.createElement("p",{style:useTheme?sectionStyles.subtitle:{},className:"section-subtitle"},_subtitle)}},{key:"component",value:function(_component,useTheme,decorator){var decoratedComponent=decorator?decorator(function(){return _component}):_component;return react_default.a.createElement("div",{style:useTheme?sectionStyles.componentContainer:{},className:"section-component-container"},decoratedComponent)}},{key:"additional",value:function(_additional){return react_default.a.createElement("div",null,react_default.a.createElement("div",null,_additional))}},{key:"sourceCode",value:function(_sourceCode,useTheme){return react_default.a.createElement("div",{style:useTheme?sectionStyles.subsection:{},className:"section-subsection"},react_default.a.createElement("h4",{style:useTheme?sectionStyles.subsection.title:{},className:"section-subsection-title"},"Source"),react_default.a.createElement("pre",{style:useTheme?sectionStyles.pre:{},className:"section-pre"},_sourceCode))}},{key:"propTables",value:function(_propTables,useTheme){return react_default.a.createElement("div",{style:useTheme?sectionStyles.subsection:{},className:"section-subsection"},react_default.a.createElement("h4",{style:useTheme?sectionStyles.subsection.title:{},className:"section-subsection-title"},"PropTypes"),_propTables)}},{key:"buttons",value:function(_buttons,useTheme){return react_default.a.createElement("div",{style:useTheme?sectionStyles.buttonContainer:{},className:"section-button-container"},_buttons)}},{key:"info",value:function(infoContent,useTheme){return react_default.a.createElement("div",{style:useTheme?sectionStyles.subsection:{},className:"section-subsection"},react_default.a.createElement("div",{style:useTheme?sectionStyles.info:{},className:"section-info"},infoContent))}}]),SectionDecorator}(),Section_Section=function(_Component){function Section(props){var _this;return classCallCheck_default()(this,Section),(_this=possibleConstructorReturn_default()(this,getPrototypeOf_default()(Section).call(this,props))).state={isSourceShown:props.showSource,isPropsTableShown:props.showPropTables},_this}return inherits_default()(Section,_Component),createClass_default()(Section,[{key:"renderSourceCode",value:function(useTheme){var _this2=this,_this$props=this.props,addonInfo=_this$props.addonInfo,children=_this$props.children,sourceCode=react_default.a.Children.map(children,function(root,idx){return react_default.a.createElement(Node_default.a,extends_default()({key:idx,depth:0,node:root},addonInfo,_this2.props))});return Section_SectionDecorator.sourceCode(sourceCode,useTheme)}},{key:"renderPropTables",value:function(useTheme){var _this$props2=this.props,children=_this$props2.children,propTables=_this$props2.propTables,components=new Map;if(!children)return null;propTables&&propTables.forEach(function(component){components.set(component,!0)}),function extract(){if(children){if(Array.isArray(children))return void children.forEach(extract);children.props&&children.props.children&&extract(children.props.children),"string"==typeof children||"string"==typeof children.type||children.type&&!components.has(children.type)&&components.set(children.type,!0)}}();var componentsList=Array.from(components.keys());componentsList.sort(function(a,b){return(a.displayName||a.name)>(b.displayName||b.name)});var newPropTables=componentsList.map(function(component,i){return react_default.a.createElement("div",{key:i},react_default.a.createElement("h5",null,"<",component.displayName||component.name,"> Component"),react_default.a.createElement(PropTable_PropTable,{component:component,useTheme:useTheme}))});return newPropTables&&0!==newPropTables.length?Section_SectionDecorator.propTables(propTables,useTheme):null}},{key:"render",value:function(){var _this3=this,_this$props3=this.props,title=_this$props3.title,subtitle=_this$props3.subtitle,children=_this$props3.children,info=_this$props3.info,allowPropTablesToggling=_this$props3.allowPropTablesToggling,allowSourceToggling=_this$props3.allowSourceToggling,useTheme=_this$props3.useTheme,decorator=_this$props3.decorator,_this$state=this.state,isPropsTableShown=_this$state.isPropsTableShown,isSourceShown=_this$state.isSourceShown,header=react_default.a.createElement("div",null,title&&Section_SectionDecorator.title(title,useTheme),subtitle&&Section_SectionDecorator.subtitle(subtitle,useTheme)),buttons=[allowPropTablesToggling&&react_default.a.createElement("button",{type:"button",key:"allowPropTablesToggling",onClick:function(){_this3.setState({isPropsTableShown:!_this3.state.isPropsTableShown})},style:isPropsTableShown?sectionStyles["button-active"]:sectionStyles.button,className:isPropsTableShown?"button-active":"button"},isPropsTableShown?"Hide":"Show"," ","Props Table"),allowSourceToggling&&react_default.a.createElement("button",{type:"button",key:"allowSourceToggling",onClick:function(){_this3.setState({isSourceShown:!isSourceShown})},style:isSourceShown?sectionStyles["button-active"]:sectionStyles.button,className:isSourceShown?"button-active":"button"},isSourceShown?"Hide":"Show"," ","Source")],additional=react_default.a.createElement("div",null,info&&Section_SectionDecorator.info(renderInfoContent(info),useTheme),(allowPropTablesToggling||allowSourceToggling)&&Section_SectionDecorator.buttons(buttons,useTheme),isSourceShown&&this.renderSourceCode(useTheme),isPropsTableShown&&this.renderPropTables(useTheme));return Section_SectionDecorator.main(Section_SectionDecorator.header(header),Section_SectionDecorator.component(children,useTheme,decorator),Section_SectionDecorator.additional(additional),useTheme)}}]),Section}(react.Component);Section_Section.displayName="Section",Section_Section.propTypes=Section_propTypes,Section_Section.defaultProps={title:"",subtitle:"",info:"",showSource:!0,allowSourceToggling:!0,showPropTables:!1,allowPropTablesToggling:!0,useTheme:!1},Section_Section.__docgenInfo={description:"",methods:[{name:"renderSourceCode",docblock:null,modifiers:[],params:[{name:"useTheme",type:null}],returns:null},{name:"renderPropTables",docblock:null,modifiers:[],params:[{name:"useTheme",type:null}],returns:null}],displayName:"Section",props:{title:{defaultValue:{value:"''",computed:!1},type:{name:"string"},required:!1,description:""},subtitle:{defaultValue:{value:"''",computed:!1},type:{name:"string"},required:!1,description:""},info:{defaultValue:{value:"''",computed:!1},type:{name:"string"},required:!1,description:""},showSource:{defaultValue:{value:"true",computed:!1},type:{name:"bool"},required:!1,description:""},allowSourceToggling:{defaultValue:{value:"true",computed:!1},type:{name:"bool"},required:!1,description:""},showPropTables:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},allowPropTablesToggling:{defaultValue:{value:"true",computed:!1},type:{name:"bool"},required:!1,description:""},useTheme:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},propTables:{type:{name:"arrayOf",value:{name:"func"}},required:!1,description:""},children:{type:{name:"union",value:[{name:"object"},{name:"array"}]},required:!0,description:""},addonInfo:{type:{name:"object"},required:!0,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Section.jsx"]={name:"Section",docgenInfo:Section_Section.__docgenInfo,path:"src/components/Section.jsx"});var Chapter_propTypes={context:prop_types_default.a.object,title:prop_types_default.a.string,subtitle:prop_types_default.a.string,info:prop_types_default.a.string,sections:prop_types_default.a.arrayOf(prop_types_default.a.object),addonInfo:prop_types_default.a.object,useTheme:prop_types_default.a.bool},chapterStyles={header:{marginBottom:60},hr:{border:"none",backgroundColor:theme.border,height:1},title:{color:theme.grayDarkest,fontSize:24,marginBottom:10},subtitle:{color:theme.grayDark,fontSize:16,marginBottom:20,marginTop:0},info:theme.infoStyle},Chapter_ChapterDecorator=function(){function ChapterDecorator(){classCallCheck_default()(this,ChapterDecorator)}return createClass_default()(ChapterDecorator,null,[{key:"title",value:function(_title,useTheme){return react_default.a.createElement("h3",{style:useTheme?chapterStyles.title:{},className:"chapter-h3"},_title)}},{key:"subtitle",value:function(_subtitle,useTheme){return react_default.a.createElement("span",{style:useTheme?chapterStyles.subTitle:{},className:"chapter-subtitle"},_subtitle)}},{key:"info",value:function(_info,useTheme){return react_default.a.createElement("div",{style:useTheme?chapterStyles.info:{},className:"chapter-info"},_info)}},{key:"ruler",value:function(useTheme){return react_default.a.createElement("hr",{style:useTheme?chapterStyles.hr:{},className:"chatper-hr"})}},{key:"main",value:function(header,sections,useTheme){return react_default.a.createElement("div",null,react_default.a.createElement("div",{style:useTheme?chapterStyles.header:{},className:"chapter-header"},header),sections)}}]),ChapterDecorator}(),Chapter_Chapter=function(_Component){function Chapter(){return classCallCheck_default()(this,Chapter),possibleConstructorReturn_default()(this,getPrototypeOf_default()(Chapter).apply(this,arguments))}return inherits_default()(Chapter,_Component),createClass_default()(Chapter,[{key:"render",value:function(){var _this$props=this.props,context=_this$props.context,title=_this$props.title,subtitle=_this$props.subtitle,info=_this$props.info,sections=_this$props.sections,addonInfo=_this$props.addonInfo,useTheme=_this$props.useTheme,header=react_default.a.createElement("div",null,title&&Chapter_ChapterDecorator.title(title,useTheme),subtitle&&Chapter_ChapterDecorator.subtitle(subtitle,useTheme),(subtitle||info)&&Chapter_ChapterDecorator.ruler(useTheme),info&&Chapter_ChapterDecorator.subtitle(renderInfoContent(info),useTheme)),renderedSections=sections.map(function(section,index){var options=section.options||{},sectionProps=objectSpread_default()({context:context,title:section.title,subtitle:section.subtitle,info:section.info},options,{addonInfo:addonInfo});return react_default.a.createElement(Section_Section,extends_default()({key:index},sectionProps,{useTheme:useTheme}),section.sectionFn(context))});return Chapter_ChapterDecorator.main(header,renderedSections,useTheme)}}]),Chapter}(react.Component);Chapter_Chapter.displayName="Chapter",Chapter_Chapter.propTypes=Chapter_propTypes,Chapter_Chapter.defaultProps={context:{},title:"",subtitle:"",info:"",sections:[]},Chapter_Chapter.__docgenInfo={description:"",methods:[],displayName:"Chapter",props:{context:{defaultValue:{value:"{}",computed:!1},type:{name:"object"},required:!1,description:""},title:{defaultValue:{value:"''",computed:!1},type:{name:"string"},required:!1,description:""},subtitle:{defaultValue:{value:"''",computed:!1},type:{name:"string"},required:!1,description:""},info:{defaultValue:{value:"''",computed:!1},type:{name:"string"},required:!1,description:""},sections:{defaultValue:{value:"[]",computed:!1},type:{name:"arrayOf",value:{name:"object"}},required:!1,description:""},addonInfo:{type:{name:"object"},required:!1,description:""},useTheme:{type:{name:"bool"},required:!1,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Chapter.jsx"]={name:"Chapter",docgenInfo:Chapter_Chapter.__docgenInfo,path:"src/components/Chapter.jsx"});var Story_propTypes={context:prop_types_default.a.object,title:prop_types_default.a.string,subtitle:prop_types_default.a.string,info:prop_types_default.a.string,chapters:prop_types_default.a.arrayOf(prop_types_default.a.object),addonInfo:prop_types_default.a.object,sectionOptions:prop_types_default.a.object},storyStyles={story:objectSpread_default()({},dist.baseFonts),header:{marginBottom:60},title:{color:theme.grayDarkest,fontSize:36,marginBottom:10},subtitle:{color:theme.grayDark,fontSize:18,marginBottom:20,marginTop:0},info:theme.infoStyle},Story_StoryDecorator=function(){function StoryDecorator(){classCallCheck_default()(this,StoryDecorator)}return createClass_default()(StoryDecorator,null,[{key:"title",value:function(_title,useTheme){return react_default.a.createElement("h1",{style:useTheme?storyStyles.title:{},className:"story-title"},_title)}},{key:"subtitle",value:function(_subtitle,useTheme){return react_default.a.createElement("span",{style:useTheme?storyStyles.subtitle:{},className:"story-subtitle"},_subtitle)}},{key:"info",value:function(_info,useTheme){return react_default.a.createElement("div",{style:useTheme?storyStyles.info:{},className:"story-info"},_info)}},{key:"main",value:function(header,chapters,useTheme){return react_default.a.createElement("div",{style:useTheme?storyStyles.story:{},className:"story"},react_default.a.createElement("div",{style:useTheme?storyStyles.info:{},className:"story-header"},header),chapters)}}]),StoryDecorator}(),Story_Story=function(_Component){function Story(){return classCallCheck_default()(this,Story),possibleConstructorReturn_default()(this,getPrototypeOf_default()(Story).apply(this,arguments))}return inherits_default()(Story,_Component),createClass_default()(Story,[{key:"render",value:function(){var _this$props=this.props,context=_this$props.context,subtitle=_this$props.subtitle,title=_this$props.title,info=_this$props.info,chapters=_this$props.chapters,addonInfo=_this$props.addonInfo,useTheme=_this$props.sectionOptions.useTheme,header=react_default.a.createElement("div",null,title&&Story_StoryDecorator.title(title,useTheme),subtitle&&Story_StoryDecorator.subtitle(subtitle,useTheme),info&&Story_StoryDecorator.subtitle(renderInfoContent(info),useTheme)),renderedChapters=chapters.map(function(chapter,i){return react_default.a.createElement(Chapter_Chapter,extends_default()({key:i,context:context,addonInfo:addonInfo,useTheme:useTheme},chapter))});return Story_StoryDecorator.main(header,renderedChapters,useTheme)}}]),Story}(react.Component);Story_Story.displayName="Story",Story_Story.propTypes=Story_propTypes,Story_Story.defaultProps={context:{},title:"",subtitle:"",info:"",chapters:[]},Story_Story.__docgenInfo={description:"",methods:[],displayName:"Story",props:{context:{defaultValue:{value:"{}",computed:!1},type:{name:"object"},required:!1,description:""},title:{defaultValue:{value:"''",computed:!1},type:{name:"string"},required:!1,description:""},subtitle:{defaultValue:{value:"''",computed:!1},type:{name:"string"},required:!1,description:""},info:{defaultValue:{value:"''",computed:!1},type:{name:"string"},required:!1,description:""},chapters:{defaultValue:{value:"[]",computed:!1},type:{name:"arrayOf",value:{name:"object"}},required:!1,description:""},addonInfo:{type:{name:"object"},required:!1,description:""},sectionOptions:{type:{name:"object"},required:!1,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Story.jsx"]={name:"Story",docgenInfo:Story_Story.__docgenInfo,path:"src/components/Story.jsx"});var src_defaultProps={addonInfo:{inline:!1,header:!0,source:!0,propTables:[],maxPropsIntoLine:3,maxPropObjectKeys:3,maxPropArrayLength:3,maxPropStringLength:50},sectionOptions:{showSource:!0,allowSourceToggling:!0,showPropTables:!1,allowPropTablesToggling:!0,useTheme:!0,decorator:!1}};__webpack_exports__.a={addWithChapters:function(storyName){var storyContentOrFn=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};return this.add(storyName,function(context){var storyContent="function"==typeof storyContentOrFn?storyContentOrFn():storyContentOrFn;return(storyContent.chapters||[]).forEach(function(chapter){(chapter.sections||[]).forEach(function(section){Object.assign(section,{options:Object.assign({},src_defaultProps.sectionOptions,section.options)})})}),react_default.a.createElement(Story_Story,extends_default()({context:context,title:storyName,subtitle:storyContent.subtitle,info:storyContent.info,chapters:storyContent.chapters},src_defaultProps))})}}},547:function(module,exports,__webpack_require__){__webpack_require__(211),__webpack_require__(548),module.exports=__webpack_require__(549)},549:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(123),_src___WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(546);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.addDecorator)(function(story){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:{padding:20}},story())}),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.setAddon)(_src___WEBPACK_IMPORTED_MODULE_2__.a),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.configure)(function(){__webpack_require__(574)},module)}.call(this,__webpack_require__(310)(module))},574:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(123),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_Button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(124);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("Addon Chapters",module).addWithChapters("Story With Chapters",{useTheme:!1,subtitle:"Display multiple components within one story!",info:"\n        React Storybook Chapters addon allows showcasing of multiple components within a story by breaking it down into smaller categories (**Chapters**) and subcategories (**Sections**) for more organizational goodness.\n\n        This section is called **Story Info** and you can provide an abstract of your story here.\n\n        A story consists of multiple chapters and a chapter consists of multiple sections. Each section can render a block of code,\n        which typically used to showcase one component or a particular state of a component.\n\n        Yes, all info sections support markdown formatting!\n      ",chapters:[{title:"This is a Chapter's Title",subtitle:"And this is a chapter's subtitle",info:"\n            Chapters can be used to group related components together, or show varying states of a component.\n            Each chapter comes with a **Chapter Title**, **Chapter Subtitle**, **Chapter Info** and a list of **Sections**.\n            Simply omit any of them to hide them from rendering.\n          ",sections:[{title:"This is a Section's Title",subtitle:"Each section can be used to render a component",info:"\n                Provide additional information about your section here.\n                Each section comes with a **Section Title**, **Section Subtitle**, **Section Info**.\n                Simply omit any of them to hide them from rendering. The section below does not have a subtitle nor info.\n\n                There's also the option of showing the source code and propTypes of the component.\n              ",sectionFn:function(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__.a,{label:"My Button",onClick:function(){alert("Hello World!")}})},options:{showSource:!1,allowSourceToggling:!0,showPropTables:!0,allowPropTablesToggling:!0}},{title:"Here's another section, but without subtitle and info",sectionFn:function(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__.a,{label:"My Disabled Button",disabled:!0,onClick:function(){}})}}]},{title:"Usage",info:"\nInstall the following npm module:\n\n~~~\nnpm install --save-dev react-storybook-addon-chapters\n~~~\n\nThen set the addon in the place you configure storybook like this:\n\n~~~\nimport React from 'react';\nimport { configure, setAddon } from '@storybook/react';\nimport chaptersAddon from 'react-storybook-addon-chapters';\n\nsetAddon(chaptersAddon);\n\nconfigure(function () {\n  ...\n}, module);\n~~~\n\nThen create your stories with the **.addWithChapters** API.\n\n~~~\nimport React from 'react';\nimport Button from './Button';\nimport { storiesOf } from '@storybook/react';\n\nstoriesOf('Addon Chapters')\n  .addWithChapters(\n    'Story With Chapters',\n    {\n      subtitle: <Optional story subtitle>,\n      info: <Optional story info>,\n      chapters: [\n        // List of chapters.\n        {\n          title: <Optional chapter title>,\n          subtitle: <Optional chapter subtitle>,\n          info: <Optional chapter info>,\n          sections: [\n            // List of sections.\n            {\n              title: <Optional section title>,\n              subtitle: <Optional section subtitle>,\n              info: <Optional section info>,\n              sectionFn: () => (<Button>My Button</Button>),\n              options: {\n                showSource: true,\n                allowSourceToggling: true,\n                showPropTables: true,\n                allowPropTablesToggling: true,\n              },\n            },\n            ...\n          ],\n        },\n        ...\n      ]\n    }\n  );\n~~~\n          "}]}).addWithChapters("Story Without Chapters",{info:"\n        If you don't require displaying of the chapter information, simply use only one chapter with your list of sections and omit the chapter-related parameters.\n        You'll end up with just a list of rendered sections. Refer to the example in **example/story.js**.\n      ",chapters:[{sections:[{title:"Section Title",subtitle:"Section Subtitle",info:"\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n              ",sectionFn:function(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__.a,{label:"My Button",onClick:function(){}})}},{title:"Section Title Again",subtitle:"Section Subtitle Again",sectionFn:function(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__.a,{label:"My Button Again",onClick:function(){}})}}]}]});var decorator=function(story){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{style:{backgroundColor:"rgba(0, 0, 0, 0.1)",display:"inline-block",padding:"10px"}},story())};Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("Addon Chapters",module).addWithChapters("Story With Decorators",{info:"\n      If you don't require displaying of the chapter information, simply use only one chapter with your list of sections and omit the chapter-related parameters.\n      You'll end up with just a list of rendered sections. Refer to the example in **example/story.js**.\n    ",chapters:[{sections:[{title:"Section Title",subtitle:"Section Subtitle",info:"\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n            ",sectionFn:function(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__.a,{label:"My Button",onClick:function(){}})},options:{decorator:decorator}},{title:"Section Title Again",subtitle:"Section Subtitle Again",sectionFn:function(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__.a,{label:"My Button Again",onClick:function(){}})},options:{decorator:decorator}}]}]})}.call(this,__webpack_require__(310)(module))}},[[547,2,4]]]);
//# sourceMappingURL=iframe.f2f7a5df931946ac5523.bundle.js.map