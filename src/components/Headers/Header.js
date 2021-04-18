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
import { Card, CardBody, CardTitle, Container, Row, Col, Button } from "reactstrap";
import { useHistory } from "react-router-dom";


function injectHistory(Component) {
  const InjectedHistory = function (props) {
    const history = useHistory();
    return <Component {...props} history={history} />;
  };
  return InjectedHistory;
}


class Header extends React.Component {
  handleClick(path) {
    this.props.history.push(path);
  }
  render() {
    return (
      <>
        <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
          <Container fluid>
            <div className="header-body">
              {/* Card stats */}
              <Row>
                    <Col lg="6" xl="4">
                        <Button block type="button" color="default" className="mb-4" onClick={() => this.handleClick("pay")}>Payer</Button>
                    </Col>
              </Row>
              <Row>
                  <Col><h3>Dernières six Factures</h3></Col>
              </Row>
              <Row>
                <Col lg="6" xl="4">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0"
                          >
                            N°: 20200470000007
                          </CardTitle>
                          <span className="h2 font-weight-bold mb-0">
                            225817 Fcfa
                          </span>
                        </div>
                        <Col className="col-auto">
                          <Button className="icon icon-shape bg-gradient-success text-white rounded-circle shadow">
                            <i className="fas fa-file-download" />
                          </Button>
                        </Col>
                      </Row>
                      <p className="mt-3 mb-0 text-muted text-sm">
                        {/*<span className="text-success mr-2">
                          <i className="fa fa-arrow-up" /> 3.48%
                        </span>{" "}*/}
                        <span className="text-nowrap">Jan-Fev 2021</span>
                      </p>
                    </CardBody>
                  </Card>
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0"
                          >
                            N°: 20200602037638
                          </CardTitle>
                          <span className="h2 font-weight-bold mb-0">
                            217908 Fcfa
                          </span>
                        </div>
                        <Col className="col-auto">
                          <Button className="icon icon-shape bg-gradient-success text-white rounded-circle shadow">
                            <i className="fas fa-file-download" />
                          </Button>
                        </Col>
                      </Row>
                      <p className="mt-3 mb-0 text-muted text-sm">
                        {/*<span className="text-success mr-2">
                          <i className="fa fa-arrow-up" /> 3.48%
                        </span>{" "}*/}
                        <span className="text-nowrap">Nov-Dec 2020</span>
                        </p>
                    </CardBody>
                  </Card>
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0"
                          >
                            N°: 20200802052044
                          </CardTitle>
                          <span className="h2 font-weight-bold mb-0">
                            130427 Fcfa
                          </span>
                        </div>
                        <Col className="col-auto">
                          <Button className="icon icon-shape bg-gradient-success text-white rounded-circle shadow">
                            <i className="fas fa-file-download" />
                          </Button>
                        </Col>
                      </Row>
                      <p className="mt-3 mb-0 text-muted text-sm">
                        {/*<span className="text-success mr-2">
                          <i className="fa fa-arrow-up" /> 3.48%
                        </span>{" "}*/}
                        <span className="text-nowrap">Sep-Oct 2020</span>
                        </p>
                    </CardBody>
                  </Card>
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0"
                          >
                            N°: 20201002002733
                          </CardTitle>
                          <span className="h2 font-weight-bold mb-0">
                            105676 Fcfa
                          </span>
                        </div>
                        <Col className="col-auto">
                          <Button className="icon icon-shape bg-gradient-success text-white rounded-circle shadow">
                            <i className="fas fa-file-download" />
                          </Button>
                        </Col>
                      </Row>
                      <p className="mt-3 mb-0 text-muted text-sm">
                        {/*<span className="text-success mr-2">
                          <i className="fa fa-arrow-up" /> 3.48%
                        </span>{" "}*/}
                        <span className="text-nowrap">Jui-Aou 2020</span>
                        </p>
                    </CardBody>
                  </Card>
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0"
                          >
                            N°: 20201270000114
                          </CardTitle>
                          <span className="h2 font-weight-bold mb-0">
                            459980 Fcfa
                          </span>
                        </div>
                        <Col className="col-auto">
                          <Button className="icon icon-shape bg-gradient-success text-white rounded-circle shadow">
                            <i className="fas fa-file-download" />
                          </Button>
                        </Col>
                      </Row>
                      <p className="mt-3 mb-0 text-muted text-sm">
                        {/*<span className="text-success mr-2">
                          <i className="fa fa-arrow-up" /> 3.48%
                        </span>{" "}*/}
                        <span className="text-nowrap">Mai-Jun 2020</span>
                        </p>
                    </CardBody>
                  </Card>
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0"
                          >
                            N°: 20210201009833
                          </CardTitle>
                          <span className="h2 font-weight-bold mb-0">
                            183194 Fcfa
                          </span>
                        </div>
                        <Col className="col-auto">
                          <Button className="icon icon-shape bg-gradient-success text-white rounded-circle shadow">
                            <i className="fas fa-file-download" />
                          </Button>
                        </Col>
                      </Row>
                      <p className="mt-3 mb-0 text-muted text-sm">
                        {/*<span className="text-success mr-2">
                          <i className="fa fa-arrow-up" /> 3.48%
                        </span>{" "}*/}
                        <span className="text-nowrap">Mar-Avr</span>
                        </p>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </>
    );
  }
}

export default injectHistory(Header);
