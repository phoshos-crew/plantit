import React from 'react'
import {connect} from 'react-redux'
import Plant from "./plant";
import {Row} from 'react-bootstrap'
import Update from "./update";

const FeedPage = ({plants, updates}) => {
    return (
        <div>
            <h1>Feed</h1>
            {
                updates.map((update, index) =>
                    <Row key={index}>
                        <Update action={update.action} userName={update.userName}/>
                    </Row>
                )
            }
            <Row>
                {
                    plants.map(crop =>
                        <Plant cropId={crop.id} key={crop.id}/>
                    )
                }
            </Row>
        </div>
    )
}

const stpm = (state) => ({
    plants: state.userReducer.plants,
    updates: state.userReducer.updates
})

export default connect(stpm)(FeedPage)