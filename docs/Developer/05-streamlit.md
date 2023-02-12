# Streamlit Wallet Connect package

## 🏗 Installation

```bash
pip install streamlit-wallet-connect
```

## 📖 Docs

Import the `streamlit_wallet_connect` module and use the `wallet_connect` function to connect to a wallet or send transactions.

```python
from wallet_connect import wallet_connect
```
The `wallet_connect` function will have different behavior depending on the `label` passed to it.

Available functionality:
| Label | Description |
| --- | --- |
| `wallet` | Connect to a wallet |
| `send` | Send a transaction |

### Connect to Wallet Button

```python
connect_button = wallet_connect(label="wallet", key="wallet")
```

### Send Transaction Button

To send a transaction, change the `label` to `"send"`, other options can be changed freely.

```python
send_transaction = wallet_connect(label="send", key="send", message="Send Transaction", contract_address="ERC20_ADDRESS", amount="10", to_address="RECIPIENT_ADDRESS")
```
Note: you need to specify the `contract_address` (the address of the ERC20 token that you want to send) and the recipients wallet address in `to_address`.

### Lit Protocol Components

The `streamlit-wallet-connect` package now adds a number of extensions to enable decentralized Web3 authentication of your Streamlit apps, powered by [Lit Protocol](https://litprotocol.com/).

The first component is a login button that allows you to hide content of a Streamlit app unless the user wallet holds a specific NFT (e.g. a reputation badge from your community). The login button returns `True` if the authentication was successful, otherwise it will throw an error (you can also check the logs in the browser console).

```python
login_button = wallet_connect(
    label="login", 
    key="login", 
    message="Login", 
    auth_token_contract_address="NFT_CONTRACT_ADDRESS",
    chain_name="CHAIN_NAME", 
    contract_type="CONTRACT_TYPE",
    num_tokens="0"
    )
```

The `num_tokens` parameter sets the lower bound on the number of tokens that the user needs to hold to be authenticated. If you require the user to hold at least one token, set `num_tokens` to `"0"`.

| Supported chains |
| --- |
|`ethereum`|
|`polygon`|
|`fantom`|
|`xdai`|
|`bsc`|
|`arbitrum`|
|`avalanche`|
|`fuji`| 
|`harmony`|
|`kovan` |
`mumbai`| 
|`goerli`| 
|`ropsten`|
|`rinkeby`|
|`cronos`|
|`optimism`|
|`celo`|
|`aurora`|
|`eluvio`|
|`alfajores`|
|`xdc`| 
|`evmos`|
|`evmosTestnet`|


The `wallet_connect` function allows you to create Streamlit apps that require the user to hold a specific NFT (e.g. a reputation badge from your community). The button returns `True` if your wallet holds the specific NFT, otherwise it will throw an error (you can also check the logs in the browser console). Although we are using NFTs as the main example, you are not restricted to any single contract type, you can use any contract that implements the `balanceOf` function. Below is a list of the most common contract types you may want to use, these need to be specified in the `contract_type` parameter.

| Supported Contract Types|
|-|
|`ERC721`|
|`ERC1155`|
| `ERC20`|

Example
```python

login_button = wallet_connect(
    label="login", 
    key="login", 
    message="Login", 
    auth_token_contract_address="0x68085453B798adf9C09AD8861e0F0da96B908d81", 
    chain_name="polygon",
    contract_type="ERC1155",
    num_tokens="0"
    )

if login_button == True:
    st.write("Logged in!")
    # ...the rest of the Streamlit app
else:
    st.write("Not authorized to access this application.")
```

### Create ERC1155 tokens for Lit Protocol Access Control

If you want to allow users to buy access to your Streamlit apps, you can use Algovera's smart contracts to create an instance of an ERC1155 token with custom price and metadata that your users will be able to mint inside the app. To initialize a new ERC1155 token, specify a button with the `create_token` key. You'll also need to set the following parameters:

| Variable | Definition |
|-|-|
|`price`| Price of your access control NFT (in standard units of the selected blockchain)|
|`supply`| Supply of your access control NFT|
| `uri`| URL to your NFT's metadata (json format)|

Once you create your NFT, the button will return a `token_id` (also visible in the browser console). This will be the input of your final minting button, accessed with the `mint_and_login_algovera` key (you can delete the `create_token` button before publishing your Streamlit app).

Example token initialization
```python
button = wallet_connect(message="Create Token", label="create_token", key="create_token", price="0.01", supply=1000, uri="https://gateway.pinata.cloud/ipfs/QmZrFfBGmUmXYUVeTrKdKC1aFeBBEEXQPGhsJtX45GwCC5")
```

Say the token ID that gets returned from this function call is 28. Then in your final version of the Streamlit app, you would use:

Example token minting
```python
mint_button = wallet_connect(message="Login Algovera", label="mint_and_login_algovera", key="mint_and_login_algovera", price="0.01", token_id="28", chain_name="mumbai")

if mint_button == True:
    st.write("Logged in!")
else:
    st.write("Not authorized to access this application.")
```

The chains currently supported for initializing and minting your own access control NFT are `ethereum`, `polygon`, and `mumbai` (more will be added based on user requests/feedback).
