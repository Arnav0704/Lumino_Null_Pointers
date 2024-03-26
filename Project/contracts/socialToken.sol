//SPDX-License-Identifier: Unlicensed

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract socialToken is ERC20 {
    address public owner;
    constructor() ERC20("Spark", "SPK") {
        owner = msg.sender;
        _mint(msg.sender, 100000000 * (10 ** uint256(decimals())));
    }
    function transferTokens(address _to, uint256 _amount) external onlyOwner{
        require(balanceOf(address(this)) >= _amount, "Insufficient contract balance");

        _transfer(address(this),_to, _amount);
        emit Transfer(address(this),_to, _amount);
    }
    modifier onlyOwner {
        require(msg.sender == owner,"Sender is not owner");
        _;
    }
}