// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__44525 = arguments.length;
switch (G__44525) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44526 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44526 = (function (f,blockable,meta44527){
this.f = f;
this.blockable = blockable;
this.meta44527 = meta44527;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async44526.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44528,meta44527__$1){
var self__ = this;
var _44528__$1 = this;
return (new cljs.core.async.t_cljs$core$async44526(self__.f,self__.blockable,meta44527__$1));
});

cljs.core.async.t_cljs$core$async44526.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44528){
var self__ = this;
var _44528__$1 = this;
return self__.meta44527;
});

cljs.core.async.t_cljs$core$async44526.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44526.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async44526.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async44526.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async44526.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta44527","meta44527",-1019378455,null)], null);
});

cljs.core.async.t_cljs$core$async44526.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44526.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44526";

cljs.core.async.t_cljs$core$async44526.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async44526");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44526.
 */
cljs.core.async.__GT_t_cljs$core$async44526 = (function cljs$core$async$__GT_t_cljs$core$async44526(f__$1,blockable__$1,meta44527){
return (new cljs.core.async.t_cljs$core$async44526(f__$1,blockable__$1,meta44527));
});

}

return (new cljs.core.async.t_cljs$core$async44526(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__44532 = arguments.length;
switch (G__44532) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__44535 = arguments.length;
switch (G__44535) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__44538 = arguments.length;
switch (G__44538) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_44540 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_44540);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_44540,ret){
return (function (){
return fn1.call(null,val_44540);
});})(val_44540,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__44542 = arguments.length;
switch (G__44542) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4408__auto___44544 = n;
var x_44545 = (0);
while(true){
if((x_44545 < n__4408__auto___44544)){
(a[x_44545] = (0));

var G__44546 = (x_44545 + (1));
x_44545 = G__44546;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__44547 = (i + (1));
i = G__44547;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44548 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44548 = (function (flag,meta44549){
this.flag = flag;
this.meta44549 = meta44549;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async44548.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_44550,meta44549__$1){
var self__ = this;
var _44550__$1 = this;
return (new cljs.core.async.t_cljs$core$async44548(self__.flag,meta44549__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async44548.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_44550){
var self__ = this;
var _44550__$1 = this;
return self__.meta44549;
});})(flag))
;

cljs.core.async.t_cljs$core$async44548.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44548.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async44548.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async44548.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async44548.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta44549","meta44549",2063956149,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async44548.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44548.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44548";

cljs.core.async.t_cljs$core$async44548.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async44548");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44548.
 */
cljs.core.async.__GT_t_cljs$core$async44548 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async44548(flag__$1,meta44549){
return (new cljs.core.async.t_cljs$core$async44548(flag__$1,meta44549));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async44548(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44551 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44551 = (function (flag,cb,meta44552){
this.flag = flag;
this.cb = cb;
this.meta44552 = meta44552;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async44551.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44553,meta44552__$1){
var self__ = this;
var _44553__$1 = this;
return (new cljs.core.async.t_cljs$core$async44551(self__.flag,self__.cb,meta44552__$1));
});

cljs.core.async.t_cljs$core$async44551.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44553){
var self__ = this;
var _44553__$1 = this;
return self__.meta44552;
});

cljs.core.async.t_cljs$core$async44551.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44551.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async44551.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async44551.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async44551.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta44552","meta44552",-30077510,null)], null);
});

cljs.core.async.t_cljs$core$async44551.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44551.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44551";

cljs.core.async.t_cljs$core$async44551.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async44551");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44551.
 */
cljs.core.async.__GT_t_cljs$core$async44551 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async44551(flag__$1,cb__$1,meta44552){
return (new cljs.core.async.t_cljs$core$async44551(flag__$1,cb__$1,meta44552));
});

}

