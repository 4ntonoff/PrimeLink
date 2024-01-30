## Endpoints

### Register

- **Endpoint:** `POST /auth/register`
- **Description:** Registers the user
- **Request Body (For email registration):**
  ```json
  [
    {
      "name": "John Doe",
      "email": "johndoe@gmail.com",
      "password": "qwerty"
    }
  ]
- **Request Body (For phone registration):**
  ```json
  [
    {
      "name": "John Doe",
      "phone": "+123456789",
      "password": "qwerty"
    }
  ]
- **Example Response:**
  ```json
  [
    {
	    "id": 2,
	    "createdAt": "2024-01-30T16:39:51.612Z",
	    "name": "John Doe",
	    "email": "johndoe@gmail.com", // or null
	    "phone": null, // or "+123456789"
	    "avatarUrl": null,
	    "token": "jwt_token"
    }
  ]

### Login

- **Endpoint:** `POST /auth/login`
- **Description:** Logs into the app
- **Request Body (For email authentification):**
  ```json
  [
    {
      "email": "johndoe@gmail.com",
      "password": "qwerty"
    }
  ]
- **Request Body (For phone authentification):**
  ```json
  [
    {
      "phone": "+123456789",
      "password": "qwerty"
    }
  ]
- **Example Response:**
  ```json
  [
    {
	    "id": 2,
	    "createdAt": "2024-01-30T16:39:51.612Z",
	    "name": "John Doe",
	    "email": "johndoe@gmail.com", // or null
	    "phone": null, // or "+123456789"
	    "avatarUrl": null,
	    "token": "jwt_token"
    }
  ]


