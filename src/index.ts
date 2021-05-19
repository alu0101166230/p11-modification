import * as mongoose from 'mongoose';
import validator from 'validator';

mongoose.connect('mongodb://127.0.0.1:27017/user', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
}).then(() => {
  console.log('Connected to the database');
}).catch(() => {
  console.log('Something went wrong when conecting to the database');
});

interface UserInterface {
  name: string,
  age?: number,
  email:string,
  password: string
}

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    validate: (value: number) => {
      if (value < 0 ) {
        throw new Error('Age must greater than 0 ');
      }
    },
  },
  email: {
    type: String,
    unique: true,
    index: {
      required: true,
      dropDups: true,
    },
    validate: (value: string) => {
      if (!validator.isEmail(value)) {
        throw new Error('Invalid Email');
      }
    },
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model<UserInterface>('User', UserSchema);

// const user = new User({
//   name: 'joel',
//   email: 'imjoel@gmail.com',
//   password: 'joelpass',
// });

// user.save().then((result) => {
//   console.log(result);
// }).catch((error) => {
//   console.log(error);
// });

// User.findOne({email: {$eq: 'leonardo@gmail.com'}},
//     function(err:string, data:string) {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log(data);
//       }
//     });

User.updateOne({email:'imjoel@gmail.com'}, {pass: 'newPassJoel'}).then((result) => {
    console.log(result);
  }).catch((error) => {
    console.log(error);
  });
    

// function(err:string, data:string) {
    //   if (err) {
    //     console.log(err);
    //   } else {
    //     console.log(data);
    //   }
    // });
