import React from "react"

type componentprops = {
    name: string, id: number, children?: React.ComponentType
}

const A = (props: componentprops): JSX.Element => {
    return (
        <div>
            <p>{props.name}</p>
            <p>{props.id}</p>
        </div>
    )
}

export default A
