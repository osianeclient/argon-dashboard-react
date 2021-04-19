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
// react component that copies the given text inside your clipboard
// reactstrap components
import {
  Card,
  CardTitle,
  CardBody,
  CardText,
  Container,
  Row,
  Col,
  Button
} from "reactstrap";
// core components

class Pay extends React.Component {
  state = {};
  render() {
    return (
        <>
            <div className="pt-5 pt-md-8">
                <Container fluid>
                    {/* Table */}
                    <Row>
                        <Col><h3 className="mb-4">Payez vos factures ou vous voulez quand vous voulez avec nos partenaires</h3></Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card className="card-stats mb-4 mb-xl-0">
                                <CardBody>
                                    <Row>
                                        <div className="col">
                                            <CardTitle
                                                tag="h2"
                                                className="text-uppercase mb-0"
                                            >
                                                MTN MOBILE MONEY
                                            </CardTitle>
                                            <ul>
                                                <li>Etape 1: Composez *104#Ok</li>
                                                <li>Etape 2: Choisissez 4 Payer Factures</li>
                                                <li>Etape 3: Saisissez 1 Payer factures</li>
                                                <li>Etape 4: Choisissez 1 SNE BRAZZAVILLE ou 2 SNE POINTE NOIRE</li>
                                                <li>Etape 5: Saisissez la référence du paiement</li>
                                                <li>Etape 6: Tapez le montant</li>
                                                <li>Etape 7: Choisissez 1 pour confirmer</li>
                                                <li>Etape 8: Composez *105#Ok</li>
                                                <li>Etape 9: Tapez 1 pour confirmer et Insérez votre Code PIN</li>
                                            </ul>
                                        </div>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>       
                    </Row>
                    <Row>
                        <Col>
                            <Card className="card-stats mb-4 mb-xl-0">
                                <CardBody>
                                    <Row>
                                        <div className="col">
                                            <CardTitle
                                                tag="h2"
                                                className="text-uppercase mb-0"
                                                style={{color: "secondary"}}
                                            >
                                                AIRTEL MONEY
                                            </CardTitle>
                                            <ul>
                                                <li>Etape 1 : Composer *128#</li>
                                                <li>Etape 2 : Choisir Option 3 - Payer Facture</li>
                                                <li>Etape 3 : Choisir Option 1 - Factures ( Services publics)</li>
                                                <li>Etape 4 : Choisir Option 1 - SNE</li>
                                                <li>Etape 5 : Choisir Option 1 - Mon compte mémorisé (vous pouvez enregistrez votre reference de paiement pour ne plus avoir à la saisir les prochaines fois )</li>
                                                <li>Etape 5 : Choisir Option 2 - Avec une autre reference de paiement (Entrez les 18 chiffres en dessous de la référence de paiement facture par téléphone, se trouvant à gauche sur votre facture )</li>
                                                <li>Etape 6 : Entrer le montant de la facture SNE a payer</li>
                                                <li>Etape 7 : Confirmer votre transaction</li>
                                                <li>Etape 8 : Entrer votre mot de passe</li>
                                            </ul>
                                        </div>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>       
                    </Row>
                </Container>
            </div>
        </>
    );
  }
}

export default Pay;
