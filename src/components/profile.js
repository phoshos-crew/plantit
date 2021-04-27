import React, {useState, useEffect} from 'react'
import cropService from '../services/crops-service'
import {useParams, useHistory} from "react-router-dom";
import ResultGrid from "./grid/grid";
import {Link, Route} from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import userService from '../services/user-service'
import userActions from '../actions/user-actions'
import {connect} from "react-redux";

const Profile = ({currentUser, profileUser, getCurrentUser, getUserById}) => {
    const {userId} = useParams()
    const {cropName} = useParams()
    const [searchTitle, setSearchTitle] = useState("")
    const [results, setResults] = useState([])
    const history = useHistory()
    const [currUser, setCurrUser] = useState({})
    const [newUser, setNewUser] = useState({})

    useEffect(() => {

        if(userId) {
            userService.findUserById(userId)
            .then(newUser => setNewUser(newUser))
        }

        else {

        userService.profile()
        .then((currUser) => {
            setCurrUser(currUser)
        })
        }
    })

    useEffect(() => {
        setSearchTitle(cropName)
        if(cropName) {
            cropService.findCropByName(cropName)
                .then(results => setResults(results.data))
        }
    }, [cropName])
    return(
            <div class="container-fluid">

                <Route path="/profile" exact={true}>
                    {console.log(JSON.stringify(currUser))}

                    {currUser.groupMemberships}
                    <Link to="/">
                        <i className="fas fa-2x fa-home float-right"></i>
                    </Link>
                    <div class="row">

                    <div class="col-2 d-none d-md-table-cell">
                        <h4>Profile</h4>
                    </div>


                </div>
                <br></br>
                <div class="col-4">
                    <h4>Personal Information</h4>
                </div>
            <div class="col-md-8">
              <div class="card mb-3">
                <div class="card-body">
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">First Name</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      {currUser.firstName}
                    </div>
                  </div>
                  <hr></hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Last Name</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      {currUser.lastName}
                    </div>
                  </div>
                  <hr></hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Email</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      {currUser.email}
                    </div>
                  </div>
                  <hr></hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Phone</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      {currUser.phone}
                    </div>
                  </div>

                </div>
              </div>
            </div>

                <br></br>
                <div class="col-4">
                    <h4>Following Groups</h4>
                </div>
                    <div class="row">
                <Card style={{ width: '18rem' }}>
                  <Card.Body>
                    <Card.Title>ThePlantSociety</Card.Title>
                    <Button variant="primary">Go</Button>
                  </Card.Body>
                </Card>
                <br></br>
                <Card style={{ width: '18rem' }}>
                  <Card.Body>
                    <Card.Title>FinestFlora</Card.Title>
                    <Button variant="primary">Go</Button>
                  </Card.Body>
                </Card>
                <br></br>
                <Card style={{ width: '18rem' }}>
                  <Card.Body>
                    <Card.Title>PlantPerfect</Card.Title>
                    <Button variant="primary">Go</Button>
                  </Card.Body>
                </Card>
                    </div>

                </Route>

                <Route path="/profile/:userId">
                    <Link to="/">
                        <i className="fas fa-2x fa-home float-right"></i>
                    </Link>
                    <div class="row">

                    <div class="col-2 d-none d-md-table-cell">
                        <h4>{newUser.firstName}'s Profile</h4>
                        {JSON.stringify(newUser)}
                    </div>
                    </div>
                <br></br>
                <div class="col-4">
                    <h4>Groups {newUser.firstName} Follows</h4>
                </div>
                    <div class="row">
                <Card style={{ width: '18rem' }}>
                  <Card.Body>
                    <Card.Title>ThePlantSociety</Card.Title>
                    <Button variant="primary">Go</Button>
                  </Card.Body>
                </Card>
                <br></br>
                <Card style={{ width: '18rem' }}>
                  <Card.Body>
                    <Card.Title>FinestFlora</Card.Title>
                    <Button variant="primary">Go</Button>
                  </Card.Body>
                </Card>
                <br></br>
                <Card style={{ width: '18rem' }}>
                  <Card.Body>
                    <Card.Title>PlantPerfect</Card.Title>
                    <Button variant="primary">Go</Button>
                  </Card.Body>
                </Card>
                    </div>

                </Route>
            </div>
    )
}

const stpm = (state) => ({
    currentUser: state.userReducer.currentUser,
    profileUser: state.userReducer.profileUser
})

const dtpm = (dispatch) => {
    return{
        getCurrentUser: () => userActions.profile(dispatch),

        getUserById: (userId) => userActions.findUserById(dispatch, userId)
    }
}

export default connect(stpm, dtpm)(Profile)