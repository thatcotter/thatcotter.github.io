// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('portfolio_cljs.project_grid');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
portfolio_cljs.project_grid.placeholder_link = (function portfolio_cljs$project_grid$placeholder_link(size){
return ["https://picsum.photos/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"/?random"].join('');
});
portfolio_cljs.project_grid.project_links = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$phillytron,"./assets/images/phillytron.jpg",cljs.core.cst$kw$mgm,"./assets/images/magic-mecha2.jpg",cljs.core.cst$kw$talktolight,"https://redpaperheart.com/media/work/talktolight/google_talktolight_sxsw_hero-1920.jpg",cljs.core.cst$kw$buttons,"./assets/images/buttons-small.png",cljs.core.cst$kw$voyage,"./assets/images/voyage_1.gif",cljs.core.cst$kw$tide,"./assets/images/tide.gif",cljs.core.cst$kw$ha,"./assets/images/HA_7288(edit).jpg"], null);
portfolio_cljs.project_grid.scroll_to_top = (function portfolio_cljs$project_grid$scroll_to_top(){
return window.scrollTo((0),(0),"smooth");
});
portfolio_cljs.project_grid.cell = (function portfolio_cljs$project_grid$cell(var_args){
var args__4534__auto__ = [];
var len__4531__auto___27076 = arguments.length;
var i__4532__auto___27077 = (0);
while(true){
if((i__4532__auto___27077 < len__4531__auto___27076)){
args__4534__auto__.push((arguments[i__4532__auto___27077]));

var G__27078 = (i__4532__auto___27077 + (1));
i__4532__auto___27077 = G__27078;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return portfolio_cljs.project_grid.cell.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

portfolio_cljs.project_grid.cell.cljs$core$IFn$_invoke$arity$variadic = (function (project,state,p__27072){
var vec__27073 = p__27072;
var link = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27073,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$column$is_DASH_one_DASH_third$progressive,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$justify_DASH_content,"center",cljs.core.cst$kw$overflow,"hidden",cljs.core.cst$kw$align_DASH_items,"center"], null),cljs.core.cst$kw$on_DASH_click,((function (vec__27073,link){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$page,"Projects");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$project,project);

portfolio_cljs.project_grid.scroll_to_top();

return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([state], 0));
});})(vec__27073,link))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img$preview$lazy,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,(project.cljs$core$IFn$_invoke$arity$1 ? project.cljs$core$IFn$_invoke$arity$1(portfolio_cljs.project_grid.project_links) : project.call(null,portfolio_cljs.project_grid.project_links)),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$flex,(0),cljs.core.cst$kw$height,"100%",cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$layout,"fill",cljs.core.cst$kw$opacity,0.66,cljs.core.cst$kw$object_DASH_fit,"cover"], null)], null)], null)], null);
});

portfolio_cljs.project_grid.cell.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
portfolio_cljs.project_grid.cell.cljs$lang$applyTo = (function (seq27069){
var G__27070 = cljs.core.first(seq27069);
var seq27069__$1 = cljs.core.next(seq27069);
var G__27071 = cljs.core.first(seq27069__$1);
var seq27069__$2 = cljs.core.next(seq27069__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27070,G__27071,seq27069__$2);
});

portfolio_cljs.project_grid.cell_grid = (function portfolio_cljs$project_grid$cell_grid(state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$section$section,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$columns$is_DASH_multiline,(function (){var iter__4324__auto__ = (function portfolio_cljs$project_grid$cell_grid_$_iter__27079(s__27080){
return (new cljs.core.LazySeq(null,(function (){
var s__27080__$1 = s__27080;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__27080__$1);
if(temp__5457__auto__){
var s__27080__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27080__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__27080__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__27082 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__27081 = (0);
while(true){
if((i__27081 < size__4323__auto__)){
var project = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__27081);
cljs.core.chunk_append(b__27082,portfolio_cljs.project_grid.cell(project,state));

var G__27083 = (i__27081 + (1));
i__27081 = G__27083;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27082),portfolio_cljs$project_grid$cell_grid_$_iter__27079(cljs.core.chunk_rest(s__27080__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27082),null);
}
} else {
var project = cljs.core.first(s__27080__$2);
return cljs.core.cons(portfolio_cljs.project_grid.cell(project,state),portfolio_cljs$project_grid$cell_grid_$_iter__27079(cljs.core.rest(s__27080__$2)));
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$section$section,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$columns$is_DASH_multiline,(function (){var iter__4324__auto__ = (function portfolio_cljs$project_grid$cell_grid_placeholder_$_iter__27084(s__27085){
return (new cljs.core.LazySeq(null,(function (){
var s__27085__$1 = s__27085;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__27085__$1);
if(temp__5457__auto__){
var s__27085__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27085__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__27085__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__27087 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__27086 = (0);
while(true){
if((i__27086 < size__4323__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__27086);
cljs.core.chunk_append(b__27087,portfolio_cljs.project_grid.cell(portfolio_cljs.project_grid.placeholder_link(((screen.width / (6)) - Math.floor(((30) * Math.random())))),state));

var G__27088 = (i__27086 + (1));
i__27086 = G__27088;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27087),portfolio_cljs$project_grid$cell_grid_placeholder_$_iter__27084(cljs.core.chunk_rest(s__27085__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27087),null);
}
} else {
var x = cljs.core.first(s__27085__$2);
return cljs.core.cons(portfolio_cljs.project_grid.cell(portfolio_cljs.project_grid.placeholder_link(((screen.width / (6)) - Math.floor(((30) * Math.random())))),state),portfolio_cljs$project_grid$cell_grid_placeholder_$_iter__27084(cljs.core.rest(s__27085__$2)));
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
