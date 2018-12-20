(ns portfolio-cljs.project-grid
    (:require
        [reagent.core :as r]))

(defn placeholder-link [size]
    (str "https://picsum.photos/" size "/?random"))

(def project-links
    {:phillytron "./assets/images/phillytron.jpg"
     :mgm "./assets/images/magic-mecha2.jpg"
     :talktolight "https://redpaperheart.com/media/work/talktolight/google_talktolight_sxsw_hero-1920.jpg"
     :buttons "./assets/images/buttons-small.png"
     :voyage "./assets/images/voyage_1.gif"
     :tide "./assets/images/tide.gif"
     :ha "./assets/images/HA_7288(edit).jpg"})

(defn scroll-to-top []
    (js/window.scrollTo 0 0 "smooth"))


(defn cell [project state & [link]]
    [:div.column.is-one-third.progressive 
        {:style { :justify-content "center"
                    :overflow "hidden"
                    :align-items "center"}
         :on-click #(do (swap! state assoc :page "Projects")
                        (swap! state assoc :project project)
                        (scroll-to-top)
                        (print state))}
        [:img.preview.lazy 
            {:src (project project-links)
                :style {:flex 0
                        :height "100%"
                        :width "100%"
                        :layout "fill"
                        :opacity 0.66
                        :object-fit "cover"}}]])

(defn cell-grid [state]
    [:section.section
        [:div.columns.is-multiline
            (for [project (-> (shuffle project-links) (keys))]
                (cell project state))]])

(defn cell-grid-placeholder [num-cells state]
    [:section.section
        [:div.columns.is-multiline
            (for [x (range num-cells)]
                (cell 
                    (placeholder-link (- (/ (.-width js/screen) 6) (.floor js/Math (* 30(.random js/Math)))))
                    state))]])
                     
