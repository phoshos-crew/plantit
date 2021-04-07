import React, {useState, useEffect} from 'react'
import cropService from '../services/crops-service'
import {useParams, useHistory} from "react-router-dom";
import ResultGrid from "./grid/grid";
import {Link, Route} from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Profile = () => {

    const {cropName} = useParams()
    const [searchTitle, setSearchTitle] = useState("")
    const [results, setResults] = useState([])
    const history = useHistory()

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
                      <h6 class="mb-0">Full Name</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      Alice James
                    </div>
                  </div>
                  <hr></hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Email</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      james.a@abc.com
                    </div>
                  </div>
                  <hr></hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Phone</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      (123) 456-7890
                    </div>
                  </div>
                  <hr></hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Mobile</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      (123) 456-7890
                    </div>
                  </div>
                  <hr></hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Address</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      Boston, MA
                    </div>
                  </div>
                </div>
              </div>
            </div>

                <br></br>
                <div class="col-4">
                    <h4>My Plants</h4>

                </div>

                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/59e68c3ea4beeb00040000c6.jpg?1508281402" />
                  <Card.Body>
                    <Card.Title>Roses</Card.Title>
                  </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/576b7547fe8d7500030002f3.jpg?1466660165" />
                  <Card.Body>
                    <Card.Title>Cacti</Card.Title>
                  </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/59f2357602c7460004000005.jpg?1509045617" />
                  <Card.Body>
                    <Card.Title>Jasmine</Card.Title>
                  </Card.Body>
                </Card>

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

                <Route path="/profile/userid" exact={true}>
                    <Link to="/">
                        <i className="fas fa-2x fa-home float-right"></i>
                    </Link>
                    <div class="row">

                    <div class="col-2 d-none d-md-table-cell">
                        <h4>Users Profile</h4>
                    </div>
                    </div>

                <br></br>
                <div class="col-4">
                    <h4>Users Plants</h4>

                </div>

                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/59e68c3ea4beeb00040000c6.jpg?1508281402" />
                  <Card.Body>
                    <Card.Title>Roses</Card.Title>
                  </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/576b7547fe8d7500030002f3.jpg?1466660165" />
                  <Card.Body>
                    <Card.Title>Cacti</Card.Title>
                  </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/59f2357602c7460004000005.jpg?1509045617" />
                  <Card.Body>
                    <Card.Title>Jasmine</Card.Title>
                  </Card.Body>
                </Card>

                <br></br>
                <div class="col-4">
                    <h4>Groups User Follows</h4>
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

export default Profile