const JorgienaToken = artifacts.require("JorgienaToken");
const EthSwap = artifacts.require("EthSwap");

module.exports = async function(deployer) {

    // Deploy Token
    await deployer.deploy(JorgienaToken);
    const token = await JorgienaToken.deployed();

    // Deploy EthSwap
    await deployer.deploy(EthSwap, token.address);
    const ethSwap = await EthSwap.deployed();

    //Transfer all tokens to EthSwap(1 million)
    await token.transfer(ethSwap.address, '1000000000000000000000000')

};
