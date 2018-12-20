// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('portfolio_cljs.project_views');
goog.require('cljs.core');
goog.require('cljs.core.constants');
portfolio_cljs.project_views.ipsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
portfolio_cljs.project_views.rand_hero_src = (function portfolio_cljs$project_views$rand_hero_src(){
return ["https://picsum.photos/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((0.66 * screen.width) - Math.floor(((30) * Math.random())))),"/?random"].join('');
});
portfolio_cljs.project_views.rand_supplement_image = (function portfolio_cljs$project_views$rand_supplement_image(){
return ["https://picsum.photos/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((0.2 * screen.width) - Math.floor(((30) * Math.random())))),"/?random"].join('');
});
portfolio_cljs.project_views.video_hero = (function portfolio_cljs$project_views$video_hero(url){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$padding,"50% 0 0 0",cljs.core.cst$kw$position,"relative"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$iframe,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,url,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$height,"100%",cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$top,"0",cljs.core.cst$kw$left,"0",cljs.core.cst$kw$frameborder,"0",cljs.core.cst$kw$webkitallowfullscreen,"true",cljs.core.cst$kw$mozallowfullscreen,"true"], null)], null)], null)], null);
});
portfolio_cljs.project_views.cell = (function portfolio_cljs$project_views$cell(url){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img$preview$lazy,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,url,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$flex,(0),cljs.core.cst$kw$height,"100%",cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$layout,"fill",cljs.core.cst$kw$object_DASH_fit,"cover"], null)], null)], null);
});
portfolio_cljs.project_views.other_media_grid = (function portfolio_cljs$project_views$other_media_grid(num_coll,path_list){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$columns$is_DASH_multiline,(function (){var iter__4324__auto__ = (function portfolio_cljs$project_views$other_media_grid_$_iter__24055(s__24056){
return (new cljs.core.LazySeq(null,(function (){
var s__24056__$1 = s__24056;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__24056__$1);
if(temp__5457__auto__){
var s__24056__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__24056__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__24056__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__24058 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__24057 = (0);
while(true){
if((i__24057 < size__4323__auto__)){
var path = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__24057);
cljs.core.chunk_append(b__24058,(function (){var G__24059 = num_coll;
switch (G__24059) {
case (5):
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$column$is_DASH_one_DASH_third$progressive,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$justify_DASH_content,"center",cljs.core.cst$kw$overflow,"hidden",cljs.core.cst$kw$align_DASH_items,"center"], null)], null),portfolio_cljs.project_views.cell(path)], null);

break;
case (4):
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$column$is_DASH_one_DASH_quarter$progressive,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$justify_DASH_content,"center",cljs.core.cst$kw$overflow,"hidden",cljs.core.cst$kw$align_DASH_items,"center"], null)], null),portfolio_cljs.project_views.cell(path)], null);

break;
case (3):
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$column$is_DASH_one_DASH_third$progressive,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$justify_DASH_content,"center",cljs.core.cst$kw$overflow,"hidden",cljs.core.cst$kw$align_DASH_items,"center"], null)], null),portfolio_cljs.project_views.cell(path)], null);

break;
case (2):
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$column$is_DASH_half$progressive,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$justify_DASH_content,"center",cljs.core.cst$kw$overflow,"hidden",cljs.core.cst$kw$align_DASH_items,"center"], null)], null),portfolio_cljs.project_views.cell(path)], null);

break;
case (1):
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$column$progressive,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$justify_DASH_content,"center",cljs.core.cst$kw$overflow,"hidden",cljs.core.cst$kw$align_DASH_items,"center"], null)], null),portfolio_cljs.project_views.cell(path)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24059)].join('')));

}
})());

var G__24062 = (i__24057 + (1));
i__24057 = G__24062;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24058),portfolio_cljs$project_views$other_media_grid_$_iter__24055(cljs.core.chunk_rest(s__24056__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24058),null);
}
} else {
var path = cljs.core.first(s__24056__$2);
return cljs.core.cons((function (){var G__24060 = num_coll;
switch (G__24060) {
case (5):
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$column$is_DASH_one_DASH_third$progressive,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$justify_DASH_content,"center",cljs.core.cst$kw$overflow,"hidden",cljs.core.cst$kw$align_DASH_items,"center"], null)], null),portfolio_cljs.project_views.cell(path)], null);

