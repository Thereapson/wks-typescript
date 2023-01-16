"use strict";
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
exports.__esModule = true;
var Person = /** @class */ (function () {
    //private mail: string;
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.getAge = function () {
        this.age;
    };
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, regular) {
        var _this = _super.call(this, name, age) || this;
        _this.regular = regular;
        return _this;
    }
    Student.prototype.getFullInfo = function () {
        return "".concat(this.name, " (").concat(this.age, " years old) - ").concat(this.regular ? 'regular' : 'not regular');
    };
    return Student;
}(Person));
var student = new Student("Franco", 26, true);
student.getFullInfo(); // "Franco (26 years old) - not regular"
student.getFullInfo.name; // Property 'name' is protected and only accessible within class 'Person' and its subclasses
student.getAge; // Property 'age' is protected and only accessible within class 'Person' and its subclasses.
student.regular; // Property 'regular' is private and only accessible within class 'Student'
