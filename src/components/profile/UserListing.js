import React, { useState } from 'react'
import ItemList from '../ItemList'
import CreatedListings from './CreatedListings'
import { Link } from 'react-router-dom'

function UserListing(props) {
    console.log('these are listing props', props)
    const userListings = props.createdListing.map((u) => {
        console.log('map list', u)
        return <div>
            <ItemList listItem={u} />
            <button onClick={() => props.deleteCreatedItem(u._id)}>Delete Listing</button>
        </div>
    })
    return (
        <div>
            <h1>My Listings:</h1>
            {userListings}
<<<<<<< HEAD
            {/* <Link to={{ pathname: "/editForm" }}>
                Create a Listing
=======
            {/* <Link to={{ pathname: "/editForm" }}> */}
                {/* Create a Listing
>>>>>>> 0a405b3ac5bb6360812cf1a424e5759a744d2e6b
        </Link > */}
        </div>
    )
}

export default UserListing