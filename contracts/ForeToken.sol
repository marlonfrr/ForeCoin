pragma solidity ^0.5.0;

contract ForeToken {

    uint256 public totalSupply;
    string public name = "Fore Token";
    string public symbol = "FRR";
    string public standard = "Fore Token v1.0";
    mapping(address=>uint256) public balanceOf;

    constructor (uint256 _initialSupply) public {
        balanceOf[msg.sender] = _initialSupply;
        totalSupply = _initialSupply;
        //allocate the initial supply
    }

    function transfer(address _to, uint256 _value) public returns (bool success) {
        require(balanceOf[msg.sender]>=_value);
    }
}