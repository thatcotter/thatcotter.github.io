(ns portfolio-cljs.resume)

(def ipsum 
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")

(def short-ipsum (str (subs ipsum 0 280) "...\n\n\n"))

(def content
    {:key "value"})

(defn cell [] "")

(defn collumn [] "")

(defn body []
    [:div.columns.is-centered
      [:div.column.is-two-thirds-desktop.is-full-tablet
        [:section.section
            [:a.subtitle.has-text-link {:href "./assets/images/acotter_resume.pdf"} "Print/PDF"]]
        [:section.section.
            [:div.tile.is-ancestor
                [:div.tile.is-vertical.is-7
                    [:article.tile.is-parent.is-vertical
                        [:h1.title.is-child "Professional Experience"]
                        [:article.tile.is-child.box
                            [:p.title.is-5 "Local Projects, Creative Technologist"]
                            [:p.subtitle "Spring 2018 - Winter 2019"]
                            [:p.is-size-6.has-text-weight-light "Worked on various interactive installations in a
                            developer role, using platforms such as Electron with
                            WebGL, Arduino, and Swift/iOS."]]
                        [:div.tile.is-child.box
                            [:p.title.is-5 "Red Paper Heart, Code Intern"]
                            [:p.subtitle "Summer 2017"]
                            [:p.is-size-6.has-text-weight-light.is-7 "Worked in tangent with the design team to
                            program/build interactive installations and
                            experiences for commercial clients using
                            openFrameworks, Cinder, and Arduino."]]
                        [:div.tile.is-child.box
                            [:p.title.is-5 "Cipher Prime, Intern"]
                            [:p.subtitle "Fall 2015 - Summer 2016"]
                            [:p.is-size-6.has-text-weight-light.is-7 "Assisting with design/development of video
                            games and interactive media in various
                            frameworks such as Unity, Cinder, and P5.js."]]
                        [:div.tile.is-child.box
                            [:p.title.is-5 "Night Kitchen, Interaction Developer"]
                            [:p.subtitle "Fall 2014 - Summer 2016"]
                            [:p.is-size-6.has-text-weight-light.is-7 "Lead design/development research by
                            exploring new tools for the web and
                            interactive installations and demonstrating
                            implementations to the rest of the team."]]
                        [:br]]
                    [:div.tile.is-parent
                        [:div.tile.is-child
                            [:p.title "Teaching Experience"]
                            [:div.content.box
                                [:p.title.is-5 "Instructor, Creativity + Computation"]
                                [:p.subtitle "Parsons, Fall 2018"]]
                                ; [:div.content.has-text-weight-light.is-7 short-ipsum]]
                            [:div.content.box
                                [:p.title.is-5 "Teaching Assistant, Immersive Storytelling"]
                                [:p.subtitle "Parsons, Fall 2017"]]
                                ; [:div.content.has-text-weight-light.is-7 short-ipsum]]
                            [:div.content.box
                                [:p.title.is-5 "Code Instructor, D+T  Bootcamp"]
                                [:p.subtitle "Parsons, Summer 2017"]]]]]
                                ; [:div.content.has-text-weight-light.is-7 short-ipsum]]]]] 
                [:div.tile.is-parent.is-vertical.is-5
                        [:p.title "Core Competencies"]
                        [:div.content.box
                            [:p.title.is-5 "Creative Coding"]
                            [:p.is-size-6.has-text-weight-light.is-7 "I approach writing
                            code like writing
                            poetry, focusing on
                            the mechanics, the
                            demystification of
                            tools, and hacking
                            the conventions
                            of art-making with
                            computation."]]
                        [:div.content.box
                            [:p.title.is-5 "Design Research"]
                            [:p.is-size-6.has-text-weight-light.is-7 "The first step to
                            solving a problem
                            is understanding
                            it. By interviewing
                            end-users and testing
                            prototypes, I can better
                            understand what the
                            solution is."]]
                        [:br]
                        [:p.title "Skills + Tools"]
                        [:div.tile.is-vertical.box
                            [:p.title.is-5 "Adept"]
                            [:dl.is-6
                                [:li "Electron/Node.js"]
                                [:li "WebGL (Pixi.js, Three.js, ReGL, p5.js)"]
                                [:li "Arduino / Physical Computing"]
                                [:li "openFrameworks (C++)"]
                                [:li "Front End Web (HTML/SCSS/JS)"]
                                [:li "Adobe CC Workflow (esp. Ps, Ai, Id, Lr)"]]]
                        [:div.tile.is-vertical.box
                            [:p.title.is-5 "Intermediate"]
                            [:dl.is-6
                                [:li "Unity / C#"]
                                [:li "Clojure(Script)/(CLR)"]
                                [:li "Fragment Shaders"]
                                [:li "Rust"]]]
                        [:div.tile.is-vertical.box
                            [:p.title.is-5 "Familiar"]
                            [:dl.is-6
                                [:li "Python / Scikit"]
                                [:li "Jupyter Notebooks"]
                                [:li "Cinder (C++)"]
                                [:li "Vertex Shaders"]]]
                        [:div.tile.is-vertical.box
                            [:p.title.is-5 "Learning"]
                            [:dl.is-6
                                [:li "Swift/iOS"]
                                [:li "Design Patterns"]
                                [:li "Compiler/Interpreter Design"]]]
                        [:br]
                        [:p.title "Education + Honors"]
                        [:div.tile.is-vertical.content.box
                            [:p.title.is-5 "MFA Design + Technology"]
                            [:p.subtitle.is-5 "Parsons, Class of 2018"
                                [:p.is-size-6.has-text-weight-light "President of Dorkshop 2017-2018"]]]
                        [:div.tile.is-vertical.content.box
                            [:p.title.is-5 "BS Industrial Design"]
                            [:p.subtitle.is-5 "University of the Arts, Class of 2014"
                                [:p.is-size-6.has-text-weight-light "President of Literary Society 2012-2014"]]]
                        [:div.tile.is-vertical.content.box
                            [:p.title.is-5 "Attained the rank of Eagle Scout"]
                            [:p.subtitle.is-5 "BSA Toop 139, 2010"]]]]]]])
