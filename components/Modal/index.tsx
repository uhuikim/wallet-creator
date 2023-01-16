import React, { useContext } from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from '@mui/material';

import { GlobalContext } from '../../contexts';

const Modal = () => {
  const {
    state: { msgOpen, message },
    setModalClose,
  } = useContext(GlobalContext);

  return msgOpen ? (
    <Dialog
      disableEscapeKeyDown
      open={msgOpen}
      onClose={(_event, reason) => {
        if (reason !== 'backdropClick') {
          setModalClose();
        }
      }}
    >
      <DialogTitle>확인</DialogTitle>
      <DialogContent>
        <Typography whiteSpace="pre-wrap" minWidth={320} variant="body2">
          {message}
        </Typography>
      </DialogContent>
      <DialogActions sx={{ p: '20px' }}>
        <button onClick={setModalClose}>확인</button>
      </DialogActions>
    </Dialog>
  ) : null;
};

export default Modal;
