var api = 'http://197.81.192.73:44016';
var donationAddress = "";
var blockTargetInterval = 120;
var coinUnits = 100000000; //atomic units after the decimal place
var coinTotalSupply = 2100000000000000000; //atoimic units
var coinDisplayDecimals = 2;
var symbol = 'ple';
var refreshDelay = 30000;
// pools stats by MainCoins
var networkStat = {
 "ple": [
	["plenteum.miner.care", "http://85.216.148.43:8110"],
    ["crypto9coin.cf/ple", "https://crypto9coin.cf:44019"],
    ["getpool.org/ple", "https://api.getpool.org/rpc/ple/"]
 ]
};

var networkStat2 = {
    "ple": [
        [""]
    ]
};