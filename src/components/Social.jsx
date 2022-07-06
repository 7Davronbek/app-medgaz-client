import React from 'react'

const Social = () => {
    return (
        <>
            <div className="social" id='soc'>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-5">
                            <div className="soc_work ">
                                Часы работы 9:00 - 19:00
                            </div>
                        </div>
                        <div className="col-lg-7 d-flex justify-content-lg-end justify-content-sm-center justify-content-evenly">
                            <a target={'_blank'} rel="noreferrer" href="https://t.me/Wolf_Vitaliy/" className='soc_a'><img src="/images/telegram.png" alt="" /></a>
                            <a href="#!" className='soc_a'><img src="/images/instagram.png" alt="" /></a>
                            <a target={'_blank'} rel="noreferrer" href="https://m.facebook.com/MedGaz.UZ/" className='soc_a'><img src="/images/facebook.png" alt="" /></a>
                            <a target={'_blank'} rel="noreferrer" href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=wolfvitaliy1986@gmail.com" className='soc_a'><img src="/images/message.png" alt="" /></a>
                            <a href="tel:+998994843225" className='soc_a'>
                                <img src="/images/phone.png" alt="" />
                                <span>+998 (99) 4843225</span>
                            </a>



                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Social