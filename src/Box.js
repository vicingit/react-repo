import React from 'react'

export default function (props) {
    
    // const [on, setOn] = React.useState(props.on)

    const styles ={
        backgroundColor: props.on ? "#222222" : "transparent"
    }

    // function toggle() {
    //     setOn(prevOn => !prevOn)
    // }
    
  return (
    <div 
    style ={styles}
    className='box'
    onClick={() => props.toggle(props.id)} 
    >
    </div>
    )
}
 