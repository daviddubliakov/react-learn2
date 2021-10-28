import React, { useState, useRef, useEffect } from 'react';
import classNames from 'classnames';
// import { useForm, Controller } from 'react-hook-form'
// import * as yup from 'yup'
// import { yupResolver } from '@hookform/resolvers/yup'
// import { createUseStyles } from 'react-jss';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import { List, Typography, Checkbox, Input, Button, Radio, } from 'antd';
import { Box, Table, TableHead, TableRow, TableCell, TableBody, TextField, RadioGroup, FormControlLabel, Divider, Grid, MenuItem, InputLabel, Button, Select, IconButton, Radio, FormControl, FormLabel } from '@mui/material'
import { Typography } from 'antd';
import { CodeSharp } from '@mui/icons-material';
import { number } from 'yup';
// import useStyles from './styles';



// import { LoadingOutlined } from '@ant-design/icons'

// import useStyles from './styles';
// import { Box } from '@mui/system';

// const NAMES = [
//   {
//     value: 'bohdan',
//     id: 0,
//     lable: 'Bohdan',
//     checked: true,
//   },
//   {
//     value: 'david',
//     id: 1,
//     lable: 'David',
//     checked: true,
//   },
//   {
//     value: 'illy',
//     id: 2,
//     lable: 'Illy',
//     checked: true,
//   },
// ]

// const Task1Func = () => {
//   const classes = useStyles();

//   const [names, setNames] = useState([...NAMES])

//   const handleChecked = (id) => {
//     const copyNames = [...names];

//     copyNames[id].checked = !copyNames[id].checked;

//     setNames(copyNames);
//   }

//   return (
//     <List className={classes.root}>
//       {names.map((item) =>
//         <List.Item
//           className={classes.listItem}
//           key={item.id}
//         >
//           <Checkbox
//             checked={item.checked}
//             onChange={() => handleChecked(item.id)}
//           />
//           <LoadingOutlined />
//           <Typography.Text style={{ textDecoration: item.checked ? 'line-through' : 'initial' }}>
//             {item.lable}
//           </Typography.Text>
//         </List.Item>)}
//     </List >
//   )
// }


// const WORKERS = [
//   {
//     key: '1',
//     name: 'Mike Black',
//     salary: 1000,
//     checked: true,
//   },
//   {
//     key: '2',
//     name: 'John Green',
//     salary: 800,
//     checked: true,
//   },
//   {
//     key: '3',
//     name: 'Joe Black',
//     salary: 1200,
//     checked: true,
//   },
// ];

// const columns = [
//   {
//     title: 'Name',
//     dataIndex: 'name',
//     key: 'name',
//   },
//   {
//     title: 'Salary',
//     dataIndex: 'salary',
//     key: 'salary',
//   },
// ];

// const Task2Func = () => {
//   const [workers, setWorkers] = useState([...WORKERS])

//   const getSumOfChecked = () => {
//     let sum = 0;

//     workers.forEach((worker) => {
//       if (worker.checked) {
//         sum += worker.salary;
//       }
//     })

//     return sum;
//   }

//   const rowSelectionConfig = {
//     type: 'checkbox',
//     selectedRowKeys: workers.map((worker) => {
//       if (worker.checked) return worker.key
//     }),
//     onChange: (selectedRowKeys) => {
//       const copyWorkers = [...workers];

//       workers.forEach((worker, id) => {
//         if (selectedRowKeys.includes(worker.key)) {
//           copyWorkers[id].checked = true;
//         } else {
//           copyWorkers[id].checked = false;
//         }
//       })

//       setWorkers(copyWorkers);
//     }
//   };

//   return (
//     <Box>
//       <Table dataSource={workers} columns={columns} rowSelection={rowSelectionConfig} />
//       <Typography variant="inherit">{getSumOfChecked()}</Typography>
//     </Box>
//   )
// }

// class Task2 extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = { workers: [...WORKERS] };
//   }

//   getSumOfChecked() {
//     let sum = 0;

//     this.state.workers.forEach((worker) => {
//       if (worker.checked) {
//         sum += worker.salary;
//       }
//     })

//     return sum;
//   }

//   render() {
//     const rowSelectionConfig = {
//       type: 'checkbox',
//       selectedRowKeys: this.state.workers.map((worker) => {
//         if (worker.checked) return worker.key
//       }),
//       onChange: (selectedRowKeys) => {
//         const copyWorkers = [...this.state.workers];

//         this.state.workers.forEach((worker, id) => {
//           if (selectedRowKeys.includes(worker.key)) {
//             copyWorkers[id].checked = true;
//           } else {
//             copyWorkers[id].checked = false;
//           }
//         })

//         this.setState(copyWorkers);
//       }
//     };


