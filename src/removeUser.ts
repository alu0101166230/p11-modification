import * as userM from './index'

userM.User.findOneAndRemove({email: 'francisco@gmail.com'}).then((result) => {
  console.log(result);
}).catch((error) => {
  console.log(error);
});