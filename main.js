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
var message = 'welcome back';
// console.log(message);
var name = 'rishabh';
// name = true;
var sentence = " my name is is ".concat(name);
// console.log(sentence);
// let myvariable: unknown = 10;
// console.log(myvariable.name);
// myvariable();
// (myvariable as string).toUpperCase();
//type of inference
var a;
a = 10;
a = true;
var b = 10;
// ability to specify union
var multitype;
multitype = 20;
multitype = true;
// no-restriction in any
var anytype;
anytype = 20;
anytype = true;
anytype = 'hello';
// Function
// function add(num1: number, num2?: number): number{  == optional
function add(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    if (num2)
        return num1 + num2;
    else
        return num1;
}
add(5, 10); //=15
// add(5, '10');   === error
add(5); //15 bec b=10 as default
function fullname(person) {
    console.log("".concat(person.firstname, " ").concat(person.secondname));
}
var p = {
    firstname: 'rishabh',
    secondname: 'jain'
};
// fullname(p);
// class
var employee = /** @class */ (function () {
    function employee(name) {
        this.employeename = name;
    }
    employee.prototype.greet = function () {
        console.log("good morning ".concat(this.employeename));
    };
    return employee;
}());
var emp1 = new employee('rishabh');
console.log(emp1.employeename);
emp1.greet();
var manager = /** @class */ (function (_super) {
    __extends(manager, _super);
    function manager(managername) {
        return _super.call(this, managername) || this;
    }
    manager.prototype.delegatework = function () {
        console.log("manager delegating tasks");
    };
    return manager;
}(employee));
var m1 = new manager('bruce');
m1.delegatework();
m1.greet();
console.log(m1.employeename);
