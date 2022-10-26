import React from 'react'

function Footer() {
  return (
    <>
      <footer className="footer navbar-fixed-bottom">
        <img src="https://uploaddeimagens.com.br/images/004/077/174/full/Smith_%282%29.png" alt="" className="logo_footer" />
        <div class="footer__icon">
          <a href="https://www.linkedin.com/in/daniel-oliveira-8234aa1a7" target="_blank" class="home__social-icon" rel="noreferrer"><i class='bx bxl-linkedin'></i></a>
          <a href="https://github.com/DanSmithh" target="_blank" class="home__social-icon" rel="noreferrer"><i class='bx bxl-github'></i></a>
          <a href="mailto:daniel.odsilvas@gmail.com?subject=Olá, Daniel" target="_blank" class="home__social-icon" rel="noreferrer"><i class='bx bx-envelope'></i></a>
          <a href="https://api.whatsapp.com/send?phone=5511943267384&text=Ol%C3%A1%2C%20tudo%20bem%3F" target="_blank" class="home__social-icon" rel="noreferrer"> <i class='bx bx-phone'></i></a>
        </div>
        <p class="footer__copy">&#169; Site desenvolvido por Daniel O.</p>
      </footer></>

  )
}

export default Footer