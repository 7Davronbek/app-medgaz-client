import React from 'react'
import { Link } from 'react-router-dom'

const Works = () => {
    return (
        <>
            <div className="Works">
                <div className="container">
                    <div className="row">
                        <div className="work_h">Наши работы</div>

                        <div className="col-12 col-lg-6 work_box">
                            <img className='w-100 img_1' src="/images/w_1.png" alt="" />
                            <div className="row mt-4">
                                <div className="col-6">
                                    <img className='work_img w-100  h-100' src="/images/w_4.png" alt="" />
                                </div>
                                <div className="col-6">
                                    <img className='work_img w-100  h-100' src="/images/w_5.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className=" col-lg-3 col-sm-6 work_box">
                            <img className='work_img w-100 mt-5 mt-lg-0 ' src="/images/w_2.png" alt="" />
                            <img className='work_img w-100  d-block mt-4 ' src="/images/w_6.png" alt="" />
                        </div>
                        <div className=" col-lg-3 col-sm-6 work_box overflow-hidden">
                            <img className=' w-100 mt-5 mt-lg-0  h-100 d-none d-sm-block' src="/images/w_3.png" alt="" />
                        </div>
                        <div className="text-center mt-4 ">
                            <Link target={'_blank'} rel="noreferrer" to='/new-works' className="work_a">Подробнее</Link>
                        </div>

                    </div>
                </div>
            </div></>
    )
}

export default Works