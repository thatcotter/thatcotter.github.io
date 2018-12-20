// Compiled by ClojureScript 1.10.339 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.16";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && (!((JSON.stringify == null)))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e48548){if((e48548 instanceof Error)){
var e = e48548;
return "Error: Unable to stringify";
} else {
throw e48548;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__48551 = arguments.length;
switch (G__48551) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__48549_SHARP_){
if(typeof p1__48549_SHARP_ === 'string'){
return p1__48549_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__48549_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4534__auto__ = [];
var len__4531__auto___48554 = arguments.length;
var i__4532__auto___48555 = (0);
while(true){
if((i__4532__auto___48555 < len__4531__auto___48554)){
args__4534__auto__.push((arguments[i__4532__auto___48555]));

var G__48556 = (i__4532__auto___48555 + (1));
i__4532__auto___48555 = G__48556;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq48553){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48553));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4534__auto__ = [];
var len__4531__auto___48558 = arguments.length;
var i__4532__auto___48559 = (0);
while(true){
if((i__4532__auto___48559 < len__4531__auto___48558)){
args__4534__auto__.push((arguments[i__4532__auto___48559]));

var G__48560 = (i__4532__auto___48559 + (1));
i__4532__auto___48559 = G__48560;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq48557){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48557));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__48561){
var map__48562 = p__48561;
var map__48562__$1 = ((((!((map__48562 == null)))?(((((map__48562.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48562.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48562):map__48562);
var message = cljs.core.get.call(null,map__48562__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__48562__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__3949__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__3938__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__3938__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__3938__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__36422__auto___48641 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36422__auto___48641,ch){
return (function (){
var f__36423__auto__ = (function (){var switch__36331__auto__ = ((function (c__36422__auto___48641,ch){
return (function (state_48613){
var state_val_48614 = (state_48613[(1)]);
if((state_val_48614 === (7))){
var inst_48609 = (state_48613[(2)]);
var state_48613__$1 = state_48613;
var statearr_48615_48642 = state_48613__$1;
(statearr_48615_48642[(2)] = inst_48609);

(statearr_48615_48642[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48614 === (1))){
var state_48613__$1 = state_48613;
var statearr_48616_48643 = state_48613__$1;
(statearr_48616_48643[(2)] = null);

(statearr_48616_48643[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48614 === (4))){
var inst_48566 = (state_48613[(7)]);
var inst_48566__$1 = (state_48613[(2)]);
var state_48613__$1 = (function (){var statearr_48617 = state_48613;
(statearr_48617[(7)] = inst_48566__$1);

return statearr_48617;
})();
if(cljs.core.truth_(inst_48566__$1)){
var statearr_48618_48644 = state_48613__$1;
(statearr_48618_48644[(1)] = (5));

} else {
var statearr_48619_48645 = state_48613__$1;
(statearr_48619_48645[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48614 === (15))){
var inst_48573 = (state_48613[(8)]);
var inst_48588 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_48573);
var inst_48589 = cljs.core.first.call(null,inst_48588);
var inst_48590 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_48589);
var inst_48591 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_48590)].join('');
var inst_48592 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_48591);
var state_48613__$1 = state_48613;
var statearr_48620_48646 = state_48613__$1;
(statearr_48620_48646[(2)] = inst_48592);

(statearr_48620_48646[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48614 === (13))){
var inst_48597 = (state_48613[(2)]);
var state_48613__$1 = state_48613;
var statearr_48621_48647 = state_48613__$1;
(statearr_48621_48647[(2)] = inst_48597);

(statearr_48621_48647[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48614 === (6))){
var state_48613__$1 = state_48613;
var statearr_48622_48648 = state_48613__$1;
(statearr_48622_48648[(2)] = null);

(statearr_48622_48648[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48614 === (17))){
var inst_48595 = (state_48613[(2)]);
var state_48613__$1 = state_48613;
var statearr_48623_48649 = state_48613__$1;
(statearr_48623_48649[(2)] = inst_48595);

(statearr_48623_48649[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48614 === (3))){
var inst_48611 = (state_48613[(2)]);
var state_48613__$1 = state_48613;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48613__$1,inst_48611);
} else {
if((state_val_48614 === (12))){
var inst_48572 = (state_48613[(9)]);
var inst_48586 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_48572,opts);
var state_48613__$1 = state_48613;
if(cljs.core.truth_(inst_48586)){
var statearr_48624_48650 = state_48613__$1;
(statearr_48624_48650[(1)] = (15));

} else {
var statearr_48625_48651 = state_48613__$1;
(statearr_48625_48651[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48614 === (2))){
var state_48613__$1 = state_48613;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48613__$1,(4),ch);
} else {
if((state_val_48614 === (11))){
var inst_48573 = (state_48613[(8)]);
var inst_48578 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_48579 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_48573);
var inst_48580 = cljs.core.async.timeout.call(null,(1000));
var inst_48581 = [inst_48579,inst_48580];
var inst_48582 = (new cljs.core.PersistentVector(null,2,(5),inst_48578,inst_48581,null));
var state_48613__$1 = state_48613;
return cljs.core.async.ioc_alts_BANG_.call(null,state_48613__$1,(14),inst_48582);
} else {
if((state_val_48614 === (9))){
var inst_48573 = (state_48613[(8)]);
var inst_48599 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_48600 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_48573);
var inst_48601 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_48600);
var inst_48602 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_48601)].join('');
var inst_48603 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_48602);
var state_48613__$1 = (function (){var statearr_48626 = state_48613;
(statearr_48626[(10)] = inst_48599);

return statearr_48626;
})();
var statearr_48627_48652 = state_48613__$1;
(statearr_48627_48652[(2)] = inst_48603);

(statearr_48627_48652[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48614 === (5))){
var inst_48566 = (state_48613[(7)]);
var inst_48568 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_48569 = (new cljs.core.PersistentArrayMap(null,2,inst_48568,null));
var inst_48570 = (new cljs.core.PersistentHashSet(null,inst_48569,null));
var inst_48571 = figwheel.client.focus_msgs.call(null,inst_48570,inst_48566);
var inst_48572 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_48571);
var inst_48573 = cljs.core.first.call(null,inst_48571);
var inst_48574 = figwheel.client.autoload_QMARK_.call(null);
var state_48613__$1 = (function (){var statearr_48628 = state_48613;
(statearr_48628[(8)] = inst_48573);

(statearr_48628[(9)] = inst_48572);

return statearr_48628;
})();
if(cljs.core.truth_(inst_48574)){
var statearr_48629_48653 = state_48613__$1;
(statearr_48629_48653[(1)] = (8));

} else {
var statearr_48630_48654 = state_48613__$1;
(statearr_48630_48654[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48614 === (14))){
var inst_48584 = (state_48613[(2)]);
var state_48613__$1 = state_48613;
var statearr_48631_48655 = state_48613__$1;
(statearr_48631_48655[(2)] = inst_48584);

(statearr_48631_48655[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48614 === (16))){
var state_48613__$1 = state_48613;
var statearr_48632_48656 = state_48613__$1;
(statearr_48632_48656[(2)] = null);

(statearr_48632_48656[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48614 === (10))){
var inst_48605 = (state_48613[(2)]);
var state_48613__$1 = (function (){var statearr_48633 = state_48613;
(statearr_48633[(11)] = inst_48605);

return statearr_48633;
})();
var statearr_48634_48657 = state_48613__$1;
(statearr_48634_48657[(2)] = null);

(statearr_48634_48657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48614 === (8))){
var inst_48572 = (state_48613[(9)]);
var inst_48576 = figwheel.client.reload_file_state_QMARK_.call(null,inst_48572,opts);
var state_48613__$1 = state_48613;
if(cljs.core.truth_(inst_48576)){
var statearr_48635_48658 = state_48613__$1;
(statearr_48635_48658[(1)] = (11));

} else {
var statearr_48636_48659 = state_48613__$1;
(statearr_48636_48659[(1)] = (12));

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
});})(c__36422__auto___48641,ch))
;
return ((function (switch__36331__auto__,c__36422__auto___48641,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__36332__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__36332__auto____0 = (function (){
var statearr_48637 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48637[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__36332__auto__);

(statearr_48637[(1)] = (1));

return statearr_48637;
});
var figwheel$client$file_reloader_plugin_$_state_machine__36332__auto____1 = (function (state_48613){
while(true){
var ret_value__36333__auto__ = (function (){try{while(true){
var result__36334__auto__ = switch__36331__auto__.call(null,state_48613);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36334__auto__;
}
break;
}
}catch (e48638){if((e48638 instanceof Object)){
var ex__36335__auto__ = e48638;
var statearr_48639_48660 = state_48613;
(statearr_48639_48660[(5)] = ex__36335__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48613);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48638;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48661 = state_48613;
state_48613 = G__48661;
continue;
} else {
return ret_value__36333__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__36332__auto__ = function(state_48613){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__36332__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__36332__auto____1.call(this,state_48613);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__36332__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__36332__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__36332__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__36332__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__36332__auto__;
})()
;})(switch__36331__auto__,c__36422__auto___48641,ch))
})();
var state__36424__auto__ = (function (){var statearr_48640 = f__36423__auto__.call(null);
(statearr_48640[(6)] = c__36422__auto___48641);

return statearr_48640;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36424__auto__);
});})(c__36422__auto___48641,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__48662_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__48662_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_48666 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_48666){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_48664 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_48665 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_48664,_STAR_print_fn_STAR_48665,sb,base_path_48666){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR_48664,_STAR_print_fn_STAR_48665,sb,base_path_48666))
;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_48665;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_48664;
}}catch (e48663){if((e48663 instanceof Error)){
var e = e48663;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_48666], null));
} else {
var e = e48663;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_48666))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__48667){
var map__48668 = p__48667;
var map__48668__$1 = ((((!((map__48668 == null)))?(((((map__48668.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48668.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48668):map__48668);
var opts = map__48668__$1;
var build_id = cljs.core.get.call(null,map__48668__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__48668,map__48668__$1,opts,build_id){
return (function (p__48670){
var vec__48671 = p__48670;
var seq__48672 = cljs.core.seq.call(null,vec__48671);
var first__48673 = cljs.core.first.call(null,seq__48672);
var seq__48672__$1 = cljs.core.next.call(null,seq__48672);
var map__48674 = first__48673;
var map__48674__$1 = ((((!((map__48674 == null)))?(((((map__48674.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48674.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48674):map__48674);
var msg = map__48674__$1;
var msg_name = cljs.core.get.call(null,map__48674__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__48672__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__48671,seq__48672,first__48673,seq__48672__$1,map__48674,map__48674__$1,msg,msg_name,_,map__48668,map__48668__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__48671,seq__48672,first__48673,seq__48672__$1,map__48674,map__48674__$1,msg,msg_name,_,map__48668,map__48668__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__48668,map__48668__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__48676){
var vec__48677 = p__48676;
var seq__48678 = cljs.core.seq.call(null,vec__48677);
var first__48679 = cljs.core.first.call(null,seq__48678);
var seq__48678__$1 = cljs.core.next.call(null,seq__48678);
var map__48680 = first__48679;
var map__48680__$1 = ((((!((map__48680 == null)))?(((((map__48680.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48680.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48680):map__48680);
var msg = map__48680__$1;
var msg_name = cljs.core.get.call(null,map__48680__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__48678__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__48682){
var map__48683 = p__48682;
var map__48683__$1 = ((((!((map__48683 == null)))?(((((map__48683.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48683.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48683):map__48683);
var on_compile_warning = cljs.core.get.call(null,map__48683__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__48683__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__48683,map__48683__$1,on_compile_warning,on_compile_fail){
return (function (p__48685){
var vec__48686 = p__48685;
var seq__48687 = cljs.core.seq.call(null,vec__48686);
var first__48688 = cljs.core.first.call(null,seq__48687);
var seq__48687__$1 = cljs.core.next.call(null,seq__48687);
var map__48689 = first__48688;
var map__48689__$1 = ((((!((map__48689 == null)))?(((((map__48689.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48689.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48689):map__48689);
var msg = map__48689__$1;
var msg_name = cljs.core.get.call(null,map__48689__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__48687__$1;
var pred__48691 = cljs.core._EQ_;
var expr__48692 = msg_name;
if(cljs.core.truth_(pred__48691.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__48692))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__48691.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__48692))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__48683,map__48683__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__36422__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36422__auto__,msg_hist,msg_names,msg){
return (function (){
var f__36423__auto__ = (function (){var switch__36331__auto__ = ((function (c__36422__auto__,msg_hist,msg_names,msg){
return (function (state_48781){
var state_val_48782 = (state_48781[(1)]);
if((state_val_48782 === (7))){
var inst_48701 = (state_48781[(2)]);
var state_48781__$1 = state_48781;
if(cljs.core.truth_(inst_48701)){
var statearr_48783_48830 = state_48781__$1;
(statearr_48783_48830[(1)] = (8));

} else {
var statearr_48784_48831 = state_48781__$1;
(statearr_48784_48831[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48782 === (20))){
var inst_48775 = (state_48781[(2)]);
var state_48781__$1 = state_48781;
var statearr_48785_48832 = state_48781__$1;
(statearr_48785_48832[(2)] = inst_48775);

(statearr_48785_48832[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48782 === (27))){
var inst_48771 = (state_48781[(2)]);
var state_48781__$1 = state_48781;
var statearr_48786_48833 = state_48781__$1;
(statearr_48786_48833[(2)] = inst_48771);

(statearr_48786_48833[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48782 === (1))){
var inst_48694 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_48781__$1 = state_48781;
if(cljs.core.truth_(inst_48694)){
var statearr_48787_48834 = state_48781__$1;
(statearr_48787_48834[(1)] = (2));

} else {
var statearr_48788_48835 = state_48781__$1;
(statearr_48788_48835[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48782 === (24))){
var inst_48773 = (state_48781[(2)]);
var state_48781__$1 = state_48781;
var statearr_48789_48836 = state_48781__$1;
(statearr_48789_48836[(2)] = inst_48773);

(statearr_48789_48836[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48782 === (4))){
var inst_48779 = (state_48781[(2)]);
var state_48781__$1 = state_48781;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48781__$1,inst_48779);
} else {
if((state_val_48782 === (15))){
var inst_48777 = (state_48781[(2)]);
var state_48781__$1 = state_48781;
var statearr_48790_48837 = state_48781__$1;
(statearr_48790_48837[(2)] = inst_48777);

(statearr_48790_48837[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48782 === (21))){
var inst_48730 = (state_48781[(2)]);
var inst_48731 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_48732 = figwheel.client.auto_jump_to_error.call(null,opts,inst_48731);
var state_48781__$1 = (function (){var statearr_48791 = state_48781;
(statearr_48791[(7)] = inst_48730);

return statearr_48791;
})();
var statearr_48792_48838 = state_48781__$1;
(statearr_48792_48838[(2)] = inst_48732);

(statearr_48792_48838[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48782 === (31))){
var inst_48760 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_48781__$1 = state_48781;
if(cljs.core.truth_(inst_48760)){
var statearr_48793_48839 = state_48781__$1;
(statearr_48793_48839[(1)] = (34));

} else {
var statearr_48794_48840 = state_48781__$1;
(statearr_48794_48840[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48782 === (32))){
var inst_48769 = (state_48781[(2)]);
var state_48781__$1 = state_48781;
var statearr_48795_48841 = state_48781__$1;
(statearr_48795_48841[(2)] = inst_48769);

(statearr_48795_48841[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48782 === (33))){
var inst_48756 = (state_48781[(2)]);
var inst_48757 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_48758 = figwheel.client.auto_jump_to_error.call(null,opts,inst_48757);
var state_48781__$1 = (function (){var statearr_48796 = state_48781;
(statearr_48796[(8)] = inst_48756);

return statearr_48796;
})();
var statearr_48797_48842 = state_48781__$1;
(statearr_48797_48842[(2)] = inst_48758);

(statearr_48797_48842[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48782 === (13))){
var inst_48715 = figwheel.client.heads_up.clear.call(null);
var state_48781__$1 = state_48781;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48781__$1,(16),inst_48715);
} else {
if((state_val_48782 === (22))){
var inst_48736 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_48737 = figwheel.client.heads_up.append_warning_message.call(null,inst_48736);
var state_48781__$1 = state_48781;
var statearr_48798_48843 = state_48781__$1;
(statearr_48798_48843[(2)] = inst_48737);

(statearr_48798_48843[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48782 === (36))){
var inst_48767 = (state_48781[(2)]);
var state_48781__$1 = state_48781;
var statearr_48799_48844 = state_48781__$1;
(statearr_48799_48844[(2)] = inst_48767);

(statearr_48799_48844[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48782 === (29))){
var inst_48747 = (state_48781[(2)]);
var inst_48748 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_48749 = figwheel.client.auto_jump_to_error.call(null,opts,inst_48748);
var state_48781__$1 = (function (){var statearr_48800 = state_48781;
(statearr_48800[(9)] = inst_48747);

return statearr_48800;
})();
var statearr_48801_48845 = state_48781__$1;
(statearr_48801_48845[(2)] = inst_48749);

(statearr_48801_48845[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48782 === (6))){
var inst_48696 = (state_48781[(10)]);
var state_48781__$1 = state_48781;
var statearr_48802_48846 = state_48781__$1;
(statearr_48802_48846[(2)] = inst_48696);

(statearr_48802_48846[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48782 === (28))){
var inst_48743 = (state_48781[(2)]);
var inst_48744 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_48745 = figwheel.client.heads_up.display_warning.call(null,inst_48744);
var state_48781__$1 = (function (){var statearr_48803 = state_48781;
(statearr_48803[(11)] = inst_48743);

return statearr_48803;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48781__$1,(29),inst_48745);
} else {
if((state_val_48782 === (25))){
var inst_48741 = figwheel.client.heads_up.clear.call(null);
var state_48781__$1 = state_48781;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48781__$1,(28),inst_48741);
} else {
if((state_val_48782 === (34))){
var inst_48762 = figwheel.client.heads_up.flash_loaded.call(null);
var state_48781__$1 = state_48781;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48781__$1,(37),inst_48762);
} else {
if((state_val_48782 === (17))){
var inst_48721 = (state_48781[(2)]);
var inst_48722 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_48723 = figwheel.client.auto_jump_to_error.call(null,opts,inst_48722);
var state_48781__$1 = (function (){var statearr_48804 = state_48781;
(statearr_48804[(12)] = inst_48721);

return statearr_48804;
})();
var statearr_48805_48847 = state_48781__$1;
(statearr_48805_48847[(2)] = inst_48723);

(statearr_48805_48847[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48782 === (3))){
var inst_48713 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_48781__$1 = state_48781;
if(cljs.core.truth_(inst_48713)){
var statearr_48806_48848 = state_48781__$1;
(statearr_48806_48848[(1)] = (13));

} else {
var statearr_48807_48849 = state_48781__$1;
(statearr_48807_48849[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48782 === (12))){
var inst_48709 = (state_48781[(2)]);
var state_48781__$1 = state_48781;
var statearr_48808_48850 = state_48781__$1;
(statearr_48808_48850[(2)] = inst_48709);

(statearr_48808_48850[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48782 === (2))){
var inst_48696 = (state_48781[(10)]);
var inst_48696__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_48781__$1 = (function (){var statearr_48809 = state_48781;
(statearr_48809[(10)] = inst_48696__$1);

return statearr_48809;
})();
if(cljs.core.truth_(inst_48696__$1)){
var statearr_48810_48851 = state_48781__$1;
(statearr_48810_48851[(1)] = (5));

} else {
var statearr_48811_48852 = state_48781__$1;
(statearr_48811_48852[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48782 === (23))){
var inst_48739 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_48781__$1 = state_48781;
if(cljs.core.truth_(inst_48739)){
var statearr_48812_48853 = state_48781__$1;
(statearr_48812_48853[(1)] = (25));

} else {
var statearr_48813_48854 = state_48781__$1;
(statearr_48813_48854[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48782 === (35))){
var state_48781__$1 = state_48781;
var statearr_48814_48855 = state_48781__$1;
(statearr_48814_48855[(2)] = null);

(statearr_48814_48855[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48782 === (19))){
var inst_48734 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_48781__$1 = state_48781;
if(cljs.core.truth_(inst_48734)){
var statearr_48815_48856 = state_48781__$1;
(statearr_48815_48856[(1)] = (22));

} else {
var statearr_48816_48857 = state_48781__$1;
(statearr_48816_48857[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48782 === (11))){
var inst_48705 = (state_48781[(2)]);
var state_48781__$1 = state_48781;
var statearr_48817_48858 = state_48781__$1;
(statearr_48817_48858[(2)] = inst_48705);

(statearr_48817_48858[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48782 === (9))){
var inst_48707 = figwheel.client.heads_up.clear.call(null);
var state_48781__$1 = state_48781;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48781__$1,(12),inst_48707);
} else {
if((state_val_48782 === (5))){
var inst_48698 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_48781__$1 = state_48781;
var statearr_48818_48859 = state_48781__$1;
(statearr_48818_48859[(2)] = inst_48698);

(statearr_48818_48859[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48782 === (14))){
var inst_48725 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_48781__$1 = state_48781;
if(cljs.core.truth_(inst_48725)){
var statearr_48819_48860 = state_48781__$1;
(statearr_48819_48860[(1)] = (18));

} else {
var statearr_48820_48861 = state_48781__$1;
(statearr_48820_48861[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48782 === (26))){
var inst_48751 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_48781__$1 = state_48781;
if(cljs.core.truth_(inst_48751)){
var statearr_48821_48862 = state_48781__$1;
(statearr_48821_48862[(1)] = (30));

} else {
var statearr_48822_48863 = state_48781__$1;
(statearr_48822_48863[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48782 === (16))){
var inst_48717 = (state_48781[(2)]);
var inst_48718 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_48719 = figwheel.client.heads_up.display_exception.call(null,inst_48718);
var state_48781__$1 = (function (){var statearr_48823 = state_48781;
(statearr_48823[(13)] = inst_48717);

return statearr_48823;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48781__$1,(17),inst_48719);
} else {
if((state_val_48782 === (30))){
var inst_48753 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_48754 = figwheel.client.heads_up.display_warning.call(null,inst_48753);
var state_48781__$1 = state_48781;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48781__$1,(33),inst_48754);
} else {
if((state_val_48782 === (10))){
var inst_48711 = (state_48781[(2)]);
var state_48781__$1 = state_48781;
var statearr_48824_48864 = state_48781__$1;
(statearr_48824_48864[(2)] = inst_48711);

(statearr_48824_48864[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48782 === (18))){
var inst_48727 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_48728 = figwheel.client.heads_up.display_exception.call(null,inst_48727);
var state_48781__$1 = state_48781;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48781__$1,(21),inst_48728);
} else {
if((state_val_48782 === (37))){
var inst_48764 = (state_48781[(2)]);
var state_48781__$1 = state_48781;
var statearr_48825_48865 = state_48781__$1;
(statearr_48825_48865[(2)] = inst_48764);

(statearr_48825_48865[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48782 === (8))){
var inst_48703 = figwheel.client.heads_up.flash_loaded.call(null);
var state_48781__$1 = state_48781;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48781__$1,(11),inst_48703);
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
});})(c__36422__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__36331__auto__,c__36422__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__36332__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__36332__auto____0 = (function (){
var statearr_48826 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48826[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__36332__auto__);

(statearr_48826[(1)] = (1));

return statearr_48826;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__36332__auto____1 = (function (state_48781){
while(true){
var ret_value__36333__auto__ = (function (){try{while(true){
var result__36334__auto__ = switch__36331__auto__.call(null,state_48781);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36334__auto__;
}
break;
}
}catch (e48827){if((e48827 instanceof Object)){
var ex__36335__auto__ = e48827;
var statearr_48828_48866 = state_48781;
(statearr_48828_48866[(5)] = ex__36335__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48781);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48827;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48867 = state_48781;
state_48781 = G__48867;
continue;
} else {
return ret_value__36333__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__36332__auto__ = function(state_48781){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__36332__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__36332__auto____1.call(this,state_48781);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__36332__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__36332__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__36332__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__36332__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__36332__auto__;
})()
;})(switch__36331__auto__,c__36422__auto__,msg_hist,msg_names,msg))
})();
var state__36424__auto__ = (function (){var statearr_48829 = f__36423__auto__.call(null);
(statearr_48829[(6)] = c__36422__auto__);

return statearr_48829;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36424__auto__);
});})(c__36422__auto__,msg_hist,msg_names,msg))
);

return c__36422__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__36422__auto___48896 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36422__auto___48896,ch){
return (function (){
var f__36423__auto__ = (function (){var switch__36331__auto__ = ((function (c__36422__auto___48896,ch){
return (function (state_48882){
var state_val_48883 = (state_48882[(1)]);
if((state_val_48883 === (1))){
var state_48882__$1 = state_48882;
var statearr_48884_48897 = state_48882__$1;
(statearr_48884_48897[(2)] = null);

(statearr_48884_48897[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48883 === (2))){
var state_48882__$1 = state_48882;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48882__$1,(4),ch);
} else {
if((state_val_48883 === (3))){
var inst_48880 = (state_48882[(2)]);
var state_48882__$1 = state_48882;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48882__$1,inst_48880);
} else {
if((state_val_48883 === (4))){
var inst_48870 = (state_48882[(7)]);
var inst_48870__$1 = (state_48882[(2)]);
var state_48882__$1 = (function (){var statearr_48885 = state_48882;
(statearr_48885[(7)] = inst_48870__$1);

return statearr_48885;
})();
if(cljs.core.truth_(inst_48870__$1)){
var statearr_48886_48898 = state_48882__$1;
(statearr_48886_48898[(1)] = (5));

} else {
var statearr_48887_48899 = state_48882__$1;
(statearr_48887_48899[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48883 === (5))){
var inst_48870 = (state_48882[(7)]);
var inst_48872 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_48870);
var state_48882__$1 = state_48882;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48882__$1,(8),inst_48872);
} else {
if((state_val_48883 === (6))){
var state_48882__$1 = state_48882;
var statearr_48888_48900 = state_48882__$1;
(statearr_48888_48900[(2)] = null);

(statearr_48888_48900[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48883 === (7))){
var inst_48878 = (state_48882[(2)]);
var state_48882__$1 = state_48882;
var statearr_48889_48901 = state_48882__$1;
(statearr_48889_48901[(2)] = inst_48878);

(statearr_48889_48901[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48883 === (8))){
var inst_48874 = (state_48882[(2)]);
var state_48882__$1 = (function (){var statearr_48890 = state_48882;
(statearr_48890[(8)] = inst_48874);

return statearr_48890;
})();
var statearr_48891_48902 = state_48882__$1;
(statearr_48891_48902[(2)] = null);

(statearr_48891_48902[(1)] = (2));


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
});})(c__36422__auto___48896,ch))
;
return ((function (switch__36331__auto__,c__36422__auto___48896,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__36332__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__36332__auto____0 = (function (){
var statearr_48892 = [null,null,null,null,null,null,null,null,null];
(statearr_48892[(0)] = figwheel$client$heads_up_plugin_$_state_machine__36332__auto__);

(statearr_48892[(1)] = (1));

return statearr_48892;
});
var figwheel$client$heads_up_plugin_$_state_machine__36332__auto____1 = (function (state_48882){
while(true){
var ret_value__36333__auto__ = (function (){try{while(true){
var result__36334__auto__ = switch__36331__auto__.call(null,state_48882);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36334__auto__;
}
break;
}
}catch (e48893){if((e48893 instanceof Object)){
var ex__36335__auto__ = e48893;
var statearr_48894_48903 = state_48882;
(statearr_48894_48903[(5)] = ex__36335__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48882);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48893;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48904 = state_48882;
state_48882 = G__48904;
continue;
} else {
return ret_value__36333__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__36332__auto__ = function(state_48882){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__36332__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__36332__auto____1.call(this,state_48882);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__36332__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__36332__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__36332__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__36332__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__36332__auto__;
})()
;})(switch__36331__auto__,c__36422__auto___48896,ch))
})();
var state__36424__auto__ = (function (){var statearr_48895 = f__36423__auto__.call(null);
(statearr_48895[(6)] = c__36422__auto___48896);

return statearr_48895;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36424__auto__);
});})(c__36422__auto___48896,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__36422__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36422__auto__){
return (function (){
var f__36423__auto__ = (function (){var switch__36331__auto__ = ((function (c__36422__auto__){
return (function (state_48910){
var state_val_48911 = (state_48910[(1)]);
if((state_val_48911 === (1))){
var inst_48905 = cljs.core.async.timeout.call(null,(3000));
var state_48910__$1 = state_48910;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48910__$1,(2),inst_48905);
} else {
if((state_val_48911 === (2))){
var inst_48907 = (state_48910[(2)]);
var inst_48908 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_48910__$1 = (function (){var statearr_48912 = state_48910;
(statearr_48912[(7)] = inst_48907);

return statearr_48912;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48910__$1,inst_48908);
} else {
return null;
}
}
});})(c__36422__auto__))
;
return ((function (switch__36331__auto__,c__36422__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__36332__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__36332__auto____0 = (function (){
var statearr_48913 = [null,null,null,null,null,null,null,null];
(statearr_48913[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__36332__auto__);

(statearr_48913[(1)] = (1));

return statearr_48913;
});
var figwheel$client$enforce_project_plugin_$_state_machine__36332__auto____1 = (function (state_48910){
while(true){
var ret_value__36333__auto__ = (function (){try{while(true){
var result__36334__auto__ = switch__36331__auto__.call(null,state_48910);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36334__auto__;
}
break;
}
}catch (e48914){if((e48914 instanceof Object)){
var ex__36335__auto__ = e48914;
var statearr_48915_48917 = state_48910;
(statearr_48915_48917[(5)] = ex__36335__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48910);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48914;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48918 = state_48910;
state_48910 = G__48918;
continue;
} else {
return ret_value__36333__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__36332__auto__ = function(state_48910){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__36332__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__36332__auto____1.call(this,state_48910);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__36332__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__36332__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__36332__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__36332__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__36332__auto__;
})()
;})(switch__36331__auto__,c__36422__auto__))
})();
var state__36424__auto__ = (function (){var statearr_48916 = f__36423__auto__.call(null);
(statearr_48916[(6)] = c__36422__auto__);

return statearr_48916;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36424__auto__);
});})(c__36422__auto__))
);

return c__36422__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5457__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5457__auto__)){
var figwheel_version = temp__5457__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__36422__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36422__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__36423__auto__ = (function (){var switch__36331__auto__ = ((function (c__36422__auto__,figwheel_version,temp__5457__auto__){
return (function (state_48925){
var state_val_48926 = (state_48925[(1)]);
if((state_val_48926 === (1))){
var inst_48919 = cljs.core.async.timeout.call(null,(2000));
var state_48925__$1 = state_48925;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48925__$1,(2),inst_48919);
} else {
if((state_val_48926 === (2))){
var inst_48921 = (state_48925[(2)]);
var inst_48922 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_48923 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_48922);
var state_48925__$1 = (function (){var statearr_48927 = state_48925;
(statearr_48927[(7)] = inst_48921);

return statearr_48927;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48925__$1,inst_48923);
} else {
return null;
}
}
});})(c__36422__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__36331__auto__,c__36422__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__36332__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__36332__auto____0 = (function (){
var statearr_48928 = [null,null,null,null,null,null,null,null];
(statearr_48928[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__36332__auto__);

(statearr_48928[(1)] = (1));

return statearr_48928;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__36332__auto____1 = (function (state_48925){
while(true){
var ret_value__36333__auto__ = (function (){try{while(true){
var result__36334__auto__ = switch__36331__auto__.call(null,state_48925);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36334__auto__;
}
break;
}
}catch (e48929){if((e48929 instanceof Object)){
var ex__36335__auto__ = e48929;
var statearr_48930_48932 = state_48925;
(statearr_48930_48932[(5)] = ex__36335__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48925);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48929;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48933 = state_48925;
state_48925 = G__48933;
continue;
} else {
return ret_value__36333__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__36332__auto__ = function(state_48925){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__36332__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__36332__auto____1.call(this,state_48925);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__36332__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__36332__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__36332__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__36332__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__36332__auto__;
})()
;})(switch__36331__auto__,c__36422__auto__,figwheel_version,temp__5457__auto__))
})();
var state__36424__auto__ = (function (){var statearr_48931 = f__36423__auto__.call(null);
(statearr_48931[(6)] = c__36422__auto__);

return statearr_48931;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36424__auto__);
});})(c__36422__auto__,figwheel_version,temp__5457__auto__))
);

return c__36422__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__48934){
var map__48935 = p__48934;
var map__48935__$1 = ((((!((map__48935 == null)))?(((((map__48935.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48935.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48935):map__48935);
var file = cljs.core.get.call(null,map__48935__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__48935__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__48935__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__48937 = "";
var G__48937__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48937),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__48937);
var G__48937__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48937__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__48937__$1);
if(cljs.core.truth_((function (){var and__3938__auto__ = line;
if(cljs.core.truth_(and__3938__auto__)){
return column;
} else {
return and__3938__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48937__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__48937__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__48938){
var map__48939 = p__48938;
var map__48939__$1 = ((((!((map__48939 == null)))?(((((map__48939.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48939.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48939):map__48939);
var ed = map__48939__$1;
var formatted_exception = cljs.core.get.call(null,map__48939__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__48939__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__48939__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__48941_48945 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__48942_48946 = null;
var count__48943_48947 = (0);
var i__48944_48948 = (0);
while(true){
if((i__48944_48948 < count__48943_48947)){
var msg_48949 = cljs.core._nth.call(null,chunk__48942_48946,i__48944_48948);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_48949);


var G__48950 = seq__48941_48945;
var G__48951 = chunk__48942_48946;
var G__48952 = count__48943_48947;
var G__48953 = (i__48944_48948 + (1));
seq__48941_48945 = G__48950;
chunk__48942_48946 = G__48951;
count__48943_48947 = G__48952;
i__48944_48948 = G__48953;
continue;
} else {
var temp__5457__auto___48954 = cljs.core.seq.call(null,seq__48941_48945);
if(temp__5457__auto___48954){
var seq__48941_48955__$1 = temp__5457__auto___48954;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48941_48955__$1)){
var c__4351__auto___48956 = cljs.core.chunk_first.call(null,seq__48941_48955__$1);
var G__48957 = cljs.core.chunk_rest.call(null,seq__48941_48955__$1);
var G__48958 = c__4351__auto___48956;
var G__48959 = cljs.core.count.call(null,c__4351__auto___48956);
var G__48960 = (0);
seq__48941_48945 = G__48957;
chunk__48942_48946 = G__48958;
count__48943_48947 = G__48959;
i__48944_48948 = G__48960;
continue;
} else {
var msg_48961 = cljs.core.first.call(null,seq__48941_48955__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_48961);


var G__48962 = cljs.core.next.call(null,seq__48941_48955__$1);
var G__48963 = null;
var G__48964 = (0);
var G__48965 = (0);
seq__48941_48945 = G__48962;
chunk__48942_48946 = G__48963;
count__48943_48947 = G__48964;
i__48944_48948 = G__48965;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__48966){
var map__48967 = p__48966;
var map__48967__$1 = ((((!((map__48967 == null)))?(((((map__48967.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48967.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48967):map__48967);
var w = map__48967__$1;
var message = cljs.core.get.call(null,map__48967__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"public/js/out/figwheel/client.cljs",33,1,361,361,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"public/js/out/figwheel/client.cljs",30,1,353,353,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__3938__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__3938__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__3938__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__48969 = cljs.core.seq.call(null,plugins);
var chunk__48970 = null;
var count__48971 = (0);
var i__48972 = (0);
while(true){
if((i__48972 < count__48971)){
var vec__48973 = cljs.core._nth.call(null,chunk__48970,i__48972);
var k = cljs.core.nth.call(null,vec__48973,(0),null);
var plugin = cljs.core.nth.call(null,vec__48973,(1),null);
if(cljs.core.truth_(plugin)){
var pl_48979 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__48969,chunk__48970,count__48971,i__48972,pl_48979,vec__48973,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_48979.call(null,msg_hist);
});})(seq__48969,chunk__48970,count__48971,i__48972,pl_48979,vec__48973,k,plugin))
);
} else {
}


var G__48980 = seq__48969;
var G__48981 = chunk__48970;
var G__48982 = count__48971;
var G__48983 = (i__48972 + (1));
seq__48969 = G__48980;
chunk__48970 = G__48981;
count__48971 = G__48982;
i__48972 = G__48983;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__48969);
if(temp__5457__auto__){
var seq__48969__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48969__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__48969__$1);
var G__48984 = cljs.core.chunk_rest.call(null,seq__48969__$1);
var G__48985 = c__4351__auto__;
var G__48986 = cljs.core.count.call(null,c__4351__auto__);
var G__48987 = (0);
seq__48969 = G__48984;
chunk__48970 = G__48985;
count__48971 = G__48986;
i__48972 = G__48987;
continue;
} else {
var vec__48976 = cljs.core.first.call(null,seq__48969__$1);
var k = cljs.core.nth.call(null,vec__48976,(0),null);
var plugin = cljs.core.nth.call(null,vec__48976,(1),null);
if(cljs.core.truth_(plugin)){
var pl_48988 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__48969,chunk__48970,count__48971,i__48972,pl_48988,vec__48976,k,plugin,seq__48969__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_48988.call(null,msg_hist);
});})(seq__48969,chunk__48970,count__48971,i__48972,pl_48988,vec__48976,k,plugin,seq__48969__$1,temp__5457__auto__))
);
} else {
}


var G__48989 = cljs.core.next.call(null,seq__48969__$1);
var G__48990 = null;
var G__48991 = (0);
var G__48992 = (0);
seq__48969 = G__48989;
chunk__48970 = G__48990;
count__48971 = G__48991;
i__48972 = G__48992;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__48994 = arguments.length;
switch (G__48994) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__48995_49000 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__48996_49001 = null;
var count__48997_49002 = (0);
var i__48998_49003 = (0);
while(true){
if((i__48998_49003 < count__48997_49002)){
var msg_49004 = cljs.core._nth.call(null,chunk__48996_49001,i__48998_49003);
figwheel.client.socket.handle_incoming_message.call(null,msg_49004);


var G__49005 = seq__48995_49000;
var G__49006 = chunk__48996_49001;
var G__49007 = count__48997_49002;
var G__49008 = (i__48998_49003 + (1));
seq__48995_49000 = G__49005;
chunk__48996_49001 = G__49006;
count__48997_49002 = G__49007;
i__48998_49003 = G__49008;
continue;
} else {
var temp__5457__auto___49009 = cljs.core.seq.call(null,seq__48995_49000);
if(temp__5457__auto___49009){
var seq__48995_49010__$1 = temp__5457__auto___49009;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48995_49010__$1)){
var c__4351__auto___49011 = cljs.core.chunk_first.call(null,seq__48995_49010__$1);
var G__49012 = cljs.core.chunk_rest.call(null,seq__48995_49010__$1);
var G__49013 = c__4351__auto___49011;
var G__49014 = cljs.core.count.call(null,c__4351__auto___49011);
var G__49015 = (0);
seq__48995_49000 = G__49012;
chunk__48996_49001 = G__49013;
count__48997_49002 = G__49014;
i__48998_49003 = G__49015;
continue;
} else {
var msg_49016 = cljs.core.first.call(null,seq__48995_49010__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_49016);


var G__49017 = cljs.core.next.call(null,seq__48995_49010__$1);
var G__49018 = null;
var G__49019 = (0);
var G__49020 = (0);
seq__48995_49000 = G__49017;
chunk__48996_49001 = G__49018;
count__48997_49002 = G__49019;
i__48998_49003 = G__49020;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4534__auto__ = [];
var len__4531__auto___49025 = arguments.length;
var i__4532__auto___49026 = (0);
while(true){
if((i__4532__auto___49026 < len__4531__auto___49025)){
args__4534__auto__.push((arguments[i__4532__auto___49026]));

var G__49027 = (i__4532__auto___49026 + (1));
i__4532__auto___49026 = G__49027;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__49022){
var map__49023 = p__49022;
var map__49023__$1 = ((((!((map__49023 == null)))?(((((map__49023.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49023.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49023):map__49023);
var opts = map__49023__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq49021){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49021));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e49028){if((e49028 instanceof Error)){
var e = e49028;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e49028;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__49029){
var map__49030 = p__49029;
var map__49030__$1 = ((((!((map__49030 == null)))?(((((map__49030.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49030.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49030):map__49030);
var msg_name = cljs.core.get.call(null,map__49030__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1545318908371
