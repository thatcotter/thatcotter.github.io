(ns portfolio-cljs.project-views)

(def ipsum
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")

(defn rand-hero-src []
    (str "https://picsum.photos/" 
        (->> (js/Math.random)
            (* 30)
            (js/Math.floor)
            (- (* 0.66 (.-width js/screen))))
        "/?random"))

(defn rand-supplement-image []
  (str "https://picsum.photos/" 
        (->> (js/Math.random)
            (* 30)
            (js/Math.floor)
            (- (* 0.2 (.-width js/screen))))
        "/?random"))

(defn video-hero [url]
    [:div {:style {:padding "50% 0 0 0"
                   :position "relative"}}
        [:iframe {:src url
                  :style {:width "100%"
                          :height "100%"
                          :position "absolute"
                          :top "0"
                          :left "0"
                          :frameborder "0"
                          :webkitallowfullscreen "true"
                          :mozallowfullscreen "true"}}]])

(defn cell [url]
    [:img.preview.lazy 
            {:src url
             :style {:flex 0
                     :height "100%"
                     :width "100%"
                     :layout "fill"
                     :object-fit "cover"}}])

(defn other-media-grid [num-coll path-list]
    [:div.columns.is-multiline
        (for [path path-list]
            (case num-coll
                5 [:div.column.is-one-third.progressive 
                    {:style { :justify-content "center"
                                :overflow "hidden"
                                :align-items "center"}}
                    (cell path)]
                4 [:div.column.is-one-quarter.progressive 
                    {:style { :justify-content "center"
                                :overflow "hidden"
                                :align-items "center"}}
                    (cell path)]
                3 [:div.column.is-one-third.progressive 
                    {:style { :justify-content "center"
                                :overflow "hidden"
                                :align-items "center"}}
                    (cell path)]
                2 [:div.column.is-half.progressive 
                    {:style { :justify-content "center"
                                :overflow "hidden"
                                :align-items "center"}}
                    (cell path)]
                1 [:div.column.progressive 
                    {:style { :justify-content "center"
                                :overflow "hidden"
                                :align-items "center"}}
                    (cell path)]))])

(defn other-media [path-list]
    (let [len (count path-list)
          mod-five (mod len 5)]
        (case mod-five
            0 (other-media-grid 5 path-list)
            4 (other-media-grid 4 path-list)
            3 (other-media-grid 3 path-list)
            2 (other-media-grid 2 path-list)
            (print "other"))))

(defn other-media-placeholder [path-range]
    (for [path path-range]
        [:img {:src (rand-supplement-image)}]))

(def projects 
    {:phillytron
        {:title "Phillytron"
         :subtitle "Showcasing Indie Game Development in Philadelphia"
         :hero [:video {:padding "50% 0 0 0":width "50%" :controls "true"}
                    [:source {:src "../assets/images/phillytron.mp4" :type "video/mp4"}]]
         :description 
            [:div
                [:p "This project was done in collaboration with " [:a {:href "http://www.phillygamemechanics.com/" :target "_blank"} "Philly Game Mechanics"]", a non-profit organization in Philadelphia that leads and organizes indie game development events like game jams, talks, and workshops. The Phillytron is an arcade cabinet that showcases published games from local studios in Philly as well as past game jam winners."]
                [:p "The Phillytron has been featured at The Franklin Institute, MAGFest, PAX East, and is scheduled to show at other various gaming festivals, conventions, and expos in the Northeast US."]
                [:p "Role: HLSL Shader programming for intro animation and menu background"]
                [:p "In collaboration with: Steve Petit (Technical Lead), Marina Romero (Cabinet Art), Jake O'Bien (Producer)"]]
         :supplement-media ["../assets/images/phillytron1.png" "../assets/images/phillytron2.jpg" "../assets/images/phillytron3.png"]}
     :mgm 
        {:title "Magical Girl Mecha"
         :subtitle "A cooperative, anime-inspired space adventure"
         :hero (video-hero "https://player.vimeo.com/video/245480772")
         :description 
            [:div
                [:p "This project was an assignment for New Arcade, a class focused on making unconventional controllers for video games. For this project, we tried to make a game centered around flying a magical robot with a friend through custom motion controls."]
                [:p "Role: OpenCV programming and OSC protocol"]
                [:p "In collaboration with: "[:a {:href "https://sydneyadamsdesigns.com/" :target "_blank"}"Sydney Adams"]" (Design Lead), "[:a {:href "https://sites.google.com/site/taeyonii/" :target "_blank"}"Taeyeon Kim"]" (Art Assets), and "[:a {:href "https://www.jung3.com/" :target "_blank"}"Seungho Jung"]" (Unity Programming)"]]
         :supplement-media []}
        
     :talktolight
        {:title "Talk to Light"
         :subtitle "A light beam you can talk to"
         :hero [:a {:href "https://redpaperheart.com/work/talktolight" :target "_blank"}[:img {:src "https://redpaperheart.com/media/work/talktolight/google_talktolight_sxsw_hero-1920.jpg"}]]
         :description
            [:div
                [:p "This project was done while I was interning at " [:a {:href "https://redpaperheart.com/work/talktolight" :target "_blank"} "Red Paper Heart"] ". We teamed up with some friends at Google to design an open source art installation that would showcase the potential of the technology from Red Paper Heart’s unique point of view and inspire developers and makers everywhere to build things using Custom Device Actions."]
                [:p "Role: Code Intern"]
                [:p "In collaboration with: Zander Brimijoin (Creative Director), Daniel Scheibel (Technology Director), Lisa Walters (Senior Producer), Pedro Piccinini (Art Director), Greg Schomburg (Creative Coder), Shuvashis Das (Creative Coder), Adrià Navarro López (Creative Coder), Ji Young Chun (Code Intern)"]]
         :supplement-media ["https://redpaperheart.com/media/work/talktolight/google_talktolight_sxsw_01-1440.jpg" "https://redpaperheart.com/media/work/talktolight/google_talktolight_02-1440.jpg" "https://redpaperheart.com/media/work/talktolight/google_talktolight_sxsw_05-1440.jpg"]}
        
     :buttons
        {:title "Push My Buttons"
         :subtitle "A competitive take on whack-a-mole"
         :hero (video-hero "https://www.youtube.com/embed/lwRe1kuQjys")
         :description 
            [:div
                [:p "This project was an assignment for New Arcade, a class focused on making unconventional controllers for video games. For this project, our primary constraint was to not use a screen."]
                [:p "Role: Arduino Programming and Game Design"]
                [:p "In collaboration with: Kabeer (Soldering and Game Design) and Tushal (Fabrication and Game Design)"]]
         :supplement-media []}
        
     :voyage
        {:title "Voyage"
         :subtitle "A Newtonian Physics-based Puzzle Game"
         :hero (video-hero "https://player.vimeo.com/video/197938614")
         :description 
            [:div
                [:p "This game uses the Newtownian model of gravitation and physics as a puzzle mechanic. The objective is to steer your ship over to the red square while being pulled around by the gravitational forces of nearby planetoids."]
                [:p "Final Project for Algorithmic Simulations"]
                [:p "Made with openFrameworks"]]
         :supplement-media ["../assets/images/voyage_2.png" "../assets/images/voyage_3.png"]}
        
     :tide
        {:title "Tide"
         :subtitle "A Sybiotic Adventure"
         :hero [:img {:src "../assets/images/tide.gif"}]
         :description 
            [:div
                ; [:p "For my senior capstone, I focused on on the qualia concerning electro-magnetic fields. Although we come in contact with EMFs several times a day, we don't give them much thought because we cannot perceive them."]
                [:p "Player 1: W,A,S,D"]
                [:p "Player 2: UP, DOWN, LEFT, RIGHT"]]
         :supplement-media []}
        
     :ha
        {:title "Hertzian Aegis"
         :subtitle "A love letter to Design Noir"
         :hero [:img {:src "../assets/images/HA_7288(edit).jpg"}]
         :description 
            [:div
                [:p "For my senior capstone, I focused on on the qualia concerning electro-magnetic fields. Although we come in contact with EMFs several times a day, we don't give them much thought because we cannot perceive them."]
                [:p "In my senior fall semester, I made a prototype wearable that used a jumper wire as a sensor. The prototype itself only proved to be a capacitive sensor, but it helped me get used to using the Lilypad microcontroller as the conduit of my design. In the spring, I reverse-engineered an existing EMF sensor to have a qualitative output and mapped that output onto a coat."]
                [:p "By letting the user visualize electro-magnetic radiation, this wearable technology helps to better understand the hidden nature of electronic objects."]]
         :supplement-media ["../assets/images/HA_7269.jpg" "../assets/images/HA_7270.jpg"]}})
        


(defn body [state]
    (let [project ((state :project) projects)]
        [:div
            [:section.section
                [:h1.title (project :title)]
                [:h2.subtitle (project :subtitle)]]
            [:section.hero
                [:div.hero-body (project :hero)]]
            [:section.section (project :description)]
            [:section.section (other-media (project :supplement-media))]]))
