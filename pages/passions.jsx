import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Parallax } from 'react-parallax';
import Typewriter from 'typewriter-effect';
import { motion } from "framer-motion"
import { useGlobalProvider } from "../utils/themeContext"
import Hero from "../components/Hero";
import Right from "../components/Right";
import Left from "../components/Left";
const Services = () => {
    const { colors } = useGlobalProvider();
    return <div className="min-h-screen flex flex-col gap-0">
        <Hero title="My Passions" array={['Asha', 'Abdullahi']} url="/images/7.jpg" />
        <div className="py-20 flex flex-col justify-center items-center gap-8 px-5 md:px-20">
            <Typography fontFamily="Questrial" variant="h1" className="uppercase"
                color={colors.teal[500]}
                fontSize={{
                    xs: '2rem',
                    md: '3rem'
                }}>MY Passions</Typography>
            <Typography fontFamily="Questrial" className="text-[17px]" textAlign="center">
                I have a many passions, but here are the few that I have been able to pursue.
            </Typography>


        </div>
        <Right />
        <Left />
    </div>;
};

export default Services;
