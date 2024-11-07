import { useEffect, useState } from 'react';
import { 
    Karhuryhmä, 
    h1, 
    h2, 
    h3,
    h4,
    h5,
    h6,
    h7,
    h8,
    h9,
    h10,
    h11,
    h12,
    h13,
    h14,
    h15,
    h16,
    h17,
    h18,
    h19,
    h20,
    h21,
    h22,
    h23,
    h24,
} from '../photos/photos';
import moment from 'moment';
import Moment from 'react-moment';


export default function Calendar() {
    const [hatch, setHatch] = useState(null);
    const [currentTime, setCurrentTime] = useState(null);
    const [date, setCurrentDate] = useState(null);
    const [hatchImgArr, setHatchImgArr] = useState([h1, h2, h3, h4, h5, h6, h7, h8, h9, h10, h11, h12, h13, h14, h15, h16, h17, h18, h19, h20, h21, h22, h23, h24]);

    useEffect(() => {
        const date = moment().date();
        setCurrentDate(date);
        if (!currentTime) {
            setCurrentTime(moment());
        }
    });
    
    let header = document.getElementById("header");
    if (header) {
        header.style.background = `linear-gradient(90deg, rgb(${255-date*10}, ${255-date*10}, ${(date*2)*10}) 0%, rgb(${date*10}, ${255-date*10}, ${255-date*10}) 100%)`;
    }
    const currMonth = moment().month() + 1;
    const hatchArr = [2, 13, 21, 7, 8, 1, 3, 23, 14, 4, 19, 17, 5, 22, 10, 6, 20, 18, 15, 24, 16, 12, 11, 9];
    
    function OpenModal(item) {
        const idToDate = item;
        if (idToDate <= date && currMonth == 12) {
            setHatch(hatchImgArr[item-1]);
            let modal = document.getElementById("displayImgModal");
            modal.style.display = 'block';    
        }
    }

    const nextHatchOpens = moment(`${moment().year()}/${currMonth}/${date+1}`);

    // const timer = moment.duration(nextHatchOpens.diff(currentTime));
    const NextHatchOpens = () => {
        if ((date >= 24 && currMonth == 12) || currMonth != 12) {
            return (<div>Ei muuten aukea, mutta upeeta Joulua ja onnellista uutta vuotta ja upeeta meininkiä ja halvalla!!!</div>);
        }
        return (<Moment date={nextHatchOpens}
            duration={currentTime}
        />);
        // return (<div>{`${timer._data.hours}:${timer._data.minutes}:${timer._data.seconds}`}</div>);
    };
    function CloseModal() {
        let modal = document.getElementById("displayImgModal");
        modal.style.display = 'none';
    }
    const HiddenImage = (item) => {
        if (item.item <= date) {
            return (<img src={hatchImgArr[item.item-1]} className="hatch-image" alt="hatch"/>);
        }
        return (null);
    };
    return (
        <div className='hatch-body'>
            <img className='title-img' src={Karhuryhmä} alt="hatch"/>
            <div className="time-until-next-hatch">
                <div>Aikaa uuden luukun aukeamiseen:</div>
                <NextHatchOpens/>
            </div>
            <div className='display-img-body' id="displayImgModal" onClick={CloseModal}>
                <span onClick={CloseModal} className="close">&times;</span>
                <img className="display-img" src={hatch}></img>
                <div id="caption">Upeeta meininkiä</div>
            </div>
            <div className='calendar-layout'>

                {hatchArr.map((item) => (
                    <div className='hatch-size' onClick={() => OpenModal(item)} key={item}>
                        <div className={`${item <= date ? "closed-hatch-available" : "closed-hatch"}`}>
                            <div className={`${item <= date ? "hatch-number" : ""}`}>{item}</div>
                        </div>
                        <div className="hidden-hatch">
                            <HiddenImage item={item}/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}