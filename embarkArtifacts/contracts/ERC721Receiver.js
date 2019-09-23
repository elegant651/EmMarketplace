"use strict";
const isNode = (typeof process !== 'undefined' && process.versions && process.versions.node);
const lib = isNode ? '../embarkjs.node' : '../embarkjs';
const EmbarkJSNode = isNode && require('../embarkjs.node');
let EmbarkJSBrowser;
try {
EmbarkJSBrowser = require('../embarkjs').default;
} catch(e) {};
const EmbarkJS = isNode ? EmbarkJSNode : EmbarkJSBrowser;
let ERC721ReceiverJSONConfig = {"contract_name":"ERC721Receiver","code":"","runtime_bytecode":"","real_runtime_bytecode":"","swarm_hash":"","gas_estimates":null,"function_hashes":{"onERC721Received(address,address,uint256,bytes)":"150b7a02"},"abi":[{"constant":false,"inputs":[{"name":"_operator","type":"address"},{"name":"_from","type":"address"},{"name":"_tokenId","type":"uint256"},{"name":"_data","type":"bytes"}],"name":"onERC721Received","outputs":[{"name":"","type":"bytes4"}],"payable":false,"stateMutability":"nonpayable","type":"function"}]};
let ERC721Receiver = new EmbarkJS.Blockchain.Contract(ERC721ReceiverJSONConfig);
module.exports = ERC721Receiver;