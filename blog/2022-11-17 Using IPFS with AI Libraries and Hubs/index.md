---
authors: [richard]
tags: [Data Science, Web3, Machine Learning, IPFS, Ocean Protocol ]
---

The field of deep learning requires heavy amounts of storage. Machine learning datasets often reach into the 100s of GBs, and pre-trained model weights can be large too. Many datasets (like JFT-300M by Google) remain inaccessible to data scientists outside large organizations. Furthermore, open datasets can be scattered across many apps and websites, and require the user to follow a lengthy tutorial for download, setup and processing. 

<!--truncate-->

Decentralised storage solutions, such as the [Interplanetary File System (IPFS)](https://docs.ipfs.tech/concepts/what-is-ipfs/), have the potential to vastly reduce the costs incurred by data scientists for storing raw and processed versions of datasets, as well as model weights. Furthermore, data and model weights can be stored and accessed in a decentralized manner within communities. In future, the ability to distribute updates to datasets and models among participating nodes in a decentralized training or inference system may open up new use cases.

We noticed that there were few tools for interacting with IPFS in the language that data scientists are used to (i.e. Python), and that IPFS was not well integrated with existing AI libraries and hubs. We went about submitting a [grant proposal](https://github.com/filecoin-project/devgrants/issues/517) and won an impact [prize](https://twitter.com/AlgoveraAI/status/1585955346811564032) for one of our libraries. In this blog post, we give a brief of overview of our development work to integrate IPFS with AI libraries and hubs. For further reading, check out our paper on Decentralized Technologies for AI Hubs (accepted to the first NeurIPS workshop on Decentralization and Trustworthy Machine Learning in Web3), or our full report on [Libraries, Integrations and Hubs for Decentralized AI using IPFS](https://arxiv.org/abs/2210.16651)*.*

### **IPFSSpec (and HuggingFace)**

Filesystem Spec ([fsspec](https://twitter.com/AlgoveraAI/status/1585955346811564032)) is a project that provides a unified pythonic interface to local, remote and embedded file systems and bytes storage. It is used by HuggingFace, Pandas, and Dask. Previously, a solution for a read-only version of fsspec (called ipfsspec) existed. We implemented write functionality for ipfsspec, and re-implemented much of the read functionality. By doing so, read and write to IPFS is now supported by dependent libraries such as HuggingFace, Pandas, and Dask. You can check out the library [here](https://github.com/AlgoveraAI/ipfsspec). 

### **IPFSPy**

While ipfsspec has the advantage of being used by other data science libraries, it supports a limited set of functions such as cp, rm, cat and mkdir. Our [ipfspy](https://github.com/AlgoveraAI/ipfspy) library provides a thin wrapper around endpoints for the IPFS HTTP API, as well as Estuary and Pinata APIs. It incorporates the ipfsspec library while also providing the Python community with a wider set of functionalities for interacting with the various components of IPFS and Filecoin, such as MFS, UnixFS, DAG, Local Pinning, Remote Pinning, and Block uses. This makes it easier to build custom solutions on top of IPLD for data storage and loading for specific AI and ML use cases. In future, we think that re-implementing the functionality of the various building blocks of IPFS in Python (i.e. without using the IPFS HTTP API) would further improve customizability. 

### **IPFS in ActiveLoop Hub**

[Activeloop](https://www.activeloop.ai/) Hub is a repository for machine learning datasets and a library for efficient data streaming. The Hub introduces a data chunking mechanism (extending the Zarr format) to enable faster training of machine learning models, without requiring the data scientist to download large datasets locally. To enable the use of data streaming for the Web3 data science community, we integrated ipfpy within Activeloop Hub (see [here](https://github.com/AlgoveraAI/Hub)) to enable decentralized storage for ActiveLoop Hub datasets. The integration is fully interoperable with the existing Hub library and allows the user to select any IPFS Gateway supporting read/write functionality.

### **IPFS in Streamlit**

[Streamlit](https://streamlit.io/) is an open source library for building interactive AI apps in Python. Its main use case is allowing data scientists to quickly build and share demos of their ML models and it has been used extensively in open source AI communities. Streamlit is also integrated into HuggingFace Hub. However, Streamlit did not previously have support for Web3 functionality. We have integrated the Streamlit app framework with MetaMask, IPFS/Filecoin and Ocean Protocol, meaning that data science apps can now build on these Web3 components. You can check out the tools [here](https://github.com/AlgoveraAI/streamlit-metamask). For example, users can now interact with components (like buttons) to log in with their Web3 wallet, store assets on IPFS and run compute-over-data directly from Streamlit apps.

### **IPFS in Custom Notebook Environments**

Notebooks are one of the primary environments where data scientists perform exploratory data analysis (EDA) and build proof-of-concept workflows. The ipfsspec and ipfspy libaries can be used within notebook environments for interfacing with decentralized storage. In addition, we have created Jupyter Lab extensions to log in with Metamask, upload data to IPFS/Filecoin and publish assets to the Ocean marketplace through the frontend. You can check out the code [here](https://github.com/AlgoveraAI/jupyterlab_extensions).

### **IPFS in Ocean Marketplace**

The [Ocean Marketplace](https://market.oceanprotocol.com/) is an open source community marketplace for data, built on Ocean Protocol. It allows data providers to publish and monetize data assets. Most users store their assets on centralized storage such as Google Drive. As part of core tech grants for Ocean, we integrated storage using IPFS and Filecoin. 

### **IPFS in Algovera Metahub**

There are several existing AI Hubs for datasets, models, apps and other assets, such as HuggingFace Hub and ActiveLoop Hub. However, these platforms are centralized, which creates a certain set of trade offs. A number of decentralized technologies exist to mitigate some of the limitations 

IPFS and Filecoin allow users to store and retrieve assets using a peer-to-peer, rather than client-server, model. However, the discoverability of assets stored on IPFS is an issue. The Ocean Protocol marketplace facilitates ownership, monetization and discoverability of assets, although it has not been tightly integrated with storage solutions. 

[Metahub](https://metahub.algovera.ai/) is our implementation of an AI Hub that combines the best parts of IPFS and Ocean Protocol - and integrates with HuggingFace and ActiveLoop Hub - to create a Web3 AI marketplace where data scientists can use datasets and generate revenue from the algorithms that they develop. We also wrote scripts for scraping HuggingFace and ActiveLoop Hub datasets, downloading them, uploading to IPFS and publishing to the marketplace. 