import {useState} from 'react'

function InputExample() {

    // const [name, setName] = useState('');
    // const [lastname, setLastname] = useState('');

    const [form, setForm] = useState({name:"", lastname:""});

    // const onChangeName = (event) => setName(event.target.value);
    // const onChangeLastName = (event) => setLastname(event.target.value);

    const onChangeInput = (e) => {
        setForm({...form, [e.target.name]: e.target.value });
    };

  return (
    <div>
        Name
        <br/>
        <input name='name' value={form.name} onChange={onChangeInput} />
        <br/>
        Lastname
        <br/>
        <input name='lastname' value={form.lastname} onChange={onChangeInput} />
        <br/>
        {form.name} {form.lastname}
    </div>
  )
}

export default InputExample;