//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

import "hardhat/console.sol";

contract Crud{
	

	struct Post{
		uint id;
		string title;
		string content;
	}

	Post[] public post;

	address private owner;
	uint public nextID = 1; 

	modifier isOwner(){
		require(msg.sender == owner, "Caller is not owner");
		_;
	}


	constructor() {
        owner = msg.sender;
    }

	function find(uint _id) view internal returns(uint){
		for(uint i =0; i < post.length; i++){
			if(post[i].id == _id){
				return i;
			}
		}
		revert('User does not exist');
	}

	function createPost(string memory _title, string memory _content) public isOwner {
		post.push(Post(nextID,_title,_content));
		nextID++;
	}

	function readPost(uint _id) view public isOwner returns (uint, string memory, string memory){
		uint i = find(_id);
		return(post[i].id, post[i].title, post[i].content);
	}

	function editPost(uint _id, string memory _title, string memory _content) public isOwner {
		uint i = find(_id);
		post[i].title = _title;
		post[i].content = _content;
	}

	

	function deletePost(uint _id) public isOwner {
		uint i = find(_id);
		delete post[i];
	}
	
}