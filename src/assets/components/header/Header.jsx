import { Button, Offcanvas } from "react-bootstrap";
import "./header.css"
import { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
const Header = () => {



  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);





  // const logo = " images/sv-logo.webp "
  return (
    <>
      <header class="header-section">
        <div class="container">
          <div class="header-inner">
            <a href="#" class="header-left-logo">
              {/* {logo} */}
              <svg
                // width="40"
                height="40"
                viewBox="0 0 160 49.30764637140736"
                className="looka-1j8o68f"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs></defs>
                <g
                  transform="matrix(0.5128205128205128,0,0,0.5128205128205128,124.87179487179486,-178.84615384615384)"
                  fill="#aea1ea"
                >
                  <path
                    d="M-167.5,390.5c-1.1,0-2-0.9-2-2c0-1.1,0.9-2,2-2c1.1,0,2,0.9,2,2C-165.5,389.6-166.4,390.5-167.5,390.5z   M-177.5,428.5c-2.2,0-4-1.8-4-4s1.8-4,4-4c2.2,0,4,1.8,4,4S-175.3,428.5-177.5,428.5z M-177.5,410.5c-2.2,0-4-1.8-4-4s1.8-4,4-4  c2.2,0,4,1.8,4,4S-175.3,410.5-177.5,410.5z M-177.5,392.5c-2.2,0-4-1.8-4-4c0-2.2,1.8-4,4-4c2.2,0,4,1.8,4,4  C-173.5,390.7-175.3,392.5-177.5,392.5z M-177.5,374.5c-2.2,0-4-1.8-4-4c0-2.2,1.8-4,4-4c2.2,0,4,1.8,4,4  C-173.5,372.7-175.3,374.5-177.5,374.5z M-194.5,414.5c-3.9,0-7-3.1-7-7c0-3.9,3.1-7,7-7c3.9,0,7,3.1,7,7  C-187.5,411.4-190.6,414.5-194.5,414.5z M-194.5,394.5c-3.9,0-7-3.1-7-7c0-3.9,3.1-7,7-7c3.9,0,7,3.1,7,7  C-187.5,391.4-190.6,394.5-194.5,394.5z M-195.5,374.5c-2.2,0-4-1.8-4-4c0-2.2,1.8-4,4-4c2.2,0,4,1.8,4,4  C-191.5,372.7-193.3,374.5-195.5,374.5z M-195.5,362.5c-1.1,0-2-0.9-2-2c0-1.1,0.9-2,2-2c1.1,0,2,0.9,2,2  C-193.5,361.6-194.4,362.5-195.5,362.5z M-214.5,414.5c-3.9,0-7-3.1-7-7c0-3.9,3.1-7,7-7s7,3.1,7,7  C-207.5,411.4-210.6,414.5-214.5,414.5z M-214.5,394.5c-3.9,0-7-3.1-7-7c0-3.9,3.1-7,7-7s7,3.1,7,7  C-207.5,391.4-210.6,394.5-214.5,394.5z M-213.5,374.5c-2.2,0-4-1.8-4-4c0-2.2,1.8-4,4-4c2.2,0,4,1.8,4,4  C-209.5,372.7-211.3,374.5-213.5,374.5z M-213.5,362.5c-1.1,0-2-0.9-2-2c0-1.1,0.9-2,2-2c1.1,0,2,0.9,2,2  C-211.5,361.6-212.4,362.5-213.5,362.5z M-231.5,374.5c-2.2,0-4-1.8-4-4c0-2.2,1.8-4,4-4c2.2,0,4,1.8,4,4  C-227.5,372.7-229.3,374.5-231.5,374.5z M-231.5,384.5c2.2,0,4,1.8,4,4c0,2.2-1.8,4-4,4c-2.2,0-4-1.8-4-4  C-235.5,386.3-233.7,384.5-231.5,384.5z M-241.5,408.5c-1.1,0-2-0.9-2-2c0-1.1,0.9-2,2-2c1.1,0,2,0.9,2,2  C-239.5,407.6-240.4,408.5-241.5,408.5z M-241.5,390.5c-1.1,0-2-0.9-2-2c0-1.1,0.9-2,2-2c1.1,0,2,0.9,2,2  C-239.5,389.6-240.4,390.5-241.5,390.5z M-231.5,402.5c2.2,0,4,1.8,4,4s-1.8,4-4,4c-2.2,0-4-1.8-4-4S-233.7,402.5-231.5,402.5z   M-231.5,420.5c2.2,0,4,1.8,4,4s-1.8,4-4,4c-2.2,0-4-1.8-4-4S-233.7,420.5-231.5,420.5z M-213.5,420.5c2.2,0,4,1.8,4,4  c0,2.2-1.8,4-4,4c-2.2,0-4-1.8-4-4C-217.5,422.3-215.7,420.5-213.5,420.5z M-213.5,432.5c1.1,0,2,0.9,2,2c0,1.1-0.9,2-2,2  c-1.1,0-2-0.9-2-2C-215.5,433.4-214.6,432.5-213.5,432.5z M-195.5,420.5c2.2,0,4,1.8,4,4c0,2.2-1.8,4-4,4c-2.2,0-4-1.8-4-4  C-199.5,422.3-197.7,420.5-195.5,420.5z M-195.5,432.5c1.1,0,2,0.9,2,2c0,1.1-0.9,2-2,2c-1.1,0-2-0.9-2-2  C-197.5,433.4-196.6,432.5-195.5,432.5z M-167.5,404.5c1.1,0,2,0.9,2,2c0,1.1-0.9,2-2,2c-1.1,0-2-0.9-2-2  C-169.5,405.4-168.6,404.5-167.5,404.5z"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  />
                </g>
                <g
                  transform="matrix(4.29714464062574,0,0,4.29714464062574,56.3473393566315,-37.62043222248687)"
                  fill="#b2ebf9"
                >
                  <path d="M10.508 13.6328c0.79102 0.60547 1.0742 1.4941 0.79102 2.7148c-0.94727 4.248 -7.1484 4.707 -10.449 2.832l0.79102 -3.3789l1.3281 0c0.14648 0.80078 1.6211 1.6113 3.0859 1.2598c0.9082 -0.24414 0.55664 -0.56641 -0.068359 -0.74219c-0.92773 -0.25391 -2.4121 -0.13672 -3.3496 -1.6211c-0.18555 -0.30273 -0.2832 -0.70313 -0.30273 -1.0645l-0.91797 0c-0.058594 -0.89844 0.30273 -1.8457 0.79102 -2.5098c2.0801 -2.7148 6.416 -2.9688 9.3066 -1.4063l-0.71289 3.0664l-1.3672 0c-0.39063 -0.67383 -2.5391 -1.3086 -3.1348 -0.78125c-0.20508 0.20508 -0.068359 0.56641 0.9668 0.76172c0.41016 0.078125 0.86914 0.16602 1.2695 0.30273c0.41992 0.16602 0.77148 0.35156 1.0645 0.56641l0.9082 0zM22.35365625 13.6328l-3.6523 6.3574l-4.5313 0l-0.72266 -6.3574l-0.89844 0l-0.52734 -4.6094l4.7852 0l0.29297 4.3457c0.77148 -1.4258 1.5039 -2.9199 2.3047 -4.3457l4.7168 0l-2.6563 4.6094l0.88867 0z" />
                </g>
              </svg>
            </a>
            <nav class="nav-wrp" id="desk-nav">
              <ul>
                <li>
                  <a href="#about" class="nav">
                    About
                  </a>
                </li>
                <li>
                  <a href="#skill" class="nav">
                    Skill
                  </a>
                </li>
                <li>
                  <a href="#projects" class="nav">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#contact" class="nav">
                    Contact
                  </a>
                </li>
              </ul>

            </nav>


            <Button variant="primary" onClick={handleShow} id="menu-btn">
              <HiOutlineMenuAlt3 />
            </Button>
            <Offcanvas show={show} onHide={handleClose}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title><a href="#" class="header-left-logo"> &lt;PixelizeCraft /&gt; </a></Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <nav class="nav-wr-phone">
                  <ul>
                    <li>
                      <a href="#about" class="nav">
                        About
                      </a>
                    </li>
                    <li>
                      <a href="#skill" class="nav">
                        Skill
                      </a>
                    </li>
                    <li>
                      <a href="#projects" class="nav">
                        Projects
                      </a>
                    </li>
                  </ul>

                </nav>
              </Offcanvas.Body>
            </Offcanvas>


          </div>
        </div>
      </header>
    </>
  )
}

export default Header;