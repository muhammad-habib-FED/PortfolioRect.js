import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
    {
        id: 1,
        title: "React Commerce",
        img: "https://images.pexels.com/photos/20194443/pexels-photo-20194443/free-photo-of-a-wooden-walkway-leading-to-the-beach-with-palm-trees.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum sapiente dolorum unde similique doloribus provident iure rem dolore amet facilis fugit, rerum, reprehenderit quos. Debitis, vitae deserunt! Dolorum, ipsa in.",
    },
    {
        id: 2,
        title: "Next.js Blog",
        img: "https://images.pexels.com/photos/20079091/pexels-photo-20079091/free-photo-of-a-canal-in-venice-with-boats-and-buildings.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum sapiente dolorum unde similique doloribus provident iure rem dolore amet facilis fugit, rerum, reprehenderit quos. Debitis, vitae deserunt! Dolorum, ipsa in.",
    },
    {
        id: 3,
        title: "Vanilla JS App",
        img: "https://images.pexels.com/photos/9003183/pexels-photo-9003183.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum sapiente dolorum unde similique doloribus provident iure rem dolore amet facilis fugit, rerum, reprehenderit quos. Debitis, vitae deserunt! Dolorum, ipsa in.",
    },
    {
        id: 4,
        title: "Music App",
        img: "https://images.pexels.com/photos/16606756/pexels-photo-16606756/free-photo-of-ornamented-dome-in-church.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum sapiente dolorum unde similique doloribus provident iure rem dolore amet facilis fugit, rerum, reprehenderit quos. Debitis, vitae deserunt! Dolorum, ipsa in.",
    },
];

const Single = ({ item }) => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        // offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [-350, 300]);

    const isMobile = window.innerWidth <= 768;
    return (
        <section>
            {isMobile ? (
                <div className="mobileCard">
                    <div className="imageContainer">
                        <img src={item.img} alt="" />
                    </div>
                    <div className="textContainer">
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button>See Demo</button>
                    </div>
                </div>
            ) : (
                <div className="container">
                    <div className="contentWrapper">
                        <div className="imageContainer" ref={ref}>
                            <img src={item.img} alt="" />
                        </div>
                        <motion.div className="textContainer" style={{ y }}>
                            <h2>{item.title}</h2>
                            <p>{item.desc}</p>
                            <button>See Demo</button>
                        </motion.div>
                    </div>
                </div>
            )}
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
        <div className="portfolioSection" ref={ref}>
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div
                    style={{ scaleX }}
                    className="progressBar"
                ></motion.div>
            </div>
            {items.map((item) => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    );
};

export default Portfolio;
