import React, { useState, useEffect } from "react";
import SongDetails from "./SongDetails";
import SongForm from "./SongForm";
import { helpHttp } from "../helpers/helpHttp";

const api = helpHttp();

export default function SongSearch() {
  const [dataToSearch, setDataToSearch] = useState(null);
  const [lyric, setLyric] = useState(null);
  const [bio, setBio] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = (dataToSearch) => {
    setDataToSearch(dataToSearch);
  };

  useEffect(() => {
    if (!dataToSearch) return;

    const fetchData = async () => {
      const { artist, song } = dataToSearch;
      const artistEndpoint = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;
      const songEndpoint = `https://api.lyrics.ovh/v1/${artist}/${song}`;

      setLoading(true);
      const [artistResponse, songResponse] = await Promise.all([
        api.get(artistEndpoint).catch((e) => e),
        api.get(songEndpoint).catch((e) => e),
      ]);

      setBio(artistResponse);
      setLyric(songResponse);

      setLoading(false);
    };
    fetchData();
  }, [dataToSearch]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h2 className="text-center">Song search</h2>
        </div>

        <div className="col">
          <SongForm handleSearch={handleSearch} loading={loading} />
        </div>
        {dataToSearch && !loading && (
          <div className="col-12">
            <SongDetails dataToSearch={dataToSearch} lyric={lyric} bio={bio} />
          </div>
        )}
      </div>
    </div>
  );
}
