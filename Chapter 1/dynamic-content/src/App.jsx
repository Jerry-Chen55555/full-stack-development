// create another component
const ComponentExample = (props) => {
  return <>
    <p>This will become a logo</p>
    <p>This is what's coming from the props</p>
    <p>{props.message}</p>
  </>
}

const App = () => {
  const releaseYear = 2013
  const developerCompany = "Facebook, Inc."
  console.log("Release year: ", releaseYear)
  console.log(`Company: ${developerCompany}`)

  return (
    <div>
      <h2>About React</h2>
      <ComponentExample message="This is a message through props" />
      <p>
        React was developed by {developerCompany} and
        was first released in {releaseYear}, {new Date().getFullYear() - releaseYear} years ago.
      </p>
      <ComponentExample message="end message from component" />
    </div>
  )
}

export default App