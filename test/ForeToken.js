var ForeToken = artifacts.require("./ForeToken.sol");

contract("ForeToken", function(accounts) {
  var tokenInstance;

  it("Initializes the contract with the correct name", function() {
    return ForeToken.deployed()
      .then(function(instance) {
        tokenInstance = instance;
        return tokenInstance.name();
      })
      .then(function(name) {
        assert.equal(name, "Fore Token", "has the correct name");
        return tokenInstance.symbol();
      })
      .then(function(symbol) {
        assert.equal(symbol, "FRR", "has the correct symbol");
        return tokenInstance.standard();
      })
      .then(function(standard) {
        assert.equal(standard, "Fore Token v1.0", "has the correct standard");
      });
  });

  it("Sets the total supply upon deployment", function() {
    return ForeToken.deployed()
      .then(function(instance) {
        tokenInstance = instance;
        return tokenInstance.totalSupply();
      })
      .then(function(totalSupply) {
        assert.equal(
          totalSupply.toNumber(),
          1000000,
          "sets the total supply to 1,000.000"
        );
        return tokenInstance.balanceOf(accounts[0]);
      })
      .then(function(adminBalance) {
        assert.equal(
          adminBalance.toNumber(),
          1000000,
          "it allocates the initial supply to the admin account"
        );
      });
  });

  // it("transfers token ownership", function(instance) {
  //   return ForeToken.deployed().then(function(instance) {
  //     tokenInstance = instance;
  //   });
  // });
});
