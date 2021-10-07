import React, { useState, useEffect } from "react";

const initialFormState = { id: null, name: "", type: "" };

const CrudForm = ({ createData, updateData, dataToEdit, setDataToEdit }) => {
  const [form, setForm] = useState(initialFormState);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.type) {
      alert("Data incomplete");
      return;
    }

    if (form.id === null) {
      createData(form);
    } else {
      updateData(form);
    }

    handleReset();
  };

  const handleReset = (e) => {
    setForm(initialFormState);
    setDataToEdit(null);
  };

  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      console.log("Initial form");
      setForm(initialFormState);
    }
  }, [dataToEdit]);

  return (
    <>
      {dataToEdit ? <h3 className='text-center'><span className='text-success'>Update </span> pokemon</h3> : <h3  className='text-center'><span className='text-primary'>Add </span> pokemon</h3>}
      <form onSubmit={handleSubmit} onReset={handleReset} className="row">
        <div className="col-12 mb-3">
          <label htmlFor="name" className="form-label">
            Pokemon name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            onChange={handleChange}
            value={form.name}
            className="form-control"
          />
        </div>
        <div className="col-12 mb-3">
          <label htmlFor="type" className="form-label">
            Pokemon type
          </label>
          <input
            id="type"
            type="text"
            name="type"
            placeholder="Type"
            onChange={handleChange}
            value={form.type}
            className="form-control"
          />
        </div>
        <div className="col-5">
          <div className="d-grid gap-2 mx-auto">
            <input
              type="submit"
              value={dataToEdit ? "Modify" : "Create"}
              className="btn btn-primary"
            />
          </div>
        </div>
        <div className="col-5 offset-2">
          <div className="d-grid">
            <input type="reset" value="Reset" className="btn btn-primary" />
          </div>
        </div>
      </form>
    </>
  );
};

export default CrudForm;
