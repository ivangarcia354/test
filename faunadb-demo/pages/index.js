import { useEffect, useState } from 'react'
import Head from 'next/head'
import TableRow from '../components/TableRow'

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

 
