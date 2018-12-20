// Compiled by ClojureScript 1.10.339 {}
goog.provide('portfolio_cljs.project_grid');
goog.require('cljs.core');
goog.require('reagent.core');
portfolio_cljs.project_grid.placeholder_link = (function portfolio_cljs$project_grid$placeholder_link(size){
return ["https://picsum.photos/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"/?random"].join('');
});
portfolio_cljs.project_grid.project_links = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"phillytron","phillytron",285639437),"./assets/images/phillytron.jpg",new cljs.core.Keyword(null,"mgm","mgm",154196611),"./assets/images/magic-mecha2.jpg",new cljs.core.Keyword(null,"talktolight","talktolight",-99623242),"https://redpaperheart.com/media/work/talktolight/google_talktolight_sxsw_hero-1920.jpg",new cljs.core.Keyword(null,"buttons","buttons",-1953831197),"./assets/images/buttons-small.png",new cljs.core.Keyword(null,"voyage","voyage",1069567070),"./assets/images/voyage_1.gif",new cljs.core.Keyword(null,"tide","tide",-1254840243),"./assets/images/tide.gif",new cljs.core.Keyword(null,"ha","ha",7999328),"./assets/images/HA_7288(edit).jpg"], null);
portfolio_cljs.project_grid.scroll_to_top = (function portfolio_cljs$project_grid$scroll_to_top(){
return window.scrollTo((0),(0),"smooth");
});
portfolio_cljs.project_grid.cell = (function portfolio_cljs$project_grid$cell(var_args){
var args__4534__auto__ = [];
var len__4531__auto___44094 = arguments.length;
var i__4532__auto___44095 = (0);
while(true){
if((i__4532__auto___44095 < len__4531__auto___44094)){
args__4534__auto__.push((arguments[i__4532__auto___44095]));

var G__44096 = (i__4532__auto___44095 + (1));
i__4532__auto___44095 = G__44096;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return portfolio_cljs.project_grid.cell.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

portfolio_cljs.project_grid.cell.cljs$core$IFn$_invoke$arity$variadic = (function (project,state,p__44090){
var vec__44091 = p__44090;
var link = cljs.core.nth.call(null,vec__44091,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column.is-one-third.progressive","div.column.is-one-third.progressive",248011417),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__44091,link){
return (function (){
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),"Projects");

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"project","project",1124394579),project);

portfolio_cljs.project_grid.scroll_to_top.call(null);

return cljs.core.print.call(null,state);
});})(vec__44091,link))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.preview.lazy","img.preview.lazy",-494991881),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),project.call(null,portfolio_cljs.project_grid.project_links),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(0),new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"layout","layout",-2120940921),"fill",new cljs.core.Keyword(null,"opacity","opacity",397153780),0.66,new cljs.core.Keyword(null,"object-fit","object-fit",-429593694),"cover"], null)], null)], null)], null);
});

portfolio_cljs.project_grid.cell.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
portfolio_cljs.project_grid.cell.cljs$lang$applyTo = (function (seq44087){
var G__44088 = cljs.core.first.call(null,seq44087);
var seq44087__$1 = cljs.core.next.call(null,seq44087);
var G__44089 = cljs.core.first.call(null,seq44087__$1);
var seq44087__$2 = cljs.core.next.call(null,seq44087__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44088,G__44089,seq44087__$2);
});

portfolio_cljs.project_grid.cell_grid = (function portfolio_cljs$project_grid$cell_grid(state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.section","section.section",-416807119),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.columns.is-multiline","div.columns.is-multiline",1186870509),(function (){var iter__4324__auto__ = (function portfolio_cljs$project_grid$cell_grid_$_iter__44097(s__44098){
return (new cljs.core.LazySeq(null,(function (){
var s__44098__$1 = s__44098;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__44098__$1);
if(temp__5457__auto__){
var s__44098__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__44098__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__44098__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__44100 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__44099 = (0);
while(true){
if((i__44099 < size__4323__auto__)){
var project = cljs.core._nth.call(null,c__4322__auto__,i__44099);
cljs.core.chunk_append.call(null,b__44100,portfolio_cljs.project_grid.cell.call(null,project,state));

var G__44101 = (i__44099 + (1));
i__44099 = G__44101;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44100),portfolio_cljs$project_grid$cell_grid_$_iter__44097.call(null,cljs.core.chunk_rest.call(null,s__44098__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44100),null);
}
} else {
var project = cljs.core.first.call(null,s__44098__$2);
return cljs.core.cons.call(null,portfolio_cljs.project_grid.cell.call(null,project,state),portfolio_cljs$project_grid$cell_grid_$_iter__44097.call(null,cljs.core.rest.call(null,s__44098__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,cljs.core.keys.call(null,cljs.core.shuffle.call(null,portfolio_cljs.project_grid.project_links)));
})()], null)], null);
});
portfolio_cljs.project_grid.cell_grid_placeholder = (function portfolio_cljs$project_grid$cell_grid_placeholder(num_cells,state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.section","section.section",-416807119),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.columns.is-multiline","div.columns.is-multiline",1186870509),(function (){var iter__4324__auto__ = (function portfolio_cljs$project_grid$cell_grid_placeholder_$_iter__44102(s__44103){
return (new cljs.core.LazySeq(null,(function (){
var s__44103__$1 = s__44103;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__44103__$1);
if(temp__5457__auto__){
var s__44103__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__44103__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__44103__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__44105 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__44104 = (0);
while(true){
if((i__44104 < size__4323__auto__)){
var x = cljs.core._nth.call(null,c__4322__auto__,i__44104);
cljs.core.chunk_append.call(null,b__44105,portfolio_cljs.project_grid.cell.call(null,portfolio_cljs.project_grid.placeholder_link.call(null,((screen.width / (6)) - Math.floor(((30) * Math.random())))),state));

var G__44106 = (i__44104 + (1));
i__44104 = G__44106;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44105),portfolio_cljs$project_grid$cell_grid_placeholder_$_iter__44102.call(null,cljs.core.chunk_rest.call(null,s__44103__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44105),null);
}
} else {
var x = cljs.core.first.call(null,s__44103__$2);
return cljs.core.cons.call(null,portfolio_cljs.project_grid.cell.call(null,portfolio_cljs.project_grid.placeholder_link.call(null,((screen.width / (6)) - Math.floor(((30) * Math.random())))),state),portfolio_cljs$project_grid$cell_grid_placeholder_$_iter__44102.call(null,cljs.core.rest.call(null,s__44103__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,cljs.core.range.call(null,num_cells));
})()], null)], null);
});

//# sourceMappingURL=project_grid.js.map?rel=1545318900745
