# RESTAURANTS FOR CATS API

## Description

This page will contains information about how to access all students data. Also, more information about them can be added like name, major , age or email.

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

Send a request to `/student/about` to get the following response:

```json
{
  message: 'Find restaurants for cats based on the city and zip-code'
}
```

## Get all the students of Make School

```json
[
  {
    name: 'Dillan'
    student_major: 'Back End Web'
    student_age: '24',
    email: 'Dillan_16@gmail.com',
    _id: 987654321
  }
]
```

## Get a single student for CATS

```json
[
  {
      name: 'Dillan'
      student_major: 'Back End Web'
      student_age: '24',
      email: 'Dillan_16@gmail.com',
      _id: 987654321
  }
]
```
## Create a Student

Send a POST request to `/student/` with the following information:

```
name: string,
student_major: string,
student_age: number,
email: string

```

## Update a Student

TODO

## Delete a Student

TODO
