import { useEffect, useState } from 'react';
import { 
    Karhuryhmä, 
    h1, 
    h2, 
    h3,
    h4,
    h5,
    h6,
} from '../photos/photos';
import Moment from 'react-moment';
import moment from 'moment';


export default function Calendar(props) {
    const [hover, setHover] = useState(false);
    const [hatch, setHatch] = useState(null);
    const [currentTime, setCurrentTime] = useState(null);
    const [date, setCurrentDate] = useState(null);
    const [hatchImgArr, setHatchImgArr] = useState([h1, h2, h3, h4, h5, h6]);
    const [guess, setGuess] = useState('');
    const [hatchAmount, setHatchAmount] = useState(24);
    
    useEffect(() => {
        const time = moment().format('HH:mm:ss');
        const date = moment().date();
        setCurrentTime(time);
        setCurrentDate(date);
    });
    const hatchArr = [];
    const currMonth = moment().month() + 1;
    for (var i = 0; i < hatchAmount; i++) {
        hatchArr.push(<div>{i + 1}</div>);
    }
    function OpenModal(event, id) {
        const idToDate = id+1;
        if (idToDate <= date && currMonth == 12) {
            setHatch(hatchImgArr[id]);
            let modal = document.getElementById("displayImgModal");
            modal.style.display = 'block';    
        }
    }

    function CloseModal() {
        let modal = document.getElementById("displayImgModal");
        modal.style.display = 'none';    
    }
    return (
        <div className='hatchBody'>
            <img className='titleImg' src={Karhuryhmä} alt="hatch"/>
            <div className='displayImgBody' id="displayImgModal">
                <span onClick={CloseModal} className="close">&times;</span>
                <img className="displayImg" src={hatch}></img>
                <div id="caption">Upeeta meininkiä</div>
            </div>
            {hatchArr.map((item, i) => (
                <div className='hatchSize' onClick={(event) => OpenModal(event,i)} key={i}>
                    <div className={`${i+1 <= date ? "closedHatchAvailable" : "closedHatch"}`}>
                        <div>{item}</div>
                    </div>
                    <div className="hiddenHatch">
                        <img src={hatchImgArr[i]} className="hatchImage" alt="hatch"/>
                    </div>
                </div>
            ))}
            {/* <p>{guess}</p>
            <input value={guess} onChange={(event) => setGuess(event.target.value)} /> */}
        </div>
    );
}