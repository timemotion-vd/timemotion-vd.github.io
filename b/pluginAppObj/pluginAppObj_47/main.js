function justifiedgallery_pluginAppObj_47(){function loadImage(){$gallery.imagesLoaded().progress(function(){}).done(function(){effect!=="none"&&(loaders.push(new GridLoaderFx($gallery)),applyFx())})}function create_showbox(){$("#jg_pluginAppObj_47 .grid-item.showbox").off("click.sb");$("#jg_pluginAppObj_47 .grid-item.showbox").on("click.sb",function(){for(var starting_index=parseInt($(this).attr("data-index"),10),images=["pluginAppObj/pluginAppObj_47/74---------_200704_1_sb.jpg","pluginAppObj/pluginAppObj_47/74---------_200704_12_sb.jpg","pluginAppObj/pluginAppObj_47/001_sb.jpg","pluginAppObj/pluginAppObj_47/002_sb.jpg","pluginAppObj/pluginAppObj_47/003_sb.jpg","pluginAppObj/pluginAppObj_47/004_sb.jpg","pluginAppObj/pluginAppObj_47/005_sb.jpg","pluginAppObj/pluginAppObj_47/006_sb.jpg","pluginAppObj/pluginAppObj_47/007_sb.jpg","pluginAppObj/pluginAppObj_47/008_sb.jpg","pluginAppObj/pluginAppObj_47/009_sb.jpg","pluginAppObj/pluginAppObj_47/010_sb.jpg","pluginAppObj/pluginAppObj_47/011_sb.jpg","pluginAppObj/pluginAppObj_47/012_sb.jpg","pluginAppObj/pluginAppObj_47/013_sb.jpg","pluginAppObj/pluginAppObj_47/014_sb.jpg","pluginAppObj/pluginAppObj_47/015_sb.jpg","pluginAppObj/pluginAppObj_47/016_sb.jpg","pluginAppObj/pluginAppObj_47/017_sb.jpg","pluginAppObj/pluginAppObj_47/018_sb.jpg","pluginAppObj/pluginAppObj_47/019_sb.jpg","pluginAppObj/pluginAppObj_47/020_sb.jpg","pluginAppObj/pluginAppObj_47/021_sb.jpg","pluginAppObj/pluginAppObj_47/022_sb.jpg","pluginAppObj/pluginAppObj_47/023_sb.jpg","pluginAppObj/pluginAppObj_47/024_sb.jpg","pluginAppObj/pluginAppObj_47/025_sb.jpg","pluginAppObj/pluginAppObj_47/026_sb.jpg","pluginAppObj/pluginAppObj_47/027_sb.jpg","pluginAppObj/pluginAppObj_47/028_sb.jpg","pluginAppObj/pluginAppObj_47/029_sb.jpg","pluginAppObj/pluginAppObj_47/030_sb.jpg","pluginAppObj/pluginAppObj_47/031_sb.jpg","pluginAppObj/pluginAppObj_47/032_sb.jpg","pluginAppObj/pluginAppObj_47/033_sb.jpg","pluginAppObj/pluginAppObj_47/034_sb.jpg","pluginAppObj/pluginAppObj_47/035_sb.jpg","pluginAppObj/pluginAppObj_47/036_sb.jpg","pluginAppObj/pluginAppObj_47/037_sb.jpg","pluginAppObj/pluginAppObj_47/038_sb.jpg","pluginAppObj/pluginAppObj_47/039_sb.jpg","pluginAppObj/pluginAppObj_47/040_sb.jpg","pluginAppObj/pluginAppObj_47/041_sb.jpg","pluginAppObj/pluginAppObj_47/042_sb.jpg","pluginAppObj/pluginAppObj_47/043_sb.jpg","pluginAppObj/pluginAppObj_47/044_sb.jpg","pluginAppObj/pluginAppObj_47/045_sb.jpg","pluginAppObj/pluginAppObj_47/046_sb.jpg","pluginAppObj/pluginAppObj_47/047_sb.jpg","pluginAppObj/pluginAppObj_47/048_sb.jpg","pluginAppObj/pluginAppObj_47/049_sb.jpg","pluginAppObj/pluginAppObj_47/050_sb.jpg","pluginAppObj/pluginAppObj_47/051_sb.jpg","pluginAppObj/pluginAppObj_47/052_sb.jpg","pluginAppObj/pluginAppObj_47/053_sb.jpg","pluginAppObj/pluginAppObj_47/054_sb.jpg","pluginAppObj/pluginAppObj_47/055_sb.jpg","pluginAppObj/pluginAppObj_47/056_sb.jpg","pluginAppObj/pluginAppObj_47/057_sb.jpg","pluginAppObj/pluginAppObj_47/058_sb.jpg","pluginAppObj/pluginAppObj_47/059_sb.jpg","pluginAppObj/pluginAppObj_47/060_sb.jpg","pluginAppObj/pluginAppObj_47/061_sb.jpg","pluginAppObj/pluginAppObj_47/062_sb.jpg","pluginAppObj/pluginAppObj_47/063_sb.jpg","pluginAppObj/pluginAppObj_47/064_sb.jpg","pluginAppObj/pluginAppObj_47/065_sb.jpg","pluginAppObj/pluginAppObj_47/066_sb.jpg","pluginAppObj/pluginAppObj_47/067_sb.jpg","pluginAppObj/pluginAppObj_47/068_sb.jpg","pluginAppObj/pluginAppObj_47/069_sb.jpg","pluginAppObj/pluginAppObj_47/070_sb.jpg","pluginAppObj/pluginAppObj_47/071_sb.jpg","pluginAppObj/pluginAppObj_47/072_sb.jpg","pluginAppObj/pluginAppObj_47/073_sb.jpg","pluginAppObj/pluginAppObj_47/074_sb.jpg","pluginAppObj/pluginAppObj_47/075_sb.jpg","pluginAppObj/pluginAppObj_47/076_sb.jpg","pluginAppObj/pluginAppObj_47/077_sb.jpg","pluginAppObj/pluginAppObj_47/078_sb.jpg","pluginAppObj/pluginAppObj_47/079_sb.jpg","pluginAppObj/pluginAppObj_47/080_sb.jpg","pluginAppObj/pluginAppObj_47/081_sb.jpg","pluginAppObj/pluginAppObj_47/082_sb.jpg","pluginAppObj/pluginAppObj_47/083_sb.jpg","pluginAppObj/pluginAppObj_47/084_sb.jpg","pluginAppObj/pluginAppObj_47/085_sb.jpg","pluginAppObj/pluginAppObj_47/086_sb.jpg","pluginAppObj/pluginAppObj_47/087_sb.jpg","pluginAppObj/pluginAppObj_47/088_sb.jpg","pluginAppObj/pluginAppObj_47/089_sb.jpg","pluginAppObj/pluginAppObj_47/090_sb.jpg","pluginAppObj/pluginAppObj_47/091_sb.jpg","pluginAppObj/pluginAppObj_47/092_sb.jpg","pluginAppObj/pluginAppObj_47/093_sb.jpg","pluginAppObj/pluginAppObj_47/094_sb.jpg","pluginAppObj/pluginAppObj_47/095_sb.jpg","pluginAppObj/pluginAppObj_47/096_sb.jpg","pluginAppObj/pluginAppObj_47/097_sb.jpg","pluginAppObj/pluginAppObj_47/098_sb.jpg","pluginAppObj/pluginAppObj_47/099_sb.jpg","pluginAppObj/pluginAppObj_47/100_sb.jpg","pluginAppObj/pluginAppObj_47/101_sb.jpg","pluginAppObj/pluginAppObj_47/102_sb.jpg","pluginAppObj/pluginAppObj_47/103_sb.jpg","pluginAppObj/pluginAppObj_47/104_sb.jpg","pluginAppObj/pluginAppObj_47/105_sb.jpg","pluginAppObj/pluginAppObj_47/106_sb.jpg","pluginAppObj/pluginAppObj_47/107_sb.jpg"],medias=[],i=0;i<images.length;i++)medias[i]={url:images[i],type:"image"};return x5engine.imShowBox({media:medias},starting_index,$(this)),!1})}function resized_pluginAppObj_47(){$("#jg_pluginAppObj_47 .grid-item").each(function(){$(this).find(".overlay-content").css({width:$(this).width(),height:$(this).height()})})}function applyFx(){loadingTimeout=setTimeout(function(){loaders[0]._render()},500)}function GridLoaderFx(el){this.el=el;this.items=$(el).find(".grid-item .item-img")}function animeComplete(anim){anim.completed&&$("#jg_pluginAppObj_47 .jg-container .grid-item img.item-img").removeClass("back-show").addClass("no-show")}var $gallery,grid="",loaders=[],loadingTimeout,effect="Montu";x5engine.boot.push(function(){grid=$("#jg_pluginAppObj_47 .jg-container");$gallery=$("#jg_pluginAppObj_47 .jg-container").justifiedGallery({rowHeight:120,margins:3,justifyThreshold:.9,captions:!1,thumbnailPath:function(currentPath,width,height,image){var origImgPath=image.dataset.origSrc,thumbH=parseInt(image.dataset.th),fullwidthH=parseInt(image.dataset.fwh),showboxH=parseInt(image.dataset.sbh);return height>thumbH?fullwidthH>showboxH&&height>showboxH||fullwidthH<showboxH&&height<fullwidthH?origImgPath.replace(/(.*)(\..*)/,"$1_fw$2"):origImgPath.replace(/(.*)(\..*)/,"$1_sb$2"):origImgPath}});$gallery.justifiedGallery().on("jg.complete",function(){resized_pluginAppObj_47()});$gallery.justifiedGallery().on("jg.resize",function(){resized_pluginAppObj_47()});if(1)x5engine.utils.onElementInViewPort($("#jg_pluginAppObj_47 .jg-container")[0],loadImage,$("#jg_pluginAppObj_47 .jg-container .grid-item .item-img:lt(1)").height()/3);else loadImage();create_showbox()});GridLoaderFx.prototype._render=function(){var animeLineDrawingOpts,animeRevealerOpts;this._resetStyles();var self=this,effectSettings=this.effects[effect],animeOpts=effectSettings.animeOpts;effectSettings.perspective!=undefined&&[].slice.call(this.items).forEach(function(item){item.parentNode.style.WebkitPerspective=item.parentNode.style.perspective=effectSettings.perspective+"px"});effectSettings.origin!=undefined&&[].slice.call(this.items).forEach(function(item){item.style.WebkitTransformOrigin=item.style.transformOrigin=effectSettings.origin});effectSettings.lineDrawing!=undefined&&([].slice.call(this.items).forEach(function(item){var svg=document.createElementNS("http://www.w3.org/2000/svg","svg"),path=document.createElementNS("http://www.w3.org/2000/svg","path"),itemW=item.offsetWidth-.1,itemH=item.offsetHeight;svg.setAttribute("width",itemW+"px");svg.setAttribute("height",itemH+"px");svg.setAttribute("viewBox","0 0 "+itemW+" "+itemH);svg.setAttribute("class","grid__deco");path.setAttribute("d","M0,0 l"+itemW+",0 0,"+itemH+" -"+itemW+",0 0,-"+itemH);path.setAttribute("stroke-dashoffset",anime.setDashoffset(path));svg.appendChild(path);item.parentNode.appendChild(svg)}),animeLineDrawingOpts=effectSettings.animeLineDrawingOpts,animeLineDrawingOpts.targets=document.querySelectorAll("#jg_pluginAppObj_47 .jg-container .grid__deco > path"),anime.remove(animeLineDrawingOpts.targets),anime(animeLineDrawingOpts));effectSettings.revealer!=undefined&&([].slice.call(this.items).forEach(function(item){var revealer=document.createElement("div");revealer.className="grid__reveal";effectSettings.revealerOrigin!=undefined&&(revealer.style.transformOrigin=effectSettings.revealerOrigin);effectSettings.revealerColor!=undefined&&(revealer.style.backgroundColor="rgba(159, 171, 176, 1)");item.parentNode.appendChild(revealer)}),animeRevealerOpts=effectSettings.animeRevealerOpts,animeRevealerOpts.targets=document.querySelectorAll("#jg_pluginAppObj_47 .jg-container .grid__reveal"),animeRevealerOpts.begin=function(obj){for(var i=0,len=obj.animatables.length;i<len;++i)obj.animatables[i].target.style.opacity=1},anime.remove(animeRevealerOpts.targets),anime(animeRevealerOpts));effectSettings.itemOverflowHidden&&[].slice.call(this.items).forEach(function(item){item.parentNode.style.overflow="hidden"});animeOpts.targets=effectSettings.sortTargetsFn&&typeof effectSettings.sortTargetsFn=="function"?[].slice.call(this.items).sort(effectSettings.sortTargetsFn):document.querySelectorAll("#jg_pluginAppObj_47 .jg-container .item-img");animeOpts.complete=animeComplete;anime.remove(animeOpts.targets);anime(animeOpts)};GridLoaderFx.prototype._resetStyles=function(){this.el.style="";this.el.style.perspective="";this.el.style.WebkitPerspective=this.el.style.perspective="none";[].slice.call(this.items).forEach(function(item){var gItem=item.parentNode,svg,revealer;item.style.opacity=0;item.style.WebkitTransformOrigin=item.style.transformOrigin="50% 50%";item.style.transform="none";svg=item.parentNode.querySelector("svg.grid__deco");svg&&gItem.removeChild(svg);revealer=item.parentNode.querySelector(".grid__reveal");revealer&&gItem.removeChild(revealer);gItem.style.overflow=""})};GridLoaderFx.prototype.effects={Hapi:{animeOpts:{duration:function(t,i){return 600+i*75},easing:"easeOutExpo",delay:function(t,i){return i*50},opacity:{value:[0,1],easing:"linear"},scale:[0,1]}},Amun:{sortTargetsFn:function(a,b){var aBounds=a.getBoundingClientRect(),bBounds=b.getBoundingClientRect();return aBounds.left-bBounds.left||aBounds.top-bBounds.top},animeOpts:{duration:function(t,i){return 500+i*50},easing:"easeOutExpo",delay:function(t,i){return i*20},opacity:{value:[0,1],duration:function(t,i){return 250+i*50},easing:"linear"},translateY:[400,0]}},Kek:{sortTargetsFn:function(a,b){return b.getBoundingClientRect().left-a.getBoundingClientRect().left},animeOpts:{duration:800,easing:[.1,1,.3,1],delay:function(t,i){return i*20},opacity:{value:[0,1],duration:600,easing:"linear"},translateX:[-500,0],rotateZ:[15,0]}},Isis:{animeOpts:{duration:900,elasticity:500,delay:function(t,i){return i*15},opacity:{value:[0,1],duration:300,easing:"linear"},translateX:function(){return[anime.random(0,1)===0?100:-100,0]},translateY:function(){return[anime.random(0,1)===0?100:-100,0]}}},Montu:{perspective:800,origin:"50% 0%",animeOpts:{duration:1500,elasticity:400,delay:function(t,i){return i*75},opacity:{value:[0,1],duration:1e3,easing:"linear"},rotateX:[-90,0]}},Osiris:{perspective:3e3,animeOpts:{duration:function(){return anime.random(500,1e3)},easing:[.2,1,.3,1],delay:function(t,i){return i*50},opacity:{value:[0,1],duration:700,easing:"linear"},translateZ:{value:[-3e3,0],duration:1e3},rotateY:["-1turns",0]}},Satet:{animeOpts:{duration:800,elasticity:600,delay:function(t,i){return i*100},opacity:{value:[0,1],duration:600,easing:"linear"},scaleX:{value:[.4,1]},scaleY:{value:[.6,1],duration:1e3}}},Atum:{sortTargetsFn:function(a,b){var docScrolls={top:document.body.scrollTop+document.documentElement.scrollTop},y1=window.innerHeight+docScrolls.top,aBounds=a.getBoundingClientRect(),ay1=aBounds.top+docScrolls.top+aBounds.height/2,bBounds=b.getBoundingClientRect(),by1=bBounds.top+docScrolls.top+bBounds.height/2;return Math.abs(y1-ay1)-Math.abs(y1-by1)},perspective:1e3,origin:"50% 0%",animeOpts:{duration:800,easing:[.1,1,.3,1],delay:function(t,i){return i*35},opacity:{value:[0,1],duration:600,easing:"linear"},translateX:[100,0],translateY:[-100,0],translateZ:[400,0],rotateZ:[10,0],rotateX:[75,0]}},Ra:{origin:"50% 0%",animeOpts:{duration:500,easing:"easeOutBack",delay:function(t,i){return i*100},opacity:{value:[0,1],easing:"linear"},translateY:[400,0],scaleY:[{value:[3,.6],delay:function(t,i){return i*100+120},duration:300,easing:"easeOutExpo"},{value:[.6,1],duration:1400,easing:"easeOutElastic"}],scaleX:[{value:[.9,1.05],delay:function(t,i){return i*100+120},duration:300,easing:"easeOutExpo"},{value:[1.05,1],duration:1400,easing:"easeOutElastic"}]}},Sobek:{animeOpts:{duration:600,easing:"easeOutExpo",delay:function(t,i){return i*100},opacity:{value:[0,1],duration:100,easing:"linear"},translateX:function(t){var docScrolls={left:document.body.scrollLeft+document.documentElement.scrollLeft},x1=window.innerWidth/2+docScrolls.left,tBounds=t.getBoundingClientRect(),x2=tBounds.left+docScrolls.left+tBounds.width/2;return[x1-x2,0]},translateY:function(t){var docScrolls={top:document.body.scrollTop+document.documentElement.scrollTop},y1=window.innerHeight+docScrolls.top,tBounds=t.getBoundingClientRect(),y2=tBounds.top+docScrolls.top+tBounds.height/2;return[y1-y2,0]},rotate:function(t){var x1=window.innerWidth/2,tBounds=t.getBoundingClientRect(),x2=tBounds.left+tBounds.width/2;return[x2<x1?90:-90,0]},scale:[0,1]}},Ptah:{itemOverflowHidden:!0,sortTargetsFn:function(a,b){return b.getBoundingClientRect().left-a.getBoundingClientRect().left},origin:"100% 0%",animeOpts:{duration:500,easing:"easeOutExpo",delay:function(t,i){return i*20},opacity:{value:[0,1],duration:400,easing:"linear"},rotateZ:[45,0]}},Bes:{revealer:!0,revealerOrigin:"100% 50%",animeRevealerOpts:{duration:800,delay:function(t,i){return i*75},easing:"easeInOutQuart",scaleX:[1,0]},animeOpts:{duration:800,easing:"easeInOutQuart",delay:function(t,i){return i*75},opacity:{value:[0,1],easing:"linear"},scale:[.8,1]}},Seker:{revealer:!0,revealerOrigin:"50% 100%",animeRevealerOpts:{duration:500,delay:function(t,i){return i*50},easing:[.7,0,.3,1],translateY:[100,0],scaleY:[1,0]},animeOpts:{duration:500,easing:[.7,0,.3,1],delay:function(t,i){return i*50},opacity:{value:[0,1],duration:400,easing:"linear"},translateY:[100,0],scale:[.8,1]}},Nut:{revealer:!0,revealerColor:"#1d1d1d",itemOverflowHidden:!0,animeRevealerOpts:{easing:"easeOutCubic",delay:function(t,i){return i*100},translateX:[{value:["101%","0%"],duration:400},{value:["0%","-101%"],duration:400}]},animeOpts:{duration:900,easing:"easeOutCubic",delay:function(t,i){return 400+i*100},opacity:{value:1,duration:1,easing:"linear"},scale:[.8,1]}},Shu:{lineDrawing:!0,animeLineDrawingOpts:{duration:800,delay:function(t,i){return i*150},easing:"easeInOutSine",strokeDashoffset:[anime.setDashoffset,0],opacity:[{value:[0,1]},{value:[1,0],duration:200,easing:"linear",delay:500}]},animeOpts:{duration:800,easing:[.2,1,.3,1],delay:function(t,i){return i*150+800},opacity:{value:[0,1],easing:"linear"},scale:[.5,1]}}}}