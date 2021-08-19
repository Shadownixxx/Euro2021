import React from 'react';
import { connect } from 'react-redux';

const MatchesList: any = ({ matches }: any) => {
    const list = matches.map((matches: any) => (
        <div>
            <div>Mecz nr: {matches.id}</div>
            <div>Grupa {matches.group} : <strong>{matches.team1} - {matches.team2}</strong></div>
            <div>Wynik: {matches.score}</div>
            <br />
        </div>
    ));

    return (
        <ul>
            <h2>Lista meczów:</h2>
            <br />
            {list}
        </ul>
    )
}

const mapStateToProps = (store: any) => ({
    matches: store.matches
})

export default connect(mapStateToProps)(MatchesList);