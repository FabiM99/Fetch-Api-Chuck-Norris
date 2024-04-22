import { useState } from "react"
import { DisplayJoke } from "./DisplayJoke"

export function Fetch(){
    const [joke, setJoke] = useState("")
    const [error, setError] = useState(null)
 
  
    
        const fetchJoke = async() => {
            setError(null)
            try {
                const response = await fetch("https://api.chucknorris.io/jokes/random")

                if(!response.ok) {
                    throw new Error("Errore nella richiesta")
                }
                const responseData = await response.json()

                setJoke(responseData)
                console.log(responseData)
                
            } catch (error) {
                console.error(error.message)
                setError(error);
                
                
            } 

        }

    

    return(
        <>
        <h2>Barzelletta Chuck Norris</h2>
       {error ? <p>There has been an error </p> :  <DisplayJoke joke={joke}/>}
        <button onClick={fetchJoke}> Click me</button>
        </>
    )
}