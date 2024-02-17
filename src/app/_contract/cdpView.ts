
export const cdpViewAbi = [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint8",
                "name": "version",
                "type": "uint8"
            }
        ],
        "name": "Initialized",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "ethCDP",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getCDPInfo",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "address",
                        "name": "cdpAddress",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "collateralToken",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "debtToken",
                        "type": "address"
                    },
                    {
                        "internalType": "string",
                        "name": "collateralSymbol",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "debtSymbol",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "collateralAmount",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "debtAmount",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "collateralPrice",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "debtPrice",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "feeRatio",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "globalLTV",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "globalHealthFactor",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct CDPView.CDPInfo[]",
                "name": "",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "getUserInfo",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "address",
                        "name": "cdpAddress",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "id",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bool",
                        "name": "isSafe",
                        "type": "bool"
                    },
                    {
                        "internalType": "uint256",
                        "name": "currentLTV",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "healthFactor",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "collateral",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "debt",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "fee",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "latestUpdate",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct CDPView.UserInfo[]",
                "name": "",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "initialize",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "nsnETH",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "nsnUSDC",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "snETH",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "snUSDC",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "usdc",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "usdcCDP",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "weth",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
]