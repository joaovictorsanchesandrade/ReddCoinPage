/*
    All functions that communicate with the 
    storage are stored and declared here 
    there are no business rules here.
*/


function getPublicKey(){
    // Retorna a chave publica
    return localStorage.getItem('public_key_redd')
}

function setPublicKey() {
    // Altera a chave publica
    return localStorage.setItem('public_key_redd')
}

function logout() {
    // Deleting all data from storage.
    localStorage.clear()
}


export default storage = { logout, getPublicKey, setPublicKey };