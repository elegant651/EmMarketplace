"use strict";
const isNode = (typeof process !== 'undefined' && process.versions && process.versions.node);
const lib = isNode ? '../embarkjs.node' : '../embarkjs';
const EmbarkJSNode = isNode && require('../embarkjs.node');
let EmbarkJSBrowser;
try {
EmbarkJSBrowser = require('../embarkjs').default;
} catch(e) {};
const EmbarkJS = isNode ? EmbarkJSNode : EmbarkJSBrowser;
let ERC721TokenJSONConfig = {"contract_name":"ERC721Token","address":"0x633AcC2180952418EE0460686a72f628151aF54E","code":"60806040523480156200001157600080fd5b506040516200116e3803806200116e83398101604052805160208201519082019101620000677f01ffc9a7000000000000000000000000000000000000000000000000000000006401000000006200016b810204565b6200009b7f80ac58cd000000000000000000000000000000000000000000000000000000006401000000006200016b810204565b620000cf7f4f558e79000000000000000000000000000000000000000000000000000000006401000000006200016b810204565b8151620000e4906005906020850190620001d8565b508051620000fa906006906020840190620001d8565b506200012f7f780e9d63000000000000000000000000000000000000000000000000000000006401000000006200016b810204565b620001637f5b5e139f000000000000000000000000000000000000000000000000000000006401000000006200016b810204565b50506200027d565b7fffffffff0000000000000000000000000000000000000000000000000000000080821614156200019b57600080fd5b7fffffffff00000000000000000000000000000000000000000000000000000000166000908152602081905260409020805460ff19166001179055565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200021b57805160ff19168380011785556200024b565b828001600101855582156200024b579182015b828111156200024b5782518255916020019190600101906200022e565b50620002599291506200025d565b5090565b6200027a91905b8082111562000259576000815560010162000264565b90565b610ee1806200028d6000396000f3006080604052600436106100fb5763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166301ffc9a7811461010057806306fdde0314610136578063081812fc146101c0578063095ea7b3146101f457806318160ddd1461021a57806319fa8f501461024157806323b872dd146102735780632f745c591461029d57806342842e0e146102c15780634f558e79146102eb5780634f6ccce7146103035780636352211e1461031b57806370a082311461033357806395d89b4114610354578063a22cb46514610369578063b88d4fde1461038f578063c87b56dd146103fe578063e985e9c514610416575b600080fd5b34801561010c57600080fd5b50610122600160e060020a03196004351661043d565b604080519115158252519081900360200190f35b34801561014257600080fd5b5061014b61045c565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561018557818101518382015260200161016d565b50505050905090810190601f1680156101b25780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156101cc57600080fd5b506101d86004356104f3565b60408051600160a060020a039092168252519081900360200190f35b34801561020057600080fd5b50610218600160a060020a036004351660243561050e565b005b34801561022657600080fd5b5061022f6105c4565b60408051918252519081900360200190f35b34801561024d57600080fd5b506102566105ca565b60408051600160e060020a03199092168252519081900360200190f35b34801561027f57600080fd5b50610218600160a060020a03600435811690602435166044356105ee565b3480156102a957600080fd5b5061022f600160a060020a0360043516602435610691565b3480156102cd57600080fd5b50610218600160a060020a03600435811690602435166044356106de565b3480156102f757600080fd5b506101226004356106ff565b34801561030f57600080fd5b5061022f60043561071c565b34801561032757600080fd5b506101d8600435610751565b34801561033f57600080fd5b5061022f600160a060020a036004351661077b565b34801561036057600080fd5b5061014b6107ae565b34801561037557600080fd5b50610218600160a060020a0360043516602435151561080f565b34801561039b57600080fd5b50604080516020601f60643560048181013592830184900484028501840190955281845261021894600160a060020a0381358116956024803590921695604435953695608494019181908401838280828437509497506108939650505050505050565b34801561040a57600080fd5b5061014b6004356108bb565b34801561042257600080fd5b50610122600160a060020a0360043581169060243516610970565b600160e060020a03191660009081526020819052604090205460ff1690565b60058054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156104e85780601f106104bd576101008083540402835291602001916104e8565b820191906000526020600020905b8154815290600101906020018083116104cb57829003601f168201915b505050505090505b90565b600090815260026020526040902054600160a060020a031690565b600061051982610751565b9050600160a060020a03838116908216141561053457600080fd5b33600160a060020a038216148061055057506105508133610970565b151561055b57600080fd5b600082815260026020526040808220805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0387811691821790925591518593918516917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591a4505050565b60095490565b7f01ffc9a70000000000000000000000000000000000000000000000000000000081565b6105f8338261099e565b151561060357600080fd5b600160a060020a038316151561061857600080fd5b600160a060020a038216151561062d57600080fd5b61063783826109fd565b6106418382610a6e565b61064b8282610b75565b8082600160a060020a031684600160a060020a03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b600061069c8361077b565b82106106a757600080fd5b600160a060020a03831660009081526007602052604090208054839081106106cb57fe5b9060005260206000200154905092915050565b6106fa8383836020604051908101604052806000815250610893565b505050565b600090815260016020526040902054600160a060020a0316151590565b60006107266105c4565b821061073157600080fd5b600980548390811061073f57fe5b90600052602060002001549050919050565b600081815260016020526040812054600160a060020a031680151561077557600080fd5b92915050565b6000600160a060020a038216151561079257600080fd5b50600160a060020a031660009081526003602052604090205490565b60068054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156104e85780601f106104bd576101008083540402835291602001916104e8565b600160a060020a03821633141561082557600080fd5b336000818152600460209081526040808320600160a060020a03871680855290835292819020805460ff1916861515908117909155815190815290519293927f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31929181900390910190a35050565b61089e8484846105ee565b6108aa84848484610bbe565b15156108b557600080fd5b50505050565b60606108c6826106ff565b15156108d157600080fd5b6000828152600b602090815260409182902080548351601f6002600019610100600186161502019093169290920491820184900484028101840190945280845290918301828280156109645780601f1061093957610100808354040283529160200191610964565b820191906000526020600020905b81548152906001019060200180831161094757829003601f168201915b50505050509050919050565b600160a060020a03918216600090815260046020908152604080832093909416825291909152205460ff1690565b6000806109aa83610751565b905080600160a060020a031684600160a060020a031614806109e5575083600160a060020a03166109da846104f3565b600160a060020a0316145b806109f557506109f58185610970565b949350505050565b81600160a060020a0316610a1082610751565b600160a060020a031614610a2357600080fd5b600081815260026020526040902054600160a060020a031615610a6a576000818152600260205260409020805473ffffffffffffffffffffffffffffffffffffffff191690555b5050565b6000806000610a7d8585610d2b565b600084815260086020908152604080832054600160a060020a0389168452600790925290912054909350610ab890600163ffffffff610dc116565b600160a060020a038616600090815260076020526040902080549193509083908110610ae057fe5b90600052602060002001549050806007600087600160a060020a0316600160a060020a0316815260200190815260200160002084815481101515610b2057fe5b6000918252602080832090910192909255600160a060020a0387168152600790915260409020805490610b57906000198301610e78565b50600093845260086020526040808520859055908452909220555050565b6000610b818383610dd3565b50600160a060020a039091166000908152600760209081526040808320805460018101825590845282842081018590559383526008909152902055565b600080610bd385600160a060020a0316610e63565b1515610be25760019150610d22565b6040517f150b7a020000000000000000000000000000000000000000000000000000000081523360048201818152600160a060020a03898116602485015260448401889052608060648501908152875160848601528751918a169463150b7a0294938c938b938b93909160a490910190602085019080838360005b83811015610c75578181015183820152602001610c5d565b50505050905090810190601f168015610ca25780820380516001836020036101000a031916815260200191505b5095505050505050602060405180830381600087803b158015610cc457600080fd5b505af1158015610cd8573d6000803e3d6000fd5b505050506040513d6020811015610cee57600080fd5b5051600160e060020a031981167f150b7a020000000000000000000000000000000000000000000000000000000014925090505b50949350505050565b81600160a060020a0316610d3e82610751565b600160a060020a031614610d5157600080fd5b600160a060020a038216600090815260036020526040902054610d7b90600163ffffffff610dc116565b600160a060020a03909216600090815260036020908152604080832094909455918152600190915220805473ffffffffffffffffffffffffffffffffffffffff19169055565b600082821115610dcd57fe5b50900390565b600081815260016020526040902054600160a060020a031615610df557600080fd5b6000818152600160208181526040808420805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0388169081179091558452600390915290912054610e4391610e6b565b600160a060020a0390921660009081526003602052604090209190915550565b6000903b1190565b8181018281101561077557fe5b8154818355818111156106fa576000838152602090206106fa9181019083016104f091905b80821115610eb15760008155600101610e9d565b50905600a165627a7a72305820fc8173295b1d877039c421980ab38f9e4edd212c1e378f050e453fcd895cb2430029","runtime_bytecode":"6080604052600436106100fb5763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166301ffc9a7811461010057806306fdde0314610136578063081812fc146101c0578063095ea7b3146101f457806318160ddd1461021a57806319fa8f501461024157806323b872dd146102735780632f745c591461029d57806342842e0e146102c15780634f558e79146102eb5780634f6ccce7146103035780636352211e1461031b57806370a082311461033357806395d89b4114610354578063a22cb46514610369578063b88d4fde1461038f578063c87b56dd146103fe578063e985e9c514610416575b600080fd5b34801561010c57600080fd5b50610122600160e060020a03196004351661043d565b604080519115158252519081900360200190f35b34801561014257600080fd5b5061014b61045c565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561018557818101518382015260200161016d565b50505050905090810190601f1680156101b25780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156101cc57600080fd5b506101d86004356104f3565b60408051600160a060020a039092168252519081900360200190f35b34801561020057600080fd5b50610218600160a060020a036004351660243561050e565b005b34801561022657600080fd5b5061022f6105c4565b60408051918252519081900360200190f35b34801561024d57600080fd5b506102566105ca565b60408051600160e060020a03199092168252519081900360200190f35b34801561027f57600080fd5b50610218600160a060020a03600435811690602435166044356105ee565b3480156102a957600080fd5b5061022f600160a060020a0360043516602435610691565b3480156102cd57600080fd5b50610218600160a060020a03600435811690602435166044356106de565b3480156102f757600080fd5b506101226004356106ff565b34801561030f57600080fd5b5061022f60043561071c565b34801561032757600080fd5b506101d8600435610751565b34801561033f57600080fd5b5061022f600160a060020a036004351661077b565b34801561036057600080fd5b5061014b6107ae565b34801561037557600080fd5b50610218600160a060020a0360043516602435151561080f565b34801561039b57600080fd5b50604080516020601f60643560048181013592830184900484028501840190955281845261021894600160a060020a0381358116956024803590921695604435953695608494019181908401838280828437509497506108939650505050505050565b34801561040a57600080fd5b5061014b6004356108bb565b34801561042257600080fd5b50610122600160a060020a0360043581169060243516610970565b600160e060020a03191660009081526020819052604090205460ff1690565b60058054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156104e85780601f106104bd576101008083540402835291602001916104e8565b820191906000526020600020905b8154815290600101906020018083116104cb57829003601f168201915b505050505090505b90565b600090815260026020526040902054600160a060020a031690565b600061051982610751565b9050600160a060020a03838116908216141561053457600080fd5b33600160a060020a038216148061055057506105508133610970565b151561055b57600080fd5b600082815260026020526040808220805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0387811691821790925591518593918516917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591a4505050565b60095490565b7f01ffc9a70000000000000000000000000000000000000000000000000000000081565b6105f8338261099e565b151561060357600080fd5b600160a060020a038316151561061857600080fd5b600160a060020a038216151561062d57600080fd5b61063783826109fd565b6106418382610a6e565b61064b8282610b75565b8082600160a060020a031684600160a060020a03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b600061069c8361077b565b82106106a757600080fd5b600160a060020a03831660009081526007602052604090208054839081106106cb57fe5b9060005260206000200154905092915050565b6106fa8383836020604051908101604052806000815250610893565b505050565b600090815260016020526040902054600160a060020a0316151590565b60006107266105c4565b821061073157600080fd5b600980548390811061073f57fe5b90600052602060002001549050919050565b600081815260016020526040812054600160a060020a031680151561077557600080fd5b92915050565b6000600160a060020a038216151561079257600080fd5b50600160a060020a031660009081526003602052604090205490565b60068054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156104e85780601f106104bd576101008083540402835291602001916104e8565b600160a060020a03821633141561082557600080fd5b336000818152600460209081526040808320600160a060020a03871680855290835292819020805460ff1916861515908117909155815190815290519293927f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31929181900390910190a35050565b61089e8484846105ee565b6108aa84848484610bbe565b15156108b557600080fd5b50505050565b60606108c6826106ff565b15156108d157600080fd5b6000828152600b602090815260409182902080548351601f6002600019610100600186161502019093169290920491820184900484028101840190945280845290918301828280156109645780601f1061093957610100808354040283529160200191610964565b820191906000526020600020905b81548152906001019060200180831161094757829003601f168201915b50505050509050919050565b600160a060020a03918216600090815260046020908152604080832093909416825291909152205460ff1690565b6000806109aa83610751565b905080600160a060020a031684600160a060020a031614806109e5575083600160a060020a03166109da846104f3565b600160a060020a0316145b806109f557506109f58185610970565b949350505050565b81600160a060020a0316610a1082610751565b600160a060020a031614610a2357600080fd5b600081815260026020526040902054600160a060020a031615610a6a576000818152600260205260409020805473ffffffffffffffffffffffffffffffffffffffff191690555b5050565b6000806000610a7d8585610d2b565b600084815260086020908152604080832054600160a060020a0389168452600790925290912054909350610ab890600163ffffffff610dc116565b600160a060020a038616600090815260076020526040902080549193509083908110610ae057fe5b90600052602060002001549050806007600087600160a060020a0316600160a060020a0316815260200190815260200160002084815481101515610b2057fe5b6000918252602080832090910192909255600160a060020a0387168152600790915260409020805490610b57906000198301610e78565b50600093845260086020526040808520859055908452909220555050565b6000610b818383610dd3565b50600160a060020a039091166000908152600760209081526040808320805460018101825590845282842081018590559383526008909152902055565b600080610bd385600160a060020a0316610e63565b1515610be25760019150610d22565b6040517f150b7a020000000000000000000000000000000000000000000000000000000081523360048201818152600160a060020a03898116602485015260448401889052608060648501908152875160848601528751918a169463150b7a0294938c938b938b93909160a490910190602085019080838360005b83811015610c75578181015183820152602001610c5d565b50505050905090810190601f168015610ca25780820380516001836020036101000a031916815260200191505b5095505050505050602060405180830381600087803b158015610cc457600080fd5b505af1158015610cd8573d6000803e3d6000fd5b505050506040513d6020811015610cee57600080fd5b5051600160e060020a031981167f150b7a020000000000000000000000000000000000000000000000000000000014925090505b50949350505050565b81600160a060020a0316610d3e82610751565b600160a060020a031614610d5157600080fd5b600160a060020a038216600090815260036020526040902054610d7b90600163ffffffff610dc116565b600160a060020a03909216600090815260036020908152604080832094909455918152600190915220805473ffffffffffffffffffffffffffffffffffffffff19169055565b600082821115610dcd57fe5b50900390565b600081815260016020526040902054600160a060020a031615610df557600080fd5b6000818152600160208181526040808420805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0388169081179091558452600390915290912054610e4391610e6b565b600160a060020a0390921660009081526003602052604090209190915550565b6000903b1190565b8181018281101561077557fe5b8154818355818111156106fa576000838152602090206106fa9181019083016104f091905b80821115610eb15760008155600101610e9d565b50905600a165627a7a72305820fc8173295b1d877039c421980ab38f9e4edd212c1e378f050e453fcd895cb2430029","real_runtime_bytecode":"6080604052600436106100fb5763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166301ffc9a7811461010057806306fdde0314610136578063081812fc146101c0578063095ea7b3146101f457806318160ddd1461021a57806319fa8f501461024157806323b872dd146102735780632f745c591461029d57806342842e0e146102c15780634f558e79146102eb5780634f6ccce7146103035780636352211e1461031b57806370a082311461033357806395d89b4114610354578063a22cb46514610369578063b88d4fde1461038f578063c87b56dd146103fe578063e985e9c514610416575b600080fd5b34801561010c57600080fd5b50610122600160e060020a03196004351661043d565b604080519115158252519081900360200190f35b34801561014257600080fd5b5061014b61045c565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561018557818101518382015260200161016d565b50505050905090810190601f1680156101b25780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156101cc57600080fd5b506101d86004356104f3565b60408051600160a060020a039092168252519081900360200190f35b34801561020057600080fd5b50610218600160a060020a036004351660243561050e565b005b34801561022657600080fd5b5061022f6105c4565b60408051918252519081900360200190f35b34801561024d57600080fd5b506102566105ca565b60408051600160e060020a03199092168252519081900360200190f35b34801561027f57600080fd5b50610218600160a060020a03600435811690602435166044356105ee565b3480156102a957600080fd5b5061022f600160a060020a0360043516602435610691565b3480156102cd57600080fd5b50610218600160a060020a03600435811690602435166044356106de565b3480156102f757600080fd5b506101226004356106ff565b34801561030f57600080fd5b5061022f60043561071c565b34801561032757600080fd5b506101d8600435610751565b34801561033f57600080fd5b5061022f600160a060020a036004351661077b565b34801561036057600080fd5b5061014b6107ae565b34801561037557600080fd5b50610218600160a060020a0360043516602435151561080f565b34801561039b57600080fd5b50604080516020601f60643560048181013592830184900484028501840190955281845261021894600160a060020a0381358116956024803590921695604435953695608494019181908401838280828437509497506108939650505050505050565b34801561040a57600080fd5b5061014b6004356108bb565b34801561042257600080fd5b50610122600160a060020a0360043581169060243516610970565b600160e060020a03191660009081526020819052604090205460ff1690565b60058054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156104e85780601f106104bd576101008083540402835291602001916104e8565b820191906000526020600020905b8154815290600101906020018083116104cb57829003601f168201915b505050505090505b90565b600090815260026020526040902054600160a060020a031690565b600061051982610751565b9050600160a060020a03838116908216141561053457600080fd5b33600160a060020a038216148061055057506105508133610970565b151561055b57600080fd5b600082815260026020526040808220805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0387811691821790925591518593918516917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591a4505050565b60095490565b7f01ffc9a70000000000000000000000000000000000000000000000000000000081565b6105f8338261099e565b151561060357600080fd5b600160a060020a038316151561061857600080fd5b600160a060020a038216151561062d57600080fd5b61063783826109fd565b6106418382610a6e565b61064b8282610b75565b8082600160a060020a031684600160a060020a03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b600061069c8361077b565b82106106a757600080fd5b600160a060020a03831660009081526007602052604090208054839081106106cb57fe5b9060005260206000200154905092915050565b6106fa8383836020604051908101604052806000815250610893565b505050565b600090815260016020526040902054600160a060020a0316151590565b60006107266105c4565b821061073157600080fd5b600980548390811061073f57fe5b90600052602060002001549050919050565b600081815260016020526040812054600160a060020a031680151561077557600080fd5b92915050565b6000600160a060020a038216151561079257600080fd5b50600160a060020a031660009081526003602052604090205490565b60068054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156104e85780601f106104bd576101008083540402835291602001916104e8565b600160a060020a03821633141561082557600080fd5b336000818152600460209081526040808320600160a060020a03871680855290835292819020805460ff1916861515908117909155815190815290519293927f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31929181900390910190a35050565b61089e8484846105ee565b6108aa84848484610bbe565b15156108b557600080fd5b50505050565b60606108c6826106ff565b15156108d157600080fd5b6000828152600b602090815260409182902080548351601f6002600019610100600186161502019093169290920491820184900484028101840190945280845290918301828280156109645780601f1061093957610100808354040283529160200191610964565b820191906000526020600020905b81548152906001019060200180831161094757829003601f168201915b50505050509050919050565b600160a060020a03918216600090815260046020908152604080832093909416825291909152205460ff1690565b6000806109aa83610751565b905080600160a060020a031684600160a060020a031614806109e5575083600160a060020a03166109da846104f3565b600160a060020a0316145b806109f557506109f58185610970565b949350505050565b81600160a060020a0316610a1082610751565b600160a060020a031614610a2357600080fd5b600081815260026020526040902054600160a060020a031615610a6a576000818152600260205260409020805473ffffffffffffffffffffffffffffffffffffffff191690555b5050565b6000806000610a7d8585610d2b565b600084815260086020908152604080832054600160a060020a0389168452600790925290912054909350610ab890600163ffffffff610dc116565b600160a060020a038616600090815260076020526040902080549193509083908110610ae057fe5b90600052602060002001549050806007600087600160a060020a0316600160a060020a0316815260200190815260200160002084815481101515610b2057fe5b6000918252602080832090910192909255600160a060020a0387168152600790915260409020805490610b57906000198301610e78565b50600093845260086020526040808520859055908452909220555050565b6000610b818383610dd3565b50600160a060020a039091166000908152600760209081526040808320805460018101825590845282842081018590559383526008909152902055565b600080610bd385600160a060020a0316610e63565b1515610be25760019150610d22565b6040517f150b7a020000000000000000000000000000000000000000000000000000000081523360048201818152600160a060020a03898116602485015260448401889052608060648501908152875160848601528751918a169463150b7a0294938c938b938b93909160a490910190602085019080838360005b83811015610c75578181015183820152602001610c5d565b50505050905090810190601f168015610ca25780820380516001836020036101000a031916815260200191505b5095505050505050602060405180830381600087803b158015610cc457600080fd5b505af1158015610cd8573d6000803e3d6000fd5b505050506040513d6020811015610cee57600080fd5b5051600160e060020a031981167f150b7a020000000000000000000000000000000000000000000000000000000014925090505b50949350505050565b81600160a060020a0316610d3e82610751565b600160a060020a031614610d5157600080fd5b600160a060020a038216600090815260036020526040902054610d7b90600163ffffffff610dc116565b600160a060020a03909216600090815260036020908152604080832094909455918152600190915220805473ffffffffffffffffffffffffffffffffffffffff19169055565b600082821115610dcd57fe5b50900390565b600081815260016020526040902054600160a060020a031615610df557600080fd5b6000818152600160208181526040808420805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0388169081179091558452600390915290912054610e4391610e6b565b600160a060020a0390921660009081526003602052604090209190915550565b6000903b1190565b8181018281101561077557fe5b8154818355818111156106fa576000838152602090206106fa9181019083016104f091905b80821115610eb15760008155600101610e9d565b50905600a165627a7a72305820","swarm_hash":"fc8173295b1d877039c421980ab38f9e4edd212c1e378f050e453fcd895cb243","gas_estimates":{"creation":{"codeDepositCost":"761800","executionCost":"infinite","totalCost":"infinite"},"external":{"InterfaceId_ERC165()":"375","approve(address,uint256)":"23686","balanceOf(address)":"973","exists(uint256)":"741","getApproved(uint256)":"653","isApprovedForAll(address,address)":"1094","name()":"infinite","ownerOf(uint256)":"881","safeTransferFrom(address,address,uint256)":"infinite","safeTransferFrom(address,address,uint256,bytes)":"infinite","setApprovalForAll(address,bool)":"22920","supportsInterface(bytes4)":"627","symbol()":"infinite","tokenByIndex(uint256)":"1156","tokenOfOwnerByIndex(address,uint256)":"1564","tokenURI(uint256)":"infinite","totalSupply()":"472","transferFrom(address,address,uint256)":"infinite"},"internal":{"_burn(address,uint256)":"infinite","_mint(address,uint256)":"infinite","_setTokenURI(uint256,string memory)":"infinite","addTokenTo(address,uint256)":"101796","removeTokenFrom(address,uint256)":"infinite"}},"function_hashes":{"InterfaceId_ERC165()":"19fa8f50","approve(address,uint256)":"095ea7b3","balanceOf(address)":"70a08231","exists(uint256)":"4f558e79","getApproved(uint256)":"081812fc","isApprovedForAll(address,address)":"e985e9c5","name()":"06fdde03","ownerOf(uint256)":"6352211e","safeTransferFrom(address,address,uint256)":"42842e0e","safeTransferFrom(address,address,uint256,bytes)":"b88d4fde","setApprovalForAll(address,bool)":"a22cb465","supportsInterface(bytes4)":"01ffc9a7","symbol()":"95d89b41","tokenByIndex(uint256)":"4f6ccce7","tokenOfOwnerByIndex(address,uint256)":"2f745c59","tokenURI(uint256)":"c87b56dd","totalSupply()":"18160ddd","transferFrom(address,address,uint256)":"23b872dd"},"abi":[{"constant":true,"inputs":[{"name":"_interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x01ffc9a7"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x06fdde03"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x081812fc"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_tokenId","type":"uint256"}],"name":"approve","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x095ea7b3"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x18160ddd"},{"constant":true,"inputs":[],"name":"InterfaceId_ERC165","outputs":[{"name":"","type":"bytes4"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x19fa8f50"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x23b872dd"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x2f745c59"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x42842e0e"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"exists","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x4f558e79"},{"constant":true,"inputs":[{"name":"_index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x4f6ccce7"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x6352211e"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x70a08231"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x95d89b41"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0xa22cb465"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_tokenId","type":"uint256"},{"name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0xb88d4fde"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xc87b56dd"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xe985e9c5"},{"inputs":[{"name":"_name","type":"string"},{"name":"_symbol","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":true,"name":"_tokenId","type":"uint256"}],"name":"Transfer","type":"event","signature":"0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_approved","type":"address"},{"indexed":true,"name":"_tokenId","type":"uint256"}],"name":"Approval","type":"event","signature":"0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_operator","type":"address"},{"indexed":false,"name":"_approved","type":"bool"}],"name":"ApprovalForAll","type":"event","signature":"0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31"}]};
let ERC721Token = new EmbarkJS.Blockchain.Contract(ERC721TokenJSONConfig);
module.exports = ERC721Token;