import {
    AbiItem
} from 'web3-utils'

export const AVO_APPROVE_STAGING_A: AbiItem[] = [{
    "anonymous": false,
    "inputs": [{
        "indexed": false,
        "internalType": "address[]",
        "name": "tokenAddresses",
        "type": "address[]"
    }, {
        "indexed": false,
        "internalType": "uint256[]",
        "name": "amounts",
        "type": "uint256[]"
    }],
    "name": "LogApproveTokens",
    "type": "event"
}, {
    "inputs": [],
    "name": "AVO_FACTORY",
    "outputs": [{
        "internalType": "contract IAvoFactory",
        "name": "",
        "type": "address"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address[]",
        "name": "tokens",
        "type": "address[]"
    }, {
        "internalType": "uint256[]",
        "name": "amounts",
        "type": "uint256[]"
    }],
    "name": "approveTokens",
    "outputs": [{
        "internalType": "string",
        "name": "_eventName",
        "type": "string"
    }, {
        "internalType": "bytes",
        "name": "_eventParam",
        "type": "bytes"
    }],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [],
    "name": "name",
    "outputs": [{
        "internalType": "string",
        "name": "",
        "type": "string"
    }],
    "stateMutability": "view",
    "type": "function"
}]