var api = 'http://206.189.124.145:44016';
var donationAddress = "";
var blockTargetInterval = 120;
var coinUnits = 100000000; //atomic units after the decimal place
var coinTotalSupply = 2100000000000000000; //atoimic units
var coinDisplayDecimals = 2;
var symbol = 'ple';
var refreshDelay = 30000;
// pools stats by MainCoins
//["know.miningpool.gq/plenteum/", "http://ple.miningpool.gq:8197"],
var networkStat = {
 "ple": [
	 ["plenteum.miner.care", "https://ple.miner.care"],
     ["crypto9coin.cf/ple", "https://crypto9coin.cf:44019"],
     ["ple.optimusblue.com", "http://ple.optimusblue.com:8117"],
     ["plenteum.virtopia.ca", "https://ple.virtopia.ca"],
     ["plenteum.clevery.xyz", "https://plenteum.clevery.xyz/api/"],
     ["ple.llama.horse", "http://pool.llama.horse:44018"],
     ["the-miners.de/Plenteum", "http://173.212.249.18:8115"],
	 ["youpool.io/PLE", "http://144.202.120.143:8111"],
     ["plenteum.pool.private-locker.com", "https://plenteum.pool.private-locker.com/api/"],
     ["plenteum.smartcoinpool.com", "https://plenteum.smartcoinpool.com:5140"]
 ]
};

var networkStat2 = {
    "ple": [
        [""]
    ]
};