// Compiled by ClojureScript 1.10.339 {}
goog.provide('portfolio_cljs.project_views');
goog.require('cljs.core');
portfolio_cljs.project_views.ipsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
portfolio_cljs.project_views.rand_hero_src = (function portfolio_cljs$project_views$rand_hero_src(){
return ["https://picsum.photos/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((0.66 * screen.width) - Math.floor(((30) * Math.random())))),"/?random"].join('');
});
portfolio_cljs.project_views.rand_supplement_image = (function portfolio_cljs$project_views$rand_supplement_image(){
return ["https://picsum.photos/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((0.2 * screen.width) - Math.floor(((30) * Math.random())))),"/?random"].join('');
});
portfolio_cljs.project_views.video_hero = (function portfolio_cljs$project_views$video_hero(url){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),"50% 0 0 0",new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"iframe","iframe",884422026),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),url,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"top","top",-1856271961),"0",new cljs.core.Keyword(null,"left","left",-399115937),"0",new cljs.core.Keyword(null,"frameborder","frameborder",-7707960),"0",new cljs.core.Keyword(null,"webkitallowfullscreen","webkitallowfullscreen",-1881481794),"true",new cljs.core.Keyword(null,"mozallowfullscreen","mozallowfullscreen",1744382028),"true"], null)], null)], null)], null);
});
portfolio_cljs.project_views.cell = (function portfolio_cljs$project_views$cell(url){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.preview.lazy","img.preview.lazy",-494991881),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),url,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(0),new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"layout","layout",-2120940921),"fill",new cljs.core.Keyword(null,"object-fit","object-fit",-429593694),"cover"], null)], null)], null);
});
portfolio_cljs.project_views.other_media_grid = (function portfolio_cljs$project_views$other_media_grid(num_coll,path_list){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.columns.is-multiline","div.columns.is-multiline",1186870509),(function (){var iter__4324__auto__ = (function portfolio_cljs$project_views$other_media_grid_$_iter__49041(s__49042){
return (new cljs.core.LazySeq(null,(function (){
var s__49042__$1 = s__49042;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__49042__$1);
if(temp__5457__auto__){
var s__49042__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__49042__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__49042__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__49044 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__49043 = (0);
while(true){
if((i__49043 < size__4323__auto__)){
var path = cljs.core._nth.call(null,c__4322__auto__,i__49043);
cljs.core.chunk_append.call(null,b__49044,(function (){var G__49045 = num_coll;
switch (G__49045) {
case (5):
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column.is-one-third.progressive","div.column.is-one-third.progressive",248011417),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null)], null),portfolio_cljs.project_views.cell.call(null,path)], null);

break;
case (4):
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column.is-one-quarter.progressive","div.column.is-one-quarter.progressive",2054389587),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null)], null),portfolio_cljs.project_views.cell.call(null,path)], null);

break;
case (3):
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column.is-one-third.progressive","div.column.is-one-third.progressive",248011417),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null)], null),portfolio_cljs.project_views.cell.call(null,path)], null);

break;
case (2):
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column.is-half.progressive","div.column.is-half.progressive",2057767313),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null)], null),portfolio_cljs.project_views.cell.call(null,path)], null);

break;
case (1):
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column.progressive","div.column.progressive",-435804023),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null)], null),portfolio_cljs.project_views.cell.call(null,path)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49045)].join('')));

}
})());

var G__49048 = (i__49043 + (1));
i__49043 = G__49048;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49044),portfolio_cljs$project_views$other_media_grid_$_iter__49041.call(null,cljs.core.chunk_rest.call(null,s__49042__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49044),null);
}
} else {
var path = cljs.core.first.call(null,s__49042__$2);
return cljs.core.cons.call(null,(function (){var G__49046 = num_coll;
switch (G__49046) {
case (5):
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column.is-one-third.progressive","div.column.is-one-third.progressive",248011417),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null)], null),portfolio_cljs.project_views.cell.call(null,path)], null);

break;
case (4):
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column.is-one-quarter.progressive","div.column.is-one-quarter.progressive",2054389587),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null)], null),portfolio_cljs.project_views.cell.call(null,path)], null);

break;
case (3):
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column.is-one-third.progressive","div.column.is-one-third.progressive",248011417),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null)], null),portfolio_cljs.project_views.cell.call(null,path)], null);

break;
case (2):
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column.is-half.progressive","div.column.is-half.progressive",2057767313),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null)], null),portfolio_cljs.project_views.cell.call(null,path)], null);

break;
case (1):
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column.progressive","div.column.progressive",-435804023),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null)], null),portfolio_cljs.project_views.cell.call(null,path)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49046)].join('')));

}
})(),portfolio_cljs$project_views$other_media_grid_$_iter__49041.call(null,cljs.core.rest.call(null,s__49042__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,path_list);
})()], null);
});
portfolio_cljs.project_views.other_media = (function portfolio_cljs$project_views$other_media(path_list){
var len = cljs.core.count.call(null,path_list);
var mod_five = cljs.core.mod.call(null,len,(5));
var G__49050 = mod_five;
switch (G__49050) {
case (0):
return portfolio_cljs.project_views.other_media_grid.call(null,(5),path_list);

break;
case (4):
return portfolio_cljs.project_views.other_media_grid.call(null,(4),path_list);

break;
case (3):
return portfolio_cljs.project_views.other_media_grid.call(null,(3),path_list);

break;
case (2):
return portfolio_cljs.project_views.other_media_grid.call(null,(2),path_list);

break;
default:
return cljs.core.print.call(null,"other");

}
});
portfolio_cljs.project_views.other_media_placeholder = (function portfolio_cljs$project_views$other_media_placeholder(path_range){
var iter__4324__auto__ = (function portfolio_cljs$project_views$other_media_placeholder_$_iter__49052(s__49053){
return (new cljs.core.LazySeq(null,(function (){
var s__49053__$1 = s__49053;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__49053__$1);
if(temp__5457__auto__){
var s__49053__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__49053__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__49053__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__49055 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__49054 = (0);
while(true){
if((i__49054 < size__4323__auto__)){
var path = cljs.core._nth.call(null,c__4322__auto__,i__49054);
cljs.core.chunk_append.call(null,b__49055,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),portfolio_cljs.project_views.rand_supplement_image.call(null)], null)], null));

var G__49056 = (i__49054 + (1));
i__49054 = G__49056;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49055),portfolio_cljs$project_views$other_media_placeholder_$_iter__49052.call(null,cljs.core.chunk_rest.call(null,s__49053__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49055),null);
}
} else {
var path = cljs.core.first.call(null,s__49053__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),portfolio_cljs.project_views.rand_supplement_image.call(null)], null)], null),portfolio_cljs$project_views$other_media_placeholder_$_iter__49052.call(null,cljs.core.rest.call(null,s__49053__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,path_range);
});
portfolio_cljs.project_views.projects = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"phillytron","phillytron",285639437),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"title","title",636505583),"Phillytron",new cljs.core.Keyword(null,"subtitle","subtitle",-1614524363),"Showcasing Indie Game Development in Philadelphia",new cljs.core.Keyword(null,"hero","hero",1983137057),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"video","video",156888130),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding","padding",1660304693),"50% 0 0 0",new cljs.core.Keyword(null,"width","width",-384071477),"50%",new cljs.core.Keyword(null,"controls","controls",1340701452),"true"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"../assets/images/phillytron.mp4",new cljs.core.Keyword(null,"type","type",1174270348),"video/mp4"], null)], null)], null),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"This project was done in collaboration with ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"http://www.phillygamemechanics.com/",new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),"Philly Game Mechanics"], null),", a non-profit organization in Philadelphia that leads and organizes indie game development events like game jams, talks, and workshops. The Phillytron is an arcade cabinet that showcases published games from local studios in Philly as well as past game jam winners."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"The Phillytron has been featured at The Franklin Institute, MAGFest, PAX East, and is scheduled to show at other various gaming festivals, conventions, and expos in the Northeast US."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Role: HLSL Shader programming for intro animation and menu background"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"In collaboration with: Steve Petit (Technical Lead), Marina Romero (Cabinet Art), Jake O'Bien (Producer)"], null)], null),new cljs.core.Keyword(null,"supplement-media","supplement-media",858093218),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["../assets/images/phillytron1.png","../assets/images/phillytron2.jpg","../assets/images/phillytron3.png"], null)], null),new cljs.core.Keyword(null,"mgm","mgm",154196611),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"title","title",636505583),"Magical Girl Mecha",new cljs.core.Keyword(null,"subtitle","subtitle",-1614524363),"A cooperative, anime-inspired space adventure",new cljs.core.Keyword(null,"hero","hero",1983137057),portfolio_cljs.project_views.video_hero.call(null,"https://player.vimeo.com/video/245480772"),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"This project was an assignment for New Arcade, a class focused on making unconventional controllers for video games. For this project, we tried to make a game centered around flying a magical robot with a friend through custom motion controls."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Role: OpenCV programming and OSC protocol"], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"In collaboration with: ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"https://sydneyadamsdesigns.com/",new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),"Sydney Adams"], null)," (Design Lead), ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"https://sites.google.com/site/taeyonii/",new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),"Taeyeon Kim"], null)," (Art Assets), and ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"https://www.jung3.com/",new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),"Seungho Jung"], null)," (Unity Programming)"], null)], null),new cljs.core.Keyword(null,"supplement-media","supplement-media",858093218),cljs.core.PersistentVector.EMPTY], null),new cljs.core.Keyword(null,"talktolight","talktolight",-99623242),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"title","title",636505583),"Talk to Light",new cljs.core.Keyword(null,"subtitle","subtitle",-1614524363),"A light beam you can talk to",new cljs.core.Keyword(null,"hero","hero",1983137057),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"https://redpaperheart.com/work/talktolight",new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"https://redpaperheart.com/media/work/talktolight/google_talktolight_sxsw_hero-1920.jpg"], null)], null)], null),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"This project was done while I was interning at ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"https://redpaperheart.com/work/talktolight",new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),"Red Paper Heart"], null),". We teamed up with some friends at Google to design an open source art installation that would showcase the potential of the technology from Red Paper Heart\u2019s unique point of view and inspire developers and makers everywhere to build things using Custom Device Actions."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Role: Code Intern"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"In collaboration with: Zander Brimijoin (Creative Director), Daniel Scheibel (Technology Director), Lisa Walters (Senior Producer), Pedro Piccinini (Art Director), Greg Schomburg (Creative Coder), Shuvashis Das (Creative Coder), Adri\u00E0 Navarro L\u00F3pez (Creative Coder), Ji Young Chun (Code Intern)"], null)], null),new cljs.core.Keyword(null,"supplement-media","supplement-media",858093218),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["https://redpaperheart.com/media/work/talktolight/google_talktolight_sxsw_01-1440.jpg","https://redpaperheart.com/media/work/talktolight/google_talktolight_02-1440.jpg","https://redpaperheart.com/media/work/talktolight/google_talktolight_sxsw_05-1440.jpg"], null)], null),new cljs.core.Keyword(null,"buttons","buttons",-1953831197),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"title","title",636505583),"Push My Buttons",new cljs.core.Keyword(null,"subtitle","subtitle",-1614524363),"A competitive take on whack-a-mole",new cljs.core.Keyword(null,"hero","hero",1983137057),portfolio_cljs.project_views.video_hero.call(null,"https://www.youtube.com/embed/lwRe1kuQjys"),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"This project was an assignment for New Arcade, a class focused on making unconventional controllers for video games. For this project, our primary constraint was to not use a screen."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Role: Arduino Programming and Game Design"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"In collaboration with: Kabeer (Soldering and Game Design) and Tushal (Fabrication and Game Design)"], null)], null),new cljs.core.Keyword(null,"supplement-media","supplement-media",858093218),cljs.core.PersistentVector.EMPTY], null),new cljs.core.Keyword(null,"voyage","voyage",1069567070),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"title","title",636505583),"Voyage",new cljs.core.Keyword(null,"subtitle","subtitle",-1614524363),"A Newtonian Physics-based Puzzle Game",new cljs.core.Keyword(null,"hero","hero",1983137057),portfolio_cljs.project_views.video_hero.call(null,"https://player.vimeo.com/video/197938614"),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"This game uses the Newtownian model of gravitation and physics as a puzzle mechanic. The objective is to steer your ship over to the red square while being pulled around by the gravitational forces of nearby planetoids."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Final Project for Algorithmic Simulations"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Made with openFrameworks"], null)], null),new cljs.core.Keyword(null,"supplement-media","supplement-media",858093218),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["../assets/images/voyage_2.png","../assets/images/voyage_3.png"], null)], null),new cljs.core.Keyword(null,"tide","tide",-1254840243),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"title","title",636505583),"Tide",new cljs.core.Keyword(null,"subtitle","subtitle",-1614524363),"A Sybiotic Adventure",new cljs.core.Keyword(null,"hero","hero",1983137057),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"../assets/images/tide.gif"], null)], null),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Player 1: W,A,S,D"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Player 2: UP, DOWN, LEFT, RIGHT"], null)], null),new cljs.core.Keyword(null,"supplement-media","supplement-media",858093218),cljs.core.PersistentVector.EMPTY], null),new cljs.core.Keyword(null,"ha","ha",7999328),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"title","title",636505583),"Hertzian Aegis",new cljs.core.Keyword(null,"subtitle","subtitle",-1614524363),"A love letter to Design Noir",new cljs.core.Keyword(null,"hero","hero",1983137057),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"../assets/images/HA_7288(edit).jpg"], null)], null),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"For my senior capstone, I focused on on the qualia concerning electro-magnetic fields. Although we come in contact with EMFs several times a day, we don't give them much thought because we cannot perceive them."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"In my senior fall semester, I made a prototype wearable that used a jumper wire as a sensor. The prototype itself only proved to be a capacitive sensor, but it helped me get used to using the Lilypad microcontroller as the conduit of my design. In the spring, I reverse-engineered an existing EMF sensor to have a qualitative output and mapped that output onto a coat."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"By letting the user visualize electro-magnetic radiation, this wearable technology helps to better understand the hidden nature of electronic objects."], null)], null),new cljs.core.Keyword(null,"supplement-media","supplement-media",858093218),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["../assets/images/HA_7269.jpg","../assets/images/HA_7270.jpg"], null)], null)], null);
portfolio_cljs.project_views.body = (function portfolio_cljs$project_views$body(state){
var project = state.call(null,new cljs.core.Keyword(null,"project","project",1124394579)).call(null,portfolio_cljs.project_views.projects);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.section","section.section",-416807119),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.title","h1.title",-2139952071),project.call(null,new cljs.core.Keyword(null,"title","title",636505583))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.subtitle","h2.subtitle",-1180086880),project.call(null,new cljs.core.Keyword(null,"subtitle","subtitle",-1614524363))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.hero","section.hero",-1165645886),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.hero-body","div.hero-body",1231318527),project.call(null,new cljs.core.Keyword(null,"hero","hero",1983137057))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.section","section.section",-416807119),project.call(null,new cljs.core.Keyword(null,"description","description",-1428560544))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.section","section.section",-416807119),portfolio_cljs.project_views.other_media.call(null,project.call(null,new cljs.core.Keyword(null,"supplement-media","supplement-media",858093218)))], null)], null);
});

//# sourceMappingURL=project_views.js.map?rel=1545318909147
