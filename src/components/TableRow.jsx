import React from "react";

const CrudTableRow = ({ pokemon, setDataToEdit, deleteData }) => {
  return (
    <tr>
      <td>{pokemon.name}</td>
      <td>{pokemon.type}</td>
      <td>
        <div className="row justify-content-center">
          <div className="d-grid col-5">
            <button
              onClick={(e) => {
                setDataToEdit(pokemon);
              }}
              className="btn btn-outline-primary"
            >
              Edit
            </button>
          </div>
          <div className="d-grid col-5 offset-1">
            <button
              onClick={(e) => {
                deleteData(pokemon.id);
              }}
              className="btn btn-outline-primary"
            >
              Delete
            </button>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default CrudTableRow;
