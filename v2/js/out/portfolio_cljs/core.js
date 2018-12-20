// Compiled by ClojureScript 1.10.339 {}
goog.provide('portfolio_cljs.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('portfolio_cljs.project_grid');
goog.require('portfolio_cljs.about');
goog.require('portfolio_cljs.resume');
goog.require('portfolio_cljs.contact');
goog.require('portfolio_cljs.project_views');
portfolio_cljs.core.model = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"page","page",849072397),"Home",new cljs.core.Keyword(null,"next-page","next-page",-1024409719),"nil",new cljs.core.Keyword(null,"last-page","last-page",-1966154825),"nil",new cljs.core.Keyword(null,"project","project",1124394579),"nil"], null));
portfolio_cljs.core.pages = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Home","About","Resume/CV"], null);
portfolio_cljs.core.page_link = (function portfolio_cljs$core$page_link(page_name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.swap_BANG_.call(null,portfolio_cljs.core.model,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),page_name);

return cljs.core.print.call(null,["new atom state: \n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,portfolio_cljs.core.model))].join(''));
})], null),page_name], null)], null);
});
portfolio_cljs.core.home_page = (function portfolio_cljs$core$home_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.section","section.section",-416807119),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.title.name","h1.title.name",1938078274),"andrew cotter"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.subtitle.name","h2.subtitle.name",1925641306),"computational art + design"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tabs.is-small","div.tabs.is-small",-770972066),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4324__auto__ = (function portfolio_cljs$core$home_page_$_iter__49059(s__49060){
return (new cljs.core.LazySeq(null,(function (){
var s__49060__$1 = s__49060;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__49060__$1);
if(temp__5457__auto__){
var s__49060__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__49060__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__49060__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__49062 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__49061 = (0);
while(true){
if((i__49061 < size__4323__auto__)){
var page = cljs.core._nth.call(null,c__4322__auto__,i__49061);
cljs.core.chunk_append.call(null,b__49062,portfolio_cljs.core.page_link.call(null,page));

var G__49064 = (i__49061 + (1));
i__49061 = G__49064;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49062),portfolio_cljs$core$home_page_$_iter__49059.call(null,cljs.core.chunk_rest.call(null,s__49060__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49062),null);
}
} else {
var page = cljs.core.first.call(null,s__49060__$2);
return cljs.core.cons.call(null,portfolio_cljs.core.page_link.call(null,page),portfolio_cljs$core$home_page_$_iter__49059.call(null,cljs.core.rest.call(null,s__49060__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,portfolio_cljs.core.pages);
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.print.call(null,"test");
}),new cljs.core.Keyword(null,"href","href",-793805698),"https://github.com/thatcotter",new cljs.core.Keyword(null,"target","target",253001721),"blank"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fab.fa-github","i.fab.fa-github",-107064877)], null)," "], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.print.call(null,"test");
}),new cljs.core.Keyword(null,"href","href",-793805698),"https://twitter.com/ThatCotter",new cljs.core.Keyword(null,"target","target",253001721),"blank"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fab.fa-twitter","i.fab.fa-twitter",100085994)], null)," "], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.print.call(null,"test");
}),new cljs.core.Keyword(null,"href","href",-793805698),"https://www.instagram.com/thatcotter/",new cljs.core.Keyword(null,"target","target",253001721),"blank"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fab.fa-instagram","i.fab.fa-instagram",-1607187060)], null)," "], null)], null)], null)], null),(function (){var state = cljs.core.deref.call(null,portfolio_cljs.core.model).call(null,new cljs.core.Keyword(null,"page","page",849072397));
var G__49063 = state;
switch (G__49063) {
case "Home":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [portfolio_cljs.project_grid.cell_grid,portfolio_cljs.core.model], null);

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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [portfolio_cljs.project_views.body,cljs.core.deref.call(null,portfolio_cljs.core.model)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [portfolio_cljs.project_grid.cell_grid,portfolio_cljs.core.model], null)], null);

break;
default:
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null);

}
})()], null)], null);
});
portfolio_cljs.core.mount_root = (function portfolio_cljs$core$mount_root(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [portfolio_cljs.core.home_page], null),document.getElementById("app"));
});
portfolio_cljs.core.init_BANG_ = (function portfolio_cljs$core$init_BANG_(){
return portfolio_cljs.core.mount_root.call(null);
});

//# sourceMappingURL=core.js.map?rel=1545318909191
