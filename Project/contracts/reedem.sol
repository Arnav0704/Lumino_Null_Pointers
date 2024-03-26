//SPDX-License-Identifier: Unlicensed

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract redeemToken {
    IERC20 _token;
    constructor(address token) {
        _token = IERC20(token);
    }
    function redeem(uint256 amount) external payable{
        
    }
}