var ForeToken = artifacts.require("./ForeToken.sol");

contract("ForeToken", function(accounts) {
  it("Sets the total supply upon deployment", function() {
    return ForeToken.deployed()
      .then(function(instance) {
        tokenInstance = instance;
        return tokenInstance.totalSupply();
      })
      .then(function(totalSupply) {
        assert.equal(
          totalSupply.toNumber(),
          10000000,
          "sets the total supply to 10,000.000"
        );
      });
  });
});
