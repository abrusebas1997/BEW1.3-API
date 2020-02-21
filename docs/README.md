# RESTAURANTS FOR CATS API

## Description

Find restaurants for cats based on the city and zip-code.

## Installation

To install this API, clone this repository and run it.

```
npm install
```
```
npm start
```

# HOW DO MAKE REQUESTS

## Get about Page

Send a request to `/catrestaurant/about` to get the following response:

```json
{
  message: 'Find restaurants for cats based on the city and zip-code'
}
```

## Get all the restaurants for CATS

```json
[
  {
    location: 'San Francisco'
    zip_code: '94109'
    restaurant_name: 'Black Cat',
    type_food: 'vegetarian',
    _id: 987654321
  }
]
```

## Get a single restaurant for CATS

```json
[
  {
    location: 'San Francisco'
    zip_code: '94109'
    restaurant_name: 'Black Cat',
    type_food: 'vegetarian',
    _id: 987654321
  }
]
```
## Create a Cat Restaurant

Send a POST request to `/catrestaurant/` with the following information:

```
location: string,
zip_code: string,
restaurant_name: string,
type_food: string

```

## Update a Cat Restaurant

TODO

## Delete a Cat Restaurant

TODO
