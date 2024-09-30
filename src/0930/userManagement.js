var Admin = /** @class */ (function () {
    function Admin(id, name, email, accessLevel) {
        if (accessLevel === void 0) { accessLevel = 'admin'; }
        this.id = id;
        this.name = name;
        this.email = email;
        this.accessLevel = accessLevel;
    }
    Admin.prototype.login = function () {
        console.log("Admin ".concat(this.name, " logged in with ").concat(this.accessLevel, " access"));
    };
    Admin.prototype.deleteUser = function (user) {
        console.log("Admin ".concat(this.name, " has deleted user ").concat(user.name));
    };
    return Admin;
}());
var RegularUser = /** @class */ (function () {
    function RegularUser(id, name, email, accessLevel) {
        if (accessLevel === void 0) { accessLevel = 'regular'; }
        this.id = id;
        this.name = name;
        this.email = email;
        this.accessLevel = accessLevel;
    }
    RegularUser.prototype.login = function () {
        console.log("Regular user ".concat(this.name, " logged in with ").concat(this.accessLevel, " access"));
    };
    RegularUser.prototype.viewContent = function () {
        console.log("".concat(this.name, " is viewing content"));
    };
    return RegularUser;
}());
var GuestUser = /** @class */ (function () {
    function GuestUser(id, name, email, accessLevel) {
        if (accessLevel === void 0) { accessLevel = 'guest'; }
        this.id = id;
        this.name = name;
        this.email = email;
        this.accessLevel = accessLevel;
    }
    GuestUser.prototype.login = function () {
        console.log("Guest user ".concat(this.name, " logged in with ").concat(this.accessLevel, " access"));
    };
    GuestUser.prototype.requestAccess = function () {
        console.log("".concat(this.name, " is requesting access"));
    };
    return GuestUser;
}());
var UserRepository = /** @class */ (function () {
    function UserRepository() {
        this.users = [];
    }
    UserRepository.prototype.addUser = function (user) {
        this.users.push(user);
    };
    UserRepository.prototype.removeUser = function (id) {
        var index = this.users.findIndex(function (user) { return user.id === id; });
        if (index !== -1) {
            this.users.splice(index, 1);
        }
    };
    UserRepository.prototype.getAllUsers = function () {
        return this.users;
    };
    UserRepository.prototype.getUserById = function (id) {
        return this.users.find(function (user) { return user.id === id; });
    };
    return UserRepository;
}());
var adminRepo = new UserRepository();
var regularRepo = new UserRepository();
var guestRepo = new UserRepository();
var admin1 = new Admin(1, "Hong", "hong@company.com");
var regular1 = new RegularUser(2, "kang", "bob@site.com");
var guest1 = new GuestUser(3, 'Lee', 'lee@example.com');
adminRepo.addUser(admin1);
regularRepo.addUser(regular1);
console.log(adminRepo.getAllUsers());
console.log(regularRepo.getAllUsers());
console.log(guestRepo.getAllUsers());
admin1.login();
admin1.deleteUser(admin1);
regular1.login();
regular1.viewContent();
guest1.login();
guest1.requestAccess();
