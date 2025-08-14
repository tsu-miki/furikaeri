
function App() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    console.log("good")
  } 

  return (
    <>
      <h1>ふりかえり</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="good">良かったこと</label>
        <textarea id="good" name="good" />
        <button type="submit">保存</button>
      </form>
    </>
  )
}

export default App
