//SPDX-License-Identifier: Unlicensed

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract PostOwner {
    struct Post{
        address owner;
        uint256 cost;
        bool onSale;
    }
    mapping(uint256 => Post) public posts;
    IERC20 _token;
    
    event PostCreated(uint256 postId, Post post);
    event OwnershipTransferred(uint256 postId, address previousOwner, address newOwner);

    constructor(address token) {
        _token = IERC20(token);
    }
    
    function createPost(uint256 _postId, bool _onSale ,uint256 _cost) external {
        posts[_postId] = Post(msg.sender,_cost,_onSale);
        emit PostCreated(_postId, Post(msg.sender,_cost,_onSale));
    }

    function transferOwnership(uint256 _postId) external {
        Post storage currPost = posts[_postId];
        require(currPost.onSale, "Post is not on sale");
        require(currPost.owner != address(0), "Invalid post ID");
        require(currPost.owner != msg.sender, "Cannot transfer ownership to the same owner");

        uint256 tokenAmount = currPost.cost;
        require(_token.balanceOf(msg.sender)>=currPost.cost,"Insufficient balance");
        require(_token.approve(address(this), currPost.cost), "Token approval failed");
        require(_token.transferFrom(msg.sender, currPost.owner, tokenAmount), "Token transfer failed");

        posts[_postId] = Post(msg.sender, 0, false);

        emit OwnershipTransferred(_postId, currPost.owner, msg.sender);
    }

    function modifyPost(uint256 _postId, uint256 _cost) external{
        require(msg.sender==posts[_postId].owner,"Not the owner");
        posts[_postId].onSale = true;
        posts[_postId].cost = _cost; 
    }
}