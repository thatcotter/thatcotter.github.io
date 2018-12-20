// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('reagent.debug');
goog.require('cljs.core');
goog.require('cljs.core.constants');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__26547__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__26547 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26548__i = 0, G__26548__a = new Array(arguments.length -  0);
while (G__26548__i < G__26548__a.length) {G__26548__a[G__26548__i] = arguments[G__26548__i + 0]; ++G__26548__i;}
  args = new cljs.core.IndexedSeq(G__26548__a,0,null);
} 
return G__26547__delegate.call(this,args);};
G__26547.cljs$lang$maxFixedArity = 0;
G__26547.cljs$lang$applyTo = (function (arglist__26549){
var args = cljs.core.seq(arglist__26549);
return G__26547__delegate(args);
});
G__26547.cljs$core$IFn$_invoke$arity$variadic = G__26547__delegate;
return G__26547;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__26550__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__26550 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26551__i = 0, G__26551__a = new Array(arguments.length -  0);
while (G__26551__i < G__26551__a.length) {G__26551__a[G__26551__i] = arguments[G__26551__i + 0]; ++G__26551__i;}
  args = new cljs.core.IndexedSeq(G__26551__a,0,null);
} 
return G__26550__delegate.call(this,args);};
G__26550.cljs$lang$maxFixedArity = 0;
G__26550.cljs$lang$applyTo = (function (arglist__26552){
var args = cljs.core.seq(arglist__26552);
return G__26550__delegate(args);
});
G__26550.cljs$core$IFn$_invoke$arity$variadic = G__26550__delegate;
return G__26550;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});
