var Election = artifacts.require("./Election.sol");
var DappToken = artifacts.require("./DappToken.sol");

module.exports = function(deployer) {
    deployer.deploy(DappToken, 1000000).then(function() {
        console.log("in migration DappToken.address = ", DappToken.address)
        return deployer.deploy(Election, DappToken.address);

    });
};