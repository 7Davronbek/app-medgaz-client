import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [navbar, setNavbar] = useState(false)
  return (
    <>
      <div className="Navbar">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-4 col-9">
              <div className="nav_box">
                <div className="nav_logo">Medgaz.uz</div>
                <div className="nav_name">Медицинское газоснабжение в Узбекистане</div>
              </div>
            </div>

            <div onClick={() => setNavbar(!navbar)} className={`${navbar ? 'active' : ''} bar`}></div>

            <div className={` ${navbar ? 'active' : ''} col-lg-8 col-1 content d-flex justify-content-end align-items-center`}>
              <a href="#soc" className='nav_li'>Главная</a>
              <a href="#nas" className='nav_li'>О нас</a>
              <a href="#contact" className='nav_li'>Контакты</a>
              <a href="#Servis" className='nav_li'>Сервис</a>
              <a href="#Uslug" className='nav_li'>Услуги</a>
              <Link target={'_blank'} rel="noreferrer" to='/new-works' className='nav_li'>Наши работы</Link>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar