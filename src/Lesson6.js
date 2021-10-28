import React /* */, { useState } from 'react';
import { Button, TextField, Box, List, ListItem, TableHead, TableCell, TableRow, Table } from '@mui/material'

// const Task1Func = () => {
//   const [value, setValue] = useState('hello')

//   const handleInput = (event) => {
//     setValue(event.target.value);
//   }

//   return (
//     <div>
//       <p>{value}</p>
//       <input onChange={handleInput} value={value} />
//     </div>
//   );
// }

// class Task1 extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { value: 'hello' };
//   }

//   handleValue(event) {
//     this.setState({ value: event.target.value });
//   }

//   render() {
//     return (
//       <div>
//         <p>{this.state.value}</p>
//         <input onChange={this.handleValue.bind(this)} value={this.state.value} />
//       </div>
//     )
//   }
// }

// const Task2Func = () => {
//   const [value, setValue] = useState('Hello')

//   const handleInput = (event) => {
//     setValue(event.target.value)
//   }
//   return (
//     <div>
//       <p>{value.toUpperCase(value)}</p>
//       <input
//         type="text"
//         onChange={handleInput}
//         value={value}
//       />
//     </div>
//   )
// }

// class Task2 extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = { value: 'hello' }
//   }

//   handleInput(event) {
//     this.setState({ value: event.target.value })
//   }

//   render() {
//     return (
//       <div>
//         <p>{this.state.value.toUpperCase()}</p>
//         <input
//           type="text"
//           onChange={this.handleInput.bind(this)}
//           value={this.state.value}
//         />
//       </div>
//     )
//   }
// }

// const Task3Func = () => {
//   const [age, setAge] = useState('')

// const getBirthYear = (year) => {
//   const currentYear = new Date().getFullYear();

//   return currentYear - Number(year);
// }


//   return (
//     <div>
//       <p>{getBirthYear(age)}</p>
//       <input
//         value={age}
//         type="number"
//         onChange={(event) => setAge(event.target.value)}
//       />
//     </div>
//   )
// }

// class Task3 extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = { age: '' }
//   }

//   getBirthYear(year) {
//     const currentYear = new Date().getFullYear();

//     return currentYear - Number(year);
//   }

//   render() {
//     return (
//       <div>
//         <p>{getBirthYear(this.state.age)}</p>
//         <input
//           type="number"
//           onChange={(event) => this.setState({ age: event.target.value })}
//         />
//       </div>
//     )
//   }
// }

// const Task4Func = () => {
//   const [name, setName] = useState({ value: '', fullName: [] });

//   const handleChangeName = (event) => {
//     const nameCopy = { ...name };
//     const matchData = event.target.value.match(/^[a-zа-яё][a-zа-яё\s]*$/i);

//     if (matchData !== null) {
//       nameCopy.fullName = matchData.input.split(' ', 3);
//       nameCopy.value = matchData.input.replace(/ {2,}/g, ' ');
//     }

//     if (event.target.value === '') {
//       nameCopy.fullName = [];
//       nameCopy.value = '';
//     }

//     setName(nameCopy);
//   }

//   return (
//     <div>
//       <TextField
//         label="Name"
//         onChange={handleChangeName}
//         value={name.value}
//       />
//       <p>{name.fullName[0]}</p>
//       <p>{name.fullName[1]}</p>
//       <p>{name.fullName[2]}</p>
//     </div>
//   )
// }

// class Task4 extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = ({ value: '', fullName: [] })
//   }

//   handleChangeName(event) {
//     const matchData = event.target.value.match(/^[a-zа-яё][a-zа-яё\s]*$/i);

//     if (matchData !== null) {
//       this.state.fullName = matchData.input.split(' ', 3);
//       this.state.value = matchData.input.replace(/ {2,}/g, ' ');
//     }

//     if (event.target.value === '') {
//       this.state.fullName = [];
//       this.state.value = '';
//     }

