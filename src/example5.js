//Getting username and password in Console log

import React,{useState} from "react";

function LoginForm() {
    const [form, setState] = useState({
      username: '',
      password: ''
    });
  
    const printValues = e => {
      e.preventDefault();
      console.log(form.username, form.password);
    };
  
    const updateField = e => {
      setState({
        ...form,
        [e.target.name]: e.target.value
      });
    };
  
    return (
        <div>
      <form onSubmit={printValues}>
        <label>
          Username:
          <input
            value={form.username}
            name="username"
            onChange={updateField}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            value={form.password}
            name="password"
            type="password"
            onChange={updateField}
          />
        </label>
        <br />
        <button>Submit</button>
      </form>
      </div>
    );
  }

export default LoginForm




// function LoginForm() {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
  
//     const printValues = e => {
//       e.preventDefault();
//       console.log(username, password);
//     };
  
//     return (
//       <form onSubmit={printValues}>
//         <label>
//           Username:
//           <input
//             value={username}
//             onChange={event => setUsername(event.target.value)}
//             name="username"
//             type="text"
//           />
//         </label>
//         <br />
//         <label>
//           Password:
//           <input
//             value={password}
//             onChange={event => setPassword(event.target.value)}
//             name="password"
//             type="password"
//           />
//         </label>
//         <br />
//         <button>Submit</button>
//       </form>
//     );
//   }