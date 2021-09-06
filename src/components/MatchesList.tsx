import React from 'react';
import { useSelector } from 'react-redux';

const MatchesList = () => {
    
    const matchList = useSelector((store : any) => store.matches );
    
    const list = matchList.map((matches: any) => (
        <div key={matches.id}>
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
            <h3>Kolejka 1</h3>
            <br />
            {list}
        </ul>
    )
}

export default MatchesList;


// import React from 'react';
// import { connect } from 'react-redux';

// const MatchesList: any = ({ matches }: any) => {
    
//     const list = matches.map((matches: any) => (
//         <div key={matches.id}>
//             <div>Mecz nr: {matches.id}</div>
//             <div>Grupa {matches.group} : <strong>{matches.team1} - {matches.team2}</strong></div>
//             <div>Wynik: {matches.score}</div>
//             <br />
//         </div>
//     ));

//     return (
//         <ul>
//             <h2>Lista meczów:</h2>
//             <br />
//             <h3>Kolejka 1</h3>
//             <br />
//             {list}
//         </ul>
//     )
// }

// const mapStateToProps = (store: any) => ({
//     matches: store.matches
// })

// export default connect(mapStateToProps)(MatchesList);

