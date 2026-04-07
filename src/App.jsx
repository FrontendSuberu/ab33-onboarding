import logo from "/logo.svg";
import "./App.css";

function App() {
  return (
    <main data-form>
      <header className="verif-form-header">
        <img src={logo} alt="ab33 logo" />
      </header>

      <div className="form-wrapper">
        <h1>Sign Up</h1>
        <form method="post">
          <div data-form-group>
            <label htmlFor="fullName">
              <span>FULL NAME</span>
              <input type="text" />
            </label>

            <label htmlFor="email">
              <span>EMAIL</span>
              <input type="email" />
            </label>

            <label htmlFor="password">
              <span>PASSWORD</span>
              <input type="password" />
            </label>
          </div>

          <span className="c-new-acct">Don't have an account? create one here</span>

          <div className="form-btn-group">
            <button>Create my account</button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default App;
