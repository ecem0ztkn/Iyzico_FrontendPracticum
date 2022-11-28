import { Formik } from "formik";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Sign Up</h1>
      <Formik
        initialValues={{
          firstName: "Ecem",
          lastName: "Tunç",
          email: "ecemsultan0ztkn@gmail.com",
          gender: "male",
          hobbies: [],
          country:"Turkey"
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ handleChange, handleSubmit, values }) => (
          <form onSubmit={handleSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              name="firstName"
              onChange={handleChange}
              value={values.firstName}
            />

            <br />
            <br />

            <label htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              name="lastName"
              onChange={handleChange}
              value={values.lastName}
            />

            <br />
            <br />

            <label htmlFor="email" onChange={handleChange}>
              Email
            </label>
            <input
              id="email"
              name="email"
              value={values.email}
              type="email"
              onChange={handleChange}
            />

            <br />
            <br />

            <span>Male</span>
            <input
              type="radio"
              value="male"
              name="gender"
              onChange={handleChange}
              checked={values.gender === "male"}
            />

            <span>Female</span>
            <input
              type="radio"
              value="female"
              name="gender"
              onChange={handleChange}
              checked={values.gender === "female"}
            />

            <br />
            <br />

            <div>
              <span>Footbal</span>
              <input
                type="checkbox"
                name="hobbies"
                value="Football"
                onChange={handleChange}
              />
            </div>
            <div>
              <span>Cinema</span>
              <input
                type="checkbox"
                name="hobbies"
                value="Cinema"
                onChange={handleChange}
              />
            </div>
            <div>
              <span>Photografy</span>
              <input
                type="checkbox"
                name="hobbies"
                value="Photografy"
                onChange={handleChange}
              />
            </div>

            <br />
            <br />

            <select name="country" value={values.country} onChange={handleChange}>
              <option value="Turkey">Turkey</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="USA">USA</option>
            </select>

            <br />
            <br />

            <button type="submit">Submit</button>

            <br />
            <br />

            <code>{JSON.stringify(values)}</code>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default App;
