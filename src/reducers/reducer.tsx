// import {ADD} from '../actions/actions';

const countryList = ['Poland','Germany', 'Russia', 'Belgium', 'France', 'Italy', 'Portugal', 'Spain', 'Sweden', 'England', 'Switzerland',
'Turkey', 'Denmark', 'Finland', 'Netherlands', 'Austria', 'Ukraine', 'Macedonia', 'Croatia', 'Czech', 'Scotland', 'Slovakia', 'Hungary'];

export const appReducer = (state = countryList, action: any) => {
    switch (action.type) {
        // case ADD:
        //     return [...state, action.payload]
        default:
            return state;
    }
}


//// KOLEJKA 1

const matches = [
     { id:1,
        team1: 'Italy',
        team2: 'Turkey',
        score:'3:0',
        group: 'A'
    },
    { id:2,
        team1: 'Wales',
        team2: 'Switzerland',
        score:'1:1',
        group: 'A',
    },
    { id:3,
        team1: 'Denmark',
        team2: 'Finland',
        score:'0:1',
        group: 'B',
    },
    { id:4,
        team1: 'Belgium',
        team2: 'Russia',
        score:'3:0',
        group: 'B',
    },
    { id:5,
        team1: 'Austria',
        team2: 'Macedonia',
        score:'3:1',
        group: 'C',
    },
    { id:6,
        team1: 'Netherland',
        team2: 'Ukraine',
        score:'3:2',
        group: 'C',
    },
    { id:7,
        team1: 'England',
        team2: 'Croatia',
        score:'1:0',
        group: 'D',
    },
    { id:8,
        team1: 'Scotland',
        team2: 'Czech',
        score:'0:2',
        group: 'D',
    },
    { id:9,
        team1: 'Poland',
        team2: 'Slovakia',
        score:'1:2',
        group: 'E',
    },
    { id:10,
        team1: 'Spain',
        team2: 'Sweden',
        score:'0:0',
        group: 'E',
    },
    { id:11,
        team1: 'Hungary',
        team2: 'Portugal',
        score:'0:3',
        group: 'F',
    },
    { id:12,
        team1: 'France',
        team2: 'Germany',
        score:'1:0',
        group: 'F',
    },
]


export const matchesReducer = (state = matches, action: any) => {
    switch (action.type) {
        // case ADD:
        //     return [...state, action.payload]
        default:
            return state;
    }
}

//////    KOLEJKA 2

const matches2 = [
    { id:1,
       team1: 'Wales',
       team2: 'Turkey',
       score:'-',
       group: 'A'
   },
   { id:2,
       team1: 'Italy',
       team2: 'Switzerland',
       score:'-',
       group: 'A',
   },
   { id:3,
       team1: 'Russia',
       team2: 'Finland',
       score:'-',
       group: 'B',
   },
   { id:4,
       team1: 'Belgium',
       team2: 'Denmark',
       score:'-',
       group: 'B',
   },
   { id:5,
       team1: 'Ukraine',
       team2: 'Macedonia',
       score:'-',
       group: 'C',
   },
   { id:6,
       team1: 'Netherland',
       team2: 'Austria',
       score:'-',
       group: 'C',
   },
   { id:7,
       team1: 'Czech',
       team2: 'Croatia',
       score:'-',
       group: 'D',
   },
   { id:8,
       team1: 'Scotland',
       team2: 'England',
       score:'-',
       group: 'D',
   },
   { id:9,
       team1: 'Poland',
       team2: 'Spain',
       score:'-',
       group: 'E',
   },
   { id:10,
       team1: 'Slovakia',
       team2: 'Sweden',
       score:'-',
       group: 'E',
   },
   { id:11,
       team1: 'Germany',
       team2: 'Portugal',
       score:'-',
       group: 'F',
   },
   { id:12,
       team1: 'France',
       team2: 'Hungary',
       score:'-',
       group: 'F',
   },
]

export const matchesReducer2 = (state = matches2, action: any) => {
    switch (action.type) {
        // case ADD:
        //     return [...state, action.payload]
        default:
            return state;
    }
}