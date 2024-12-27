import axios from 'axios';
import { populateMatches, store, updateMatch} from '../redux/store/store';
import moment from 'moment';

const url = 'https://www.dystir.fo';

export function getMatches1() {
  axios.get(`${url}/api/matches/matches`)
      .then(res => {
          const data = res.data;
          const array = Object.keys(data).map(function(k) {
            return data[k];
          });
          const todayMatches = array.filter(function(match) {
            if(moment.utc(match.time).date() == moment().add(-3, 'days').date()) {
              return match;
            }
          });
          store.dispatch(populateMatches(todayMatches));
        }
      )
      .catch(error => console.error(error));
}

// export function getResults() {
//     axios.get(`${url}/api/matches/results`)
//         .then(res => {
//             const data = res.data;
//             const array = Object.keys(data).map(function(k) {
//               return data[k];
//             });
//             store.dispatch(populateResults(array));
//           }
//         )
//         .catch(error => console.error(error));
// }

export function getMatchDetails(matchID: any) {
  axios.get(`${url}/api/matchdetails/${matchID}`)
      .then(res => {
          store.dispatch(updateMatch(res.data));
        }
      )
      .catch(error => console.error(error));
}
