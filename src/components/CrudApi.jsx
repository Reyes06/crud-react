import React, { useState, useEffect } from "react";
import { helpHttp } from "../helpers/helpHttp";
import Form from "./Form";
import Table from "./Table";

let initialPokemon = { pokemones: [] };

export default function CrudApi() {
  const [initialPokemonDB, setInitialPokemonDB] = useState(
    initialPokemon.pokemones
  );

  const api = helpHttp();
  let url = "http://localhost:5000/pokemones";

  useEffect(() => {
    api
      .get(url)
      .then((res) => {
        setInitialPokemonDB(res);
      })
      .catch((error) => {
          alert('Server not found after 3 seconds (GET http://localhost:5000/pokemones). No data loaded')
        setInitialPokemonDB([]);
      });
  }, []);

  const [dataToEdit, setDataToEdit] = useState(null);

  const createData = (data) => {
    data.id = Date.now();
    setInitialPokemonDB([...initialPokemonDB, data]);
  };

  const updateData = (data) => {
    let newData = initialPokemonDB.map((pokemon) =>
      pokemon.id === data.id ? data : pokemon
    );
    setInitialPokemonDB(newData);
  };

  const deleteData = (id) => {
    let isDelete = window.confirm("¿Do you want to delete this Pokemon?");
    if (isDelete) {
      let newData = initialPokemonDB.filter((pokemon) => pokemon.id !== id);
      setInitialPokemonDB(newData);
    }
  };

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-auto">
          <h1>
            CRUD React example using data from{" "}
            <span className="text-info">API</span>
          </h1>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-4 pt-3">
            <div className="card">
              <div className="card-body">
                <Form
                  createData={createData}
                  updateData={updateData}
                  dataToEdit={dataToEdit}
                  setDataToEdit={setDataToEdit}
                />
              </div>
            </div>
          </div>
          <div className="col-7 offset-1">
            <br />
            <Table
              pokemonList={initialPokemonDB}
              deleteData={deleteData}
              setDataToEdit={setDataToEdit}
            />
          </div>
        </div>
      </div>
    </>
  );
}
