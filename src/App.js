import './App.css';
import { useState } from 'react';
import { ethers } from 'ethers';
import Crud from './artifacts/contracts/Crud.sol/Crud.json';

// Update with the contract address logged out to the CLI when it was deployed
const crudAddress = '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512';

function App() {
	// store crud in local state
	const [title, setTitle] = useState();
	const [content, setContent] = useState();
	const [id, setId] = useState();

	// request access to the user's MetaMask account
	async function requestAccount() {
		await window.ethereum.request({ method: 'eth_requestAccounts' });
	}

	// call the smart contract, create a post
	async function createPost() {
		if (!title && !content) return;
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
		//fix
		if (typeof window.ethereum !== 'undefined') {
			await requestAccount();
			const provider = new ethers.providers.Web3Provider(window.ethereum);
			console.log({ provider });
			const signer = provider.getSigner();
			const contract = new ethers.Contract(crudAddress, Crud.abi, signer);
			const transaction = await contract.readPost(id);
			console.log(id, title, content);
			await transaction.wait();
		}
	}

	// call the smart contract, edit post title and content
	async function editPost() {
		if (!title && !content) return;
		if (typeof window.ethereum !== 'undefined') {
			await requestAccount();
			const provider = new ethers.providers.Web3Provider(window.ethereum);
			console.log({ provider });
			const signer = provider.getSigner();
			const contract = new ethers.Contract(crudAddress, Crud.abi, signer);
			const transaction = await contract.editPost(id, title, content);
			console.log(id, title, content);
			await transaction.wait();
		}
	}

	// call the smart contract, delete post
	async function deletePost() {
		if (typeof window.ethereum !== 'undefined') {
			await requestAccount();
			const provider = new ethers.providers.Web3Provider(window.ethereum);
			console.log({ provider });
			const signer = provider.getSigner();
			const contract = new ethers.Contract(crudAddress, Crud.abi, signer);
			const transaction = await contract.deletePost(id);
			console.log(id, title, content);
			await transaction.wait();
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
				<input onChange={(e) => setId(e.target.value)} placeholder="Choose Post ID" />
				<button onClick={readPost}>Read Post</button>

				<h1>Edit Post</h1>
				<input onChange={(e) => setId(e.target.value)} placeholder="Choose Post ID" />
				<input onChange={(e) => setTitle(e.target.value)} placeholder="Edit Title" />
				<input onChange={(e) => setContent(e.target.value)} placeholder="Edit Content" />
				<button onClick={editPost}>Edit Post</button>

				<h1>Delete Post</h1>
				<input
					onChange={(e) => setId(e.target.value)}
					placeholder="Choose Post ID to delete"
				/>
				<button onClick={deletePost}>Delete Post</button>
			</header>
		</div>
	);
}

export default App;
