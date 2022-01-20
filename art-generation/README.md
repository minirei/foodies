# Foodies
- `conda activate foodies_env`

## How to Use
1. Run `nft-generate --save-config` to generate png outputs & metadata.json in `/output`
2. Run `verify_metadata.py` to ensure no duplicates in `metadata.json`
    - outputs: `verified_traits.json` & `duplicated_traits.json`
3. Run `upload_images.py` to format metadata & upload onto nftmakerpro
    - output: rarity json saved in `traitWeightsActual.json`

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