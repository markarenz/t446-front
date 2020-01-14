import React from "react"

const BlockNotFound= (props)=>{
    return(
        <section className="block-not-found">
            <h1>BlockNotFound: {props.block.type}</h1>
        </section>
    )
}
export default BlockNotFound
