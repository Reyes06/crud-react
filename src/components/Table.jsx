import React from "react";
import CrudTableRow from "./TableRow";

const CurdTable = ({ pokemonList, setDataToEdit, deleteData }) => {
  return (
    <>
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {pokemonList.length > 0 ? (
              pokemonList.map((pokemon) => (
                <CrudTableRow
                  key={pokemon.id}
                  pokemon={pokemon}
                  deleteData={deleteData}
                  setDataToEdit={setDataToEdit}
                />
              ))
            ) : (
              <tr>
                <td colSpan="3">Without data</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CurdTable;
