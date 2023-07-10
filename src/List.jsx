import React from "react";
import Song from './Song';

const List = () => {
  const albums = [
    {
      title: "House of Balloons",
      releaseDate: "March 21, 2011",
      cover: "https://upload.wikimedia.org/wikipedia/en/8/8a/The_Weeknd_-_House_of_Balloons.png",
      songs: ["High for This", "What You Need", "House of Balloons / Glass Table Girls", /* ... */]
    },
    {
      title: "Beauty Behind the Madness",
      releaseDate: "August 28, 2015",
      cover: "https://upload.wikimedia.org/wikipedia/en/thumb/b/bd/The_Weeknd_-_Beauty_Behind_the_Madness.png/220px-The_Weeknd_-_Beauty_Behind_the_Madness.png",
      songs: ["Real Life", "Losers", "Tell Your Friends", /* ... */]
    },
    // Add more albums here...
  ];

  return (
    <>
        {albums.map((album) => (
            <div className="album" key={album.title}>
                <img src={album.cover} alt={`${album.title} Cover`} />
                <h2>{album.title}</h2>
                <ul>
                    {album.songs.map((song, index) => (
                        <Song name={song} key={index} />
                    ))}
                </ul>
            </div>
        ))}
    </>
);
}

export default List;

