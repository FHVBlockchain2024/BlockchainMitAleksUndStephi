# ToDoList Smart Contract

This project is a simple and interactive smart contract built with Solidity that demonstrates a basic task management system. The contract allows users to create, view, and toggle the completion status of tasks. It is designed for educational and practical purposes to explore Solidity programming and blockchain development.

---

## Features

- **Task Creation**: Users can create new tasks with a unique ID and descriptive content.
- **Task Management**: Users can toggle the completion status of tasks (mark them as completed or incomplete).
- **Event Emission**: The contract emits events when tasks are created or updated, allowing easy integration with frontend applications.

---

## Prerequisites

- **Node.js**: Ensure Node.js is installed on your system.
- **Hardhat**: Install Hardhat by running `npm install --save-dev hardhat`.
- **Ganache or Sepolia Testnet**: Use Ganache for local testing or Sepolia for live testnet deployment and interaction.

---

## Contract Overview
### Contract Address

- **Sepolia**
0x37Aee56e6af0bd886b957452b348cC4AF94Dc251

---

## Key Functions

1. **`createTask(string memory _content)`**
   - Allows users to create a new task with specific content.
   - Emits a `TaskCreated` event with the task ID, content, and default completion status (`false`).

2. **`toggleTask(uint _id)`**
   - Toggles the completion status of a task (e.g., mark as completed or incomplete).
   - Emits a `TaskCompleted` event indicating the new status.

3. **`tasks(uint _id)`**
   - Returns details about a specific task, including:
     - `id`: The unique identifier of the task.
     - `content`: The task's descriptive text.
     - `completed`: The task's completion status.

---

## Deployment

---

### Clone the Repository

    git clone https://github.com/RocketSteph/BlockchainMitAleksUndStephi
    cd <repository-directory>

---

### Install Dependencies:

    npm install

---

### Create .env:
    # To export your private key from Metamask, open Metamask and
    # go to Account Details > Export Private Key
    # Beware: NEVER put real Ether into testing accounts
    PRIVATE_KEY="YOUR_PRIVATE_KEY"
 
    # Go to https://infura.io, sign up, create a new API key
    # in its dashboard, and add it to the configuration variables
    INFURA_API_KEY="YOUR_API_KEY"

---

### Deploy the contract

1. **`Ganache`**
    - npx hardhat run .\scripts\deploy.js --network ganache
2. **`Sepolia`**
    - npx hardhat run .\scripts\deploy.js --network sepolia

---

## Testing

---

### Via Hardhat Console
1. **`Start the Hardhat console`**
    - npx hardhat console --network sepolia

2. **`Interact with the contract`**
    const contract = await ethers.getContractAt("ToDoList", "<deployed-contract-address>");
    #### Create a new task
    - await contract.createTask("Learn Solidity");

    #### Get task details
    - const task = await contract.tasks(1);

    #### Toggle task completion
    - await contract.toggleTask(1);

---

## Repository Structure
    contracts/: Contains the Solidity smart contract.
    scripts/: Deployment script for the contract.
    test/: Basic test cases for the contract.
    artifacts/ and cache/: Auto-generated directories by Hardhat for build artifacts and cached files.

---

## Documentation

    This contract is documented within the code. Refer to the comments for a deeper understanding of the logic and structure. You can also extend this contract to support additional features, such as task deadlines or priority levels.

---