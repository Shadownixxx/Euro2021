import React from 'react';
import { connect } from 'react-redux';

const Teams: any = ({ countries }: any) => {
    const list = countries.map((country: any) => (
        <span>
            <span>{country}</span>
            <img src={require(`./flags/${country.toLowerCase()}.png`).default} alt={country} />
            <br />
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