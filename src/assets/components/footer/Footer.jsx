import { FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import "./footer.css"
import { GrGithub } from "react-icons/gr";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const logo = " <PixelizeCraft /> "
  return (
    <>
      <footer class="footer-section">
        <div class="container">
          <div class="footer-inner">
            <a href="#" class="ft-logo">
              {logo}
            </a>
            <p className="ft-slogan">Design with Precision, Craft with Passion.</p>

            <ul className="social-icn">
              <li>
                <a href="tel:7359482658">
                  <FaPhoneAlt />

                </a>
              </li>
              <li>
                <a href="mailto:samirpatel7095@gmail.com">
                  <MdEmail />
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/samir-vanpariya" target="_blank">
                  <FaLinkedin />
                </a>
              </li>

              <li>
                <a href="https://github.com/sparkle-mind" target="_blank">
                  <GrGithub />
                </a>
              </li>

            </ul>

          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer;