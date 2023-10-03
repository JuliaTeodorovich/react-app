import "./Table.css";
import { PiArrowsDownUpFill } from "react-icons/pi";
import { BsPencilFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";

const Table = () => {
  const products = [
    {
      id: 0,
      category: "PC",
      name: "Lenovo Y50-70",
      quantity: 5,
      price: 25000,
    },
    {
      id: 1,
      category: "Clothes",
      name: "Nike M Nk Df Acd21",
      quantity: 22,
      price: 4000,
    },
    {
      id: 2,
      category: "Plumbing",
      name: "CERSANIT MITO 17",
      quantity: 1337,
      price: 5000,
    },
  ];
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
              <td>
                <BsPencilFill className="logo pen" />
                <MdDelete className="logo del" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
