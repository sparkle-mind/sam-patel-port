// import "./banner.css";
import React, { useEffect, useState } from "react";
import { gsap } from "gsap";

export default function Banner() {
  return (
    <>

      <section class="banner-section">
        <div class="bg-img">
          <img src="/images/bg-dev-2.jpg" />
        </div>
        <div class="container">
          <div class="row banner-row">
            <div class="col-md-7">
              <div class="banner-cont">
                <div class="section-title">
                  <h1>Samir Vanpariya</h1>
                </div>

                <h2>html developer</h2>
                {/* <p>
                  I build accessible, pixel-perfect digital experiences for the
                  web. As a passionate Front End Engineer, I specialize in
                  creating high-performance, user-friendly, and accessible web
                  experiences that are both visually stunning and functionally
                  seamless. My work revolves around crafting pixel-perfect
                  designs that align with the latest industry standards,
                  ensuring that websites are not only aesthetically appealing
                  but also optimized for performance and accessibility across
                  all devices.
                </p> */}

                <p>I have a strong foundation in front-end technologies, including HTML5, CSS3, and JavaScript, and I continually strive to stay updated with the latest industry trends. My goal is to build websites that not only look good but also function seamlessly across all devices and browsers.</p>
              
              
              </div>
              <button class="button hire-btn"><span class="button_lg"><span class="button_sl"></span><span class="button_text">Hire Me</span></span></button>
            </div>
            <div class="col-md-5">
              {/* <div class="banner-img">
                    <img src="/images/banner-img-new.png" alt="" />
              </div> */}

              <div className="experience-row">
                <div className="ex-col ">
                  <h2>
                    
                    <span>3+</span> years
                  </h2>
                  <h2 style={{marginBottom:"0"}}>
                    <span>20+</span> projects
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="gradient-blur">
          
        </div>
      </section>
    </>
  );
}
