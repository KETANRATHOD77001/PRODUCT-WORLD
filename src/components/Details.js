import React from 'react'

function Details(props) {
    return (
        <div className='text-center d-flex container'>
            <div class="card mx-5 my-5" style={{ width: "25rem" }}>
                <img src={props.image} class="card-img-top" alt="..." />
            </div>
            <div class="bg-body-tertiary p-5 rounded container my-5">
                <h1>Navbar example</h1>
                <p class="lead">
                    This example is a quick exercise to illustrate how fixed to top navbar
                    works. As you scroll, it will remain fixed to the top of your
                    browser’s viewport.
                </p>
            </div>

        </div>
    )
}

export default Details