break;
case (4):
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$column$is_DASH_one_DASH_quarter$progressive,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$justify_DASH_content,"center",cljs.core.cst$kw$overflow,"hidden",cljs.core.cst$kw$align_DASH_items,"center"], null)], null),portfolio_cljs.project_views.cell(path)], null);

break;
case (3):
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$column$is_DASH_one_DASH_third$progressive,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$justify_DASH_content,"center",cljs.core.cst$kw$overflow,"hidden",cljs.core.cst$kw$align_DASH_items,"center"], null)], null),portfolio_cljs.project_views.cell(path)], null);

break;
case (2):
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$column$is_DASH_half$progressive,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$justify_DASH_content,"center",cljs.core.cst$kw$overflow,"hidden",cljs.core.cst$kw$align_DASH_items,"center"], null)], null),portfolio_cljs.project_views.cell(path)], null);

break;
case (1):
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$column$progressive,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$justify_DASH_content,"center",cljs.core.cst$kw$overflow,"hidden",cljs.core.cst$kw$align_DASH_items,"center"], null)], null),portfolio_cljs.project_views.cell(path)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24060)].join('')));

}
})(),portfolio_cljs$project_views$other_media_grid_$_iter__24055(cljs.core.rest(s__24056__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(path_list);
})()], null);
});
portfolio_cljs.project_views.other_media = (function portfolio_cljs$project_views$other_media(path_list){
var len = cljs.core.count(path_list);
var mod_five = cljs.core.mod(len,(5));
var G__24064 = mod_five;
switch (G__24064) {
case (0):
return portfolio_cljs.project_views.other_media_grid((5),path_list);

break;
case (4):
return portfolio_cljs.project_views.other_media_grid((4),path_list);

break;
case (3):
return portfolio_cljs.project_views.other_media_grid((3),path_list);

break;
case (2):
return portfolio_cljs.project_views.other_media_grid((2),path_list);

break;
default:
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["other"], 0));

}
});
portfolio_cljs.project_views.other_media_placeholder = (function portfolio_cljs$project_views$other_media_placeholder(path_range){
var iter__4324__auto__ = (function portfolio_cljs$project_views$other_media_placeholder_$_iter__24066(s__24067){
return (new cljs.core.LazySeq(null,(function (){
var s__24067__$1 = s__24067;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__24067__$1);
if(temp__5457__auto__){
var s__24067__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__24067__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__24067__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__24069 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__24068 = (0);
while(true){
if((i__24068 < size__4323__auto__)){
var path = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__24068);
cljs.core.chunk_append(b__24069,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,portfolio_cljs.project_views.rand_supplement_image()], null)], null));

var G__24070 = (i__24068 + (1));
i__24068 = G__24070;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24069),portfolio_cljs$project_views$other_media_placeholder_$_iter__24066(cljs.core.chunk_rest(s__24067__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24069),null);
}
} else {
var path = cljs.core.first(s__24067__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,portfolio_cljs.project_views.rand_supplement_image()], null)], null),portfolio_cljs$project_views$other_media_placeholder_$_iter__24066(cljs.core.rest(s__24067__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(path_range);
});
portfolio_cljs.project_views.projects = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$phillytron,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$title,"Phillytron",cljs.core.cst$kw$subtitle,"Showcasing Indie Game Development in Philadelphia",cljs.core.cst$kw$hero,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$video,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$padding,"50% 0 0 0",cljs.core.cst$kw$width,"50%",cljs.core.cst$kw$controls,"true"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$source,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,"../assets/images/phillytron.mp4",cljs.core.cst$kw$type,"video/mp4"], null)], null)], null),cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"This project was done in collaboration with ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,"http://www.phillygamemechanics.com/",cljs.core.cst$kw$target,"_blank"], null),"Philly Game Mechanics"], null),", a non-profit organization in Philadelphia that leads and organizes indie game development events like game jams, talks, and workshops. The Phillytron is an arcade cabinet that showcases published games from local studios in Philly as well as past game jam winners."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"The Phillytron has been featured at The Franklin Institute, MAGFest, PAX East, and is scheduled to show at other various gaming festivals, conventions, and expos in the Northeast US."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Role: HLSL Shader programming for intro animation and menu background"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"In collaboration with: Steve Petit (Technical Lead), Marina Romero (Cabinet Art), Jake O'Bien (Producer)"], null)], null),cljs.core.cst$kw$supplement_DASH_media,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["../assets/images/phillytron1.png","../assets/images/phillytron2.jpg","../assets/images/phillytron3.png"], null)], null),cljs.core.cst$kw$mgm,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$title,"Magical Girl Mecha",cljs.core.cst$kw$subtitle,"A cooperative, anime-inspired space adventure",cljs.core.cst$kw$hero,portfolio_cljs.project_views.video_hero("https://player.vimeo.com/video/245480772"),cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"This project was an assignment for ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,"https://new-arcade.tumblr.com/",cljs.core.cst$kw$target,"_blank"], null),"New Arcade"], null),", a class focused on making unconventional controllers for video games. For this project, we tried to make a game centered around flying a magical robot with a friend through custom motion controls."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Role: OpenCV programming and OSC protocol"], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"In collaboration with: ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,"https://sydneyadamsdesigns.com/",cljs.core.cst$kw$target,"_blank"], null),"Sydney Adams"], null)," (Design Lead), ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,"https://sites.google.com/site/taeyonii/",cljs.core.cst$kw$target,"_blank"], null),"Taeyeon Kim"], null)," (Art Assets), and ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,"https://www.jung3.com/",cljs.core.cst$kw$target,"_blank"], null),"Seungho Jung"], null)," (Unity Programming)"], null)], null),cljs.core.cst$kw$supplement_DASH_media,cljs.core.PersistentVector.EMPTY], null),cljs.core.cst$kw$talktolight,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$title,"Talk to Light",cljs.core.cst$kw$subtitle,"A light beam you can talk to",cljs.core.cst$kw$hero,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,"https://redpaperheart.com/work/talktolight",cljs.core.cst$kw$target,"_blank"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,"https://redpaperheart.com/media/work/talktolight/google_talktolight_sxsw_hero-1920.jpg"], null)], null)], null),cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"This project was done while I was interning at ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,"https://redpaperheart.com/work/talktolight",cljs.core.cst$kw$target,"_blank"], null),"Red Paper Heart"], null),". We teamed up with some friends at Google to design an open source art installation that would showcase the potential of the technology from Red Paper Heart\u2019s unique point of view and inspire developers and makers everywhere to build things using Custom Device Actions."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Role: Code Intern"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"In collaboration with: Zander Brimijoin (Creative Director), Daniel Scheibel (Technology Director), Lisa Walters (Senior Producer), Pedro Piccinini (Art Director), Greg Schomburg (Creative Coder), Shuvashis Das (Creative Coder), Adri\u00E0 Navarro L\u00F3pez (Creative Coder), Ji Young Chun (Code Intern)"], null)], null),cljs.core.cst$kw$supplement_DASH_media,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["https://redpaperheart.com/media/work/talktolight/google_talktolight_sxsw_01-1440.jpg","https://redpaperheart.com/media/work/talktolight/google_talktolight_02-1440.jpg","https://redpaperheart.com/media/work/talktolight/google_talktolight_sxsw_05-1440.jpg"], null)], null),cljs.core.cst$kw$buttons,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$title,"Push My Buttons",cljs.core.cst$kw$subtitle,"A competitive take on whack-a-mole",cljs.core.cst$kw$hero,portfolio_cljs.project_views.video_hero("https://www.youtube.com/embed/lwRe1kuQjys"),cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"This project was an assignment for ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,"https://new-arcade.tumblr.com/",cljs.core.cst$kw$target,"_blank"], null),"New Arcade"], null),", a class focused on making unconventional controllers for video games. For this project, our primary constraint was to not use a screen."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Role: Arduino Programming and Game Design"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"In collaboration with: Kabeer (Soldering and Game Design) and Tushal (Fabrication and Game Design)"], null)], null),cljs.core.cst$kw$supplement_DASH_media,cljs.core.PersistentVector.EMPTY], null),cljs.core.cst$kw$voyage,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$title,"Voyage",cljs.core.cst$kw$subtitle,"A Newtonian Physics-based Puzzle Game",cljs.core.cst$kw$hero,portfolio_cljs.project_views.video_hero("https://player.vimeo.com/video/197938614"),cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"This game uses the Newtownian model of gravitation and physics as a puzzle mechanic. The objective is to steer your ship over to the red square while being pulled around by the gravitational forces of nearby planetoids."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Final Project for ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,"https://github.com/reginaflores/AlgoSims2016",cljs.core.cst$kw$target,"_blank"], null),"Algorithmic Simulations"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Made with ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,"https://openframeworks.cc/",cljs.core.cst$kw$target,"_blank"], null),"openFrameworks"], null)], null)], null),cljs.core.cst$kw$supplement_DASH_media,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["../assets/images/voyage_2.png","../assets/images/voyage_3.png"], null)], null),cljs.core.cst$kw$tide,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$title,"Tide",cljs.core.cst$kw$subtitle,"A Sybiotic Adventure",cljs.core.cst$kw$hero,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$iframe,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$width,"80%",cljs.core.cst$kw$height,"500px",cljs.core.cst$kw$scrolling,"no",cljs.core.cst$kw$frameborder,"no",cljs.core.cst$kw$src,"./tide/tide.html"], null)], null),cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"This was made as an entry in a game jam focused on 'asymmetrical co-op mechanics'. Each players controll a different fish. The larger orange fish can eat the small red fish, and the smaller blue fish needs to avoid the red fish while so it may eat all of the moss."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Player 1: W,A,S,D"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Player 2: UP, DOWN, LEFT, RIGHT"], null)], null),cljs.core.cst$kw$supplement_DASH_media,cljs.core.PersistentVector.EMPTY], null),cljs.core.cst$kw$ha,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$title,"Hertzian Aegis",cljs.core.cst$kw$subtitle,"A love letter to Design Noir",cljs.core.cst$kw$hero,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,"../assets/images/HA_7288(edit).jpg"], null)], null),cljs.core.cst$kw$description,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"For my senior capstone, I focused on on the qualia concerning electro-magnetic fields. Although we come in contact with EMFs several times a day, we don't give them much thought because we cannot perceive them."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"In my senior fall semester, I made a prototype wearable that used a jumper wire as a sensor. The prototype itself only proved to be a capacitive sensor, but it helped me get used to using the Lilypad microcontroller as the conduit of my design. In the spring, I reverse-engineered an existing EMF sensor to have a qualitative output and mapped that output onto a coat."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"By letting the user visualize electro-magnetic radiation, this wearable technology helps to better understand the hidden nature of electronic objects."], null)], null),cljs.core.cst$kw$supplement_DASH_media,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["../assets/images/HA_7269.jpg","../assets/images/HA_7270.jpg"], null)], null)], null);
portfolio_cljs.project_views.body = (function portfolio_cljs$project_views$body(state){
var project = (function (){var fexpr__24072 = (function (){var G__24073 = cljs.core.cst$kw$project;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__24073) : state.call(null,G__24073));
})();
return (fexpr__24072.cljs$core$IFn$_invoke$arity$1 ? fexpr__24072.cljs$core$IFn$_invoke$arity$1(portfolio_cljs.project_views.projects) : fexpr__24072.call(null,portfolio_cljs.project_views.projects));
})();
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$section$section,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1$title,(function (){var G__24074 = cljs.core.cst$kw$title;
return (project.cljs$core$IFn$_invoke$arity$1 ? project.cljs$core$IFn$_invoke$arity$1(G__24074) : project.call(null,G__24074));
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2$subtitle,(function (){var G__24075 = cljs.core.cst$kw$subtitle;
return (project.cljs$core$IFn$_invoke$arity$1 ? project.cljs$core$IFn$_invoke$arity$1(G__24075) : project.call(null,G__24075));
})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$section$hero,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$hero_DASH_body,(function (){var G__24076 = cljs.core.cst$kw$hero;
return (project.cljs$core$IFn$_invoke$arity$1 ? project.cljs$core$IFn$_invoke$arity$1(G__24076) : project.call(null,G__24076));
})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$section$section,(function (){var G__24077 = cljs.core.cst$kw$description;
return (project.cljs$core$IFn$_invoke$arity$1 ? project.cljs$core$IFn$_invoke$arity$1(G__24077) : project.call(null,G__24077));
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$section$section,portfolio_cljs.project_views.other_media((function (){var G__24078 = cljs.core.cst$kw$supplement_DASH_media;
return (project.cljs$core$IFn$_invoke$arity$1 ? project.cljs$core$IFn$_invoke$arity$1(G__24078) : project.call(null,G__24078));
})())], null)], null);
});