//     this.setState(this.state);
//   }
//   render() {
//     return (
//       <div>
//         <TextField
//           label="Name"
//           onChange={this.handleChangeName.bind(this)}
//           value={this.state.value}
//         />
//         <p>{this.state.fullName[0]}</p>
//         <p>{this.state.fullName[1]}</p>
//         <p>{this.state.fullName[2]}</p>
//       </div>
//     )
//   }
// }

// class Task5 extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = { value: '', showText: false }
//   }


//   handleSubmit(event) {
//     this.setState({ showText: true });
//     event.preventDefault();
//   }

//   handleChange(event) {
//     this.setState({ value: event.target.value })
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit.bind(this)}>
//         <input
//           value={this.state.value}
//           onChange={this.handleChange.bind(this)}
//         />
//         <input type="submit" />
//         {this.state.showText && <p>{this.state.value}</p>}
//       </form>
//     )
//   }
// }

// const Task5Func = () => {
//   const [state, setState] = useState({ value: '', showText: false })

//   const handleSubmit = (event) => {
//     setState({ ...state, showText: true });
//     event.preventDefault();
//   }

//   const handleChange = (event) => {
//     setState({ ...state, value: event.target.value })
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         value={state.value}
//         onChange={handleChange}
//       />
//       <input type="submit" />
//       {state.showText && <p>{state.value}</p>}
//     </form>
//   )
// }


// class Task6 extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = ({
//       value1: '',
//       value2: '',
//       sum: null,
//     })
//   }

//   handleInput({ target: { value, name } }) {
//     this.setState((prevState) => ({ ...prevState, [name]: value }))
//   }

//   handleSubmit(event) {
//     this.setState({ sum: Number(this.state.value1) + Number(this.state.value2) })
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <TextField
//           onChange={this.handleInput}
//           value={this.state.value1}
//           name="value1"
//           type="number"
//         />
//         <TextField
//           onChange={this.handleInput}
//           value={this.state.value2}
//           name="value2"
//           type="number"
//         />
//         <Button type="submit">Посчитать</Button>
//         <p>{this.state.sum}</p>
//       </form>
//     )
//   }
// }

// const Task6Func = () => {
//   const [state, setState] = useState({
//     value1: '',
//     value2: '',
//     sum: null
//   })

//   const handleInput = ({ target: { value, name } }) => {
//     setState((prevState) => ({ ...prevState, [name]: value }));
//   }

//   const handleSubmit = (event) => {
//     setState({ ...state, sum: Number(state.value1) + Number(state.value2) });

//     event.preventDefault();
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <TextField
//         onChange={handleInput}
//         value={state.value1}
//         name="value1"
//         type="number"
//       />
//       <TextField
//         onChange={handleInput}
//         value={state.value2}
//         name="value2"
//         type="number"
//       />
//       <Button type="submit">Посчитать</Button>
//       <p>{state.sum}</p>
//     </form>
//   )
// }


// const Task7Func = () => {
//   const [state, setState] = useState({
//     name: '',
//     lastName: '',
//     secondName: '',
//     fullName: [],
//   })

//   const handleInput = ({ target: { value, name } }) => {
//     setState((prevState) => ({ ...prevState, [name]: value }));
//   }

//   const showFullName = (event) => {
//     const fullName = `${state.name} ${state.lastName} ${state.secondName}`;

//     setState({ ...state, fullName });
//     event.preventDefault();
//   }


//   return (
//     <form>
//       <p>Имя</p>
//       <input
//         onChange={handleInput}
//         name="name"
//         value={state.name}
//       />
//       <p>Фамилия</p>
//       <input
//         onChange={handleInput}
//         name="lastName"
//         value={state.lastName}
//       />
//       <p>Отчевство</p>
//       <input
//         onChange={handleInput}
//         name="secondName"
//         value={state.secondName}
//       />
//       <button onClick={showFullName}>Показать ФИО</button>
//       <p>{state.fullName}</p>
//     </form>
//   )
// }