//     return (
//       <Box>
//         <Table dataSource={this.state.workers} columns={columns} rowSelection={rowSelectionConfig} />
//         <Typography variant="inherit">{this.getSumOfChecked()}</Typography>
//       </Box >
//     )
//   }
// }
// const NAMES_ITEM = [
//   {
//     id: 0,
//     value: 'Bohdan',
//     checked: true,
//   },
//   {
//     id: 1,
//     value: 'David',
//     checked: true,
//   }
// ]

// const Task3Func = () => {
//   const [names, setNames] = useState([...NAMES_ITEM])

//   const handleChecked = (id) => {
//     const copyNames = ([...names])

//     copyNames[id].checked = !copyNames[id].checked

//     setNames(copyNames)
//   }

//   return (
//     <Box>
//       {names.map((name) =>
//         <Typography key={name.id}>
//           <Checkbox
//             checked={name.checked}
//             onChange={() => handleChecked(name.id)}
//           />
//           {name.checked ? name.value : ''}
//         </Typography>)}
//     </Box>
//   )
// }

// class Task3 extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = { names: [...NAMES_ITEM] }
//   }

//   handleChecked(id) {
//     const copyNames = ([...this.state.names])

//     copyNames[id].checked = !copyNames[id].checked

//     this.setState(copyNames)
//   }
//   render() {
//     return (
//       <Box>
//         {this.state.names.map((name) =>
//           <Typography key={name.id}>
//             <Checkbox
//               checked={name.checked}
//               onChange={() => this.handleChecked(name.id)}
//             />
//             {name.checked ? name.value : ''}
//           </Typography>)}
//       </Box>
//     )
//   }
// }

// const USERS = [
//   {
//     id: 0,
//     name: 'Коля',
//     surname: 'Иванов',
//     age: 30,
//     checked: true,

//   },
//   {
//     id: 1,
//     name: 'Вася',
//     surname: 'Петров',
//     age: 40,
//     checked: true,

//   },
//   {
//     id: 2,
//     name: 'Петя',
//     surname: 'Сидоров',
//     age: 50,
//     checked: true,
//   },
// ]

// const useStyles = createUseStyles({
//   root: {
//     color: 'red',
//   },
// })

// const Task4Func = () => {
//   const classes = useStyles();

//   const [users, setUsers] = useState([...USERS])

//   const handleChecked = (id) => {
//     const copyNames = [...users]

//     copyNames[id].checked = !copyNames[id].checked

//     setUsers(copyNames)
//   }

//   return (
//     <List
//       className={classes.root}
//       dataSource={users}
//       size="small"
//       renderItem={(item) => (
//         <List.Item key={item.id}>
//           <Checkbox onChange={() => handleChecked(item.id)} />
//           <Typography >
//             {item.name}
//             {item.checked && ` ${item.surname} ${item.age}`}
//           </Typography>
//         </List.Item>
//       )}
//     />
//   )
// }

// class Task4 extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = ({ users: [...USERS] })
//   }

//   handleChecked(id) {
//     const copyNames = [...this.state.users]

//     copyNames[id].checked = !copyNames[id].checked

//     this.setState(copyNames)
//   }
//   render() {
//     return (
//       <List
//         dataSource={this.state.users}
//         size="small"
//         renderItem={(item) => (
//           <List.Item key={item.id}>
//             <Checkbox onChange={() => this.handleChecked(item.id)} />
//             <Typography >
//               {item.name}
//               {item.checked && ` ${item.surname} ${item.age}`}
//             </Typography>
//           </List.Item>
//         )}
//       />
//     )
//   }
// }

// const ITEMS = [
//   {
//     id: 0,
//     value: 'Bohdan',
//     showItnput: false,
//   },
//   {
//     id: 1,
//     value: 'David',
//     showItnput: false,
//   },
//   {
//     id: 2,
//     value: 'Illy',
//     showItnput: false,
//   },
// ]

// const Task5Func = () => {
//   const [item, setItem] = useState({ items: [...ITEMS], value: '' })


//   const showInput = (id) => {
//     const copyItems = { ...item };

//     copyItems.items[id].showItnput = true;

//     setItem(copyItems);
//   }

//   const handleInput = (event) => {
//     const copyUsers = { ...item };
//     copyUsers.value = event.target.value

//     setItem(copyUsers)
//   }

//   const handleInputBlur = (id) => {
//     const copyItems = { ...item };

//     if (item.value != '') {

//       copyItems.items[id].value = item.value;
//       copyItems.items[id].showItnput = false;

//       setItem(copyItems);
//     }
//   }

