import React, { useState } from 'react';


export default function SongList(props) {
    const [list, setList] = useState([]);
    const [songName, setSongName] = useState('');

    let editSong = null;
    function addSong() {
        const templist = list;
        if (songName) {
            templist.push({song: songName});
            setList(templist);
            setSongName('');
        }
    }

    function deleteSong(song, id) {
        const templist = [...list]; // make a separate copy of the array
        templist.splice(id, 1);
        setList(templist);
    }

    const List = () => {
        return list.map((song, key) => 
            <div key={key} className="song-row">
                {(song, key) => {
                    if(key == editSong) {
                        <input value={song.song}></input>;
                    } else {
                        <div>
                            {song.song}
                        </div>;
                    }
                }}
                <div>
                    {song.song}
                </div>
                <button onClick={() => editSong = key}>
                    Edit
                </button>
                <button onClick={() => deleteSong(song, key)}>
                    Delete
                </button>
            </div>);
    };

    return (
        <div>
            <div className='songListTable'>
                <List/>
            </div>
            <div className='searchBar'>
                <button className='defaultButton' onClick={addSong}>
                    Add
                </button>
                <input value={songName} onChange={(event) => setSongName(event.target.value)} />
            </div>
        </div>
    );
}