return (new cljs.core.async.t_cljs$core$async44551(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__44554_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__44554_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__44555_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__44555_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3949__auto__ = wport;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return port;
}
})()], null));
} else {
var G__44556 = (i + (1));
i = G__44556;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3949__auto__ = ret;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__3938__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3938__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___44562 = arguments.length;
var i__4532__auto___44563 = (0);
while(true){
if((i__4532__auto___44563 < len__4531__auto___44562)){
args__4534__auto__.push((arguments[i__4532__auto___44563]));

var G__44564 = (i__4532__auto___44563 + (1));
i__4532__auto___44563 = G__44564;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__44559){
var map__44560 = p__44559;
var map__44560__$1 = ((((!((map__44560 == null)))?(((((map__44560.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44560.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44560):map__44560);
var opts = map__44560__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq44557){
var G__44558 = cljs.core.first.call(null,seq44557);
var seq44557__$1 = cljs.core.next.call(null,seq44557);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44558,seq44557__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__44566 = arguments.length;
switch (G__44566) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__36422__auto___44612 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36422__auto___44612){
return (function (){
var f__36423__auto__ = (function (){var switch__36331__auto__ = ((function (c__36422__auto___44612){
return (function (state_44590){
var state_val_44591 = (state_44590[(1)]);
if((state_val_44591 === (7))){
var inst_44586 = (state_44590[(2)]);
var state_44590__$1 = state_44590;
var statearr_44592_44613 = state_44590__$1;
(statearr_44592_44613[(2)] = inst_44586);

(statearr_44592_44613[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44591 === (1))){
var state_44590__$1 = state_44590;
var statearr_44593_44614 = state_44590__$1;
(statearr_44593_44614[(2)] = null);

(statearr_44593_44614[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44591 === (4))){
var inst_44569 = (state_44590[(7)]);
var inst_44569__$1 = (state_44590[(2)]);
var inst_44570 = (inst_44569__$1 == null);
var state_44590__$1 = (function (){var statearr_44594 = state_44590;
(statearr_44594[(7)] = inst_44569__$1);

return statearr_44594;
})();
if(cljs.core.truth_(inst_44570)){
var statearr_44595_44615 = state_44590__$1;
(statearr_44595_44615[(1)] = (5));

} else {
var statearr_44596_44616 = state_44590__$1;
(statearr_44596_44616[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44591 === (13))){
var state_44590__$1 = state_44590;
var statearr_44597_44617 = state_44590__$1;
(statearr_44597_44617[(2)] = null);

(statearr_44597_44617[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44591 === (6))){
var inst_44569 = (state_44590[(7)]);
var state_44590__$1 = state_44590;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44590__$1,(11),to,inst_44569);
} else {
if((state_val_44591 === (3))){
var inst_44588 = (state_44590[(2)]);
var state_44590__$1 = state_44590;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44590__$1,inst_44588);
} else {
if((state_val_44591 === (12))){
var state_44590__$1 = state_44590;
var statearr_44598_44618 = state_44590__$1;
(statearr_44598_44618[(2)] = null);

(statearr_44598_44618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44591 === (2))){
var state_44590__$1 = state_44590;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44590__$1,(4),from);
} else {
if((state_val_44591 === (11))){
var inst_44579 = (state_44590[(2)]);
var state_44590__$1 = state_44590;
if(cljs.core.truth_(inst_44579)){
var statearr_44599_44619 = state_44590__$1;
(statearr_44599_44619[(1)] = (12));

} else {
var statearr_44600_44620 = state_44590__$1;
(statearr_44600_44620[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44591 === (9))){
var state_44590__$1 = state_44590;
var statearr_44601_44621 = state_44590__$1;
(statearr_44601_44621[(2)] = null);

(statearr_44601_44621[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44591 === (5))){
var state_44590__$1 = state_44590;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44602_44622 = state_44590__$1;
(statearr_44602_44622[(1)] = (8));

} else {
var statearr_44603_44623 = state_44590__$1;
(statearr_44603_44623[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44591 === (14))){
var inst_44584 = (state_44590[(2)]);
var state_44590__$1 = state_44590;
var statearr_44604_44624 = state_44590__$1;
(statearr_44604_44624[(2)] = inst_44584);

(statearr_44604_44624[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44591 === (10))){
var inst_44576 = (state_44590[(2)]);
var state_44590__$1 = state_44590;
var statearr_44605_44625 = state_44590__$1;
(statearr_44605_44625[(2)] = inst_44576);

(statearr_44605_44625[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44591 === (8))){
var inst_44573 = cljs.core.async.close_BANG_.call(null,to);
var state_44590__$1 = state_44590;
var statearr_44606_44626 = state_44590__$1;
(statearr_44606_44626[(2)] = inst_44573);

(statearr_44606_44626[(1)] = (10));


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
});})(c__36422__auto___44612))
;
return ((function (switch__36331__auto__,c__36422__auto___44612){
return (function() {
var cljs$core$async$state_machine__36332__auto__ = null;
var cljs$core$async$state_machine__36332__auto____0 = (function (){
var statearr_44607 = [null,null,null,null,null,null,null,null];
(statearr_44607[(0)] = cljs$core$async$state_machine__36332__auto__);

(statearr_44607[(1)] = (1));

return statearr_44607;
});
var cljs$core$async$state_machine__36332__auto____1 = (function (state_44590){
while(true){
var ret_value__36333__auto__ = (function (){try{while(true){
var result__36334__auto__ = switch__36331__auto__.call(null,state_44590);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36334__auto__;
}
break;
}
}catch (e44608){if((e44608 instanceof Object)){
var ex__36335__auto__ = e44608;
var statearr_44609_44627 = state_44590;
(statearr_44609_44627[(5)] = ex__36335__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44590);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44608;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44628 = state_44590;
state_44590 = G__44628;
continue;
} else {
return ret_value__36333__auto__;
}
break;
}
});
cljs$core$async$state_machine__36332__auto__ = function(state_44590){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36332__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36332__auto____1.call(this,state_44590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36332__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36332__auto____0;
cljs$core$async$state_machine__36332__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36332__auto____1;
return cljs$core$async$state_machine__36332__auto__;
})()
;})(switch__36331__auto__,c__36422__auto___44612))
})();
var state__36424__auto__ = (function (){var statearr_44610 = f__36423__auto__.call(null);
(statearr_44610[(6)] = c__36422__auto___44612);

return statearr_44610;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36424__auto__);
});})(c__36422__auto___44612))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process__$1 = ((function (jobs,results){
return (function (p__44629){
var vec__44630 = p__44629;
var v = cljs.core.nth.call(null,vec__44630,(0),null);
var p = cljs.core.nth.call(null,vec__44630,(1),null);
var job = vec__44630;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__36422__auto___44801 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36422__auto___44801,res,vec__44630,v,p,job,jobs,results){
return (function (){
var f__36423__auto__ = (function (){var switch__36331__auto__ = ((function (c__36422__auto___44801,res,vec__44630,v,p,job,jobs,results){
return (function (state_44637){
var state_val_44638 = (state_44637[(1)]);
if((state_val_44638 === (1))){
var state_44637__$1 = state_44637;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44637__$1,(2),res,v);
} else {
if((state_val_44638 === (2))){
var inst_44634 = (state_44637[(2)]);
var inst_44635 = cljs.core.async.close_BANG_.call(null,res);
var state_44637__$1 = (function (){var statearr_44639 = state_44637;
(statearr_44639[(7)] = inst_44634);

return statearr_44639;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44637__$1,inst_44635);
} else {
return null;
}
}
});})(c__36422__auto___44801,res,vec__44630,v,p,job,jobs,results))
;
return ((function (switch__36331__auto__,c__36422__auto___44801,res,vec__44630,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36332__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36332__auto____0 = (function (){
var statearr_44640 = [null,null,null,null,null,null,null,null];
(statearr_44640[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36332__auto__);

(statearr_44640[(1)] = (1));

return statearr_44640;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36332__auto____1 = (function (state_44637){
while(true){
var ret_value__36333__auto__ = (function (){try{while(true){
var result__36334__auto__ = switch__36331__auto__.call(null,state_44637);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36334__auto__;
}
break;
}
}catch (e44641){if((e44641 instanceof Object)){
var ex__36335__auto__ = e44641;
var statearr_44642_44802 = state_44637;
(statearr_44642_44802[(5)] = ex__36335__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44637);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44641;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44803 = state_44637;
state_44637 = G__44803;
continue;
} else {
return ret_value__36333__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36332__auto__ = function(state_44637){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36332__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36332__auto____1.call(this,state_44637);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36332__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36332__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36332__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36332__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36332__auto__;
})()
;})(switch__36331__auto__,c__36422__auto___44801,res,vec__44630,v,p,job,jobs,results))
})();
var state__36424__auto__ = (function (){var statearr_44643 = f__36423__auto__.call(null);
(statearr_44643[(6)] = c__36422__auto___44801);

return statearr_44643;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36424__auto__);
});})(c__36422__auto___44801,res,vec__44630,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process__$1){
return (function (p__44644){
var vec__44645 = p__44644;
var v = cljs.core.nth.call(null,vec__44645,(0),null);
var p = cljs.core.nth.call(null,vec__44645,(1),null);
var job = vec__44645;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process__$1))
;
var n__4408__auto___44804 = n;
var __44805 = (0);
while(true){
if((__44805 < n__4408__auto___44804)){
var G__44648_44806 = type;
var G__44648_44807__$1 = (((G__44648_44806 instanceof cljs.core.Keyword))?G__44648_44806.fqn:null);
switch (G__44648_44807__$1) {
case "compute":
var c__36422__auto___44809 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__44805,c__36422__auto___44809,G__44648_44806,G__44648_44807__$1,n__4408__auto___44804,jobs,results,process__$1,async){
return (function (){
var f__36423__auto__ = (function (){var switch__36331__auto__ = ((function (__44805,c__36422__auto___44809,G__44648_44806,G__44648_44807__$1,n__4408__auto___44804,jobs,results,process__$1,async){
return (function (state_44661){
var state_val_44662 = (state_44661[(1)]);
if((state_val_44662 === (1))){
var state_44661__$1 = state_44661;
var statearr_44663_44810 = state_44661__$1;
(statearr_44663_44810[(2)] = null);

(statearr_44663_44810[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44662 === (2))){
var state_44661__$1 = state_44661;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44661__$1,(4),jobs);
} else {
if((state_val_44662 === (3))){
var inst_44659 = (state_44661[(2)]);
var state_44661__$1 = state_44661;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44661__$1,inst_44659);
} else {
if((state_val_44662 === (4))){
var inst_44651 = (state_44661[(2)]);
var inst_44652 = process__$1.call(null,inst_44651);
var state_44661__$1 = state_44661;
if(cljs.core.truth_(inst_44652)){
var statearr_44664_44811 = state_44661__$1;
(statearr_44664_44811[(1)] = (5));

} else {
var statearr_44665_44812 = state_44661__$1;
(statearr_44665_44812[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44662 === (5))){
var state_44661__$1 = state_44661;
var statearr_44666_44813 = state_44661__$1;
(statearr_44666_44813[(2)] = null);

(statearr_44666_44813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44662 === (6))){
var state_44661__$1 = state_44661;
var statearr_44667_44814 = state_44661__$1;
(statearr_44667_44814[(2)] = null);

(statearr_44667_44814[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44662 === (7))){
var inst_44657 = (state_44661[(2)]);
var state_44661__$1 = state_44661;
var statearr_44668_44815 = state_44661__$1;
(statearr_44668_44815[(2)] = inst_44657);

(statearr_44668_44815[(1)] = (3));


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
});})(__44805,c__36422__auto___44809,G__44648_44806,G__44648_44807__$1,n__4408__auto___44804,jobs,results,process__$1,async))
;
return ((function (__44805,switch__36331__auto__,c__36422__auto___44809,G__44648_44806,G__44648_44807__$1,n__4408__auto___44804,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36332__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36332__auto____0 = (function (){
var statearr_44669 = [null,null,null,null,null,null,null];
(statearr_44669[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36332__auto__);

(statearr_44669[(1)] = (1));

return statearr_44669;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36332__auto____1 = (function (state_44661){
while(true){
var ret_value__36333__auto__ = (function (){try{while(true){
var result__36334__auto__ = switch__36331__auto__.call(null,state_44661);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36334__auto__;
}
break;
}
}catch (e44670){if((e44670 instanceof Object)){
var ex__36335__auto__ = e44670;
var statearr_44671_44816 = state_44661;
(statearr_44671_44816[(5)] = ex__36335__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44661);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44670;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44817 = state_44661;
state_44661 = G__44817;
continue;
} else {
return ret_value__36333__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36332__auto__ = function(state_44661){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36332__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36332__auto____1.call(this,state_44661);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36332__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36332__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36332__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36332__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36332__auto__;
})()
;})(__44805,switch__36331__auto__,c__36422__auto___44809,G__44648_44806,G__44648_44807__$1,n__4408__auto___44804,jobs,results,process__$1,async))
})();
var state__36424__auto__ = (function (){var statearr_44672 = f__36423__auto__.call(null);
(statearr_44672[(6)] = c__36422__auto___44809);

return statearr_44672;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36424__auto__);
});})(__44805,c__36422__auto___44809,G__44648_44806,G__44648_44807__$1,n__4408__auto___44804,jobs,results,process__$1,async))
);


break;
case "async":
var c__36422__auto___44818 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__44805,c__36422__auto___44818,G__44648_44806,G__44648_44807__$1,n__4408__auto___44804,jobs,results,process__$1,async){
return (function (){
var f__36423__auto__ = (function (){var switch__36331__auto__ = ((function (__44805,c__36422__auto___44818,G__44648_44806,G__44648_44807__$1,n__4408__auto___44804,jobs,results,process__$1,async){
return (function (state_44685){
var state_val_44686 = (state_44685[(1)]);
if((state_val_44686 === (1))){
var state_44685__$1 = state_44685;
var statearr_44687_44819 = state_44685__$1;
(statearr_44687_44819[(2)] = null);

(statearr_44687_44819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44686 === (2))){
var state_44685__$1 = state_44685;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44685__$1,(4),jobs);
} else {
if((state_val_44686 === (3))){
var inst_44683 = (state_44685[(2)]);
var state_44685__$1 = state_44685;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44685__$1,inst_44683);
} else {
if((state_val_44686 === (4))){
var inst_44675 = (state_44685[(2)]);
var inst_44676 = async.call(null,inst_44675);
var state_44685__$1 = state_44685;
if(cljs.core.truth_(inst_44676)){
var statearr_44688_44820 = state_44685__$1;
(statearr_44688_44820[(1)] = (5));

} else {
var statearr_44689_44821 = state_44685__$1;
(statearr_44689_44821[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44686 === (5))){
var state_44685__$1 = state_44685;
var statearr_44690_44822 = state_44685__$1;
(statearr_44690_44822[(2)] = null);

(statearr_44690_44822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44686 === (6))){
var state_44685__$1 = state_44685;
var statearr_44691_44823 = state_44685__$1;
(statearr_44691_44823[(2)] = null);

(statearr_44691_44823[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44686 === (7))){
var inst_44681 = (state_44685[(2)]);
var state_44685__$1 = state_44685;
var statearr_44692_44824 = state_44685__$1;
(statearr_44692_44824[(2)] = inst_44681);

(statearr_44692_44824[(1)] = (3));


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
});})(__44805,c__36422__auto___44818,G__44648_44806,G__44648_44807__$1,n__4408__auto___44804,jobs,results,process__$1,async))
;
return ((function (__44805,switch__36331__auto__,c__36422__auto___44818,G__44648_44806,G__44648_44807__$1,n__4408__auto___44804,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36332__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36332__auto____0 = (function (){
var statearr_44693 = [null,null,null,null,null,null,null];
(statearr_44693[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36332__auto__);

(statearr_44693[(1)] = (1));

return statearr_44693;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36332__auto____1 = (function (state_44685){
while(true){
var ret_value__36333__auto__ = (function (){try{while(true){
var result__36334__auto__ = switch__36331__auto__.call(null,state_44685);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36334__auto__;
}
break;
}
}catch (e44694){if((e44694 instanceof Object)){
var ex__36335__auto__ = e44694;
var statearr_44695_44825 = state_44685;
(statearr_44695_44825[(5)] = ex__36335__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44685);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44694;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44826 = state_44685;
state_44685 = G__44826;
continue;
} else {
return ret_value__36333__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36332__auto__ = function(state_44685){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36332__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36332__auto____1.call(this,state_44685);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36332__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36332__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36332__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36332__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36332__auto__;
})()
;})(__44805,switch__36331__auto__,c__36422__auto___44818,G__44648_44806,G__44648_44807__$1,n__4408__auto___44804,jobs,results,process__$1,async))
})();
var state__36424__auto__ = (function (){var statearr_44696 = f__36423__auto__.call(null);
(statearr_44696[(6)] = c__36422__auto___44818);

return statearr_44696;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36424__auto__);
});})(__44805,c__36422__auto___44818,G__44648_44806,G__44648_44807__$1,n__4408__auto___44804,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44648_44807__$1)].join('')));

}

var G__44827 = (__44805 + (1));
__44805 = G__44827;
continue;
} else {
}
break;
}

var c__36422__auto___44828 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36422__auto___44828,jobs,results,process__$1,async){
return (function (){
var f__36423__auto__ = (function (){var switch__36331__auto__ = ((function (c__36422__auto___44828,jobs,results,process__$1,async){
return (function (state_44718){
var state_val_44719 = (state_44718[(1)]);
if((state_val_44719 === (1))){
var state_44718__$1 = state_44718;
var statearr_44720_44829 = state_44718__$1;
(statearr_44720_44829[(2)] = null);

(statearr_44720_44829[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44719 === (2))){
var state_44718__$1 = state_44718;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44718__$1,(4),from);
} else {
if((state_val_44719 === (3))){
var inst_44716 = (state_44718[(2)]);
var state_44718__$1 = state_44718;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44718__$1,inst_44716);
} else {
if((state_val_44719 === (4))){
var inst_44699 = (state_44718[(7)]);
var inst_44699__$1 = (state_44718[(2)]);
var inst_44700 = (inst_44699__$1 == null);
var state_44718__$1 = (function (){var statearr_44721 = state_44718;
(statearr_44721[(7)] = inst_44699__$1);

return statearr_44721;
})();
if(cljs.core.truth_(inst_44700)){
var statearr_44722_44830 = state_44718__$1;
(statearr_44722_44830[(1)] = (5));

} else {
var statearr_44723_44831 = state_44718__$1;
(statearr_44723_44831[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44719 === (5))){
var inst_44702 = cljs.core.async.close_BANG_.call(null,jobs);
var state_44718__$1 = state_44718;
var statearr_44724_44832 = state_44718__$1;
(statearr_44724_44832[(2)] = inst_44702);

(statearr_44724_44832[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44719 === (6))){
var inst_44699 = (state_44718[(7)]);
var inst_44704 = (state_44718[(8)]);
var inst_44704__$1 = cljs.core.async.chan.call(null,(1));
var inst_44705 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44706 = [inst_44699,inst_44704__$1];
var inst_44707 = (new cljs.core.PersistentVector(null,2,(5),inst_44705,inst_44706,null));
var state_44718__$1 = (function (){var statearr_44725 = state_44718;
(statearr_44725[(8)] = inst_44704__$1);

return statearr_44725;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44718__$1,(8),jobs,inst_44707);
} else {
if((state_val_44719 === (7))){
var inst_44714 = (state_44718[(2)]);
var state_44718__$1 = state_44718;
var statearr_44726_44833 = state_44718__$1;
(statearr_44726_44833[(2)] = inst_44714);

(statearr_44726_44833[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44719 === (8))){
var inst_44704 = (state_44718[(8)]);
var inst_44709 = (state_44718[(2)]);
var state_44718__$1 = (function (){var statearr_44727 = state_44718;
(statearr_44727[(9)] = inst_44709);

return statearr_44727;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44718__$1,(9),results,inst_44704);
} else {
if((state_val_44719 === (9))){
var inst_44711 = (state_44718[(2)]);
var state_44718__$1 = (function (){var statearr_44728 = state_44718;
(statearr_44728[(10)] = inst_44711);

return statearr_44728;
})();
var statearr_44729_44834 = state_44718__$1;
(statearr_44729_44834[(2)] = null);

(statearr_44729_44834[(1)] = (2));


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
});})(c__36422__auto___44828,jobs,results,process__$1,async))
;
return ((function (switch__36331__auto__,c__36422__auto___44828,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36332__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36332__auto____0 = (function (){
var statearr_44730 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44730[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36332__auto__);

(statearr_44730[(1)] = (1));

return statearr_44730;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36332__auto____1 = (function (state_44718){
while(true){
var ret_value__36333__auto__ = (function (){try{while(true){
var result__36334__auto__ = switch__36331__auto__.call(null,state_44718);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36334__auto__;
}
break;
}
}catch (e44731){if((e44731 instanceof Object)){
var ex__36335__auto__ = e44731;
var statearr_44732_44835 = state_44718;
(statearr_44732_44835[(5)] = ex__36335__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44718);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44731;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44836 = state_44718;
state_44718 = G__44836;
continue;
} else {
return ret_value__36333__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36332__auto__ = function(state_44718){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36332__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36332__auto____1.call(this,state_44718);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36332__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36332__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36332__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36332__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36332__auto__;
})()
;})(switch__36331__auto__,c__36422__auto___44828,jobs,results,process__$1,async))
})();
var state__36424__auto__ = (function (){var statearr_44733 = f__36423__auto__.call(null);
(statearr_44733[(6)] = c__36422__auto___44828);

return statearr_44733;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36424__auto__);
});})(c__36422__auto___44828,jobs,results,process__$1,async))
);


var c__36422__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36422__auto__,jobs,results,process__$1,async){
return (function (){
var f__36423__auto__ = (function (){var switch__36331__auto__ = ((function (c__36422__auto__,jobs,results,process__$1,async){
return (function (state_44771){
var state_val_44772 = (state_44771[(1)]);
if((state_val_44772 === (7))){
var inst_44767 = (state_44771[(2)]);
var state_44771__$1 = state_44771;
var statearr_44773_44837 = state_44771__$1;
(statearr_44773_44837[(2)] = inst_44767);

(statearr_44773_44837[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44772 === (20))){
var state_44771__$1 = state_44771;
var statearr_44774_44838 = state_44771__$1;
(statearr_44774_44838[(2)] = null);

(statearr_44774_44838[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44772 === (1))){
var state_44771__$1 = state_44771;
var statearr_44775_44839 = state_44771__$1;
(statearr_44775_44839[(2)] = null);

(statearr_44775_44839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44772 === (4))){
var inst_44736 = (state_44771[(7)]);
var inst_44736__$1 = (state_44771[(2)]);
var inst_44737 = (inst_44736__$1 == null);
var state_44771__$1 = (function (){var statearr_44776 = state_44771;
(statearr_44776[(7)] = inst_44736__$1);

return statearr_44776;
})();
if(cljs.core.truth_(inst_44737)){
var statearr_44777_44840 = state_44771__$1;
(statearr_44777_44840[(1)] = (5));

} else {
var statearr_44778_44841 = state_44771__$1;
(statearr_44778_44841[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44772 === (15))){
var inst_44749 = (state_44771[(8)]);
var state_44771__$1 = state_44771;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44771__$1,(18),to,inst_44749);
} else {
if((state_val_44772 === (21))){
var inst_44762 = (state_44771[(2)]);
var state_44771__$1 = state_44771;
var statearr_44779_44842 = state_44771__$1;
(statearr_44779_44842[(2)] = inst_44762);

(statearr_44779_44842[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44772 === (13))){
var inst_44764 = (state_44771[(2)]);
var state_44771__$1 = (function (){var statearr_44780 = state_44771;
(statearr_44780[(9)] = inst_44764);

return statearr_44780;
})();
var statearr_44781_44843 = state_44771__$1;
(statearr_44781_44843[(2)] = null);

(statearr_44781_44843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44772 === (6))){
var inst_44736 = (state_44771[(7)]);
var state_44771__$1 = state_44771;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44771__$1,(11),inst_44736);
} else {
if((state_val_44772 === (17))){
var inst_44757 = (state_44771[(2)]);
var state_44771__$1 = state_44771;
if(cljs.core.truth_(inst_44757)){
var statearr_44782_44844 = state_44771__$1;
(statearr_44782_44844[(1)] = (19));

} else {
var statearr_44783_44845 = state_44771__$1;
(statearr_44783_44845[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44772 === (3))){
var inst_44769 = (state_44771[(2)]);
var state_44771__$1 = state_44771;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44771__$1,inst_44769);
} else {
if((state_val_44772 === (12))){
var inst_44746 = (state_44771[(10)]);
var state_44771__$1 = state_44771;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44771__$1,(14),inst_44746);
} else {
if((state_val_44772 === (2))){
var state_44771__$1 = state_44771;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44771__$1,(4),results);
} else {
if((state_val_44772 === (19))){
var state_44771__$1 = state_44771;
var statearr_44784_44846 = state_44771__$1;
(statearr_44784_44846[(2)] = null);

(statearr_44784_44846[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44772 === (11))){
var inst_44746 = (state_44771[(2)]);
var state_44771__$1 = (function (){var statearr_44785 = state_44771;
(statearr_44785[(10)] = inst_44746);

return statearr_44785;
})();
var statearr_44786_44847 = state_44771__$1;
(statearr_44786_44847[(2)] = null);

(statearr_44786_44847[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44772 === (9))){
var state_44771__$1 = state_44771;
var statearr_44787_44848 = state_44771__$1;
(statearr_44787_44848[(2)] = null);

(statearr_44787_44848[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44772 === (5))){
var state_44771__$1 = state_44771;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44788_44849 = state_44771__$1;
(statearr_44788_44849[(1)] = (8));

} else {
var statearr_44789_44850 = state_44771__$1;
(statearr_44789_44850[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44772 === (14))){
var inst_44749 = (state_44771[(8)]);
var inst_44751 = (state_44771[(11)]);
var inst_44749__$1 = (state_44771[(2)]);
var inst_44750 = (inst_44749__$1 == null);
var inst_44751__$1 = cljs.core.not.call(null,inst_44750);
var state_44771__$1 = (function (){var statearr_44790 = state_44771;
(statearr_44790[(8)] = inst_44749__$1);

(statearr_44790[(11)] = inst_44751__$1);

return statearr_44790;
})();
if(inst_44751__$1){
var statearr_44791_44851 = state_44771__$1;
(statearr_44791_44851[(1)] = (15));

} else {
var statearr_44792_44852 = state_44771__$1;
(statearr_44792_44852[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44772 === (16))){
var inst_44751 = (state_44771[(11)]);
var state_44771__$1 = state_44771;
var statearr_44793_44853 = state_44771__$1;
(statearr_44793_44853[(2)] = inst_44751);

(statearr_44793_44853[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44772 === (10))){
var inst_44743 = (state_44771[(2)]);
var state_44771__$1 = state_44771;
var statearr_44794_44854 = state_44771__$1;
(statearr_44794_44854[(2)] = inst_44743);

(statearr_44794_44854[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44772 === (18))){
var inst_44754 = (state_44771[(2)]);
var state_44771__$1 = state_44771;
var statearr_44795_44855 = state_44771__$1;
(statearr_44795_44855[(2)] = inst_44754);

(statearr_44795_44855[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44772 === (8))){
var inst_44740 = cljs.core.async.close_BANG_.call(null,to);
var state_44771__$1 = state_44771;
var statearr_44796_44856 = state_44771__$1;
(statearr_44796_44856[(2)] = inst_44740);

(statearr_44796_44856[(1)] = (10));


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
});})(c__36422__auto__,jobs,results,process__$1,async))
;
return ((function (switch__36331__auto__,c__36422__auto__,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36332__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36332__auto____0 = (function (){
var statearr_44797 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44797[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36332__auto__);

(statearr_44797[(1)] = (1));

return statearr_44797;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36332__auto____1 = (function (state_44771){
while(true){
var ret_value__36333__auto__ = (function (){try{while(true){
var result__36334__auto__ = switch__36331__auto__.call(null,state_44771);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36334__auto__;
}
break;
}
}catch (e44798){if((e44798 instanceof Object)){
var ex__36335__auto__ = e44798;
var statearr_44799_44857 = state_44771;
(statearr_44799_44857[(5)] = ex__36335__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44771);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44798;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44858 = state_44771;
state_44771 = G__44858;
continue;
} else {
return ret_value__36333__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36332__auto__ = function(state_44771){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36332__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36332__auto____1.call(this,state_44771);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36332__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36332__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36332__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36332__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36332__auto__;
})()
;})(switch__36331__auto__,c__36422__auto__,jobs,results,process__$1,async))
})();
var state__36424__auto__ = (function (){var statearr_44800 = f__36423__auto__.call(null);
(statearr_44800[(6)] = c__36422__auto__);

return statearr_44800;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36424__auto__);
});})(c__36422__auto__,jobs,results,process__$1,async))
);

return c__36422__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__44860 = arguments.length;
switch (G__44860) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__44863 = arguments.length;
switch (G__44863) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__44866 = arguments.length;
switch (G__44866) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__36422__auto___44915 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36422__auto___44915,tc,fc){
return (function (){
var f__36423__auto__ = (function (){var switch__36331__auto__ = ((function (c__36422__auto___44915,tc,fc){
return (function (state_44892){
var state_val_44893 = (state_44892[(1)]);
if((state_val_44893 === (7))){
var inst_44888 = (state_44892[(2)]);
var state_44892__$1 = state_44892;
var statearr_44894_44916 = state_44892__$1;
(statearr_44894_44916[(2)] = inst_44888);

(statearr_44894_44916[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44893 === (1))){
var state_44892__$1 = state_44892;
var statearr_44895_44917 = state_44892__$1;
(statearr_44895_44917[(2)] = null);

(statearr_44895_44917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44893 === (4))){
var inst_44869 = (state_44892[(7)]);
var inst_44869__$1 = (state_44892[(2)]);
var inst_44870 = (inst_44869__$1 == null);
var state_44892__$1 = (function (){var statearr_44896 = state_44892;
(statearr_44896[(7)] = inst_44869__$1);

return statearr_44896;
})();
if(cljs.core.truth_(inst_44870)){
var statearr_44897_44918 = state_44892__$1;
(statearr_44897_44918[(1)] = (5));

} else {
var statearr_44898_44919 = state_44892__$1;
(statearr_44898_44919[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44893 === (13))){
var state_44892__$1 = state_44892;
var statearr_44899_44920 = state_44892__$1;
(statearr_44899_44920[(2)] = null);

(statearr_44899_44920[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44893 === (6))){
var inst_44869 = (state_44892[(7)]);
var inst_44875 = p.call(null,inst_44869);
var state_44892__$1 = state_44892;
if(cljs.core.truth_(inst_44875)){
var statearr_44900_44921 = state_44892__$1;
(statearr_44900_44921[(1)] = (9));

} else {
var statearr_44901_44922 = state_44892__$1;
(statearr_44901_44922[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44893 === (3))){
var inst_44890 = (state_44892[(2)]);
var state_44892__$1 = state_44892;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44892__$1,inst_44890);
} else {
if((state_val_44893 === (12))){
var state_44892__$1 = state_44892;
var statearr_44902_44923 = state_44892__$1;
(statearr_44902_44923[(2)] = null);

(statearr_44902_44923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44893 === (2))){
var state_44892__$1 = state_44892;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44892__$1,(4),ch);
} else {
if((state_val_44893 === (11))){
var inst_44869 = (state_44892[(7)]);
var inst_44879 = (state_44892[(2)]);
var state_44892__$1 = state_44892;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44892__$1,(8),inst_44879,inst_44869);
} else {
if((state_val_44893 === (9))){
var state_44892__$1 = state_44892;
var statearr_44903_44924 = state_44892__$1;
(statearr_44903_44924[(2)] = tc);

(statearr_44903_44924[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44893 === (5))){
var inst_44872 = cljs.core.async.close_BANG_.call(null,tc);
var inst_44873 = cljs.core.async.close_BANG_.call(null,fc);
var state_44892__$1 = (function (){var statearr_44904 = state_44892;
(statearr_44904[(8)] = inst_44872);

return statearr_44904;
})();
var statearr_44905_44925 = state_44892__$1;
(statearr_44905_44925[(2)] = inst_44873);

(statearr_44905_44925[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44893 === (14))){
var inst_44886 = (state_44892[(2)]);
var state_44892__$1 = state_44892;
var statearr_44906_44926 = state_44892__$1;
(statearr_44906_44926[(2)] = inst_44886);

(statearr_44906_44926[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44893 === (10))){
var state_44892__$1 = state_44892;
var statearr_44907_44927 = state_44892__$1;
(statearr_44907_44927[(2)] = fc);

(statearr_44907_44927[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44893 === (8))){
var inst_44881 = (state_44892[(2)]);
var state_44892__$1 = state_44892;
if(cljs.core.truth_(inst_44881)){
var statearr_44908_44928 = state_44892__$1;
(statearr_44908_44928[(1)] = (12));

} else {
var statearr_44909_44929 = state_44892__$1;
(statearr_44909_44929[(1)] = (13));

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
});})(c__36422__auto___44915,tc,fc))
;
return ((function (switch__36331__auto__,c__36422__auto___44915,tc,fc){
return (function() {
var cljs$core$async$state_machine__36332__auto__ = null;
var cljs$core$async$state_machine__36332__auto____0 = (function (){
var statearr_44910 = [null,null,null,null,null,null,null,null,null];
(statearr_44910[(0)] = cljs$core$async$state_machine__36332__auto__);

(statearr_44910[(1)] = (1));

return statearr_44910;
});
var cljs$core$async$state_machine__36332__auto____1 = (function (state_44892){
while(true){
var ret_value__36333__auto__ = (function (){try{while(true){
var result__36334__auto__ = switch__36331__auto__.call(null,state_44892);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36334__auto__;
}
break;
}
}catch (e44911){if((e44911 instanceof Object)){
var ex__36335__auto__ = e44911;
var statearr_44912_44930 = state_44892;
(statearr_44912_44930[(5)] = ex__36335__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44892);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44911;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44931 = state_44892;
state_44892 = G__44931;
continue;
} else {
return ret_value__36333__auto__;
}
break;
}
});
cljs$core$async$state_machine__36332__auto__ = function(state_44892){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36332__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36332__auto____1.call(this,state_44892);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36332__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36332__auto____0;
cljs$core$async$state_machine__36332__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36332__auto____1;
return cljs$core$async$state_machine__36332__auto__;
})()
;})(switch__36331__auto__,c__36422__auto___44915,tc,fc))
})();
var state__36424__auto__ = (function (){var statearr_44913 = f__36423__auto__.call(null);
(statearr_44913[(6)] = c__36422__auto___44915);

return statearr_44913;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36424__auto__);
});})(c__36422__auto___44915,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__36422__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36422__auto__){
return (function (){
var f__36423__auto__ = (function (){var switch__36331__auto__ = ((function (c__36422__auto__){
return (function (state_44952){
var state_val_44953 = (state_44952[(1)]);
if((state_val_44953 === (7))){
var inst_44948 = (state_44952[(2)]);
var state_44952__$1 = state_44952;
var statearr_44954_44972 = state_44952__$1;
(statearr_44954_44972[(2)] = inst_44948);

(statearr_44954_44972[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44953 === (1))){
var inst_44932 = init;
var state_44952__$1 = (function (){var statearr_44955 = state_44952;
(statearr_44955[(7)] = inst_44932);

return statearr_44955;
})();
var statearr_44956_44973 = state_44952__$1;
(statearr_44956_44973[(2)] = null);

(statearr_44956_44973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44953 === (4))){
var inst_44935 = (state_44952[(8)]);
var inst_44935__$1 = (state_44952[(2)]);
var inst_44936 = (inst_44935__$1 == null);
var state_44952__$1 = (function (){var statearr_44957 = state_44952;
(statearr_44957[(8)] = inst_44935__$1);

return statearr_44957;
})();
if(cljs.core.truth_(inst_44936)){
var statearr_44958_44974 = state_44952__$1;
(statearr_44958_44974[(1)] = (5));

} else {
var statearr_44959_44975 = state_44952__$1;
(statearr_44959_44975[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44953 === (6))){
var inst_44935 = (state_44952[(8)]);
var inst_44932 = (state_44952[(7)]);
var inst_44939 = (state_44952[(9)]);
var inst_44939__$1 = f.call(null,inst_44932,inst_44935);
var inst_44940 = cljs.core.reduced_QMARK_.call(null,inst_44939__$1);
var state_44952__$1 = (function (){var statearr_44960 = state_44952;
(statearr_44960[(9)] = inst_44939__$1);

return statearr_44960;
})();
if(inst_44940){
var statearr_44961_44976 = state_44952__$1;
(statearr_44961_44976[(1)] = (8));

} else {
var statearr_44962_44977 = state_44952__$1;
(statearr_44962_44977[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44953 === (3))){
var inst_44950 = (state_44952[(2)]);
var state_44952__$1 = state_44952;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44952__$1,inst_44950);
} else {
if((state_val_44953 === (2))){
var state_44952__$1 = state_44952;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44952__$1,(4),ch);
} else {
if((state_val_44953 === (9))){
var inst_44939 = (state_44952[(9)]);
var inst_44932 = inst_44939;
var state_44952__$1 = (function (){var statearr_44963 = state_44952;
(statearr_44963[(7)] = inst_44932);

return statearr_44963;
})();
var statearr_44964_44978 = state_44952__$1;
(statearr_44964_44978[(2)] = null);

(statearr_44964_44978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44953 === (5))){
var inst_44932 = (state_44952[(7)]);
var state_44952__$1 = state_44952;
var statearr_44965_44979 = state_44952__$1;
(statearr_44965_44979[(2)] = inst_44932);

(statearr_44965_44979[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44953 === (10))){
var inst_44946 = (state_44952[(2)]);
var state_44952__$1 = state_44952;
var statearr_44966_44980 = state_44952__$1;
(statearr_44966_44980[(2)] = inst_44946);

(statearr_44966_44980[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44953 === (8))){
var inst_44939 = (state_44952[(9)]);
var inst_44942 = cljs.core.deref.call(null,inst_44939);
var state_44952__$1 = state_44952;
var statearr_44967_44981 = state_44952__$1;
(statearr_44967_44981[(2)] = inst_44942);

(statearr_44967_44981[(1)] = (10));


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
});})(c__36422__auto__))
;
return ((function (switch__36331__auto__,c__36422__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__36332__auto__ = null;
var cljs$core$async$reduce_$_state_machine__36332__auto____0 = (function (){
var statearr_44968 = [null,null,null,null,null,null,null,null,null,null];
(statearr_44968[(0)] = cljs$core$async$reduce_$_state_machine__36332__auto__);

(statearr_44968[(1)] = (1));

return statearr_44968;
});
var cljs$core$async$reduce_$_state_machine__36332__auto____1 = (function (state_44952){
while(true){
var ret_value__36333__auto__ = (function (){try{while(true){
var result__36334__auto__ = switch__36331__auto__.call(null,state_44952);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36334__auto__;
}
break;
}
}catch (e44969){if((e44969 instanceof Object)){
var ex__36335__auto__ = e44969;
var statearr_44970_44982 = state_44952;
(statearr_44970_44982[(5)] = ex__36335__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44952);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44969;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44983 = state_44952;
state_44952 = G__44983;
continue;
} else {
return ret_value__36333__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__36332__auto__ = function(state_44952){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__36332__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__36332__auto____1.call(this,state_44952);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__36332__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__36332__auto____0;
cljs$core$async$reduce_$_state_machine__36332__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__36332__auto____1;
return cljs$core$async$reduce_$_state_machine__36332__auto__;
})()
;})(switch__36331__auto__,c__36422__auto__))
})();
var state__36424__auto__ = (function (){var statearr_44971 = f__36423__auto__.call(null);
(statearr_44971[(6)] = c__36422__auto__);

return statearr_44971;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36424__auto__);
});})(c__36422__auto__))
);

return c__36422__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__36422__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36422__auto__,f__$1){
return (function (){
var f__36423__auto__ = (function (){var switch__36331__auto__ = ((function (c__36422__auto__,f__$1){
return (function (state_44989){
var state_val_44990 = (state_44989[(1)]);
if((state_val_44990 === (1))){
var inst_44984 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_44989__$1 = state_44989;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44989__$1,(2),inst_44984);
} else {
if((state_val_44990 === (2))){
var inst_44986 = (state_44989[(2)]);
var inst_44987 = f__$1.call(null,inst_44986);
var state_44989__$1 = state_44989;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44989__$1,inst_44987);
} else {
return null;
}
}
});})(c__36422__auto__,f__$1))
;
return ((function (switch__36331__auto__,c__36422__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__36332__auto__ = null;
var cljs$core$async$transduce_$_state_machine__36332__auto____0 = (function (){
var statearr_44991 = [null,null,null,null,null,null,null];
(statearr_44991[(0)] = cljs$core$async$transduce_$_state_machine__36332__auto__);

(statearr_44991[(1)] = (1));

return statearr_44991;
});
var cljs$core$async$transduce_$_state_machine__36332__auto____1 = (function (state_44989){
while(true){
var ret_value__36333__auto__ = (function (){try{while(true){
var result__36334__auto__ = switch__36331__auto__.call(null,state_44989);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36334__auto__;
}
break;
}
}catch (e44992){if((e44992 instanceof Object)){
var ex__36335__auto__ = e44992;
var statearr_44993_44995 = state_44989;
(statearr_44993_44995[(5)] = ex__36335__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44989);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44992;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44996 = state_44989;
state_44989 = G__44996;
continue;
} else {
return ret_value__36333__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__36332__auto__ = function(state_44989){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__36332__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__36332__auto____1.call(this,state_44989);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__36332__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__36332__auto____0;
cljs$core$async$transduce_$_state_machine__36332__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__36332__auto____1;
return cljs$core$async$transduce_$_state_machine__36332__auto__;
})()
;})(switch__36331__auto__,c__36422__auto__,f__$1))
})();
var state__36424__auto__ = (function (){var statearr_44994 = f__36423__auto__.call(null);
(statearr_44994[(6)] = c__36422__auto__);

return statearr_44994;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36424__auto__);
});})(c__36422__auto__,f__$1))
);

return c__36422__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__44998 = arguments.length;
switch (G__44998) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__36422__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36422__auto__){
return (function (){
var f__36423__auto__ = (function (){var switch__36331__auto__ = ((function (c__36422__auto__){
return (function (state_45023){
var state_val_45024 = (state_45023[(1)]);
if((state_val_45024 === (7))){
var inst_45005 = (state_45023[(2)]);
var state_45023__$1 = state_45023;
var statearr_45025_45046 = state_45023__$1;
(statearr_45025_45046[(2)] = inst_45005);

(statearr_45025_45046[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45024 === (1))){
var inst_44999 = cljs.core.seq.call(null,coll);
var inst_45000 = inst_44999;
var state_45023__$1 = (function (){var statearr_45026 = state_45023;
(statearr_45026[(7)] = inst_45000);

return statearr_45026;
})();
var statearr_45027_45047 = state_45023__$1;
(statearr_45027_45047[(2)] = null);

(statearr_45027_45047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45024 === (4))){
var inst_45000 = (state_45023[(7)]);
var inst_45003 = cljs.core.first.call(null,inst_45000);
var state_45023__$1 = state_45023;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45023__$1,(7),ch,inst_45003);
} else {
if((state_val_45024 === (13))){
var inst_45017 = (state_45023[(2)]);
var state_45023__$1 = state_45023;
var statearr_45028_45048 = state_45023__$1;
(statearr_45028_45048[(2)] = inst_45017);

(statearr_45028_45048[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45024 === (6))){
var inst_45008 = (state_45023[(2)]);
var state_45023__$1 = state_45023;
if(cljs.core.truth_(inst_45008)){
var statearr_45029_45049 = state_45023__$1;
(statearr_45029_45049[(1)] = (8));

} else {
var statearr_45030_45050 = state_45023__$1;
(statearr_45030_45050[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45024 === (3))){
var inst_45021 = (state_45023[(2)]);
var state_45023__$1 = state_45023;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45023__$1,inst_45021);
} else {
if((state_val_45024 === (12))){
var state_45023__$1 = state_45023;
var statearr_45031_45051 = state_45023__$1;
(statearr_45031_45051[(2)] = null);

(statearr_45031_45051[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45024 === (2))){
var inst_45000 = (state_45023[(7)]);
var state_45023__$1 = state_45023;
if(cljs.core.truth_(inst_45000)){
var statearr_45032_45052 = state_45023__$1;
(statearr_45032_45052[(1)] = (4));

} else {
var statearr_45033_45053 = state_45023__$1;
(statearr_45033_45053[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45024 === (11))){
var inst_45014 = cljs.core.async.close_BANG_.call(null,ch);
var state_45023__$1 = state_45023;
var statearr_45034_45054 = state_45023__$1;
(statearr_45034_45054[(2)] = inst_45014);

(statearr_45034_45054[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45024 === (9))){
var state_45023__$1 = state_45023;
if(cljs.core.truth_(close_QMARK_)){
var statearr_45035_45055 = state_45023__$1;
(statearr_45035_45055[(1)] = (11));

} else {
var statearr_45036_45056 = state_45023__$1;
(statearr_45036_45056[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45024 === (5))){
var inst_45000 = (state_45023[(7)]);
var state_45023__$1 = state_45023;
var statearr_45037_45057 = state_45023__$1;
(statearr_45037_45057[(2)] = inst_45000);

(statearr_45037_45057[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45024 === (10))){
var inst_45019 = (state_45023[(2)]);
var state_45023__$1 = state_45023;
var statearr_45038_45058 = state_45023__$1;
(statearr_45038_45058[(2)] = inst_45019);

(statearr_45038_45058[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45024 === (8))){
var inst_45000 = (state_45023[(7)]);
var inst_45010 = cljs.core.next.call(null,inst_45000);
var inst_45000__$1 = inst_45010;
var state_45023__$1 = (function (){var statearr_45039 = state_45023;
(statearr_45039[(7)] = inst_45000__$1);

return statearr_45039;
})();
var statearr_45040_45059 = state_45023__$1;
(statearr_45040_45059[(2)] = null);

(statearr_45040_45059[(1)] = (2));


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
});})(c__36422__auto__))
;
return ((function (switch__36331__auto__,c__36422__auto__){
return (function() {
var cljs$core$async$state_machine__36332__auto__ = null;
var cljs$core$async$state_machine__36332__auto____0 = (function (){
var statearr_45041 = [null,null,null,null,null,null,null,null];
(statearr_45041[(0)] = cljs$core$async$state_machine__36332__auto__);

(statearr_45041[(1)] = (1));

return statearr_45041;
});
var cljs$core$async$state_machine__36332__auto____1 = (function (state_45023){
while(true){
var ret_value__36333__auto__ = (function (){try{while(true){
var result__36334__auto__ = switch__36331__auto__.call(null,state_45023);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36334__auto__;
}
break;
}
}catch (e45042){if((e45042 instanceof Object)){
var ex__36335__auto__ = e45042;
var statearr_45043_45060 = state_45023;
(statearr_45043_45060[(5)] = ex__36335__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45023);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45042;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45061 = state_45023;
state_45023 = G__45061;
continue;
} else {
return ret_value__36333__auto__;
}
break;
}
});
cljs$core$async$state_machine__36332__auto__ = function(state_45023){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36332__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36332__auto____1.call(this,state_45023);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36332__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36332__auto____0;
cljs$core$async$state_machine__36332__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36332__auto____1;
return cljs$core$async$state_machine__36332__auto__;
})()
;})(switch__36331__auto__,c__36422__auto__))
})();
var state__36424__auto__ = (function (){var statearr_45044 = f__36423__auto__.call(null);
(statearr_45044[(6)] = c__36422__auto__);

return statearr_45044;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36424__auto__);
});})(c__36422__auto__))
);

return c__36422__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4243__auto__ = (((_ == null))?null:_);
var m__4244__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,_);
} else {
var m__4244__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4244__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m);
} else {
var m__4244__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45062 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45062 = (function (ch,cs,meta45063){
this.ch = ch;
this.cs = cs;
this.meta45063 = meta45063;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45062.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_45064,meta45063__$1){
var self__ = this;
var _45064__$1 = this;
return (new cljs.core.async.t_cljs$core$async45062(self__.ch,self__.cs,meta45063__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async45062.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_45064){
var self__ = this;
var _45064__$1 = this;
return self__.meta45063;
});})(cs))
;

cljs.core.async.t_cljs$core$async45062.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45062.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async45062.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45062.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async45062.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async45062.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async45062.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta45063","meta45063",48982190,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async45062.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45062.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45062";

cljs.core.async.t_cljs$core$async45062.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async45062");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45062.
 */
cljs.core.async.__GT_t_cljs$core$async45062 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async45062(ch__$1,cs__$1,meta45063){
return (new cljs.core.async.t_cljs$core$async45062(ch__$1,cs__$1,meta45063));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async45062(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__36422__auto___45284 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36422__auto___45284,cs,m,dchan,dctr,done){
return (function (){
var f__36423__auto__ = (function (){var switch__36331__auto__ = ((function (c__36422__auto___45284,cs,m,dchan,dctr,done){
return (function (state_45199){
var state_val_45200 = (state_45199[(1)]);
if((state_val_45200 === (7))){
var inst_45195 = (state_45199[(2)]);
var state_45199__$1 = state_45199;
var statearr_45201_45285 = state_45199__$1;
(statearr_45201_45285[(2)] = inst_45195);

(statearr_45201_45285[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45200 === (20))){
var inst_45098 = (state_45199[(7)]);
var inst_45110 = cljs.core.first.call(null,inst_45098);
var inst_45111 = cljs.core.nth.call(null,inst_45110,(0),null);
var inst_45112 = cljs.core.nth.call(null,inst_45110,(1),null);
var state_45199__$1 = (function (){var statearr_45202 = state_45199;
(statearr_45202[(8)] = inst_45111);

return statearr_45202;
})();
if(cljs.core.truth_(inst_45112)){
var statearr_45203_45286 = state_45199__$1;
(statearr_45203_45286[(1)] = (22));

} else {
var statearr_45204_45287 = state_45199__$1;
(statearr_45204_45287[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45200 === (27))){
var inst_45140 = (state_45199[(9)]);
var inst_45142 = (state_45199[(10)]);
var inst_45067 = (state_45199[(11)]);
var inst_45147 = (state_45199[(12)]);
var inst_45147__$1 = cljs.core._nth.call(null,inst_45140,inst_45142);
var inst_45148 = cljs.core.async.put_BANG_.call(null,inst_45147__$1,inst_45067,done);
var state_45199__$1 = (function (){var statearr_45205 = state_45199;
(statearr_45205[(12)] = inst_45147__$1);

return statearr_45205;
})();
if(cljs.core.truth_(inst_45148)){
var statearr_45206_45288 = state_45199__$1;
(statearr_45206_45288[(1)] = (30));

} else {
var statearr_45207_45289 = state_45199__$1;
(statearr_45207_45289[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45200 === (1))){
var state_45199__$1 = state_45199;
var statearr_45208_45290 = state_45199__$1;
(statearr_45208_45290[(2)] = null);

(statearr_45208_45290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45200 === (24))){
var inst_45098 = (state_45199[(7)]);
var inst_45117 = (state_45199[(2)]);
var inst_45118 = cljs.core.next.call(null,inst_45098);
var inst_45076 = inst_45118;
var inst_45077 = null;
var inst_45078 = (0);
var inst_45079 = (0);
var state_45199__$1 = (function (){var statearr_45209 = state_45199;
(statearr_45209[(13)] = inst_45079);

(statearr_45209[(14)] = inst_45076);

(statearr_45209[(15)] = inst_45117);

(statearr_45209[(16)] = inst_45078);

(statearr_45209[(17)] = inst_45077);

return statearr_45209;
})();
var statearr_45210_45291 = state_45199__$1;
(statearr_45210_45291[(2)] = null);

(statearr_45210_45291[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45200 === (39))){
var state_45199__$1 = state_45199;
var statearr_45214_45292 = state_45199__$1;
(statearr_45214_45292[(2)] = null);

(statearr_45214_45292[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45200 === (4))){
var inst_45067 = (state_45199[(11)]);
var inst_45067__$1 = (state_45199[(2)]);
var inst_45068 = (inst_45067__$1 == null);
var state_45199__$1 = (function (){var statearr_45215 = state_45199;
(statearr_45215[(11)] = inst_45067__$1);

return statearr_45215;
})();
if(cljs.core.truth_(inst_45068)){
var statearr_45216_45293 = state_45199__$1;
(statearr_45216_45293[(1)] = (5));

} else {
var statearr_45217_45294 = state_45199__$1;
(statearr_45217_45294[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45200 === (15))){
var inst_45079 = (state_45199[(13)]);
var inst_45076 = (state_45199[(14)]);
var inst_45078 = (state_45199[(16)]);
var inst_45077 = (state_45199[(17)]);
var inst_45094 = (state_45199[(2)]);
var inst_45095 = (inst_45079 + (1));
var tmp45211 = inst_45076;
var tmp45212 = inst_45078;
var tmp45213 = inst_45077;
var inst_45076__$1 = tmp45211;
var inst_45077__$1 = tmp45213;
var inst_45078__$1 = tmp45212;
var inst_45079__$1 = inst_45095;
var state_45199__$1 = (function (){var statearr_45218 = state_45199;
(statearr_45218[(13)] = inst_45079__$1);

(statearr_45218[(14)] = inst_45076__$1);

(statearr_45218[(18)] = inst_45094);

(statearr_45218[(16)] = inst_45078__$1);

(statearr_45218[(17)] = inst_45077__$1);

return statearr_45218;
})();
var statearr_45219_45295 = state_45199__$1;
(statearr_45219_45295[(2)] = null);

(statearr_45219_45295[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45200 === (21))){
var inst_45121 = (state_45199[(2)]);
var state_45199__$1 = state_45199;
var statearr_45223_45296 = state_45199__$1;
(statearr_45223_45296[(2)] = inst_45121);

(statearr_45223_45296[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45200 === (31))){
var inst_45147 = (state_45199[(12)]);
var inst_45151 = done.call(null,null);
var inst_45152 = cljs.core.async.untap_STAR_.call(null,m,inst_45147);
var state_45199__$1 = (function (){var statearr_45224 = state_45199;
(statearr_45224[(19)] = inst_45151);

return statearr_45224;
})();
var statearr_45225_45297 = state_45199__$1;
(statearr_45225_45297[(2)] = inst_45152);

(statearr_45225_45297[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45200 === (32))){
var inst_45139 = (state_45199[(20)]);
var inst_45140 = (state_45199[(9)]);
var inst_45142 = (state_45199[(10)]);
var inst_45141 = (state_45199[(21)]);
var inst_45154 = (state_45199[(2)]);
var inst_45155 = (inst_45142 + (1));
var tmp45220 = inst_45139;
var tmp45221 = inst_45140;
var tmp45222 = inst_45141;
var inst_45139__$1 = tmp45220;
var inst_45140__$1 = tmp45221;
var inst_45141__$1 = tmp45222;
var inst_45142__$1 = inst_45155;
var state_45199__$1 = (function (){var statearr_45226 = state_45199;
(statearr_45226[(20)] = inst_45139__$1);

(statearr_45226[(9)] = inst_45140__$1);

(statearr_45226[(10)] = inst_45142__$1);

(statearr_45226[(21)] = inst_45141__$1);

(statearr_45226[(22)] = inst_45154);

return statearr_45226;
})();
var statearr_45227_45298 = state_45199__$1;
(statearr_45227_45298[(2)] = null);

(statearr_45227_45298[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45200 === (40))){
var inst_45167 = (state_45199[(23)]);
var inst_45171 = done.call(null,null);
var inst_45172 = cljs.core.async.untap_STAR_.call(null,m,inst_45167);
var state_45199__$1 = (function (){var statearr_45228 = state_45199;
(statearr_45228[(24)] = inst_45171);

return statearr_45228;
})();
var statearr_45229_45299 = state_45199__$1;
(statearr_45229_45299[(2)] = inst_45172);

(statearr_45229_45299[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45200 === (33))){
var inst_45158 = (state_45199[(25)]);
var inst_45160 = cljs.core.chunked_seq_QMARK_.call(null,inst_45158);
var state_45199__$1 = state_45199;
if(inst_45160){
var statearr_45230_45300 = state_45199__$1;
(statearr_45230_45300[(1)] = (36));

} else {
var statearr_45231_45301 = state_45199__$1;
(statearr_45231_45301[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45200 === (13))){
var inst_45088 = (state_45199[(26)]);
var inst_45091 = cljs.core.async.close_BANG_.call(null,inst_45088);
var state_45199__$1 = state_45199;
var statearr_45232_45302 = state_45199__$1;
(statearr_45232_45302[(2)] = inst_45091);

(statearr_45232_45302[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45200 === (22))){
var inst_45111 = (state_45199[(8)]);
var inst_45114 = cljs.core.async.close_BANG_.call(null,inst_45111);
var state_45199__$1 = state_45199;
var statearr_45233_45303 = state_45199__$1;
(statearr_45233_45303[(2)] = inst_45114);

(statearr_45233_45303[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45200 === (36))){
var inst_45158 = (state_45199[(25)]);
var inst_45162 = cljs.core.chunk_first.call(null,inst_45158);
var inst_45163 = cljs.core.chunk_rest.call(null,inst_45158);
var inst_45164 = cljs.core.count.call(null,inst_45162);
var inst_45139 = inst_45163;
var inst_45140 = inst_45162;
var inst_45141 = inst_45164;
var inst_45142 = (0);
var state_45199__$1 = (function (){var statearr_45234 = state_45199;
(statearr_45234[(20)] = inst_45139);

(statearr_45234[(9)] = inst_45140);

(statearr_45234[(10)] = inst_45142);

(statearr_45234[(21)] = inst_45141);

return statearr_45234;
})();
var statearr_45235_45304 = state_45199__$1;
(statearr_45235_45304[(2)] = null);

(statearr_45235_45304[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45200 === (41))){
var inst_45158 = (state_45199[(25)]);
var inst_45174 = (state_45199[(2)]);
var inst_45175 = cljs.core.next.call(null,inst_45158);
var inst_45139 = inst_45175;
var inst_45140 = null;
var inst_45141 = (0);
var inst_45142 = (0);
var state_45199__$1 = (function (){var statearr_45236 = state_45199;
(statearr_45236[(20)] = inst_45139);

(statearr_45236[(9)] = inst_45140);

(statearr_45236[(10)] = inst_45142);

(statearr_45236[(21)] = inst_45141);

(statearr_45236[(27)] = inst_45174);

return statearr_45236;
})();
var statearr_45237_45305 = state_45199__$1;
(statearr_45237_45305[(2)] = null);

(statearr_45237_45305[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45200 === (43))){
var state_45199__$1 = state_45199;
var statearr_45238_45306 = state_45199__$1;
(statearr_45238_45306[(2)] = null);

(statearr_45238_45306[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45200 === (29))){
var inst_45183 = (state_45199[(2)]);
var state_45199__$1 = state_45199;
var statearr_45239_45307 = state_45199__$1;
(statearr_45239_45307[(2)] = inst_45183);

(statearr_45239_45307[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45200 === (44))){
var inst_45192 = (state_45199[(2)]);
var state_45199__$1 = (function (){var statearr_45240 = state_45199;
(statearr_45240[(28)] = inst_45192);

return statearr_45240;
})();
var statearr_45241_45308 = state_45199__$1;
(statearr_45241_45308[(2)] = null);

(statearr_45241_45308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45200 === (6))){
var inst_45131 = (state_45199[(29)]);
var inst_45130 = cljs.core.deref.call(null,cs);
var inst_45131__$1 = cljs.core.keys.call(null,inst_45130);
var inst_45132 = cljs.core.count.call(null,inst_45131__$1);
var inst_45133 = cljs.core.reset_BANG_.call(null,dctr,inst_45132);
var inst_45138 = cljs.core.seq.call(null,inst_45131__$1);
var inst_45139 = inst_45138;
var inst_45140 = null;
var inst_45141 = (0);
var inst_45142 = (0);
var state_45199__$1 = (function (){var statearr_45242 = state_45199;
(statearr_45242[(20)] = inst_45139);

(statearr_45242[(9)] = inst_45140);

(statearr_45242[(10)] = inst_45142);

(statearr_45242[(21)] = inst_45141);

(statearr_45242[(29)] = inst_45131__$1);

(statearr_45242[(30)] = inst_45133);

return statearr_45242;
})();
var statearr_45243_45309 = state_45199__$1;
(statearr_45243_45309[(2)] = null);

(statearr_45243_45309[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45200 === (28))){
var inst_45158 = (state_45199[(25)]);
var inst_45139 = (state_45199[(20)]);
var inst_45158__$1 = cljs.core.seq.call(null,inst_45139);
var state_45199__$1 = (function (){var statearr_45244 = state_45199;
(statearr_45244[(25)] = inst_45158__$1);

return statearr_45244;
})();
if(inst_45158__$1){
var statearr_45245_45310 = state_45199__$1;
(statearr_45245_45310[(1)] = (33));

} else {
var statearr_45246_45311 = state_45199__$1;
(statearr_45246_45311[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45200 === (25))){
var inst_45142 = (state_45199[(10)]);
var inst_45141 = (state_45199[(21)]);
var inst_45144 = (inst_45142 < inst_45141);
var inst_45145 = inst_45144;
var state_45199__$1 = state_45199;
if(cljs.core.truth_(inst_45145)){
var statearr_45247_45312 = state_45199__$1;
(statearr_45247_45312[(1)] = (27));

} else {
var statearr_45248_45313 = state_45199__$1;
(statearr_45248_45313[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45200 === (34))){
var state_45199__$1 = state_45199;
var statearr_45249_45314 = state_45199__$1;
(statearr_45249_45314[(2)] = null);

(statearr_45249_45314[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45200 === (17))){
var state_45199__$1 = state_45199;
var statearr_45250_45315 = state_45199__$1;
(statearr_45250_45315[(2)] = null);

(statearr_45250_45315[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45200 === (3))){
var inst_45197 = (state_45199[(2)]);
var state_45199__$1 = state_45199;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45199__$1,inst_45197);
} else {
if((state_val_45200 === (12))){
var inst_45126 = (state_45199[(2)]);
var state_45199__$1 = state_45199;
var statearr_45251_45316 = state_45199__$1;
(statearr_45251_45316[(2)] = inst_45126);

(statearr_45251_45316[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45200 === (2))){
var state_45199__$1 = state_45199;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45199__$1,(4),ch);
} else {
if((state_val_45200 === (23))){
var state_45199__$1 = state_45199;
var statearr_45252_45317 = state_45199__$1;
(statearr_45252_45317[(2)] = null);

(statearr_45252_45317[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45200 === (35))){
var inst_45181 = (state_45199[(2)]);
var state_45199__$1 = state_45199;
var statearr_45253_45318 = state_45199__$1;
(statearr_45253_45318[(2)] = inst_45181);

(statearr_45253_45318[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45200 === (19))){
var inst_45098 = (state_45199[(7)]);
var inst_45102 = cljs.core.chunk_first.call(null,inst_45098);
var inst_45103 = cljs.core.chunk_rest.call(null,inst_45098);
var inst_45104 = cljs.core.count.call(null,inst_45102);
var inst_45076 = inst_45103;
var inst_45077 = inst_45102;
var inst_45078 = inst_45104;
var inst_45079 = (0);
var state_45199__$1 = (function (){var statearr_45254 = state_45199;
(statearr_45254[(13)] = inst_45079);

(statearr_45254[(14)] = inst_45076);

(statearr_45254[(16)] = inst_45078);

(statearr_45254[(17)] = inst_45077);

return statearr_45254;
})();
var statearr_45255_45319 = state_45199__$1;
(statearr_45255_45319[(2)] = null);

(statearr_45255_45319[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45200 === (11))){
var inst_45076 = (state_45199[(14)]);
var inst_45098 = (state_45199[(7)]);
var inst_45098__$1 = cljs.core.seq.call(null,inst_45076);
var state_45199__$1 = (function (){var statearr_45256 = state_45199;
(statearr_45256[(7)] = inst_45098__$1);

return statearr_45256;
})();
if(inst_45098__$1){
var statearr_45257_45320 = state_45199__$1;
(statearr_45257_45320[(1)] = (16));

} else {
var statearr_45258_45321 = state_45199__$1;
(statearr_45258_45321[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45200 === (9))){
var inst_45128 = (state_45199[(2)]);
var state_45199__$1 = state_45199;
var statearr_45259_45322 = state_45199__$1;
(statearr_45259_45322[(2)] = inst_45128);

(statearr_45259_45322[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45200 === (5))){
var inst_45074 = cljs.core.deref.call(null,cs);
var inst_45075 = cljs.core.seq.call(null,inst_45074);
var inst_45076 = inst_45075;
var inst_45077 = null;
var inst_45078 = (0);
var inst_45079 = (0);
var state_45199__$1 = (function (){var statearr_45260 = state_45199;
(statearr_45260[(13)] = inst_45079);

(statearr_45260[(14)] = inst_45076);

(statearr_45260[(16)] = inst_45078);

(statearr_45260[(17)] = inst_45077);

return statearr_45260;
})();
var statearr_45261_45323 = state_45199__$1;
(statearr_45261_45323[(2)] = null);

(statearr_45261_45323[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45200 === (14))){
var state_45199__$1 = state_45199;
var statearr_45262_45324 = state_45199__$1;
(statearr_45262_45324[(2)] = null);

(statearr_45262_45324[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45200 === (45))){
var inst_45189 = (state_45199[(2)]);
var state_45199__$1 = state_45199;
var statearr_45263_45325 = state_45199__$1;
(statearr_45263_45325[(2)] = inst_45189);

(statearr_45263_45325[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45200 === (26))){
var inst_45131 = (state_45199[(29)]);
var inst_45185 = (state_45199[(2)]);
var inst_45186 = cljs.core.seq.call(null,inst_45131);
var state_45199__$1 = (function (){var statearr_45264 = state_45199;
(statearr_45264[(31)] = inst_45185);

return statearr_45264;
})();
if(inst_45186){
var statearr_45265_45326 = state_45199__$1;
(statearr_45265_45326[(1)] = (42));

} else {
var statearr_45266_45327 = state_45199__$1;
(statearr_45266_45327[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45200 === (16))){
var inst_45098 = (state_45199[(7)]);
var inst_45100 = cljs.core.chunked_seq_QMARK_.call(null,inst_45098);
var state_45199__$1 = state_45199;
if(inst_45100){
var statearr_45267_45328 = state_45199__$1;
(statearr_45267_45328[(1)] = (19));

} else {
var statearr_45268_45329 = state_45199__$1;
(statearr_45268_45329[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45200 === (38))){
var inst_45178 = (state_45199[(2)]);
var state_45199__$1 = state_45199;
var statearr_45269_45330 = state_45199__$1;
(statearr_45269_45330[(2)] = inst_45178);

(statearr_45269_45330[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45200 === (30))){
var state_45199__$1 = state_45199;
var statearr_45270_45331 = state_45199__$1;
(statearr_45270_45331[(2)] = null);

(statearr_45270_45331[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45200 === (10))){
var inst_45079 = (state_45199[(13)]);
var inst_45077 = (state_45199[(17)]);
var inst_45087 = cljs.core._nth.call(null,inst_45077,inst_45079);
var inst_45088 = cljs.core.nth.call(null,inst_45087,(0),null);
var inst_45089 = cljs.core.nth.call(null,inst_45087,(1),null);
var state_45199__$1 = (function (){var statearr_45271 = state_45199;
(statearr_45271[(26)] = inst_45088);

return statearr_45271;
})();
if(cljs.core.truth_(inst_45089)){
var statearr_45272_45332 = state_45199__$1;
(statearr_45272_45332[(1)] = (13));

} else {
var statearr_45273_45333 = state_45199__$1;
(statearr_45273_45333[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45200 === (18))){
var inst_45124 = (state_45199[(2)]);
var state_45199__$1 = state_45199;
var statearr_45274_45334 = state_45199__$1;
(statearr_45274_45334[(2)] = inst_45124);

(statearr_45274_45334[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45200 === (42))){
var state_45199__$1 = state_45199;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45199__$1,(45),dchan);
} else {
if((state_val_45200 === (37))){
var inst_45158 = (state_45199[(25)]);
var inst_45167 = (state_45199[(23)]);
var inst_45067 = (state_45199[(11)]);
var inst_45167__$1 = cljs.core.first.call(null,inst_45158);
var inst_45168 = cljs.core.async.put_BANG_.call(null,inst_45167__$1,inst_45067,done);
var state_45199__$1 = (function (){var statearr_45275 = state_45199;
(statearr_45275[(23)] = inst_45167__$1);

return statearr_45275;
})();
if(cljs.core.truth_(inst_45168)){
var statearr_45276_45335 = state_45199__$1;
(statearr_45276_45335[(1)] = (39));

} else {
var statearr_45277_45336 = state_45199__$1;
(statearr_45277_45336[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45200 === (8))){
var inst_45079 = (state_45199[(13)]);
var inst_45078 = (state_45199[(16)]);
var inst_45081 = (inst_45079 < inst_45078);
var inst_45082 = inst_45081;
var state_45199__$1 = state_45199;
if(cljs.core.truth_(inst_45082)){
var statearr_45278_45337 = state_45199__$1;
(statearr_45278_45337[(1)] = (10));

} else {
var statearr_45279_45338 = state_45199__$1;
(statearr_45279_45338[(1)] = (11));

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
});})(c__36422__auto___45284,cs,m,dchan,dctr,done))
;
return ((function (switch__36331__auto__,c__36422__auto___45284,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__36332__auto__ = null;
var cljs$core$async$mult_$_state_machine__36332__auto____0 = (function (){
var statearr_45280 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45280[(0)] = cljs$core$async$mult_$_state_machine__36332__auto__);

(statearr_45280[(1)] = (1));

return statearr_45280;
});
var cljs$core$async$mult_$_state_machine__36332__auto____1 = (function (state_45199){
while(true){
var ret_value__36333__auto__ = (function (){try{while(true){
var result__36334__auto__ = switch__36331__auto__.call(null,state_45199);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36334__auto__;
}
break;
}
}catch (e45281){if((e45281 instanceof Object)){
var ex__36335__auto__ = e45281;
var statearr_45282_45339 = state_45199;
(statearr_45282_45339[(5)] = ex__36335__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45199);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45281;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45340 = state_45199;
state_45199 = G__45340;
continue;
} else {
return ret_value__36333__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__36332__auto__ = function(state_45199){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__36332__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__36332__auto____1.call(this,state_45199);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__36332__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__36332__auto____0;
cljs$core$async$mult_$_state_machine__36332__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__36332__auto____1;
return cljs$core$async$mult_$_state_machine__36332__auto__;
})()
;})(switch__36331__auto__,c__36422__auto___45284,cs,m,dchan,dctr,done))
})();
var state__36424__auto__ = (function (){var statearr_45283 = f__36423__auto__.call(null);
(statearr_45283[(6)] = c__36422__auto___45284);

return statearr_45283;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36424__auto__);
});})(c__36422__auto___45284,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__45342 = arguments.length;
switch (G__45342) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m);
} else {
var m__4244__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,state_map);
} else {
var m__4244__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,mode);
} else {
var m__4244__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___45354 = arguments.length;
var i__4532__auto___45355 = (0);
while(true){
if((i__4532__auto___45355 < len__4531__auto___45354)){
args__4534__auto__.push((arguments[i__4532__auto___45355]));

var G__45356 = (i__4532__auto___45355 + (1));
i__4532__auto___45355 = G__45356;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__45348){
var map__45349 = p__45348;
var map__45349__$1 = ((((!((map__45349 == null)))?(((((map__45349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45349.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45349):map__45349);
var opts = map__45349__$1;
var statearr_45351_45357 = state;
(statearr_45351_45357[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__45349,map__45349__$1,opts){
return (function (val){
var statearr_45352_45358 = state;
(statearr_45352_45358[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__45349,map__45349__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_45353_45359 = state;
(statearr_45353_45359[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq45344){
var G__45345 = cljs.core.first.call(null,seq45344);
var seq45344__$1 = cljs.core.next.call(null,seq45344);
var G__45346 = cljs.core.first.call(null,seq45344__$1);
var seq45344__$2 = cljs.core.next.call(null,seq45344__$1);
var G__45347 = cljs.core.first.call(null,seq45344__$2);
var seq45344__$3 = cljs.core.next.call(null,seq45344__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45345,G__45346,G__45347,seq45344__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos)))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45360 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45360 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta45361){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta45361 = meta45361;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45360.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_45362,meta45361__$1){
var self__ = this;
var _45362__$1 = this;
return (new cljs.core.async.t_cljs$core$async45360(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta45361__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45360.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_45362){
var self__ = this;
var _45362__$1 = this;
return self__.meta45361;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45360.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45360.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45360.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45360.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45360.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45360.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45360.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45360.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45360.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta45361","meta45361",-744603565,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45360.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45360.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45360";

cljs.core.async.t_cljs$core$async45360.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async45360");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45360.
 */
cljs.core.async.__GT_t_cljs$core$async45360 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async45360(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta45361){
return (new cljs.core.async.t_cljs$core$async45360(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta45361));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async45360(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__36422__auto___45524 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36422__auto___45524,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__36423__auto__ = (function (){var switch__36331__auto__ = ((function (c__36422__auto___45524,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_45464){
var state_val_45465 = (state_45464[(1)]);
if((state_val_45465 === (7))){
var inst_45379 = (state_45464[(2)]);
var state_45464__$1 = state_45464;
var statearr_45466_45525 = state_45464__$1;
(statearr_45466_45525[(2)] = inst_45379);

(statearr_45466_45525[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45465 === (20))){
var inst_45391 = (state_45464[(7)]);
var state_45464__$1 = state_45464;
var statearr_45467_45526 = state_45464__$1;
(statearr_45467_45526[(2)] = inst_45391);

(statearr_45467_45526[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45465 === (27))){
var state_45464__$1 = state_45464;
var statearr_45468_45527 = state_45464__$1;
(statearr_45468_45527[(2)] = null);

(statearr_45468_45527[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45465 === (1))){
var inst_45366 = (state_45464[(8)]);
var inst_45366__$1 = calc_state.call(null);
var inst_45368 = (inst_45366__$1 == null);
var inst_45369 = cljs.core.not.call(null,inst_45368);
var state_45464__$1 = (function (){var statearr_45469 = state_45464;
(statearr_45469[(8)] = inst_45366__$1);

return statearr_45469;
})();
if(inst_45369){
var statearr_45470_45528 = state_45464__$1;
(statearr_45470_45528[(1)] = (2));

} else {
var statearr_45471_45529 = state_45464__$1;
(statearr_45471_45529[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45465 === (24))){
var inst_45438 = (state_45464[(9)]);
var inst_45415 = (state_45464[(10)]);
var inst_45424 = (state_45464[(11)]);
var inst_45438__$1 = inst_45415.call(null,inst_45424);
var state_45464__$1 = (function (){var statearr_45472 = state_45464;
(statearr_45472[(9)] = inst_45438__$1);

return statearr_45472;
})();
if(cljs.core.truth_(inst_45438__$1)){
var statearr_45473_45530 = state_45464__$1;
(statearr_45473_45530[(1)] = (29));

} else {
var statearr_45474_45531 = state_45464__$1;
(statearr_45474_45531[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45465 === (4))){
var inst_45382 = (state_45464[(2)]);
var state_45464__$1 = state_45464;
if(cljs.core.truth_(inst_45382)){
var statearr_45475_45532 = state_45464__$1;
(statearr_45475_45532[(1)] = (8));

} else {
var statearr_45476_45533 = state_45464__$1;
(statearr_45476_45533[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45465 === (15))){
var inst_45409 = (state_45464[(2)]);
var state_45464__$1 = state_45464;
if(cljs.core.truth_(inst_45409)){
var statearr_45477_45534 = state_45464__$1;
(statearr_45477_45534[(1)] = (19));

} else {
var statearr_45478_45535 = state_45464__$1;
(statearr_45478_45535[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45465 === (21))){
var inst_45414 = (state_45464[(12)]);
var inst_45414__$1 = (state_45464[(2)]);
var inst_45415 = cljs.core.get.call(null,inst_45414__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_45416 = cljs.core.get.call(null,inst_45414__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_45417 = cljs.core.get.call(null,inst_45414__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_45464__$1 = (function (){var statearr_45479 = state_45464;
(statearr_45479[(12)] = inst_45414__$1);

(statearr_45479[(10)] = inst_45415);

(statearr_45479[(13)] = inst_45416);

return statearr_45479;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_45464__$1,(22),inst_45417);
} else {
if((state_val_45465 === (31))){
var inst_45446 = (state_45464[(2)]);
var state_45464__$1 = state_45464;
if(cljs.core.truth_(inst_45446)){
var statearr_45480_45536 = state_45464__$1;
(statearr_45480_45536[(1)] = (32));

} else {
var statearr_45481_45537 = state_45464__$1;
(statearr_45481_45537[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45465 === (32))){
var inst_45423 = (state_45464[(14)]);
var state_45464__$1 = state_45464;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45464__$1,(35),out,inst_45423);
} else {
if((state_val_45465 === (33))){
var inst_45414 = (state_45464[(12)]);
var inst_45391 = inst_45414;
var state_45464__$1 = (function (){var statearr_45482 = state_45464;
(statearr_45482[(7)] = inst_45391);

return statearr_45482;
})();
var statearr_45483_45538 = state_45464__$1;
(statearr_45483_45538[(2)] = null);

(statearr_45483_45538[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45465 === (13))){
var inst_45391 = (state_45464[(7)]);
var inst_45398 = inst_45391.cljs$lang$protocol_mask$partition0$;
var inst_45399 = (inst_45398 & (64));
var inst_45400 = inst_45391.cljs$core$ISeq$;
var inst_45401 = (cljs.core.PROTOCOL_SENTINEL === inst_45400);
var inst_45402 = ((inst_45399) || (inst_45401));
var state_45464__$1 = state_45464;
if(cljs.core.truth_(inst_45402)){
var statearr_45484_45539 = state_45464__$1;
(statearr_45484_45539[(1)] = (16));

} else {
var statearr_45485_45540 = state_45464__$1;
(statearr_45485_45540[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45465 === (22))){
var inst_45423 = (state_45464[(14)]);
var inst_45424 = (state_45464[(11)]);
var inst_45422 = (state_45464[(2)]);
var inst_45423__$1 = cljs.core.nth.call(null,inst_45422,(0),null);
var inst_45424__$1 = cljs.core.nth.call(null,inst_45422,(1),null);
var inst_45425 = (inst_45423__$1 == null);
var inst_45426 = cljs.core._EQ_.call(null,inst_45424__$1,change);
var inst_45427 = ((inst_45425) || (inst_45426));
var state_45464__$1 = (function (){var statearr_45486 = state_45464;
(statearr_45486[(14)] = inst_45423__$1);

(statearr_45486[(11)] = inst_45424__$1);

return statearr_45486;
})();
if(cljs.core.truth_(inst_45427)){
var statearr_45487_45541 = state_45464__$1;
(statearr_45487_45541[(1)] = (23));

} else {
var statearr_45488_45542 = state_45464__$1;
(statearr_45488_45542[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45465 === (36))){
var inst_45414 = (state_45464[(12)]);
var inst_45391 = inst_45414;
var state_45464__$1 = (function (){var statearr_45489 = state_45464;
(statearr_45489[(7)] = inst_45391);

return statearr_45489;
})();
var statearr_45490_45543 = state_45464__$1;
(statearr_45490_45543[(2)] = null);

(statearr_45490_45543[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45465 === (29))){
var inst_45438 = (state_45464[(9)]);
var state_45464__$1 = state_45464;
var statearr_45491_45544 = state_45464__$1;
(statearr_45491_45544[(2)] = inst_45438);

(statearr_45491_45544[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45465 === (6))){
var state_45464__$1 = state_45464;
var statearr_45492_45545 = state_45464__$1;
(statearr_45492_45545[(2)] = false);

(statearr_45492_45545[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45465 === (28))){
var inst_45434 = (state_45464[(2)]);
var inst_45435 = calc_state.call(null);
var inst_45391 = inst_45435;
var state_45464__$1 = (function (){var statearr_45493 = state_45464;
(statearr_45493[(7)] = inst_45391);

(statearr_45493[(15)] = inst_45434);

return statearr_45493;
})();
var statearr_45494_45546 = state_45464__$1;
(statearr_45494_45546[(2)] = null);

(statearr_45494_45546[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45465 === (25))){
var inst_45460 = (state_45464[(2)]);
var state_45464__$1 = state_45464;
var statearr_45495_45547 = state_45464__$1;
(statearr_45495_45547[(2)] = inst_45460);

(statearr_45495_45547[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45465 === (34))){
var inst_45458 = (state_45464[(2)]);
var state_45464__$1 = state_45464;
var statearr_45496_45548 = state_45464__$1;
(statearr_45496_45548[(2)] = inst_45458);

(statearr_45496_45548[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45465 === (17))){
var state_45464__$1 = state_45464;
var statearr_45497_45549 = state_45464__$1;
(statearr_45497_45549[(2)] = false);

(statearr_45497_45549[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45465 === (3))){
var state_45464__$1 = state_45464;
var statearr_45498_45550 = state_45464__$1;
(statearr_45498_45550[(2)] = false);

(statearr_45498_45550[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45465 === (12))){
var inst_45462 = (state_45464[(2)]);
var state_45464__$1 = state_45464;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45464__$1,inst_45462);
} else {
if((state_val_45465 === (2))){
var inst_45366 = (state_45464[(8)]);
var inst_45371 = inst_45366.cljs$lang$protocol_mask$partition0$;
var inst_45372 = (inst_45371 & (64));
var inst_45373 = inst_45366.cljs$core$ISeq$;
var inst_45374 = (cljs.core.PROTOCOL_SENTINEL === inst_45373);
var inst_45375 = ((inst_45372) || (inst_45374));
var state_45464__$1 = state_45464;
if(cljs.core.truth_(inst_45375)){
var statearr_45499_45551 = state_45464__$1;
(statearr_45499_45551[(1)] = (5));

} else {
var statearr_45500_45552 = state_45464__$1;
(statearr_45500_45552[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45465 === (23))){
var inst_45423 = (state_45464[(14)]);
var inst_45429 = (inst_45423 == null);
var state_45464__$1 = state_45464;
if(cljs.core.truth_(inst_45429)){
var statearr_45501_45553 = state_45464__$1;
(statearr_45501_45553[(1)] = (26));

} else {
var statearr_45502_45554 = state_45464__$1;
(statearr_45502_45554[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45465 === (35))){
var inst_45449 = (state_45464[(2)]);
var state_45464__$1 = state_45464;
if(cljs.core.truth_(inst_45449)){
var statearr_45503_45555 = state_45464__$1;
(statearr_45503_45555[(1)] = (36));

} else {
var statearr_45504_45556 = state_45464__$1;
(statearr_45504_45556[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45465 === (19))){
var inst_45391 = (state_45464[(7)]);
var inst_45411 = cljs.core.apply.call(null,cljs.core.hash_map,inst_45391);
var state_45464__$1 = state_45464;
var statearr_45505_45557 = state_45464__$1;
(statearr_45505_45557[(2)] = inst_45411);

(statearr_45505_45557[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45465 === (11))){
var inst_45391 = (state_45464[(7)]);
var inst_45395 = (inst_45391 == null);
var inst_45396 = cljs.core.not.call(null,inst_45395);
var state_45464__$1 = state_45464;
if(inst_45396){
var statearr_45506_45558 = state_45464__$1;
(statearr_45506_45558[(1)] = (13));

} else {
var statearr_45507_45559 = state_45464__$1;
(statearr_45507_45559[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45465 === (9))){
var inst_45366 = (state_45464[(8)]);
var state_45464__$1 = state_45464;
var statearr_45508_45560 = state_45464__$1;
(statearr_45508_45560[(2)] = inst_45366);

(statearr_45508_45560[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45465 === (5))){
var state_45464__$1 = state_45464;
var statearr_45509_45561 = state_45464__$1;
(statearr_45509_45561[(2)] = true);

(statearr_45509_45561[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45465 === (14))){
var state_45464__$1 = state_45464;
var statearr_45510_45562 = state_45464__$1;
(statearr_45510_45562[(2)] = false);

(statearr_45510_45562[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45465 === (26))){
var inst_45424 = (state_45464[(11)]);
var inst_45431 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_45424);
var state_45464__$1 = state_45464;
var statearr_45511_45563 = state_45464__$1;
(statearr_45511_45563[(2)] = inst_45431);

(statearr_45511_45563[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45465 === (16))){
var state_45464__$1 = state_45464;
var statearr_45512_45564 = state_45464__$1;
(statearr_45512_45564[(2)] = true);

(statearr_45512_45564[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45465 === (38))){
var inst_45454 = (state_45464[(2)]);
var state_45464__$1 = state_45464;
var statearr_45513_45565 = state_45464__$1;
(statearr_45513_45565[(2)] = inst_45454);

(statearr_45513_45565[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45465 === (30))){
var inst_45415 = (state_45464[(10)]);
var inst_45416 = (state_45464[(13)]);
var inst_45424 = (state_45464[(11)]);
var inst_45441 = cljs.core.empty_QMARK_.call(null,inst_45415);
var inst_45442 = inst_45416.call(null,inst_45424);
var inst_45443 = cljs.core.not.call(null,inst_45442);
var inst_45444 = ((inst_45441) && (inst_45443));
var state_45464__$1 = state_45464;
var statearr_45514_45566 = state_45464__$1;
(statearr_45514_45566[(2)] = inst_45444);

(statearr_45514_45566[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45465 === (10))){
var inst_45366 = (state_45464[(8)]);
var inst_45387 = (state_45464[(2)]);
var inst_45388 = cljs.core.get.call(null,inst_45387,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_45389 = cljs.core.get.call(null,inst_45387,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_45390 = cljs.core.get.call(null,inst_45387,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_45391 = inst_45366;
var state_45464__$1 = (function (){var statearr_45515 = state_45464;
(statearr_45515[(7)] = inst_45391);

(statearr_45515[(16)] = inst_45388);

(statearr_45515[(17)] = inst_45390);

(statearr_45515[(18)] = inst_45389);

return statearr_45515;
})();
var statearr_45516_45567 = state_45464__$1;
(statearr_45516_45567[(2)] = null);

(statearr_45516_45567[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45465 === (18))){
var inst_45406 = (state_45464[(2)]);
var state_45464__$1 = state_45464;
var statearr_45517_45568 = state_45464__$1;
(statearr_45517_45568[(2)] = inst_45406);

(statearr_45517_45568[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45465 === (37))){
var state_45464__$1 = state_45464;
var statearr_45518_45569 = state_45464__$1;
(statearr_45518_45569[(2)] = null);

(statearr_45518_45569[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45465 === (8))){
var inst_45366 = (state_45464[(8)]);
var inst_45384 = cljs.core.apply.call(null,cljs.core.hash_map,inst_45366);
var state_45464__$1 = state_45464;
var statearr_45519_45570 = state_45464__$1;
(statearr_45519_45570[(2)] = inst_45384);

(statearr_45519_45570[(1)] = (10));


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
});})(c__36422__auto___45524,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__36331__auto__,c__36422__auto___45524,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__36332__auto__ = null;
var cljs$core$async$mix_$_state_machine__36332__auto____0 = (function (){
var statearr_45520 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45520[(0)] = cljs$core$async$mix_$_state_machine__36332__auto__);

(statearr_45520[(1)] = (1));

return statearr_45520;
});
var cljs$core$async$mix_$_state_machine__36332__auto____1 = (function (state_45464){
while(true){
var ret_value__36333__auto__ = (function (){try{while(true){
var result__36334__auto__ = switch__36331__auto__.call(null,state_45464);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36334__auto__;
}
break;
}
}catch (e45521){if((e45521 instanceof Object)){
var ex__36335__auto__ = e45521;
var statearr_45522_45571 = state_45464;
(statearr_45522_45571[(5)] = ex__36335__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45464);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45521;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45572 = state_45464;
state_45464 = G__45572;
continue;
} else {
return ret_value__36333__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__36332__auto__ = function(state_45464){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__36332__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__36332__auto____1.call(this,state_45464);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__36332__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__36332__auto____0;
cljs$core$async$mix_$_state_machine__36332__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__36332__auto____1;
return cljs$core$async$mix_$_state_machine__36332__auto__;
})()
;})(switch__36331__auto__,c__36422__auto___45524,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__36424__auto__ = (function (){var statearr_45523 = f__36423__auto__.call(null);
(statearr_45523[(6)] = c__36422__auto___45524);

return statearr_45523;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36424__auto__);
});})(c__36422__auto___45524,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4244__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p,v,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__45574 = arguments.length;
switch (G__45574) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p);
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p,v);
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__45578 = arguments.length;
switch (G__45578) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3949__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3949__auto__,mults){
return (function (p1__45576_SHARP_){
if(cljs.core.truth_(p1__45576_SHARP_.call(null,topic))){
return p1__45576_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__45576_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3949__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45579 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45579 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta45580){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta45580 = meta45580;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45579.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_45581,meta45580__$1){
var self__ = this;
var _45581__$1 = this;
return (new cljs.core.async.t_cljs$core$async45579(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta45580__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async45579.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_45581){
var self__ = this;
var _45581__$1 = this;
return self__.meta45580;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async45579.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45579.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async45579.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45579.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async45579.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async45579.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async45579.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async45579.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta45580","meta45580",222741533,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async45579.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45579.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45579";

cljs.core.async.t_cljs$core$async45579.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async45579");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45579.
 */
cljs.core.async.__GT_t_cljs$core$async45579 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async45579(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta45580){
return (new cljs.core.async.t_cljs$core$async45579(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta45580));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async45579(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__36422__auto___45699 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36422__auto___45699,mults,ensure_mult,p){
return (function (){
var f__36423__auto__ = (function (){var switch__36331__auto__ = ((function (c__36422__auto___45699,mults,ensure_mult,p){
return (function (state_45653){
var state_val_45654 = (state_45653[(1)]);
if((state_val_45654 === (7))){
var inst_45649 = (state_45653[(2)]);
var state_45653__$1 = state_45653;
var statearr_45655_45700 = state_45653__$1;
(statearr_45655_45700[(2)] = inst_45649);

(statearr_45655_45700[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45654 === (20))){
var state_45653__$1 = state_45653;
var statearr_45656_45701 = state_45653__$1;
(statearr_45656_45701[(2)] = null);

(statearr_45656_45701[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45654 === (1))){
var state_45653__$1 = state_45653;
var statearr_45657_45702 = state_45653__$1;
(statearr_45657_45702[(2)] = null);

(statearr_45657_45702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45654 === (24))){
var inst_45632 = (state_45653[(7)]);
var inst_45641 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_45632);
var state_45653__$1 = state_45653;
var statearr_45658_45703 = state_45653__$1;
(statearr_45658_45703[(2)] = inst_45641);

(statearr_45658_45703[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45654 === (4))){
var inst_45584 = (state_45653[(8)]);
var inst_45584__$1 = (state_45653[(2)]);
var inst_45585 = (inst_45584__$1 == null);
var state_45653__$1 = (function (){var statearr_45659 = state_45653;
(statearr_45659[(8)] = inst_45584__$1);

return statearr_45659;
})();
if(cljs.core.truth_(inst_45585)){
var statearr_45660_45704 = state_45653__$1;
(statearr_45660_45704[(1)] = (5));

} else {
var statearr_45661_45705 = state_45653__$1;
(statearr_45661_45705[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45654 === (15))){
var inst_45626 = (state_45653[(2)]);
var state_45653__$1 = state_45653;
var statearr_45662_45706 = state_45653__$1;
(statearr_45662_45706[(2)] = inst_45626);

(statearr_45662_45706[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45654 === (21))){
var inst_45646 = (state_45653[(2)]);
var state_45653__$1 = (function (){var statearr_45663 = state_45653;
(statearr_45663[(9)] = inst_45646);

return statearr_45663;
})();
var statearr_45664_45707 = state_45653__$1;
(statearr_45664_45707[(2)] = null);

(statearr_45664_45707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45654 === (13))){
var inst_45608 = (state_45653[(10)]);
var inst_45610 = cljs.core.chunked_seq_QMARK_.call(null,inst_45608);
var state_45653__$1 = state_45653;
if(inst_45610){
var statearr_45665_45708 = state_45653__$1;
(statearr_45665_45708[(1)] = (16));

} else {
var statearr_45666_45709 = state_45653__$1;
(statearr_45666_45709[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45654 === (22))){
var inst_45638 = (state_45653[(2)]);
var state_45653__$1 = state_45653;
if(cljs.core.truth_(inst_45638)){
var statearr_45667_45710 = state_45653__$1;
(statearr_45667_45710[(1)] = (23));

} else {
var statearr_45668_45711 = state_45653__$1;
(statearr_45668_45711[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45654 === (6))){
var inst_45632 = (state_45653[(7)]);
var inst_45584 = (state_45653[(8)]);
var inst_45634 = (state_45653[(11)]);
var inst_45632__$1 = topic_fn.call(null,inst_45584);
var inst_45633 = cljs.core.deref.call(null,mults);
var inst_45634__$1 = cljs.core.get.call(null,inst_45633,inst_45632__$1);
var state_45653__$1 = (function (){var statearr_45669 = state_45653;
(statearr_45669[(7)] = inst_45632__$1);

(statearr_45669[(11)] = inst_45634__$1);

return statearr_45669;
})();
if(cljs.core.truth_(inst_45634__$1)){
var statearr_45670_45712 = state_45653__$1;
(statearr_45670_45712[(1)] = (19));

} else {
var statearr_45671_45713 = state_45653__$1;
(statearr_45671_45713[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45654 === (25))){
var inst_45643 = (state_45653[(2)]);
var state_45653__$1 = state_45653;
var statearr_45672_45714 = state_45653__$1;
(statearr_45672_45714[(2)] = inst_45643);

(statearr_45672_45714[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45654 === (17))){
var inst_45608 = (state_45653[(10)]);
var inst_45617 = cljs.core.first.call(null,inst_45608);
var inst_45618 = cljs.core.async.muxch_STAR_.call(null,inst_45617);
var inst_45619 = cljs.core.async.close_BANG_.call(null,inst_45618);
var inst_45620 = cljs.core.next.call(null,inst_45608);
var inst_45594 = inst_45620;
var inst_45595 = null;
var inst_45596 = (0);
var inst_45597 = (0);
var state_45653__$1 = (function (){var statearr_45673 = state_45653;
(statearr_45673[(12)] = inst_45619);

(statearr_45673[(13)] = inst_45595);

(statearr_45673[(14)] = inst_45597);

(statearr_45673[(15)] = inst_45596);

(statearr_45673[(16)] = inst_45594);

return statearr_45673;
})();
var statearr_45674_45715 = state_45653__$1;
(statearr_45674_45715[(2)] = null);

(statearr_45674_45715[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45654 === (3))){
var inst_45651 = (state_45653[(2)]);
var state_45653__$1 = state_45653;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45653__$1,inst_45651);
} else {
if((state_val_45654 === (12))){
var inst_45628 = (state_45653[(2)]);
var state_45653__$1 = state_45653;
var statearr_45675_45716 = state_45653__$1;
(statearr_45675_45716[(2)] = inst_45628);

(statearr_45675_45716[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45654 === (2))){
var state_45653__$1 = state_45653;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45653__$1,(4),ch);
} else {
if((state_val_45654 === (23))){
var state_45653__$1 = state_45653;
var statearr_45676_45717 = state_45653__$1;
(statearr_45676_45717[(2)] = null);

(statearr_45676_45717[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45654 === (19))){
var inst_45584 = (state_45653[(8)]);
var inst_45634 = (state_45653[(11)]);
var inst_45636 = cljs.core.async.muxch_STAR_.call(null,inst_45634);
var state_45653__$1 = state_45653;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45653__$1,(22),inst_45636,inst_45584);
} else {
if((state_val_45654 === (11))){
var inst_45608 = (state_45653[(10)]);
var inst_45594 = (state_45653[(16)]);
var inst_45608__$1 = cljs.core.seq.call(null,inst_45594);
var state_45653__$1 = (function (){var statearr_45677 = state_45653;
(statearr_45677[(10)] = inst_45608__$1);

return statearr_45677;
})();
if(inst_45608__$1){
var statearr_45678_45718 = state_45653__$1;
(statearr_45678_45718[(1)] = (13));

} else {
var statearr_45679_45719 = state_45653__$1;
(statearr_45679_45719[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45654 === (9))){
var inst_45630 = (state_45653[(2)]);
var state_45653__$1 = state_45653;
var statearr_45680_45720 = state_45653__$1;
(statearr_45680_45720[(2)] = inst_45630);

(statearr_45680_45720[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45654 === (5))){
var inst_45591 = cljs.core.deref.call(null,mults);
var inst_45592 = cljs.core.vals.call(null,inst_45591);
var inst_45593 = cljs.core.seq.call(null,inst_45592);
var inst_45594 = inst_45593;
var inst_45595 = null;
var inst_45596 = (0);
var inst_45597 = (0);
var state_45653__$1 = (function (){var statearr_45681 = state_45653;
(statearr_45681[(13)] = inst_45595);

(statearr_45681[(14)] = inst_45597);

(statearr_45681[(15)] = inst_45596);

(statearr_45681[(16)] = inst_45594);

return statearr_45681;
})();
var statearr_45682_45721 = state_45653__$1;
(statearr_45682_45721[(2)] = null);

(statearr_45682_45721[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45654 === (14))){
var state_45653__$1 = state_45653;
var statearr_45686_45722 = state_45653__$1;
(statearr_45686_45722[(2)] = null);

(statearr_45686_45722[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45654 === (16))){
var inst_45608 = (state_45653[(10)]);
var inst_45612 = cljs.core.chunk_first.call(null,inst_45608);
var inst_45613 = cljs.core.chunk_rest.call(null,inst_45608);
var inst_45614 = cljs.core.count.call(null,inst_45612);
var inst_45594 = inst_45613;
var inst_45595 = inst_45612;
var inst_45596 = inst_45614;
var inst_45597 = (0);
var state_45653__$1 = (function (){var statearr_45687 = state_45653;
(statearr_45687[(13)] = inst_45595);

(statearr_45687[(14)] = inst_45597);

(statearr_45687[(15)] = inst_45596);

(statearr_45687[(16)] = inst_45594);

return statearr_45687;
})();
var statearr_45688_45723 = state_45653__$1;
(statearr_45688_45723[(2)] = null);

(statearr_45688_45723[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45654 === (10))){
var inst_45595 = (state_45653[(13)]);
var inst_45597 = (state_45653[(14)]);
var inst_45596 = (state_45653[(15)]);
var inst_45594 = (state_45653[(16)]);
var inst_45602 = cljs.core._nth.call(null,inst_45595,inst_45597);
var inst_45603 = cljs.core.async.muxch_STAR_.call(null,inst_45602);
var inst_45604 = cljs.core.async.close_BANG_.call(null,inst_45603);
var inst_45605 = (inst_45597 + (1));
var tmp45683 = inst_45595;
var tmp45684 = inst_45596;
var tmp45685 = inst_45594;
var inst_45594__$1 = tmp45685;
var inst_45595__$1 = tmp45683;
var inst_45596__$1 = tmp45684;
var inst_45597__$1 = inst_45605;
var state_45653__$1 = (function (){var statearr_45689 = state_45653;
(statearr_45689[(13)] = inst_45595__$1);

(statearr_45689[(14)] = inst_45597__$1);

(statearr_45689[(15)] = inst_45596__$1);

(statearr_45689[(17)] = inst_45604);

(statearr_45689[(16)] = inst_45594__$1);

return statearr_45689;
})();
var statearr_45690_45724 = state_45653__$1;
(statearr_45690_45724[(2)] = null);

(statearr_45690_45724[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45654 === (18))){
var inst_45623 = (state_45653[(2)]);
var state_45653__$1 = state_45653;
var statearr_45691_45725 = state_45653__$1;
(statearr_45691_45725[(2)] = inst_45623);

(statearr_45691_45725[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45654 === (8))){
var inst_45597 = (state_45653[(14)]);
var inst_45596 = (state_45653[(15)]);
var inst_45599 = (inst_45597 < inst_45596);
var inst_45600 = inst_45599;
var state_45653__$1 = state_45653;
if(cljs.core.truth_(inst_45600)){
var statearr_45692_45726 = state_45653__$1;
(statearr_45692_45726[(1)] = (10));

} else {
var statearr_45693_45727 = state_45653__$1;
(statearr_45693_45727[(1)] = (11));

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
});})(c__36422__auto___45699,mults,ensure_mult,p))
;
return ((function (switch__36331__auto__,c__36422__auto___45699,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__36332__auto__ = null;
var cljs$core$async$state_machine__36332__auto____0 = (function (){
var statearr_45694 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45694[(0)] = cljs$core$async$state_machine__36332__auto__);

(statearr_45694[(1)] = (1));

return statearr_45694;
});
var cljs$core$async$state_machine__36332__auto____1 = (function (state_45653){
while(true){
var ret_value__36333__auto__ = (function (){try{while(true){
var result__36334__auto__ = switch__36331__auto__.call(null,state_45653);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36334__auto__;
}
break;
}
}catch (e45695){if((e45695 instanceof Object)){
var ex__36335__auto__ = e45695;
var statearr_45696_45728 = state_45653;
(statearr_45696_45728[(5)] = ex__36335__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45653);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45695;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45729 = state_45653;
state_45653 = G__45729;
continue;
} else {
return ret_value__36333__auto__;
}
break;
}
});
cljs$core$async$state_machine__36332__auto__ = function(state_45653){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36332__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36332__auto____1.call(this,state_45653);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36332__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36332__auto____0;
cljs$core$async$state_machine__36332__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36332__auto____1;
return cljs$core$async$state_machine__36332__auto__;
})()
;})(switch__36331__auto__,c__36422__auto___45699,mults,ensure_mult,p))
})();
var state__36424__auto__ = (function (){var statearr_45697 = f__36423__auto__.call(null);
(statearr_45697[(6)] = c__36422__auto___45699);

return statearr_45697;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36424__auto__);
});})(c__36422__auto___45699,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__45731 = arguments.length;
switch (G__45731) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__45734 = arguments.length;
switch (G__45734) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__45737 = arguments.length;
switch (G__45737) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__36422__auto___45804 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36422__auto___45804,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__36423__auto__ = (function (){var switch__36331__auto__ = ((function (c__36422__auto___45804,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_45776){
var state_val_45777 = (state_45776[(1)]);
if((state_val_45777 === (7))){
var state_45776__$1 = state_45776;
var statearr_45778_45805 = state_45776__$1;
(statearr_45778_45805[(2)] = null);

(statearr_45778_45805[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45777 === (1))){
var state_45776__$1 = state_45776;
var statearr_45779_45806 = state_45776__$1;
(statearr_45779_45806[(2)] = null);

(statearr_45779_45806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45777 === (4))){
var inst_45740 = (state_45776[(7)]);
var inst_45742 = (inst_45740 < cnt);
var state_45776__$1 = state_45776;
if(cljs.core.truth_(inst_45742)){
var statearr_45780_45807 = state_45776__$1;
(statearr_45780_45807[(1)] = (6));

} else {
var statearr_45781_45808 = state_45776__$1;
(statearr_45781_45808[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45777 === (15))){
var inst_45772 = (state_45776[(2)]);
var state_45776__$1 = state_45776;
var statearr_45782_45809 = state_45776__$1;
(statearr_45782_45809[(2)] = inst_45772);

(statearr_45782_45809[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45777 === (13))){
var inst_45765 = cljs.core.async.close_BANG_.call(null,out);
var state_45776__$1 = state_45776;
var statearr_45783_45810 = state_45776__$1;
(statearr_45783_45810[(2)] = inst_45765);

(statearr_45783_45810[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45777 === (6))){
var state_45776__$1 = state_45776;
var statearr_45784_45811 = state_45776__$1;
(statearr_45784_45811[(2)] = null);

(statearr_45784_45811[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45777 === (3))){
var inst_45774 = (state_45776[(2)]);
var state_45776__$1 = state_45776;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45776__$1,inst_45774);
} else {
if((state_val_45777 === (12))){
var inst_45762 = (state_45776[(8)]);
var inst_45762__$1 = (state_45776[(2)]);
var inst_45763 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_45762__$1);
var state_45776__$1 = (function (){var statearr_45785 = state_45776;
(statearr_45785[(8)] = inst_45762__$1);

return statearr_45785;
})();
if(cljs.core.truth_(inst_45763)){
var statearr_45786_45812 = state_45776__$1;
(statearr_45786_45812[(1)] = (13));

} else {
var statearr_45787_45813 = state_45776__$1;
(statearr_45787_45813[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45777 === (2))){
var inst_45739 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_45740 = (0);
var state_45776__$1 = (function (){var statearr_45788 = state_45776;
(statearr_45788[(9)] = inst_45739);

(statearr_45788[(7)] = inst_45740);

return statearr_45788;
})();
var statearr_45789_45814 = state_45776__$1;
(statearr_45789_45814[(2)] = null);

(statearr_45789_45814[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45777 === (11))){
var inst_45740 = (state_45776[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_45776,(10),Object,null,(9));
var inst_45749 = chs__$1.call(null,inst_45740);
var inst_45750 = done.call(null,inst_45740);
var inst_45751 = cljs.core.async.take_BANG_.call(null,inst_45749,inst_45750);
var state_45776__$1 = state_45776;
var statearr_45790_45815 = state_45776__$1;
(statearr_45790_45815[(2)] = inst_45751);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45776__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45777 === (9))){
var inst_45740 = (state_45776[(7)]);
var inst_45753 = (state_45776[(2)]);
var inst_45754 = (inst_45740 + (1));
var inst_45740__$1 = inst_45754;
var state_45776__$1 = (function (){var statearr_45791 = state_45776;
(statearr_45791[(10)] = inst_45753);

(statearr_45791[(7)] = inst_45740__$1);

return statearr_45791;
})();
var statearr_45792_45816 = state_45776__$1;
(statearr_45792_45816[(2)] = null);

(statearr_45792_45816[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45777 === (5))){
var inst_45760 = (state_45776[(2)]);
var state_45776__$1 = (function (){var statearr_45793 = state_45776;
(statearr_45793[(11)] = inst_45760);

return statearr_45793;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45776__$1,(12),dchan);
} else {
if((state_val_45777 === (14))){
var inst_45762 = (state_45776[(8)]);
var inst_45767 = cljs.core.apply.call(null,f,inst_45762);
var state_45776__$1 = state_45776;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45776__$1,(16),out,inst_45767);
} else {
if((state_val_45777 === (16))){
var inst_45769 = (state_45776[(2)]);
var state_45776__$1 = (function (){var statearr_45794 = state_45776;
(statearr_45794[(12)] = inst_45769);

return statearr_45794;
})();
var statearr_45795_45817 = state_45776__$1;
(statearr_45795_45817[(2)] = null);

(statearr_45795_45817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45777 === (10))){
var inst_45744 = (state_45776[(2)]);
var inst_45745 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_45776__$1 = (function (){var statearr_45796 = state_45776;
(statearr_45796[(13)] = inst_45744);

return statearr_45796;
})();
var statearr_45797_45818 = state_45776__$1;
(statearr_45797_45818[(2)] = inst_45745);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45776__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45777 === (8))){
var inst_45758 = (state_45776[(2)]);
var state_45776__$1 = state_45776;
var statearr_45798_45819 = state_45776__$1;
(statearr_45798_45819[(2)] = inst_45758);

(statearr_45798_45819[(1)] = (5));


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
});})(c__36422__auto___45804,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__36331__auto__,c__36422__auto___45804,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__36332__auto__ = null;
var cljs$core$async$state_machine__36332__auto____0 = (function (){
var statearr_45799 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45799[(0)] = cljs$core$async$state_machine__36332__auto__);

(statearr_45799[(1)] = (1));

return statearr_45799;
});
var cljs$core$async$state_machine__36332__auto____1 = (function (state_45776){
while(true){
var ret_value__36333__auto__ = (function (){try{while(true){
var result__36334__auto__ = switch__36331__auto__.call(null,state_45776);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36334__auto__;
}
break;
}
}catch (e45800){if((e45800 instanceof Object)){
var ex__36335__auto__ = e45800;
var statearr_45801_45820 = state_45776;
(statearr_45801_45820[(5)] = ex__36335__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45776);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45800;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45821 = state_45776;
state_45776 = G__45821;
continue;
} else {
return ret_value__36333__auto__;
}
break;
}
});
cljs$core$async$state_machine__36332__auto__ = function(state_45776){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36332__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36332__auto____1.call(this,state_45776);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36332__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36332__auto____0;
cljs$core$async$state_machine__36332__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36332__auto____1;
return cljs$core$async$state_machine__36332__auto__;
})()
;})(switch__36331__auto__,c__36422__auto___45804,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__36424__auto__ = (function (){var statearr_45802 = f__36423__auto__.call(null);
(statearr_45802[(6)] = c__36422__auto___45804);

return statearr_45802;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36424__auto__);
});})(c__36422__auto___45804,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__45824 = arguments.length;
switch (G__45824) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__36422__auto___45878 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36422__auto___45878,out){
return (function (){
var f__36423__auto__ = (function (){var switch__36331__auto__ = ((function (c__36422__auto___45878,out){
return (function (state_45856){
var state_val_45857 = (state_45856[(1)]);
if((state_val_45857 === (7))){
var inst_45835 = (state_45856[(7)]);
var inst_45836 = (state_45856[(8)]);
var inst_45835__$1 = (state_45856[(2)]);
var inst_45836__$1 = cljs.core.nth.call(null,inst_45835__$1,(0),null);
var inst_45837 = cljs.core.nth.call(null,inst_45835__$1,(1),null);
var inst_45838 = (inst_45836__$1 == null);
var state_45856__$1 = (function (){var statearr_45858 = state_45856;
(statearr_45858[(7)] = inst_45835__$1);

(statearr_45858[(8)] = inst_45836__$1);

(statearr_45858[(9)] = inst_45837);

return statearr_45858;
})();
if(cljs.core.truth_(inst_45838)){
var statearr_45859_45879 = state_45856__$1;
(statearr_45859_45879[(1)] = (8));

} else {
var statearr_45860_45880 = state_45856__$1;
(statearr_45860_45880[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45857 === (1))){
var inst_45825 = cljs.core.vec.call(null,chs);
var inst_45826 = inst_45825;
var state_45856__$1 = (function (){var statearr_45861 = state_45856;
(statearr_45861[(10)] = inst_45826);

return statearr_45861;
})();
var statearr_45862_45881 = state_45856__$1;
(statearr_45862_45881[(2)] = null);

(statearr_45862_45881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45857 === (4))){
var inst_45826 = (state_45856[(10)]);
var state_45856__$1 = state_45856;
return cljs.core.async.ioc_alts_BANG_.call(null,state_45856__$1,(7),inst_45826);
} else {
if((state_val_45857 === (6))){
var inst_45852 = (state_45856[(2)]);
var state_45856__$1 = state_45856;
var statearr_45863_45882 = state_45856__$1;
(statearr_45863_45882[(2)] = inst_45852);

(statearr_45863_45882[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45857 === (3))){
var inst_45854 = (state_45856[(2)]);
var state_45856__$1 = state_45856;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45856__$1,inst_45854);
} else {
if((state_val_45857 === (2))){
var inst_45826 = (state_45856[(10)]);
var inst_45828 = cljs.core.count.call(null,inst_45826);
var inst_45829 = (inst_45828 > (0));
var state_45856__$1 = state_45856;
if(cljs.core.truth_(inst_45829)){
var statearr_45865_45883 = state_45856__$1;
(statearr_45865_45883[(1)] = (4));

} else {
var statearr_45866_45884 = state_45856__$1;
(statearr_45866_45884[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45857 === (11))){
var inst_45826 = (state_45856[(10)]);
var inst_45845 = (state_45856[(2)]);
var tmp45864 = inst_45826;
var inst_45826__$1 = tmp45864;
var state_45856__$1 = (function (){var statearr_45867 = state_45856;
(statearr_45867[(10)] = inst_45826__$1);

(statearr_45867[(11)] = inst_45845);

return statearr_45867;
})();
var statearr_45868_45885 = state_45856__$1;
(statearr_45868_45885[(2)] = null);

(statearr_45868_45885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45857 === (9))){
var inst_45836 = (state_45856[(8)]);
var state_45856__$1 = state_45856;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45856__$1,(11),out,inst_45836);
} else {
if((state_val_45857 === (5))){
var inst_45850 = cljs.core.async.close_BANG_.call(null,out);
var state_45856__$1 = state_45856;
var statearr_45869_45886 = state_45856__$1;
(statearr_45869_45886[(2)] = inst_45850);

(statearr_45869_45886[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45857 === (10))){
var inst_45848 = (state_45856[(2)]);
var state_45856__$1 = state_45856;
var statearr_45870_45887 = state_45856__$1;
(statearr_45870_45887[(2)] = inst_45848);

(statearr_45870_45887[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45857 === (8))){
var inst_45835 = (state_45856[(7)]);
var inst_45836 = (state_45856[(8)]);
var inst_45826 = (state_45856[(10)]);
var inst_45837 = (state_45856[(9)]);
var inst_45840 = (function (){var cs = inst_45826;
var vec__45831 = inst_45835;
var v = inst_45836;
var c = inst_45837;
return ((function (cs,vec__45831,v,c,inst_45835,inst_45836,inst_45826,inst_45837,state_val_45857,c__36422__auto___45878,out){
return (function (p1__45822_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__45822_SHARP_);
});
;})(cs,vec__45831,v,c,inst_45835,inst_45836,inst_45826,inst_45837,state_val_45857,c__36422__auto___45878,out))
})();
var inst_45841 = cljs.core.filterv.call(null,inst_45840,inst_45826);
var inst_45826__$1 = inst_45841;
var state_45856__$1 = (function (){var statearr_45871 = state_45856;
(statearr_45871[(10)] = inst_45826__$1);

return statearr_45871;
})();
var statearr_45872_45888 = state_45856__$1;
(statearr_45872_45888[(2)] = null);

(statearr_45872_45888[(1)] = (2));


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
});})(c__36422__auto___45878,out))
;
return ((function (switch__36331__auto__,c__36422__auto___45878,out){
return (function() {
var cljs$core$async$state_machine__36332__auto__ = null;
var cljs$core$async$state_machine__36332__auto____0 = (function (){
var statearr_45873 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45873[(0)] = cljs$core$async$state_machine__36332__auto__);

(statearr_45873[(1)] = (1));

return statearr_45873;
});
var cljs$core$async$state_machine__36332__auto____1 = (function (state_45856){
while(true){
var ret_value__36333__auto__ = (function (){try{while(true){
var result__36334__auto__ = switch__36331__auto__.call(null,state_45856);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36334__auto__;
}
break;
}
}catch (e45874){if((e45874 instanceof Object)){
var ex__36335__auto__ = e45874;
var statearr_45875_45889 = state_45856;
(statearr_45875_45889[(5)] = ex__36335__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45856);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45874;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45890 = state_45856;
state_45856 = G__45890;
continue;
} else {
return ret_value__36333__auto__;
}
break;
}
});
cljs$core$async$state_machine__36332__auto__ = function(state_45856){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36332__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36332__auto____1.call(this,state_45856);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36332__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36332__auto____0;
cljs$core$async$state_machine__36332__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36332__auto____1;
return cljs$core$async$state_machine__36332__auto__;
})()
;})(switch__36331__auto__,c__36422__auto___45878,out))
})();
var state__36424__auto__ = (function (){var statearr_45876 = f__36423__auto__.call(null);
(statearr_45876[(6)] = c__36422__auto___45878);

return statearr_45876;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36424__auto__);
});})(c__36422__auto___45878,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__45892 = arguments.length;
switch (G__45892) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__36422__auto___45937 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36422__auto___45937,out){
return (function (){
var f__36423__auto__ = (function (){var switch__36331__auto__ = ((function (c__36422__auto___45937,out){
return (function (state_45916){
var state_val_45917 = (state_45916[(1)]);
if((state_val_45917 === (7))){
var inst_45898 = (state_45916[(7)]);
var inst_45898__$1 = (state_45916[(2)]);
var inst_45899 = (inst_45898__$1 == null);
var inst_45900 = cljs.core.not.call(null,inst_45899);
var state_45916__$1 = (function (){var statearr_45918 = state_45916;
(statearr_45918[(7)] = inst_45898__$1);

return statearr_45918;
})();
if(inst_45900){
var statearr_45919_45938 = state_45916__$1;
(statearr_45919_45938[(1)] = (8));

} else {
var statearr_45920_45939 = state_45916__$1;
(statearr_45920_45939[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45917 === (1))){
var inst_45893 = (0);
var state_45916__$1 = (function (){var statearr_45921 = state_45916;
(statearr_45921[(8)] = inst_45893);

return statearr_45921;
})();
var statearr_45922_45940 = state_45916__$1;
(statearr_45922_45940[(2)] = null);

(statearr_45922_45940[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45917 === (4))){
var state_45916__$1 = state_45916;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45916__$1,(7),ch);
} else {
if((state_val_45917 === (6))){
var inst_45911 = (state_45916[(2)]);
var state_45916__$1 = state_45916;
var statearr_45923_45941 = state_45916__$1;
(statearr_45923_45941[(2)] = inst_45911);

(statearr_45923_45941[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45917 === (3))){
var inst_45913 = (state_45916[(2)]);
var inst_45914 = cljs.core.async.close_BANG_.call(null,out);
var state_45916__$1 = (function (){var statearr_45924 = state_45916;
(statearr_45924[(9)] = inst_45913);

return statearr_45924;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45916__$1,inst_45914);
} else {
if((state_val_45917 === (2))){
var inst_45893 = (state_45916[(8)]);
var inst_45895 = (inst_45893 < n);
var state_45916__$1 = state_45916;
if(cljs.core.truth_(inst_45895)){
var statearr_45925_45942 = state_45916__$1;
(statearr_45925_45942[(1)] = (4));

} else {
var statearr_45926_45943 = state_45916__$1;
(statearr_45926_45943[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45917 === (11))){
var inst_45893 = (state_45916[(8)]);
var inst_45903 = (state_45916[(2)]);
var inst_45904 = (inst_45893 + (1));
var inst_45893__$1 = inst_45904;
var state_45916__$1 = (function (){var statearr_45927 = state_45916;
(statearr_45927[(8)] = inst_45893__$1);

(statearr_45927[(10)] = inst_45903);

return statearr_45927;
})();
var statearr_45928_45944 = state_45916__$1;
(statearr_45928_45944[(2)] = null);

(statearr_45928_45944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45917 === (9))){
var state_45916__$1 = state_45916;
var statearr_45929_45945 = state_45916__$1;
(statearr_45929_45945[(2)] = null);

(statearr_45929_45945[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45917 === (5))){
var state_45916__$1 = state_45916;
var statearr_45930_45946 = state_45916__$1;
(statearr_45930_45946[(2)] = null);

(statearr_45930_45946[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45917 === (10))){
var inst_45908 = (state_45916[(2)]);
var state_45916__$1 = state_45916;
var statearr_45931_45947 = state_45916__$1;
(statearr_45931_45947[(2)] = inst_45908);

(statearr_45931_45947[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45917 === (8))){
var inst_45898 = (state_45916[(7)]);
var state_45916__$1 = state_45916;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45916__$1,(11),out,inst_45898);
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
});})(c__36422__auto___45937,out))
;
return ((function (switch__36331__auto__,c__36422__auto___45937,out){
return (function() {
var cljs$core$async$state_machine__36332__auto__ = null;
var cljs$core$async$state_machine__36332__auto____0 = (function (){
var statearr_45932 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45932[(0)] = cljs$core$async$state_machine__36332__auto__);

(statearr_45932[(1)] = (1));

return statearr_45932;
});
var cljs$core$async$state_machine__36332__auto____1 = (function (state_45916){
while(true){
var ret_value__36333__auto__ = (function (){try{while(true){
var result__36334__auto__ = switch__36331__auto__.call(null,state_45916);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36334__auto__;
}
break;
}
}catch (e45933){if((e45933 instanceof Object)){
var ex__36335__auto__ = e45933;
var statearr_45934_45948 = state_45916;
(statearr_45934_45948[(5)] = ex__36335__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45916);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45933;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45949 = state_45916;
state_45916 = G__45949;
continue;
} else {
return ret_value__36333__auto__;
}
break;
}
});
cljs$core$async$state_machine__36332__auto__ = function(state_45916){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36332__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36332__auto____1.call(this,state_45916);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36332__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36332__auto____0;
cljs$core$async$state_machine__36332__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36332__auto____1;
return cljs$core$async$state_machine__36332__auto__;
})()
;})(switch__36331__auto__,c__36422__auto___45937,out))
})();
var state__36424__auto__ = (function (){var statearr_45935 = f__36423__auto__.call(null);
(statearr_45935[(6)] = c__36422__auto___45937);

return statearr_45935;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36424__auto__);
});})(c__36422__auto___45937,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45951 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45951 = (function (f,ch,meta45952){
this.f = f;
this.ch = ch;
this.meta45952 = meta45952;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45951.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45953,meta45952__$1){
var self__ = this;
var _45953__$1 = this;
return (new cljs.core.async.t_cljs$core$async45951(self__.f,self__.ch,meta45952__$1));
});

cljs.core.async.t_cljs$core$async45951.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45953){
var self__ = this;
var _45953__$1 = this;
return self__.meta45952;
});

cljs.core.async.t_cljs$core$async45951.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45951.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async45951.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async45951.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45951.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45954 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45954 = (function (f,ch,meta45952,_,fn1,meta45955){
this.f = f;
this.ch = ch;
this.meta45952 = meta45952;
this._ = _;
this.fn1 = fn1;
this.meta45955 = meta45955;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45954.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_45956,meta45955__$1){
var self__ = this;
var _45956__$1 = this;
return (new cljs.core.async.t_cljs$core$async45954(self__.f,self__.ch,self__.meta45952,self__._,self__.fn1,meta45955__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async45954.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_45956){
var self__ = this;
var _45956__$1 = this;
return self__.meta45955;
});})(___$1))
;

cljs.core.async.t_cljs$core$async45954.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45954.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async45954.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async45954.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__45950_SHARP_){
return f1.call(null,(((p1__45950_SHARP_ == null))?null:self__.f.call(null,p1__45950_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async45954.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45952","meta45952",-403231157,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async45951","cljs.core.async/t_cljs$core$async45951",-957316243,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta45955","meta45955",608991097,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async45954.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45954.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45954";

cljs.core.async.t_cljs$core$async45954.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async45954");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45954.
 */
cljs.core.async.__GT_t_cljs$core$async45954 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async45954(f__$1,ch__$1,meta45952__$1,___$2,fn1__$1,meta45955){
return (new cljs.core.async.t_cljs$core$async45954(f__$1,ch__$1,meta45952__$1,___$2,fn1__$1,meta45955));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async45954(self__.f,self__.ch,self__.meta45952,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3938__auto__ = ret;
if(cljs.core.truth_(and__3938__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3938__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async45951.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45951.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async45951.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45952","meta45952",-403231157,null)], null);
});

cljs.core.async.t_cljs$core$async45951.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45951.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45951";

cljs.core.async.t_cljs$core$async45951.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async45951");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45951.
 */
cljs.core.async.__GT_t_cljs$core$async45951 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async45951(f__$1,ch__$1,meta45952){
return (new cljs.core.async.t_cljs$core$async45951(f__$1,ch__$1,meta45952));
});

}

return (new cljs.core.async.t_cljs$core$async45951(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45957 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45957 = (function (f,ch,meta45958){
this.f = f;
this.ch = ch;
this.meta45958 = meta45958;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45957.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45959,meta45958__$1){
var self__ = this;
var _45959__$1 = this;
return (new cljs.core.async.t_cljs$core$async45957(self__.f,self__.ch,meta45958__$1));
});

cljs.core.async.t_cljs$core$async45957.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45959){
var self__ = this;
var _45959__$1 = this;
return self__.meta45958;
});

cljs.core.async.t_cljs$core$async45957.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45957.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async45957.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45957.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async45957.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45957.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async45957.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45958","meta45958",1169352885,null)], null);
});

cljs.core.async.t_cljs$core$async45957.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45957.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45957";

cljs.core.async.t_cljs$core$async45957.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async45957");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45957.
 */
cljs.core.async.__GT_t_cljs$core$async45957 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async45957(f__$1,ch__$1,meta45958){
return (new cljs.core.async.t_cljs$core$async45957(f__$1,ch__$1,meta45958));
});

}

return (new cljs.core.async.t_cljs$core$async45957(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45960 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45960 = (function (p,ch,meta45961){
this.p = p;
this.ch = ch;
this.meta45961 = meta45961;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45960.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45962,meta45961__$1){
var self__ = this;
var _45962__$1 = this;
return (new cljs.core.async.t_cljs$core$async45960(self__.p,self__.ch,meta45961__$1));
});

cljs.core.async.t_cljs$core$async45960.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45962){
var self__ = this;
var _45962__$1 = this;
return self__.meta45961;
});

cljs.core.async.t_cljs$core$async45960.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45960.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async45960.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async45960.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45960.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async45960.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45960.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async45960.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45961","meta45961",-260837056,null)], null);
});

cljs.core.async.t_cljs$core$async45960.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45960.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45960";

cljs.core.async.t_cljs$core$async45960.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async45960");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45960.
 */
cljs.core.async.__GT_t_cljs$core$async45960 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async45960(p__$1,ch__$1,meta45961){
return (new cljs.core.async.t_cljs$core$async45960(p__$1,ch__$1,meta45961));
});

}

return (new cljs.core.async.t_cljs$core$async45960(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__45964 = arguments.length;
switch (G__45964) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__36422__auto___46004 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36422__auto___46004,out){
return (function (){
var f__36423__auto__ = (function (){var switch__36331__auto__ = ((function (c__36422__auto___46004,out){
return (function (state_45985){
var state_val_45986 = (state_45985[(1)]);
if((state_val_45986 === (7))){
var inst_45981 = (state_45985[(2)]);
var state_45985__$1 = state_45985;
var statearr_45987_46005 = state_45985__$1;
(statearr_45987_46005[(2)] = inst_45981);

(statearr_45987_46005[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45986 === (1))){
var state_45985__$1 = state_45985;
var statearr_45988_46006 = state_45985__$1;
(statearr_45988_46006[(2)] = null);

(statearr_45988_46006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45986 === (4))){
var inst_45967 = (state_45985[(7)]);
var inst_45967__$1 = (state_45985[(2)]);
var inst_45968 = (inst_45967__$1 == null);
var state_45985__$1 = (function (){var statearr_45989 = state_45985;
(statearr_45989[(7)] = inst_45967__$1);

return statearr_45989;
})();
if(cljs.core.truth_(inst_45968)){
var statearr_45990_46007 = state_45985__$1;
(statearr_45990_46007[(1)] = (5));

} else {
var statearr_45991_46008 = state_45985__$1;
(statearr_45991_46008[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45986 === (6))){
var inst_45967 = (state_45985[(7)]);
var inst_45972 = p.call(null,inst_45967);
var state_45985__$1 = state_45985;
if(cljs.core.truth_(inst_45972)){
var statearr_45992_46009 = state_45985__$1;
(statearr_45992_46009[(1)] = (8));

} else {
var statearr_45993_46010 = state_45985__$1;
(statearr_45993_46010[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45986 === (3))){
var inst_45983 = (state_45985[(2)]);
var state_45985__$1 = state_45985;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45985__$1,inst_45983);
} else {
if((state_val_45986 === (2))){
var state_45985__$1 = state_45985;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45985__$1,(4),ch);
} else {
if((state_val_45986 === (11))){
var inst_45975 = (state_45985[(2)]);
var state_45985__$1 = state_45985;
var statearr_45994_46011 = state_45985__$1;
(statearr_45994_46011[(2)] = inst_45975);

(statearr_45994_46011[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45986 === (9))){
var state_45985__$1 = state_45985;
var statearr_45995_46012 = state_45985__$1;
(statearr_45995_46012[(2)] = null);

(statearr_45995_46012[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45986 === (5))){
var inst_45970 = cljs.core.async.close_BANG_.call(null,out);
var state_45985__$1 = state_45985;
var statearr_45996_46013 = state_45985__$1;
(statearr_45996_46013[(2)] = inst_45970);

(statearr_45996_46013[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45986 === (10))){
var inst_45978 = (state_45985[(2)]);
var state_45985__$1 = (function (){var statearr_45997 = state_45985;
(statearr_45997[(8)] = inst_45978);

return statearr_45997;
})();
var statearr_45998_46014 = state_45985__$1;
(statearr_45998_46014[(2)] = null);

(statearr_45998_46014[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45986 === (8))){
var inst_45967 = (state_45985[(7)]);
var state_45985__$1 = state_45985;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45985__$1,(11),out,inst_45967);
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
});})(c__36422__auto___46004,out))
;
return ((function (switch__36331__auto__,c__36422__auto___46004,out){
return (function() {
var cljs$core$async$state_machine__36332__auto__ = null;
var cljs$core$async$state_machine__36332__auto____0 = (function (){
var statearr_45999 = [null,null,null,null,null,null,null,null,null];
(statearr_45999[(0)] = cljs$core$async$state_machine__36332__auto__);

(statearr_45999[(1)] = (1));

return statearr_45999;
});
var cljs$core$async$state_machine__36332__auto____1 = (function (state_45985){
while(true){
var ret_value__36333__auto__ = (function (){try{while(true){
var result__36334__auto__ = switch__36331__auto__.call(null,state_45985);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36334__auto__;
}
break;
}
}catch (e46000){if((e46000 instanceof Object)){
var ex__36335__auto__ = e46000;
var statearr_46001_46015 = state_45985;
(statearr_46001_46015[(5)] = ex__36335__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45985);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46000;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46016 = state_45985;
state_45985 = G__46016;
continue;
} else {
return ret_value__36333__auto__;
}
break;
}
});
cljs$core$async$state_machine__36332__auto__ = function(state_45985){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36332__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36332__auto____1.call(this,state_45985);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36332__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36332__auto____0;
cljs$core$async$state_machine__36332__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36332__auto____1;
return cljs$core$async$state_machine__36332__auto__;
})()
;})(switch__36331__auto__,c__36422__auto___46004,out))
})();
var state__36424__auto__ = (function (){var statearr_46002 = f__36423__auto__.call(null);
(statearr_46002[(6)] = c__36422__auto___46004);

return statearr_46002;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36424__auto__);
});})(c__36422__auto___46004,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__46018 = arguments.length;
switch (G__46018) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__36422__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36422__auto__){
return (function (){
var f__36423__auto__ = (function (){var switch__36331__auto__ = ((function (c__36422__auto__){
return (function (state_46081){
var state_val_46082 = (state_46081[(1)]);
if((state_val_46082 === (7))){
var inst_46077 = (state_46081[(2)]);
var state_46081__$1 = state_46081;
var statearr_46083_46121 = state_46081__$1;
(statearr_46083_46121[(2)] = inst_46077);

(statearr_46083_46121[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46082 === (20))){
var inst_46047 = (state_46081[(7)]);
var inst_46058 = (state_46081[(2)]);
var inst_46059 = cljs.core.next.call(null,inst_46047);
var inst_46033 = inst_46059;
var inst_46034 = null;
var inst_46035 = (0);
var inst_46036 = (0);
var state_46081__$1 = (function (){var statearr_46084 = state_46081;
(statearr_46084[(8)] = inst_46058);

(statearr_46084[(9)] = inst_46035);

(statearr_46084[(10)] = inst_46036);

(statearr_46084[(11)] = inst_46033);

(statearr_46084[(12)] = inst_46034);

return statearr_46084;
})();
var statearr_46085_46122 = state_46081__$1;
(statearr_46085_46122[(2)] = null);

(statearr_46085_46122[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46082 === (1))){
var state_46081__$1 = state_46081;
var statearr_46086_46123 = state_46081__$1;
(statearr_46086_46123[(2)] = null);

(statearr_46086_46123[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46082 === (4))){
var inst_46022 = (state_46081[(13)]);
var inst_46022__$1 = (state_46081[(2)]);
var inst_46023 = (inst_46022__$1 == null);
var state_46081__$1 = (function (){var statearr_46087 = state_46081;
(statearr_46087[(13)] = inst_46022__$1);

return statearr_46087;
})();
if(cljs.core.truth_(inst_46023)){
var statearr_46088_46124 = state_46081__$1;
(statearr_46088_46124[(1)] = (5));

} else {
var statearr_46089_46125 = state_46081__$1;
(statearr_46089_46125[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46082 === (15))){
var state_46081__$1 = state_46081;
var statearr_46093_46126 = state_46081__$1;
(statearr_46093_46126[(2)] = null);

(statearr_46093_46126[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46082 === (21))){
var state_46081__$1 = state_46081;
var statearr_46094_46127 = state_46081__$1;
(statearr_46094_46127[(2)] = null);

(statearr_46094_46127[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46082 === (13))){
var inst_46035 = (state_46081[(9)]);
var inst_46036 = (state_46081[(10)]);
var inst_46033 = (state_46081[(11)]);
var inst_46034 = (state_46081[(12)]);
var inst_46043 = (state_46081[(2)]);
var inst_46044 = (inst_46036 + (1));
var tmp46090 = inst_46035;
var tmp46091 = inst_46033;
var tmp46092 = inst_46034;
var inst_46033__$1 = tmp46091;
var inst_46034__$1 = tmp46092;
var inst_46035__$1 = tmp46090;
var inst_46036__$1 = inst_46044;
var state_46081__$1 = (function (){var statearr_46095 = state_46081;
(statearr_46095[(9)] = inst_46035__$1);

(statearr_46095[(10)] = inst_46036__$1);

(statearr_46095[(14)] = inst_46043);

(statearr_46095[(11)] = inst_46033__$1);

(statearr_46095[(12)] = inst_46034__$1);

return statearr_46095;
})();
var statearr_46096_46128 = state_46081__$1;
(statearr_46096_46128[(2)] = null);

(statearr_46096_46128[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46082 === (22))){
var state_46081__$1 = state_46081;
var statearr_46097_46129 = state_46081__$1;
(statearr_46097_46129[(2)] = null);

(statearr_46097_46129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46082 === (6))){
var inst_46022 = (state_46081[(13)]);
var inst_46031 = f.call(null,inst_46022);
var inst_46032 = cljs.core.seq.call(null,inst_46031);
var inst_46033 = inst_46032;
var inst_46034 = null;
var inst_46035 = (0);
var inst_46036 = (0);
var state_46081__$1 = (function (){var statearr_46098 = state_46081;
(statearr_46098[(9)] = inst_46035);

(statearr_46098[(10)] = inst_46036);

(statearr_46098[(11)] = inst_46033);

(statearr_46098[(12)] = inst_46034);

return statearr_46098;
})();
var statearr_46099_46130 = state_46081__$1;
(statearr_46099_46130[(2)] = null);

(statearr_46099_46130[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46082 === (17))){
var inst_46047 = (state_46081[(7)]);
var inst_46051 = cljs.core.chunk_first.call(null,inst_46047);
var inst_46052 = cljs.core.chunk_rest.call(null,inst_46047);
var inst_46053 = cljs.core.count.call(null,inst_46051);
var inst_46033 = inst_46052;
var inst_46034 = inst_46051;
var inst_46035 = inst_46053;
var inst_46036 = (0);
var state_46081__$1 = (function (){var statearr_46100 = state_46081;
(statearr_46100[(9)] = inst_46035);

(statearr_46100[(10)] = inst_46036);

(statearr_46100[(11)] = inst_46033);

(statearr_46100[(12)] = inst_46034);

return statearr_46100;
})();
var statearr_46101_46131 = state_46081__$1;
(statearr_46101_46131[(2)] = null);

(statearr_46101_46131[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46082 === (3))){
var inst_46079 = (state_46081[(2)]);
var state_46081__$1 = state_46081;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46081__$1,inst_46079);
} else {
if((state_val_46082 === (12))){
var inst_46067 = (state_46081[(2)]);
var state_46081__$1 = state_46081;
var statearr_46102_46132 = state_46081__$1;
(statearr_46102_46132[(2)] = inst_46067);

(statearr_46102_46132[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46082 === (2))){
var state_46081__$1 = state_46081;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46081__$1,(4),in$);
} else {
if((state_val_46082 === (23))){
var inst_46075 = (state_46081[(2)]);
var state_46081__$1 = state_46081;
var statearr_46103_46133 = state_46081__$1;
(statearr_46103_46133[(2)] = inst_46075);

(statearr_46103_46133[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46082 === (19))){
var inst_46062 = (state_46081[(2)]);
var state_46081__$1 = state_46081;
var statearr_46104_46134 = state_46081__$1;
(statearr_46104_46134[(2)] = inst_46062);

(statearr_46104_46134[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46082 === (11))){
var inst_46047 = (state_46081[(7)]);
var inst_46033 = (state_46081[(11)]);
var inst_46047__$1 = cljs.core.seq.call(null,inst_46033);
var state_46081__$1 = (function (){var statearr_46105 = state_46081;
(statearr_46105[(7)] = inst_46047__$1);

return statearr_46105;
})();
if(inst_46047__$1){
var statearr_46106_46135 = state_46081__$1;
(statearr_46106_46135[(1)] = (14));

} else {
var statearr_46107_46136 = state_46081__$1;
(statearr_46107_46136[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46082 === (9))){
var inst_46069 = (state_46081[(2)]);
var inst_46070 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_46081__$1 = (function (){var statearr_46108 = state_46081;
(statearr_46108[(15)] = inst_46069);

return statearr_46108;
})();
if(cljs.core.truth_(inst_46070)){
var statearr_46109_46137 = state_46081__$1;
(statearr_46109_46137[(1)] = (21));

} else {
var statearr_46110_46138 = state_46081__$1;
(statearr_46110_46138[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46082 === (5))){
var inst_46025 = cljs.core.async.close_BANG_.call(null,out);
var state_46081__$1 = state_46081;
var statearr_46111_46139 = state_46081__$1;
(statearr_46111_46139[(2)] = inst_46025);

(statearr_46111_46139[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46082 === (14))){
var inst_46047 = (state_46081[(7)]);
var inst_46049 = cljs.core.chunked_seq_QMARK_.call(null,inst_46047);
var state_46081__$1 = state_46081;
if(inst_46049){
var statearr_46112_46140 = state_46081__$1;
(statearr_46112_46140[(1)] = (17));

} else {
var statearr_46113_46141 = state_46081__$1;
(statearr_46113_46141[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46082 === (16))){
var inst_46065 = (state_46081[(2)]);
var state_46081__$1 = state_46081;
var statearr_46114_46142 = state_46081__$1;
(statearr_46114_46142[(2)] = inst_46065);

(statearr_46114_46142[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46082 === (10))){
var inst_46036 = (state_46081[(10)]);
var inst_46034 = (state_46081[(12)]);
var inst_46041 = cljs.core._nth.call(null,inst_46034,inst_46036);
var state_46081__$1 = state_46081;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46081__$1,(13),out,inst_46041);
} else {
if((state_val_46082 === (18))){
var inst_46047 = (state_46081[(7)]);
var inst_46056 = cljs.core.first.call(null,inst_46047);
var state_46081__$1 = state_46081;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46081__$1,(20),out,inst_46056);
} else {
if((state_val_46082 === (8))){
var inst_46035 = (state_46081[(9)]);
var inst_46036 = (state_46081[(10)]);
var inst_46038 = (inst_46036 < inst_46035);
var inst_46039 = inst_46038;
var state_46081__$1 = state_46081;
if(cljs.core.truth_(inst_46039)){
var statearr_46115_46143 = state_46081__$1;
(statearr_46115_46143[(1)] = (10));

} else {
var statearr_46116_46144 = state_46081__$1;
(statearr_46116_46144[(1)] = (11));

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
});})(c__36422__auto__))
;
return ((function (switch__36331__auto__,c__36422__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__36332__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__36332__auto____0 = (function (){
var statearr_46117 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46117[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__36332__auto__);

(statearr_46117[(1)] = (1));

return statearr_46117;
});
var cljs$core$async$mapcat_STAR__$_state_machine__36332__auto____1 = (function (state_46081){
while(true){
var ret_value__36333__auto__ = (function (){try{while(true){
var result__36334__auto__ = switch__36331__auto__.call(null,state_46081);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36334__auto__;
}
break;
}
}catch (e46118){if((e46118 instanceof Object)){
var ex__36335__auto__ = e46118;
var statearr_46119_46145 = state_46081;
(statearr_46119_46145[(5)] = ex__36335__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46081);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46118;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46146 = state_46081;
state_46081 = G__46146;
continue;
} else {
return ret_value__36333__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__36332__auto__ = function(state_46081){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__36332__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__36332__auto____1.call(this,state_46081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__36332__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__36332__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__36332__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__36332__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__36332__auto__;
})()
;})(switch__36331__auto__,c__36422__auto__))
})();
var state__36424__auto__ = (function (){var statearr_46120 = f__36423__auto__.call(null);
(statearr_46120[(6)] = c__36422__auto__);

return statearr_46120;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36424__auto__);
});})(c__36422__auto__))
);

return c__36422__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__46148 = arguments.length;
switch (G__46148) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__46151 = arguments.length;
switch (G__46151) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__46154 = arguments.length;
switch (G__46154) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__36422__auto___46201 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36422__auto___46201,out){
return (function (){
var f__36423__auto__ = (function (){var switch__36331__auto__ = ((function (c__36422__auto___46201,out){
return (function (state_46178){
var state_val_46179 = (state_46178[(1)]);
if((state_val_46179 === (7))){
var inst_46173 = (state_46178[(2)]);
var state_46178__$1 = state_46178;
var statearr_46180_46202 = state_46178__$1;
(statearr_46180_46202[(2)] = inst_46173);

(statearr_46180_46202[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46179 === (1))){
var inst_46155 = null;
var state_46178__$1 = (function (){var statearr_46181 = state_46178;
(statearr_46181[(7)] = inst_46155);

return statearr_46181;
})();
var statearr_46182_46203 = state_46178__$1;
(statearr_46182_46203[(2)] = null);

(statearr_46182_46203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46179 === (4))){
var inst_46158 = (state_46178[(8)]);
var inst_46158__$1 = (state_46178[(2)]);
var inst_46159 = (inst_46158__$1 == null);
var inst_46160 = cljs.core.not.call(null,inst_46159);
var state_46178__$1 = (function (){var statearr_46183 = state_46178;
(statearr_46183[(8)] = inst_46158__$1);

return statearr_46183;
})();
if(inst_46160){
var statearr_46184_46204 = state_46178__$1;
(statearr_46184_46204[(1)] = (5));

} else {
var statearr_46185_46205 = state_46178__$1;
(statearr_46185_46205[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46179 === (6))){
var state_46178__$1 = state_46178;
var statearr_46186_46206 = state_46178__$1;
(statearr_46186_46206[(2)] = null);

(statearr_46186_46206[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46179 === (3))){
var inst_46175 = (state_46178[(2)]);
var inst_46176 = cljs.core.async.close_BANG_.call(null,out);
var state_46178__$1 = (function (){var statearr_46187 = state_46178;
(statearr_46187[(9)] = inst_46175);

return statearr_46187;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46178__$1,inst_46176);
} else {
if((state_val_46179 === (2))){
var state_46178__$1 = state_46178;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46178__$1,(4),ch);
} else {
if((state_val_46179 === (11))){
var inst_46158 = (state_46178[(8)]);
var inst_46167 = (state_46178[(2)]);
var inst_46155 = inst_46158;
var state_46178__$1 = (function (){var statearr_46188 = state_46178;
(statearr_46188[(10)] = inst_46167);

(statearr_46188[(7)] = inst_46155);

return statearr_46188;
})();
var statearr_46189_46207 = state_46178__$1;
(statearr_46189_46207[(2)] = null);

(statearr_46189_46207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46179 === (9))){
var inst_46158 = (state_46178[(8)]);
var state_46178__$1 = state_46178;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46178__$1,(11),out,inst_46158);
} else {
if((state_val_46179 === (5))){
var inst_46158 = (state_46178[(8)]);
var inst_46155 = (state_46178[(7)]);
var inst_46162 = cljs.core._EQ_.call(null,inst_46158,inst_46155);
var state_46178__$1 = state_46178;
if(inst_46162){
var statearr_46191_46208 = state_46178__$1;
(statearr_46191_46208[(1)] = (8));

} else {
var statearr_46192_46209 = state_46178__$1;
(statearr_46192_46209[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46179 === (10))){
var inst_46170 = (state_46178[(2)]);
var state_46178__$1 = state_46178;
var statearr_46193_46210 = state_46178__$1;
(statearr_46193_46210[(2)] = inst_46170);

(statearr_46193_46210[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46179 === (8))){
var inst_46155 = (state_46178[(7)]);
var tmp46190 = inst_46155;
var inst_46155__$1 = tmp46190;
var state_46178__$1 = (function (){var statearr_46194 = state_46178;
(statearr_46194[(7)] = inst_46155__$1);

return statearr_46194;
})();
var statearr_46195_46211 = state_46178__$1;
(statearr_46195_46211[(2)] = null);

(statearr_46195_46211[(1)] = (2));


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
});})(c__36422__auto___46201,out))
;
return ((function (switch__36331__auto__,c__36422__auto___46201,out){
return (function() {
var cljs$core$async$state_machine__36332__auto__ = null;
var cljs$core$async$state_machine__36332__auto____0 = (function (){
var statearr_46196 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46196[(0)] = cljs$core$async$state_machine__36332__auto__);

(statearr_46196[(1)] = (1));

return statearr_46196;
});
var cljs$core$async$state_machine__36332__auto____1 = (function (state_46178){
while(true){
var ret_value__36333__auto__ = (function (){try{while(true){
var result__36334__auto__ = switch__36331__auto__.call(null,state_46178);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36334__auto__;
}
break;
}
}catch (e46197){if((e46197 instanceof Object)){
var ex__36335__auto__ = e46197;
var statearr_46198_46212 = state_46178;
(statearr_46198_46212[(5)] = ex__36335__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46178);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46197;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46213 = state_46178;
state_46178 = G__46213;
continue;
} else {
return ret_value__36333__auto__;
}
break;
}
});
cljs$core$async$state_machine__36332__auto__ = function(state_46178){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36332__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36332__auto____1.call(this,state_46178);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36332__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36332__auto____0;
cljs$core$async$state_machine__36332__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36332__auto____1;
return cljs$core$async$state_machine__36332__auto__;
})()
;})(switch__36331__auto__,c__36422__auto___46201,out))
})();
var state__36424__auto__ = (function (){var statearr_46199 = f__36423__auto__.call(null);
(statearr_46199[(6)] = c__36422__auto___46201);

return statearr_46199;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36424__auto__);
});})(c__36422__auto___46201,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__46215 = arguments.length;
switch (G__46215) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__36422__auto___46281 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36422__auto___46281,out){
return (function (){
var f__36423__auto__ = (function (){var switch__36331__auto__ = ((function (c__36422__auto___46281,out){
return (function (state_46253){
var state_val_46254 = (state_46253[(1)]);
if((state_val_46254 === (7))){
var inst_46249 = (state_46253[(2)]);
var state_46253__$1 = state_46253;
var statearr_46255_46282 = state_46253__$1;
(statearr_46255_46282[(2)] = inst_46249);

(statearr_46255_46282[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46254 === (1))){
var inst_46216 = (new Array(n));
var inst_46217 = inst_46216;
var inst_46218 = (0);
var state_46253__$1 = (function (){var statearr_46256 = state_46253;
(statearr_46256[(7)] = inst_46218);

(statearr_46256[(8)] = inst_46217);

return statearr_46256;
})();
var statearr_46257_46283 = state_46253__$1;
(statearr_46257_46283[(2)] = null);

(statearr_46257_46283[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46254 === (4))){
var inst_46221 = (state_46253[(9)]);
var inst_46221__$1 = (state_46253[(2)]);
var inst_46222 = (inst_46221__$1 == null);
var inst_46223 = cljs.core.not.call(null,inst_46222);
var state_46253__$1 = (function (){var statearr_46258 = state_46253;
(statearr_46258[(9)] = inst_46221__$1);

return statearr_46258;
})();
if(inst_46223){
var statearr_46259_46284 = state_46253__$1;
(statearr_46259_46284[(1)] = (5));

} else {
var statearr_46260_46285 = state_46253__$1;
(statearr_46260_46285[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46254 === (15))){
var inst_46243 = (state_46253[(2)]);
var state_46253__$1 = state_46253;
var statearr_46261_46286 = state_46253__$1;
(statearr_46261_46286[(2)] = inst_46243);

(statearr_46261_46286[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46254 === (13))){
var state_46253__$1 = state_46253;
var statearr_46262_46287 = state_46253__$1;
(statearr_46262_46287[(2)] = null);

(statearr_46262_46287[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46254 === (6))){
var inst_46218 = (state_46253[(7)]);
var inst_46239 = (inst_46218 > (0));
var state_46253__$1 = state_46253;
if(cljs.core.truth_(inst_46239)){
var statearr_46263_46288 = state_46253__$1;
(statearr_46263_46288[(1)] = (12));

} else {
var statearr_46264_46289 = state_46253__$1;
(statearr_46264_46289[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46254 === (3))){
var inst_46251 = (state_46253[(2)]);
var state_46253__$1 = state_46253;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46253__$1,inst_46251);
} else {
if((state_val_46254 === (12))){
var inst_46217 = (state_46253[(8)]);
var inst_46241 = cljs.core.vec.call(null,inst_46217);
var state_46253__$1 = state_46253;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46253__$1,(15),out,inst_46241);
} else {
if((state_val_46254 === (2))){
var state_46253__$1 = state_46253;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46253__$1,(4),ch);
} else {
if((state_val_46254 === (11))){
var inst_46233 = (state_46253[(2)]);
var inst_46234 = (new Array(n));
var inst_46217 = inst_46234;
var inst_46218 = (0);
var state_46253__$1 = (function (){var statearr_46265 = state_46253;
(statearr_46265[(7)] = inst_46218);

(statearr_46265[(8)] = inst_46217);

(statearr_46265[(10)] = inst_46233);

return statearr_46265;
})();
var statearr_46266_46290 = state_46253__$1;
(statearr_46266_46290[(2)] = null);

(statearr_46266_46290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46254 === (9))){
var inst_46217 = (state_46253[(8)]);
var inst_46231 = cljs.core.vec.call(null,inst_46217);
var state_46253__$1 = state_46253;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46253__$1,(11),out,inst_46231);
} else {
if((state_val_46254 === (5))){
var inst_46218 = (state_46253[(7)]);
var inst_46221 = (state_46253[(9)]);
var inst_46226 = (state_46253[(11)]);
var inst_46217 = (state_46253[(8)]);
var inst_46225 = (inst_46217[inst_46218] = inst_46221);
var inst_46226__$1 = (inst_46218 + (1));
var inst_46227 = (inst_46226__$1 < n);
var state_46253__$1 = (function (){var statearr_46267 = state_46253;
(statearr_46267[(11)] = inst_46226__$1);

(statearr_46267[(12)] = inst_46225);

return statearr_46267;
})();
if(cljs.core.truth_(inst_46227)){
var statearr_46268_46291 = state_46253__$1;
(statearr_46268_46291[(1)] = (8));

} else {
var statearr_46269_46292 = state_46253__$1;
(statearr_46269_46292[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46254 === (14))){
var inst_46246 = (state_46253[(2)]);
var inst_46247 = cljs.core.async.close_BANG_.call(null,out);
var state_46253__$1 = (function (){var statearr_46271 = state_46253;
(statearr_46271[(13)] = inst_46246);

return statearr_46271;
})();
var statearr_46272_46293 = state_46253__$1;
(statearr_46272_46293[(2)] = inst_46247);

(statearr_46272_46293[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46254 === (10))){
var inst_46237 = (state_46253[(2)]);
var state_46253__$1 = state_46253;
var statearr_46273_46294 = state_46253__$1;
(statearr_46273_46294[(2)] = inst_46237);

(statearr_46273_46294[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46254 === (8))){
var inst_46226 = (state_46253[(11)]);
var inst_46217 = (state_46253[(8)]);
var tmp46270 = inst_46217;
var inst_46217__$1 = tmp46270;
var inst_46218 = inst_46226;
var state_46253__$1 = (function (){var statearr_46274 = state_46253;
(statearr_46274[(7)] = inst_46218);

(statearr_46274[(8)] = inst_46217__$1);

return statearr_46274;
})();
var statearr_46275_46295 = state_46253__$1;
(statearr_46275_46295[(2)] = null);

(statearr_46275_46295[(1)] = (2));


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
});})(c__36422__auto___46281,out))
;
return ((function (switch__36331__auto__,c__36422__auto___46281,out){
return (function() {
var cljs$core$async$state_machine__36332__auto__ = null;
var cljs$core$async$state_machine__36332__auto____0 = (function (){
var statearr_46276 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46276[(0)] = cljs$core$async$state_machine__36332__auto__);

(statearr_46276[(1)] = (1));

return statearr_46276;
});
var cljs$core$async$state_machine__36332__auto____1 = (function (state_46253){
while(true){
var ret_value__36333__auto__ = (function (){try{while(true){
var result__36334__auto__ = switch__36331__auto__.call(null,state_46253);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36334__auto__;
}
break;
}
}catch (e46277){if((e46277 instanceof Object)){
var ex__36335__auto__ = e46277;
var statearr_46278_46296 = state_46253;
(statearr_46278_46296[(5)] = ex__36335__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46253);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46277;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46297 = state_46253;
state_46253 = G__46297;
continue;
} else {
return ret_value__36333__auto__;
}
break;
}
});
cljs$core$async$state_machine__36332__auto__ = function(state_46253){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36332__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36332__auto____1.call(this,state_46253);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36332__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36332__auto____0;
cljs$core$async$state_machine__36332__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36332__auto____1;
return cljs$core$async$state_machine__36332__auto__;
})()
;})(switch__36331__auto__,c__36422__auto___46281,out))
})();
var state__36424__auto__ = (function (){var statearr_46279 = f__36423__auto__.call(null);
(statearr_46279[(6)] = c__36422__auto___46281);

return statearr_46279;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36424__auto__);
});})(c__36422__auto___46281,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__46299 = arguments.length;
switch (G__46299) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__36422__auto___46369 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__36422__auto___46369,out){
return (function (){
var f__36423__auto__ = (function (){var switch__36331__auto__ = ((function (c__36422__auto___46369,out){
return (function (state_46341){
var state_val_46342 = (state_46341[(1)]);
if((state_val_46342 === (7))){
var inst_46337 = (state_46341[(2)]);
var state_46341__$1 = state_46341;
var statearr_46343_46370 = state_46341__$1;
(statearr_46343_46370[(2)] = inst_46337);

(statearr_46343_46370[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46342 === (1))){
var inst_46300 = [];
var inst_46301 = inst_46300;
var inst_46302 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_46341__$1 = (function (){var statearr_46344 = state_46341;
(statearr_46344[(7)] = inst_46302);

(statearr_46344[(8)] = inst_46301);

return statearr_46344;
})();
var statearr_46345_46371 = state_46341__$1;
(statearr_46345_46371[(2)] = null);

(statearr_46345_46371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46342 === (4))){
var inst_46305 = (state_46341[(9)]);
var inst_46305__$1 = (state_46341[(2)]);
var inst_46306 = (inst_46305__$1 == null);
var inst_46307 = cljs.core.not.call(null,inst_46306);
var state_46341__$1 = (function (){var statearr_46346 = state_46341;
(statearr_46346[(9)] = inst_46305__$1);

return statearr_46346;
})();
if(inst_46307){
var statearr_46347_46372 = state_46341__$1;
(statearr_46347_46372[(1)] = (5));

} else {
var statearr_46348_46373 = state_46341__$1;
(statearr_46348_46373[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46342 === (15))){
var inst_46331 = (state_46341[(2)]);
var state_46341__$1 = state_46341;
var statearr_46349_46374 = state_46341__$1;
(statearr_46349_46374[(2)] = inst_46331);

(statearr_46349_46374[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46342 === (13))){
var state_46341__$1 = state_46341;
var statearr_46350_46375 = state_46341__$1;
(statearr_46350_46375[(2)] = null);

(statearr_46350_46375[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46342 === (6))){
var inst_46301 = (state_46341[(8)]);
var inst_46326 = inst_46301.length;
var inst_46327 = (inst_46326 > (0));
var state_46341__$1 = state_46341;
if(cljs.core.truth_(inst_46327)){
var statearr_46351_46376 = state_46341__$1;
(statearr_46351_46376[(1)] = (12));

} else {
var statearr_46352_46377 = state_46341__$1;
(statearr_46352_46377[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46342 === (3))){
var inst_46339 = (state_46341[(2)]);
var state_46341__$1 = state_46341;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46341__$1,inst_46339);
} else {
if((state_val_46342 === (12))){
var inst_46301 = (state_46341[(8)]);
var inst_46329 = cljs.core.vec.call(null,inst_46301);
var state_46341__$1 = state_46341;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46341__$1,(15),out,inst_46329);
} else {
if((state_val_46342 === (2))){
var state_46341__$1 = state_46341;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46341__$1,(4),ch);
} else {
if((state_val_46342 === (11))){
var inst_46309 = (state_46341[(10)]);
var inst_46305 = (state_46341[(9)]);
var inst_46319 = (state_46341[(2)]);
var inst_46320 = [];
var inst_46321 = inst_46320.push(inst_46305);
var inst_46301 = inst_46320;
var inst_46302 = inst_46309;
var state_46341__$1 = (function (){var statearr_46353 = state_46341;
(statearr_46353[(11)] = inst_46321);

(statearr_46353[(7)] = inst_46302);

(statearr_46353[(8)] = inst_46301);

(statearr_46353[(12)] = inst_46319);

return statearr_46353;
})();
var statearr_46354_46378 = state_46341__$1;
(statearr_46354_46378[(2)] = null);

(statearr_46354_46378[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46342 === (9))){
var inst_46301 = (state_46341[(8)]);
var inst_46317 = cljs.core.vec.call(null,inst_46301);
var state_46341__$1 = state_46341;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46341__$1,(11),out,inst_46317);
} else {
if((state_val_46342 === (5))){
var inst_46309 = (state_46341[(10)]);
var inst_46302 = (state_46341[(7)]);
var inst_46305 = (state_46341[(9)]);
var inst_46309__$1 = f.call(null,inst_46305);
var inst_46310 = cljs.core._EQ_.call(null,inst_46309__$1,inst_46302);
var inst_46311 = cljs.core.keyword_identical_QMARK_.call(null,inst_46302,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_46312 = ((inst_46310) || (inst_46311));
var state_46341__$1 = (function (){var statearr_46355 = state_46341;
(statearr_46355[(10)] = inst_46309__$1);

return statearr_46355;
})();
if(cljs.core.truth_(inst_46312)){
var statearr_46356_46379 = state_46341__$1;
(statearr_46356_46379[(1)] = (8));

} else {
var statearr_46357_46380 = state_46341__$1;
(statearr_46357_46380[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46342 === (14))){
var inst_46334 = (state_46341[(2)]);
var inst_46335 = cljs.core.async.close_BANG_.call(null,out);
var state_46341__$1 = (function (){var statearr_46359 = state_46341;
(statearr_46359[(13)] = inst_46334);

return statearr_46359;
})();
var statearr_46360_46381 = state_46341__$1;
(statearr_46360_46381[(2)] = inst_46335);

(statearr_46360_46381[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46342 === (10))){
var inst_46324 = (state_46341[(2)]);
var state_46341__$1 = state_46341;
var statearr_46361_46382 = state_46341__$1;
(statearr_46361_46382[(2)] = inst_46324);

(statearr_46361_46382[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46342 === (8))){
var inst_46309 = (state_46341[(10)]);
var inst_46305 = (state_46341[(9)]);
var inst_46301 = (state_46341[(8)]);
var inst_46314 = inst_46301.push(inst_46305);
var tmp46358 = inst_46301;
var inst_46301__$1 = tmp46358;
var inst_46302 = inst_46309;
var state_46341__$1 = (function (){var statearr_46362 = state_46341;
(statearr_46362[(14)] = inst_46314);

(statearr_46362[(7)] = inst_46302);

(statearr_46362[(8)] = inst_46301__$1);

return statearr_46362;
})();
var statearr_46363_46383 = state_46341__$1;
(statearr_46363_46383[(2)] = null);

(statearr_46363_46383[(1)] = (2));


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
});})(c__36422__auto___46369,out))
;
return ((function (switch__36331__auto__,c__36422__auto___46369,out){
return (function() {
var cljs$core$async$state_machine__36332__auto__ = null;
var cljs$core$async$state_machine__36332__auto____0 = (function (){
var statearr_46364 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46364[(0)] = cljs$core$async$state_machine__36332__auto__);

(statearr_46364[(1)] = (1));

return statearr_46364;
});
var cljs$core$async$state_machine__36332__auto____1 = (function (state_46341){
while(true){
var ret_value__36333__auto__ = (function (){try{while(true){
var result__36334__auto__ = switch__36331__auto__.call(null,state_46341);
if(cljs.core.keyword_identical_QMARK_.call(null,result__36334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36334__auto__;
}
break;
}
}catch (e46365){if((e46365 instanceof Object)){
var ex__36335__auto__ = e46365;
var statearr_46366_46384 = state_46341;
(statearr_46366_46384[(5)] = ex__36335__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46341);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46365;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__36333__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46385 = state_46341;
state_46341 = G__46385;
continue;
} else {
return ret_value__36333__auto__;
}
break;
}
});
cljs$core$async$state_machine__36332__auto__ = function(state_46341){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36332__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36332__auto____1.call(this,state_46341);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36332__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36332__auto____0;
cljs$core$async$state_machine__36332__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36332__auto____1;
return cljs$core$async$state_machine__36332__auto__;
})()
;})(switch__36331__auto__,c__36422__auto___46369,out))
})();
var state__36424__auto__ = (function (){var statearr_46367 = f__36423__auto__.call(null);
(statearr_46367[(6)] = c__36422__auto___46369);

return statearr_46367;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36424__auto__);
});})(c__36422__auto___46369,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1545318903408
