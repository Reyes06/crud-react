import React, { useState, useEffect } from "react";
import { helpHttp } from "../helpers/helpHttp";
import Form from "./Form";
import Loader from "./Loader/Loader";
import Message from "./Message";
import Table from "./Table";

export default function CrudApi() {
  const [initialPokemonDB, setInitialPokemonDB] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  let url = "http://localhost:5000/pokemones";

  const api = helpHttp();

  useEffect(() => {
    setLoading(true);
    api
      .get(url)
      .then((res) => {
        if (res.err) {
          setInitialPokemonDB(null);
          setLoading(false);
          setError(error);
        } else {
          setInitialPokemonDB(res);
          setLoading(false);
          setError(null);
        }
      })
      .catch((error) => {
        setInitialPokemonDB(null);
        setLoading(false);
        setError({
          err: true,
          status: "500",
          statusText: `Server is down (${url})`,
        });
      });
  }, [url]);

  const [dataToEdit, setDataToEdit] = useState(null);

  const createData = (data) => {
    data.id = Date.now();

    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    api.post(url, options).then((res) => {
      if (!res.err) {
        setInitialPokemonDB([...initialPokemonDB, res]);
      } else {
        setError(res);
      }
    });
  };

  const updateData = (data) => {
    let endpoint = url + "/" + data.id;
    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    api.put(endpoint, options).then((res) => {
      if (!res.err) {
        let newData = initialPokemonDB.map((pokemon) =>
          pokemon.id === data.id ? data : pokemon
        );
        setInitialPokemonDB(newData);
      } else {
        setError(res);
      }
    });
  };

  const deleteData = (id) => {
    let isDelete = window.confirm("¿Do you want to delete this Pokemon?");
    if (isDelete) {
      let endpoint = url + "/" + id;
      let options = {
        headers: { "content-type": "application/json" },
      };

      api.del(endpoint, options).then((res) => {
        if (!res.err) {
          let newData = initialPokemonDB.filter((pokemon) => pokemon.id !== id);
          setInitialPokemonDB(newData);
        } else {
          setError(res);
        }
      });
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
          <div className="col-7 offset-1 d-flex align-items-center justify-content-center">
            {loading && <Loader />}
            {error && (
              <Message
                message={<p><strong>Status Code: </strong>{error.status}<strong> Status text: </strong>{error.statusText}</p>}
                alertType="danger"
              />
            )}
            {initialPokemonDB && (
              <Table
                pokemonList={initialPokemonDB}
                deleteData={deleteData}
                setDataToEdit={setDataToEdit}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
