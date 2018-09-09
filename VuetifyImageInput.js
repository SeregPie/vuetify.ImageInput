(function(a,b){"object"==typeof exports&&"undefined"!=typeof module?module.exports=b(require("paperduck")):"function"==typeof define&&define.amd?define(["paperduck"],b):a.VuetifyImageInput=b(a.PaperDuck)})(this,function(a){"use strict";function b(a){return function(){return a}}function c(a){return"function"==typeof a}function d(a){return c(a)?a:b(a)}function e(){}a=a&&a.hasOwnProperty("default")?a["default"]:a;var f={clearable:{type:Boolean,default:!1},clearIcon:{type:[Function,String],default:function(){return this.$vuetify.icons.clear}},disabled:{type:Boolean,default:!1},flipHorizontallyIcon:{type:[Function,String],default:"flip"},flipHorizontallyIconStyle:[Function,Object],flipHorizontallyText:{type:[Function,String],default:"flip horizontally"},flipVerticallyIcon:{type:[Function,String],default:"flip"},flipVerticallyIconStyle:{type:[Function,Object],default:b({transform:"rotate(90deg)"})},flipVerticallyText:{type:[Function,String],default:"flip vertically"},fullHeight:{type:Boolean,default:!1},fullWidth:{type:Boolean,default:!1},hideActions:{type:Boolean,default:!1},imageEncoderOptions:{},imageHeight:{type:Number,default:256},imageType:{type:String,default:"png"},imageWidth:{type:Number,default:256},readonly:{type:Boolean,default:!1},rotateClockwiseIcon:{type:[Function,String],default:"rotate_90_degrees_ccw"},rotateClockwiseIconStyle:{type:[Function,Object],default:b({transform:"scaleX(-1)"})},rotateClockwiseText:{type:[Function,String],default:"rotate clockwise"},rotateCounterclockwiseIcon:{type:[Function,String],default:"rotate_90_degrees_ccw"},rotateCounterclockwiseIconStyle:[Function,Object],rotateCounterclockwiseText:{type:[Function,String],default:"rotate counterclockwise"},uploadIcon:{type:[Function,String],default:"cloud_upload"},uploadIconStyle:[Function,Object],value:String},g={name:"VImageInput",inject:{theme:{default:{isDark:!1}}},props:f,data:function(){return{lazyImage:void 0}},computed:{borderColor:function(){var a=this,b=a.theme;return"rgba("+(b.isDark?"255,255,255,0.7":"0,0,0,0.54")+")"},checkeredBackground:function(){//let {theme} = this;
return["url('data:image/svg+xml;base64,"+btoa("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 2 2\" fill-opacity=\"0.2\"><rect x=\"1\" width=\"1\" height=\"1\"/><rect y=\"1\" width=\"1\" height=\"1\"/></svg>")+"')","center center / 16px 16px","repeat","#fff"].join(" ")},image:{get:function(){return this.lazyImage},set:function(a){this.lazyImage=a,this.$emit("input",this.internalValue)}},internalValue:function(){return this.image?this.image.toDataURL("image/"+this.imageType,this.imageEncoderOptions):null}},watch:{value:{handler:function(b){this.internalValue!==b&&(this.lazyImage=a.from(b))},immediate:!0}},methods:{clear:function(){this.image=null},createActionButtonElement:function(a,b,c,e,f){var g=this,h=g.disabled,i=g.readonly;c=d(c).call(this),e=d(e).call(this),f=d(f).call(this);var j,k={props:{disabled:h||i,flat:!0,icon:!0},on:{click:b}},l=function(){j=a("v-btn",k,[a("v-icon",{style:e},c)])};return f?(k.slot="activator",l(),j=a("v-tooltip",{props:{right:!0}},[j,a("span",f)])):l(),j},createClearButtonElement:function(a){var b=this,c=b.clear,e=b.clearIcon,f=b.disabled;return e=d(e).call(this),a("v-btn",{props:{disabled:f,flat:!0,icon:!0},on:{click:c}},[a("v-icon",e)])},createCropperElement:function(a,b){var c=this,d=c.checkeredBackground,e=c.imageHeight,f=c.imageWidth,g=[];return b&&g.push(this.createImageElement(a,b)),a("div",{style:{alignItems:"center",background:d,display:"flex",flexGrow:1,justifyContent:"center",minHeight:e+"px",minWidth:f+"px"}},g)},createEditorElement:function(a,b){var c=this,d=c.clearable,e=c.hideActions,f=[];return d&&f.push(this.createClearButtonElement(a),a("v-spacer")),e||f.push(this.createFlipHorizontallyButtonElement(a),this.createFlipVerticallyButtonElement(a),this.createRotateClockwiseButtonElement(a),this.createRotateCounterclockwiseButtonElement(a)),a("div",{style:{display:"flex",minHeight:"100%",minWidth:"100%"}},[this.createCropperElement(a,b),a("div",{style:{display:"flex",flexDirection:"column",flexWrap:"wrap",justifyContent:"center"}},f)])},createFlipHorizontallyButtonElement:function(a){var b=this,c=b.flipHorizontally,d=b.flipHorizontallyIcon,e=b.flipHorizontallyIconStyle,f=b.flipHorizontallyText;return this.createActionButtonElement(a,c,d,e,f)},createFlipVerticallyButtonElement:function(a){var b=this,c=b.flipVertically,d=b.flipVerticallyIcon,e=b.flipVerticallyIconStyle,f=b.flipVerticallyText;return this.createActionButtonElement(a,c,d,e,f)},createImageElement:function(a,b){return a("img",{attrs:{src:b.toDataURL()}})},createRotateClockwiseButtonElement:function(a){var b=this,c=b.rotateClockwise,d=b.rotateClockwiseIcon,e=b.rotateClockwiseIconStyle,f=b.rotateClockwiseText;return this.createActionButtonElement(a,c,d,e,f)},createRotateCounterclockwiseButtonElement:function(a){var b=this,c=b.rotateCounterclockwise,d=b.rotateCounterclockwiseIcon,e=b.rotateCounterclockwiseIconStyle,f=b.rotateCounterclockwiseText;return this.createActionButtonElement(a,c,d,e,f)},createUploaderElement:function(a){var b=this,c=b.disabled,e=b.readonly,f=b.upload,g=b.uploadIcon,h=b.uploadIconStyle;return g=d(g).call(this),h=d(h).call(this),a("div",{style:{alignItems:"center",bottom:0,display:"flex",justifyContent:"center",left:0,position:"absolute",right:0,top:0}},[a("v-btn",{props:{color:"primary",disabled:c||e,fab:!0,large:!0},on:{click:f}},[a("v-icon",{style:h},g)])])},flipHorizontally:function(){this.image=this.image.flop()},flipVertically:function(){this.image=this.image.flip()},rotateClockwise:function(){this.image=this.image.rotate90()},rotateCounterclockwise:function(){this.image=this.image.rotate270()},upload:function(){var b=this,c=document.createElement("input");c.type="file",c.addEventListener("change",function(){a.load(c).then(function(a){b.image=a.cover(b.imageWidth,b.imageHeight)}).catch(e)}),c.click()}},render:function(a){var b=this,c=b.borderColor,d=b.fullHeight,e=b.fullWidth,f=b.image,g={class:"transition-swing",style:{border:"2px solid "+c,borderRadius:"4px",display:"inline",position:"relative"}};e&&(g.style.width="100%"),d&&(g.style.height="100%");var h,i=[],j={style:{display:"table",height:0,minHeight:"100%",minWidth:"100%",width:0}},k=function(){i.push(a("div",j,[h]))};return f?(h=this.createEditorElement(a,f),k()):(h=this.createEditorElement(a),Object.assign(j.style,{opacity:0,visibility:"hidden"}),k(),i.push(this.createUploaderElement(a))),a("div",g,i)}};return"undefined"!=typeof window&&window.Vue&&window.Vue.component(g.name,g),g});
