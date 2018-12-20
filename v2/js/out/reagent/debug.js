// Compiled by ClojureScript 1.10.339 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__43741__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__43741 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43742__i = 0, G__43742__a = new Array(arguments.length -  0);
while (G__43742__i < G__43742__a.length) {G__43742__a[G__43742__i] = arguments[G__43742__i + 0]; ++G__43742__i;}
  args = new cljs.core.IndexedSeq(G__43742__a,0,null);
} 
return G__43741__delegate.call(this,args);};
G__43741.cljs$lang$maxFixedArity = 0;
G__43741.cljs$lang$applyTo = (function (arglist__43743){
var args = cljs.core.seq(arglist__43743);
return G__43741__delegate(args);
});
G__43741.cljs$core$IFn$_invoke$arity$variadic = G__43741__delegate;
return G__43741;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__43744__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__43744 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43745__i = 0, G__43745__a = new Array(arguments.length -  0);
while (G__43745__i < G__43745__a.length) {G__43745__a[G__43745__i] = arguments[G__43745__i + 0]; ++G__43745__i;}
  args = new cljs.core.IndexedSeq(G__43745__a,0,null);
} 
return G__43744__delegate.call(this,args);};
G__43744.cljs$lang$maxFixedArity = 0;
G__43744.cljs$lang$applyTo = (function (arglist__43746){
var args = cljs.core.seq(arglist__43746);
return G__43744__delegate(args);
});
G__43744.cljs$core$IFn$_invoke$arity$variadic = G__43744__delegate;
return G__43744;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1545318899627
