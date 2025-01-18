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
                <a href="#">
                  <FaPhoneAlt />

                </a>
              </li>
              <li>
                <a href="#">
                  <MdEmail />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaLinkedin />
                </a>
              </li>
          
              <li>
                <a href="#">
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