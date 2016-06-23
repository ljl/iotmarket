// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"constant":false,"inputs":[],"name":"getTotalRecords","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"key","type":"address"}],"name":"unregister","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"key","type":"address"}],"name":"getTime","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"key","type":"address"},{"name":"desc","type":"string"},{"name":"active","type":"bool"},{"name":"help","type":"string"},{"name":"price","type":"uint256"}],"name":"update","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"key","type":"address"}],"name":"getRecord","outputs":[{"name":"owner","type":"address"},{"name":"time","type":"uint256"},{"name":"desc","type":"string"},{"name":"active","type":"bool"},{"name":"help","type":"string"},{"name":"price","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"key","type":"address"},{"name":"desc","type":"string"},{"name":"active","type":"bool"},{"name":"help","type":"string"},{"name":"price","type":"uint256"}],"name":"register","outputs":[{"name":"test","type":"string"}],"type":"function"},{"constant":false,"inputs":[{"name":"rindex","type":"uint256"}],"name":"getRecordAtIndex","outputs":[{"name":"key","type":"address"},{"name":"owner","type":"address"},{"name":"time","type":"uint256"},{"name":"desc","type":"string"},{"name":"active","type":"bool"},{"name":"help","type":"string"},{"name":"price","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"numRecords","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"key","type":"address"}],"name":"isRegistered","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":true,"inputs":[],"name":"TIME_TO_LIVE","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"FREQUENCY_TO_CHECK_EXPIRATION","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"key","type":"address"}],"name":"getOwner","outputs":[{"name":"","type":"address"}],"type":"function"}],
    binary: "60606040526301e13380600355610e1060045542600555611166806100246000396000f3606060405236156100985760e060020a60003504630aeacb5e811461009e5780632ec2c246146100b45780634b70cec4146102765780634f98ee421461029e578063617fba04146103b557806362668e46146104545780637bcd7fad146106de578063b5d1990d146107e4578063c3c5a547146107ed578063c3cecfdc1461081b578063de5c48e014610824578063fa5441611461082d575b6108535b565b6001545b60408051918252519081900360200190f35b600160a060020a0360043581811660009081526020819052604081205461085393908116339091161415610af15760408120805460028281018054600160a060020a031993909316845560018481018690559085905560038401805486825593959390929181161561010002600019011604601f819010610af557505b5060048201805460ff191690556005820180546000825560026001821615610100026000190190911604601f819010610b2757505b50506000600690910155600180546000199081019091556002805490918101908110156100025750805460008290527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acd810154600160a060020a031691908390811015610002575060008051602061114683398151915283018054600160a060020a0319169092179091558054829160009182919084908110156100025750815260008051602061114683398151915283018190546101009190910a9004600160a060020a03168152602081019190915260400160002060029081019190915580546000198101808355909190828015829011610aec57818360005260206000209182019101610aec9190610b0f565b6100a2600435600160a060020a0381166000908152602081905260409020600101545b919050565b60408051602060248035600481810135601f8101859004850286018501909652858552610853958135959194604494929390920191819084018382808284375050604080516020606435808b0135601f810183900483028401830190945283835297999835989760849750919550602491909101935090915081908401838280828437509496505093359350505050600160a060020a038581166000908152602081905260409020548116339091161415610b66576040600090812085516003919091018054818452602093849020919360026001831615610100026000190190921691909104601f9081018290048301939291890190839010610b6d57805160ff19168380011785555b50610b9d929150610b0f565b6108556004356040805160208181018352600080835283518083018552818152600160a060020a03868116835282845285832080546001828101546003840180548b51600294821615610100026000190190911693909304601f81018a90048a0284018a01909b528a83529290941698939796869491929190830182828015610c775780601f10610c4c57610100808354040283529160200191610c77565b60408051602060248035600481810135601f8101859004850286018501909652858552610949958135959194604494929390920191819084018382808284375050604080516020606435808b0135601f81018390048302840183019094528383529799983598976084975091955060249190910193509091508190840183828082843750949650509335935050505060408051602081019091526000808252600454600554829142919091031115610d2d57426005555b600154821015610d2d57600280546000918291859081101561000257505050600080516020611146833981519152830154600160a060020a03168152602081905260409020600181015460035491925042031115610d2d576002805460009182918590811015610002579082526000805160206111468339815191520181905461010091820a9004600160a060020a03168252602082019290925260400160009081208054600160a060020a0319168155600181810183905560028281018490556003830180548582559395909392831615026000190190911604601f819010610dab57505b5060048201805460ff191690556005820180546000825560026001821615610100026000190190911604601f819010610dc957505b5050600060069091015560015460028054909160001901908110156100025750600154815460008390527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acd9190910154600160a060020a031691908490811015610002575060008051602061114683398151915284018054600160a060020a03191690921790915580546000198101808355909190828015829011610de757818360005260206000209182019101610de79190610b0f565b6109b760043560408051602081810183526000808352835191820190935282815260028054849384939092849283918291829182918c90811015610002575080546000805160206111468339815191528d0154600160a060020a03169092526020929092526040909220918a908110156100025790600052602060002090016000905482546001848101546003860180546040805160206002968416156101009081026000190190941696909604601f81018790048702820187019092528181529790910a909504600160a060020a039081169e50939093169b5099509091908301828280156110575780601f1061102c57610100808354040283529160200191611057565b6100a260015481565b610abb600435600160a060020a03811660009081526020819052604081206001015481141561110f57610299565b6100a260035481565b6100a260045481565b610acf600435600160a060020a0381811660009081526020819052604090205416610299565b005b6040518087600160a060020a03168152602001868152602001806020018515158152602001806020018481526020018381038352878181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f1680156108dc5780820380516001836020036101000a031916815260200191505b508381038252858181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f1680156109355780820380516001836020036101000a031916815260200191505b509850505050505050505060405180910390f35b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f1680156109a95780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6040518088600160a060020a0316815260200187600160a060020a03168152602001868152602001806020018515158152602001806020018481526020018381038352878181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f168015610a4d5780820380516001836020036101000a031916815260200191505b508381038252858181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f168015610aa65780820380516001836020036101000a031916815260200191505b50995050505050505050505060405180910390f35b604080519115158252519081900360200190f35b60408051600160a060020a03929092168252519081900360200190f35b505050505b5050565b601f01602090049060005260206000209081019061013191905b80821115610b235760008155600101610b0f565b5090565b601f0160209004906000526020600020908101906101669190610b0f565b5050600160a060020a03851660009081526020819052604090206006018190555b5050505050565b828001600101855582156103a9579182015b828111156103a9578251826000505591602001919060010190610b7f565b5050600160a060020a038516600090815260208181526040822060048101805460ff1916871790556005018054855182855293839020919360026001831615610100026000190190921691909104601f908101849004830193919291870190839010610c1c57805160ff19168380011785555b50610b45929150610b0f565b82800160010185558215610c10579182015b82811115610c10578251826000505591602001919060010190610c2e565b820191906000526020600020905b815481529060010190602001808311610c5a57829003601f168201915b50505050600483015460058401805460408051602060026000196001861615610100020190941693909304601f8101849004840282018401909252818152959a5060ff9093169850909250830182828015610d135780601f10610ce857610100808354040283529160200191610d13565b820191906000526020600020905b815481529060010190602001808311610cf657829003601f168201915b505050600684015492955091935050505091939550919395565b600160a060020a0388166000908152602081905260408120600101541415610dfb576040600020426001828101919091558154600160a060020a0319163317825560028054928101839055908201808255828015829011610e29576000839052610e2990600080516020611146833981519152908101908301610b0f565b601f0160209004906000526020600020908101906105f19190610b0f565b601f0160209004906000526020600020908101906106269190610b0f565b5050600180546000190190555061050b9050565b610fec600034111561009c5760405133600160a060020a031690600090349082818181858883f15050505050565b5050600280548b9350909150600019810190811015610002575080547f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acd018054600160a060020a031916909217909155600160a060020a03891660009081526020818152604082208a51600390910180548185529383902090946001851615610100026000190190941693909304601f90810183900484019391928c0190839010610ee757805160ff19168380011785555b50610f17929150610b0f565b82800160010185558215610edb579182015b82811115610edb578251826000505591602001919060010190610ef9565b5050600160a060020a038816600090815260208181526040822060048101805460ff19168a1790558751600591909101805481855293839020909360026001821615610100026000190190911604601f9081018490048201938a0190839010610f9357805160ff19168380011785555b50610fc3929150610b0f565b82800160010185558215610f87579182015b82811115610f87578251826000505591602001919060010190610fa5565b5050600160a060020a038816600090815260208190526040902060060184905560018054810190555b505060408051808201909152600781527f6a6f6e206a6f6e0000000000000000000000000000000000000000000000000060208201529695505050505050565b820191906000526020600020905b81548152906001019060200180831161103a57829003601f168201915b50505050600483015460058401805460408051602060026000196001861615610100020190941693909304601f8101849004840282018401909252818152959a5060ff90931698509092508301828280156110f35780601f106110c8576101008083540402835291602001916110f3565b820191906000526020600020905b8154815290600101906020018083116110d657829003601f168201915b5050506006840154929550919350505050919395979092949650565b600354600160a060020a0383166000908152602081905260409020600101544203111561113e57506000610299565b50600161029956405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace",
    unlinked_binary: "60606040526301e13380600355610e1060045542600555611166806100246000396000f3606060405236156100985760e060020a60003504630aeacb5e811461009e5780632ec2c246146100b45780634b70cec4146102765780634f98ee421461029e578063617fba04146103b557806362668e46146104545780637bcd7fad146106de578063b5d1990d146107e4578063c3c5a547146107ed578063c3cecfdc1461081b578063de5c48e014610824578063fa5441611461082d575b6108535b565b6001545b60408051918252519081900360200190f35b600160a060020a0360043581811660009081526020819052604081205461085393908116339091161415610af15760408120805460028281018054600160a060020a031993909316845560018481018690559085905560038401805486825593959390929181161561010002600019011604601f819010610af557505b5060048201805460ff191690556005820180546000825560026001821615610100026000190190911604601f819010610b2757505b50506000600690910155600180546000199081019091556002805490918101908110156100025750805460008290527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acd810154600160a060020a031691908390811015610002575060008051602061114683398151915283018054600160a060020a0319169092179091558054829160009182919084908110156100025750815260008051602061114683398151915283018190546101009190910a9004600160a060020a03168152602081019190915260400160002060029081019190915580546000198101808355909190828015829011610aec57818360005260206000209182019101610aec9190610b0f565b6100a2600435600160a060020a0381166000908152602081905260409020600101545b919050565b60408051602060248035600481810135601f8101859004850286018501909652858552610853958135959194604494929390920191819084018382808284375050604080516020606435808b0135601f810183900483028401830190945283835297999835989760849750919550602491909101935090915081908401838280828437509496505093359350505050600160a060020a038581166000908152602081905260409020548116339091161415610b66576040600090812085516003919091018054818452602093849020919360026001831615610100026000190190921691909104601f9081018290048301939291890190839010610b6d57805160ff19168380011785555b50610b9d929150610b0f565b6108556004356040805160208181018352600080835283518083018552818152600160a060020a03868116835282845285832080546001828101546003840180548b51600294821615610100026000190190911693909304601f81018a90048a0284018a01909b528a83529290941698939796869491929190830182828015610c775780601f10610c4c57610100808354040283529160200191610c77565b60408051602060248035600481810135601f8101859004850286018501909652858552610949958135959194604494929390920191819084018382808284375050604080516020606435808b0135601f81018390048302840183019094528383529799983598976084975091955060249190910193509091508190840183828082843750949650509335935050505060408051602081019091526000808252600454600554829142919091031115610d2d57426005555b600154821015610d2d57600280546000918291859081101561000257505050600080516020611146833981519152830154600160a060020a03168152602081905260409020600181015460035491925042031115610d2d576002805460009182918590811015610002579082526000805160206111468339815191520181905461010091820a9004600160a060020a03168252602082019290925260400160009081208054600160a060020a0319168155600181810183905560028281018490556003830180548582559395909392831615026000190190911604601f819010610dab57505b5060048201805460ff191690556005820180546000825560026001821615610100026000190190911604601f819010610dc957505b5050600060069091015560015460028054909160001901908110156100025750600154815460008390527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acd9190910154600160a060020a031691908490811015610002575060008051602061114683398151915284018054600160a060020a03191690921790915580546000198101808355909190828015829011610de757818360005260206000209182019101610de79190610b0f565b6109b760043560408051602081810183526000808352835191820190935282815260028054849384939092849283918291829182918c90811015610002575080546000805160206111468339815191528d0154600160a060020a03169092526020929092526040909220918a908110156100025790600052602060002090016000905482546001848101546003860180546040805160206002968416156101009081026000190190941696909604601f81018790048702820187019092528181529790910a909504600160a060020a039081169e50939093169b5099509091908301828280156110575780601f1061102c57610100808354040283529160200191611057565b6100a260015481565b610abb600435600160a060020a03811660009081526020819052604081206001015481141561110f57610299565b6100a260035481565b6100a260045481565b610acf600435600160a060020a0381811660009081526020819052604090205416610299565b005b6040518087600160a060020a03168152602001868152602001806020018515158152602001806020018481526020018381038352878181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f1680156108dc5780820380516001836020036101000a031916815260200191505b508381038252858181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f1680156109355780820380516001836020036101000a031916815260200191505b509850505050505050505060405180910390f35b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f1680156109a95780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6040518088600160a060020a0316815260200187600160a060020a03168152602001868152602001806020018515158152602001806020018481526020018381038352878181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f168015610a4d5780820380516001836020036101000a031916815260200191505b508381038252858181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f168015610aa65780820380516001836020036101000a031916815260200191505b50995050505050505050505060405180910390f35b604080519115158252519081900360200190f35b60408051600160a060020a03929092168252519081900360200190f35b505050505b5050565b601f01602090049060005260206000209081019061013191905b80821115610b235760008155600101610b0f565b5090565b601f0160209004906000526020600020908101906101669190610b0f565b5050600160a060020a03851660009081526020819052604090206006018190555b5050505050565b828001600101855582156103a9579182015b828111156103a9578251826000505591602001919060010190610b7f565b5050600160a060020a038516600090815260208181526040822060048101805460ff1916871790556005018054855182855293839020919360026001831615610100026000190190921691909104601f908101849004830193919291870190839010610c1c57805160ff19168380011785555b50610b45929150610b0f565b82800160010185558215610c10579182015b82811115610c10578251826000505591602001919060010190610c2e565b820191906000526020600020905b815481529060010190602001808311610c5a57829003601f168201915b50505050600483015460058401805460408051602060026000196001861615610100020190941693909304601f8101849004840282018401909252818152959a5060ff9093169850909250830182828015610d135780601f10610ce857610100808354040283529160200191610d13565b820191906000526020600020905b815481529060010190602001808311610cf657829003601f168201915b505050600684015492955091935050505091939550919395565b600160a060020a0388166000908152602081905260408120600101541415610dfb576040600020426001828101919091558154600160a060020a0319163317825560028054928101839055908201808255828015829011610e29576000839052610e2990600080516020611146833981519152908101908301610b0f565b601f0160209004906000526020600020908101906105f19190610b0f565b601f0160209004906000526020600020908101906106269190610b0f565b5050600180546000190190555061050b9050565b610fec600034111561009c5760405133600160a060020a031690600090349082818181858883f15050505050565b5050600280548b9350909150600019810190811015610002575080547f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acd018054600160a060020a031916909217909155600160a060020a03891660009081526020818152604082208a51600390910180548185529383902090946001851615610100026000190190941693909304601f90810183900484019391928c0190839010610ee757805160ff19168380011785555b50610f17929150610b0f565b82800160010185558215610edb579182015b82811115610edb578251826000505591602001919060010190610ef9565b5050600160a060020a038816600090815260208181526040822060048101805460ff19168a1790558751600591909101805481855293839020909360026001821615610100026000190190911604601f9081018490048201938a0190839010610f9357805160ff19168380011785555b50610fc3929150610b0f565b82800160010185558215610f87579182015b82811115610f87578251826000505591602001919060010190610fa5565b5050600160a060020a038816600090815260208190526040902060060184905560018054810190555b505060408051808201909152600781527f6a6f6e206a6f6e0000000000000000000000000000000000000000000000000060208201529695505050505050565b820191906000526020600020905b81548152906001019060200180831161103a57829003601f168201915b50505050600483015460058401805460408051602060026000196001861615610100020190941693909304601f8101849004840282018401909252818152959a5060ff90931698509092508301828280156110f35780601f106110c8576101008083540402835291602001916110f3565b820191906000526020600020905b8154815290600101906020018083116110d657829003601f168201915b5050506006840154929550919350505050919395979092949650565b600354600160a060020a0383166000908152602081905260409020600101544203111561113e57506000610299565b50600161029956405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace",
    address: "0x3ebcf752ecfdf80c04522bf898fa9a6680f967f6",
    generated_with: "2.0.9",
    contract_name: "SimpleDataMarket"
  };

  function Contract() {
    if (Contract.Pudding == null) {
      throw new Error("SimpleDataMarket error: Please call load() first before creating new instance of this contract.");
    }

    Contract.Pudding.apply(this, arguments);
  };

  Contract.load = function(Pudding) {
    Contract.Pudding = Pudding;

    Pudding.whisk(contract_data, Contract);

    // Return itself for backwards compatibility.
    return Contract;
  }

  Contract.new = function() {
    if (Contract.Pudding == null) {
      throw new Error("SimpleDataMarket error: Please call load() first before calling new().");
    }

    return Contract.Pudding.new.apply(Contract, arguments);
  };

  Contract.at = function() {
    if (Contract.Pudding == null) {
      throw new Error("SimpleDataMarket error: Please call load() first before calling at().");
    }

    return Contract.Pudding.at.apply(Contract, arguments);
  };

  Contract.deployed = function() {
    if (Contract.Pudding == null) {
      throw new Error("SimpleDataMarket error: Please call load() first before calling deployed().");
    }

    return Contract.Pudding.deployed.apply(Contract, arguments);
  };

  if (typeof module != "undefined" && typeof module.exports != "undefined") {
    module.exports = Contract;
  } else {
    // There will only be one version of Pudding in the browser,
    // and we can use that.
    window.SimpleDataMarket = Contract;
  }

})();
