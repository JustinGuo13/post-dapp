import './App.css';
import { useState } from 'react';
import { ethers } from 'ethers';
import Crud from './artifacts/contracts/Crud.sol/Crud.json';

// Update with the contract address logged out to the CLI when it was deployed
const crudAddress = 'your-contract-address';

function App() {
	// store crud in local state
	const [crud, setCrudValue] = useState();

	// request access to the user's MetaMask account
	async function requestAccount() {
		await window.ethereum.request({ method: 'eth_requestAccounts' });
	}

	// call the smart contract, create a post
	async function createPost() {}

	// call the smart contract, read post title and content
	async function readPost() {}

	// call the smart contract, edit post title and content
	async function editPost() {}

	// call the smart contract, delete post
	async function deletePost() {}

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
