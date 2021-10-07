import React from "react";
import CrudTableRow from "./TableRow";

const CurdTable = ({ pokemonList, setDataToEdit, deleteData }) => {
  return (
    <>
      <h3>Data table</h3>
      <table className='table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {pokemonList.length === 0 ? (
            <tr>
              <td colSpan="3">Without data</td>
            </tr>
          ) : (
            pokemonList.map((pokemon) => (
              <CrudTableRow
                key={pokemon.id}
                pokemon={pokemon}
                deleteData={deleteData}
                setDataToEdit={setDataToEdit}
              />
            ))
          )}
        </tbody>
      </table>
    </>
  );
};

export default CurdTable;
