import "./project.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { Badge } from "react-bootstrap";
export default function Project() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".project-col.pt", {
      scrollTrigger: {
        trigger: ".project-col.pt",
        start: " 50% ",
        end: "10% ",
        scrub: 1,
        markers: false,
      },
      // scale: 2,
      // opacity: 0,
      paddingTop: 0,
      marginTop: -20,
      ease: "power2.out", // Smooth easing function
    });
  }, []);

  return (
    <>
      <section id="projects" class="projects-section">
        <div class="container">
          <div class="section-title">
            <h2> Latest Projects</h2>
          </div>

          <div class="project-row row">
            <div class="col-12 col-sm-6 project-col">
             
              <div class="project-details">
              <div class="project-img">
              <img src="/images/ls-img-new.png" alt="" />

              </div>
                <h4>
                  Project Name: <span> Legalspace </span>{" "}
                </h4>
                <h4>
                  Time to Complete:  <span> [ 1.2 year +] </span>
                </h4>
                <h4 className="site-link">
                  Site Link: <a href="https://legalspace.ai/">https://legalspace.ai/</a>
                </h4>
                <p>
                  - The AI-powerd platform transforming the Indian legal ecosystem. 
                  this project leverages ReactJS for building a fast, dynamic, and interactive user interface, while Material UI (MUI) is used to ensure a clean, consistent, and responsive design across all devices.
                </p>
                <ul className="tools-used">
                  <li> <Badge pill bg="light" text="dark">
                    ReactJs
                  </Badge></li>
                  <li> <Badge pill bg="light" text="dark">
                    Scss
                  </Badge></li>
                  <li> <Badge pill bg="light" text="dark">
                    Material UI
                  </Badge></li>
                </ul>
              </div>
            </div>
            <div class="col-12 col-sm-6 project-col pt">
            
              <div class="project-details">
              <div class="project-img">
                <img src="/images/lewogle.png" alt="" />
              </div>
                <h4>
                  Project Name: <span>LeWogle </span>{" "}
                </h4>
                <h4>
                  Time to Complete:  <span> [ 4+ Month ] </span>
                </h4>
                <h4 className="site-link">
                  Site Link: <a href="https://lewogle.com/">https://lewogle.com/</a>
                </h4>

                <p>
                Lewogle is an e-commerce platform designed to showcase a wide range of clothing products in a visually appealing and user-friendly environment. Built with Vue.js, the project offers a dynamic and interactive shopping experience, enabling users to browse, filter, and purchase clothing items with ease across multiple devices.
                </p>
                <ul className="tools-used">
                  <li> <Badge pill bg="light" text="dark">
                  Vue.js
                  </Badge></li>
                  <li> <Badge pill bg="light" text="dark">
                    Scss
                  </Badge></li>
                  <li> <Badge pill bg="light" text="dark">
                    PrimeVue
                  </Badge></li>
                </ul>
              </div>
            </div>
            <div class="col-12 col-sm-6 project-col">
             
              <div class="project-details">
              <div class="project-img">
                <img src="/images/sm.png" alt="" />
              </div>
                <h4>
                  Project Name: <span>Steve Madden </span>{" "}
                </h4>
                <h4>
                  Time to Complete:  <span> - </span>
                </h4>
                <h4 className="site-link">
                  Site Link: <a href="https://www.stevemadden.in/">https://www.stevemadden.in/</a>
                </h4>
                <p>
                Built on the Shopify platform, the website integrates a custom design using CSS to create a unique, brand-aligned shopping experience. The platform provides users with seamless navigation, secure payment options, and an intuitive shopping interface across all devices.
                </p>
                <ul className="tools-used">
                  <li> <Badge pill bg="light" text="dark">
                  Shopify
                  </Badge></li>
                  <li> <Badge pill bg="light" text="dark">
                  Custom css
                  </Badge></li>
                 
                </ul>
              </div>
            </div>
            <div class="col-12 col-sm-6 project-col pt">
              
              <div class="project-details">
              <div class="project-img">
                <img src="/images/level-up.png" alt="" />
              </div>
              <h4>
                  Project Name: <span> Level Up </span>{" "}
                </h4>
                <h4>
                  Time to Complete:  <span> - </span>
                </h4>
                <h4 className="site-link">
                  Site Link: <a href="https://get365ready.com/">https://get365ready.com/</a>
                </h4>
                <p>
                Built using PHP for server-side scripting and Bootstrap for responsive design, the platform offers a seamless and visually appealing experience across devices.
                </p>
                <ul className="tools-used">
                  <li> <Badge pill bg="light" text="dark">
                  Bootstrap
                  </Badge></li>
                  <li> <Badge pill bg="light" text="dark">
                  Php
                  </Badge></li>
                 
                </ul>
              </div>
            </div>
          </div>
          <button class="button view-all-btn">
            <span class="button_lg">
              <span class="button_sl"></span>
              <span class="button_text">View All</span>
            </span>
          </button>
        </div>
      </section>
    </>
  );
}
