(ns ^:figwheel-no-load portfolio-cljs.dev
  (:require
    [portfolio-cljs.core :as core]
    [devtools.core :as devtools]))


(enable-console-print!)

(devtools/install!)

(core/init!)
