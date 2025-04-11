import "./about.css";
import Accordion from 'react-bootstrap/Accordion';

export default function About() {
  return (
    <>
      <section id="about" class="about-section" >
        <div class="container">
          <div className="section-title">
            <h2>About Me</h2>
          </div>
          <div className="company-name">
            <div className="exp-title">
              <h2>
                I have <span>4+ years of experience</span> running successful
                design practices together with startups and top brands.
              </h2>
            </div>
            <Accordion defaultActiveKey="0" className="company-list">
              {/* <div className="prof-ex-ttl">
                <h2>Professional Experience </h2>
              </div> */}

              <Accordion.Item eventKey="0">
                <Accordion.Header className="company-list-header">
                  <div className="acr-title">
                    <h3 className="c-name">TRooTech Business Solutions Pvt. Ltd.- Ahmedabad</h3>
                    <h3>Sr. Html Dev</h3>
                    <h3>March 2024 - Present</h3>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <ul className="desc-role">
                    <li>Built responsive and accessible website using React/Nextjs with Material UI Framework.
                    </li>
                    <li>Managed and tracked changes using Git and GitHub, collaborating seamlessly with the development team on version control and deployment.</li>
                    <li>working with Material UI to implement modern, aesthetically pleasing, and consistent user interfaces, ensuring seamless user experiences across all devices.</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1"  >
                <Accordion.Header className="company-list-header">
                  <div className="acr-title">
                    <h3 className="c-name">Nectarbits Pvt Ltd. – Ahmedabad</h3>
                    <h3>Html Dev</h3>
                    <h3>Oct 2023 - Mar 2024
                    </h3>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <ul className="desc-role">
                    <li>Theme customization, website Cloning &  maintenance.
                    </li>
                    <li>Employed SCSS for modular and maintainable CSS, improving code structure and reusability.
                    </li>
                    <li>Custom Website Design: Proficiency in website creation using Core HTML and CSS.
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2"  >
                <Accordion.Header className="company-list-header">
                  <div className="acr-title">
                    <h3 className="c-name">Cirkle Studio Pvt. Ltd. – Surat</h3>
                    <h3>Jr. Html Dev</h3>
                    <h3>June  2022 - Oct 2023</h3>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <ul className="desc-role">
                    <li>Pixel Perfect design with responsiveness without using third party frameworks or library.
                    </li>
                    <li>Used Tailwind CSS to quickly build and customize responsive websites with utility-first classes, enhancing the design workflow.
                    </li>
                    <li>SEO best practices (meta tags, alt attributes)& Ensuring consistency across Chrome, Firefox, Safari, Edge.</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3"  >
                <Accordion.Header className="company-list-header">
                  <div className="acr-title">
                    <h3 className="c-name">Connect IT Hub</h3>
                    <h3>Jr. Html Dev</h3>
                    <h3>Oct 2021 - May 2022 </h3>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <ul className="desc-role">
                    <li>Convert PSD /Figma to HTML-webpage.
                    </li>
                    <li>Create webstite using bootstrap.
                    </li>
                    <li>Website maintenance & Cloning.</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

          </div>
          <div className="cv-download">
            <ul>
              <li>
                <a href="images/Samir-Vanapariya-Resume.pdf" download>
                  Download CV <img src="/images/cv.svg" alt="" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/samir-vanpariya" target="_blank">
                  Connect with Linkedin <img src="/images/linkdin.svg" alt="" />
                </a>
              </li>
            </ul>
          </div>

          {/* <div className="about-info">
            <p>
              Hello! I'm <strong>[Your Name]</strong>, a passionate HTML
              developer with a love for creating clean, responsive, and
              user-friendly websites. With [X] years of experience in web
              development, I specialize in writing semantic HTML code that
              enhances accessibility, SEO, and the overall user experience.
            </p>

            <p>
              I have a strong foundation in front-end technologies, including
              HTML5, CSS3, and JavaScript, and I continually strive to stay
              updated with the latest industry trends. My goal is to build
              websites that not only look good but also function seamlessly
              across all devices and browsers.
            </p>

            <p>
              When I'm not coding, I enjoy learning new technologies,
              contributing to open-source projects, and exploring creative web
              design. If you're looking for a developer who can turn your ideas
              into reality, feel free to <a href="#contact">get in touch</a>!
            </p>
          </div> */}
        </div>

      </section>
    </>
  );
}
