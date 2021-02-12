import session from "@/services/request/session.js";

export default {
    getAuthorizationHeader() {
        let user = session.getSession();
        return user ? { 'Authorization': user.auth } : {}
    }
}