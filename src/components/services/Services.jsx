import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

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

    const isInView = useInView(ref, { margin: "-100px" });

    return (
        <motion.div
            className="servicesSection"
            variants={variants}
            initial="initial"
            // animate="animate"
            // whileInView="animate"
            ref={ref}
            animate={isInView && "animate"}
        >
            <motion.div className="textContainer" variants={variants}>
                <p className="topText">
                    I focus on helping your brand grow <br /> and move forward
                </p>
                <hr />
            </motion.div>
            <motion.div className="titleContainer" variants={variants}>
                <div className="title">
                    <img src="./people.webp" alt="" />
                    <h1 className="titleHeading">
                        <motion.strong whileHover={{ color: "orange" }}>
                            Unique
                        </motion.strong>{" "}
                        Ideas
                    </h1>
                </div>
                <div className="title">
                    <h1 className="titleHeading">
                        <motion.strong whileHover={{ color: "orange" }}>
                            For Your
                        </motion.strong>{" "}
                        Business.
                    </h1>
                    <button className="whatWeBtn">What We Do?</button>
                </div>
            </motion.div>
            <motion.div className="cardlistContainer" variants={variants}>
                <motion.div
                    className="card-box"
                    whileHover={{ background: "lightgray", color: "black" }}
                >
                    <h2 className="heading">Branding</h2>
                    <p className="para">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sit dolore veniam unde ipsam iure nobis? Quam minima,
                        praesentium iure rem blanditiis laborum commodi quae
                        nostrum dignissimos quo facere ipsa vitae.
                    </p>
                    <button className="goBtn">Go</button>
                </motion.div>
                <motion.div
                    className="card-box"
                    whileHover={{ background: "lightgray", color: "black" }}
                >
                    <h2 className="heading">Branding</h2>
                    <p className="para">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sit dolore veniam unde ipsam iure nobis? Quam minima,
                        praesentium iure rem blanditiis laborum commodi quae
                        nostrum dignissimos quo facere ipsa vitae.
                    </p>
                    <button className="goBtn">Go</button>
                </motion.div>
                <motion.div
                    className="card-box"
                    whileHover={{ background: "lightgray", color: "black" }}
                >
                    <h2 className="heading">Branding</h2>
                    <p className="para">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sit dolore veniam unde ipsam iure nobis? Quam minima,
                        praesentium iure rem blanditiis laborum commodi quae
                        nostrum dignissimos quo facere ipsa vitae.
                    </p>
                    <button className="goBtn">Go</button>
                </motion.div>
                <motion.div
                    className="card-box"
                    whileHover={{ background: "lightgray", color: "black" }}
                >
                    <h2 className="heading">Branding</h2>
                    <p className="para">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sit dolore veniam unde ipsam iure nobis? Quam minima,
                        praesentium iure rem blanditiis laborum commodi quae
                        nostrum dignissimos quo facere ipsa vitae.
                    </p>
                    <button className="goBtn">Go</button>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default Services;
