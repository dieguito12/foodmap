var User = function (username) {
    this.username = username;
}

User.prototype.setToken = function (token) {
    this.token = token;
}

User.prototype.getToken = function () {
    return this.token;
}

User.prototype.getUsername = function () {
    return this.username;
}

User.prototype.storeUser = function() {
    localStorage.setItem('currentUser', JSON.stringify(this))
};

module.exports = User;