# GetResponse
API controllers to provide info for 'get response',

base url http://api.leibish.com/api.

> **Note**
>required fields us marked with *.

## sign up 

**post** `/api_user`


heders:
- `Content-Type: application/json`

fields:
- *firstName string  
- *lastName  string
- *email string
- *password  string


<img src="https://user-images.githubusercontent.com/109727432/182322839-e09e9e6b-17d4-4309-813c-dc46cc52a8b9.png" data-canonical-src="https://user-images.githubusercontent.com/109727432/182322839-e09e9e6b-17d4-4309-813c-dc46cc52a8b9.png" width="350" height="200"  />

<img src="https://user-images.githubusercontent.com/109727432/182299947-996a878e-9a77-4d80-b53d-c03a67ff63c2.png" data-canonical-src="https://user-images.githubusercontent.com/109727432/182299947-996a878e-9a77-4d80-b53d-c03a67ff63c2.png" width="350" height="200"   />


## sign in 

**post** `/auth`


heders:
- `Content-Type: application/json`

fields:
- *email string
- *password  string


<img src="https://user-images.githubusercontent.com/109727432/182302279-95d3d888-f266-4924-8840-4ea95800e222.png" data-canonical-src="https://user-images.githubusercontent.com/109727432/182302279-95d3d888-f266-4924-8840-4ea95800e222.png" width="350" height="200"  />

<img src="https://user-images.githubusercontent.com/109727432/182302488-1cdc2a5e-9c78-49d8-9799-0831b1678077.png" data-canonical-src="https://user-images.githubusercontent.com/109727432/182302488-1cdc2a5e-9c78-49d8-9799-0831b1678077.png" width="350" height="200"   />


## get balance 'loyalty points' for every member 

**get** `/member/loyaltyPoints`


heders:
- `Content-Type: application/json`
- `authorization: {accessToken}` the accessToken you get by sign in 

fields:

<img src="https://user-images.githubusercontent.com/109727432/183834968-89e7c64f-1c19-4328-b900-78d829304a62.png" data-canonical-src="https://user-images.githubusercontent.com/109727432/183834968-89e7c64f-1c19-4328-b900-78d829304a62.png" width="350" height="200"  />


