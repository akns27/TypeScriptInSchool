var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.describe = function () {
        console.log("".concat(this.name, ", age ").concat(this.age));
    };
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, age, position, salary) {
        var _this = _super.call(this, name, age) || this;
        _this.position = position;
        _this.salary = salary;
        return _this;
    }
    Employee.prototype.describe = function () {
        console.log("".concat(this.name, ", age ").concat(this.age, ", works as a ").concat(this.position, " with a salary of ").concat(this.salary));
    };
    return Employee;
}(Person));
var employee = new Employee("John", 30, "Manager", 50000);
employee.describe();
