import React from 'react'

const Update = ({userName, action}) => {
    return(
        <>
            {
                action === "NEW_PLANT" &&
                <>
                    <h3>{`${userName} got a new plant!`}</h3>
                </>
            }
            {
                action === "NEW_PICTURE" &&
                <>
                    <h3>{`${userName} uploaded a new picture of a plant!`}</h3>
                </>
            }
        </>
    )
}

export default Update