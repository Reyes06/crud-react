import React from "react";
import Message from "./Message";
import SongArtist from "./SongArtist";
import SongLyric from "./SongLyric";

export default function SongDetails({ dataToSearch, lyric, bio }) {
  console.log(dataToSearch);
  if (!lyric || !bio) return null;

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          {lyric.error || lyric.err || lyric.name === "AbortError" ? (
            <div className="mt-4">
              <Message
                message={
                  <span>
                    <strong>Error: </strong>Song doesn't exists (
                    <em>{dataToSearch.song}</em>)
                  </span>
                }
                alertType="danger"
              />
            </div>
          ) : (
            <SongLyric title={dataToSearch.song[0]} lyric={lyric.lyrics}/>
          )}
        </div>
        <div className="col-6">
          {bio.artists ? (
            <SongArtist artistInfo={bio.artists[0]}/>
          ) : (
            <div className="mt-4">
              <Message
                message={
                  <span>
                    <strong>Error: </strong>Artist doesn't exists (
                    <em>{dataToSearch.artist}</em>)
                  </span>
                }
                alertType="danger"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
