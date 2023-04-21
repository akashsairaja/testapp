import React from 'react';

import {
    Button, Form, FormGroup, Label, Input, Card,
    Container, Row, Col, CardBody, CardFooter, CardHeader, Table
} from 'reactstrap';


const Application = () => {

    return (<Container>
            <Row className={"mt-5"}>
                <Col md={12}>
                    <Card>
                        <CardHeader>
                            New Person
                        </CardHeader>
                        <CardBody>
                            <Form inline>
                                <Row>
                                    <Col md={6}>
                                        <Row>
                                            <Col md={8}>
                                                <FormGroup row>
                                                    <Label sm={3} className="">HMO Code</Label>
                                                    <Col sm={6}>
                                                        <Input bsSize="sm" type="text" name="last"
                                                               placeholder=""/>
                                                    </Col>
                                                </FormGroup>
                                            </Col>
                                            <Col md={4}>
                                                <FormGroup row check className="mt-1">
                                                    <Label check>
                                                        <Input type="checkbox"/>{' '}
                                                        Check me out
                                                    </Label>
                                                </FormGroup>
                                            </Col>
                                            <Col md={6}>
                                                <FormGroup row className="mb-sm-1">
                                                    <Label className="">Personal SSN</Label>
                                                    <Input bsSize="sm" type="text" name="personalSSN"/>
                                                </FormGroup>
                                            </Col>
                                            <Col md={6}>
                                                <FormGroup className="mb-sm-1">
                                                    <Label className="">Personal Mem ID</Label>
                                                    <Input type="text" name="personalSSN"/>
                                                </FormGroup>
                                            </Col>
                                            <Col md={6}>
                                                <FormGroup className="mb-sm-1">
                                                    <Label className="">Disease Management Status</Label>
                                                    <Input bsSize="sm" type="select" name="country" id="exampleSelect"
                                                           className={"d-inline"}/>
                                                </FormGroup>
                                            </Col>

                                            <Col md={12}>
                                                <fieldset className="border p-2">
                                                    <legend className="float-none w-auto p-2"> Name</legend>
                                                    <Form row>
                                                        <FormGroup row>
                                                            <Label sm={2} className="">Last</Label>
                                                            <Col sm={10}>
                                                                <Input bsSize="sm" type="text" name="last"
                                                                       placeholder=""/>
                                                            </Col>
                                                        </FormGroup>
                                                        <FormGroup row>
                                                            <Label sm={2} className="">First </Label>
                                                            <Col sm={10}>
                                                                <Input bsSize="sm" type="text" name="last"
                                                                       placeholder=""/>
                                                            </Col>
                                                        </FormGroup>
                                                        <FormGroup check row>
                                                            <Label sm={2} check>
                                                                <Col sm={10}>
                                                                    M.I
                                                                    <Input type="checkbox"/>{' '}
                                                                </Col>
                                                            </Label>
                                                        </FormGroup>
                                                    </Form>

                                                </fieldset>
                                            </Col>
                                            <Col md={12}>
                                                <fieldset className="border p-2">
                                                    <legend className="float-none w-auto p-2"> General Information
                                                    </legend>
                                                    <Form>
                                                        <FormGroup row>
                                                            <Label sm={2} className="">Gender</Label>
                                                            <Col sm={10}>
                                                                <Input bsSize="sm" type="text" name="last"
                                                                       placeholder=""/>
                                                            </Col>
                                                        </FormGroup>
                                                        <FormGroup row>

                                                            <Label sm={2} className="">DOB</Label>
                                                            <Col sm={10}>

                                                                <Input bsSize="sm" type="text" name="last"
                                                                       placeholder=""/>
                                                            </Col>
                                                        </FormGroup>
                                                        <FormGroup row>
                                                            <Label sm={2} className="">Age</Label>
                                                            <Col sm={10}>
                                                                <Input bsSize="sm" type="number" name="last"
                                                                       placeholder=""/>
                                                            </Col>
                                                        </FormGroup>
                                                    </Form>
                                                </fieldset>
                                            </Col>
                                        </Row>

                                    </Col>
                                    <Col md={6}>
                                        <fieldset className="border p-2">
                                            <legend className="float-none w-auto p-2"> Address</legend>
                                            <FormGroup className="mb-sm-0">
                                                <Label className="">Address 1</Label>
                                                <Input bsSize="sm" type="text" name="address1" placeholder=""/>
                                            </FormGroup>
                                            <FormGroup className="mb-sm-0">
                                                <Label className="">Address 2</Label>
                                                <Input bsSize="sm" type="text" name="address2"
                                                       placeholder=""/>
                                            </FormGroup>
                                            <FormGroup className="mb-sm-0">
                                                <Label className="">Zip Code</Label>
                                                <Input bsSize="sm" type="text" name="zipCode"
                                                       placeholder=""/>
                                            </FormGroup>
                                            <FormGroup className="mb-sm-0">
                                                <Label className="">City</Label>
                                                <Input bsSize="sm" type="text" name="city"
                                                       placeholder=""/>
                                            </FormGroup>
                                            <FormGroup className="mb-sm-0">
                                                <Label className="">County</Label>
                                                <Input bsSize="sm" type="text" name="county"
                                                       placeholder=""/>
                                            </FormGroup>
                                            <FormGroup>
                                                <Label>State</Label>
                                                <Input bsSize="sm" type="select" name="state" id="exampleSelect">
                                                    <option>MY</option>
                                                    <option>WS</option>
                                                    <option>TA</option>
                                                    <option>AB</option>
                                                    <option>CD</option>
                                                </Input>
                                            </FormGroup>
                                            <FormGroup>
                                                <Label>Country</Label>
                                                <Input bsSize="sm" type="select" name="country" id="exampleSelect">
                                                    <option>Unites States</option>
                                                    <option>England</option>
                                                    <option>India</option>
                                                </Input>
                                            </FormGroup>
                                        </fieldset>
                                        <fieldset className="border p-2">
                                            <legend className="float-none w-auto p-2"> Phones</legend>

                                            <Table>
                                                <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>Phone Type</th>
                                                    <th>Phone</th>
                                                    <th>Extension</th>
                                                </tr>
                                                </thead>
                                            </Table>
                                        </fieldset>


                                    </Col>
                                </Row>
                            </Form>
                        </CardBody>
                        <CardFooter className="d-flex justify-content-end align-content-end float-end">
                            <Button className={"mx-2"}>
                                Save
                            </Button>
                            <Button>
                                Cancel
                            </Button>
                        </CardFooter>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Application