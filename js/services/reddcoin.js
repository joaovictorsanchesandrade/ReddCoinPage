/*
    All functions that communicate with the API are declared here
    there are no business rules, just pure REST communication.

    Note: The documentation is in English because I chose a
    language that everyone understands, but that's more of a native Brazilian language.
*/

/**
 * Retrieve the data from the provided address.
 * @param {{ address: string }} params - Object with the address.
 * @returns {Promise<{
 * addrStr: string, 
 * balance: number, 
 * balanceSat: number
 * totalReceived: number,
 * totalReceivedSat: number,
 * totalSent: number,
 * totalSentSat: number,
 * unconfirmedBalance: number,
 * unconfirmedBalanceSat: number,
 * unconfirmedTxApperances: number,
 * txApperances: number,
 * transactions: string[]
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

/**
 * Search for UTXOs for multiple addresses.
 * @param {{addresses: string[]}} params - List of public addresses
 * @returns {Promise<{
 * address: string,
 * txid: string,
 * vout: number,
 * ts: number,
 * scriptPubKey: string,
 * amount: number,
 * confirmations: number,
 * confirmationsFromCache: boolean
 * }[]>} All UXTOs from the provided addresses
 */
async function fetchUxtos({ addresses }) {
    // Consulting the UXTOs of the addresses
    const response = await fetch(`https://live.reddcoin.com/api/addrs/${addresses.join(',')}/utxo`)

    // Validating the response
    if (!response.ok){
        throw Error('It was not possible to obtain the UXTOs for these wallets.')
    }
    return response.json()
}

export default {fetchAddr, fetchUxtos};