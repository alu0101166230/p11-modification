import * as userM from './index'

const user = new userM.User({
  name: 'francisco',
  email: 'francisco@gmail.com',
  password: '01001francisco$$',
});

user.save().then((result) => {
  console.log(result);
}).catch((error) => {
  console.log(error);
});