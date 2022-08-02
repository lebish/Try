# GetResponse
API controllers to providing info for 'get response',

base url http://localhost:8080/api.

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


<img src="https://user-images.githubusercontent.com/109727432/182297124-c4b74c03-804c-4738-99ca-7232b61ee4fa.png" data-canonical-src="https://user-images.githubusercontent.com/109727432/182297124-c4b74c03-804c-4738-99ca-7232b61ee4fa.png" width="350" height="200" align="right"  />

<img src="https://user-images.githubusercontent.com/109727432/182299947-996a878e-9a77-4d80-b53d-c03a67ff63c2.png" data-canonical-src="https://user-images.githubusercontent.com/109727432/182299947-996a878e-9a77-4d80-b53d-c03a67ff63c2.png" width="350" height="200" align="right"  />


## sign in 

**post** `/auth`


heders:
- `Content-Type: application/json`

fields:
- *email string
- *password  string


<img src="https://user-images.githubusercontent.com/109727432/182302279-95d3d888-f266-4924-8840-4ea95800e222.png" data-canonical-src="https://user-images.githubusercontent.com/109727432/182302279-95d3d888-f266-4924-8840-4ea95800e222.png" width="350" height="200" align="right"  />

<img src="https://user-images.githubusercontent.com/109727432/182302488-1cdc2a5e-9c78-49d8-9799-0831b1678077.png" data-canonical-src="https://user-images.githubusercontent.com/109727432/182302488-1cdc2a5e-9c78-49d8-9799-0831b1678077.png" width="350" height="200" align="right"  />


## get balance 'loyalty points' for every member 

**get** `/member/loyaltyPoints`


heders:
- `Content-Type: application/json`
- `authorization: {accessToken}` the accessToken you get by sign in 

fields:


<img src="https://user-images.githubusercontent.com/109727432/182303894-8f8c32e6-5db2-43d3-a2a9-e57eb986b5e3.png" data-canonical-src="https://user-images.githubusercontent.com/109727432/182303894-8f8c32e6-5db2-43d3-a2a9-e57eb986b5e3.png" width="350" height="200" align="right"  />






