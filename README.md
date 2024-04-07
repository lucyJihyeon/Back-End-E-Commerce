# Back-End-E-Commerce

## Description
Backend E commerce is a back-end application for an e-commerce website. This application provides endpoints for managing categories, products, and tags in the database of the e-commerce website. an user can seed their own data using POST method for each of the tables, or seed the given data. Also, it allows for CRUD (Creation, Read, Update, Delete) operations on categories, products, and tags to provide a robust backend for an e-commerce website. 


## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies-Used](#technologies-used)
- [Contribution](#contribution)
- [Preview](#preview)

## Installation 
To install necessary dependencies, run following command:
```
npm i

```
To seed all of the given data to the database, run following command:
```
node ./seeds/index.js
```

## Usage
1. start the application by running :
```
node server.js
```
2. explore the application by sending a different type of HTTP requests 
    - GET method to retrieve data
    - POST method to create data
    - PUT method to update data
    - Delete method to remove data

## Features

## Data Management
### User Story
As a user,
I WANT TO be able to create, update, and delete categories 
SO THAT I can easily organize products neatly.

### Accepted Criteria
- When I send a GET request to the API endpoint `api/categories`, `api/tags`,`api/products`
- Then I am presented with all of the data from the corresponding table
- When I send a GET request to the API endpoint `api/categories/:id`, `api/tags/:id`, `api/products/:id`
- Then I am presented with one set of data with the matching id value from the correspoinding table
- When I send a PUT request to the API endpoint `api/categories/:id`, `api/tags/:id`, `api/products/:id` with the record I want to change to,
- Then the record is updated. 
- When I send a POST request to the API endpoint `api/categories`, `api/tags`,`api/products` with all the necessary datas
- Then the the data is created in the database
- When I send a DELETE request to the API endpoint `api/categories/:id`, `api/tags/:id`, `api/products/:id` 
- Then the corresponding data is deleted from the database


## Association Management
### User Story
As a user, 
I WANT TO be able the retrieve data from associated models 
SO THAT it is easier to keep track of the products in all of associated the fields. 

### Accepted Criteria
- When I send a request to retrieve data, 
- Then, I am presented with the data with all of the associated fields  
- When I update a set of data,
- Then, all of its associated data is also updated. 


## Technologies-Used
- JavaScript
- Node.js
- Sequelize
- mysql
- dotenv


## Contribution 
1. Fork the Repo 
2. Create a new branch 
3. Make your contributions/changes 
4. push to the forked repo 
5. create a new pull request


## Preview 

This is the preview of the application 
![alt Categories](./Develop/img/categories.gif)
![alt tags](./Develop/img/tags.gif)
![alt products](./Develop/img/products.gif)

