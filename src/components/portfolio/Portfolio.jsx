import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import EverythingElse from '../../assets/everythingelse.png'
import Rupee from '../../assets/rupee.png';
import tup from "../../assets/tup.png"
import henry from "../../assets/henry.png";

const items = [
  {
    id: 1,
    title: "everythingelse.co.in",
    img: EverythingElse,
    href: "https://everythingelse.co.in/",
    desc: "Everything Else Communications is an integrated business solutions company dedicated to help businesses in their promotion & development.Developed By Our Enthusiast Freelancers",
  },
  {
    id: 2,
    title: "Virtual Banking React App",
    img: Rupee,
    href: "https://react-smooth-scroll-website-rupee.netlify.app/",
    desc: "A React Website made by our enthusiast freelancer which made virtual banking easier.",
  },
  {
    id: 3,
    title: "Full Stack Blogging App",
    href: "https://theuntoldphrase.netlify.app/",
    img: tup,
    desc: "A Mern Stack Blogging app made by our enthusiast coder. This website is a full productive use website with admin panel and dashboard and will be live in 2-3 weeks!",
  },
  {
    id: 4,
    title: "Long And Short Form Video Edits",
    img: henry,
    gdrive: "Google Drive",
    href: "https://www.youtube.com/@henryharvin/shorts",
    desc: "Our Freelancers edit shorts and long form videos for youtubers, companies etc. You can check one of them below!",
    p: "https://drive.google.com/drive/folders/1TnSjFM6fGHoIwo4ux2uvcXtMpsptDvD-?usp=drive_link",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" href={item.href} />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <p><a href={item.p} target="_blank">{item.gdrive}</a></p>
            <button><a href={item.href} target="_blank">See Demo</a></button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;