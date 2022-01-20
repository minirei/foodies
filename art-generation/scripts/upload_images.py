import requests
import base64
import json

# Settings
fileExtension = ".png"  # file extension of your images
mimeType = "image/png"
metaDataFileName = "/home/minrei/Projects/foodies/art-generation/output/metadata.json"  # metadata filename
apiKey = ""  # apiKey provided from the website
nftprojectid = "23444"  # project Id provided from the website
nftCount = 2500  # how many files to upload
# endpoint for uploading files
uploadURL = f'https://api.nft-maker.io/UploadNft/{apiKey}/{nftprojectid}'
log = []  # an array to save file upload logs, for detecting errors after the upload
rarityDict = {
    'Background': {},
    'Face': {},
    'Headgear': {},
    'Arms': {},
    'Hands': {},
    'Body': {},
    'Mouth': {},
    'Eyes': {},
}

# Foodies Metadata
# {
#   "721": {
#     "<policy_id>": {
#       "<asset_name>": {
#         "name": "<display_name_hashtag>",
#         "image": "<ipfs_link>",
#         "Project": "Foodies",
#         "headgear": "<headgear_type>",
#         "eyes": "<eyes_type>",
#         "mouth": "<mouth_type>",
#         "body": "<body_type>",
#         "hands": "<hands_type>",
#         "background": "<background_type>",
#         "face": "<face_type>",
#         "arms": "<arms_type>"
#       }
#     }
#   }
# }

with open(metaDataFileName) as f:
    metadata = json.load(f)
print("Metadata:", metaDataFileName, "read.")
print("Uploading to:", uploadURL)

for i in range(nftCount):
    Background = metadata[str(i)]['attributes'][0]['value']
    Face = metadata[str(i)]['attributes'][1]['value']
    Headgear = metadata[str(i)]['attributes'][2]['value']
    Arms = metadata[str(i)]['attributes'][3]['value']
    Hands = metadata[str(i)]['attributes'][4]['value']
    Body = metadata[str(i)]['attributes'][5]['value']
    Mouth = metadata[str(i)]['attributes'][6]['value']
    Eyes = metadata[str(i)]['attributes'][7]['value']

    j = i + 1
    if(j < 10):
        assetNumber = '000' + str(j)
    elif(j < 100):
        assetNumber = '00' + str(j)
    elif(j < 1000):
        assetNumber = '0' + str(j)
    else:
        assetNumber = str(j)

    displayName = 'Foodie #' + assetNumber

    # Save traits to dict
    if str(Background) in rarityDict['Background']:
        rarityDict['Background'][str(Background)] += 1
    else:
        rarityDict['Background'][str(Background)] = 1

    if str(Face) in rarityDict['Face']:
        rarityDict['Face'][str(Face)] += 1
    else:
        rarityDict['Face'][str(Face)] = 1

    if str(Headgear) in rarityDict['Headgear']:
        rarityDict['Headgear'][str(Headgear)] += 1
    else:
        rarityDict['Headgear'][str(Headgear)] = 1

    if str(Arms) in rarityDict['Arms']:
        rarityDict['Arms'][str(Arms)] += 1
    else:
        rarityDict['Arms'][str(Arms)] = 1

    if str(Hands) in rarityDict['Hands']:
        rarityDict['Hands'][str(Hands)] += 1
    else:
        rarityDict['Hands'][str(Hands)] = 1

    if str(Body) in rarityDict['Body']:
        rarityDict['Body'][str(Body)] += 1
    else:
        rarityDict['Body'][str(Body)] = 1

    if str(Mouth) in rarityDict['Mouth']:
        rarityDict['Mouth'][str(Mouth)] += 1
    else:
        rarityDict['Mouth'][str(Mouth)] = 1

    if str(Eyes) in rarityDict['Eyes']:
        rarityDict['Eyes'][str(Eyes)] += 1
    else:
        rarityDict['Eyes'][str(Eyes)] = 1

    # Read each file and convert to Base64 format.
    # Files are formatted as 0.png, 1.png ...
    file = f'{"/home/minrei/Projects/foodies/art-generation/output/"}{str(i)}{fileExtension}'
    with open(file, 'rb') as binary_file:
        binary_file_data = binary_file.read()
        base64_encoded_data = base64.b64encode(binary_file_data)
        base64_message = base64_encoded_data.decode('utf-8')

    # Set up parameters for POST request.
    params = {
        # If you set up a prefix in your project, you omit the prefix here, if not add prefix as well
        "assetName": assetNumber,
        "previewImageNft": {
            "mimetype": mimeType,
            "fileFromBase64": base64_message,
            "metadataPlaceholder": [
                {
                    "name": "background_type",
                    "value": Background
                },
                {
                    "name": "face_type",
                    "value": Face
                },
                {
                    "name": "headgear_type",
                    "value": Headgear
                },
                {
                    "name": "arms_type",
                    "value": Arms
                },
                {
                    "name": "hands_type",
                    "value": Hands
                },
                {
                    "name": "body_type",
                    "value": Body
                },
                {
                    "name": "mouth_type",
                    "value": Mouth
                },
                {
                    "name": "eyes_type",
                    "value": Eyes
                },
                {
                    "name": "display_name_hashtag",
                    "value": displayName
                }
            ]
        }
    }

    # Send HTTP Post request.
    headers = {'Content-Type': 'application/json'}
    try:
        r = requests.post(uploadURL, json=params)
        print(str(displayName) + ' : SUCCESS!')
        log.append(str(displayName) + ' : SUCCESS!')
    except:
        print(str(displayName) + ' : FAILED!')
        log.append(str(displayName) + ' : FAILED!')

# Print logs into file.
with open("log.txt", "w") as text_file:
    print(log, file=text_file)

with open('traitWeightsActual.json', 'w') as json_file:
    json.dump(rarityDict, json_file)
