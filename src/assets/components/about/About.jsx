import "./about.css";

export default function About() {
  return (
    <>
      <section id="about" class="about-section">
        <div class="container">
          <div className="section-title">
            <h2>About Me</h2>
          </div>
          <div className="about-info">
          <p>
            Hello! I'm <strong>[Your Name]</strong>, a passionate HTML developer
            with a love for creating clean, responsive, and user-friendly
            websites. With [X] years of experience in web development, I
            specialize in writing semantic HTML code that enhances
            accessibility, SEO, and the overall user experience.
          </p>

          <p>
            I have a strong foundation in front-end technologies, including
            HTML5, CSS3, and JavaScript, and I continually strive to stay
            updated with the latest industry trends. My goal is to build
            websites that not only look good but also function seamlessly across
            all devices and browsers.
          </p>


          <p>
            When I'm not coding, I enjoy learning new technologies, contributing
            to open-source projects, and exploring creative web design. If
            you're looking for a developer who can turn your ideas into reality,
            feel free to <a href="#contact">get in touch</a>!
          </p>
        </div>
        </div>
      </section>
    </>
  );
}
