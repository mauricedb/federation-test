import React from 'react'

React.xx = React.xx ?? 'React in App 1'

export default function Movies() {

    React.useEffect(() => {
        console.log('In Movies', React.version, React.xx);
    }, [])
    
    return <div style={{color:'blue', backgroundColor: 'yellow', width:'100%'}}>Movies</div>
}