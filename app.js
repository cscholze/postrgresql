'use strict';

const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://localhost:5432/users');

const User = sequelize.define('user', {
  username: Sequelize.STRING,
  birthday: Sequelize.DATE
});

const Project = sequelize.define('project', {
  name: Sequelize.STRING
});

Project.hasMany(User, {as: 'worker'});


let USER;

sequelize.sync().then( () => {
  return User.create({
    username: 'Jane Doe',
    birthday: new Date(1980, 6, 20)
  });
}).then( (user) => {
  USER = user;
  console.log(user.get({
    plain: false
  }));
}).then( () => {
  return Project.create({
    name: 'Angular 101'
  });
}).then( (project) => {
  return '';
});
