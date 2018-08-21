class User {
    constructor(o) {
        this.id = o.id;
        this.login = o.login;
        this.avatar = o.avatar_url;
    }
}

module.exports = User;