// class Task7 extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = ({
//       name: '',
//       lastName: '',
//       secondName: '',
//       fullName: [],
//     })
//   }

//   handleInput({ target: { value, name } }) {
//     this.setState((prevState) => ({ ...prevState, [name]: value }))
//   }


//   showFullName(event) {
//     const fullName = `${this.state.name} ${this.state.lastName} ${this.state.secondName}`;

//     this.setState({ ...this.state, fullName });
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form>
//         <p>Имя</p>
//         <input
//           onChange={this.handleInput.bind(this)}
//           name="name"
//           value={this.state.name}
//         />
//         <p>Фамилия</p>
//         <input
//           onChange={this.handleInput.bind(this)}
//           name="lastName"
//           value={this.state.lastName}
//         />
//         <p>Отчевство</p>
//         <input
//           onChange={this.handleInput.bind(this)}
//           name="secondName"
//           value={this.state.secondName}
//         />
//         <button onClick={this.showFullName.bind(this)}>Показать ФИО</button>
//         <p>{this.state.fullName}</p>
//       </form>
//     )
//   }
// }


// const Task8Func = () => {
//   const [state, setState] = useState({
//     names: ["Ivan", "Vasy", "Pety",],
//     value: '',
//   })

//   const handleInput = (event) => {
//     setState({ ...state, value: event.target.value })
//   };

//   const addNewName = () => {
//     const copyState = { ...state };

//     copyState.names.push(state.value);
//     copyState.value = '';

//     setState(copyState);
//   }

//   return (
//     <Box>
//       <List>
//         {state.names.map((name, key) => <ListItem key={key}>{name}</ListItem>)}
//       </List>
//       <TextField onChange={handleInput} value={state.value} />
//       <Button onClick={addNewName} variable="outlined">Добавить имя</Button>
//     </Box>
//   )
// }

// class Task8 extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = ({
//       names: ["Ivan", "Vasy", "Pety",],
//       value: '',
//     })
//   }

//   handleInput(event) {
//     this.setState({ ...this.state, value: event.target.value })
//   };

//   addNewName(event) {
//     const copyState = { ...this.state };

//     copyState.names.push(this.state.value);
//     copyState.value = '';

//     this.setState(this.state.names);
//   }

//   render() {
//     return (
//       <Box>
//         <List>
//           {this.state.names.map((name, key) => <ListItem key={key}>{name}</ListItem>)}
//         </List>
//         <TextField onChange={this.handleInput.bind(this)} value={this.state.value} />
//         <Button onClick={this.addNewName.bind(this)} variant="outlined">Добавить имя</Button>
//       </Box>
//     )
//   }
// }

//TODO

// const Task9Func = () => {
//   const [state, setState] = useState({
//     names: ["Ivan", "Vasy", "Pety",],
//     value: '',
//   })

//   const handleInput = (event) => {
//     setState({ ...state, value: event.target.value })
//   }

//   const addNewName = () => {
//     const copyState = { ...state };

//     copyState.names.push(state.value);
//     copyState.value = '';

//     setState(copyState)
//   }

//   const deletName = (key) => {
//     const copyState = { ...state }

//     copyState.names.splice(key, 1)

//     setState(copyState)
//   }

//   return (
//     <Box>
//       <List>
//         {state.names.map((name, key) => (
//           <ListItem key={key}>{name}
//             <Button key={key} onClick={() => deletName(key)}>Удалить</Button>
//           </ListItem>
//         ))}
//       </List>
//       <TextField onChange={handleInput} value={state.value} />
//       <Button onClick={addNewName} >Добавить имя</Button>
//     </Box>
//   )
// }

// class Task9 extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = ({
//       names: ["Ivan", "Vasy", "Pety",],
//       value: '',
//     })
//   }

//   handleInput(event) {
//     this.setState({ ...this.state, value: event.target.value })
//   };

