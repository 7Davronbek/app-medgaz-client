import React, { useState } from 'react'
import { TabContent, TabPane, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';

const Servis = () => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    return (
        <>
            <div className="Servis"  id='Servis'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="servis_box1">
                                <div className="box1_h">
                                    Сервисное обслуживание
                                </div>
                                <div className="box1_p">
                                    Эксплуатация и техническое обслуживание систем работы со сжатыми газами в медицинских организациях
                                </div>
                            </div>
                            <NavItem>
                                <NavLink
                                    className={`servis_box list-group-item list-group-item-action tab_list-link ` + classnames({ active: activeTab === `1` })}
                                    onClick={() => { toggle(`1`) }} >
                                    <div className="box_h">Компрессора сжатого воздуха</div>
                                </NavLink>

                                <NavLink
                                    className={`servis_box list-group-item list-group-item-action tab_list-link ` + classnames({ active: activeTab === `2` })}
                                    onClick={() => { toggle(`2`) }} >
                                    <div className="box_h">Кислородное оборудование</div>
                                </NavLink>

                                <NavLink
                                    className={`servis_box list-group-item list-group-item-action tab_list-link ` + classnames({ active: activeTab === `3` })}
                                    onClick={() => { toggle(`3`) }} >
                                    <div className="box_h">Проектирование</div>
                                </NavLink>

                            </NavItem>
                        </div>
                        <div className="col-lg-8 mt-5 mt-lg-0">
                            <TabContent activeTab={activeTab}>
                                <TabPane tabId={`1`} className=''>

                                    <div className="row">
                                        <div className="col-sm-5">
                                            <img className='w-100' src="/images/ser_1.png" alt="" />

                                        </div>
                                        <div className="col-sm-7 d-flex justify-content-center align-items-center">
                                            <div className="servis_h">Сжатый воздух в медицине. Применение компрессорных станций и медицинских консолей в учреждениях здравоохранения.</div>

                                        </div>
                                        <div className="col-12">
                                            <div className="servis_p">
                                                Значение медицинского воздуха в современной медицине невозможно переоценить, он используется в составе газовых смесей в лечебных процедурах. Их состав адаптируют к конкретным условиям и требованиям, а также используют для диагностики и клинических исследований. Требования к медицинскому воздуху высоки — он не должен содержать твердые частицы, пары масла, избыточную влагу либо наоборот, быть слишком сухим.
                                                <span>
                                                    Воздух используется для лечения дыхательной недостаточности в терапевтических, инфекционных, реанимационных отделениях, а в операционных во время наркоза с его помощью поддерживается дыхание пациента. Сжатый воздух также используется для работы хирургических и стоматологических пневмоинструментов и охлаждения деталей этих инструментов.
                                                </span>
                                                <span>
                                                    Источником сжатого воздуха могут служить газовые рампы с подсоединяемыми баллонами и компрессорные станции производящие очищенный и подготовленный для медицинских целей сжатый воздух. Компрессорные установки, как правило, состоят из одного или нескольких электрических компрессоров, системы фильтрации и осушения воздуха, ресивера и блока контроля и управления.
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </TabPane>
                                <TabPane tabId={`2`} className=''>
                                    <div className="row">
                                        <div className="col-sm-5">
                                            <img className='w-100' src="/images/ser_2.jpg" alt="" />
                                        </div>
                                        <div className="col-sm-7 d-flex justify-content-center align-items-center">
                                            <div className="servis_h">Централизованное снабжение медицинским кислородом</div>

                                        </div>
                                        <div className="col-12">
                                            <div className="servis_p">
                                                Централизованное снабжение медицинским кислородом
                                                <span>
                                                    Система централизованного кислородоснабжения состоит из:
                                                </span>
                                                <span>
                                                    — источник кислородоснабжения;
                                                </span>
                                                <span>
                                                    — наружная сеть кислородопроводов;
                                                </span>
                                                <span>
                                                    — внутренняя система кислородоснабжения.
                                                </span>
                                                <span>
                                                    В зависимости от количества потребляемого кислорода и местных условий (наличие газообразного или жидкого кислорода) источником кислородоснабжения может быть:
                                                </span>
                                                <span>
                                                    — кислородно-газификационная станция (КГС);
                                                </span>
                                                <span>
                                                    — 40-литровые баллоны кислорода с давлением газа 15 МПа;
                                                </span>
                                                <span>
                                                    — кислородный генератор (концентратор).
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </TabPane>
                                <TabPane tabId={`3`} className=''>
                                    <div className="row">
                                        <div className="col-sm-5">
                                            <img className='w-100' src="/images/ser_3.jpg" alt="" />

                                        </div>
                                        <div className="col-sm-7 d-flex justify-content-center align-items-center">
                                            <div className="servis_h">Общие положения по проектированию систем медицинского газоснабжения (медицинских газов)</div>

                                        </div>
                                        <div className="col-12">
                                            <div className="servis_p">
                                                Необходимым условием для систем жизнеобеспечения современной больницы является непрерывная работа оборудования.
                                                <span>
                                                    Для этого все источники, входящие в состав систем медицинских газов (далее — медгазов), дублируются для возможности замены элементов без прекращения подачи газов в линии потребления.
                                                </span>
                                                <span>
                                                    Медицинское газоснабжение включает в себя следующие системы:
                                                </span>
                                                <span>
                                                    снабжения медицинским кислородом (далее — кислородом);
                                                </span>
                                                <span>
                                                    снабжения закисью азота;
                                                </span>
                                                <span>
                                                    снабжения сжатым воздухом с давлением 0,4 МПа;
                                                </span>
                                                <span>
                                                    снабжения сжатым воздухом с давлением 0,8 МПа;
                                                </span>
                                                <span>
                                                    снабжения углекислым газом;
                                                </span>
                                                <span>
                                                    обеспечения вакуумом;
                                                </span>
                                                <span>
                                                    снабжения азотом; снабжения аргоном;
                                                </span>
                                                <span>
                                                    удаления наркозного газа из помещений, в которых используется закись азота.
                                                </span>
                                                <span>
                                                    Снабжение потребителей  указанными газами  следует   предусматривать централизованным.
                                                </span>
                                                <span>
                                                    Каждая система медицинского газоснабжения состоит из источника соответствующего газа, трубопроводов, транспортирующих газ, точек потребления газа и системы регулирования подачи газов.
                                                </span>

                                            </div>
                                        </div>
                                    </div>
                                </TabPane>
                            </TabContent>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Servis