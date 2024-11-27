async function main() {
    const [deployer] = await ethers.getSigners();

    console.log(`Deploying contracts with the account: ${deployer.address}`);

    // Get the contract factory
    const ToDoList = await ethers.getContractFactory("ToDoList");

    // Deploy the contract
    const toDoList = await ToDoList.deploy();

    // Wait for the deployment transaction to be mined
    await toDoList.waitForDeployment();

    console.log(`ToDoList deployed to: ${toDoList.target}`);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
