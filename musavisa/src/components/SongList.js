import React, { useState } from 'react';


export default function SongList(props) {
    const [list, setList] = useState([]);
    const [songName, setSongName] = useState('');

    function addSong() {
        const templist = list
        if (songName) {
            templist.push(songName)
            console.log(templist)
            setList(templist)
            setSongName('')
        }
    }

    // function songList() {
    //     if (list.length > 0) {      
    //         return list.map((song, index) => (
    //             <Song key={index} song={song} />
    //         ));
    //     }
    // }

    // const Song = ({song, key}) => {
    //     return ( 
    //         <article key={key}>
    //             <a href={song.artist}>{song.name}</a>
    //         </article>
    //     );
    // };
    
    return (
    <div>
        <p>{list}</p>

        <button onClick={addSong}>
            Click me
        </button>
        <input value={songName} onChange={(event) => setSongName(event.target.value)}/>
    </div>
    )
}