/*
    All functions that communicate with the API are declared here
    there are no business rules, just pure REST communication.
*/

/**
 * Retrieve the data from the provided address.
 * @param {{ address: string }} params - Object with the address.
 * @returns {Promise<{
 *  addrStr: string, 
 *  balance: number, 
 *  balanceSat: number
 *  totalReceived: number,
 *  totalReceivedSat: number,
 *  totalSent: number,
 *  totalSentSat: number,
 *  unconfirmedBalance: number,
 *  unconfirmedBalanceSat: number,
 *  unconfirmedTxApperances: number,
 *  txApperances: number,
 *  transactions: string[]
 * }>} Full address details
*/
async function fetchAddr({ address }) {
    // Checking the data from the provided address
    const response = await fetch(`https://live.reddcoin.com/api/addr/${address}`)
    
    // Validating the response
    if (!response.ok){
        throw Error('We were unable to retrieve the data for the provided address.')
    }
    return response.json()
}

export default reddcoin = {fetchAddr};