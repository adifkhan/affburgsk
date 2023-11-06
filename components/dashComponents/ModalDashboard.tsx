import { Box, Typography, Modal } from '@mui/material'
import React from 'react'


const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '55%',
    borderRadius: '10px',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 15,
    p: 4,
    textAlign: 'center',
    color: '#7752FE'
};

type ModalProps = {
    open: boolean;
    handleClose: () => void;
}

export default function ModalDashboard({ open, handleClose }: ModalProps) {
    return (
        <div>
            <Modal
                // disableScrollLock
                keepMounted
                open={open}
                onClose={handleClose}
            >
                <Box sx={style}>
                    <Box component={'span'}></Box>
                    <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
                        THEME is under develop.
                    </Typography>
                </Box>
            </Modal>
        </div>
    )
}
