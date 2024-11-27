const { ethers } = require("hardhat");

describe("ToDoList Contract", function () {
  it("Should deploy the contract and allow task creation and management", async function () {
    const ToDoList = await ethers.getContractFactory("ToDoList");
    const todoList = await ToDoList.deploy();
    await todoList.waitForDeployment();

    console.log("ToDoList contract deployed at:", todoList.target);

    //Example test for contract functionality, should be replaced with your own logic
    //For testing specific functions or states
  });
});

