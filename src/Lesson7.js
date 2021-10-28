import React, { useState, Fragment, useRef } from 'react';
import { Button, TextField, Box, List, ListItem, TableRow, TableCell, Table, TableHead, Checkbox, RadioGroup, Input, Autocomplete, Typography } from '@mui/material'

const Task1Func = () => {
  const [state, setState] = useState({ value: '' })

  const addText = (event) => {
    setState({ ...state, value: event.target.value })
  }

  return (
    <Box>
      <textarea
        cols="30"
        rows="10"
        onChange={addText}
      ></textarea>
      <Typography>{state.value}</Typography>
    </Box>
  )
}

// class Task1 extends React.Component {

//   constructor(props) {
//     super(props)
//     this.state = ({ value: '' })
//   }

//   addText = (event) => {
//     this.setState({ ...this.state, value: event.target.value })
//   }
//   render() {
//     return (
//       <Box>
//         <textarea
//           cols="30"
//           rows="10"
//           onChange={this.addText}
//         ></textarea>
//         <p>{this.state.value}</p>
//       </Box>
//     )
//   }
// }
//TODO class

const Task2Func = () => {
  const [checked, setChecked] = useState(false);

  return (
    <Box>
      <Checkbox
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      <Typography>{checked ? 'on' : 'off'}</Typography>
    </Box>
  )
}

// class Task2 extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = (false);
//   }

//   changeCheckbox() {
//     this.setState(!this.sate)
//   }

//   render() {
//     return (
//       <Box>
//         <Checkbox
//           checked={this.sate}
//           onChange={this.changeCheckbox.bind(this)}
//         />
//         <Typography>{this.sate ? 'on' : 'off'}</Typography>
//       </Box>
//     )
//   }
// }

const Task3Func = () => {
  const [checked, setChecked] = useState(false)
  return (
    <Box>
      <Checkbox
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      {checked && <Typography>Текст</Typography>}
    </Box>
  )
}

// class Task3 extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = (false)
//   }

//   render() {
//     return (
//       <Box>
//         <Checkbox
//           checked={this.state}
//           onChange={() => this.setChecked(!this.state)}
//         />
//         {this.state && <Typography>Текст</Typography>}
//       </Box>
//     )
//   }
// }

const Task4Func = () => {
  const [town, setTown] = useState({ value: '' })

  return (
    <Box>
      <select onChange={(event) => setTown({ town, value: event.target.value })}>
        <option value='Черкассы'>Черкассы</option>
        <option value='Киев'>Киев</option>
        <option value='Одесса'>Одесса</option>
      </select >
      <Typography>{town.value}</Typography>
    </Box>
  )
}

// class Task4 extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = ({ value: '' })
//   }
//   render() {
//     return (
//       <Box>
//         <select onChange={(event) => this.setState({ ...this.state, value: event.target.value })}>
//           <option value='Черкассы'>Черкассы</option>
//           <option value='Киев'>Киев</option>
//           <option value='Одесса'>Одесса</option>
//         </select>
//         <p>{this.state.value}</p>
//       </Box>
//     )
//   }
// }

const Task5Func = () => {
  const [town, setTown] = useState({
    towns: ['Черкассы', 'Киев', 'Одесса'],
    value: '',
  })

  return (
    <Box>
      <select onChange={(event) => setTown({ ...town, value: event.target.value })}>
        {town.towns.map((town, key) => <option value={town} key={key}>{town}</option>)}
      </select>
      <Typography>{town.value}</Typography>
    </Box>
  )
}

// class Task5 extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = ({
//       towns: ['Черкассы', 'Киев', 'Одесса'],
//       value: '',
//     })
//   }

//   render() {
//     return (
//       <Box>
//         <select onChange={(event) => this.setState({ ...this.state, value: event.target.value })}>
//           {this.state.towns.map((town, key) => <option value={town} key={key}>{town}</option>)}
//         </select>
//         <p>{this.state.value}</p>
//       </Box>
//     )
//   }
// }

const Task6Func = () => {
  const [number, setNumber] = useState({ numbers: [1, 2, 3], value: '' })

  const showSelected = (event) => {
    setNumber({ ...number, value: event.target.value })
  }
  return (
    <Box>
      {number.numbers.map((number, key) =>
        <input
          onChange={showSelected}
          value={number}
          key={key}
          type='radio'
        />
      )}
      <Typography>{number.value}</Typography>
    </Box>
  )
}

// class Task6 extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = ({ numbers: [1, 2, 3], value: '' })
//   }

//   showSelected(event) {
//     this.setState({ ...this.state, value: event.target.value })
//   }

//   render() {
//     return (
//       <Box>
//         {this.state.numbers.map((number, key) =>
//           <input
//             onChange={this.showSelected.bind(this)}
//             value={number}
//             key={key}
//             type='radio'
//           />
//         )}
//         <p>{this.state.value}</p>
//       </Box>
//     )
//   }
// }

