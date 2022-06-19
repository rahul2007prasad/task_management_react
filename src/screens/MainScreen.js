import React from "react";
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

    const MainPage= (props) =>{
        return(
            <div>
                <Card  color="warning ml-2">
                    <CardBody >
                        <CardTitle>
                            <h1> Welcome To Task Management</h1>
                            
                           
                        </CardTitle>
                       <h5>Developed By Rahul Prasad</h5>
                    </CardBody>
                </Card>
            </div>
        )
    }

    export default MainPage;