import { deleteCookie } from "../utils/common";

export const signOut = () => {
    try {
        deleteCookie("ud");
        return true
    } catch (e) {
        console.log(e);
        return false
    }
}
