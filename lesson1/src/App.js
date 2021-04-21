// import './App.css';
// import User from "./components/user/user";
//
// function App() {
//
//  let users = [
//      {
//          "id": 1,
//          "name": "Leanne Graham",
//          "username": "Bret",
//          "status": false
//      },
//      {
//          "id": 2,
//          "name": "Ervin Howell",
//          "username": "Antonette",
//          "status": true
//      },
//      {
//          "id": 3,
//          "name": "Clementine Bauch",
//          "username": "Samantha",
//          "status": true
//      },
//      {
//          "id": 4,
//          "name": "Patricia Lebsack",
//          "username": "Karianne",
//          "status": false
//      },
//      {
//          "id": 5,
//          "name": "Chelsey Dietrich",
//          "username": "Kamren",
//          "status": true
//      },
//      {
//          "id": 6,
//          "name": "Mrs. Dennis Schulist",
//          "username": "Leopoldo_Corkery",
//          "status": false
//      },
//      {
//          "id": 7,
//          "name": "Kurtis Weissnat",
//          "username": "Elwyn.Skiles",
//          "status": false
//      },
//      {
//          "id": 8,
//          "name": "Nicholas Runolfsdottir V",
//          "username": "Maxime_Nienow",
//          "status": true
//      },
//      {
//          "id": 9,
//          "name": "Glenna Reichert",
//          "username": "Delphine",
//          "status": false
//      },
//      {
//          "id": 10,
//          "name": "Clementina DuBuque",
//          "username": "Moriah.Stanton",
//          "status": true
//      }
//  ]
//   return (
//     <div>
//         {
//             users.map((value, index) => <User user={value} key={index}/>) //user передаєм в компонент
//                 // value = user - це кожен обєкт масива
//         }
//     </div>
//   );
// }
//
// export default App;

// Функція що вище побудована реактом, замінемо на клас, створимо компонент

import React, {Component} from 'react';
import User from "./components/user/user";

class App extends Component {
    render() {
         let users = [
     {
         "id": 1,
         "name": "Leanne Graham",
         "username": "Bret",
         "status": false
     },
     {
         "id": 2,
         "name": "Ervin Howell",
         "username": "Antonette",
         "status": true
     },
     {
         "id": 3,
         "name": "Clementine Bauch",
         "username": "Samantha",
         "status": true
     },
     {
         "id": 4,
         "name": "Patricia Lebsack",
         "username": "Karianne",
         "status": false
     },
     {
         "id": 5,
         "name": "Chelsey Dietrich",
         "username": "Kamren",
         "status": true
     },
     {
         "id": 6,
         "name": "Mrs. Dennis Schulist",
         "username": "Leopoldo_Corkery",
         "status": false
     },
     {
         "id": 7,
         "name": "Kurtis Weissnat",
         "username": "Elwyn.Skiles",
         "status": false
     },
     {
         "id": 8,
         "name": "Nicholas Runolfsdottir V",
         "username": "Maxime_Nienow",
         "status": true
     },
     {
         "id": 9,
         "name": "Glenna Reichert",
         "username": "Delphine",
         "status": false
     },
     {
         "id": 10,
         "name": "Clementina DuBuque",
         "username": "Moriah.Stanton",
         "status": true
     }
 ]
        return (
            <div>
                {
                    users.map((value, index) => <User user={value} key={index}/>) //user передаєм в компонент
                }
            </div>
        );
    }
}

export default App;