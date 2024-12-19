import "./banner.css";

export default function Banner() {
  return (
    <>
      <section class="banner-section">
        {/* <div class="pattern1">
          <img src="/images/pattern-bottom.png" />
        </div> */}
        <div class="container">
          <div class="row banner-row">
            <div class="col-md-7">
              <div class="banner-cont">
                <div class="section-title">
                  <h1>Brittany Chiang</h1>
                </div>

                <h2>Front End Engineer</h2>
                <p>
                  I build accessible, pixel-perfect digital experiences for the
                  web. As a passionate Front End Engineer, I specialize in
                  creating high-performance, user-friendly, and accessible web
                  experiences that are both visually stunning and functionally
                  seamless. My work revolves around crafting pixel-perfect
                  designs that align with the latest industry standards,
                  ensuring that websites are not only aesthetically appealing
                  but also optimized for performance and accessibility across
                  all devices.
                </p>
              </div>
            </div>
            <div class="col-md-5">
              <div class="banner-img">
                    <img src="/images/banner-img-new.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
