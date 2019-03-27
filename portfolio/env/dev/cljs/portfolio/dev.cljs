(ns ^:figwheel-no-load portfolio.dev
  (:require
    [portfolio.core :as core]
    [devtools.core :as devtools]))


(enable-console-print!)

(devtools/install!)

(core/init!)
