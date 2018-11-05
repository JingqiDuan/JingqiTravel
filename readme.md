# JingqiTravel

![alt text](https://github.com/JingqiDuan/JingqiTravel/blob/master/public/aaa.PNG)


> A Node.js web application project based on the Udemy course - [The Web Developer Bootcamp by Colt Steele](https://www.udemy.com/the-web-developer-bootcamp/)

## Live Demo

To see the app in action, go to [https://jingqitravel.herokuapp.com/](https://jingqitravel.herokuapp.com/)

## Features

* Authentication:
  
  * User login with username and password

  * Admin sign-up with admin code

* Authorization:

  * One cannot manage posts and view user profile without being authenticated

  * One cannot edit or delete posts and comments created by other users

* Manage attraction posts with basic functionalities:

  * Create, edit and delete posts and comments

  * Upload attraction photos

  * Display attraction location on Google Maps
  
  * Search existing attractions

* Manage user account with basic functionalities:

  * Profile page setup with sign-up

* Flash messages responding to users' interaction with the app

* Responsive web design


### Clone or download this repository

```sh
git clone https://github.com/JingqiDuan/JingqiTravel.git
```

### Install dependencies

```sh
npm install
```

or

```sh
yarn install
```

### Comments in code

Some comments in the source code are course notes and therefore might not seem necessary from a developer's point of view.

## Built with

### Front-end

* [ejs](http://ejs.co/)
* [Google Maps APIs](https://developers.google.com/maps/)
* [Bootstrap](https://getbootstrap.com/docs/3.3/)

### Back-end

* [express]
* [mongoDB]
* [mongoose]
* [passport]
* [passport-local]
* [express-session]
* [method-override]
* [moment]
* [node-geocoder]
* [connect-flash]
* [dotenv]
