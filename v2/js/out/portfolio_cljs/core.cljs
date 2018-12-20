(ns portfolio-cljs.core
  (:require
    [reagent.core :as r]
    [portfolio-cljs.project-grid :as grid]
    [portfolio-cljs.about :as about]
    [portfolio-cljs.resume :as resume]
    [portfolio-cljs.contact :as contact]
    [portfolio-cljs.project-views :as projects]))

;; -------------------------
;; Model

(def model (r/atom {:page "Home"
                    :next-page "nil"
                    :last-page "nil"
                    :project "nil"}))

;; -------------------------
;; Views

(def pages
  ["Home"
   "About"
   "Resume/CV"])

(defn page-link [page-name]
  [:li [:a {:on-click 
            #(do (swap! model assoc :page page-name) 
                 (print (str "new atom state: \n" @model)))} page-name]])  

(defn home-page []
  [:div
    [:section.section
      [:h1.title.name "andrew cotter"]
      [:h2.subtitle.name "computational art + design"]
      [:div.tabs.is-small
        [:ul
          (for [page pages]
            (page-link page))
          [:li
            [:a {:on-click #(print "test")
                 :href "https://github.com/thatcotter"
                 :target "blank"}
              [:i.fab.fa-github] " "]]
          [:li 
            [:a {:on-click #(print "test")
                 :href "https://twitter.com/ThatCotter"
                 :target "blank"}
              [:i.fab.fa-twitter] " "]]
          [:li
            [:a {:on-click #(print "test")
                 :href "https://www.instagram.com/thatcotter/"
                 :target "blank"}
              [:i.fab.fa-instagram] " "]]]]
      (let [state (@model :page)]
        (case state
          "Home" [grid/cell-grid model]
          "About" [about/body]
          "Contact" [contact/body]
          "Resume/CV" [resume/body]
          "Projects" [:div [projects/body @model] [grid/cell-grid model]]
          [:div]))]])

;; -------------------------
;; Initialize app

(defn mount-root []
  (r/render [home-page] (.getElementById js/document "app")))

(defn init! []
  (mount-root))