//   addNewName() {
//     const copyState = { ...this.state };

//     copyState.names.push(this.state.value);
//     copyState.value = '';

//     this.setState(this.state);
//   }

//   deletName(key) {
//     const copyState = { ...this.state };

//     copyState.names.splice(key, 1);

//     this.setState(this.state);
//   }

//   render() {
//     return (
//       <Box>
//         <List>
//           {this.state.names.map((name, key) => (
//             <ListItem key={key}>{name}
//               <Button key={key} onClick={this.deletName.bind(this, key)}>Удалить</Button>
//             </ListItem>
//           ))}
//         </List>
//         <TextField onChange={this.handleInput.bind(this)} value={this.state.value} />
//         <Button onClick={this.addNewName.bind(this)} >Добавить имя</Button>
//       </Box>
//     )
//   }
// }

// const Task10Func = () => {
//   const [state, setState] = useState({
//     hrefs: [
//       { href: '1.html', text: 'ссылка 1' },
//       { href: '2.html', text: 'ссылка 2' },
//       { href: '3.html', text: 'ссылка 3' },
//     ],
//     value1: '',
//     value2: '',
//   })

//   const handleInput = ({ target: { value, name } }) => {
//     setState((prevState) => ({ ...prevState, [name]: value }));
//   }

//   const addNewHref = () => {
//     const copyState = { ...state }

//     copyState.hrefs.push({ href: copyState.value1, text: copyState.value2 })

//     copyState.value1 = '';
//     copyState.value2 = '';

//     setState(copyState)
//   }

//   return (
//     <Box>
//       <List>
//         {state.hrefs.map((hrefs, key) =>
//           <ListItem key={key}>
//             <a href={hrefs.href}>{hrefs.text}</a>
//           </ListItem>
//         )}
//       </List>
//       <TextField
//         label="Ссылка"
//         onChange={handleInput}
//         value={state.value1}
//         name="value1"
//       />
//       <TextField
//         label="Название ссылки"
//         onChange={handleInput}
//         value={state.value2}
//         name="value2"
//       />
//       <Button onClick={addNewHref}>Добавить</Button>
//     </Box>
//   )
// }

// class Task10 extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = ({
//       hrefs: [
//         { href: '1.html', text: 'ссылка 1' },
//         { href: '2.html', text: 'ссылка 2' },
//         { href: '3.html', text: 'ссылка 3' },
//       ],
//       value1: '',
//       value2: '',
//     })
//   }

//   handleInput = ({ target: { value, name } }) => {
//     this.setState((prevState) => ({ ...prevState, [name]: value }));
//   }

//   addNewHref() {
//     const copyState = { ...this.state }
//     copyState.hrefs.push({ ...this.state.hrefs, href: this.state.value1, text: this.state.value2 });

//     copyState.value1 = '';
//     copyState.value2 = '';

//     this.setState(copyState)
//   }
//   render() {
//     return (
//       <Box>
//         <List>
//           {this.state.hrefs.map((hrefs, key) =>
//             <ListItem key={key}>
//               <a href={hrefs.href}>{hrefs.text}</a>
//             </ListItem>
//           )}
//         </List>
//         <TextField
//           label="Ссылка"
//           onChange={this.handleInput}
//           value={this.state.value1}
//           name="value1"
//         />
//         <TextField
//           label="Название ссылки"
//           onChange={this.handleInput}
//           value={this.state.value2}
//           name="value2"
//         />
//         <Button onClick={this.addNewHref.bind(this)}>Добавить</Button>
//       </Box>
//     )
//   }
// }

// const Task11Func = () => {
//   const [state, setState] = useState({
//     value: null,
//     names: ["Ivan", "Vasy", "Pety",]
//   })

//   const deletName = () => {
//     const copyState = { ...state }

//     copyState.names.splice(state.value - 1, 1)

//     setState(copyState)

//     copyState.value = '';

