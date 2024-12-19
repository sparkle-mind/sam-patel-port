import "./header.css"
 const  Header = () => {
  const logo=" <PixelizeCraft /> "
  return (
    <>
      <header class="header-section">
      <div class="container">
        <div class="header-inner">
          <a href="login.html" class="header-left-logo">
             {logo}
          </a>
          <div class="back-button">
            <a href="login.html" class="btn-secondary">
              <img src="assets/images/arrow-left.svg"/>
               Back
            </a>
          </div>
        </div>
      </div>
    </header>
    </>
  )
}

export default Header;