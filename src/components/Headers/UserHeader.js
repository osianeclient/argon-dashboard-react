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
//import { Button, Container, Row, Col } from "reactstrap";
import bg from '../../assets/img/theme/bg.jpg';
//assets/img/theme/profile-cover.jpg
class UserHeader extends React.Component {
  render() {
    return (
      <>
        <div
          className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
          style={{
            minHeight: "200px",
            backgroundImage:
              "url(" + bg + ")",
            backgroundSize: "100% 100%",
            //backgroundPosition: "center top"
          }}
        >
          {/* Mask */}
          {/*<span className="mask bg-gradient-default opacity-8" />*/}
          {/* Header container */}
          {/*<Container className="d-flex align-items-center" fluid>
            <Row>
              <Col lg="7" md="10">
                <h1 className="display-2 text-white">{new Date().getHours() >= 12 ? 'Bonsoir' : 'Bonjour'} John Doe</h1>
                <p className="text-white mt-0 mb-5">
                  This is your profile page. You can see the progress you've
                  made with your work and manage your projects or assigned tasks
                </p>
                <Button
                  color="info"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  Edit profile
                </Button>
              </Col>
            </Row>
          </Container>*/}
        </div>
      </>
    );
  }
}

export default UserHeader;
