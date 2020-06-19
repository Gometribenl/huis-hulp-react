import store from "../store/store";
import axios from "axios";
import {Parameters} from "../../global";
import {setUserData, updateChores, updatePersonalChores} from "../actions";

export default class Authentication {
    static populateUserReducer(token, user_id) {
        axios.get(Parameters.apiDomain + '/user/user/' + user_id, {
            headers: {
                'Authorization': 'Bearer ' + token,
            }
        }).then((response) => {
            store.dispatch(setUserData(response.data.data[0]));
        }).catch((error) => {
            console.error(error)
        })
    }

    static populateChoresReducer(token) {
        axios.get(Parameters.apiDomain + '/chores/chores', {
            headers: {
                'Authorization': 'Bearer ' + token,
            }
        }).then((response) => {
            store.dispatch(updateChores(response.data.data));
        }).catch((error) => {
            console.log(error);
        });
    }

    static requestPersonalChores(token, user_id) {
        axios.get(Parameters.apiDomain + '/chores/chores/' + user_id, {
            headers: {
                'Authorization': 'Bearer ' + token,
            }
        }).then((response) => {
            store.dispatch(updatePersonalChores(response.data.data));
        }).catch((error) => {
            console.log(error);
        });
    }
}