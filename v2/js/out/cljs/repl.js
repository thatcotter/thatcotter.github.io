// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__48452){
var map__48453 = p__48452;
var map__48453__$1 = ((((!((map__48453 == null)))?(((((map__48453.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48453.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48453):map__48453);
var m = map__48453__$1;
var n = cljs.core.get.call(null,map__48453__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__48453__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__48455_48477 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__48456_48478 = null;
var count__48457_48479 = (0);
var i__48458_48480 = (0);
while(true){
if((i__48458_48480 < count__48457_48479)){
var f_48481 = cljs.core._nth.call(null,chunk__48456_48478,i__48458_48480);
cljs.core.println.call(null,"  ",f_48481);


var G__48482 = seq__48455_48477;
var G__48483 = chunk__48456_48478;
var G__48484 = count__48457_48479;
var G__48485 = (i__48458_48480 + (1));
seq__48455_48477 = G__48482;
chunk__48456_48478 = G__48483;
count__48457_48479 = G__48484;
i__48458_48480 = G__48485;
continue;
} else {
var temp__5457__auto___48486 = cljs.core.seq.call(null,seq__48455_48477);
if(temp__5457__auto___48486){
var seq__48455_48487__$1 = temp__5457__auto___48486;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48455_48487__$1)){
var c__4351__auto___48488 = cljs.core.chunk_first.call(null,seq__48455_48487__$1);
var G__48489 = cljs.core.chunk_rest.call(null,seq__48455_48487__$1);
var G__48490 = c__4351__auto___48488;
var G__48491 = cljs.core.count.call(null,c__4351__auto___48488);
var G__48492 = (0);
seq__48455_48477 = G__48489;
chunk__48456_48478 = G__48490;
count__48457_48479 = G__48491;
i__48458_48480 = G__48492;
continue;
} else {
var f_48493 = cljs.core.first.call(null,seq__48455_48487__$1);
cljs.core.println.call(null,"  ",f_48493);


var G__48494 = cljs.core.next.call(null,seq__48455_48487__$1);
var G__48495 = null;
var G__48496 = (0);
var G__48497 = (0);
seq__48455_48477 = G__48494;
chunk__48456_48478 = G__48495;
count__48457_48479 = G__48496;
i__48458_48480 = G__48497;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_48498 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3949__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_48498);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_48498)))?cljs.core.second.call(null,arglists_48498):arglists_48498));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__48459_48499 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__48460_48500 = null;
var count__48461_48501 = (0);
var i__48462_48502 = (0);
while(true){
if((i__48462_48502 < count__48461_48501)){
var vec__48463_48503 = cljs.core._nth.call(null,chunk__48460_48500,i__48462_48502);
var name_48504 = cljs.core.nth.call(null,vec__48463_48503,(0),null);
var map__48466_48505 = cljs.core.nth.call(null,vec__48463_48503,(1),null);
var map__48466_48506__$1 = ((((!((map__48466_48505 == null)))?(((((map__48466_48505.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48466_48505.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48466_48505):map__48466_48505);
var doc_48507 = cljs.core.get.call(null,map__48466_48506__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_48508 = cljs.core.get.call(null,map__48466_48506__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_48504);

cljs.core.println.call(null," ",arglists_48508);

if(cljs.core.truth_(doc_48507)){
cljs.core.println.call(null," ",doc_48507);
} else {
}


var G__48509 = seq__48459_48499;
var G__48510 = chunk__48460_48500;
var G__48511 = count__48461_48501;
var G__48512 = (i__48462_48502 + (1));
seq__48459_48499 = G__48509;
chunk__48460_48500 = G__48510;
count__48461_48501 = G__48511;
i__48462_48502 = G__48512;
continue;
} else {
var temp__5457__auto___48513 = cljs.core.seq.call(null,seq__48459_48499);
if(temp__5457__auto___48513){
var seq__48459_48514__$1 = temp__5457__auto___48513;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48459_48514__$1)){
var c__4351__auto___48515 = cljs.core.chunk_first.call(null,seq__48459_48514__$1);
var G__48516 = cljs.core.chunk_rest.call(null,seq__48459_48514__$1);
var G__48517 = c__4351__auto___48515;
var G__48518 = cljs.core.count.call(null,c__4351__auto___48515);
var G__48519 = (0);
seq__48459_48499 = G__48516;
chunk__48460_48500 = G__48517;
count__48461_48501 = G__48518;
i__48462_48502 = G__48519;
continue;
} else {
var vec__48468_48520 = cljs.core.first.call(null,seq__48459_48514__$1);
var name_48521 = cljs.core.nth.call(null,vec__48468_48520,(0),null);
var map__48471_48522 = cljs.core.nth.call(null,vec__48468_48520,(1),null);
var map__48471_48523__$1 = ((((!((map__48471_48522 == null)))?(((((map__48471_48522.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48471_48522.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48471_48522):map__48471_48522);
var doc_48524 = cljs.core.get.call(null,map__48471_48523__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_48525 = cljs.core.get.call(null,map__48471_48523__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_48521);

cljs.core.println.call(null," ",arglists_48525);

if(cljs.core.truth_(doc_48524)){
cljs.core.println.call(null," ",doc_48524);
} else {
}


var G__48526 = cljs.core.next.call(null,seq__48459_48514__$1);
var G__48527 = null;
var G__48528 = (0);
var G__48529 = (0);
seq__48459_48499 = G__48526;
chunk__48460_48500 = G__48527;
count__48461_48501 = G__48528;
i__48462_48502 = G__48529;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__48473 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__48474 = null;
var count__48475 = (0);
var i__48476 = (0);
while(true){
if((i__48476 < count__48475)){
var role = cljs.core._nth.call(null,chunk__48474,i__48476);
var temp__5457__auto___48530__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___48530__$1)){
var spec_48531 = temp__5457__auto___48530__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_48531));
} else {
}


var G__48532 = seq__48473;
var G__48533 = chunk__48474;
var G__48534 = count__48475;
var G__48535 = (i__48476 + (1));
seq__48473 = G__48532;
chunk__48474 = G__48533;
count__48475 = G__48534;
i__48476 = G__48535;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__48473);
if(temp__5457__auto____$1){
var seq__48473__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48473__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__48473__$1);
var G__48536 = cljs.core.chunk_rest.call(null,seq__48473__$1);
var G__48537 = c__4351__auto__;
var G__48538 = cljs.core.count.call(null,c__4351__auto__);
var G__48539 = (0);
seq__48473 = G__48536;
chunk__48474 = G__48537;
count__48475 = G__48538;
i__48476 = G__48539;
continue;
} else {
var role = cljs.core.first.call(null,seq__48473__$1);
var temp__5457__auto___48540__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___48540__$2)){
var spec_48541 = temp__5457__auto___48540__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_48541));
} else {
}


var G__48542 = cljs.core.next.call(null,seq__48473__$1);
var G__48543 = null;
var G__48544 = (0);
var G__48545 = (0);
seq__48473 = G__48542;
chunk__48474 = G__48543;
count__48475 = G__48544;
i__48476 = G__48545;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1545318907928
