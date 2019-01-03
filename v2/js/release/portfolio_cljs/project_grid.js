// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('portfolio_cljs.project_grid');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
portfolio_cljs.project_grid.placeholder_link = (function portfolio_cljs$project_grid$placeholder_link(size){
return ["https://picsum.photos/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"/?random"].join('');
});
portfolio_cljs.project_grid.project_links = new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$phillytron,"./assets/images/phillytron.jpg",cljs.core.cst$kw$mgm,"./assets/images/magic-mecha2.jpg",cljs.core.cst$kw$talktolight,"https://redpaperheart.com/media/work/talktolight/google_talktolight_sxsw_hero-1920.jpg",cljs.core.cst$kw$buttons,"./assets/images/buttons-small.png",cljs.core.cst$kw$voyage,"./assets/images/voyage_1.gif",cljs.core.cst$kw$tide,"./assets/images/tide.gif",cljs.core.cst$kw$ha,"./assets/images/HA_7288(edit).jpg",cljs.core.cst$kw$thesis,"./assets/images/thesis-screenshot.png"], null);
portfolio_cljs.project_grid.scroll_to_top = (function portfolio_cljs$project_grid$scroll_to_top(){
return window.scrollTo((0),(0),"smooth");
});
portfolio_cljs.project_grid.cell = (function portfolio_cljs$project_grid$cell(var_args){
var args__4534__auto__ = [];
var len__4531__auto___24045 = arguments.length;
var i__4532__auto___24046 = (0);
while(true){
if((i__4532__auto___24046 < len__4531__auto___24045)){
args__4534__auto__.push((arguments[i__4532__auto___24046]));

var G__24047 = (i__4532__auto___24046 + (1));
i__4532__auto___24046 = G__24047;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return portfolio_cljs.project_grid.cell.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

portfolio_cljs.project_grid.cell.cljs$core$IFn$_invoke$arity$variadic = (function (project,state,p__24041){
var vec__24042 = p__24041;
var link = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24042,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$column$is_DASH_one_DASH_third$progressive,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$justify_DASH_content,"center",cljs.core.cst$kw$overflow,"hidden",cljs.core.cst$kw$align_DASH_items,"center"], null),cljs.core.cst$kw$on_DASH_click,((function (vec__24042,link){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$page,"Projects");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$project,project);

portfolio_cljs.project_grid.scroll_to_top();

return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([state], 0));
});})(vec__24042,link))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img$preview$lazy,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,(project.cljs$core$IFn$_invoke$arity$1 ? project.cljs$core$IFn$_invoke$arity$1(portfolio_cljs.project_grid.project_links) : project.call(null,portfolio_cljs.project_grid.project_links)),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$flex,(0),cljs.core.cst$kw$height,"100%",cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$layout,"fill",cljs.core.cst$kw$opacity,0.66,cljs.core.cst$kw$object_DASH_fit,"cover"], null)], null)], null)], null);
});

portfolio_cljs.project_grid.cell.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
portfolio_cljs.project_grid.cell.cljs$lang$applyTo = (function (seq24038){
var G__24039 = cljs.core.first(seq24038);
var seq24038__$1 = cljs.core.next(seq24038);
var G__24040 = cljs.core.first(seq24038__$1);
var seq24038__$2 = cljs.core.next(seq24038__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24039,G__24040,seq24038__$2);
});

portfolio_cljs.project_grid.cell_grid = (function portfolio_cljs$project_grid$cell_grid(state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$section$section,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$columns$is_DASH_multiline,(function (){var iter__4324__auto__ = (function portfolio_cljs$project_grid$cell_grid_$_iter__24048(s__24049){
return (new cljs.core.LazySeq(null,(function (){
var s__24049__$1 = s__24049;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__24049__$1);
if(temp__5457__auto__){
var s__24049__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__24049__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__24049__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__24051 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__24050 = (0);
while(true){
if((i__24050 < size__4323__auto__)){
var project = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__24050);
cljs.core.chunk_append(b__24051,portfolio_cljs.project_grid.cell(project,state));

var G__24052 = (i__24050 + (1));
i__24050 = G__24052;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24051),portfolio_cljs$project_grid$cell_grid_$_iter__24048(cljs.core.chunk_rest(s__24049__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24051),null);
}
} else {
var project = cljs.core.first(s__24049__$2);
return cljs.core.cons(portfolio_cljs.project_grid.cell(project,state),portfolio_cljs$project_grid$cell_grid_$_iter__24048(cljs.core.rest(s__24049__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(cljs.core.keys(cljs.core.shuffle(portfolio_cljs.project_grid.project_links)));
})()], null)], null);
});
portfolio_cljs.project_grid.cell_grid_placeholder = (function portfolio_cljs$project_grid$cell_grid_placeholder(num_cells,state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$section$section,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$columns$is_DASH_multiline,(function (){var iter__4324__auto__ = (function portfolio_cljs$project_grid$cell_grid_placeholder_$_iter__24053(s__24054){
return (new cljs.core.LazySeq(null,(function (){
var s__24054__$1 = s__24054;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__24054__$1);
if(temp__5457__auto__){
var s__24054__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__24054__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__24054__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__24056 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__24055 = (0);
while(true){
if((i__24055 < size__4323__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__24055);
cljs.core.chunk_append(b__24056,portfolio_cljs.project_grid.cell(portfolio_cljs.project_grid.placeholder_link(((screen.width / (6)) - Math.floor(((30) * Math.random())))),state));

var G__24057 = (i__24055 + (1));
i__24055 = G__24057;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24056),portfolio_cljs$project_grid$cell_grid_placeholder_$_iter__24053(cljs.core.chunk_rest(s__24054__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24056),null);
}
} else {
var x = cljs.core.first(s__24054__$2);
return cljs.core.cons(portfolio_cljs.project_grid.cell(portfolio_cljs.project_grid.placeholder_link(((screen.width / (6)) - Math.floor(((30) * Math.random())))),state),portfolio_cljs$project_grid$cell_grid_placeholder_$_iter__24053(cljs.core.rest(s__24054__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(num_cells));
})()], null)], null);
});
