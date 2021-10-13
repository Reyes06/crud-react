import React, { useState } from "react";
import Loader from "./Loader/Loader";

const initialForm = {
  artist: "",
  song: "",
};

export default function SongForm({ handleSearch, loading }) {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: [e.target.value] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.song || !form.artist) {
      alert("Incomplete data");
      return;
    }
    handleSearch(form);
    setForm(initialForm);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h2>Form</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="text"
                name="artist"
                placeholder="Artist name"
                className="form-control"
                onChange={handleChange}
                value={form.artist}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                name="song"
                placeholder="Song name"
                className="form-control"
                onChange={handleChange}
                value={form.song}
              />
            </div>
            <div className="d-grid gap-2 mx-auto">
              <input type="submit" value="Send" className="btn btn-primary" />
            </div>
          </form>
        </div>
        {loading && (
          <div className="col-4 offset-4">
            <Loader />
          </div>
        )}
      </div>
    </div>
  );
}
