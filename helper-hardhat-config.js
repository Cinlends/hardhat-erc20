const networkConfig = {
	// 不同链的 chainId 对应的配置
	31337: {
		name: "localhost",
	},
	11155111: {
		name: "sepolia",
	},
};

const developmentChains = ["hardhat", "localhost"];
const INITIAL_SUPPLY = 100;

module.exports = {
	networkConfig,
	developmentChains,
	INITIAL_SUPPLY,
};
