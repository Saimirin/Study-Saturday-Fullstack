import React from 'react';

const NewStudentForm = ()=>{
    return (
        <div>
            <form>
                <label htmlFor='firstname'>First Name: </label>
                <input type='text' name='firstname' />               
                <label htmlFor='lastname'>Last Name: </label>
                <input type='text' name='lastname' />
                <label htmlFor='email'>Email: </label>
                <input type='text' name='email' />
            </form>
            <button>Submit</button>
        </div>
    )
}

export default NewStudentForm