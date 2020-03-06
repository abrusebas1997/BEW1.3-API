# Students API

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

## Sign up

Send a request to `/auth/sign-up` to sign up

```json
{
  username: 'sebas1234'
  password: 'sebastian3333'
}
```

## Login

Send a request to `/auth/login` to sign up

```json
{
  username: 'sebas1234'
  password: 'sebastian3333'
}
```

## Logout

Send a request to `/auth/logout` to sign up


## Get about Page

Send a request to `/student/about` to get the following response:

```json
{
  message: 'Find students based on the name or email'
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

Send a POST request to `/add/student`` with the following information:

```
name: string,
student_major: string,
student_age: number,
email: string

```

## Update a Student

Send a POST request to `/update/student` with the following information:

```
name: string,
email: string

```

## Delete a Student

Send a POST request to `/delete/:name` with the following information:

```
name: string,
student_major: string,
student_age: number,
email: string

```
