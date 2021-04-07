import React from 'react'
import {connect} from 'react-redux'
import Plant from "./plant";
import {Row} from 'react-bootstrap'

const FeedPage = ({plants}) => {
    return(
        <div>
            <h1>Feed</h1>
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
    plants: state.userReducer.plants
})

export default connect(stpm)(FeedPage)