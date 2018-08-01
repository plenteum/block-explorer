# Plenteum-Blockchain-Explorer
Block explorer for Plenteum CryptoNote based cryptocurrency.

#### Installation

1) It takes data from daemon plenteumd. It should be accessible from the Internet. Run plenteumd with open port as follows:
```bash
./Plenteumd --enable-cors="*" --enable_blockexplorer --rpc-bind-ip=0.0.0.0 --rpc-bind-port=44016
```
2) Just upload to your website and change 'api' variable in config.js to point to your daemon.


### Development
Devs:
    @devopsralf

### Note
Forked from Turtlecoin Block Explorer
A lot of this code is from the great Karbovanets/Karbowanec-Blockchain-Explorer
