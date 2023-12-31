import React from 'react'
import './Components.css'
import shippingIcon from '../Assets/Home Page/shipping.png'
import refundIcon from '../Assets/Home Page/refund.png'
import supportIcon from '../Assets/Home Page/support.png'

const Perks = () => {
    return (
        <>
            <div className='perks'>
                <div className='shipping-refund-support-container'>
                    <div className='shipping-container'>
                        <img src={shippingIcon} alt='shipping-icon'></img>
                        <h5>FREE SHIPPING Above Rs. 1000/-</h5>
                        <p>We Cover Your Shipping <br /> Enjoy Free Delivery</p>
                    </div>
                    <div className='refund-container'>
                        <img src={refundIcon} alt='shipping-icon'></img>
                        <h5>100&#37; REFUND</h5>
                        <p>IN 2 Working Days</p>
                    </div>
                    <div className='support-container'>
                        <img src={supportIcon} alt='shipping-icon'></img>
                        <h5>24*7 SUPPORT</h5>
                        <p>Our Primary duty</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Perks