const Task7Func = () => {
  const [texts, setText] = useState({ text: [''], value: '' });

  const handleTextera = (event) => {
    const copyText = { ...texts };

    setText({ ...copyText, value: event.target.value });
  }

  const addText = () => {
    const copyText = { ...texts };

    copyText.text.push(texts.value);

    setText(copyText);

    copyText.value = '';
  }

  return (
    <Box>
      <textarea
        onChange={handleTextera}
        cols="30"
        rows="10" />
      <Button onClick={addText}>Добавить текст</Button>
      {texts.text.map((text, key) => <Typography>{text}</Typography>)}
    </Box>
  )
}

const Task8Func = () => {
  const [color, setColor] = useState({ colors: ['red', 'green', 'orange'], value: '', })

  return (
    <Box>
      <select onChange={(event) => setColor({ ...color, value: event.target.value })}>
        {color.colors.map((color, key) => <option value={color} key={key}>{color}</option>)}
      </select>
      <p style={{ color: color.value }}>Абзац</p>
    </Box >
  )
}

const CHECKED_OPTIONS = [
  {
    id: 0,
    value: 'checked',
    label: 'Checked',
  },
  {
    id: 1,
    value: 'unchecked',
    label: 'Unchecked',
  },
];

const Task9Func = () => {
  const [isChecked, setIsChecked] = useState(CHECKED_OPTIONS[0].value)

  const handleOption = (event) => {

    setIsChecked(event.target.value)
  }


  return (
    <Box>
      <select value={isChecked} onChange={handleOption}>
        {CHECKED_OPTIONS.map((item) => (
          <option value={item.value} key={item.id}>
            {item.label}
          </option>
        ))}
      </select>
      <Checkbox
        checked={isChecked == CHECKED_OPTIONS[0].value ? true : false}
      />

    </Box >
  )
}

const PARAGRAPH_OPTION = [
  {
    id: 0,
    value: '1',
    label: '1параграф',
  },
  {
    id: 1,
    value: '2',
    label: '2параграф',
  },
  {
    id: 2,
    value: '3',
    label: '3параграф',
  },
];

const Task10Func = () => {
  const [paragraph, setParagraph] = useState(PARAGRAPH_OPTION[0].value)

  const handleOption = (event) => {

    setParagraph(event.target.value)
  }

  return (
    <Box>
      <select value={paragraph} onChange={handleOption}>
        {PARAGRAPH_OPTION.map((item) => (
          <option value={item.value} key={item.id}>
            {item.label}
          </option>
        ))}
      </select>
      <Typography>{paragraph[0] || paragraph[1] || paragraph[3]
      }</Typography>
    </Box >
  )
}


const ITEM_OPTION = [
  {
    id: 0,
    value: '',
    label: 'item',
  },
]

const Task11Func = () => {
  const [items, setItems] = useState(ITEM_OPTION)
  const inputEl = useRef(null)

  const handleOption = (event) => {

    setItems(event.target.value)
  }

  const addText = () => {
    const copyItems = [...items]
    copyItems.push({
      id: ITEM_OPTION.length,
      value: inputEl.current.value,
      label: inputEl.current.value,
    })

    inputEl.current.value = ''

    setItems(copyItems)
  }

  return (
    <Box>
      <select value={items} onChange={handleOption}>
        {items.map((item) => (
          <option value={item.value} key={item.id}>
            {item.label}
          </option>
        ))}
      </select>
      <TextField ref={inputEl} />
      <Button onClick={addText}>Добавить</Button>
    </Box>
  )
}
// class Task11 extends React.Component {
// constructor(props) {
// super(props)
// this.state = (ITEM_OPTION)
//   }
//   addText() {
//     const copyItems = [...this.state]
//     copyItems.push({
//       id: ITEM_OPTION.length,
//       value: inputEl.current.value,
//       label: inputEl.current.value,
//     })

//     inputEl.current.value = ''

//     setState(copyItems)
//   }

//   render() {
//     const inputEl = useRef(null)

//     return (
//       <Box>
//         <select value={items} onChange={handleOption}>
//           {this.state.map((item) => (
//             <option value={item.value} key={item.id}>
//               {item.label}
//             </option>
//           ))}
//         </select>
//         <TextField ref={inputEl} />
//         <Button onClick={addText()}>Добавить</Button>
//       </Box >
//     )
//   }
// }


const Task12Func = () => {
  const [isDisable, setDisable] = useState(true)

  return (
    <Box>
      <Checkbox
        checked={isDisable}
        onChange={() => setDisable(!isDisable)}
      />
      <TextField disabled={isDisable ? true : false} />
    </Box>
  )
}

// class Task12 extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = (true)
//   }
//   render() {
//     return (
//       <Box>
//         <Checkbox
//           checked={this.state}
//           onChange={() => this.setState(!this.state)}
//         />
//         <TextField disabled={this.state ? true : false} />
//       </Box>
//     )
//   }
// }


const Task13Func = () => {
  const [data, setData] = useState();

  return (
    <Box>
      <select></select>
      <select></select>
      <select></select>
    </Box>
  )
}
