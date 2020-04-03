## **backend-coding-challenge**

In this project we have an app that list the trending languages in 30 days from github

### **Installation**

        npm install

### **Run the app**

        npm start

And the application in running by default on port 3000.

### **Endpoints**

- **get the trending languages**

  - **URL**

    `/github/trending-languages`

  - **Method:**

    `GET`

    * **Success Response:**

        * **Code:** 200 <br />
        * **Content:** `{ language-x : 12 }`

- **get the trending repositories by language**

  - **URL**

    `/github/trending-repositories/:language`

  - **Method:**

    `GET`

  - **Data Params**

    `language : string`

  - **Success Response:**

    - **Code:** 200 <br />
    - **Content:** `{"repositoriesCount": 10, repositories": []}`
