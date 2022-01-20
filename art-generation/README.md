# Foodies
- `conda activate foodies_env`

## To-do
- add key id in `verified_traits.json` output

## How to Use
1. Run `nft-generate --save-config` to generate png outputs & metadata.json in `/output`
2. Run `verify_metadata.py` to ensure no duplicates in `metadata.json`
    - outputs: `verified_traits.json` & `duplicated_traits.json`
3. Run `upload_images.py` to format metadata & upload onto nftmakerpro
    - output: rarity json saved in `traitWeightsActual.json`

## Things that have to be done
- Metadata:
    1. change "Bald" headgear trait to "None"
    2. remove "Face" from spaghetti, rice, bread, veggimates Faces

## Order
From top to bottom layer: 
- eyes
- mouth
- body
- hands
- arms
- headgear
- face
- background

## Metadata
filename: "Foodies #00001.png"
    - tokenname: Foodies00001
    - displayname: Foodies #00001
metadata: .metadataplaceholder


https://github.com/xpheredefi/python-nft-tools
https://github.com/NotLuksus/nft-art-generator