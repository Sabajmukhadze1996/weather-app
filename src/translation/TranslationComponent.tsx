import React, { useState, useContext } from "react";
import { Translation } from "./TranslationContextProvider";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CircularProgress from "@mui/material/CircularProgress";
import geoImg from "./ge.png";
import usImg from "./us.png";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  bgcolor: "transparent",
  boxShadow: 24,
  p: 2,
  outline: "none",
  borderRadius: "7px",
};

const TranslationComp = () => {
  const { lang, setLang } = useContext(Translation);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div style={{ marginTop: 8 }}>
      <span>
        {lang === "geo" ? (
          <img
            style={{ width: "27px", marginBottom: "4.1px" }}
            src={geoImg}
            alt="flag"
          />
        ) : (
          <img
            style={{ width: "27px", marginBottom: "4.1px" }}
            src={usImg}
            alt="flag"
          />
        )}
      </span>
      &nbsp;
      <select
        style={{
          width: 60,
          outline: "none",
          background: "#fff",
          borderRadius: 10,
          marginBottom: "8px",
          paddingLeft: "3px",
        }}
        value={lang}
        onChange={(e) => {
          setLang(e.target.value);
          handleOpen();
          setTimeout(() => {
            handleClose();
          }, 500);
        }}
      >
        <option style={{ borderRadius: 100, background: "#fff" }}>en</option>
        <option style={{ borderRadius: 100, background: "#fff" }}>geo</option>
      </select>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CircularProgress
            style={{ color: "#ffffff" }}
            size={60}
            thickness={4.5}
          />
        </Box>
      </Modal>
    </div>
  );
};
export default TranslationComp;
