import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {
  blueGrey800,
  blueGrey600,
  grey400,
  red400,
  grey100,
  grey500,
  darkBlack,
  white,
  grey300,
  fullBlack
} from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: blueGrey800,
    primary2Color: blueGrey600,
    primary3Color: grey400,
    accent1Color: red400,
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: darkBlack,
    canvasColor: white,
    borderColor: grey300,
    pickerHeaderColor: blueGrey800,
    shadowColor: fullBlack
  },
  appBar: {
    height: 50
  }
})
export default muiTheme;
