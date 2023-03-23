import { Box, Grid } from '@mui/material';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/CloseOutlined';
import * as React from 'react';
const Gallery = () => {
    const [open, setOpen] = React.useState(null);

    const handleClose = () => setOpen(null);
    return <div className="flex justify-center pb-10 flex-col ">
        {/* <div className="w-full bg-slate-300 h-[40vh] ">
            <video src="/video.mp4" className='h-full w-full' loop></video>
        </div> */}
        <Grid className="my-10 px-5" container spacing={3}>

            {images.map((item, index) => {
                return (
                    <Grid item xs={12} md={4} key={index}>
                        <Box component={item.video ? 'video' : 'img'}
                            autoPlay loop
                            controls
                            onClick={() => setOpen(item.video ? null : item.url)}
                            className='w-full h-full object-cover max-h-[250px]  cursor-pointer'
                            src={item.url}
                            sx={{ width: '100%', height: '100%', bgcolor: 'grey.500' }} />
                    </Grid>
                )
            }
            )}
        </Grid>
        <Modal
            className='w-full h-full flex justify-center items-center p-10 md:p-[100px] '
            open={!!open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{
                bgcolor: 'rgba(0,0,0,0.5)',
            }}
        >

            <Box
                onClick={handleClose}
                className='w-full h-full object-cover '
                src={open}
                sx={{ width: '100%', height: '100%', bgcolor: 'grey.500' }} />
        </Modal>
    </div>;
};

const images = [
    {
        url: '/video.mp4',
        caption: 'Slide 1',
        video: true,
    },
    {
        url: '/images/1.jpg',
        caption: 'Slide 1'
    },


    {
        url: '/images/2.jpg',
        caption: 'Slide 3'
    },
    {
        url: '/images/3.jpg',
        caption: 'Slide 3'
    },
    {
        url: '/images/4.jpg',
        caption: 'Slide 3'
    },
    {
        url: '/images/5.jpg',
        caption: 'Slide 3'
    },
    {
        url: '/images/6.jpg',
        caption: 'Slide 3'
    },
    {
        url: '/images/7.jpg',
        caption: 'Slide 3'
    },

];


export default Gallery;
