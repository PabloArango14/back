"use strict";
// const nombre: string = "Jorge";
// interface IUser {
//   name: string;
//   age: number;
//   email: string;
//   active: boolean;
//   address: IAddress;
// }
// const usuario: IUser = {
//   name: "Jorge Vega",
//   age: 32,
//   email: "jvega@MediaList.com",
//   active: true,
//   address: {
//     street: "Calle Falsa",
//     city: "Posadas",
//   },
// };
var UserRole;
(function (UserRole) {
    UserRole["ADMIN"] = "Admin";
    UserRole["USER"] = "User";
    UserRole["GEST"] = "Gest";
})(UserRole || (UserRole = {}));
const user1 = {
    name: "Jorge Vega",
    age: 32,
    email: "jvega@MediaList.com",
    active: true,
    address: {
        street: "Calle Falsa",
        city: "Posadas",
    },
    role: UserRole.ADMIN,
};
console.log(user1);
