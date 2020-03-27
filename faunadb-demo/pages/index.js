import { useEffect, useState } from 'react'
import Head from 'next/head'
import TableRow from '../components/TableRow'

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


export default () => {
  const [data, setData] = useState([])
  useEffect(() => {
    async function getData() {
      const res = await fetch('/api')
      const newData = await res.json()
      setData(newData)
    }
    getData()
  }, [])return (
      <div>
        <h3>¡Bienvenido!</h3>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-dni">
            Por favor ingrese su DNI
          </label>
          <input
            id="new-dni"
            value={this.state.text}
          />
          <button>
            Loguear 
          </button>
        </form>
      </div>
    );
}

 handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  }
}
