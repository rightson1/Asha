import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Parallax } from 'react-parallax';
import Typewriter from 'typewriter-effect';
import { motion } from "framer-motion"
import { useGlobalProvider } from "../utils/themeContext"

const Right = ({ title }) => {
    const { colors } = useGlobalProvider();
    return <div className="pt-10 ">
        <Grid container sx={{
            borderBottom: {
                xs: `4px solid ${colors.teal[500]} `,
                md: 'none'
            },
            border: {
                xs: `none`,
                md: `4px solid ${colors.teal[500]} `
            }
        }} className="">
            <Grid item xs={12} md={4} sx={{
                borderRight: {
                    xs: `none`,
                    md: `4px solid ${colors.teal[500]} `
                }
            }} className="md:h-[70vh]">
                <img src="/images/1.jpg" alt="" className="w-full h-full object-cover h-[300px] md:h-full" />



            </Grid>
            <Grid item xs={12} md={8} className=" flex flex-col justify-center items-center py-10 gap-5 md:h-[70vh]" sx={{
                bgcolor: colors.black[500]
            }}>
                <Typography fontFamily="Questrial" variant="h1" className="uppercase " color={colors.teal[500]}
                    fontSize={{
                        xs: '2rem',

                    }}>Travelling</Typography>
                <Typography fontFamily="Questrial" className="text-[17px] px-5" textAlign="center" color={colors.black[100]}>
                    Traveling is one of the most exciting experiences Ive ever had. I love the feeling of stepping into a new place, with new sights, smells, and sounds all around me. Whether I am exploring a bustling city or a quiet countryside, I always feel a sense of wonder and amazement at the beauty of the world around us. One of my favorite things about traveling is trying new foods. I believe that food is an important part of any culture, and I love to taste the local cuisine wherever I go. I also enjoy meeting new people and learning about their lives and cultures. Its amazing to see how much we all have in common, despite our differences. Traveling has broadened my horizons and helped me become a more open-minded and compassionate person. I cant wait to see where my next adventure will take me!
                </Typography>

            </Grid>

        </Grid>
    </div>
};

export default Right;
