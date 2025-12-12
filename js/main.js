import reddcoin from "./services/reddcoin"
import storage from "./services/storage"


/*
    Checking if the user has already 
    provided an address so we can keep
    an eye on it.
*/
const public_key = storage.getPublicKey()
if (!public_key){
    window.location.href = "/"
}
