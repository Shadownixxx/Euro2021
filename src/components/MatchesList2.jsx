import React from 'react';
import { useSelector } from 'react-redux';

const MatchesList2 = () => {

    const matchList = useSelector(store => store.matches2)

    const list = matchList.map((matches) => (
        <div key={matches.id}>
            <div>Mecz nr: {matches.id}</div>
            <div>Grupa {matches.group} : <strong>{matches.team1} - {matches.team2}</strong></div>
            <div>Wynik: {matches.score}</div>
            <br />
            <div>Kurs:</div>
            <div>Obstaw wynik!!</div>
            <input type="text" /> <button>Zatwierdź zakład</button>
            <br />
            <br />
        </div>
    ));

    return (
        <ul>
            <h2>Lista meczów:</h2>
            <br />
            <h3>Kolejka 2</h3>
            <br />
            {list}
        </ul>
    )
}

export default MatchesList2;