import React, { useEffect } from 'react';
import './Preloader.scss';
import { preLoaderAnim } from './../../animations/index';

const Preloader = () => {

    useEffect(() => {
        preLoaderAnim()
    }, [])


    return (
        <div className="preloader">
            <div className="texts-container">
                <span>Igniting</span>
                <span>Brands,</span>
                <span>Inspiring</span>
                <span>Audiences.</span>
            </div>
        </div>
    )
}

export default Preloader