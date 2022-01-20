import json

metaDataFileName = "/home/minrei/Projects/foodies/art-generation/output/metadata.json"  # metadata filename

seen = {}
total_unique = 0
duplicates = []
with open(metaDataFileName) as f:
    all_metadata = json.load(f)
print("metadata uploaded")

for i in range(len(all_metadata)):
    metadata = all_metadata[str(i)]
    attributes = metadata["attributes"]

    # parse attributes to allow it to be hashed
    attributes = str(attributes)

    if attributes not in seen:
        seen[attributes] = 1
        total_unique += 1
    else: 
        seen[attributes] += 1
        duplicates.append(metadata)

with open('verified_traits.json', 'w') as json_file:
    json.dump(seen, json_file)

with open('duplicated_traits.json', 'w') as json_file:
    json.dump(duplicates, json_file)

print("total amount checked: ", len(all_metadata))
print("total unique nfts: ", total_unique)
print("discrepancy: ", len(all_metadata) - total_unique)