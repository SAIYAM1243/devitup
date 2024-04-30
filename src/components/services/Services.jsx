import { useRef } from "react";
import "./Services.scss";
import { motion, useInView } from "framer-motion";
import brochure from '../../brochure/brochure.pdf';

const variants = {
    initial: {
        x: -500,
        y: 100,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
};

const Services = () => {
    const ref = useRef();

    const handleDownload = () => {
        const link = document.createElement('a');

        link.href = brochure;

        link.download = 'DevItUp_Brochure.pdf';

        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);
    };

    const isInView = useInView(ref, { margin: "-100px" });

    return (
        <motion.div
            className="services"
            variants={variants}
            initial="initial"
            // animate="animate"
            // whileInView="animate"
            ref={ref}
            animate={"animate"}
        >
            <motion.div className="textContainer" variants={variants}>
                <p>
                    We focus on helping your brand grow
                    <br /> and move forward
                </p>
                <hr />
            </motion.div>
            <motion.div className="titleContainer" variants={variants}>
                <div className="title">
                    <img src="/people.webp" alt="" />
                    <h1>
                        <motion.b whileHover={{ color: "rebeccapurple" }}>Unique</motion.b> Ideas
                    </h1>
                </div>
                <div className="title">
                    <h1>
                        <motion.b whileHover={{ color: "rebeccapurple" }}>For Your</motion.b> Business.
                    </h1>
                    {/* <button>WHAT WE DO?</button> */}
                </div>
            </motion.div>
            <motion.div className="listContainer" variants={variants}>
                <motion.div
                    className="box"
                    whileHover={{ background: "lightgray", color: "black" }}
                >
                    <h2>Web development</h2>
                    <h3>Buisness, Blogging, E-Commerce etc. </h3>
                    <p>
                        Transform your business with our expert web development services. Let us craft your online presence for maximum impact and growth.
                    </p>
                    {/* <button>Go</button> */}
                </motion.div>
                <motion.div
                    className="box"
                    whileHover={{ background: "lightgray", color: "black" }}
                >
                    <h2>Video Editing</h2>
                    <h3>Vlogs, Tutorials, Educational etc.</h3>
                    <p>
                        Transform your raw footage into stunning, engaging videos with our professional video editing services. From concept to delivery, we bring your story to life.
                    </p>
                    {/* <button>Go</button> */}
                </motion.div>
                <motion.div
                    className="box"
                    whileHover={{ background: "lightgray", color: "black" }}
                >
                    <h2>Advertising</h2>
                    <h3>Facebook, Instagram and Google</h3>
                    <p>
                        Empower your brand with Facebook, Instagram, Google, and YouTube advertising. Reach millions, boost sales, and maximize visibility.
                    </p>
                    {/* <button>Go</button> */}
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="buttons-brochure">
                    <motion.button
                        id='foot'
                        className='button-os'
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <a onClick={handleDownload}>Download Brochure</a>
                    </motion.button>
                </motion.div>
            </motion.div>
        </motion.div >
    );
};

export default Services;