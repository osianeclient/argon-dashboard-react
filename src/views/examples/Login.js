/*!

=========================================================
* Argon Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col
} from "reactstrap";

function Login (props) {
    return (
      <>
        <Col lg="5" md="7">
          <Card className="bg-secondary shadow border-0">
            <CardHeader className="bg-transparent pb-2">
              <div className="text-muted text-center mt-2 mb-3">
                Se connecter
              </div>
            </CardHeader>
            <CardBody className="px-lg-5 py-lg-5">
              <Form role="form">
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="fas fa-phone-square-alt" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Votre numéro de téléphone*" type="tel" autoComplete="phone"/>
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="fas fa-file-contract" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Numéro de police**" type="number" autoComplete="police"/>
                  </InputGroup>
                </FormGroup>
                <div className="text-center">
                  <Button className="my-4" color="default" type="button">
                    Conitnuer
                  </Button>
                </div>
                
                <div className="text-center">
                    <p className="text-muted" style={{fontSize: "12px"}}>
                        *Vous recevrez un code unique pour terminer votre authentification
                    </p>
                </div>

                <div className="text-center">
                    <p className="text-muted" style={{fontSize: "12px"}}>
                        **retrouvez votre numéro police en haut à droite de vos factures
                    </p>
                </div>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </>
    );
}

export default Login;
