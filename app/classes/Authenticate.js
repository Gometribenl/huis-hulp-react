import Authentication from "./Authentication";
import store from "../store/store";
import {Actions} from 'react-native-router-flux';

export default class Authenticate extends Authentication {
     static async login(token, user_id) {
        await super.populateUserReducer(token, user_id);
        await super.requestPersonalChores(token, user_id);
        await super.populateChoresReducer(token);
        await super.populateChatReducer(token);
        Actions.home();
    }
}