//   return (
//     <List>
//       {item.items.map((item) =>
//         <List.Item key={item.id} onClick={() => showInput(item.id)}>
//           {item.showItnput ?
//             <Input
//               onChange={handleInput}
//               onBlur={() => handleInputBlur(item.id)}
//             /> : item.value}
//         </List.Item>)}
//     </List>
//   )
// }



// class Task5 extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = ({ items: [...ITEMS], value: '', })
//   }


//   showInput(id) {
//     const copyItems = ([...this.state.items]);

//     copyItems[id].showItnput = true;

//     this.setState(copyItems);
//   }

//   changeValue(event) {
//     const copyItems = ({ ...this.state });

//     copyItems.value = event.target.value

//     this.setState(copyItems)
//   }

//   handleInputBlur(id) {
//     const copyItems = [...this.state.items];

//     if (this.state.value != '') {

//       copyItems[id].value = this.state.value;
//       copyItems[id].showItnput = false;

//       this.setState(copyItems);
//     } else {
//       alert('Введите коректное значение!')
//     }

//   }

//   render() {
//     return (
//       <List>
//         {this.state.items.map((item) =>
//           <List.Item key={item.id} onClick={() => this.showInput(item.id)}>
//             {item.showItnput ?
//               <Input
//                 onChange={this.changeValue()}
//                 onBlur={() => this.handleInputBlur(item.id)}
//               /> : item.value}
//           </List.Item>)}
//       </List>
//     )
//   }
// }

// const USERS = [
//   {
//     id: 0,
//     name: { value: 'David', isEditable: false },
//     age: { value: 30, isEditable: false }, showInputName: false,
//   },
//   {
//     id: 1,
//     name: { value: 'Illy', isEditable: false },
//     age: { value: 40, isEditable: false },
//   },
//   {
//     id: 2,
//     name: { value: 'Bohdan', isEditable: false },
//     age: { value: 50, isEditable: false },
//   },
// ]

// const Task6Func = () => {
//   const [users, setUsers] = useState({ items: [...USERS], value: '', })

//   const handleShowInput = (id, field) => {
//     const copyUsers = { ...users };
//     copyUsers.items[id][field].isEditable = true;

//     setUsers(copyUsers)
//   }

//   const handleInput = (event) => {
//     const copyUsers = { ...users };
//     copyUsers.value = event.target.value

//     setUsers(copyUsers)
//   }

//   const handleInputBlur = (id, field) => {
//     const copyItems = { ...users };

//     if (users.value != '') {

//       copyItems.items[id][field].value = users.value;
//       copyItems.items[id][field].isEditable = false;

//     }
//     setUsers(copyItems);
//   }

//   return (
//     <Table>
//       {users.items.map((item) =>
//         <TableRow>
//           <TableCell>
//             {item.age.isEditable ?
//               <Input
//                 onChange={handleInput}
//                 onBlur={() => handleInputBlur(item.id, 'age')} /> :
//               <Typography>
//                 {item.age.value}
//                 <Button onClick={() => handleShowInput(item.id, 'age')}>Редактировать</Button>
//               </Typography>
//             }
//           </TableCell>
//           <TableCell>
//             {item.name.isEditable ?
//               <Input
//                 onChange={handleInput}
//                 onBlur={() => handleInputBlur(item.id, 'name')} /> :
//               <Typography>
//                 {item.name.value}
//                 <Button onClick={() => handleShowInput(item.id, 'name')}>Редактировать</Button>
//               </Typography>}
//           </TableCell>
//         </TableRow>)}
//     </Table >
//   )
// }


// class Task6 extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = { items: [...USERS], value: '', }
//   }

//   handleShowInput(id, field) {
//     const copyUsers = { ...this.state };
//     copyUsers.items[id][field].isEditable = true;

//     this.setState(copyUsers)
//   }

//   handleInput(event) {
//     const copyUsers = { ...this.state };
//     copyUsers.value = event.target.value

//     this.setState(copyUsers)
//   }

//   handleInputBlur(id, field) {
//     const copyItems = { ...this.state };

//     if (this.state.value != '') {

//       copyItems.items[id][field].value = this.state.value;
//       copyItems.items[id][field].isEditable = false;

//     }
//     this.setState(copyItems);
//   }
//   render() {
//     return (
//       <Table>
//         {this.state.items.map((item) =>
//           <TableRow>
//             <TableCell>
//               {item.age.isEditable ?
//                 <Input
//                   onChange={this.handleInput}
//                   onBlur={() => this.handleInputBlur(item.id, 'age')} /> :
//                 <Typography>
//                   {item.age.value}
//                   <Button onClick={() => this.handleShowInput(item.id, 'age')}>Редактировать</Button>
//                 </Typography>
//               }
//             </TableCell>
//             <TableCell>
//               {item.name.isEditable ?
//                 <Input
//                   onChange={this.handleInput}
//                   onBlur={() => this.handleInputBlur(item.id, 'name')} /> :
//                 <Typography>
//                   {item.name.value}
//                   <Button onClick={() => this.handleShowInput(item.id, 'name')}>Редактировать</Button>
//                 </Typography>}
//             </TableCell>
//           </TableRow>)}
//       </Table >
//     )
//   }
// }

