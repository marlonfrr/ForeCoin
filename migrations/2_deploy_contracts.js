const ForeToken = artifacts.require("./ForeToken.sol");

module.exports = function(deployer) {
  deployer.deploy(ForeToken, 1000000);
};
