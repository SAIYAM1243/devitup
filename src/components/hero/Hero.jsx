import { motion } from "framer-motion";
import HeroImg from '../../assets/hero.png'
import './Hero.scss';
const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity,
        },
    },
};
const sliderVariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: "-220%",
        transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 20,
        },
    },
};

const Hero = () => {
    return (
        <div className="hero">
            <div className="wrapper">
                <motion.div
                    className="textContainer"
                    variants={textVariants}
                    initial="initial"
                    animate="animate"
                >
                    <motion.h2 variants={textVariants}>HELLO WORLD, <span> WE ARE</span></motion.h2>
                    <motion.h1 variants={textVariants}>
                        DEVITUP
                        
                    </motion.h1>
                    <motion.h3><b>A </b><span>Content Marketing Agency</span></motion.h3>
                    <motion.h4>We are a team of enthusiastic individuals who help brands grow by unleashing the potential of social media <span><b>.</b></span></motion.h4>
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
                            <a href="https://forms.gle/APRpQ8SYDma8hfRn7" target='_blank'>Contact us</a>
                        </motion.button>
                    </motion.div>
                    <motion.div variants={textVariants} className="buttons">
                        {/* <motion.button variants={textVariants}>
                            See the Latest Works
                        </motion.button>
                        <motion.button variants={textVariants}>Contact Me</motion.button> */}
                    </motion.div>
                    <motion.img
                        variants={textVariants}
                        animate="scrollButton"
                        src="/scroll.png"
                        alt=""
                    />

                </motion.div>
            </div>
            <motion.div
                className="slidingTextContainer"
                variants={sliderVariants}
                initial="initial"
                animate="animate"
            >
                Web Developer Video Editor Content Writer Logo Designer
            </motion.div>
            <div className="imageContainer">
                <img src={HeroImg} alt="" />
            </div>
        </div>
    );
};

export default Hero;