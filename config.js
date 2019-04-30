var api = 'http://206.189.124.145:44016';
var donationAddress = "PLearxtECBsKFLLeX3edPMEk4ncvZGkJQ7FpPyG3ADGtYbFj7FC5ELWXS2B7wRDfjwSqEwZVp7pwjbWCAhmGJp7z94TQzpNUkP";
var blockTargetInterval = 120;
var coinUnits = 100000000; //atomic units after the decimal place
var coinTotalSupply = 2100000000000000000; //atomic units
var coinDisplayDecimals = 2;
var symbol = 'ple';
var refreshDelay = 30000;
var networkStat = {
 "ple": [
	 ["plenteum.miner.care", "https://ple.miner.care"],
     ["crypto9coin.cf/ple", "https://crypto9coin.cf:44019"],
     ["ple.optimusblue.com", "http://ple.optimusblue.com:8117"],
     ["plenteum.virtopia.ca", "https://ple.virtopia.ca"],
     ["plenteum.clevery.xyz", "https://plenteum.clevery.xyz/api"],
     ["ple.llama.horse", "http://pool.llama.horse:44018"],
     ["the-miners.de/Plenteum", "http://173.212.249.18:8115"],
     ["plenteum.smartcoinpool.com", "https://plenteum.smartcoinpool.com/apiMerge"],
     ["ple.cryptocoins-digging.space", "https://ple.cryptocoins-digging.space:8119"],
	 ["cnpool.cc/ple/", "https://cnpool.cc/api/ple"],
	 ["xtncple.herominers.com", "https://xtncple.herominers.com/mapi"],
	 ["plenteum.herominers.com", "https://plenteum.herominers.com/mapi"],
	 ["fastpool.xyz/lokiple", "https://backup.fastpool.xyz:8177"],
	 ["hydra.xripx.com", "http://hydra.xripx.com:8998"],
	 ["tlrmple.merged.stx.nl", "https://tlrmple.merged.stx.nl/tlrmple-api"],
	 ["fastpool.xyz/ple/", "https://fastpool.xyz:8147/live_stats"],
	 ["plenteum.my-mining-pool.de", "https://apiplenteum.my-mining-pool.de/live_stats"]
 ]
};

var networkStat2 = {
    "ple": [
        ["ple.cryptopool.space", "https://ple.cryptopool.space/api"],
    ]
};