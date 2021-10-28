// import React, { useState } from 'react';

// import './App.css';

// const Task1Func = () => {
//   const [state, setState] = useState({ show: true, name: 'Vasy' })

//   return (
//     <div>
//       <p>{state.show ? 'Privet' : 'Poka'} {state.name}</p>
//     </div>
//   )
// }

// class Task1 extends React.Component {

//   constructor(props) {
//     super(props)
//     this.state = { show: true, name: 'Vasy' }
//   }

//   render() {

//     return (
//       <div>
//         <p>{this.state.show ? 'Privet' : 'Poka'} {this.state.name}</p>
//       </div>
//     )
//   }
// }

// class Task2 extends React.Component {

//   constructor(props) {
//     super(props)
//     this.state = { show: false, name: 'Ivan', age: 25 }
//   }

//   showUser() {
//     this.setState({ show: true });
//   }

//   render() {
//     return (
//       <div>
//         {this.state.show && <p>{this.state.name} {this.state.age}</p>}
//         <button onClick={this.showUser.bind(this)}>Нажми на меня</button>
//       </div>
//     )
//   }
// }

// const Task2Func = () => {
//   const [state, setState] = useState({ show: false, name: 'Ivan', age: 25 })

//   const showUser = () => {
//     setState({ ...state, show: true })
//   }

//   return (
//     <div>
//       {state.show && <p>{state.name} {state.age}</p>}
//       <button onClick={showUser}>Нажми на меня</button>
//     </div>
//   )
// }


// const Task3Func = () => {
//   const [state, setState] = useState({ show: false, name: 'Ivan', age: 25 })

//   const showUser = () => {
//     setState({ ...state, show: !state.show })
//   }

//   return (
//     <div>
//       {state.show && <p>{state.name} {state.age}</p>}
//       <button onClick={showUser}>Нажми на меня</button>
//     </div>
//   )
// }

// class Task3 extends React.Component {

//   constructor(props) {
//     super(props)
//     this.state = { show: false, name: 'Ivan', age: 25 }
//   }

//   showUser() {
//     this.setState({ show: !this.state.show });
//   }

//   render() {
//     return (
//       <div>
//         {this.state.show && <p>{this.state.name} {this.state.age}</p>}
//         <button onClick={this.showUser.bind(this)}>Нажми на меня</button>
//       </div>
//     )
//   }
// }

// const Task4Func = () => {
//   const [state, setState] = useState({ show: false, name: 'Ivan', age: 25 })

//   const showUser = () => {
//     setState({ ...state, show: !state.show })
//   }

//   return (
//     <div>
//       {state.show && <p>{state.name} {state.age}</p>}
//       <button onClick={showUser}>{state.show ? 'скрыть' : 'показать'}</button>
//     </div>
//   )
// }

// class Task4 extends React.Component {

//   constructor(props) {
//     super(props)
//     this.state = { show: false, name: 'Ivan', age: 25 }
//   }

//   showUser() {
//     this.setState({ show: !this.state.show })
//   }

//   render() {
//     return (
//       <div>
//         {this.state.show && <p>{this.state.name} {this.state.age}</p>}
//         <button onClick={this.showUser.bind(this)}>{this.state.show ? 'скрыть' : 'показать'}</button>
//       </div>
//     )
//   }
// }

// class Task5 extends React.Component {

//   constructor(props) {
//     super(props)
//     this.names = ['Koly', 'Vasy', 'Pety']
//   }

//   render() {
//     return (
//       <ul>
//         {this.names.map((name, key) => <li key={key}>{name}</li>)}
//       </ul>
//     )
//   }
// }



// const Task5Func = () => {

//   const [names, setNames] = useState(['Koly', 'Vasy', 'Pety']);

//   return (
//     <ul>
//       {names.map((name, key) => <li key={key}>{name}</li>)}
//     </ul>
//   )
// }


// class Task6 extends React.Component {
//   constructor(props) {
//     super(props)
//     this.name = ['Koly', 'Vasy', 'Pety']
//   }

//   render() {
//     return (
//       <ul>
//         {this.name.map((name, key) =>
//           <li key={name, key}>{name} - {++key}</li>)}
//       </ul>
//     )
//   }
// }


// const Task6Func = () => {
//   const [names, setNames] = useState(['Koly', 'Vasy', 'Pety'])

//   return (
//     <ul>
//       {names.map((name, key) =>
//         <li key={key}>{name} - {++key}</li>)}
//     </ul>
//   )
// }


// class Task7 extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       hrefs: [
//         { href: '1.html', text: 'ссылка 1' },
//         { href: '2.html', text: 'ссылка 2' },
//         { href: '3.html', text: 'ссылка 3' },
//       ]
//     }
//   }

//   render() {
//     return (
//       <ul>
//         {this.state.hrefs.map((item, key) =>
//           <li key={key}>
//             <a href={item.href}>{item.text}</a>
//           </li>)}
//       </ul>
//     )
//   }
// }

// const Task7Func = () => {
//   const [state, setState] = useState(
//     {
//       hrefs: [
//         { href: '1.html', text: 'ссылка 1' },
//         { href: '2.html', text: 'ссылка 2' },
//         { href: '3.html', text: 'ссылка 3' },
//       ]
//     }
//   )

//   return (
//     <ul>
//       {state.hrefs.map((item, key) =>
//         <li key={key}>
//           <a href={item.href}>{item.text}</a>
//         </li>)}
//     </ul>
//   )
// }


// export default Task5Func;
