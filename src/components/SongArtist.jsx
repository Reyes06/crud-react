import React from "react";

export default function SongArtist({ artistInfo }) {
  return <section>
      <h2>{artistInfo.strArtist}</h2>
      <img src={artistInfo.strArtistThumb} alt=''/>
      <p>{artistInfo.intBornYear} - {artistInfo.intDiedyear || 'Present'}</p>
      <p>{artistInfo.strCountry}</p>
      <p>{artistInfo.strGenre} - {artistInfo.strStyle}</p>
      <a href={'http:// '+artistInfo.strWebSite} target='_blank' rel='noreferrer'>Official web site</a>
      <p style={ {whiteSpace: 'pre-wrap'}}>{artistInfo.strBiographyEN}</p>
  </section>;
}

/*

            
            
            
            
            
            
            */
