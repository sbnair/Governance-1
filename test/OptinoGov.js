var govOutput={
  "contracts":
  {
    "OptinoGov.sol:ERC20":
    {
      "abi": "[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}]",
      "bin": ""
    },
    "OptinoGov.sol:OptinoGov":
    {
      "abi": "[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"token_\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"elapsed\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"reward\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"rewardPool\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"end\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"duration\",\"type\":\"uint256\"}],\"name\":\"Collected\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"oip\",\"type\":\"uint256\"}],\"name\":\"Executed\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"proposer\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"oip\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"string\",\"name\":\"description\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"address[]\",\"name\":\"targets\",\"type\":\"address[]\"},{\"indexed\":false,\"internalType\":\"bytes[]\",\"name\":\"data\",\"type\":\"bytes[]\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"start\",\"type\":\"uint256\"}],\"name\":\"Proposed\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"balance\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"duration\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"end\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"votes\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"rewardPool\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"totalVotes\",\"type\":\"uint256\"}],\"name\":\"Staked\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"balance\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"duration\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"end\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"votes\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"rewardPool\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"totalVotes\",\"type\":\"uint256\"}],\"name\":\"Unstaked\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"oip\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"voteFor\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"forVotes\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"againstVotes\",\"type\":\"uint256\"}],\"name\":\"Voted\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"collect\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"oip\",\"type\":\"uint256\"}],\"name\":\"execute\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"executeDelay\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"proposalCost\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"proposalCount\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"proposalThreshold\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"proposals\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"start\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"proposer\",\"type\":\"address\"},{\"internalType\":\"string\",\"name\":\"description\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"forVotes\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"againstVotes\",\"type\":\"uint256\"},{\"internalType\":\"bool\",\"name\":\"executed\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"description\",\"type\":\"string\"},{\"internalType\":\"address[]\",\"name\":\"targets\",\"type\":\"address[]\"},{\"internalType\":\"bytes[]\",\"name\":\"data\",\"type\":\"bytes[]\"}],\"name\":\"propose\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"quorum\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"rewardPool\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"rewardsPerSecond\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"duration\",\"type\":\"uint256\"}],\"name\":\"stake\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"stakes\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"duration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"end\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"votes\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"token\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalVotes\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"unstake\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"oip\",\"type\":\"uint256\"},{\"internalType\":\"bool\",\"name\":\"voteFor\",\"type\":\"bool\"}],\"name\":\"vote\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"votingDuration\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"}]",
      "bin": "608060405234801561001057600080fd5b50604051611b3b380380611b3b83398101604081905261002f91610085565b600080546001600160a01b0319166001600160a01b0392909216919091179055670214e8348c4f000060015568056bc75e2d63100000600255606460035562030d40600455612a30600555611c206006556100b3565b600060208284031215610096578081fd5b81516001600160a01b03811681146100ac578182fd5b9392505050565b611a79806100c26000396000f3fe608060405234801561001057600080fd5b50600436106101165760003560e01c8063876cdb2f116100a2578063e522538111610071578063e5225381146101f4578063e664f3b2146101fc578063eacdaabc14610204578063fc0c546a1461020c578063fe0d94c11461022157610116565b8063876cdb2f146101c9578063b58131b0146101d1578063c9d27afe146101d9578063da35c664146101ec57610116565b80631703a018116100e95780631703a018146101895780632def66201461019157806366666aa91461019b57806371f919eb146101a35780637b0472f0146101b657610116565b8063013cf08b1461011b5780630d15fd7714610149578063132002fc1461015e57806316934fc414610166575b600080fd5b61012e6101293660046113dd565b610234565b6040516101409695949392919061185e565b60405180910390f35b610151610301565b6040516101409190611855565b610151610307565b6101796101743660046112c5565b61030d565b6040516101409493929190611980565b610151610334565b61019961033a565b005b610151610588565b6101516101b13660046112fc565b61058e565b6101996101c4366004611424565b61077e565b610151610a27565b610151610a2d565b6101996101e73660046113f5565b610a33565b610151610bb1565b610199610bb7565b610151610d5f565b610151610d65565b610214610d6b565b6040516101409190611500565b61019961022f3660046113dd565b610d7a565b600b6020908152600091825260409182902080546001808301546002808501805488516101009582161595909502600019011691909104601f810187900487028401870190975286835292956001600160a01b03909116949192918301828280156102e05780601f106102b5576101008083540402835291602001916102e0565b820191906000526020600020905b8154815290600101906020018083116102c357829003601f168201915b50505050600583015460068401546008909401549293909290915060ff1686565b60085481565b60055481565b60096020526000908152604090208054600182015460028301546003909301549192909184565b60045481565b610342610fe5565b503360009081526009602090815260409182902082516080810184528154815260018201549281019290925260028101549282018390526003015460608201529061038c57600080fd5b806020015142116103b85760405162461bcd60e51b81526004016103af90611783565b60405180910390fd5b805160208201516000916103d6916103cf91610f1d565b4290610f1d565b9050600061040960085461040385606001516103fd60015487610f4a90919063ffffffff16565b90610f4a565b90610f8b565b6007549091506104199082610f1d565b600755604083015161042b9082610fc0565b6040840152606083015160085461044191610f1d565b6008556000606084018181526040808601805184825233808652600960209081528487208a518155908a015160018201559251600284015593516003909201919091559254905163a9059cbb60e01b81526001600160a01b039091169163a9059cbb916104b391908590600401611538565b602060405180830381600087803b1580156104cd57600080fd5b505af11580156104e1573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061050591906112e0565b6105215760405162461bcd60e51b81526004016103af906117ca565b336001600160a01b03167fa26a2b8a307ceb07e00026ef53988725ca3f112248034f53496bfb3f2d66fcdc82866040015187600001518860200151896060015160075460085460405161057a97969594939291906119be565b60405180910390a250505050565b60075481565b60006105ae620f4240610403600354600854610f4a90919063ffffffff16565b3360009081526009602052604090206003015410156105df5760405162461bcd60e51b81526004016103af906115ef565b600a805460019081018083556000908152600b602090815260408083204290558454835280832090930180546001600160a01b03191633179055925481522085516106329260029092019187019061100d565b50600a546000908152600b60209081526040909120845161065b9260039092019186019061108b565b50600a546000908152600b602090815260409091208351610684926004909201918501906110ec565b506000546002546040516323b872dd60e01b81526001600160a01b03909216916323b872dd916106ba9133913091600401611514565b602060405180830381600087803b1580156106d457600080fd5b505af11580156106e8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061070c91906112e0565b6107285760405162461bcd60e51b81526004016103af9061174c565b336001600160a01b03167f36337cc019d928346b09efe0ad0ed4836fef66b7a8e8d1a88618f7eb7a5d00e2600a548686864260405161076b9594939291906118c3565b60405180910390a250600a549392505050565b6301e1338081106107a15760405162461bcd60e51b81526004016103af9061157d565b6107a9610fe5565b503360009081526009602090815260409182902082516080810184528154815260018201549281019290925260028101549282018390526003015460608201529015610897578060200151824201116108145760405162461bcd60e51b81526004016103af90611801565b8051602082015160009161082b916103cf91610f1d565b9050600061085260085461040385606001516103fd60015487610f4a90919063ffffffff16565b6007549091506108629082610f1d565b60075560408301516108749082610fc0565b6040840152606083015160085461088a91610f1d565b6008555050600060608201525b60408101516108a69084610fc0565b60408201528181526108b84283610fc0565b602082015260408101516108d6906301e13380906104039085610f4a565b606082018190526008546108e991610fc0565b600855336000818152600960209081526040808320855181559185015160018301558481015160028301556060850151600390920191909155905490516323b872dd60e01b81526001600160a01b03909116916323b872dd91610953919030908890600401611514565b602060405180830381600087803b15801561096d57600080fd5b505af1158015610981573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109a591906112e0565b6109c15760405162461bcd60e51b81526004016103af9061174c565b336001600160a01b03167f65e30a25cf4fa69f5b3c0c90ce490ccd66468c3a85256f7451eadc615eee35ba848360400151846000015185602001518660600151600754600854604051610a1a97969594939291906119be565b60405180910390a2505050565b60065481565b60035481565b6000828152600b60205260409020548015801590610a5d5750600554610a5a908290610fc0565b42105b610a795760405162461bcd60e51b81526004016103af90611661565b6000838152600b6020908152604080832033845260070190915290205460ff1615610ab65760405162461bcd60e51b81526004016103af90611715565b8115610b015733600090815260096020908152604080832060030154868452600b90925290912060050154610aea91610fc0565b6000848152600b6020526040902060050155610b42565b33600090815260096020908152604080832060030154868452600b90925290912060050154610b2f91610fc0565b6000848152600b60205260409020600601555b6000838152600b6020818152604080842033808652600782018452828620805460ff191660011790559488905292909152600582015460069092015490517ffb5e6530ad35593dae2428d2c9931d35a61042367a12ca10742a80fcbb272f7392610a1a928892889291906118a8565b600a5481565b610bbf610fe5565b5033600090815260096020908152604091829020825160808101845281548152600182015492810192909252600281015492820183905260030154606082015290610c0957600080fd5b80516020820151600091610c20916103cf91610f1d565b90506000610c4760085461040385606001516103fd60015487610f4a90919063ffffffff16565b600754909150610c579082610f1d565b6007556020830151421115610c6d574260208401525b6020830151610c7c9042610f1d565b835260005460405163a9059cbb60e01b81526001600160a01b039091169063a9059cbb90610cb09033908590600401611538565b602060405180830381600087803b158015610cca57600080fd5b505af1158015610cde573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d0291906112e0565b610d1e5760405162461bcd60e51b81526004016103af906117ca565b6007546020840151845160405133937f9e48e42df0747083f09111bd5a1d577e07fb9ef3a10a11a77eec61699396c4f093610a1a938893889392919061199b565b60025481565b60015481565b6000546001600160a01b031681565b6000818152600b60205260409020805415801590610db357506006546005548254610db09291610daa9190610fc0565b90610fc0565b42105b610dbc57600080fd5b610dda620f4240610403600454600854610f4a90919063ffffffff16565b81600501541015610dfd5760405162461bcd60e51b81526004016103af90611698565b60088101805460ff1916600117905560005b6003820154811015610ed7576000826003018281548110610e2c57fe5b6000918252602090912001546004840180546001600160a01b039092169184908110610e5457fe5b90600052602060002001604051610e6b9190611490565b6000604051808303816000865af19150503d8060008114610ea8576040519150601f19603f3d011682016040523d82523d6000602084013e610ead565b606091505b5050905080610ece5760405162461bcd60e51b81526004016103af906116de565b50600101610e0f565b50336001600160a01b03167f6f6c6d78a4851d4c222c8404fc92372ee84b7b81054305ae8ea3c83c2dabd42e83604051610f119190611855565b60405180910390a25050565b600082821115610f3f5760405162461bcd60e51b81526004016103af906115c2565b508082035b92915050565b600082610f5957506000610f44565b82820282848281610f6657fe5b0414610f845760405162461bcd60e51b81526004016103af90611551565b9392505050565b6000808211610fac5760405162461bcd60e51b81526004016103af90611635565b6000828481610fb757fe5b04949350505050565b600082820183811015610f845760405162461bcd60e51b81526004016103af90611551565b6040518060800160405280600081526020016000815260200160008152602001600081525090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061104e57805160ff191683800117855561107b565b8280016001018555821561107b579182015b8281111561107b578251825591602001919060010190611060565b50611087929150611145565b5090565b8280548282559060005260206000209081019282156110e0579160200282015b828111156110e057825182546001600160a01b0319166001600160a01b039091161782556020909201916001909101906110ab565b5061108792915061115a565b828054828255906000526020600020908101928215611139579160200282015b82811115611139578251805161112991849160209091019061100d565b509160200191906001019061110c565b50611087929150611179565b5b808211156110875760008155600101611146565b5b808211156110875780546001600160a01b031916815560010161115b565b8082111561108757600061118d8282611196565b50600101611179565b50805460018160011615610100020316600290046000825580601f106111bc57506111da565b601f0160209004906000526020600020908101906111da9190611145565b50565b80356001600160a01b0381168114610f4457600080fd5b600082601f830112611204578081fd5b813561121761121282611a15565b6119ee565b818152915060208083019084810160005b848110156112515761123f888484358a010161125c565b84529282019290820190600101611228565b505050505092915050565b600082601f83011261126c578081fd5b813567ffffffffffffffff811115611282578182fd5b611295601f8201601f19166020016119ee565b91508082528360208285010111156112ac57600080fd5b8060208401602084013760009082016020015292915050565b6000602082840312156112d6578081fd5b610f8483836111dd565b6000602082840312156112f1578081fd5b8151610f8481611a35565b600080600060608486031215611310578182fd5b833567ffffffffffffffff80821115611327578384fd5b6113338783880161125c565b9450602091508186013581811115611349578485fd5b8601601f81018813611359578485fd5b803561136761121282611a15565b81815284810190838601868402850187018c1015611383578889fd5b8894505b838510156113ad576113998c826111dd565b835260019490940193918601918601611387565b50965050505060408601359150808211156113c6578283fd5b506113d3868287016111f4565b9150509250925092565b6000602082840312156113ee578081fd5b5035919050565b60008060408385031215611407578182fd5b82359150602083013561141981611a35565b809150509250929050565b60008060408385031215611436578182fd5b50508035926020909101359150565b60008151808452815b8181101561146a5760208185018101518683018201520161144e565b8181111561147b5782602083870101525b50601f01601f19169290920160200192915050565b60008083546001808216600081146114af57600181146114c6576114f5565b60ff198316865260028304607f16860193506114f5565b600283048786526020808720875b838110156114ed5781548a8201529085019082016114d4565b505050860193505b509195945050505050565b6001600160a01b0391909116815260200190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b6001600160a01b03929092168252602082015260400190565b602080825260129082015271536166654d6174683a204f766572666c6f7760701b604082015260600190565b60208082526025908201527f4f7074696e6f476f763a204d6178696d756d206475726174696f6e2069732031604082015264103cb2b0b960d91b606082015260800190565b602080825260139082015272536166654d6174683a20556e646572666c6f7760681b604082015260600190565b60208082526026908201527f4f7074696e6f476f763a204e6f7420656e6f75676820766f74657320746f2070604082015265726f706f736560d01b606082015260800190565b6020808252601290820152710536166654d6174683a2044697620627920360741b604082015260600190565b60208082526018908201527f4f7074696e6f476f763a20566f74696e6720636c6f7365640000000000000000604082015260600190565b60208082526026908201527f4f7074696e6f476f763a204e6f7420656e6f75676820766f74657320746f206560408201526578656375746560d01b606082015260800190565b6020808252601b908201527f4f7074696e6f476f763a20457865637574696f6e206661696c65640000000000604082015260600190565b60208082526018908201527f4f7074696e6f476f763a20416c726561647920766f7465640000000000000000604082015260600190565b6020808252601e908201527f4f7074696e6f476f763a207472616e7366657246726f6d206661696c65640000604082015260600190565b60208082526027908201527f4f7074696e6f476f763a205374616b696e6720706572696f64206e6f7420656e604082015266191959081e595d60ca1b606082015260800190565b6020808252601a908201527f4f7074696e6f476f763a207472616e73666572206661696c6564000000000000604082015260600190565b60208082526034908201527f4f7074696e6f476f763a206475726174696f6e2063616e6e6f7420656e64206260408201527365666f7265206578697374696e67207374616b6560601b606082015260800190565b90815260200190565b8681526001600160a01b038616602082015260c06040820181905260009061188890830187611445565b6060830195909552506080810192909252151560a0909101529392505050565b93845291151560208401526040830152606082015260800190565b6000868252602060a0818401526118dd60a0840188611445565b8381036040850152865180825282880191830190845b818110156119185783516001600160a01b0316835292840192918401916001016118f3565b505084810360608601528651808252838201925083810282018401848901865b8381101561196657601f19858403018652611954838351611445565b95870195925090860190600101611938565b505080955050505050508260808301529695505050505050565b93845260208401929092526040830152606082015260800190565b948552602085019390935260408401919091526060830152608082015260a00190565b968752602087019590955260408601939093526060850191909152608084015260a083015260c082015260e00190565b60405181810167ffffffffffffffff81118282101715611a0d57600080fd5b604052919050565b600067ffffffffffffffff821115611a2b578081fd5b5060209081020190565b80151581146111da57600080fdfea2646970667358221220feb41e1331136d8da046c61f6fe90d7a67abb54feb873207d26cfca216dfda9c64736f6c63430007010033"
    },
    "OptinoGov.sol:SafeMath":
    {
      "abi": "[]",
      "bin": "60566023600b82828239805160001a607314601657fe5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212201b124d257a4a56783b69267965881ef53ed391e05391dfdd72310f827c4445b064736f6c63430007010033"
    }
  },
  "version": "0.7.1+commit.f4a555be.Darwin.appleclang"
};