// const TOURISTROUTES = [
//   {
//     id: 0,
//     value: 'Черкассы - Польша',
//     show: false,
//   },
//   {
//     id: 1,
//     value: 'Черкассы - Венгрия',
//     show: false,
//   },
//   {
//     id: 2,
//     value: 'Черкассы - Словакия',
//     show: false,
//   }
// ]

// const Direcrions = (props) => {
//   console.log(props);

//   return (
//     <List>
//       {props.data.items.map((item) =>
//         <List.Item>{item.value}
//           <Radio
//             checked={item.show}
//             onClick={() => props.handleFunc(item.id)} />
//         </List.Item>
//       )}
//     </List>
//   )
// }




// / создать три компонента
// первый выводит имя
// второй выводит возраст (тут использовать props в остальных диструктуризацию)
// третий выводит почту

// const NameComponent = (props) => {

//   return (
//     <Typography>{props.data}</Typography>
//   )
// }
// const AgeComponent = ({ data }) => {

//   return (
//     <Typography>{data}</Typography>
//   )
// }
// const EmailComponent = (props) => {

//   return (
//     <Typography>{props.data}</Typography>
//   )
// }

// const MainComponent = () => {
//   const [user, setUser] = useState({ name: 'Bohdan', age: 19, email: 'email@gmail.com' })

//   return (
//     <Box>
//       <NameComponent data={user.name} />
//       <AgeComponent data={user.age} />
//       <EmailComponent data={user.email} />
//     </Box >
//   )
// }

// const Inputfield = ({ handleRef, handleFunc }) => {
//   return (
//     <Box>
//       <textarea
//         cols="30"
//         rows="10"
//         ref={handleRef}>
//       </textarea>
//       <Button onClick={handleFunc}>Добавить</Button>
//     </Box>
//   )
// }

// const СhangesGroup = ({ data, deletFunc, showFunc, blurFunc, handleRef }) => {
//   return (
//     <Box>
//       {data.map((item) =>
//         <Box>
//           <Typography>
//             {item.id} {item.value}
//           </Typography>
//           <Box>
//             {item.date}
//             <Button
//               onClick={() => deletFunc(item.id)}
//             >
//               Удалить
//             </Button>
//             <Button
//               onClick={() => showFunc(item.id, item.show)}
//             >
//               Изменить
//             </Button>
//             <Box>
//               {item.edits && (
//                 <Input
//                   onBlur={() => blurFunc(item.id)}
//                   ref={handleRef}
//                 />
//               )}
//             </Box>
//           </Box>
//         </Box>
//       )}
//     </Box>
//   )
// }

// const Task8Func = () => {
//   const [items, setItems] = useState([])

//   const dataTextera = useRef('')

//   const dataInput = useRef('')

//   const date = new Date().toLocaleTimeString();

//   const addNewPost = () => {
//     const copyItems = [...items]

//     if (dataTextera.current.value != '') {
//       copyItems.push({
//         id: 1 + copyItems.length,
//         value: dataTextera.current.value,
//         edits: false,
//         date: date
//       })
//     }

//     setItems(copyItems)

//     dataTextera.current.value = null


//   }

//   const showInput = (id, show) => {
//     const copyItems = [...items]

//     copyItems[id - 1].edits = true

//     setItems(copyItems)
//   }

//   const deletPost = (id) => {
//     const copyItems = [...items]

//     console.log('ID', id);
//     console.log('Array', copyItems);


//     copyItems.splice(id - 1, 1)

//     setItems(copyItems)
//   }

//   const handleInputBlur = (id) => {
//     const copyItems = [...items];

//     if (dataInput.current.value != '') {

//       copyItems[id - 1].value = dataInput.current.input.value;
//       copyItems[id - 1].edits = false;

//     }
//     setItems(copyItems);
//     console.log(dataInput);
//   }


//   return (
//     <Box>
//       <Inputfield
//         handleRef={dataTextera}
//         handleFunc={addNewPost}
//       />
//       <СhangesGroup
//         data={items}
//         deletFunc={deletPost}
//         handleRef={dataInput}
//         showFunc={showInput}
//         blurFunc={handleInputBlur}
//       />
//     </Box>
//   )
// }
// //////////////////////////////////////////////////////
// const WORKERS = [
//   {
//     firstName: 'Bohdan Semenov',
//     salary: 100,
//   },
//   {
//     firstName: 'Illy Ilich',
//     salary: 400,
//   },
//   {
//     firstName: 'Misha Zelenskii',
//     salary: 1000,
//   },
//   {
//     firstName: 'Dany Vostochnii',
//     salary: 1200,
//   }
// ]

