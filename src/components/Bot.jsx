import React from 'react'

const Bot = ({ modal, setModal }) => {
    return (
        <>
            <div className={`Bott ${modal ? 'active' : ''} `}>
                <div className="container">
                    <div className="bot active">
                        <div className="row">
                            <div className="col-lg-6 zed mx-auto">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="bot_text">
                                            Oставьте заявку
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <input placeholder="Имя" type="text" class="input" required="" />
                                    </div>
                                    <div className="col-12 mt-5 ">
                                        <input placeholder="Hомер телефона" type="text" class="input" required="" />
                                    </div>
                                    <div className="col-12 mt-5">
                                        <input placeholder="Сообщение" type="text" class="input" required="" />
                                    </div>
                                    <div className="col-12 mt-5">
                                        <button> Отправить </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div onClick={() => setModal(false)} className="close"></div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default Bot