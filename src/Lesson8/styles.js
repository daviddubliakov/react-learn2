import { QuestionAnswerTwoTone } from "@mui/icons-material";
import { border, borderRadius } from "@mui/system";
import { createUseStyles } from "react-jss";


const useStyles = createUseStyles({
  root: {
    position: 'absolute',
    left: 0,
    right: 0,
    margin: 'auto',
    top: '40%',
    width: 320,
    height: 120,
    padding: 10,
    backgroundColor: 'silver',
    textAlign: 'center',
    borderRadius: 15,
  }
})

export default useStyles;
