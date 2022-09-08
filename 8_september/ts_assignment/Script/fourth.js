"use strict";
class BankAccount {
    constructor(id = 0, firstName = "", lastName = "", address = "", phone = "", email = "", type = "") {
        this.Accounts = [{
                id: 0,
                firstName: '',
                lastName: '',
                address: '',
                phone: '',
                email: "",
                type: ''
            }];
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.phone = phone;
        this.email = email;
        this.type = type;
    }
    createAccount(id, firstName, lastName, address, phone, email, type) {
        this.Accounts.push({ id, firstName, lastName, address, phone, email, type });
    }
    updateAccount(num, val) {
        for (let i = 0; i < this.Accounts.length; i++) {
            if (this.Accounts[i].id == num) {
                this.Accounts[i].phone = val;
            }
        }
    }
    deleteAccount(num) {
        for (let i = 0; i < this.Accounts.length; i++) {
            if (this.Accounts[i].id == num) {
                this.Accounts.splice(i, 1);
            }
        }
    }
}
const a1 = new BankAccount();
a1.createAccount(1, 'Damodhar', 'jadhao', 'Buldhana', '9923064941', 'damodhar@gmail', 'Salary');
a1.createAccount(2, 'Abc', 'xyz', 'Jalna', '1234567890', 'abc@gmail', 'saving');
a1.createAccount(3, 'ram', 'patil', 'pune', '8999969670', 'ram@gmail', 'current');
function showdata1() {
    for (let i = 1; i < a1.Accounts.length; i++) {
        document.write(a1.Accounts[i].id + '<br>');
        document.write(a1.Accounts[i].firstName + '<br>');
        document.write(a1.Accounts[i].lastName + '<br>');
        document.write(a1.Accounts[i].email + '<br>');
        document.write(a1.Accounts[i].phone + '<br>');
        document.write(a1.Accounts[i].address + '<br>');
        document.write(a1.Accounts[i].type + '<br>');
        document.write("<br>");
    }
}
// const show_all:any=showdata1();
// console.log(show_all);
// document.getElementById("fourth")?.innerHTML=show_all;
class Transaction extends BankAccount {
    constructor(data, type, amount, customerId) {
        super();
        this.data = data;
        this.type = type;
        this.amount = amount;
        this.customerId = customerId;
    }
    depositeFunds() {
    }
    widrowFunds() {
    }
}
