const Contact = ({contact}) => {
  // print object to the console
  console.log(props.contact)
  return <>
    {/* objects are not valid to print in the browser */}
    {/* <p>Contact: {props.contact}</p> */}
    <p>Name: {contact.name}</p>
    <p>Date of Birth: {contact.dob}</p>
    <p>State: {contact.state}</p>
    <hr />
  </>
}

const App = () => {
  // js objects
  const jd = {name: "John Doe", dob: "1990", state: "CA"}
  const jw = {name: "John Wick", dob: "1992", state: "HS"}

  // js object destructuring tutorial
  const {name, dob, state} = jd
  console.log(`Name: ${name}`)
  console.log(`Date of Birth: ${dob}`)
  console.log(`State: ${state}`)
  return (
    <div>
      <p>This is good to go</p>
      <Contact contact = {jd} />
      <Contact contact = {jw} />
      {/* <Contact name = "John Doe" dob="1990-01-01" state="CA"/>
      <Contact name = "John Wick" dob="1982-01-01" state="HS"/> */}
    </div>
  )
}

export default App