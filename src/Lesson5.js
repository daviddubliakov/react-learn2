// import React, { useState } from 'react';

// import './App.css';

// class Task1 extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = { names: ['Koly', 'Vasy', 'Pety', 'Ivan', 'Dima'] };
//   }

//   render() {
//     return (
//       <ul>
//         {this.state.names.map((name, key) => <li key={key}>{name}</li>)}
//       </ul>
//     )
//   }
// }

// const Task1Func = () => {
//   const [names, setNames] = useState(['Koly', 'Vasy', 'Pety', 'Ivan', 'Dima'])

//   return (
//     <ul>
//       {names.map((name, key) => <li key={key}>{name}</li>)}
//     </ul>
//   )
// }

// class Task2 extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = { names: ['Koly', 'Vasy', 'Pety', 'Ivan', 'Dima'] };
//   }

//   addNewElement() {
//     const stateCopy = { ...this.state };

//     stateCopy.names.push('Пункт')

//     this.setState(stateCopy)
//   }

//   render() {
//     return (
//       <div>
//         <ul>
//           {this.state.names.map((name, key) => <li key={key}>{name}</li>)}
//         </ul>
//         <button onClick={this.addNewElement.bind(this)}>Добавить</button>
//       </div>
//     )
//   }
// }

// const Task2Func = () => {
//   const [names, setName] = useState(['Koly', 'Vasy', 'Pety', 'Ivan', 'Dima'])

//   const addnewElement = () => {
//     const namesCopy = [...names]

//     namesCopy.push('Пункт')
//     setName(namesCopy);
//   }

//   return (
//     <div>
//       <ul>
//         {names.map((name, key) => <li key={key}>{name}</li>)}
//       </ul>
//       <button onClick={addnewElement}>Добавить</button>
//     </div>
//   )
// }

// class Task3 extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = { names: ['Koly', 'Vasy', 'Pety', 'Ivan', 'Dima'] }
//   }



//   addNewElement() {
//     const stateCopy = { ...this.state };

//     stateCopy.names.push('Пункт')

//     this.setState(stateCopy)
//   }

//   deletElement() {
//     const stateCopy = { ...this.state }

//     stateCopy.names.pop()

//     this.setState(stateCopy)
//   }

//   render() {
//     return (
//       <div>
//         <ul>
//           {this.state.names.map((names, key) => <li key={key}>{names}</li>)}
//         </ul>
//         <button onClick={this.addNewElement.bind(this)}>Добавить</button>

//         <button onClick={this.deletElement.bind(this)}>Удалить</button>
//       </div>
//     )
//   }
// }

// const Task3Func = () => {
//   const [names, setName] = useState(['Koly', 'Vasy', 'Pety', 'Ivan', 'Dima'])

//   const addNewElement = () => {
//     const namesCopy = [...names]

//     namesCopy.push('Пункт')

//     setName(namesCopy)
//   }

//   const deletElement = () => {
//     const namesCopy = [...names]

//     namesCopy.pop()

//     setName(namesCopy)
//   }

//   return (
//     <div>
//       <ul>
//         {names.map((names, key) => <li key={key}>{names}</li>)}
//       </ul>
//       <button onClick={addNewElement}>Добавить</button>
//       <button onClick={deletElement}>Удалить</button>
//     </div>
//   )
// }

// class Task4 extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = { names: ['Koly', 'Vasy', 'Pety', 'Ivan', 'Dima'] }
//   }

//   deletElement(key) {
//     const namesCopy = { ...this.state.names }

//     namesCopy.splice(key, 1)

//     this.setState(namesCopy)
//   }

//   render() {
//     return (
//       <div>
//         <ul>
//           {this.state.names.map((names, key) => (
//             <li key={key}>{names}
//               <button
//                 key={key}
//                 onClick={this.deletElement.bind(this, key)}
//                 id="adasdasddasdad"
//                 className="dsadasdasdadasd"
//               >
//                 Удалить
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     )
//   }
// }

// const Task4Func = () => {
//   const [names, setNames] = useState(['Koly', 'Vasy', 'Pety', 'Ivan', 'Dima'])

//   const deletElement = (key) => {
//     const namesCopy = [...names]

//     namesCopy.splice(key, 1)

//     setNames(namesCopy)
//   }

//   return (
//     <div>
//       <ul>
//         {names.map((names, key) => (
//           <li key={key}>
//             <span>{names}</span>
//             <button key={key} onClick={() => deletElement(key)}>
//               Удалить
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// export default Task1;
