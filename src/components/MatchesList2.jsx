import React from 'react';
import { connect } from 'react-redux';

const MatchesList: any = ({ matches2 }: any) => {
    
    const list = matches2.map((matches: any) => (
        <div key={matches.id}>
            <div>Mecz nr: {matches.id}</div>
            <div>Grupa {matches.group} : <strong>{matches.team1} - {matches.team2}</strong></div>
            <div>Wynik: {matches.score}</div>
            <br />
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

const mapStateToProps = (store: any) => ({
    matches2: store.matches2
})

export default connect(mapStateToProps)(MatchesList);