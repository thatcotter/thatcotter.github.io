// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('portfolio.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('portfolio_cljs.project_grid');
goog.require('portfolio_cljs.about');
goog.require('portfolio_cljs.resume');
goog.require('portfolio_cljs.contact');
goog.require('portfolio_cljs.project_views');
portfolio.core.model = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$page,"Home",cljs.core.cst$kw$next_DASH_page,"nil",cljs.core.cst$kw$last_DASH_page,"nil",cljs.core.cst$kw$project,"nil"], null));
portfolio.core.pages = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Home","About","Resume/CV"], null);
portfolio.core.page_link = (function portfolio$core$page_link(page_name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(portfolio.core.model,cljs.core.assoc,cljs.core.cst$kw$page,page_name);

return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["new atom state: \n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(portfolio.core.model))].join('')], 0));
})], null),page_name], null)], null);
});
portfolio.core.home_page = (function portfolio$core$home_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$section$section,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1$title$name,"andrew cotter"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2$subtitle$name,"computational art + design"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$tabs$is_DASH_small,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,(function (){var iter__4523__auto__ = (function portfolio$core$home_page_$_iter__26443(s__26444){
return (new cljs.core.LazySeq(null,(function (){
var s__26444__$1 = s__26444;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__26444__$1);
if(temp__5720__auto__){
var s__26444__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26444__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__26444__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__26446 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__26445 = (0);
while(true){
if((i__26445 < size__4522__auto__)){
var page = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__26445);
cljs.core.chunk_append(b__26446,portfolio.core.page_link(page));

var G__26450 = (i__26445 + (1));
i__26445 = G__26450;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26446),portfolio$core$home_page_$_iter__26443(cljs.core.chunk_rest(s__26444__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26446),null);
}
} else {
var page = cljs.core.first(s__26444__$2);
return cljs.core.cons(portfolio.core.page_link(page),portfolio$core$home_page_$_iter__26443(cljs.core.rest(s__26444__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(portfolio.core.pages);
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$on_DASH_click,(function (){
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["test"], 0));
}),cljs.core.cst$kw$href,"https://github.com/thatcotter",cljs.core.cst$kw$target,"blank"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fab$fa_DASH_github], null)," "], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$on_DASH_click,(function (){
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["test"], 0));
}),cljs.core.cst$kw$href,"https://twitter.com/ThatCotter",cljs.core.cst$kw$target,"blank"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fab$fa_DASH_twitter], null)," "], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$on_DASH_click,(function (){
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["test"], 0));
}),cljs.core.cst$kw$href,"https://www.instagram.com/thatcotter/",cljs.core.cst$kw$target,"blank"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fab$fa_DASH_instagram], null)," "], null)], null)], null)], null),(function (){var state = (function (){var G__26448 = cljs.core.cst$kw$page;
var fexpr__26447 = cljs.core.deref(portfolio.core.model);
return (fexpr__26447.cljs$core$IFn$_invoke$arity$1 ? fexpr__26447.cljs$core$IFn$_invoke$arity$1(G__26448) : fexpr__26447.call(null,G__26448));
})();
var G__26449 = state;
switch (G__26449) {
case "Home":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [portfolio_cljs.project_grid.cell_grid,portfolio.core.model], null);

break;
case "About":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [portfolio_cljs.about.body], null);

break;
case "Contact":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [portfolio_cljs.contact.body], null);

break;
case "Resume/CV":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [portfolio_cljs.resume.body], null);

break;
case "Projects":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [portfolio_cljs.project_views.body,cljs.core.deref(portfolio.core.model)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [portfolio_cljs.project_grid.cell_grid,portfolio.core.model], null)], null);

break;
default:
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div], null);

}
})()], null)], null);
});
portfolio.core.test_page = (function portfolio$core$test_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"Welcome to Reagent"], null)], null);
});
portfolio.core.mount_root = (function portfolio$core$mount_root(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [portfolio.core.home_page], null),document.getElementById("app"));
});
portfolio.core.init_BANG_ = (function portfolio$core$init_BANG_(){
return portfolio.core.mount_root();
});