// const WorkersTable = ({ data, sortNameFunc, sortSalaryFunc }) => {
//   return (
//     <Table>
//       <Button onClick={sortNameFunc}>Сортировать по имени</Button>
//       <Button onClick={sortSalaryFunc}>Сортировать по зарплате</Button>
//       {data.map((worker) =>
//         <TableRow>
//           <TableCell>
//             workers: {worker.firstName}
//           </TableCell>
//           <TableCell>
//             salary: {worker.salary}
//           </TableCell>
//         </TableRow>
//       )}
//     </Table>
//   )
// }


// const Task9Func = () => {
//   const [workers, setWorkers] = useState(WORKERS)

//   const sortWorkersSalary = (arr) => {
//     const copyWorkers = [...workers]

//     copyWorkers.sort((a, b) => a.salarry > b.salarry ? 1 : -1);

//     setWorkers(copyWorkers)
//   }

//   const sortWorkersName = (field) => {
//     const copyWorkers = [...workers]

//     copyWorkers.sort((a, b) => a[field] > b[field] ? 1 : -1)

//     setWorkers(copyWorkers)
//   }


//   return (
//     <WorkersTable
//       data={workers}
//       sortNameFunc={sortWorkersName}
//       sortSalaryFunc={sortWorkersSalary}
//     />
//   )

// }

// const RUSSIAN_DAYS_OF_THE_WEEK = [
//   'Понедельник',
//   'Вторник',
//   'Среда',
//   'Четверг',
//   'Пятница',
//   'Суббота',
//   'Воскресенье'
// ]
// const ENGLISH_DAYS_OF_THE_WEEK = [
//   'Tuesday',
//   'Wednesday',
//   'Thursday',
//   'Friday',
//   'Saturday',
//   'Sunday'
// ]

// const Task10Func = () => {
//   const [language, setLanguage] = useState({
//     eng: ENGLISH_DAYS_OF_THE_WEEK,
//     rus: RUSSIAN_DAYS_OF_THE_WEEK,
//     languagerus: true
//   })

//   const handleLanguage = () => {
//     const copyItems = { ...language }
//     if (copyItems.languagerus != true) {
//       copyItems.languagerus = true
//     } else {
//       copyItems.languagerus = false
//     }
//     setLanguage(copyItems)
//   }

//   const handleDaysOfWeek = (event) => {
//     setLanguage(event.target.value)
//   }

//   return (
//     <Box style={{ margin: 10 }}>
//       <FormControl fullWidth>
//         <InputLabel>
//           Language
//         </InputLabel>
//         <Select
//           defaultValue={1}
//           label='Language'
//           onChange={handleLanguage}
//         >
//           <MenuItem value={1}>Russian</MenuItem>
//           <MenuItem value={2}>English</MenuItem>
//         </Select>
//       </FormControl>
//       <Box style={{ margin: 10 }}>
//         <FormControl fullWidth>
//           <InputLabel>Day of Week</InputLabel>
//           <Select
//             label='Language'
//             onChange={handleDaysOfWeek}
//           >
//             {language.languagerus ? language.rus.map((day) => <MenuItem>{day}</MenuItem>) :
//               language.eng.map((day) => <MenuItem>{day}</MenuItem>)}
//           </Select>
//         </FormControl>
//       </Box>
//     </Box>
//   )
// }


// const Task11Func = () => {

//   const [email, setEmail] = useState({ value: '' })

//   const handleInputValue = (event) => {
//     const stateCopy = { ...email }

//     setEmail({ ...stateCopy, value: event.target.value })
//     console.log(email.value);
//   }


//   return (
//     <Box style={{ margin: 10 }}>
//       <Input
//         style={{
//           borderColor: (email.value.length <= 9 && email.value.length >= 4) ? 'green' : 'red',
//           borderWidth: 10
//         }}
//         label='Email'
//         onChange={handleInputValue}
//       />
//     </Box>
//   )
// }

// const WORKERS = [
//   {
//     name: 'Bohdan',
//     lastName: 'Semenov',
//     salary: '400',
//     gender: 'Male'
//   },
// ]

