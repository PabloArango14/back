// // const nombre: string = "Jorge";

// // const apellido: string = "Vega";

// // const edad: number = 32;

// // console.log(nombre.toUpperCase());
// // console.log(apellido.toUpperCase());

// // const alive: boolean = true;

// // const numPares: number[] = [2, 4, 6, 8, 10];

// // const palabras: string[] = ["Hola", "Chao", "Jorge"];

// // const numeros: number[] = [];

// // numeros.push(10);
// // numeros.push(5);
// // numeros.push(0);

// // const sumarNumeros = (arr: number[]) => {
// //   let suma = 0;
// //   for (const num of arr) suma += num;
// //   return suma;
// // };

// interface IAddress {
//   street: string;
//   city: string;
// }
// // interface IUser {
// //   name: string;
// //   age: number;
// //   email: string;
// //   active: boolean;
// //   address: IAddress;
// // }

// // const usuario: IUser = {
// //   name: "Jorge Vega",
// //   age: 32,
// //   email: "jvega@MediaList.com",
// //   active: true,
// //   address: {
// //     street: "Calle Falsa",
// //     city: "Posadas",
// //   },
// // };

// enum UserRole {
//   ADMIN = "Admin",
//   USER = "User",
//   GEST = "Gest",
// }

// type TUser = {
//   name: string;
//   age: number;
//   email: string;
//   active: boolean;
//   address: IAddress;
//   role: UserRole;
// };

// const user1: TUser = {
//   name: "Jorge Vega",
//   age: 32,
//   email: "jvega@MediaList.com",
//   active: true,
//   address: {
//     street: "Calle Falsa",
//     city: "Posadas",
//   },
//   role: UserRole.ADMIN,
// };

// console.log(user1);

// interface User {
//   name: string;
//   email: string;
//   age: number;
// }

// interface AdminUser extends User {
//   adminSince: Date;
// }

// interface GuestUser extends User {
//   active: boolean;
// }

// const user1: AdminUser = {
//   name: "Jorge",
//   email: "jvega@mail.com",
//   age: 32,
//   adminSince: new Date(),
// };

// interface ITrack {
//   title: string;
// }

// interface ISong extends ITrack {
//   artist: string;
//   duration: number;
// }

// interface IPodcast extends ITrack {
//   host: string;
//   episodes: number;
// }

// interface IAudiobook extends ITrack {
//   author: string;
//   duration: number;
// }

// interface IPlayList {
//   name: string;
//   playlist: (ISong | IPodcast | IAudiobook)[];
// }
const express = require("express");

const server = express();

server.listen(3000, () => {
  console.log("Server listening on port 3000");
});
