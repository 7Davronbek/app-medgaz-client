import React from 'react'

const About = () => {
    return (
        <>
            <div className="About" id='nas'>
                <div className="container">
                    <div className="row">
                        <div className="about_h">О нас</div>
                        <div className="col-lg-6 d-flex align-items-center">
                            <div className="about_p">
                                «Medgaz.UZ» — надежная, многопрофильная компания. Специализация компании – производство и поставка систем медицинского газоснабжения для лечебных учреждений, в том числе реализация проектов «под ключ». Особое внимание уделяется разработке и производству медицинского кислородного оборудования: кислородные генераторы, медицинские концентраторы, установки получения медицинского кислорода, станции производства медицинского кислорода.
                                <span>
                                    Мы берём на себя задачи проектирования, инжиниринга, производства, шеф-монтажа, ввода в эксплуатацию, гарантийного и послегарантийного сервисного обслуживания.
                                </span>
                                <span>
                                    «MedGaz.Uz» предлагает выгодные условия сотрудничества, индивидуальный подход при реализации проекта. В постоянном режиме работает «горячая» линия технической поддержки для решения различных вопросов.
                                </span>
                                <span>
                                    Эффективность представляемого оборудования и его правильная интеграция в рабочий процесс конкретного медицинского учреждения всегда были для нас важнее финансовой выгоды. Это помогло нам в реализации многих крупных проектов “под ключ”.
                                </span>
                                <span>
                                    За последнее время работы мы выбрали для вас самые современные и надежные решения. Только клинически и финансово эффективное оборудование для ваших клиник! Работа с нами позволяет легко выбрать удобные финансовые условия для коммерческих структур, не прибегая к кредитованию.
                                </span>
                            </div>
                        </div>
                        <div className="col-lg-6 d-flex justify-content-lg-end justify-content-center">
                            <img className='about_img' src="/images/about.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About