// const WorkersItemLable = ({ data }) => {
//   return (
//     <Box>
//       <Table>
//         <TableHead>
//           <TableRow>
//             <TableCell >Name</TableCell>
//             <TableCell align="right">Last name</TableCell>
//             <TableCell align="right">Salary</TableCell>
//             <TableCell align="right">Gender</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {data.map((worker) =>
//             <TableRow>
//               <TableCell>{worker.name}</TableCell>
//               <TableCell align="right">{worker.lastName}</TableCell>
//               <TableCell align="right">{worker.salary}</TableCell>
//               <TableCell align="right">{worker.gender}</TableCell>
//             </TableRow>
//           )}
//         </TableBody>
//       </Table>
//     </Box>
//   )
// }


// const NewWorkers = ({ data, addNewWorker }) => {
//   const schema = yup.object().shape({
//     name: yup.string(),
//     lastName: yup.string(),
//     salary: yup.number(),
//   })

//   const {
//     handleSubmit,
//     formState: { errors },
//     control
//   } = useForm({
//     mode: 'onSubmit',
//     resolver: yupResolver(schema),
//     defaultValues: {
//       name: '',
//       lastName: '',
//       salary: null,
//       gender: ''
//     }
//   })



//   return (
//     <form style={{ margin: 10 }} onSubmit={handleSubmit(addNewWorker)}>
//       <Controller
//         name="name"
//         control={control}
//         render={({ field }) => (
//           <TextField
//             placeholder="Name"
//             required
//             label="Name"
//             {...field}
//           />
//         )}
//       />
//       <Controller
//         name="lastName"
//         control={control}
//         render={({ field }) => (
//           <TextField
//             placeholder="Last name"
//             required
//             label="Last name"
//             {...field}
//           />
//         )}
//       />
//       <Controller
//         name="salary"
//         control={control}
//         render={({ field }) => (
//           <TextField
//             placeholder="Salary"
//             required
//             label="Salary"
//             {...field}
//           />
//         )}
//       />
//       <Controller
//         name="gender"
//         control={control}
//         render={({ field }) => <Select
//           {...field}
//           options={[
//             { value: "Male", label: "Male" },
//             { value: "Female", label: "Female" },
//           ]}
//         />}
//       />
//       <Button type="submit">Добавить</Button>
//     </form>
//   )
// }

// const Task12Func = () => {
//   const [workers, setWorkers] = useState(WORKERS)

//   const onSubmit = (values) => {
//     const copyWorkers = [...workers]
//     onCreate(values)
//     copyWorkers.push({
//       name: values.name,
//       lastName: values.lastName,
//       salary: values.salary,
//       gender: values.gender.value
//     })
//     setWorkers(copyWorkers)
//     console.log(copyWorkers);
//   }

//   const onCreate = async values => {
//     console.log('[ON_CREATE]', values)
//   }

//   return (
//     <Box>
//       <WorkersItemLable data={workers} />
//       <NewWorkers
//         addNewWorker={onSubmit}
//         data={workers} />
//     </Box>
//   )
// }

// const WORKERS = [
//   {
//     id: 1,
//     name: 'Bohdan',
//     lastName: 'Semenov',
//     salary: '1000'
//   },
//   {
//     id: 2,
//     name: 'Bohdan',
//     lastName: 'Semenov',
//     salary: '1000'
//   },
//   {
//     id: 3,
//     name: 'Bohdan',
//     lastName: 'Semenov',
//     salary: '1000'
//   },
//   {
//     id: 4,
//     name: 'Bohdan',
//     lastName: 'Semenov',
//     salary: '1000'
//   },
//   {
//     id: 5,
//     name: 'Bohdan',
//     lastName: 'Semenov',
//     salary: '1000'
//   },
//   {
//     id: 6,
//     name: 'Bohdan',
//     lastName: 'Semenov',
//     salary: '1000'
//   },
//   {
//     id: 7,
//     name: 'Bohdan',
//     lastName: 'Semenov',
//     salary: '1000'
//   },
//   {
//     id: 8,
//     name: 'Bohdan',
//     lastName: 'Semenov',
//     salary: '1000'
//   },
//   {
//     id: 9,
//     name: 'Bohdan',
//     lastName: 'Semenov',
//     salary: '1000'
//   },
//   {
//     id: 10,
//     name: 'Bohdan',
//     lastName: 'Semenov',
//     salary: '1000'
//   },
//   {
//     id: 11,
//     name: 'Bohdan',
//     lastName: 'Semenov',
//     salary: '1000'
//   },
//   {
//     id: 12,
//     name: 'Bohdan',
//     lastName: 'Semenov',
//     salary: '1000'
//   },
//   {
//     id: 13,
//     name: 'Bohdan',
//     lastName: 'Semenov',
//     salary: '1000'
//   },
//   {
//     id: 14,
//     name: 'Bohdan',
//     lastName: 'Semenov',
//     salary: '1000'
//   },
//   {
//     id: 15,
//     name: 'Bohdan',
//     lastName: 'Semenov',
//     salary: '1000'
//   },
//   {
//     id: 16,
//     name: 'Bohdan',
//     lastName: 'Semenov',
//     salary: '1000'
//   },
//   {
//     id: 17,
//     name: 'Bohdan',
//     lastName: 'Semenov',
//     salary: '1000'
//   },
//   {
//     id: 18,
//     name: 'Bohdan',
//     lastName: 'Semenov',
//     salary: '1000'
//   },
//   {
//     id: 19,
//     name: 'Bohdan',
//     lastName: 'Semenov',
//     salary: '1000'
//   },
//   {
//     id: 20,
//     name: 'Bohdan',
//     lastName: 'Semenov',
//     salary: '1000'
//   },
//   {
//     id: 21,
//     name: 'Bohdan',
//     lastName: 'Semenov',
//     salary: '1000'
//   },
// ]

