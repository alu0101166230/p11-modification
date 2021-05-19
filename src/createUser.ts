import * as userM from './index'

const user = new userM.User({
  name: 'miguel',
  email: 'migul@gmail.com',
  password: 'asdasd$$',
});

user.save().then((result) => {
  console.log(result);
}).catch((error) => {
  console.log(error);
});