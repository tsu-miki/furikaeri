import { useState } from "react"

function App() {
  const [good, setGood] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setGood('')
    
    console.log(good)
  } 

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setGood(e.target.value);
  }

  return (
    <>
      <h1>ふりかえり</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="good">良かったこと</label>
        <textarea id="good" name="good" onChange={handleChange} value={good} />
        <button type="submit">保存</button>
      </form>
    </>
  )
}

export default App
