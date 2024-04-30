import React from 'react';
import './Navbar.scss';
import { motion } from "framer-motion";
import Logo from '../../assets/DevItUp.png';
import Sidebar from '../sidebar/Sidebar';
import brochure from '../../brochure/brochure.pdf';

const Navbar = () => {

    const handleDownload = () => {
        const link = document.createElement('a');

        link.href = brochure;

        link.download = 'DevItUp_Brochure.pdf';

        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);
    };


    return (
        <div className='navbar'>
            {/* Sidebar */}
            <Sidebar />
            <div className="wrapper">
                <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <img src={Logo} alt="" />
                </motion.span>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="buttons">
                    <motion.button
                        id='foot'
                        className='button-os'
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <a href="https://forms.gle/APRpQ8SYDma8hfRn7" target='_blank'>Contact us</a>
                    </motion.button>
                    <motion.div className='down'
                        initial={{
                            x: 500,
                            opacity: 0,
                        }}
                        animate={{
                            x: 0,
                            opacity: 1,
                            transition: {
                                duration: 1,
                                staggerChildren: 0.1,
                            }
                        }}
                        scrollButton={{
                            opacity: 0,
                            y: 10,
                            transition: {
                                duration: 2,
                                repeat: Infinity,
                            },
                        }}
                    >
                        <span>--------------</span>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <a onClick={handleDownload}>DOWNLOAD BROCHURE</a>
                    </motion.div>
                </motion.div>
                <div className="social">
                    {/* <a href="">
                        <img className='in' src="public\linkedin.png" alt="" />
                    </a> */}
                    {/* <a href="">
                        <img className='ig' src="public\instagram.png" alt="" />
                    </a> */}
                    
                </div>
            </div>
        </div>
    )
}

export default Navbar