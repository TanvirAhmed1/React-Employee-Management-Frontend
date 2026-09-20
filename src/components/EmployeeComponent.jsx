import React, {useState} from 'react'

const EmployeeComponent = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    function saveEmployee(e) {
        e.preventDefault();
        const employee = { firstName, lastName, email };
        console.log(employee);
    }
  return (
    <div className="container mt-5">
        <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
                <h3 className="text-center">Add Employee</h3>
      
      <form>
        <div className="form-group">
          <label className='form-label'>First Name:</label>
          <input
            type="text"
            placeholder='Enter First Name'
            className="form-control"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Last Name:</label>
          <input
            type="text"
            placeholder='Enter Last Name'
            className="form-control"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="form-group mb-3">
          <label>Email:</label>
          <input
            type="email"
            placeholder='Enter Email'
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button className="btn btn-success" onClick={saveEmployee}>Submit</button>
      </form>
    </div>
    </div>
    </div>
  )
}

export default EmployeeComponent