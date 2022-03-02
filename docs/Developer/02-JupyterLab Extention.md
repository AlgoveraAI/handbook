# Algovera Jupyter Lab Library

The Algovera library is used to connect your Jupyter Lab instance with your Metamask wallet and allow you to easily connect with Web3 data and AI services.

## Getting started

```
from algovera import JupyterFrontEnd

app = JupyterFrontEnd()
```

## Available functions

`app.commands.execute('connect_wallet')`

- prompt a MetaMask connection (can also be accessed from the Jupyter Lab menu)

`app.commands.execute('send_ocean')`

- send Ocean to a test wallet (required for interacting with Ocean Market)
- prompts a MetaMask signature

`app.ocean.check_wallet()`

- check the ETH and OCEAN balances in the environment test wallet

`app.ocean.check_dt_wallet(did: str, pool_address: str)`

- check the balance of a specific datatoken in the environment test wallet

`app.ocean.buy_dt(did: str, pool_address: str)`

- buy a datatoken with the environment test wallet

`app.ocean.buy_at(did: str, pool_address: str)`

- buy an algorithm token with the environment test wallet

`app.ocean.buy_and_download(did: str, pool_address: str)`

- buy and download a dataset from the Ocean Market
- requires the dataset DID and pool address

`app.ocean.c2d(dataset_did: str, algorithm_did: str)`

- run a compute to data job from Ocean Market
- buys a datatoken for the dataset and algorithm for access
- returns the result of the c2d