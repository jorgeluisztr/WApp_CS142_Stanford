var userSchema = new Schema({
    firstName: String,
    secondName: String,
});

var User = moongose.model('User', userSchema);

print(User)