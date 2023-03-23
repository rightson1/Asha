import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Parallax } from 'react-parallax';
import Typewriter from 'typewriter-effect';
import { motion } from "framer-motion"
import { useGlobalProvider } from "../utils/themeContext"

const Left = ({ title }) => {
    const { colors } = useGlobalProvider();
    return <div className="pt-10 -mt-11">
        <Grid container direction={{
            xs: "column-reverse",
            md: "row"
        }} sx={{
            borderBottom: {
                xs: `4px solid ${colors.teal[500]} `,
                md: 'none'
            },
            border: {
                xs: `none`,
                md: `4px solid ${colors.teal[500]} `
            },

        }} className="" >
            <Grid item xs={12} md={8} className=" flex flex-col justify-center items-center py-10 gap-5 md:h-[70vh]" sx={{
                bgcolor: colors.black[500]
            }}>
                <Typography fontFamily="Questrial" variant="h1" className="uppercase " color={colors.teal[500]}
                    fontSize={{
                        xs: '2rem',

                    }}>Cooking</Typography>
                <Typography fontFamily="Questrial" className="text-[17px] " textAlign="center" color={colors.black[100]}>
                    Cooking is one of my favorite hobbies, and I find so much joy in creating new dishes and experimenting with different ingredients. For me, cooking is not just about nourishing my body, it is also a way to express my creativity and connect with others. I love to invite friends and family over for meals, and it brings me so much happiness to see them enjoying the food I have prepared. One of my favorite things about cooking is the way it brings people together. Whether it is sharing a meal with loved ones or cooking with friends, there is something special about the way food can create a sense of community and togetherness. I also love to learn about different cuisines from around the world and incorporate those flavors and techniques into my own cooking. Overall, cooking is a deeply fulfilling and rewarding experience for me, and I look forward to continuing to explore new dishes and techniques in the kitchen.
                </Typography>

            </Grid>

            <Grid item xs={12} md={4} sx={{
                borderLeft: {
                    xs: `none`,
                    md: `4px solid ${colors.teal[500]} `
                }
            }} className="md:h-[70vh]">
                <img src="/images/3.jpg" alt="" className="w-full h-full object-cover h-[300px] md:h-full" />



            </Grid>

        </Grid>
    </div>
};

export default Left;
