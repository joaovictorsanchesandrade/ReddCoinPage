/*
    All functions that communicate with the 
    storage are stored and declared here 
    there are no business rules here.
*/


function logout() {
    // Deleting all data from storage.
    localStorage.clear()
}


export default storage = { logout };