import fs from 'fs';
// const fs = require('fs');
import { isPasswordValid } from './passwordValidation.js';

fs.readFile('./possiblePasswords.txt', 'utf8', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    const passwords = data.split('\n'); // split by line

    passwords.forEach(password => {
      const isValid = isPasswordValid(password.trim())
      console.log(`Password: ${password.trim()} is valid? ${isValid}`);
    })
  }
})