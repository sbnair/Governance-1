pragma solidity ^0.7.0;

// Use prefix "./" normally and "https://github.com/ogDAO/Governance/blob/master/contracts/" in Remix
import "./Permissioned.sol";
import "./OGTokenInterface.sol";


/// @notice Optino Governance Token = ERC20 + mint + burn. (c) The Optino Project 2020
// SPDX-License-Identifier: GPLv2
contract OGToken is OGTokenInterface, Permissioned {
    using SafeMath for uint;

    string _symbol;
    string  _name;
    uint8 _decimals;
    uint _totalSupply;
    mapping(address => uint) balances;

    mapping(address => mapping(address => uint)) allowed;
    uint public cap;
    bool public freezeCap;


    event CapUpdated(uint256 cap, bool freezeCap);
    event LogInfo(string topic, uint number, bytes32 data, string note, address addr);

    constructor(string memory symbol_, string memory name_, uint8 decimals_, address tokenOwner, uint initialSupply) {
        initPermissioned(msg.sender);
        _symbol = symbol_;
        _name = name_;
        _decimals = decimals_;
        balances[tokenOwner] = initialSupply;
        _totalSupply = initialSupply;
        emit Transfer(address(0), tokenOwner, _totalSupply);
    }
    function symbol() override external view returns (string memory) {
        return _symbol;
    }
    function name() override external view returns (string memory) {
        return _name;
    }
    function decimals() override external view returns (uint8) {
        return _decimals;
    }
    function totalSupply() override external view returns (uint) {
        return _totalSupply.sub(balances[address(0)]);
    }
    function balanceOf(address tokenOwner) override external view returns (uint balance) {
        return balances[tokenOwner];
    }
    function transfer(address to, uint tokens) override external returns (bool success) {
        balances[msg.sender] = balances[msg.sender].sub(tokens);
        balances[to] = balances[to].add(tokens);
        emit Transfer(msg.sender, to, tokens);
        return true;
    }
    function approve(address spender, uint tokens) override external returns (bool success) {
        allowed[msg.sender][spender] = tokens;
        emit Approval(msg.sender, spender, tokens);
        return true;
    }
    function transferFrom(address from, address to, uint tokens) override external returns (bool success) {
        balances[from] = balances[from].sub(tokens);
        allowed[from][msg.sender] = allowed[from][msg.sender].sub(tokens);
        balances[to] = balances[to].add(tokens);
        emit Transfer(from, to, tokens);
        return true;
    }
    function allowance(address tokenOwner, address spender) override external view returns (uint remaining) {
        return allowed[tokenOwner][spender];
    }

    function setCap(uint _cap, bool _freezeCap) external onlyOwner {
        require(!freezeCap, "Cap frozen");
        (cap, freezeCap) = (_cap, _freezeCap);
        emit CapUpdated(cap, freezeCap);
    }

    function mint(address tokenOwner, uint tokens) override external permitted(ROLE_MINTER, tokens) returns (bool success) {
        require(cap == 0 || _totalSupply + tokens <= cap, "Cap exceeded");
        balances[tokenOwner] = balances[tokenOwner].add(tokens);
        _totalSupply = _totalSupply.add(tokens);
        emit Transfer(address(0), tokenOwner, tokens);
        return true;
    }
    function burn(uint tokens) override external returns (bool success) {
        balances[msg.sender] = balances[msg.sender].sub(tokens);
        _totalSupply = _totalSupply.sub(tokens);
        emit Transfer(msg.sender, address(0), tokens);
        return true;
    }
}
