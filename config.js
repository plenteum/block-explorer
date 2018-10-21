var api = 'http://142.93.132.203:44016';
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
	 ["plenteum.miner.care", "http://85.216.148.43:8110"],
     ["crypto9coin.cf/ple", "https://crypto9coin.cf:44019"],
     ["getpool.org/ple", "https://api.getpool.org/rpc/ple/"],
     ["ple.optimusblue.com", "http://ple.optimusblue.com:8117"],
     ["plenteum.virtopia.ca", "https://ple.virtopia.ca"],
     ["ple.cnpool.vip", "https://www.cnpool.vip:9249"],
     ["plenteum.clevery.xyz", "https://plenteum.clevery.xyz/api/"],
	 ["plenteumpool.xyz", "https://plenteumpool.xyz/api"],
     ["ple.llama.horse", "http://pool.llama.horse:44018"],
     ["the-miners.de/plenteum", "http://173.212.249.18:8112"],
     ["ple.cnhub.de", "http://ple.cnhub.de:18117"]
 ]
};

var networkStat2 = {
    "ple": [
        [""]
    ]
};