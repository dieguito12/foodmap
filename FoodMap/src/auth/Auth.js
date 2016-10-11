var Auth = function () {};

Auth.loggedUser = function () {
    var user = sessionStorage.getItem('currentUser');
    user = JSON.parse(user);
    return user;
};

Auth.setUser = function (user) {
    this.user = user;
    this.user.storeUser();
};

Auth.unsetUser = function () {
    sessionStorage.removeItem('currentUser');
};

module.exports = Auth;