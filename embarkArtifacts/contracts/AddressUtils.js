"use strict";
const isNode = (typeof process !== 'undefined' && process.versions && process.versions.node);
const lib = isNode ? '../embarkjs.node' : '../embarkjs';
const EmbarkJSNode = isNode && require('../embarkjs.node');
let EmbarkJSBrowser;
try {
EmbarkJSBrowser = require('../embarkjs').default;
} catch(e) {};
const EmbarkJS = isNode ? EmbarkJSNode : EmbarkJSBrowser;
let AddressUtilsJSONConfig = {"contract_name":"AddressUtils","address":"0x9d8253615A4064d053845164bbC2F0F1F6E2fC27","code":"604c602c600b82828239805160001a60731460008114601c57601e565bfe5b5030600052607381538281f30073000000000000000000000000000000000000000030146080604052600080fd00a165627a7a72305820469f3a9a479086d6dceb32fab02d548ab2f0e60472df0846c96ad1e4fd8cdf740029","runtime_bytecode":"73000000000000000000000000000000000000000030146080604052600080fd00a165627a7a72305820469f3a9a479086d6dceb32fab02d548ab2f0e60472df0846c96ad1e4fd8cdf740029","real_runtime_bytecode":"73000000000000000000000000000000000000000030146080604052600080fd00a165627a7a72305820","swarm_hash":"469f3a9a479086d6dceb32fab02d548ab2f0e60472df0846c96ad1e4fd8cdf74","gas_estimates":{"creation":{"codeDepositCost":"15200","executionCost":"116","totalCost":"15316"},"internal":{"isContract(address)":"infinite"}},"function_hashes":{},"abi":[]};
let AddressUtils = new EmbarkJS.Blockchain.Contract(AddressUtilsJSONConfig);
module.exports = AddressUtils;