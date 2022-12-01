## **Install**

Currently, you need to install directly from source. Pip package is coming soon.

```
git clone https://github.com/AlgoveraAI/deHub.git
cd deHub && pip install -e .
```

## **How to use**

With dHub, you can create, browse and load datasets and algorithms. The source code can be viewed [here](https://github.com/AlgoveraAI/deHub).

### Create an algorithm

Imagine you are a data scientist that has an algorithm and model weights that you would like to monetize. The dHub library can be used to encrypt and upload the model weights to HuggingFace Hub, and create a token-gated algorithm on the Ocean marketplace to facilitate testing of the model.

```python
import dhub

weights_path = "netG.pth"
local_dir = '~/code/creations/algorithms/dcgan-cryptopunks'
algorithm_url = 'https://github.com/AlgoveraAI/creations/blob/main/algorithms/dcgan-cryptopunks/dcgan-cryptopunks-inference.py'

algorithm = dhub.create_algorithm(weights_path, local_dir, algorithm_url)
```

When dhub.create_algorithm is called, the model weights are encrypted. A repo is then created on HuggingFace and the encrypted weights are pushed to the repo. An algorithm is then published to the Ocean Marketplace that requires an access token to run. For example, tokens can be purchased through the Ocean marketplace [app](https://market.oceanprotocol.com/). You can see an example of a [model](https://huggingface.co/AlgoveraAI/dcgan-cryptopunks/tree/main) on HuggingFace Hub and [algorithm](https://market.oceanprotocol.com/asset/did:op:0D5Cb1a89b568c2Cf2A473F89394924B733A36Ed) on Ocean Protocol that were created using dHub.

### List datasets

Return a list of datasets available for a particular library in dHub. The options available are ‘ocean’, ‘hf-hub’ and ‘al-hub’. Use ‘ocean’ to explore datasets and algorithms on Ocean Protocol’s data marketplace. ‘hf-hub’ can be used to explore machine learning datasets and models for natural language processing on HuggingFace Hub. Finally, use ‘al-hub’ to browse computer vision datasets on ActiveLoop Hub.

```python
dhub.list_datasets('ocean')
```

### List algorithms

Return a list of algorithms or models available for a particular library in dHub.

```python
dhub.list_algorithms('ocean')
```

### Load a dataset

Load a dataset for a particular library in dHub.

```python
dataset = dhub.load_dataset("ocean:AlgoveraAI/cryptopunks")
```

### Load an algorithm

Load an algorithm for a particular library in dHub.

```python
import dhub

algorithm = dhub.load_algorithm("ocean:AlgoveraAI/dcgan-cryptopunks")
```

### Run Inference

If a user would like to test the model, they can use dhub.run_inference. This function acquires an access token using the user’s wallet (so the user should make sure that they own some ETH and OCEAN). The algorithm loads and decrypts the weights, before running inference of the model.

```python
result = dhub.run_inference(dataset, algorithm)
```