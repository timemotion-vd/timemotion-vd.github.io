function justifiedgallery_pluginAppObj_54(){function loadImage(){$gallery.imagesLoaded().progress(function(){}).done(function(){effect!=="none"&&(loaders.push(new GridLoaderFx($gallery)),applyFx())})}function create_showbox(){$("#jg_pluginAppObj_54 .grid-item.showbox").off("click.sb");$("#jg_pluginAppObj_54 .grid-item.showbox").on("click.sb",function(){for(var starting_index=parseInt($(this).attr("data-index"),10),images=["pluginAppObj/pluginAppObj_54/20200927_0001_sb.jpg","pluginAppObj/pluginAppObj_54/20200927_0002_sb.jpg","pluginAppObj/pluginAppObj_54/20200927_0003_sb.jpg","pluginAppObj/pluginAppObj_54/20200927_0004_sb.jpg","pluginAppObj/pluginAppObj_54/20200927_0005_sb.jpg","pluginAppObj/pluginAppObj_54/20200927_0006_sb.jpg","pluginAppObj/pluginAppObj_54/20200927_0007_sb.jpg","pluginAppObj/pluginAppObj_54/20200927_0008_sb.jpg","pluginAppObj/pluginAppObj_54/20200927_0009_sb.jpg","pluginAppObj/pluginAppObj_54/20200927_0010_sb.jpg","pluginAppObj/pluginAppObj_54/20200927_0011_sb.jpg","pluginAppObj/pluginAppObj_54/20200927_0012_sb.jpg","pluginAppObj/pluginAppObj_54/20200927_0013_sb.jpg","pluginAppObj/pluginAppObj_54/20200927_0014_sb.jpg","pluginAppObj/pluginAppObj_54/20200927_0015_sb.jpg","pluginAppObj/pluginAppObj_54/20200927_0016_sb.jpg","pluginAppObj/pluginAppObj_54/20200927_0017_sb.jpg","pluginAppObj/pluginAppObj_54/20200927_0018_sb.jpg","pluginAppObj/pluginAppObj_54/20200927_0019_sb.jpg","pluginAppObj/pluginAppObj_54/20200927_0020_sb.jpg","pluginAppObj/pluginAppObj_54/20200927_0021_sb.jpg","pluginAppObj/pluginAppObj_54/20200927_0022_sb.jpg","pluginAppObj/pluginAppObj_54/20200927_0023_sb.jpg","pluginAppObj/pluginAppObj_54/20200927_0024_sb.jpg","pluginAppObj/pluginAppObj_54/20200927_0025_sb.jpg","pluginAppObj/pluginAppObj_54/20200927_0026_sb.jpg","pluginAppObj/pluginAppObj_54/20200927_0027_sb.jpg","pluginAppObj/pluginAppObj_54/20200927_0028_sb.jpg","pluginAppObj/pluginAppObj_54/20200927_0029_sb.jpg","pluginAppObj/pluginAppObj_54/20200927_0030_sb.jpg","pluginAppObj/pluginAppObj_54/20200927_0031_sb.jpg","pluginAppObj/pluginAppObj_54/20200927_0032_sb.jpg","pluginAppObj/pluginAppObj_54/20200927_0033_sb.jpg","pluginAppObj/pluginAppObj_54/20200927_0034_sb.jpg","pluginAppObj/pluginAppObj_54/20200927_0035_sb.jpg","pluginAppObj/pluginAppObj_54/20200927_0036_sb.jpg","pluginAppObj/pluginAppObj_54/20200927_0037_sb.jpg","pluginAppObj/pluginAppObj_54/20200927_0038_sb.jpg","pluginAppObj/pluginAppObj_54/20200927_0039_sb.jpg","pluginAppObj/pluginAppObj_54/20200927_0040_sb.jpg","pluginAppObj/pluginAppObj_54/20200927_0041_sb.jpg","pluginAppObj/pluginAppObj_54/20200927_0042_sb.jpg","pluginAppObj/pluginAppObj_54/20200927_0043_sb.jpg","pluginAppObj/pluginAppObj_54/20200927_0044_sb.jpg","pluginAppObj/pluginAppObj_54/20200927_0045_sb.jpg","pluginAppObj/pluginAppObj_54/20200927_0046_sb.jpg","pluginAppObj/pluginAppObj_54/20200927_0047_sb.jpg","pluginAppObj/pluginAppObj_54/20200927_0048_sb.jpg","pluginAppObj/pluginAppObj_54/20200927_0049_sb.jpg","pluginAppObj/pluginAppObj_54/20200927_0050_sb.jpg","pluginAppObj/pluginAppObj_54/20200927_0051_sb.jpg","pluginAppObj/pluginAppObj_54/20200927_0052_sb.jpg","pluginAppObj/pluginAppObj_54/20200927_0053_sb.jpg","pluginAppObj/pluginAppObj_54/20200927_0054_sb.jpg","pluginAppObj/pluginAppObj_54/20200927_0055_sb.jpg","pluginAppObj/pluginAppObj_54/20200927_0056_sb.jpg","pluginAppObj/pluginAppObj_54/20200927_0057_sb.jpg","pluginAppObj/pluginAppObj_54/20200927_0058_sb.jpg","pluginAppObj/pluginAppObj_54/20200927_0059_sb.jpg","pluginAppObj/pluginAppObj_54/20200927_0060_sb.jpg","pluginAppObj/pluginAppObj_54/20200927_0061_sb.jpg","pluginAppObj/pluginAppObj_54/20200927_0062_sb.jpg","pluginAppObj/pluginAppObj_54/20200927_0063_sb.jpg","pluginAppObj/pluginAppObj_54/20200927_0064_sb.jpg","pluginAppObj/pluginAppObj_54/20200927_0065_sb.jpg","pluginAppObj/pluginAppObj_54/20200927_0066_sb.jpg","pluginAppObj/pluginAppObj_54/20200927_0067_sb.jpg","pluginAppObj/pluginAppObj_54/20200927_0068_sb.jpg","pluginAppObj/pluginAppObj_54/20200927_0069_sb.jpg","pluginAppObj/pluginAppObj_54/20200927_0070_sb.jpg","pluginAppObj/pluginAppObj_54/20200927_0071_sb.jpg","pluginAppObj/pluginAppObj_54/20200927_0072_sb.jpg","pluginAppObj/pluginAppObj_54/20200927_0073_sb.jpg","pluginAppObj/pluginAppObj_54/20200927_0074_sb.jpg","pluginAppObj/pluginAppObj_54/20200927_0075_sb.jpg","pluginAppObj/pluginAppObj_54/20200927_0076_sb.jpg","pluginAppObj/pluginAppObj_54/20200927_0077_sb.jpg","pluginAppObj/pluginAppObj_54/20200927_0078_sb.jpg","pluginAppObj/pluginAppObj_54/20200927_0079_sb.jpg","pluginAppObj/pluginAppObj_54/20200927_0080_sb.jpg","pluginAppObj/pluginAppObj_54/20200927_0081_sb.jpg","pluginAppObj/pluginAppObj_54/20200927_0082_sb.jpg","pluginAppObj/pluginAppObj_54/20200927_0083_sb.jpg","pluginAppObj/pluginAppObj_54/20200927_0084_sb.jpg","pluginAppObj/pluginAppObj_54/20200927_0085_sb.jpg","pluginAppObj/pluginAppObj_54/20200927_0086_sb.jpg","pluginAppObj/pluginAppObj_54/20200927_0087_sb.jpg","pluginAppObj/pluginAppObj_54/20200927_0088_sb.jpg","pluginAppObj/pluginAppObj_54/20200927_0089_sb.jpg","pluginAppObj/pluginAppObj_54/20200927_0090_sb.jpg","pluginAppObj/pluginAppObj_54/20200927_0091_sb.jpg"],medias=[],i=0;i<images.length;i++)medias[i]={url:images[i],type:"image"};return x5engine.imShowBox({media:medias},starting_index,$(this)),!1})}function resized_pluginAppObj_54(){$("#jg_pluginAppObj_54 .grid-item").each(function(){$(this).find(".overlay-content").css({width:$(this).width(),height:$(this).height()})})}function applyFx(){loadingTimeout=setTimeout(function(){loaders[0]._render()},500)}function GridLoaderFx(el){this.el=el;this.items=$(el).find(".grid-item .item-img")}function animeComplete(anim){anim.completed&&$("#jg_pluginAppObj_54 .jg-container .grid-item img.item-img").removeClass("back-show").addClass("no-show")}var $gallery,grid="",loaders=[],loadingTimeout,effect="none";x5engine.boot.push(function(){grid=$("#jg_pluginAppObj_54 .jg-container");$gallery=$("#jg_pluginAppObj_54 .jg-container").justifiedGallery({rowHeight:120,margins:3,justifyThreshold:.9,captions:!1,thumbnailPath:function(currentPath,width,height,image){var origImgPath=image.dataset.origSrc,thumbH=parseInt(image.dataset.th),fullwidthH=parseInt(image.dataset.fwh),showboxH=parseInt(image.dataset.sbh);return height>thumbH?fullwidthH>showboxH&&height>showboxH||fullwidthH<showboxH&&height<fullwidthH?origImgPath.replace(/(.*)(\..*)/,"$1_fw$2"):origImgPath.replace(/(.*)(\..*)/,"$1_sb$2"):origImgPath}});$gallery.justifiedGallery().on("jg.complete",function(){resized_pluginAppObj_54()});$gallery.justifiedGallery().on("jg.resize",function(){resized_pluginAppObj_54()});if(1)x5engine.utils.onElementInViewPort($("#jg_pluginAppObj_54 .jg-container")[0],loadImage,$("#jg_pluginAppObj_54 .jg-container .grid-item .item-img:lt(1)").height()/3);else loadImage();create_showbox()});GridLoaderFx.prototype._render=function(){var animeLineDrawingOpts,animeRevealerOpts;this._resetStyles();var self=this,effectSettings=this.effects[effect],animeOpts=effectSettings.animeOpts;effectSettings.perspective!=undefined&&[].slice.call(this.items).forEach(function(item){item.parentNode.style.WebkitPerspective=item.parentNode.style.perspective=effectSettings.perspective+"px"});effectSettings.origin!=undefined&&[].slice.call(this.items).forEach(function(item){item.style.WebkitTransformOrigin=item.style.transformOrigin=effectSettings.origin});effectSettings.lineDrawing!=undefined&&([].slice.call(this.items).forEach(function(item){var svg=document.createElementNS("http://www.w3.org/2000/svg","svg"),path=document.createElementNS("http://www.w3.org/2000/svg","path"),itemW=item.offsetWidth-.1,itemH=item.offsetHeight;svg.setAttribute("width",itemW+"px");svg.setAttribute("height",itemH+"px");svg.setAttribute("viewBox","0 0 "+itemW+" "+itemH);svg.setAttribute("class","grid__deco");path.setAttribute("d","M0,0 l"+itemW+",0 0,"+itemH+" -"+itemW+",0 0,-"+itemH);path.setAttribute("stroke-dashoffset",anime.setDashoffset(path));svg.appendChild(path);item.parentNode.appendChild(svg)}),animeLineDrawingOpts=effectSettings.animeLineDrawingOpts,animeLineDrawingOpts.targets=document.querySelectorAll("#jg_pluginAppObj_54 .jg-container .grid__deco > path"),anime.remove(animeLineDrawingOpts.targets),anime(animeLineDrawingOpts));effectSettings.revealer!=undefined&&([].slice.call(this.items).forEach(function(item){var revealer=document.createElement("div");revealer.className="grid__reveal";effectSettings.revealerOrigin!=undefined&&(revealer.style.transformOrigin=effectSettings.revealerOrigin);effectSettings.revealerColor!=undefined&&(revealer.style.backgroundColor="rgba(159, 171, 176, 1)");item.parentNode.appendChild(revealer)}),animeRevealerOpts=effectSettings.animeRevealerOpts,animeRevealerOpts.targets=document.querySelectorAll("#jg_pluginAppObj_54 .jg-container .grid__reveal"),animeRevealerOpts.begin=function(obj){for(var i=0,len=obj.animatables.length;i<len;++i)obj.animatables[i].target.style.opacity=1},anime.remove(animeRevealerOpts.targets),anime(animeRevealerOpts));effectSettings.itemOverflowHidden&&[].slice.call(this.items).forEach(function(item){item.parentNode.style.overflow="hidden"});animeOpts.targets=effectSettings.sortTargetsFn&&typeof effectSettings.sortTargetsFn=="function"?[].slice.call(this.items).sort(effectSettings.sortTargetsFn):document.querySelectorAll("#jg_pluginAppObj_54 .jg-container .item-img");animeOpts.complete=animeComplete;anime.remove(animeOpts.targets);anime(animeOpts)};GridLoaderFx.prototype._resetStyles=function(){this.el.style="";this.el.style.perspective="";this.el.style.WebkitPerspective=this.el.style.perspective="none";[].slice.call(this.items).forEach(function(item){var gItem=item.parentNode,svg,revealer;item.style.opacity=0;item.style.WebkitTransformOrigin=item.style.transformOrigin="50% 50%";item.style.transform="none";svg=item.parentNode.querySelector("svg.grid__deco");svg&&gItem.removeChild(svg);revealer=item.parentNode.querySelector(".grid__reveal");revealer&&gItem.removeChild(revealer);gItem.style.overflow=""})};GridLoaderFx.prototype.effects={Hapi:{animeOpts:{duration:function(t,i){return 600+i*75},easing:"easeOutExpo",delay:function(t,i){return i*50},opacity:{value:[0,1],easing:"linear"},scale:[0,1]}},Amun:{sortTargetsFn:function(a,b){var aBounds=a.getBoundingClientRect(),bBounds=b.getBoundingClientRect();return aBounds.left-bBounds.left||aBounds.top-bBounds.top},animeOpts:{duration:function(t,i){return 500+i*50},easing:"easeOutExpo",delay:function(t,i){return i*20},opacity:{value:[0,1],duration:function(t,i){return 250+i*50},easing:"linear"},translateY:[400,0]}},Kek:{sortTargetsFn:function(a,b){return b.getBoundingClientRect().left-a.getBoundingClientRect().left},animeOpts:{duration:800,easing:[.1,1,.3,1],delay:function(t,i){return i*20},opacity:{value:[0,1],duration:600,easing:"linear"},translateX:[-500,0],rotateZ:[15,0]}},Isis:{animeOpts:{duration:900,elasticity:500,delay:function(t,i){return i*15},opacity:{value:[0,1],duration:300,easing:"linear"},translateX:function(){return[anime.random(0,1)===0?100:-100,0]},translateY:function(){return[anime.random(0,1)===0?100:-100,0]}}},Montu:{perspective:800,origin:"50% 0%",animeOpts:{duration:1500,elasticity:400,delay:function(t,i){return i*75},opacity:{value:[0,1],duration:1e3,easing:"linear"},rotateX:[-90,0]}},Osiris:{perspective:3e3,animeOpts:{duration:function(){return anime.random(500,1e3)},easing:[.2,1,.3,1],delay:function(t,i){return i*50},opacity:{value:[0,1],duration:700,easing:"linear"},translateZ:{value:[-3e3,0],duration:1e3},rotateY:["-1turns",0]}},Satet:{animeOpts:{duration:800,elasticity:600,delay:function(t,i){return i*100},opacity:{value:[0,1],duration:600,easing:"linear"},scaleX:{value:[.4,1]},scaleY:{value:[.6,1],duration:1e3}}},Atum:{sortTargetsFn:function(a,b){var docScrolls={top:document.body.scrollTop+document.documentElement.scrollTop},y1=window.innerHeight+docScrolls.top,aBounds=a.getBoundingClientRect(),ay1=aBounds.top+docScrolls.top+aBounds.height/2,bBounds=b.getBoundingClientRect(),by1=bBounds.top+docScrolls.top+bBounds.height/2;return Math.abs(y1-ay1)-Math.abs(y1-by1)},perspective:1e3,origin:"50% 0%",animeOpts:{duration:800,easing:[.1,1,.3,1],delay:function(t,i){return i*35},opacity:{value:[0,1],duration:600,easing:"linear"},translateX:[100,0],translateY:[-100,0],translateZ:[400,0],rotateZ:[10,0],rotateX:[75,0]}},Ra:{origin:"50% 0%",animeOpts:{duration:500,easing:"easeOutBack",delay:function(t,i){return i*100},opacity:{value:[0,1],easing:"linear"},translateY:[400,0],scaleY:[{value:[3,.6],delay:function(t,i){return i*100+120},duration:300,easing:"easeOutExpo"},{value:[.6,1],duration:1400,easing:"easeOutElastic"}],scaleX:[{value:[.9,1.05],delay:function(t,i){return i*100+120},duration:300,easing:"easeOutExpo"},{value:[1.05,1],duration:1400,easing:"easeOutElastic"}]}},Sobek:{animeOpts:{duration:600,easing:"easeOutExpo",delay:function(t,i){return i*100},opacity:{value:[0,1],duration:100,easing:"linear"},translateX:function(t){var docScrolls={left:document.body.scrollLeft+document.documentElement.scrollLeft},x1=window.innerWidth/2+docScrolls.left,tBounds=t.getBoundingClientRect(),x2=tBounds.left+docScrolls.left+tBounds.width/2;return[x1-x2,0]},translateY:function(t){var docScrolls={top:document.body.scrollTop+document.documentElement.scrollTop},y1=window.innerHeight+docScrolls.top,tBounds=t.getBoundingClientRect(),y2=tBounds.top+docScrolls.top+tBounds.height/2;return[y1-y2,0]},rotate:function(t){var x1=window.innerWidth/2,tBounds=t.getBoundingClientRect(),x2=tBounds.left+tBounds.width/2;return[x2<x1?90:-90,0]},scale:[0,1]}},Ptah:{itemOverflowHidden:!0,sortTargetsFn:function(a,b){return b.getBoundingClientRect().left-a.getBoundingClientRect().left},origin:"100% 0%",animeOpts:{duration:500,easing:"easeOutExpo",delay:function(t,i){return i*20},opacity:{value:[0,1],duration:400,easing:"linear"},rotateZ:[45,0]}},Bes:{revealer:!0,revealerOrigin:"100% 50%",animeRevealerOpts:{duration:800,delay:function(t,i){return i*75},easing:"easeInOutQuart",scaleX:[1,0]},animeOpts:{duration:800,easing:"easeInOutQuart",delay:function(t,i){return i*75},opacity:{value:[0,1],easing:"linear"},scale:[.8,1]}},Seker:{revealer:!0,revealerOrigin:"50% 100%",animeRevealerOpts:{duration:500,delay:function(t,i){return i*50},easing:[.7,0,.3,1],translateY:[100,0],scaleY:[1,0]},animeOpts:{duration:500,easing:[.7,0,.3,1],delay:function(t,i){return i*50},opacity:{value:[0,1],duration:400,easing:"linear"},translateY:[100,0],scale:[.8,1]}},Nut:{revealer:!0,revealerColor:"#1d1d1d",itemOverflowHidden:!0,animeRevealerOpts:{easing:"easeOutCubic",delay:function(t,i){return i*100},translateX:[{value:["101%","0%"],duration:400},{value:["0%","-101%"],duration:400}]},animeOpts:{duration:900,easing:"easeOutCubic",delay:function(t,i){return 400+i*100},opacity:{value:1,duration:1,easing:"linear"},scale:[.8,1]}},Shu:{lineDrawing:!0,animeLineDrawingOpts:{duration:800,delay:function(t,i){return i*150},easing:"easeInOutSine",strokeDashoffset:[anime.setDashoffset,0],opacity:[{value:[0,1]},{value:[1,0],duration:200,easing:"linear",delay:500}]},animeOpts:{duration:800,easing:[.2,1,.3,1],delay:function(t,i){return i*150+800},opacity:{value:[0,1],easing:"linear"},scale:[.5,1]}}}}