//     console.log(copyState);
//   }

//   const handleInput = (event) => {
//     const stateCopy = { ...state }

//     setState({ ...stateCopy, value: event.target.value })
//     console.log(state.value);
//   }

//   return (
//     <Box>
//       <List>
//         {state.names.map((name, key) =>
//           <ListItem key={++key}>
//             {++key} {name}
//           </ListItem>)}
//       </List>
//       <Button onClick={deletName}>Удалить пункт:</Button>
//       <TextField onChange={handleInput} />
//     </Box>
//   )
// }

// class Task11 extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = ({
//       value: null,
//       names: ["Ivan", "Vasy", "Pety",]
//     })
//   }

//   deletName() {
//     const copyState = { ...this.state }
//     copyState.names.splice(this.state.value - 1, 1)

//     copyState.value = '';

//     this.setState(copyState)
//   }

//   handleInput(event) {
//     this.setState({ ...this.state, value: event.target.value })
//   }

//   render() {
//     return (
//       <Box>
//         <List>
//           {this.state.names.map((name, key) =>
//             <ListItem key={++key}>
//               {++key} {name}
//             </ListItem>)}
//         </List>
//         <Button onClick={this.deletName.bind(this)}>Удалить пункт:</Button>
//         <TextField onChange={this.handleInput.bind(this)} />
//       </Box>
//     )
//   }
// }

const Task12Func = () => {
  const [state, setState] = useState({
    users: [
      { name: 'Коля', age: 30 },
      { name: 'Вася', age: 40 },
      { name: 'Петя', age: 50 },
    ],
    value1: '',
    value2: null,
  })

  const handleInput = ({ target: { value, name } }) => {
    setState((prevState) => ({ ...prevState, [name]: value }));
  }

  const addNewUser = () => {
    const usersCopy = { ...state }

    usersCopy.users.push({ name: state.value1, age: state.value2 })

    setState(usersCopy)

    usersCopy.value1 = ''
    usersCopy.value2 = ''
  }

  return (
    <Box>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Имя</TableCell>
            <TableCell>Возраст</TableCell>
          </TableRow>
        </TableHead>
        {state.users.map((user, key) =>
          <TableRow key={key}>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.age}</TableCell>
          </TableRow>
        )}
      </Table>
      <TextField
        label='Имя'
        onChange={handleInput}
        value={state.value1}
        name="value1" />
      <TextField
        label='Возраст'
        onChange={handleInput}
        value={state.value2}
        name="value2" />
      <Button onClick={addNewUser}>Добавить пользователя</Button>
    </Box>
  )
}

class Task12 extends React.Component {
  constructor(props) {
    super(props)
    this.state = ({
      users: [
        { name: 'Коля', age: 30 },
        { name: 'Вася', age: 40 },
        { name: 'Петя', age: 50 },
      ],
      value1: '',
      value2: null,
    })
  }

  handleInput = ({ target: { value, name } }) => {
    this.setState((prevState) => ({ ...prevState, [name]: value }));
  }

  addNewUser() {
    const copyState = { ...this.state }
    copyState.users.push({ name: this.state.value1, age: this.state.value2 })

    this.setState(copyState)

    copyState.value1 = ''
    copyState.value2 = ''
  }
  render() {
    return (
      <Box>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Имя</TableCell>
              <TableCell>Возраст</TableCell>
            </TableRow>
          </TableHead>
          {this.state.users.map((user, key) =>
            <TableRow key={key}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.age}</TableCell>
            </TableRow>
          )}
        </Table>
        <TextField
          label='Имя'
          onChange={this.handleInput}
          value={this.state.value1}
          name="value1" />
        <TextField
          label='Возраст'
          onChange={this.handleInput}
          value={this.state.value2}
          name="value2" />
        <Button onClick={this.addNewUser.bind(this)}>Добавить пользователя</Button>
      </Box>
    )
  }
}

export default Task12Func;
