import {userInfo} from './inputUsers.js';
const VALIDATE_FIELD = ["usr","eme", "psw", "age", "loc","fll"];

const userStructure = userInfo
.split('\n\n')
.map((row) => {
  return row.replaceAll('\n', ' ')
})
.map(userLine =>{
  const userObject = {};
  userLine.split(" ").forEach((user) => {
    const [key, value] = user.split(":");
    userObject[key] = value;
  });
  return userObject;
});


const validateUser = userStructure.filter((user) => {
  const userKeys = Object.keys(user);
  return VALIDATE_FIELD.every((field) => userKeys.includes(field));
});

const countUserValidate = validateUser.length;
const lastUser = validateUser[validateUser.length - 1];

console.log(countUserValidate, lastUser)