import React from 'react'

export const ShowIncrement = React.memo((increment) => {

    console.log('Me volvi a incrementar :(')

    return (
        <button
            className='btn btn-primary'
            onClick={()=>{
                increment()
            }}
        >
            Incrementar
        </button>
    )
})