// const TableWorkers = ({ data, showNextPage }) => {


//   return (
//     <Table>
//       <TableHead>
//         <TableRow>
//           <TableCell >Name</TableCell>
//           <TableCell >Last name</TableCell>
//           <TableCell >Salary</TableCell>
//         </TableRow>
//       </TableHead>
//       <TableBody>
//         {data.map((worker) =>
//           <TableRow>
//             <TableCell >{worker.id} {worker.name}</TableCell>
//             <TableCell >{worker.lastName}</TableCell>
//             <TableCell >{worker.salary}</TableCell>
//           </TableRow>
//         )}
//       </TableBody>
//     </Table>
//   )
// }

// const Task13Func = () => {

//   const [currentPage, setCurrentPage] = useState(1);
//   const [perPage, setPerPage] = useState({ defaultPerPage: 10, setPerPage: 10 });

//   const pagesQuantity = Math.ceil(WORKERS.length / perPage.setPerPage);

//   const getPagesArr = () => {

//     let arrOfPages = [];

//     for (let i = 1; i <= pagesQuantity; i++) {
//       arrOfPages.push(i);
//     }

//     return arrOfPages;
//   }

//   const prevPage = () => {
//     let copycurrentPage = currentPage

//     copycurrentPage = currentPage - 1

//     setCurrentPage(copycurrentPage)
//   }
//   const nextPage = () => {
//     let copycurrentPage = currentPage

//     copycurrentPage = currentPage + 1

//     setCurrentPage(copycurrentPage)

//   }

//   const getWorkersByPage = () => {
//     const copyWorkers = [...WORKERS];

//     const endIndex = currentPage * perPage.setPerPage;
//     const startIndex = endIndex - perPage.setPerPage;

//     return copyWorkers.slice(startIndex, endIndex);
//   }

//   const handleChange = (event) => {
//     const copyPerPage = { ...perPage }
//     copyPerPage.setPerPage = event.target.value
//     setPerPage(copyPerPage);
//     console.log(copyPerPage);
//   };

//   return (
//     <Box padding={10}>
//       <IconButton
//         onClick={prevPage}
//         disabled={currentPage <= 1 ? true : false}
//       >
//         <ArrowBackIosIcon />
//       </IconButton>
//       {getPagesArr().map((pageNumber) => (
//         <Button
//           size='small'
//           variant={pageNumber === currentPage ? 'contained' : 'outlined'}
//           onClick={() => setCurrentPage(pageNumber)}
//           key={pageNumber}>
//           {pageNumber}
//         </Button>
//       ))}
//       <IconButton
//         disabled={currentPage >= pagesQuantity ? true : false}
//         onClick={nextPage}>
//         <ArrowForwardIosIcon />
//       </IconButton>
//       <Select onChange={handleChange} value={perPage.setPerPage} variant='standard'>
//         <MenuItem value={5}>5</MenuItem>
//         <MenuItem value={10}>10</MenuItem>
//         <MenuItem value={15}>15</MenuItem>
//       </Select>
//       <TableWorkers data={getWorkersByPage()} />
//     </Box>
//   )
// }

// const TOWNS = []

// const Task14Func = () => {
//   const inputValue = useRef(null)

//   const [town, setTown] = useState({ towns: TOWNS, value: '' })

//   const handleSelect = (event) => {
//     const copyTown = { ...town }

//     copyTown.value = event.target.value

//     setTown(copyTown);
//   }

//   const addNewTown = () => {
//     console.log(inputValue);
//     const copyTowns = { ...town }
//     if (inputValue.current.value != '') {

//       copyTowns.towns.push({ id: ++TOWNS.length, name: inputValue.current.value })

//       inputValue.current.value = null

//       setTown(copyTowns)
//     }
//   }

