import { HashRouter as Router, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList';
import Details from '../Details/Details';
import AddMovie from '../AddMovie/AddMovie';
import { createMuiTheme, ThemeProvider} from '@material-ui/core';



const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#7b1fa2'
    },
    secondary: {
      main: '#78909c'
    }
  },

})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <h1>The Movies Saga!</h1>
        <Router>
          <Route path="/" exact>
            <MovieList />
          </Route>
          <Route path="/details">
            <Details />
          </Route>
          <Route path="/movie">
            <AddMovie />
          </Route>
        </Router>
      </div>
    </ThemeProvider>
  );
}


export default App;
