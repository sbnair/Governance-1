var ogTokenOutput={
  "contracts":
  {
    "OGToken.sol:ERC20":
    {
      "abi": "[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"tokenOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"tokens\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"tokens\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"tokenOwner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"remaining\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokens\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"success\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"tokenOwner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"balance\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokens\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"success\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokens\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"success\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}]",
      "bin": ""
    },
    "OGToken.sol:OGToken":
    {
      "abi": "[{\"inputs\":[{\"internalType\":\"string\",\"name\":\"symbol\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"uint8\",\"name\":\"decimals\",\"type\":\"uint8\"},{\"internalType\":\"address\",\"name\":\"tokenOwner\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"initialSupply\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"tokenOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"tokens\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"dividendToken\",\"type\":\"address\"}],\"name\":\"DividendTokensAdded\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"topic\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"number\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bytes32\",\"name\":\"data\",\"type\":\"bytes32\"},{\"indexed\":false,\"internalType\":\"string\",\"name\":\"note\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"addr\",\"type\":\"address\"}],\"name\":\"LogInfo\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maxDividendTokens\",\"type\":\"uint256\"}],\"name\":\"MaxDividendTokensUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"_from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"_to\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"tokens\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"dividendToken\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"owing\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"totalOwing\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lastDividendPoints\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"totalDividendPoints\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"unclaimedDividends\",\"type\":\"uint256\"}],\"name\":\"UpdateAccountInfo\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"acceptOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_dividendToken\",\"type\":\"address\"}],\"name\":\"addDividendToken\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"tokenOwner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"remaining\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokens\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"success\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"tokenOwner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"balance\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"tokenOwner\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokens\",\"type\":\"uint256\"}],\"name\":\"burn\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"success\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"dividendToken\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"dividends\",\"type\":\"uint256\"}],\"name\":\"depositDividends\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"dividendTokenIndex\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"dividendTokens\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"dividendToken\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"dividendsOwing\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"maxDividendTokens\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"tokenOwner\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokens\",\"type\":\"uint256\"}],\"name\":\"mint\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"success\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"newOwner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"pointMultiplier\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_maxDividendTokens\",\"type\":\"uint256\"}],\"name\":\"setMaxDividendTokens\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"totalDividendPoints\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokens\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"success\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokens\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"success\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"unclaimedDividends\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"dividendToken\",\"type\":\"address\"}],\"name\":\"withdrawDividends\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"withdrawn\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}]",
      "bin": "608060405260146006553480156200001657600080fd5b506040516200167b3803806200167b833981810160405260a08110156200003c57600080fd5b81019080805160405193929190846401000000008211156200005d57600080fd5b9083019060208201858111156200007357600080fd5b82516401000000008111828201881017156200008e57600080fd5b82525081516020918201929091019080838360005b83811015620000bd578181015183820152602001620000a3565b50505050905090810190601f168015620000eb5780820380516001836020036101000a031916815260200191505b50604052602001805160405193929190846401000000008211156200010f57600080fd5b9083019060208201858111156200012557600080fd5b82516401000000008111828201881017156200014057600080fd5b82525081516020918201929091019080838360005b838110156200016f57818101518382015260200162000155565b50505050905090810190601f1680156200019d5780820380516001836020036101000a031916815260200191505b506040908152602082015190820151606090920151909350909150620001c3336200025e565b8451620001d8906002906020880190620002e6565b508351620001ee906003906020870190620002e6565b506004805460ff191660ff85161790556001600160a01b0382166000818152600b602090815260408083208590556005859055805185815290517fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef929181900390910190a3505050505062000382565b60005460ff1615620002b7576040805162461bcd60e51b815260206004820152601360248201527f416c726561647920696e697469616c6973656400000000000000000000000000604482015290519081900360640190fd5b6000805460ff196001600160a01b0390931661010002610100600160a81b031990911617919091166001179055565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200032957805160ff191683800117855562000359565b8280016001018555821562000359579182015b82811115620003595782518255916020019190600101906200033c565b50620003679291506200036b565b5090565b5b808211156200036757600081556001016200036c565b6112e980620003926000396000f3fe608060405234801561001057600080fd5b506004361061018e5760003560e01c806383e52641116100de5780639dc29fac11610097578063db847b4e11610071578063db847b4e146104c5578063dd62ed3e146104eb578063f2fde38b14610519578063fb77df9e1461053f5761018e565b80639dc29fac14610465578063a9059cbb14610491578063d4ee1d90146104bd5761018e565b806383e52641146103b95780638681a374146103c15780638d76e6c0146103e75780638da5cb5b1461040d57806395d89b41146104315780639935cd8e146104395761018e565b8063313ce5671161014b578063658b98a911610125578063658b98a9146103645780636c92f0b01461036c57806370a082311461038b57806379ba5097146103b15761018e565b8063313ce567146102f457806340c10f1914610312578063486503381461033e5761018e565b80630490c71c1461019357806306fdde03146101cb578063095ea7b31461024857806318160ddd1461028857806323b872dd146102905780632a82bcd7146102c6575b600080fd5b6101b9600480360360208110156101a957600080fd5b50356001600160a01b031661055c565b60408051918252519081900360200190f35b6101d361056e565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561020d5781810151838201526020016101f5565b50505050905090810190601f16801561023a5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102746004803603604081101561025e57600080fd5b506001600160a01b038135169060200135610604565b604080519115158252519081900360200190f35b6101b961066b565b610274600480360360608110156102a657600080fd5b506001600160a01b038135811691602081013590911690604001356106a8565b6101b9600480360360408110156102dc57600080fd5b506001600160a01b03813581169160200135166107e1565b6102fc610831565b6040805160ff9092168252519081900360200190f35b6102746004803603604081101561032857600080fd5b506001600160a01b03813516906020013561083a565b6101b96004803603602081101561035457600080fd5b50356001600160a01b0316610950565b6101b9610964565b6103896004803603602081101561038257600080fd5b5035610970565b005b6101b9600480360360208110156103a157600080fd5b50356001600160a01b0316610a3b565b610389610a56565b6101b9610acb565b6101b9600480360360208110156103d757600080fd5b50356001600160a01b0316610ad1565b610274600480360360208110156103fd57600080fd5b50356001600160a01b0316610ae3565b610415610af8565b604080516001600160a01b039092168252519081900360200190f35b6101d3610b0c565b6103896004803603604081101561044f57600080fd5b506001600160a01b038135169060200135610b6a565b6102746004803603604081101561047b57600080fd5b506001600160a01b038135169060200135610c68565b610274600480360360408110156104a757600080fd5b506001600160a01b038135169060200135610d63565b610415610e47565b610389600480360360208110156104db57600080fd5b50356001600160a01b0316610e56565b6101b96004803603604081101561050157600080fd5b506001600160a01b0381358116916020013516610fb1565b6103896004803603602081101561052f57600080fd5b50356001600160a01b0316610fdc565b6104156004803603602081101561055557600080fd5b503561104e565b600a6020526000908152604090205481565b60038054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156105fa5780601f106105cf576101008083540402835291602001916105fa565b820191906000526020600020905b8154815290600101906020018083116105dd57829003601f168201915b5050505050905090565b336000818152600c602090815260408083206001600160a01b038716808552908352818420869055815186815291519394909390927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925928290030190a35060015b92915050565b6000808052600b6020527fdf7de25b7f1fd6d0b5205f0e18f1f35bd7b8d84cce336588d184533ce43a6f76546005546106a391611075565b905090565b6000805b6008548110156106f9576000600882815481106106c557fe5b6000918252602090912001546001600160a01b031690506106e681336110c2565b6106f081866110c2565b506001016106ac565b506001600160a01b0384166000908152600b602052604090205461071d9083611075565b6001600160a01b0385166000908152600b6020908152604080832093909355600c8152828220338352905220546107549083611075565b6001600160a01b038086166000908152600c602090815260408083203384528252808320949094559186168152600b90915220546107929083611223565b6001600160a01b038085166000818152600b6020908152604091829020949094558051868152905191939288169260008051602061126b83398151915292918290030190a35060019392505050565b6001600160a01b039081166000818152600b602081815260408084209690951683526001860181528483205460098252948320549390925290529154678ac7230489e80000919092039091020490565b60045460ff1690565b6000805461010090046001600160a01b0316331461088b576040805162461bcd60e51b81526020600482015260096024820152682737ba1037bbb732b960b91b604482015290519081900360640190fd5b6001600160a01b0383166000908152600b60205260409020546108ae9083611223565b6001600160a01b0384166000908152600b60205260409020556005546108d49083611223565b6005556040805183815290516001600160a01b0385169160009160008051602061126b8339815191529181900360200190a360005b6008548110156109465761093e6008828154811061092357fe5b6000918252602090912001546001600160a01b0316856110c2565b600101610909565b5060019392505050565b600061095c82336110c2565b506000919050565b678ac7230489e8000081565b60005461010090046001600160a01b031633146109c0576040805162461bcd60e51b81526020600482015260096024820152682737ba1037bbb732b960b91b604482015290519081900360640190fd5b6008548111610a005760405162461bcd60e51b815260040180806020018281038252602981526020018061128b6029913960400191505060405180910390fd5b60068190556040805182815290517fb2b3355aee1b004785d7b6e45b52a08d66a2c2991e9fb290d02e2afca75f541d9181900360200190a150565b6001600160a01b03166000908152600b602052604090205490565b600154600080546040516001600160a01b0393841693610100909204909116917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36001805460008054610100600160a81b0319166101006001600160a01b038416021790556001600160a01b0319169055565b60065481565b60096020526000908152604090205481565b60076020526000908152604090205460ff1681565b60005461010090046001600160a01b031681565b60028054604080516020601f60001961010060018716150201909416859004938401819004810282018101909252828152606093909290918301828280156105fa5780601f106105cf576101008083540402835291602001916105fa565b610ba3600554678ac7230489e80000830281610b8257fe5b6001600160a01b038516600090815260096020526040902054919004611223565b6001600160a01b038316600090815260096020908152604080832093909355600a90522054610bd29082611223565b6001600160a01b0383166000818152600a602090815260408083209490945583516323b872dd60e01b815233600482015230602482015260448101869052935192936323b872dd9360648083019491928390030190829087803b158015610c3857600080fd5b505af1158015610c4c573d6000803e3d6000fd5b505050506040513d6020811015610c6257600080fd5b50505050565b6000805461010090046001600160a01b03163314610cb9576040805162461bcd60e51b81526020600482015260096024820152682737ba1037bbb732b960b91b604482015290519081900360640190fd5b60005b600854811015610cde57610cd66008828154811061092357fe5b600101610cbc565b506001600160a01b0383166000908152600b6020526040902054610d029083611075565b6001600160a01b0384166000908152600b6020526040902055600554610d289083611075565b6005556040805183815290516000916001600160a01b0386169160008051602061126b8339815191529181900360200190a350600192915050565b6000805b600854811015610db457600060088281548110610d8057fe5b6000918252602090912001546001600160a01b03169050610da181336110c2565b610dab81866110c2565b50600101610d67565b50336000908152600b6020526040902054610dcf9083611075565b336000908152600b6020526040808220929092556001600160a01b03851681522054610dfb9083611223565b6001600160a01b0384166000818152600b602090815260409182902093909355805185815290519192339260008051602061126b8339815191529281900390910190a350600192915050565b6001546001600160a01b031681565b60005461010090046001600160a01b03163314610ea6576040805162461bcd60e51b81526020600482015260096024820152682737ba1037bbb732b960b91b604482015290519081900360640190fd5b6001600160a01b03811660009081526007602052604090205460ff1615610f14576040805162461bcd60e51b815260206004820152601960248201527f546f6b656e20616c726561647920696e20746865206c69737400000000000000604482015290519081900360640190fd5b6001600160a01b0381166000818152600760209081526040808320805460ff191660019081179091556008805491820181559093527ff3f7a9fe364faab93b216da50a3214154f22a0a2b415b23a84c8169e8b636ee390920180546001600160a01b03191684179055815192835290517f0740b50348c241f217d90f0676f930877748bfbacc189223ea8f48d18d475f8d9281900390910190a150565b6001600160a01b039182166000908152600c6020908152604080832093909416825291909152205490565b60005461010090046001600160a01b0316331461102c576040805162461bcd60e51b81526020600482015260096024820152682737ba1037bbb732b960b91b604482015290519081900360640190fd5b600180546001600160a01b0319166001600160a01b0392909216919091179055565b6008818154811061105b57fe5b6000918252602090912001546001600160a01b0316905081565b6000828211156110bc576040805162461bcd60e51b815260206004820152600d60248201526c53756220756e646572666c6f7760981b604482015290519081900360640190fd5b50900390565b60006110ce83836107e1565b9050801561117c576001600160a01b0383166000908152600a60205260409020546110f99082611075565b6001600160a01b038481166000818152600a602090815260408083209590955560098152848220549387168252600b815284822092825260018301815284822093909355600290910190915220546111519082611223565b6001600160a01b038084166000908152600b6020908152604080832093881683526002909301905220555b6001600160a01b038281166000818152600b602090815260408083209488168084526002860183528184205460019096018352818420546009845282852054600a855294839020548351928352938201959095528082018790526060810195909552608085019390935260a084019190915260c0830152517f327029d223fc5854747c1e1343e8d348c3b5425c34ae04d262f47e181b6752a69181900360e00190a1505050565b81810182811015610665576040805162461bcd60e51b815260206004820152600c60248201526b416464206f766572666c6f7760a01b604482015290519081900360640190fdfeddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef4d6178206d757374206265206d6f7265207468616e2063757272656e74206c697374206c656e677468a26469706673582212201950f92c11aca14b41f8f7bed2ff419eedcb3f7ce8f0f28983d655cb55f0932e64736f6c63430007010033"
    },
    "OGToken.sol:OGTokenInterface":
    {
      "abi": "[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"tokenOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"tokens\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"tokens\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"tokenOwner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"remaining\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokens\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"success\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"tokenOwner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"balance\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"tokenOwner\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokens\",\"type\":\"uint256\"}],\"name\":\"burn\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"success\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"tokenOwner\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokens\",\"type\":\"uint256\"}],\"name\":\"mint\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"success\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokens\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"success\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokens\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"success\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}]",
      "bin": ""
    },
    "OGToken.sol:Owned":
    {
      "abi": "[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"_from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"_to\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"acceptOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"newOwner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}]",
      "bin": "608060405234801561001057600080fd5b506101ed806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806379ba5097146100515780638da5cb5b1461005b578063d4ee1d901461007f578063f2fde38b14610087575b600080fd5b6100596100ad565b005b610063610122565b604080516001600160a01b039092168252519081900360200190f35b610063610136565b6100596004803603602081101561009d57600080fd5b50356001600160a01b0316610145565b600154600080546040516001600160a01b0393841693610100909204909116917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36001805460008054610100600160a81b0319166101006001600160a01b038416021790556001600160a01b0319169055565b60005461010090046001600160a01b031681565b6001546001600160a01b031681565b60005461010090046001600160a01b03163314610195576040805162461bcd60e51b81526020600482015260096024820152682737ba1037bbb732b960b91b604482015290519081900360640190fd5b600180546001600160a01b0319166001600160a01b039290921691909117905556fea26469706673582212200b244932141f1add77c4516caf5d33a3c13bee2ec539b0c728eb8e0eaf4d48bf64736f6c63430007010033"
    },
    "OGToken.sol:SafeMath":
    {
      "abi": "[]",
      "bin": "60566023600b82828239805160001a607314601657fe5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212205d5e3820641db57e1a60d8edf757875815becc7bfd5b996ecb6adcc2a9e3ed9064736f6c63430007010033"
    }
  },
  "version": "0.7.1+commit.f4a555be.Darwin.appleclang"
};
