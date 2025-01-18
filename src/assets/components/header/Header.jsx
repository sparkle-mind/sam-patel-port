import { Button, Offcanvas } from "react-bootstrap";
import "./header.css"
import { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
const Header = () => {



  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);





  const logo = " <PixelizeCraft /> "
  return (
    <>
      <header class="header-section">
        <div class="container">
          <div class="header-inner">
            <a href="#" class="header-left-logo">
              {logo}
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