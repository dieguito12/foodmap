var Auth = function () {};

Auth.user = function () {
    var user = localStorage.getItem('currentUser');
    user = JSON.parse(user);
    return user;
};

Auth.setUser = function (user) {
    this.user = user;
    this.user.storeUser();
};

Auth.unsetUser = function () {
    localStorage.removeItem('currentUser');
};

module.exports = Auth;