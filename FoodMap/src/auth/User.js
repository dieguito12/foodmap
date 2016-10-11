var User = function (username) {
    this.username = username;
}

User.prototype.setToken = function (token) {
    this.auth_token = token;
}

User.prototype.getToken = function () {
    return this.auth_token;
}

User.prototype.getUsername = function () {
    return this.username;
}

User.prototype.storeUser = function() {
    localStorage.setItem('currentUser-'+this.username, JSON.stringify(this))
};

module.exports = User;