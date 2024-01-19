import React from 'react';

function Header(props) {

    return(
        <>
        <button onClick={props.butt}>print</button>

        <h1>{props.speak}</h1>
        <p>this is a test paragraph. Im practicing props </p>
        </>
    )

}

export default Header;