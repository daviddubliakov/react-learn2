
// import React, { useState } from 'react';

// import './App.css';


// class Task1 extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = { name: 'Ivan', age: 25 }
//   }

//   render() {
//     return (
//       <div>Имя: {this.state.name} возраст: {this.state.age}</div>
//     )
//   }
// }

// const Task1Func = () => {
//   const [state, setState] = useState({ name: 'Ivan', age: 25 })

//   return (
//     <div>Имя: {state.name} возраст: {state.age}</div>
//   )
// }

// class Task2 extends React.Component {

//   showMassage() {
//     alert('hello')
//   }

//   render() {
//     return (
//       <button onClick={this.showMassage}>Show message</button>
//     )
//   }
// }

// const Task2Func = () => {
//   const showMassage = () => {
//     alert('Hello')
//   }

//   return (
//     <button onClick={showMassage}>Show message</button>
//   )
// }

// class Task3 extends React.Component {

//   constructor(props) {
//     super(props)
//     this.state = { name: 'Ivan', age: 25 }
//   }


//   render() {

//     const showName = () => {
//       alert(this.state.name)
//     }

//     return (
//       <button onClick={showName}>Show name</button>
//     )
//   }
// }

// const Task3Func = () => {
//   const [state, setState] = useState({ name: 'Ivan', age: 25 })

//   const showName = () => {
//     alert(state.name)
//   }

//   return (
//     <button onClick={showName}>Show name</button>
//   )
// }

// class Task4 extends React.Component {

//   constructor(props) {
//     super(props)
//     this.state = { name: 'Ivan', age: 25 }
//   }

//   reUser() {
//     this.setState({ name: 'Koly', age: 30 })
//   }

//   render() {

//     //method

//     return (

//       <div>
//         <p>Имя:{this.state.name}, Bозраст:{this.state.age}</p>
//         <button onClick={this.reUser.bind(this)}>Изменить пользователя</button>
//       </div>
//     )
//   }
// }




// export default Task4;
