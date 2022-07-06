import React from 'react'

const Contacts = ({setModal}) => {
    return (
        <>
            <div className="Contacts" id='contact'>
                <div className="container">
                    <div className="row">
                        <div className="contact_h1">
                            Контакты
                        </div>

                        <div className="col-lg-6">
                            <div className="contact_h2">
                                Medgaz.uz
                            </div>
                            <div className="row">
                                <div className="col-sm-6 contact_box">
                                    <div className="contact_name">
                                        Контакты
                                    </div>
                                    <div className="contact_work">
                                        <a href="tel:+998994843225">+998 (99) 484-32-25</a>
                                    </div>
                                </div>
                                <div className="col-sm-6 contact_box">
                                    <div className="contact_name">
                                        Почта
                                    </div>
                                    <div className="contact_work">
                                        <a target={'_blank'} rel="noreferrer" href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=wolfvitaliy1986@gmail.com">wolfvitaliy1986@gmail.com</a>
                                    </div>
                                </div>
                                <div className="col-sm-6 contact_box">
                                    <div className="contact_name">
                                        Адресс
                                    </div>
                                    <div className="contact_work">
                                        Город Ташкент, Чиланзар 19-23
                                    </div>
                                </div>
                                <div className="col-sm-6 contact_box">
                                    <div className="contact_name">
                                        Время работы
                                    </div>
                                    <div className="contact_work">
                                        Часы работы с 9:00 - 19:00
                                    </div>
                                </div>
                                <div className="col-sm-6 d-flex justify-content-evenly align-items-center">
                                    <a target={'_blank'} rel="noreferrer" href="https://t.me/Wolf_Vitaliy/" className='soc_a'><img src="/images/telegram_2.png" alt="" /></a>
                                    <a href="#!" className='soc_a'><img src="/images/instagram_2.png" alt="" /></a>
                                    <a target={'_blank'} rel="noreferrer" href="https://m.facebook.com/MedGaz.UZ/" className='soc_a'><img src="/images/facebook_2.png" alt="" /></a>
                                </div>
                                <div className="col-sm-6 text-lg-start text-center ">
                                    <a><button onClick={() => setModal(true)}> Оставить заявку</button></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mt-5 mt-lg-0">
                            <iframe src="https://yandex.uz/map-widget/v1/-/CCUN4AWWdA" className='map' frameborder="1" allowfullscreen="true" >
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>

            <div className="KoKo">
                @ 2022 MedGaz by <a target={'_blank'} rel="noreferrer" href="https://www.kokoagency.uz/#/">kOkO digital agency</a>
            </div>
        </>
    )
}

export default Contacts