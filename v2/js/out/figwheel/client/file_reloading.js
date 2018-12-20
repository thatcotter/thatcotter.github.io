// Compiled by ClojureScript 1.10.339 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__3949__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__3949__auto__){
return or__3949__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__3949__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__46988_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__46988_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__46989 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__46990 = null;
var count__46991 = (0);
var i__46992 = (0);
while(true){
if((i__46992 < count__46991)){
var n = cljs.core._nth.call(null,chunk__46990,i__46992);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__46993 = seq__46989;
var G__46994 = chunk__46990;
var G__46995 = count__46991;
var G__46996 = (i__46992 + (1));
seq__46989 = G__46993;
chunk__46990 = G__46994;
count__46991 = G__46995;
i__46992 = G__46996;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__46989);
if(temp__5457__auto__){
var seq__46989__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46989__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__46989__$1);
var G__46997 = cljs.core.chunk_rest.call(null,seq__46989__$1);
var G__46998 = c__4351__auto__;
var G__46999 = cljs.core.count.call(null,c__4351__auto__);
var G__47000 = (0);
seq__46989 = G__46997;
chunk__46990 = G__46998;
count__46991 = G__46999;
i__46992 = G__47000;
continue;
} else {
var n = cljs.core.first.call(null,seq__46989__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__47001 = cljs.core.next.call(null,seq__46989__$1);
var G__47002 = null;
var G__47003 = (0);
var G__47004 = (0);
seq__46989 = G__47001;
chunk__46990 = G__47002;
count__46991 = G__47003;
i__46992 = G__47004;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__47005){
var vec__47006 = p__47005;
var _ = cljs.core.nth.call(null,vec__47006,(0),null);
var v = cljs.core.nth.call(null,vec__47006,(1),null);
var and__3938__auto__ = v;
if(cljs.core.truth_(and__3938__auto__)){
return v.call(null,dep);
} else {
return and__3938__auto__;
}
}),cljs.core.filter.call(null,(function (p__47009){
var vec__47010 = p__47009;
var k = cljs.core.nth.call(null,vec__47010,(0),null);
var v = cljs.core.nth.call(null,vec__47010,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__47022_47030 = cljs.core.seq.call(null,deps);
var chunk__47023_47031 = null;
var count__47024_47032 = (0);
var i__47025_47033 = (0);
while(true){
if((i__47025_47033 < count__47024_47032)){
var dep_47034 = cljs.core._nth.call(null,chunk__47023_47031,i__47025_47033);
if(cljs.core.truth_((function (){var and__3938__auto__ = dep_47034;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_47034));
} else {
return and__3938__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_47034,(depth + (1)),state);
} else {
}


var G__47035 = seq__47022_47030;
var G__47036 = chunk__47023_47031;
var G__47037 = count__47024_47032;
var G__47038 = (i__47025_47033 + (1));
seq__47022_47030 = G__47035;
chunk__47023_47031 = G__47036;
count__47024_47032 = G__47037;
i__47025_47033 = G__47038;
continue;
} else {
var temp__5457__auto___47039 = cljs.core.seq.call(null,seq__47022_47030);
if(temp__5457__auto___47039){
var seq__47022_47040__$1 = temp__5457__auto___47039;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47022_47040__$1)){
var c__4351__auto___47041 = cljs.core.chunk_first.call(null,seq__47022_47040__$1);
var G__47042 = cljs.core.chunk_rest.call(null,seq__47022_47040__$1);
var G__47043 = c__4351__auto___47041;
var G__47044 = cljs.core.count.call(null,c__4351__auto___47041);
var G__47045 = (0);
seq__47022_47030 = G__47042;
chunk__47023_47031 = G__47043;
count__47024_47032 = G__47044;
i__47025_47033 = G__47045;
continue;
} else {
var dep_47046 = cljs.core.first.call(null,seq__47022_47040__$1);
if(cljs.core.truth_((function (){var and__3938__auto__ = dep_47046;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_47046));
} else {
return and__3938__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_47046,(depth + (1)),state);
} else {
}


var G__47047 = cljs.core.next.call(null,seq__47022_47040__$1);
var G__47048 = null;
var G__47049 = (0);
var G__47050 = (0);
seq__47022_47030 = G__47047;
chunk__47023_47031 = G__47048;
count__47024_47032 = G__47049;
i__47025_47033 = G__47050;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__47026){
var vec__47027 = p__47026;
var seq__47028 = cljs.core.seq.call(null,vec__47027);
var first__47029 = cljs.core.first.call(null,seq__47028);
var seq__47028__$1 = cljs.core.next.call(null,seq__47028);
var x = first__47029;
var xs = seq__47028__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__47027,seq__47028,first__47029,seq__47028__$1,x,xs,get_deps__$1){
return (function (p1__47013_SHARP_){
return clojure.set.difference.call(null,p1__47013_SHARP_,x);
});})(vec__47027,seq__47028,first__47029,seq__47028__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__47051 = cljs.core.seq.call(null,provides);
var chunk__47052 = null;
var count__47053 = (0);
var i__47054 = (0);
while(true){
if((i__47054 < count__47053)){
var prov = cljs.core._nth.call(null,chunk__47052,i__47054);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__47055_47063 = cljs.core.seq.call(null,requires);
var chunk__47056_47064 = null;
var count__47057_47065 = (0);
var i__47058_47066 = (0);
while(true){
if((i__47058_47066 < count__47057_47065)){
var req_47067 = cljs.core._nth.call(null,chunk__47056_47064,i__47058_47066);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_47067,prov);


var G__47068 = seq__47055_47063;
var G__47069 = chunk__47056_47064;
var G__47070 = count__47057_47065;
var G__47071 = (i__47058_47066 + (1));
seq__47055_47063 = G__47068;
chunk__47056_47064 = G__47069;
count__47057_47065 = G__47070;
i__47058_47066 = G__47071;
continue;
} else {
var temp__5457__auto___47072 = cljs.core.seq.call(null,seq__47055_47063);
if(temp__5457__auto___47072){
var seq__47055_47073__$1 = temp__5457__auto___47072;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47055_47073__$1)){
var c__4351__auto___47074 = cljs.core.chunk_first.call(null,seq__47055_47073__$1);
var G__47075 = cljs.core.chunk_rest.call(null,seq__47055_47073__$1);
var G__47076 = c__4351__auto___47074;
var G__47077 = cljs.core.count.call(null,c__4351__auto___47074);
var G__47078 = (0);
seq__47055_47063 = G__47075;
chunk__47056_47064 = G__47076;
count__47057_47065 = G__47077;
i__47058_47066 = G__47078;
continue;
} else {
var req_47079 = cljs.core.first.call(null,seq__47055_47073__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_47079,prov);


var G__47080 = cljs.core.next.call(null,seq__47055_47073__$1);
var G__47081 = null;
var G__47082 = (0);
var G__47083 = (0);
seq__47055_47063 = G__47080;
chunk__47056_47064 = G__47081;
count__47057_47065 = G__47082;
i__47058_47066 = G__47083;
continue;
}
} else {
}
}
break;
}


var G__47084 = seq__47051;
var G__47085 = chunk__47052;
var G__47086 = count__47053;
var G__47087 = (i__47054 + (1));
seq__47051 = G__47084;
chunk__47052 = G__47085;
count__47053 = G__47086;
i__47054 = G__47087;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__47051);
if(temp__5457__auto__){
var seq__47051__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47051__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__47051__$1);
var G__47088 = cljs.core.chunk_rest.call(null,seq__47051__$1);
var G__47089 = c__4351__auto__;
var G__47090 = cljs.core.count.call(null,c__4351__auto__);
var G__47091 = (0);
seq__47051 = G__47088;
chunk__47052 = G__47089;
count__47053 = G__47090;
i__47054 = G__47091;
continue;
} else {
var prov = cljs.core.first.call(null,seq__47051__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__47059_47092 = cljs.core.seq.call(null,requires);
var chunk__47060_47093 = null;
var count__47061_47094 = (0);
var i__47062_47095 = (0);
while(true){
if((i__47062_47095 < count__47061_47094)){
var req_47096 = cljs.core._nth.call(null,chunk__47060_47093,i__47062_47095);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_47096,prov);


var G__47097 = seq__47059_47092;
var G__47098 = chunk__47060_47093;
var G__47099 = count__47061_47094;
var G__47100 = (i__47062_47095 + (1));
seq__47059_47092 = G__47097;
chunk__47060_47093 = G__47098;
count__47061_47094 = G__47099;
i__47062_47095 = G__47100;
continue;
} else {
var temp__5457__auto___47101__$1 = cljs.core.seq.call(null,seq__47059_47092);
if(temp__5457__auto___47101__$1){
var seq__47059_47102__$1 = temp__5457__auto___47101__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47059_47102__$1)){
var c__4351__auto___47103 = cljs.core.chunk_first.call(null,seq__47059_47102__$1);
var G__47104 = cljs.core.chunk_rest.call(null,seq__47059_47102__$1);
var G__47105 = c__4351__auto___47103;
var G__47106 = cljs.core.count.call(null,c__4351__auto___47103);
var G__47107 = (0);
seq__47059_47092 = G__47104;
chunk__47060_47093 = G__47105;
count__47061_47094 = G__47106;
i__47062_47095 = G__47107;
continue;
} else {
var req_47108 = cljs.core.first.call(null,seq__47059_47102__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_47108,prov);


var G__47109 = cljs.core.next.call(null,seq__47059_47102__$1);
var G__47110 = null;
var G__47111 = (0);
var G__47112 = (0);
seq__47059_47092 = G__47109;
chunk__47060_47093 = G__47110;
count__47061_47094 = G__47111;
i__47062_47095 = G__47112;
continue;
}
} else {
}
}
break;
}


var G__47113 = cljs.core.next.call(null,seq__47051__$1);
var G__47114 = null;
var G__47115 = (0);
var G__47116 = (0);
seq__47051 = G__47113;
chunk__47052 = G__47114;
count__47053 = G__47115;
i__47054 = G__47116;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__47117_47121 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__47118_47122 = null;
var count__47119_47123 = (0);
var i__47120_47124 = (0);
while(true){
if((i__47120_47124 < count__47119_47123)){
var ns_47125 = cljs.core._nth.call(null,chunk__47118_47122,i__47120_47124);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_47125);


var G__47126 = seq__47117_47121;
var G__47127 = chunk__47118_47122;
var G__47128 = count__47119_47123;
var G__47129 = (i__47120_47124 + (1));
seq__47117_47121 = G__47126;
chunk__47118_47122 = G__47127;
count__47119_47123 = G__47128;
i__47120_47124 = G__47129;
continue;
} else {
var temp__5457__auto___47130 = cljs.core.seq.call(null,seq__47117_47121);
if(temp__5457__auto___47130){
var seq__47117_47131__$1 = temp__5457__auto___47130;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47117_47131__$1)){
var c__4351__auto___47132 = cljs.core.chunk_first.call(null,seq__47117_47131__$1);
var G__47133 = cljs.core.chunk_rest.call(null,seq__47117_47131__$1);
var G__47134 = c__4351__auto___47132;
var G__47135 = cljs.core.count.call(null,c__4351__auto___47132);
var G__47136 = (0);
seq__47117_47121 = G__47133;
chunk__47118_47122 = G__47134;
count__47119_47123 = G__47135;
i__47120_47124 = G__47136;
continue;
} else {
var ns_47137 = cljs.core.first.call(null,seq__47117_47131__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_47137);


var G__47138 = cljs.core.next.call(null,seq__47117_47131__$1);
var G__47139 = null;
var G__47140 = (0);
var G__47141 = (0);
seq__47117_47121 = G__47138;
chunk__47118_47122 = G__47139;
count__47119_47123 = G__47140;
i__47120_47124 = G__47141;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__3949__auto__ = goog.require__;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__47142__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__47142 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47143__i = 0, G__47143__a = new Array(arguments.length -  0);
while (G__47143__i < G__47143__a.length) {G__47143__a[G__47143__i] = arguments[G__47143__i + 0]; ++G__47143__i;}
  args = new cljs.core.IndexedSeq(G__47143__a,0,null);
} 
return G__47142__delegate.call(this,args);};
G__47142.cljs$lang$maxFixedArity = 0;
G__47142.cljs$lang$applyTo = (function (arglist__47144){
var args = cljs.core.seq(arglist__47144);
return G__47142__delegate(args);
});
G__47142.cljs$core$IFn$_invoke$arity$variadic = G__47142__delegate;
return G__47142;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__47145_SHARP_,p2__47146_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__47145_SHARP_)].join('')),p2__47146_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__47147_SHARP_,p2__47148_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__47147_SHARP_)].join(''),p2__47148_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__47149 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__47149.addCallback(((function (G__47149){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__47149))
);

G__47149.addErrback(((function (G__47149){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__47149))
);

return G__47149;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e47150){if((e47150 instanceof Error)){
var e = e47150;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e47150;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e47151){if((e47151 instanceof Error)){
var e = e47151;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e47151;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__47152 = cljs.core._EQ_;
var expr__47153 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__47152.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__47153))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__47152.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__47153))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__47152.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__47153))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__47152,expr__47153){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__47152,expr__47153))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__47155,callback){
var map__47156 = p__47155;
var map__47156__$1 = ((((!((map__47156 == null)))?(((((map__47156.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47156.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47156):map__47156);
var file_msg = map__47156__$1;
var request_url = cljs.core.get.call(null,map__47156__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__3949__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__47156,map__47156__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__47156,map__47156__$1,file_msg,request_url))
);
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__36422__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36422__auto__){
return (function (){
var f__36423__auto__ = (function (){var switch__36331__auto__ = ((function (c__36422__auto__){
return (function (state_47194){
var state_val_47195 = (state_47194[(1)]);
if((state_val_47195 === (7))){
var inst_47190 = (state_47194[(2)]);
var state_47194__$1 = state_47194;
var statearr_47196_47222 = state_47194__$1;
(statearr_47196_47222[(2)] = inst_47190);

(statearr_47196_47222[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47195 === (1))){
var state_47194__$1 = state_47194;
var statearr_47197_47223 = state_47194__$1;
(statearr_47197_47223[(2)] = null);

(statearr_47197_47223[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47195 === (4))){
var inst_47160 = (state_47194[(7)]);
var inst_47160__$1 = (state_47194[(2)]);
var state_47194__$1 = (function (){var statearr_47198 = state_47194;
(statearr_47198[(7)] = inst_47160__$1);

return statearr_47198;
})();
if(cljs.core.truth_(inst_47160__$1)){
var statearr_47199_47224 = state_47194__$1;
(statearr_47199_47224[(1)] = (5));

} else {
var statearr_47200_47225 = state_47194__$1;
(statearr_47200_47225[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47195 === (15))){
var inst_47175 = (state_47194[(8)]);
var inst_47173 = (state_47194[(9)]);
var inst_47177 = inst_47175.call(null,inst_47173);
var state_47194__$1 = state_47194;
var statearr_47201_47226 = state_47194__$1;
(statearr_47201_47226[(2)] = inst_47177);

(statearr_47201_47226[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47195 === (13))){
var inst_47184 = (state_47194[(2)]);
var state_47194__$1 = state_47194;
var statearr_47202_47227 = state_47194__$1;
(statearr_47202_47227[(2)] = inst_47184);

(statearr_47202_47227[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47195 === (6))){
var state_47194__$1 = state_47194;
var statearr_47203_47228 = state_47194__$1;
(statearr_47203_47228[(2)] = null);

(statearr_47203_47228[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47195 === (17))){
var inst_47181 = (state_47194[(2)]);
var state_47194__$1 = state_47194;
var statearr_47204_47229 = state_47194__$1;
(statearr_47204_47229[(2)] = inst_47181);

(statearr_47204_47229[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47195 === (3))){
var inst_47192 = (state_47194[(2)]);
var state_47194__$1 = state_47194;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47194__$1,inst_47192);
} else {
if((state_val_47195 === (12))){
var state_47194__$1 = state_47194;
var statearr_47205_47230 = state_47194__$1;
(statearr_47205_47230[(2)] = null);

(statearr_47205_47230[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47195 === (2))){
var state_47194__$1 = state_47194;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47194__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_47195 === (11))){
var inst_47165 = (state_47194[(10)]);
var inst_47171 = figwheel.client.file_reloading.blocking_load.call(null,inst_47165);
var state_47194__$1 = state_47194;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47194__$1,(14),inst_47171);
} else {
if((state_val_47195 === (9))){
var inst_47165 = (state_47194[(10)]);
var state_47194__$1 = state_47194;
if(cljs.core.truth_(inst_47165)){
var statearr_47206_47231 = state_47194__$1;
(statearr_47206_47231[(1)] = (11));

} else {
var statearr_47207_47232 = state_47194__$1;
(statearr_47207_47232[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47195 === (5))){
var inst_47160 = (state_47194[(7)]);
var inst_47166 = (state_47194[(11)]);
var inst_47165 = cljs.core.nth.call(null,inst_47160,(0),null);
var inst_47166__$1 = cljs.core.nth.call(null,inst_47160,(1),null);
var state_47194__$1 = (function (){var statearr_47208 = state_47194;
(statearr_47208[(10)] = inst_47165);

(statearr_47208[(11)] = inst_47166__$1);

return statearr_47208;
})();
if(cljs.core.truth_(inst_47166__$1)){
var statearr_47209_47233 = state_47194__$1;
(statearr_47209_47233[(1)] = (8));

} else {
var statearr_47210_47234 = state_47194__$1;
(statearr_47210_47234[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47195 === (14))){
var inst_47165 = (state_47194[(10)]);
var inst_47175 = (state_47194[(8)]);
var inst_47173 = (state_47194[(2)]);
var inst_47174 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_47175__$1 = cljs.core.get.call(null,inst_47174,inst_47165);
var state_47194__$1 = (function (){var statearr_47211 = state_47194;
(statearr_47211[(8)] = inst_47175__$1);

(statearr_47211[(9)] = inst_47173);

return statearr_47211;
})();
if(cljs.core.truth_(inst_47175__$1)){
var statearr_47212_47235 = state_47194__$1;
(statearr_47212_47235[(1)] = (15));

} else {
var statearr_47213_47236 = state_47194__$1;
(statearr_47213_47236[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47195 === (16))){
var inst_47173 = (state_47194[(9)]);
var inst_47179 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_47173);
var state_47194__$1 = state_47194;
var statearr_47214_47237 = state_47194__$1;
(statearr_47214_47237[(2)] = inst_47179);

(statearr_47214_47237[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47195 === (10))){
var inst_47186 = (state_47194[(2)]);
var state_47194__$1 = (function (){var statearr_47215 = state_47194;
(statearr_47215[(12)] = inst_47186);

return statearr_47215;
})();
var statearr_47216_47238 = state_47194__$1;
(statearr_47216_47238[(2)] = null);

(statearr_47216_47238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47195 === (8))){
var inst_47166 = (state_47194[(11)]);
var inst_47168 = eval(inst_47166);
var state_47194__$1 = state_47194;
var statearr_47217_47239 = state_47194__$1;
(statearr_47217_47239[(2)] = inst_47168);

(statearr_47217_47239[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__36422__auto__))
;
return ((function (switch__36331__auto__,c__36422__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__36332__auto__ = null;
var figwheel$client$file_reloading$state_machine__36332__auto____0 = (function (){
var statearr_47218 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47218[(0)] = figwheel$client$file_reloading$state_machine__36332__auto__);

(statearr_47218[(1)] = (1));

return statearr_47218;
});
var figwheel$client$file_reloading$state_machine__36332__auto____1 = (function (state_47194){
while(true){
var ret_value__36333__auto__ = (function (){try{while(true){
var result__36334__auto__ = switch__36331__auto__.call(null,state_47194);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36334__auto__;
}
break;
}
}catch (e47219){if((e47219 instanceof Object)){
var ex__36335__auto__ = e47219;
var statearr_47220_47240 = state_47194;
(statearr_47220_47240[(5)] = ex__36335__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47194);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47219;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47241 = state_47194;
state_47194 = G__47241;
continue;
} else {
return ret_value__36333__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__36332__auto__ = function(state_47194){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__36332__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__36332__auto____1.call(this,state_47194);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__36332__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__36332__auto____0;
figwheel$client$file_reloading$state_machine__36332__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__36332__auto____1;
return figwheel$client$file_reloading$state_machine__36332__auto__;
})()
;})(switch__36331__auto__,c__36422__auto__))
})();
var state__36424__auto__ = (function (){var statearr_47221 = f__36423__auto__.call(null);
(statearr_47221[(6)] = c__36422__auto__);

return statearr_47221;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36424__auto__);
});})(c__36422__auto__))
);

return c__36422__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__47243 = arguments.length;
switch (G__47243) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__47245,callback){
var map__47246 = p__47245;
var map__47246__$1 = ((((!((map__47246 == null)))?(((((map__47246.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47246.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47246):map__47246);
var file_msg = map__47246__$1;
var namespace = cljs.core.get.call(null,map__47246__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__47246,map__47246__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__47246,map__47246__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__47248){
var map__47249 = p__47248;
var map__47249__$1 = ((((!((map__47249 == null)))?(((((map__47249.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47249.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47249):map__47249);
var file_msg = map__47249__$1;
var namespace = cljs.core.get.call(null,map__47249__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__47251){
var map__47252 = p__47251;
var map__47252__$1 = ((((!((map__47252 == null)))?(((((map__47252.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47252.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47252):map__47252);
var file_msg = map__47252__$1;
var namespace = cljs.core.get.call(null,map__47252__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__3938__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__3938__auto__){
var or__3949__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
var or__3949__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__3949__auto____$2)){
return or__3949__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__3938__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__47254,callback){
var map__47255 = p__47254;
var map__47255__$1 = ((((!((map__47255 == null)))?(((((map__47255.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47255.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47255):map__47255);
var file_msg = map__47255__$1;
var request_url = cljs.core.get.call(null,map__47255__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__47255__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__36422__auto___47305 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36422__auto___47305,out){
return (function (){
var f__36423__auto__ = (function (){var switch__36331__auto__ = ((function (c__36422__auto___47305,out){
return (function (state_47290){
var state_val_47291 = (state_47290[(1)]);
if((state_val_47291 === (1))){
var inst_47264 = cljs.core.seq.call(null,files);
var inst_47265 = cljs.core.first.call(null,inst_47264);
var inst_47266 = cljs.core.next.call(null,inst_47264);
var inst_47267 = files;
var state_47290__$1 = (function (){var statearr_47292 = state_47290;
(statearr_47292[(7)] = inst_47267);

(statearr_47292[(8)] = inst_47266);

(statearr_47292[(9)] = inst_47265);

return statearr_47292;
})();
var statearr_47293_47306 = state_47290__$1;
(statearr_47293_47306[(2)] = null);

(statearr_47293_47306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47291 === (2))){
var inst_47273 = (state_47290[(10)]);
var inst_47267 = (state_47290[(7)]);
var inst_47272 = cljs.core.seq.call(null,inst_47267);
var inst_47273__$1 = cljs.core.first.call(null,inst_47272);
var inst_47274 = cljs.core.next.call(null,inst_47272);
var inst_47275 = (inst_47273__$1 == null);
var inst_47276 = cljs.core.not.call(null,inst_47275);
var state_47290__$1 = (function (){var statearr_47294 = state_47290;
(statearr_47294[(10)] = inst_47273__$1);

(statearr_47294[(11)] = inst_47274);

return statearr_47294;
})();
if(inst_47276){
var statearr_47295_47307 = state_47290__$1;
(statearr_47295_47307[(1)] = (4));

} else {
var statearr_47296_47308 = state_47290__$1;
(statearr_47296_47308[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47291 === (3))){
var inst_47288 = (state_47290[(2)]);
var state_47290__$1 = state_47290;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47290__$1,inst_47288);
} else {
if((state_val_47291 === (4))){
var inst_47273 = (state_47290[(10)]);
var inst_47278 = figwheel.client.file_reloading.reload_js_file.call(null,inst_47273);
var state_47290__$1 = state_47290;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47290__$1,(7),inst_47278);
} else {
if((state_val_47291 === (5))){
var inst_47284 = cljs.core.async.close_BANG_.call(null,out);
var state_47290__$1 = state_47290;
var statearr_47297_47309 = state_47290__$1;
(statearr_47297_47309[(2)] = inst_47284);

(statearr_47297_47309[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47291 === (6))){
var inst_47286 = (state_47290[(2)]);
var state_47290__$1 = state_47290;
var statearr_47298_47310 = state_47290__$1;
(statearr_47298_47310[(2)] = inst_47286);

(statearr_47298_47310[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47291 === (7))){
var inst_47274 = (state_47290[(11)]);
var inst_47280 = (state_47290[(2)]);
var inst_47281 = cljs.core.async.put_BANG_.call(null,out,inst_47280);
var inst_47267 = inst_47274;
var state_47290__$1 = (function (){var statearr_47299 = state_47290;
(statearr_47299[(12)] = inst_47281);

(statearr_47299[(7)] = inst_47267);

return statearr_47299;
})();
var statearr_47300_47311 = state_47290__$1;
(statearr_47300_47311[(2)] = null);

(statearr_47300_47311[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__36422__auto___47305,out))
;
return ((function (switch__36331__auto__,c__36422__auto___47305,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__36332__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__36332__auto____0 = (function (){
var statearr_47301 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47301[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__36332__auto__);

(statearr_47301[(1)] = (1));

return statearr_47301;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__36332__auto____1 = (function (state_47290){
while(true){
var ret_value__36333__auto__ = (function (){try{while(true){
var result__36334__auto__ = switch__36331__auto__.call(null,state_47290);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36334__auto__;
}
break;
}
}catch (e47302){if((e47302 instanceof Object)){
var ex__36335__auto__ = e47302;
var statearr_47303_47312 = state_47290;
(statearr_47303_47312[(5)] = ex__36335__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47290);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47302;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47313 = state_47290;
state_47290 = G__47313;
continue;
} else {
return ret_value__36333__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__36332__auto__ = function(state_47290){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__36332__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__36332__auto____1.call(this,state_47290);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__36332__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__36332__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__36332__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__36332__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__36332__auto__;
})()
;})(switch__36331__auto__,c__36422__auto___47305,out))
})();
var state__36424__auto__ = (function (){var statearr_47304 = f__36423__auto__.call(null);
(statearr_47304[(6)] = c__36422__auto___47305);

return statearr_47304;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36424__auto__);
});})(c__36422__auto___47305,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__47314,opts){
var map__47315 = p__47314;
var map__47315__$1 = ((((!((map__47315 == null)))?(((((map__47315.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47315.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47315):map__47315);
var eval_body = cljs.core.get.call(null,map__47315__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__47315__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__3938__auto__ = eval_body;
if(cljs.core.truth_(and__3938__auto__)){
return typeof eval_body === 'string';
} else {
return and__3938__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e47317){var e = e47317;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5455__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__47318_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__47318_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5455__auto__)){
var file_msg = temp__5455__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__47319){
var vec__47320 = p__47319;
var k = cljs.core.nth.call(null,vec__47320,(0),null);
var v = cljs.core.nth.call(null,vec__47320,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__47323){
var vec__47324 = p__47323;
var k = cljs.core.nth.call(null,vec__47324,(0),null);
var v = cljs.core.nth.call(null,vec__47324,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__47330,p__47331){
var map__47332 = p__47330;
var map__47332__$1 = ((((!((map__47332 == null)))?(((((map__47332.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47332.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47332):map__47332);
var opts = map__47332__$1;
var before_jsload = cljs.core.get.call(null,map__47332__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__47332__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__47332__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__47333 = p__47331;
var map__47333__$1 = ((((!((map__47333 == null)))?(((((map__47333.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47333.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47333):map__47333);
var msg = map__47333__$1;
var files = cljs.core.get.call(null,map__47333__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__47333__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__47333__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__36422__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36422__auto__,map__47332,map__47332__$1,opts,before_jsload,on_jsload,reload_dependents,map__47333,map__47333__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__36423__auto__ = (function (){var switch__36331__auto__ = ((function (c__36422__auto__,map__47332,map__47332__$1,opts,before_jsload,on_jsload,reload_dependents,map__47333,map__47333__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_47487){
var state_val_47488 = (state_47487[(1)]);
if((state_val_47488 === (7))){
var inst_47350 = (state_47487[(7)]);
var inst_47349 = (state_47487[(8)]);
var inst_47347 = (state_47487[(9)]);
var inst_47348 = (state_47487[(10)]);
var inst_47355 = cljs.core._nth.call(null,inst_47348,inst_47350);
var inst_47356 = figwheel.client.file_reloading.eval_body.call(null,inst_47355,opts);
var inst_47357 = (inst_47350 + (1));
var tmp47489 = inst_47349;
var tmp47490 = inst_47347;
var tmp47491 = inst_47348;
var inst_47347__$1 = tmp47490;
var inst_47348__$1 = tmp47491;
var inst_47349__$1 = tmp47489;
var inst_47350__$1 = inst_47357;
var state_47487__$1 = (function (){var statearr_47492 = state_47487;
(statearr_47492[(7)] = inst_47350__$1);

(statearr_47492[(8)] = inst_47349__$1);

(statearr_47492[(9)] = inst_47347__$1);

(statearr_47492[(10)] = inst_47348__$1);

(statearr_47492[(11)] = inst_47356);

return statearr_47492;
})();
var statearr_47493_47576 = state_47487__$1;
(statearr_47493_47576[(2)] = null);

(statearr_47493_47576[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47488 === (20))){
var inst_47390 = (state_47487[(12)]);
var inst_47398 = figwheel.client.file_reloading.sort_files.call(null,inst_47390);
var state_47487__$1 = state_47487;
var statearr_47494_47577 = state_47487__$1;
(statearr_47494_47577[(2)] = inst_47398);

(statearr_47494_47577[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47488 === (27))){
var state_47487__$1 = state_47487;
var statearr_47495_47578 = state_47487__$1;
(statearr_47495_47578[(2)] = null);

(statearr_47495_47578[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47488 === (1))){
var inst_47339 = (state_47487[(13)]);
var inst_47336 = before_jsload.call(null,files);
var inst_47337 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_47338 = (function (){return ((function (inst_47339,inst_47336,inst_47337,state_val_47488,c__36422__auto__,map__47332,map__47332__$1,opts,before_jsload,on_jsload,reload_dependents,map__47333,map__47333__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__47327_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__47327_SHARP_);
});
;})(inst_47339,inst_47336,inst_47337,state_val_47488,c__36422__auto__,map__47332,map__47332__$1,opts,before_jsload,on_jsload,reload_dependents,map__47333,map__47333__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_47339__$1 = cljs.core.filter.call(null,inst_47338,files);
var inst_47340 = cljs.core.not_empty.call(null,inst_47339__$1);
var state_47487__$1 = (function (){var statearr_47496 = state_47487;
(statearr_47496[(14)] = inst_47336);

(statearr_47496[(13)] = inst_47339__$1);

(statearr_47496[(15)] = inst_47337);

return statearr_47496;
})();
if(cljs.core.truth_(inst_47340)){
var statearr_47497_47579 = state_47487__$1;
(statearr_47497_47579[(1)] = (2));

} else {
var statearr_47498_47580 = state_47487__$1;
(statearr_47498_47580[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47488 === (24))){
var state_47487__$1 = state_47487;
var statearr_47499_47581 = state_47487__$1;
(statearr_47499_47581[(2)] = null);

(statearr_47499_47581[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47488 === (39))){
var inst_47440 = (state_47487[(16)]);
var state_47487__$1 = state_47487;
var statearr_47500_47582 = state_47487__$1;
(statearr_47500_47582[(2)] = inst_47440);

(statearr_47500_47582[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47488 === (46))){
var inst_47482 = (state_47487[(2)]);
var state_47487__$1 = state_47487;
var statearr_47501_47583 = state_47487__$1;
(statearr_47501_47583[(2)] = inst_47482);

(statearr_47501_47583[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47488 === (4))){
var inst_47384 = (state_47487[(2)]);
var inst_47385 = cljs.core.List.EMPTY;
var inst_47386 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_47385);
var inst_47387 = (function (){return ((function (inst_47384,inst_47385,inst_47386,state_val_47488,c__36422__auto__,map__47332,map__47332__$1,opts,before_jsload,on_jsload,reload_dependents,map__47333,map__47333__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__47328_SHARP_){
var and__3938__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__47328_SHARP_);
if(cljs.core.truth_(and__3938__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__47328_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__47328_SHARP_))));
} else {
return and__3938__auto__;
}
});
;})(inst_47384,inst_47385,inst_47386,state_val_47488,c__36422__auto__,map__47332,map__47332__$1,opts,before_jsload,on_jsload,reload_dependents,map__47333,map__47333__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_47388 = cljs.core.filter.call(null,inst_47387,files);
var inst_47389 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_47390 = cljs.core.concat.call(null,inst_47388,inst_47389);
var state_47487__$1 = (function (){var statearr_47502 = state_47487;
(statearr_47502[(12)] = inst_47390);

(statearr_47502[(17)] = inst_47384);

(statearr_47502[(18)] = inst_47386);

return statearr_47502;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_47503_47584 = state_47487__$1;
(statearr_47503_47584[(1)] = (16));

} else {
var statearr_47504_47585 = state_47487__$1;
(statearr_47504_47585[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47488 === (15))){
var inst_47374 = (state_47487[(2)]);
var state_47487__$1 = state_47487;
var statearr_47505_47586 = state_47487__$1;
(statearr_47505_47586[(2)] = inst_47374);

(statearr_47505_47586[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47488 === (21))){
var inst_47400 = (state_47487[(19)]);
var inst_47400__$1 = (state_47487[(2)]);
var inst_47401 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_47400__$1);
var state_47487__$1 = (function (){var statearr_47506 = state_47487;
(statearr_47506[(19)] = inst_47400__$1);

return statearr_47506;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47487__$1,(22),inst_47401);
} else {
if((state_val_47488 === (31))){
var inst_47485 = (state_47487[(2)]);
var state_47487__$1 = state_47487;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47487__$1,inst_47485);
} else {
if((state_val_47488 === (32))){
var inst_47440 = (state_47487[(16)]);
var inst_47445 = inst_47440.cljs$lang$protocol_mask$partition0$;
var inst_47446 = (inst_47445 & (64));
var inst_47447 = inst_47440.cljs$core$ISeq$;
var inst_47448 = (cljs.core.PROTOCOL_SENTINEL === inst_47447);
var inst_47449 = ((inst_47446) || (inst_47448));
var state_47487__$1 = state_47487;
if(cljs.core.truth_(inst_47449)){
var statearr_47507_47587 = state_47487__$1;
(statearr_47507_47587[(1)] = (35));

} else {
var statearr_47508_47588 = state_47487__$1;
(statearr_47508_47588[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47488 === (40))){
var inst_47462 = (state_47487[(20)]);
var inst_47461 = (state_47487[(2)]);
var inst_47462__$1 = cljs.core.get.call(null,inst_47461,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_47463 = cljs.core.get.call(null,inst_47461,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_47464 = cljs.core.not_empty.call(null,inst_47462__$1);
var state_47487__$1 = (function (){var statearr_47509 = state_47487;
(statearr_47509[(21)] = inst_47463);

(statearr_47509[(20)] = inst_47462__$1);

return statearr_47509;
})();
if(cljs.core.truth_(inst_47464)){
var statearr_47510_47589 = state_47487__$1;
(statearr_47510_47589[(1)] = (41));

} else {
var statearr_47511_47590 = state_47487__$1;
(statearr_47511_47590[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47488 === (33))){
var state_47487__$1 = state_47487;
var statearr_47512_47591 = state_47487__$1;
(statearr_47512_47591[(2)] = false);

(statearr_47512_47591[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47488 === (13))){
var inst_47360 = (state_47487[(22)]);
var inst_47364 = cljs.core.chunk_first.call(null,inst_47360);
var inst_47365 = cljs.core.chunk_rest.call(null,inst_47360);
var inst_47366 = cljs.core.count.call(null,inst_47364);
var inst_47347 = inst_47365;
var inst_47348 = inst_47364;
var inst_47349 = inst_47366;
var inst_47350 = (0);
var state_47487__$1 = (function (){var statearr_47513 = state_47487;
(statearr_47513[(7)] = inst_47350);

(statearr_47513[(8)] = inst_47349);

(statearr_47513[(9)] = inst_47347);

(statearr_47513[(10)] = inst_47348);

return statearr_47513;
})();
var statearr_47514_47592 = state_47487__$1;
(statearr_47514_47592[(2)] = null);

(statearr_47514_47592[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47488 === (22))){
var inst_47408 = (state_47487[(23)]);
var inst_47400 = (state_47487[(19)]);
var inst_47404 = (state_47487[(24)]);
var inst_47403 = (state_47487[(25)]);
var inst_47403__$1 = (state_47487[(2)]);
var inst_47404__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_47403__$1);
var inst_47405 = (function (){var all_files = inst_47400;
var res_SINGLEQUOTE_ = inst_47403__$1;
var res = inst_47404__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_47408,inst_47400,inst_47404,inst_47403,inst_47403__$1,inst_47404__$1,state_val_47488,c__36422__auto__,map__47332,map__47332__$1,opts,before_jsload,on_jsload,reload_dependents,map__47333,map__47333__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__47329_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__47329_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_47408,inst_47400,inst_47404,inst_47403,inst_47403__$1,inst_47404__$1,state_val_47488,c__36422__auto__,map__47332,map__47332__$1,opts,before_jsload,on_jsload,reload_dependents,map__47333,map__47333__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_47406 = cljs.core.filter.call(null,inst_47405,inst_47403__$1);
var inst_47407 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_47408__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_47407);
var inst_47409 = cljs.core.not_empty.call(null,inst_47408__$1);
var state_47487__$1 = (function (){var statearr_47515 = state_47487;
(statearr_47515[(23)] = inst_47408__$1);

(statearr_47515[(24)] = inst_47404__$1);

(statearr_47515[(25)] = inst_47403__$1);

(statearr_47515[(26)] = inst_47406);

return statearr_47515;
})();
if(cljs.core.truth_(inst_47409)){
var statearr_47516_47593 = state_47487__$1;
(statearr_47516_47593[(1)] = (23));

} else {
var statearr_47517_47594 = state_47487__$1;
(statearr_47517_47594[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47488 === (36))){
var state_47487__$1 = state_47487;
var statearr_47518_47595 = state_47487__$1;
(statearr_47518_47595[(2)] = false);

(statearr_47518_47595[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47488 === (41))){
var inst_47462 = (state_47487[(20)]);
var inst_47466 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_47467 = cljs.core.map.call(null,inst_47466,inst_47462);
var inst_47468 = cljs.core.pr_str.call(null,inst_47467);
var inst_47469 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_47468)].join('');
var inst_47470 = figwheel.client.utils.log.call(null,inst_47469);
var state_47487__$1 = state_47487;
var statearr_47519_47596 = state_47487__$1;
(statearr_47519_47596[(2)] = inst_47470);

(statearr_47519_47596[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47488 === (43))){
var inst_47463 = (state_47487[(21)]);
var inst_47473 = (state_47487[(2)]);
var inst_47474 = cljs.core.not_empty.call(null,inst_47463);
var state_47487__$1 = (function (){var statearr_47520 = state_47487;
(statearr_47520[(27)] = inst_47473);

return statearr_47520;
})();
if(cljs.core.truth_(inst_47474)){
var statearr_47521_47597 = state_47487__$1;
(statearr_47521_47597[(1)] = (44));

} else {
var statearr_47522_47598 = state_47487__$1;
(statearr_47522_47598[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47488 === (29))){
var inst_47408 = (state_47487[(23)]);
var inst_47440 = (state_47487[(16)]);
var inst_47400 = (state_47487[(19)]);
var inst_47404 = (state_47487[(24)]);
var inst_47403 = (state_47487[(25)]);
var inst_47406 = (state_47487[(26)]);
var inst_47436 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_47439 = (function (){var all_files = inst_47400;
var res_SINGLEQUOTE_ = inst_47403;
var res = inst_47404;
var files_not_loaded = inst_47406;
var dependencies_that_loaded = inst_47408;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_47408,inst_47440,inst_47400,inst_47404,inst_47403,inst_47406,inst_47436,state_val_47488,c__36422__auto__,map__47332,map__47332__$1,opts,before_jsload,on_jsload,reload_dependents,map__47333,map__47333__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__47438){
var map__47523 = p__47438;
var map__47523__$1 = ((((!((map__47523 == null)))?(((((map__47523.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47523.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47523):map__47523);
var namespace = cljs.core.get.call(null,map__47523__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_47408,inst_47440,inst_47400,inst_47404,inst_47403,inst_47406,inst_47436,state_val_47488,c__36422__auto__,map__47332,map__47332__$1,opts,before_jsload,on_jsload,reload_dependents,map__47333,map__47333__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_47440__$1 = cljs.core.group_by.call(null,inst_47439,inst_47406);
var inst_47442 = (inst_47440__$1 == null);
var inst_47443 = cljs.core.not.call(null,inst_47442);
var state_47487__$1 = (function (){var statearr_47525 = state_47487;
(statearr_47525[(16)] = inst_47440__$1);

(statearr_47525[(28)] = inst_47436);

return statearr_47525;
})();
if(inst_47443){
var statearr_47526_47599 = state_47487__$1;
(statearr_47526_47599[(1)] = (32));

} else {
var statearr_47527_47600 = state_47487__$1;
(statearr_47527_47600[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47488 === (44))){
var inst_47463 = (state_47487[(21)]);
var inst_47476 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_47463);
var inst_47477 = cljs.core.pr_str.call(null,inst_47476);
var inst_47478 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_47477)].join('');
var inst_47479 = figwheel.client.utils.log.call(null,inst_47478);
var state_47487__$1 = state_47487;
var statearr_47528_47601 = state_47487__$1;
(statearr_47528_47601[(2)] = inst_47479);

(statearr_47528_47601[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47488 === (6))){
var inst_47381 = (state_47487[(2)]);
var state_47487__$1 = state_47487;
var statearr_47529_47602 = state_47487__$1;
(statearr_47529_47602[(2)] = inst_47381);

(statearr_47529_47602[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47488 === (28))){
var inst_47406 = (state_47487[(26)]);
var inst_47433 = (state_47487[(2)]);
var inst_47434 = cljs.core.not_empty.call(null,inst_47406);
var state_47487__$1 = (function (){var statearr_47530 = state_47487;
(statearr_47530[(29)] = inst_47433);

return statearr_47530;
})();
if(cljs.core.truth_(inst_47434)){
var statearr_47531_47603 = state_47487__$1;
(statearr_47531_47603[(1)] = (29));

} else {
var statearr_47532_47604 = state_47487__$1;
(statearr_47532_47604[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47488 === (25))){
var inst_47404 = (state_47487[(24)]);
var inst_47420 = (state_47487[(2)]);
var inst_47421 = cljs.core.not_empty.call(null,inst_47404);
var state_47487__$1 = (function (){var statearr_47533 = state_47487;
(statearr_47533[(30)] = inst_47420);

return statearr_47533;
})();
if(cljs.core.truth_(inst_47421)){
var statearr_47534_47605 = state_47487__$1;
(statearr_47534_47605[(1)] = (26));

} else {
var statearr_47535_47606 = state_47487__$1;
(statearr_47535_47606[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47488 === (34))){
var inst_47456 = (state_47487[(2)]);
var state_47487__$1 = state_47487;
if(cljs.core.truth_(inst_47456)){
var statearr_47536_47607 = state_47487__$1;
(statearr_47536_47607[(1)] = (38));

} else {
var statearr_47537_47608 = state_47487__$1;
(statearr_47537_47608[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47488 === (17))){
var state_47487__$1 = state_47487;
var statearr_47538_47609 = state_47487__$1;
(statearr_47538_47609[(2)] = recompile_dependents);

(statearr_47538_47609[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47488 === (3))){
var state_47487__$1 = state_47487;
var statearr_47539_47610 = state_47487__$1;
(statearr_47539_47610[(2)] = null);

(statearr_47539_47610[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47488 === (12))){
var inst_47377 = (state_47487[(2)]);
var state_47487__$1 = state_47487;
var statearr_47540_47611 = state_47487__$1;
(statearr_47540_47611[(2)] = inst_47377);

(statearr_47540_47611[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47488 === (2))){
var inst_47339 = (state_47487[(13)]);
var inst_47346 = cljs.core.seq.call(null,inst_47339);
var inst_47347 = inst_47346;
var inst_47348 = null;
var inst_47349 = (0);
var inst_47350 = (0);
var state_47487__$1 = (function (){var statearr_47541 = state_47487;
(statearr_47541[(7)] = inst_47350);

(statearr_47541[(8)] = inst_47349);

(statearr_47541[(9)] = inst_47347);

(statearr_47541[(10)] = inst_47348);

return statearr_47541;
})();
var statearr_47542_47612 = state_47487__$1;
(statearr_47542_47612[(2)] = null);

(statearr_47542_47612[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47488 === (23))){
var inst_47408 = (state_47487[(23)]);
var inst_47400 = (state_47487[(19)]);
var inst_47404 = (state_47487[(24)]);
var inst_47403 = (state_47487[(25)]);
var inst_47406 = (state_47487[(26)]);
var inst_47411 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_47413 = (function (){var all_files = inst_47400;
var res_SINGLEQUOTE_ = inst_47403;
var res = inst_47404;
var files_not_loaded = inst_47406;
var dependencies_that_loaded = inst_47408;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_47408,inst_47400,inst_47404,inst_47403,inst_47406,inst_47411,state_val_47488,c__36422__auto__,map__47332,map__47332__$1,opts,before_jsload,on_jsload,reload_dependents,map__47333,map__47333__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__47412){
var map__47543 = p__47412;
var map__47543__$1 = ((((!((map__47543 == null)))?(((((map__47543.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47543.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47543):map__47543);
var request_url = cljs.core.get.call(null,map__47543__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_47408,inst_47400,inst_47404,inst_47403,inst_47406,inst_47411,state_val_47488,c__36422__auto__,map__47332,map__47332__$1,opts,before_jsload,on_jsload,reload_dependents,map__47333,map__47333__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_47414 = cljs.core.reverse.call(null,inst_47408);
var inst_47415 = cljs.core.map.call(null,inst_47413,inst_47414);
var inst_47416 = cljs.core.pr_str.call(null,inst_47415);
var inst_47417 = figwheel.client.utils.log.call(null,inst_47416);
var state_47487__$1 = (function (){var statearr_47545 = state_47487;
(statearr_47545[(31)] = inst_47411);

return statearr_47545;
})();
var statearr_47546_47613 = state_47487__$1;
(statearr_47546_47613[(2)] = inst_47417);

(statearr_47546_47613[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47488 === (35))){
var state_47487__$1 = state_47487;
var statearr_47547_47614 = state_47487__$1;
(statearr_47547_47614[(2)] = true);

(statearr_47547_47614[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47488 === (19))){
var inst_47390 = (state_47487[(12)]);
var inst_47396 = figwheel.client.file_reloading.expand_files.call(null,inst_47390);
var state_47487__$1 = state_47487;
var statearr_47548_47615 = state_47487__$1;
(statearr_47548_47615[(2)] = inst_47396);

(statearr_47548_47615[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47488 === (11))){
var state_47487__$1 = state_47487;
var statearr_47549_47616 = state_47487__$1;
(statearr_47549_47616[(2)] = null);

(statearr_47549_47616[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47488 === (9))){
var inst_47379 = (state_47487[(2)]);
var state_47487__$1 = state_47487;
var statearr_47550_47617 = state_47487__$1;
(statearr_47550_47617[(2)] = inst_47379);

(statearr_47550_47617[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47488 === (5))){
var inst_47350 = (state_47487[(7)]);
var inst_47349 = (state_47487[(8)]);
var inst_47352 = (inst_47350 < inst_47349);
var inst_47353 = inst_47352;
var state_47487__$1 = state_47487;
if(cljs.core.truth_(inst_47353)){
var statearr_47551_47618 = state_47487__$1;
(statearr_47551_47618[(1)] = (7));

} else {
var statearr_47552_47619 = state_47487__$1;
(statearr_47552_47619[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47488 === (14))){
var inst_47360 = (state_47487[(22)]);
var inst_47369 = cljs.core.first.call(null,inst_47360);
var inst_47370 = figwheel.client.file_reloading.eval_body.call(null,inst_47369,opts);
var inst_47371 = cljs.core.next.call(null,inst_47360);
var inst_47347 = inst_47371;
var inst_47348 = null;
var inst_47349 = (0);
var inst_47350 = (0);
var state_47487__$1 = (function (){var statearr_47553 = state_47487;
(statearr_47553[(7)] = inst_47350);

(statearr_47553[(8)] = inst_47349);

(statearr_47553[(9)] = inst_47347);

(statearr_47553[(10)] = inst_47348);

(statearr_47553[(32)] = inst_47370);

return statearr_47553;
})();
var statearr_47554_47620 = state_47487__$1;
(statearr_47554_47620[(2)] = null);

(statearr_47554_47620[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47488 === (45))){
var state_47487__$1 = state_47487;
var statearr_47555_47621 = state_47487__$1;
(statearr_47555_47621[(2)] = null);

(statearr_47555_47621[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47488 === (26))){
var inst_47408 = (state_47487[(23)]);
var inst_47400 = (state_47487[(19)]);
var inst_47404 = (state_47487[(24)]);
var inst_47403 = (state_47487[(25)]);
var inst_47406 = (state_47487[(26)]);
var inst_47423 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_47425 = (function (){var all_files = inst_47400;
var res_SINGLEQUOTE_ = inst_47403;
var res = inst_47404;
var files_not_loaded = inst_47406;
var dependencies_that_loaded = inst_47408;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_47408,inst_47400,inst_47404,inst_47403,inst_47406,inst_47423,state_val_47488,c__36422__auto__,map__47332,map__47332__$1,opts,before_jsload,on_jsload,reload_dependents,map__47333,map__47333__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__47424){
var map__47556 = p__47424;
var map__47556__$1 = ((((!((map__47556 == null)))?(((((map__47556.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47556.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47556):map__47556);
var namespace = cljs.core.get.call(null,map__47556__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__47556__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_47408,inst_47400,inst_47404,inst_47403,inst_47406,inst_47423,state_val_47488,c__36422__auto__,map__47332,map__47332__$1,opts,before_jsload,on_jsload,reload_dependents,map__47333,map__47333__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_47426 = cljs.core.map.call(null,inst_47425,inst_47404);
var inst_47427 = cljs.core.pr_str.call(null,inst_47426);
var inst_47428 = figwheel.client.utils.log.call(null,inst_47427);
var inst_47429 = (function (){var all_files = inst_47400;
var res_SINGLEQUOTE_ = inst_47403;
var res = inst_47404;
var files_not_loaded = inst_47406;
var dependencies_that_loaded = inst_47408;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_47408,inst_47400,inst_47404,inst_47403,inst_47406,inst_47423,inst_47425,inst_47426,inst_47427,inst_47428,state_val_47488,c__36422__auto__,map__47332,map__47332__$1,opts,before_jsload,on_jsload,reload_dependents,map__47333,map__47333__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_47408,inst_47400,inst_47404,inst_47403,inst_47406,inst_47423,inst_47425,inst_47426,inst_47427,inst_47428,state_val_47488,c__36422__auto__,map__47332,map__47332__$1,opts,before_jsload,on_jsload,reload_dependents,map__47333,map__47333__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_47430 = setTimeout(inst_47429,(10));
var state_47487__$1 = (function (){var statearr_47558 = state_47487;
(statearr_47558[(33)] = inst_47428);

(statearr_47558[(34)] = inst_47423);

return statearr_47558;
})();
var statearr_47559_47622 = state_47487__$1;
(statearr_47559_47622[(2)] = inst_47430);

(statearr_47559_47622[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47488 === (16))){
var state_47487__$1 = state_47487;
var statearr_47560_47623 = state_47487__$1;
(statearr_47560_47623[(2)] = reload_dependents);

(statearr_47560_47623[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47488 === (38))){
var inst_47440 = (state_47487[(16)]);
var inst_47458 = cljs.core.apply.call(null,cljs.core.hash_map,inst_47440);
var state_47487__$1 = state_47487;
var statearr_47561_47624 = state_47487__$1;
(statearr_47561_47624[(2)] = inst_47458);

(statearr_47561_47624[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47488 === (30))){
var state_47487__$1 = state_47487;
var statearr_47562_47625 = state_47487__$1;
(statearr_47562_47625[(2)] = null);

(statearr_47562_47625[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47488 === (10))){
var inst_47360 = (state_47487[(22)]);
var inst_47362 = cljs.core.chunked_seq_QMARK_.call(null,inst_47360);
var state_47487__$1 = state_47487;
if(inst_47362){
var statearr_47563_47626 = state_47487__$1;
(statearr_47563_47626[(1)] = (13));

} else {
var statearr_47564_47627 = state_47487__$1;
(statearr_47564_47627[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47488 === (18))){
var inst_47394 = (state_47487[(2)]);
var state_47487__$1 = state_47487;
if(cljs.core.truth_(inst_47394)){
var statearr_47565_47628 = state_47487__$1;
(statearr_47565_47628[(1)] = (19));

} else {
var statearr_47566_47629 = state_47487__$1;
(statearr_47566_47629[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47488 === (42))){
var state_47487__$1 = state_47487;
var statearr_47567_47630 = state_47487__$1;
(statearr_47567_47630[(2)] = null);

(statearr_47567_47630[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47488 === (37))){
var inst_47453 = (state_47487[(2)]);
var state_47487__$1 = state_47487;
var statearr_47568_47631 = state_47487__$1;
(statearr_47568_47631[(2)] = inst_47453);

(statearr_47568_47631[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47488 === (8))){
var inst_47347 = (state_47487[(9)]);
var inst_47360 = (state_47487[(22)]);
var inst_47360__$1 = cljs.core.seq.call(null,inst_47347);
var state_47487__$1 = (function (){var statearr_47569 = state_47487;
(statearr_47569[(22)] = inst_47360__$1);

return statearr_47569;
})();
if(inst_47360__$1){
var statearr_47570_47632 = state_47487__$1;
(statearr_47570_47632[(1)] = (10));

} else {
var statearr_47571_47633 = state_47487__$1;
(statearr_47571_47633[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__36422__auto__,map__47332,map__47332__$1,opts,before_jsload,on_jsload,reload_dependents,map__47333,map__47333__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__36331__auto__,c__36422__auto__,map__47332,map__47332__$1,opts,before_jsload,on_jsload,reload_dependents,map__47333,map__47333__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__36332__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__36332__auto____0 = (function (){
var statearr_47572 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47572[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__36332__auto__);

(statearr_47572[(1)] = (1));

return statearr_47572;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__36332__auto____1 = (function (state_47487){
while(true){
var ret_value__36333__auto__ = (function (){try{while(true){
var result__36334__auto__ = switch__36331__auto__.call(null,state_47487);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36334__auto__;
}
break;
}
}catch (e47573){if((e47573 instanceof Object)){
var ex__36335__auto__ = e47573;
var statearr_47574_47634 = state_47487;
(statearr_47574_47634[(5)] = ex__36335__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47487);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47573;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47635 = state_47487;
state_47487 = G__47635;
continue;
} else {
return ret_value__36333__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__36332__auto__ = function(state_47487){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__36332__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__36332__auto____1.call(this,state_47487);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__36332__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__36332__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__36332__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__36332__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__36332__auto__;
})()
;})(switch__36331__auto__,c__36422__auto__,map__47332,map__47332__$1,opts,before_jsload,on_jsload,reload_dependents,map__47333,map__47333__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__36424__auto__ = (function (){var statearr_47575 = f__36423__auto__.call(null);
(statearr_47575[(6)] = c__36422__auto__);

return statearr_47575;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36424__auto__);
});})(c__36422__auto__,map__47332,map__47332__$1,opts,before_jsload,on_jsload,reload_dependents,map__47333,map__47333__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__36422__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__47638,link){
var map__47639 = p__47638;
var map__47639__$1 = ((((!((map__47639 == null)))?(((((map__47639.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47639.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47639):map__47639);
var file = cljs.core.get.call(null,map__47639__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__47639,map__47639__$1,file){
return (function (p1__47636_SHARP_,p2__47637_SHARP_){
if(cljs.core._EQ_.call(null,p1__47636_SHARP_,p2__47637_SHARP_)){
return p1__47636_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__47639,map__47639__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__47642){
var map__47643 = p__47642;
var map__47643__$1 = ((((!((map__47643 == null)))?(((((map__47643.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47643.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47643):map__47643);
var match_length = cljs.core.get.call(null,map__47643__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__47643__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__47641_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__47641_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5457__auto__)){
var res = temp__5457__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__47645_SHARP_,p2__47646_SHARP_){
return cljs.core.assoc.call(null,p1__47645_SHARP_,cljs.core.get.call(null,p2__47646_SHARP_,key),p2__47646_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5455__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5455__auto__)){
var link = temp__5455__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5455__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5455__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_47647 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_47647);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_47647);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__47648,p__47649){
var map__47650 = p__47648;
var map__47650__$1 = ((((!((map__47650 == null)))?(((((map__47650.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47650.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47650):map__47650);
var on_cssload = cljs.core.get.call(null,map__47650__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__47651 = p__47649;
var map__47651__$1 = ((((!((map__47651 == null)))?(((((map__47651.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47651.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47651):map__47651);
var files_msg = map__47651__$1;
var files = cljs.core.get.call(null,map__47651__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__5457__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5457__auto__)){
var f_datas = temp__5457__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1545318905730
