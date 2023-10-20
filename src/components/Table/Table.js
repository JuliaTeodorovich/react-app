import * as React from "react";
import "./Table.css";
import { PiArrowsDownUpFill } from "react-icons/pi";
import { BsPencilFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ButtonModal from "../ButtonsModal/ButtonsModal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 4,
  p: 6,
};

const Table = ({ products, onDelete }) => {
  const [open, setOpen] = React.useState(false);
  const [deleteId, setDeleteId] = React.useState(null);
  const handleOpen = (id) => {
    setDeleteId(id);
    setOpen(true);
  };
  const handleClose = () => {
    setDeleteId(null);
    setOpen(false);
  };

  const handleDelete = (id) => {
    onDelete(deleteId);
    handleClose();
  };

  return (
    <div className="container-table">
      <table>
        <thead>
          <tr>
            <th>
              ID
              <PiArrowsDownUpFill className="logo-arrow" />
            </th>
            <th>
              Category <PiArrowsDownUpFill className="logo-arrow" />
            </th>
            <th>
              Name <PiArrowsDownUpFill className="logo-arrow" />
            </th>
            <th>
              Quantity <PiArrowsDownUpFill className="logo-arrow" />
            </th>
            <th>
              Price (&#8372;)
              <PiArrowsDownUpFill className="logo-arrow" />
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <tr
              key={item.id}
              className={item.id % 2 === 0 ? "even-line" : "odd-line"}>
              <td>{item.id}</td>
              <td>{item.category}</td>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>
                {item.price.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </td>
              <td className="btns-edit-del">
                <div>
                  <BsPencilFill className="logo pen" />
                </div>
                <div>
                  <MdDelete
                    onClick={() => handleOpen(item.id)}
                    className="logo del"
                  />
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    BackdropProps={{
                      style: { backgroundColor: "transparent" },
                    }}>
                    <Box sx={style}>
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2">
                        Are u sure you want to delete this product?
                      </Typography>
                      <div className="btns-modal">
                        {" "}
                        <ButtonModal
                          color="btn-modal cancel-delete"
                          text="Cancel"
                          onClick={handleClose}
                        />
                        <ButtonModal
                          color="btn-modal delete"
                          text="Delete"
                          onClick={() => handleDelete(item.id)}
                        />
                      </div>
                    </Box>
                  </Modal>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
