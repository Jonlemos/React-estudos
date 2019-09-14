import React from 'react'

export function ChildrenProps(props) {
    return React.Children.map(props.children, child => {
        return React.cloneElement(child, {...props})
    })
}