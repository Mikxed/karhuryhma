import React, { useState } from 'react';


export default function SongList(props) {
    const [list, setList] = useState([]);
    const [songName, setSongName] = useState('');

    function addSong() {
        const templist = list;
        if (songName) {
            templist.push(songName);
            console.log(templist);
            setList(templist);
            setSongName('');
        }
    }

    const List = () => {
        return list.map((song, key) => <div key={key}>{song}</div>);
    };

    return (
        <div className='songList'>
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