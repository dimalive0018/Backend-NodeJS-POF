const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        validate: {
          validator:
            function(name) {
              return name.length >= 2;
            },
            message: "Il nome dev'essere composto da almeno due caratteri"
        }
    },
    surname: {
        type: String,
        required: true,
        validate: {
          validator:
            function(name) {
              return name.length >= 2;
            },
            message: "Il cognome dev'essere composto da almeno due caratteri"
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
          validator: function(email) {
            return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
          },
          message: "Email non valida"
        }
      }    
})

UserSchema.set('toJSON', {
    transform: (doc, ret) => {
        delete ret.__v;
        return ret;
    }
});

const User = mongoose.model('user', UserSchema);

module.exports = User;