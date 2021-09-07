import './App.css';
import { useState } from 'react';
import { ethers } from 'ethers';
import Crud from './artifacts/contracts/Crud.sol/Crud.json';

// Update with the contract address logged out to the CLI when it was deployed
const crudAddress = 'your-contract-address';

function App() {
	// store crud in local state
	const [title, setTitle] = useState();
	const [content, setContent] = useState();

	// request access to the user's MetaMask account
	async function requestAccount() {
		await window.ethereum.request({ method: 'eth_requestAccounts' });
	}

	// call the smart contract, create a post
	async function createPost() {
		if (typeof window.ethereum !== 'undefined') {
			await requestAccount();
			const provider = new ethers.providers.Web3Provider(window.ethereum);
			console.log({ provider });
			const signer = provider.getSigner();
			const contract = new ethers.Contract(crudAddress, Crud.abi, signer);
			const transaction = await contract.createPost(title, content);
			await transaction.wait();
		}
	}

	// call the smart contract, read post title and content
	async function readPost() {
		if (typeof window.ethereum !== 'undefined') {
		}
	}

	// call the smart contract, edit post title and content
	async function editPost() {
		if (typeof window.ethereum !== 'undefined') {
		}
	}

	// call the smart contract, delete post
	async function deletePost() {
		if (typeof window.ethereum !== 'undefined') {
		}
	}

	return (
		<div className="App">
			<header className="App-header">
				<h1>Create Post</h1>
				<input onChange={(e) => setTitle(e.target.value)} placeholder="Set Title" />
				<input onChange={(e) => setContent(e.target.value)} placeholder="Set Content" />
				<button onClick={createPost}>Create Post</button>

				<h1>Read Post</h1>
			</header>
		</div>
	);
}

export default App;
