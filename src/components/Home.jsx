import {Link, useParams} from "react-router-dom";
import topSeparator from "../img/top-separator.svg";
import bottomSeparator from "../img/bottom-separator.svg";
import date from "../img/date.png";
import {useEffect, useState} from "react";
import guestList from "../list.js";

const Home = () => {
    const {id} = useParams();
    const [guest, setGuest] = useState(null);

    useEffect(() => {
        const currentGuest = guestList.find((guest) => guest.id === id);
        setGuest(currentGuest);
    }, [id]);

    return (
        <div className="home">
            <img src={topSeparator} alt=""/>
            <p className="dear">{guest?.greeting}</p>
            <p className="name">{guest?.name}</p>
            <img src={bottomSeparator} alt=""/>
            <div className="elips">
                <p className="text">
                    з радістю запрошуємо {guest?.plural ? "вас" : "тебе"} на одну з найважливіших подій у нашому житті –
                    християнську промову з
                    приводу нашого одруження.
                </p>
            </div>
            <div className="elips">
                <p className="text">
                    Дуже прикро, що така радісна подія відбувається в такий похмурий час, але ми будемо дуже вдячні якщо
                    {guest?.plural ? " ви " : " ти "}
                    підтримає{guest?.plural ? "те" : "ш"} нас своєю присутністю.
                </p>
            </div>
            <img src={bottomSeparator} alt=""/>
            <br/>
            <img width={118} src={date} alt=""/>
            <br/>
            <div className="cta">
                <a href="#">посилання на конференцію</a>
            </div>
            <small>Посилання стане активним за годину до промови!</small>
            <br/>
            <img src={bottomSeparator} alt=""/>
            <br/>
            <Link to={`/${id}/info`}>Більше інформації тут</Link>
        </div>
    );
};

export default Home;