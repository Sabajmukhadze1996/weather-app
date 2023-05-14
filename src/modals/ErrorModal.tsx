import React, { useContext } from "react";
import { Translation } from "../translation/TranslationContextProvider";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { BsFillSunFill } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import "./error-modal.css";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: "480px",
  width: "95%",
  height: "280px",
  bgcolor: "#FFFFFF",
  boxShadow: 24,
  outline: "none",
  borderRadius: "7px",
  padding: "0px",
  paddingTop: "0.6rem",
  backgroundColor: "#13172a",
};

type Props = {
  openModal: boolean;
  onClose: () => void;
};

const ErrorModal: React.FC<Props> = ({ openModal, onClose }: any) => {
  const { content } = useContext(Translation);

  return (
    <>
      {openModal ? (
        <Modal open={openModal} onClose={onClose}>
          <Box sx={style}>
            <div className="icon-container">
              <BsFillSunFill fill="orange" className="mt-4" size={65} />
            </div>
            <h3 className="error-modal-text">{content.not_found_error_text}</h3>
            <div className="close-container" onClick={() => onClose(false)}>
              <IoMdClose fill="#fff" size={29} />
            </div>
          </Box>
        </Modal>
      ) : null}
    </>
  );
};

export default ErrorModal;
