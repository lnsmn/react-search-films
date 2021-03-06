import React, { useEffect, useState } from 'react'

function Search() {

    const [state, setState] = useState([]);
  
    useEffect(() => {
        const APIurl = 'http://www.omdbapi.com/?i=tt3896198&apikey=480344f1'
        fetch(APIurl)
            .then(response => response.json())
            .then(json => setState(json))
    }, [])



    return(
        <div>
            {state.Title}
            <br></br>
            {state.Year}
            <br></br>
            {state.Poster}
        </div>
          
    )
        
    
}
export default Search