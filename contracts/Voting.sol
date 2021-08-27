//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

contract Voting {
	// Variables
	struct Vote{
		address voterAddress;
		bool choice;
	}

	struct Voter{
		string voterName;
		bool voted;
	}

	uint private countResult = 0;
	uint public finalResult = 0;
	uint public totalVoter = 0;
	uint public totalVote = 0;

	address public ballotOfficialAddress;
	string public bollotOfficialName;
	string public proposal;

	mapping(uint => Vote) private votes;
	mapping(address => Voter) public voterRegister;

	enum State{Created, Voting, Ended}
	State public state;

	// Modifiers

	// Events

	// Functions

	constructor() {

	}

	function addVoter() {

	}

	function startVote() {

	}

	function doVote() {

	}

	function endVote() {
		
	}
}
