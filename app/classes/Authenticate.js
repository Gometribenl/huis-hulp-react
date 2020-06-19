import Authentication from "./Authentication";
import store from "../store/store";

export default class Authenticate extends Authentication {
    static login(token, user_id) {
        this.populateUserReducer(token, user_id);
        this.requestPersonalChores(token, user_id);
        this.populateChoresReducer(token);
    }
}