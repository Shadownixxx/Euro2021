import React from 'react';
import { connect } from 'react-redux';

import Poland from './flags/poland.png';
import England from './flags/england.png';
import Czech from './flags/.png';
import Austria from './flags/austria.png';
import Belgium from './flags/belgium.png';
import Croatia from './flags/croatia.png';
import Denmark from './flags/denmark.png';
import Finland from './flags/finland.png';
import France from './flags/france.png';
import Germany from './flags/germany.png';
import Hungary from './flags/hungary.png';
import Italy from './flags/italy.png';
import Macedonia from './flags/macedonia.png';
import Netherlands from './flags/netherlands.png';
import Portugal from './flags/portugal.png';
import Russia from './flags/russia.png';
import Scotland from './flags/scotland.png';
import Slovakia from './flags/slovakia.png';
import Spain from './flags/spain.png';
import Sweden from './flags/sweden.png';
import Switzerland from './flags/switzerland.png';
import Turkey from './flags/turkey.png';
import Ukraine from './flags/ukraine.png';
import Wales from './flags/wales.png';


const Teams: any = ({ countries }: any) => {
    const list = countries.map((country: any) => (
        <span>
            <span>{country}</span>
            <img src={Poland} alt={country} />
        </span>
    ));

    return (
        <div>
            <h2>Lista uczestinków:</h2>
            {list}
        </div>
    )
}
// < ul >
//     {countries.map((item: any) => <li> {item}</li>)}
// </ul >

const mapStateToProps = (store: any) => ({
    countries: store.countries
})

export default connect(mapStateToProps)(Teams);