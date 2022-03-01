# Algovera JupyterLab Library

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

`app.ocean.buy_and_download(did: str, pool_address: str)`

- buy and download a dataset from the Ocean Market
- requires the dataset DID and pool address

`app.ocean.c2d(dataset_did: str, algorithm_did: str)`

- run a compute to data job from Ocean Market
- buys a datatoken for the dataset and algorithm for access
- returns the result of the c2d
