"use strict";
const isNode = (typeof process !== 'undefined' && process.versions && process.versions.node);
const lib = isNode ? '../embarkjs.node' : '../embarkjs';
const EmbarkJSNode = isNode && require('../embarkjs.node');
let EmbarkJSBrowser;
try {
EmbarkJSBrowser = require('../embarkjs').default;
} catch(e) {};
const EmbarkJS = isNode ? EmbarkJSNode : EmbarkJSBrowser;
let SafeMathJSONConfig = {"contract_name":"SafeMath","address":"0x1996C0d8f31BCBB4D5314B4892Dee55C3Ce047ed","code":"604c602c600b82828239805160001a60731460008114601c57601e565bfe5b5030600052607381538281f30073000000000000000000000000000000000000000030146080604052600080fd00a165627a7a7230582097ae25cdab1716a70a96a45b0a1f5667e425aa5f81bbeb237a8cda7ec3fb5f090029","runtime_bytecode":"73000000000000000000000000000000000000000030146080604052600080fd00a165627a7a7230582097ae25cdab1716a70a96a45b0a1f5667e425aa5f81bbeb237a8cda7ec3fb5f090029","real_runtime_bytecode":"73000000000000000000000000000000000000000030146080604052600080fd00a165627a7a72305820","swarm_hash":"97ae25cdab1716a70a96a45b0a1f5667e425aa5f81bbeb237a8cda7ec3fb5f09","gas_estimates":{"creation":{"codeDepositCost":"15200","executionCost":"116","totalCost":"15316"},"internal":{"add(uint256,uint256)":"infinite","div(uint256,uint256)":"infinite","mul(uint256,uint256)":"infinite","sub(uint256,uint256)":"infinite"}},"function_hashes":{},"abi":[]};
let SafeMath = new EmbarkJS.Blockchain.Contract(SafeMathJSONConfig);
module.exports = SafeMath;