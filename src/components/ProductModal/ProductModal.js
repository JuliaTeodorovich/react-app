import React, { useRef } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FormModal from "../Form/Form";
import ButtonModal from "../ButtonsModal/ButtonsModal";
import "./ProductModal.css";
import { ImCross } from "react-icons/im";

const ProductModal = ({
  open,
  handleClose,
  action,
  product,
  onCancel,
  onSubmit,
}) => {
  const formModalRef = useRef(null);
  let title = "";
  let confirmText = "";
  let bgColor = "background.paper";

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: bgColor,
    border: "none",
  };

  switch (action) {
    case "add":
      title = "Add Product";
      confirmText = "Submit";
      bgColor = "#d9d9d9";
      break;
    case "edit":
      title = "Edit Product";
      confirmText = "Submit";
      bgColor = "#d9d9d9";
      break;
    case "delete":
      title = "Are u sure you want to delete this product?";
      confirmText = "Delete";
      bgColor = "background.paper.add";
      break;
    default:
      break;
  }

  const handleSubmit = () => {
    if (action === "delete") {
      onSubmit();
    } else if (action === "add") {
      if (formModalRef.current) {
        const newProduct = formModalRef.current.getFormValues();
        onSubmit(newProduct);
      }
    } else if (action === "edit") {
      const updatedProduct = formModalRef.current.getFormValues();
      onSubmit(updatedProduct);
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      BackdropProps={{
        style: { backgroundColor: "transparent" },
      }}>
      <Box sx={style}>
        <div className="block-title-modal">
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            className={`modal-title ${
              action === "delete" ? "delete-title" : "edit-title"
            }`}>
            {title}
          </Typography>
          {action !== "delete" && (
            <ImCross className="close" onClick={onCancel} />
          )}
        </div>
        {action !== "delete" && (
          <div className="edit-modal">
            <FormModal
              product={action === "edit" ? product : {}}
              isOpen={true}
              onClose={handleClose}
              onCancel={onCancel}
              onSubmit={onSubmit}
            />
          </div>
        )}
        {action === "delete" && (
          <div className="btns-modal">
            <ButtonModal
              color={`btn-modal ${
                action === "delete" ? "cancel-delete" : "cancel-edit"
              }`}
              text="Cancel"
              onClick={onCancel}
            />
            <ButtonModal
              color={`btn-modal ${action === "delete" ? "delete" : "submit"}`}
              text={confirmText}
              type="submit"
              onClick={handleSubmit}
            />
          </div>
        )}
      </Box>
    </Modal>
  );
};

export default ProductModal;
