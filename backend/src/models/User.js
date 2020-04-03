const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
    index: {
      unique: true
    }
	},
	email: {
		type: String,
		required: true,
		lowercase: true,
    index: {
      unique: true
    }
	},
	password: {
		type: String,
		required: true,
		select: false,
	},
	avatarURL: {
		type: String,
		required: false,
	},
	role: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Role'
	},
	createdAt: {
		type: Date,
		default: Date.now
	},
});

UserSchema.pre('save', function (next) {
  const user = this

  // gerar o hash apenas se o password mudou o para um novo usuário
  if (!user.isModified('password')) { return next() };

  // gerando o hash
  const hash = bcrypt.hashSync(user.password);

  // trocando o password pelo hash
  user.password = hash;
  next();
});

// method to compare a given password with the database hash
UserSchema.methods.comparePassword = function (password) {
  const user = this;
  return bcrypt.compareSync(password, user.password);
}

module.exports = mongoose.model('User', UserSchema);
