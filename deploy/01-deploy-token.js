const { network } = require("hardhat");
const { developmentChains, INITIAL_SUPPLY } = require("../helper-hardhat-config");
const { verify } = require("../utils/verify");

module.exports = async function ({ getNamedAccounts, deployments }) {
	const { deploy, log } = deployments;
	const { deployer } = await getNamedAccounts();
	const token = await deploy("OurToken", {
		from: deployer,
		args: [INITIAL_SUPPLY],
		log: true,
	});
	log(`OurToken deployed at ${token.address}`);
	if (!developmentChains.includes(network.name) && process.env.ETHER_SCAN_API_KEY) {
		await verify(token.address, [INITIAL_SUPPLY]);
	}
};

module.exports.tags = ["all", "token"];
