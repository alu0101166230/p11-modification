import * as userM from './index'

userM.User.updateOne({email: 'Raul@gmail.com'}, {password: 'newpass3'}).then((result) => {
  console.log(result);
}).catch((error) => {
  console.log(error);
});