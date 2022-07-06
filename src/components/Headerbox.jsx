import React from 'react'

const Headerbox = () => {
    return (
        <>
            <div className="Headerbox">
                <div className="container">
                    <div className="row justify-content-lg-center justify-content-evenly">
                        <div className="col-lg-3 col-md-5 col-sm-6 hh">
                            <div className="box_1">
                                <div className="box_h">
                                    O<span>2</span>
                                </div>
                                <div className="box_p">
                                    Централизованное снабжение медицинским кислородом
                                </div>
                                <div className="box_name">
                                    Medgaz
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-5 col-sm-6 hh">
                            <div className="box_2">
                                <div className="box_h">
                                    N<span>2</span>O
                                </div>
                                <div className="box_p">
                                    Централизованное снабжение закисью азота
                                </div>
                                <div className="box_name">
                                    Medgaz
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-5 col-sm-6 hh">
                            <div className="box_3">
                                <div className="box_h">
                                    V = A*В*Н
                                </div>
                                <div className="box_p">
                                    Централизованное снабжение сжатым воздухом
                                </div>
                                <div className="box_name">
                                    Medgaz
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-5 col-sm-6 hh">
                            <div className="box_4">
                                <div className="box_h">
                                    СO<span>2</span>

                                </div>
                                <div className="box_p">
                                    Централизованное снабжение углекислым газом
                                </div>
                                <div className="box_name">
                                    Medgaz
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Headerbox