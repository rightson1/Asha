import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Parallax } from 'react-parallax';
import Typewriter from 'typewriter-effect';
import { motion } from "framer-motion"
import { useGlobalProvider } from "../utils/themeContext"
import Hero from "../components/Hero";
const About = () => {
    const { colors } = useGlobalProvider();
    return <div className="min-h-screen">
        <Hero title="About Me" array={['Asha', 'Abdullahi']} url="/images/7.jpg" />
        <div className="py-20 flex flex-col justify-center items-center gap-8 px-5 md:px-20">
            <Typography fontFamily="Questrial" variant="h1" className="uppercase"
                color={colors.teal[500]}
                fontSize={{
                    xs: '2rem',
                    md: '3rem'
                }}>About Asha</Typography>
            <Typography fontFamily="Questrial" className="text-[17px]" textAlign="center">
                I am Asha Abdullahi, a student at Riara University. I am so excited to share a little about myself with you all. One of my biggest passions in life is traveling. I love exploring new places, meeting new people, and immersing myself in different cultures. There is something so invigorating about stepping out of my comfort zone and experiencing something completely new and different.
            </Typography>
            <Typography fontFamily="Questrial" className="text-[17px]" textAlign="center">
                In addition to traveling, I also love to cook. I find so much joy in experimenting with new recipes and creating delicious meals for my loved ones. Cooking is a way for me to unwind and express my creativity.
            </Typography>
            <Typography fontFamily="Questrial" className="text-[17px]" textAlign="center">
                As a dedicated Muslim, my faith plays a big role in my life. It guides me in everything I do, and I strive to live my life in a way that is aligned with my beliefs and values.
            </Typography>
            <Typography fontFamily="Questrial" className="text-[17px]" textAlign="center">
                Finally, I have to mention my favorite artist, Taylor Swift. I absolutely adore her music, and I find so much inspiration in her lyrics. Her music has gotten me through some tough times, and I will always be grateful for that.
            </Typography>
            <Typography fontFamily="Questrial" className="text-[17px]" textAlign="center">
                Thanks for taking the time to get to know me a little better. I cant wait to get to know each of you too!




            </Typography>


        </div>
    </div>;
};

export default About;
