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
	 ["45.199.183.128","http://45.199.183.128:8117"],
     ["ple.cnpool.vip", "https://www.cnpool.vip:9249"],
     ["plenteum.clevery.xyz", "https://plenteum.clevery.xyz/api/"]
 ]
};

var networkStat2 = {
    "ple": [
        [""]
    ]
};