//   return (
//     <Box>
//       <TextField variant="standard" inputRef={inputValue} />
//       <Button onClick={addNewTown}>Добавить</Button>
//       <Select onChange={handleSelect} value={town.value} variant='standard'>
//         {town.towns.map((towns) => <MenuItem value={towns.name} key={towns.id}>{towns.name}</MenuItem>)}
//       </Select>
//       <Typography>{town.value}</Typography>
//     </Box>
//   )
// }

const CURRENCY_FROM = [
  {
    id: 1,
    dollar: 0.038,
    name: 'UA'
  },
  {
    id: 2,
    dollar: 0.014,
    name: 'RUB'
  },
  {
    id: 3,
    dollar: 1,
    name: 'USA'
  }
]
const CURRENCY_TO = [
  {
    id: 1,
    dollar: 26.44,
    name: 'UA'
  },
  {
    id: 2,
    dollar: 71.21,
    name: 'RUB',
  },
  {
    id: 3,
    dollar: 1,
    name: 'USA',
  }
]

const Task15Func = () => {
  const [currencies, setCurrencys] = useState({
    from: {
      id: 1,
      value: 0.038
    },
    to: {
      id: 3,
      value: 1
    },
    value: {
      from: 0.038,
      to: 1
    },
    currency: null
  })

  const currencysNumber = useRef(null)

  const handleSelect = (event, field) => {
    const copyCurrencys = { ...currencies };

    copyCurrencys.value[field] = event.target.value;

    copyCurrencys.value[field] = event.target.value;

    copyCurrencys[field].value = event.target.value;

    copyCurrencys[field].value = event.target.value;


    setCurrencys(copyCurrencys);
  }

  const getKey = (key, field) => {
    const copyCurrencys = { ...currencies };

    copyCurrencys[field].id = key;

    copyCurrencys[field].id = key;

  }

  const calculateCurrency = () => {
    const copyCurrencys = { ...currencies };

    if (currencies.from.id != currencies.to.id) {

      const currency = Number(currencysNumber.current.value) * currencies.from.value * currencies.to.value;

      copyCurrencys.currency = Number(currency.toFixed(2));
      setCurrencys(copyCurrencys);
    }

  }


  return (
    <Box>
      <TextField type='number' variant='standard' inputRef={currencysNumber} />
      <Select
        name="from"
        onChange={(event) => handleSelect(event, 'from')}
        value={currencies.value.from}
        variant='standard'>
        {CURRENCY_FROM.map((currency) =>
          <MenuItem
            name="froom"
            onClick={() => getKey(currency.id, 'from')}
            value={currency.dollar}
            key={currency.id}
          >
            {currency.name}
          </MenuItem>)}
      </Select>
      <Select
        name="to"
        onChange={(event) => handleSelect(event, 'to')}
        value={currencies.value.to}
        variant='standard'
      >
        {CURRENCY_TO.map((currency) =>
          <MenuItem
            name="to"
            onClick={() => getKey(currency.id, 'to')}
            value={currency.dollar}
            key={currency.id}
          >
            {currency.name}
          </MenuItem>)}
      </Select>
      <Button onClick={calculateCurrency}>Конвертировать</Button>
      <Typography>{currencies.currency}</Typography>
    </Box>
  )
}

// const TESTS = [
//   {
//     question: 'question1',
//     answers: [
//       'Ответ1',
//       'Ответ2',
//       'Ответ3',
//       'Ответ4',
//       'Ответ5',
//     ],
//     right: 3,
//   },
//   {
//     question: 'question2',
//     answers: [
//       'Ответ1',
//       'Ответ2',
//       'Ответ3',
//       'Ответ4',
//       'Ответ5',
//     ],
//     right: 5,
//   },
//   {
//     question: 'question3',
//     answers: [
//       'Ответ1',
//       'Ответ2',
//       'Ответ3',
//       'Ответ4',
//       'Ответ5',
//     ],
//     right: 1,
//   }
// ]


// const Task16Func = () => {
//   const [test, setTest] = useState({
//     question1: null,
//     question2: null,
//     question3: null,
//   })

//   const handleRadio = (event, field) => {
//     const copyTest = { ...test }
//   }
//   return (
//     <FormControl >
//       {TESTS.map((questions) =>
//         <Box>
//           <FormLabel
//             name={questions.question}
//             component="legend"
//           >
//             {questions.question}
//           </FormLabel>
//           <RadioGroup
//             name={questions.question}
//             onChange={(event) => handleRadio(questions.question)}
//             row>
//             {questions.answers.map((answer, key) =>
//               <FormControlLabel
//                 value={key}
//                 control={<Radio />}
//                 label={answer} />
//             )}
//           </RadioGroup>
//         </Box>
//       )}
//       <Button onClick={() => { }}>Check test</Button>
//     </FormControl >
//   )
// }

export default Task15Func
