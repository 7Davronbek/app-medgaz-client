import React, { useState } from 'react'
import { TabContent, TabPane, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';

const Services = () => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  }
  return (
    <>
      <div className="Services" id='Uslug'>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="sercis_h">Услуги</div>
              <div className="sercis_p">Чтобы эксплуатация медицинского оборудования была простой, удобной и безопасной, компания «MedGaz.UZ» предоставляет комплекс услуг: от консультаций по выбору наилучшего решения, разработки проектной документации и поставки оборудования до полного спектра сервисного обслуживания, технической поддержки и обучения.</div>
            </div>
          </div>
          <div className="row ser_box">
            <div className="col-lg-6 m-auto mt-5 mt-lg-0 d-flex justify-content-center">
              <TabContent activeTab={activeTab}>
                <TabPane tabId={`1`} className=''>
                  <img className='w-100 ser_img' src="/images/p_1.jpg" alt="" />
                </TabPane>
                <TabPane tabId={`2`} className=''>
                  <img className='w-100 ser_img' src="/images/p_2.jpg" alt="" />
                </TabPane>
                <TabPane tabId={`3`} className=''>
                  <img className='w-100 ser_img' src="/images/p_3.jpg" alt="" />
                </TabPane>
                <TabPane tabId={`4`} className=''>
                  <img className='w-100 ser_img' src="/images/p_4.jpg" alt="" />
                </TabPane>
                <TabPane tabId={`5`} className=''>
                  <img className='w-100 ser_img' src="/images/p_5.jpg" alt="" />
                </TabPane>
                <TabPane tabId={`6`} className=''>
                  <img className='w-100 ser_img' src="/images/p_6.jpg" alt="" />
                </TabPane>
                <TabPane tabId={`7`} className=''>
                  <img className='w-100 ser_img' src="/images/p_7.jpg" alt="" />
                </TabPane>
                <TabPane tabId={`8`} className=''>
                  <img className='w-100 ser_img' src="/images/p_8.jpg" alt="" />
                </TabPane>
              </TabContent>

            </div>
            <div className="col-lg-6 d-flex flex-column justify-content-between">
              <div className="row">
                <NavItem>
                  <div className="row">
                    <div className="col-sm-6">
                      <NavLink
                        className={`servis_box list-group-item list-group-item-action tab_list-link ` + classnames({ active: activeTab === `1` })}
                        onClick={() => { toggle(`1`) }} >

                        <div className="servis_num">
                          01
                        </div>
                        <div className="servis_text">
                          Комплексные поставки систем медицинского газоснабжения любого уровня сложности
                        </div>

                      </NavLink>
                    </div>
                    <div className="col-sm-6">
                      <NavLink
                        className={`servis_box list-group-item list-group-item-action tab_list-link ` + classnames({ active: activeTab === `2` })}
                        onClick={() => { toggle(`2`) }} >

                        <div className="servis_num">
                          02
                        </div>
                        <div className="servis_text">
                          Комплексная диагностика
                        </div>

                      </NavLink>
                    </div>
                    <div className="col-sm-6">
                      <NavLink
                        className={`servis_box list-group-item list-group-item-action tab_list-link ` + classnames({ active: activeTab === `3` })}
                        onClick={() => { toggle(`3`) }} >

                        <div className="servis_num">
                          03
                        </div>
                        <div className="servis_text">
                          Сервисные услуги, техническая поддержка
                        </div>

                      </NavLink>
                    </div>
                    <div className="col-sm-6">
                      <NavLink
                        className={`servis_box list-group-item list-group-item-action tab_list-link ` + classnames({ active: activeTab === `4` })}
                        onClick={() => { toggle(`4`) }} >

                        <div className="servis_num">
                          04
                        </div>
                        <div className="servis_text">
                          Ремонт оборудования
                        </div>

                      </NavLink>
                    </div>
                    <div className="col-sm-6">
                      <NavLink
                        className={`servis_box list-group-item list-group-item-action tab_list-link ` + classnames({ active: activeTab === `5` })}
                        onClick={() => { toggle(`5`) }} >

                        <div className="servis_num">
                          05
                        </div>
                        <div className="servis_text">
                          Консультации высоко квалицированных специалистов и грамотный подбор оборудования с наилучшими решениями для клиента
                        </div>

                      </NavLink>
                    </div>
                    <div className="col-sm-6">
                      <NavLink
                        className={`servis_box list-group-item list-group-item-action tab_list-link ` + classnames({ active: activeTab === `6` })}
                        onClick={() => { toggle(`6`) }} >

                        <div className="servis_num">
                          06
                        </div>
                        <div className="servis_text">
                          Услуги по шеф-монтажу и пусконаладке
                        </div>

                      </NavLink>
                    </div>
                    <div className="col-sm-6">
                      <NavLink
                        className={`servis_box list-group-item list-group-item-action tab_list-link ` + classnames({ active: activeTab === `7` })}
                        onClick={() => { toggle(`7`) }} >

                        <div className="servis_num">
                          07
                        </div>
                        <div className="servis_text">
                          Поставка запчастей и расходных материалов со склада в самые короткие сроки
                        </div>

                      </NavLink>
                    </div>
                    <div className="col-sm-6">
                      <NavLink
                        className={`servis_box list-group-item list-group-item-action tab_list-link ` + classnames({ active: activeTab === `8` })}
                        onClick={() => { toggle(`8`) }} >

                        <div className="servis_num">
                          08
                        </div>
                        <div className="servis_text">
                          Изготовление медицинской мебели из нержавеющей стали
                        </div>

                      </NavLink>
                    </div>
                  </div>

                </NavItem>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Services