 
import React from 'react'
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())

React.xx = React.xx ?? 'React in App 1'

export default function Movies() {
    const { data: movies } = useSWR('https://the-problem-solver-sample-data.azurewebsites.net/top-rated-movies', fetcher)
    console.log('In Movies', React.version, React.xx);

    React.useEffect(() => {
        console.log('In Movies with useEffect()', React.version, React.xx);
    }, [])
    
    return <div style={{color:'blue', backgroundColor: 'yellow', width:'100%'}}>Movies { movies?.length }
    { movies
        ?.filter((movie, index) => index < 7)
        .map(movie => (<div key={movie.id}>
        {movie.title}
        </div>))}
    
    </div>
}