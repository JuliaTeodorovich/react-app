import "./Table.css";
import { PiArrowsDownUpFill } from "react-icons/pi";
import { BsPencilFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";

const Table = ({ products }) => {
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
