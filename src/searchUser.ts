import * as userM from './index'

userM.User.findOne({email: {$eq: 'francisco@gmail.com'}},
    function(err:string, data:string) {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
      }
    });