import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
    <header>
      <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
        <h5 className="my-0 mr-md-auto font-weight-normal">Bazar Bartiano</h5>
          <nav className="my-2 my-md-0 mr-md-3">
            <a className="p-2 text-dark" href="#">Home</a>
            <a className="p-2 text-dark" href="#">Productos</a>
            <a className="p-2 text-dark" href="#">Ecommerce</a>
            <a className="p-2 text-dark" href="#">Nosotros</a>
          </nav>
              <a class="btn btn-outline-primary" href="#">Ingresar</a>
      </div>
    </header>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
    </div>
  );
}

export default App;
