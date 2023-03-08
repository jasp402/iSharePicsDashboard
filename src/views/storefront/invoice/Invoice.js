/* eslint-disable react/no-danger */
import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Row, Col, Button, Card } from 'react-bootstrap';
import HtmlHead from 'components/html-head/HtmlHead';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

const Invoice = () => {
  const title = 'Invoice';
  const description = 'Ecommerce Storefront Invoice Page';
  useEffect(() => {
    const mainElement = document.querySelector('#root main');
    if (mainElement) {
      mainElement.classList.add('print-restricted');
    }
    return () => {
      if (mainElement) {
        mainElement.classList.remove('print-restricted');
      }
    };
  }, []);

  return (
    <>
      <HtmlHead title={title} description={description} />
      <div className="page-title-container">
        <Row className="g-0">
          {/* Title Start */}
          <Col className="col-auto mb-3 mb-sm-0 me-auto">
            <NavLink className="muted-link pb-1 d-inline-block hidden breadcrumb-back" to="/storefront/home">
              <CsLineIcons icon="chevron-left" size="13" />
              <span className="align-middle text-small ms-1">Storefront</span>
            </NavLink>
            <h1 className="mb-0 pb-0 display-4" id="title">
              {title}
            </h1>
          </Col>
          {/* Title End */}

          {/* Top Buttons Start */}
          <Col xs="12" sm="auto" className="d-flex align-items-end justify-content-end mb-2 mb-sm-0 order-sm-3">
            <Button
              variant="outline-primary"
              className="btn-icon btn-icon-start w-100 w-md-auto"
              onClick={() => {
                window.print();
                return false;
              }}
            >
              <CsLineIcons icon="print" /> <span>Print</span>
            </Button>
          </Col>
          {/* Top Buttons End */}
        </Row>
      </div>

      {/* Standard Start */}
      {/* card-print: removes shadow, margin and padding */}
      {/* print-me: removes everyting from main .container except the element with the class if main tag has print-restricted class */}
      <h2 className="small-title">Standard</h2>
      <Card className="mb-5 card-print print-me">
        <Card.Body>
          <Row className="d-flex flex-row align-items-center">
            <Col md="6">
              <img src="/img/logo/logo-blue-light.svg" className="sw-17" alt="logo" />
            </Col>
            <Col md="6" className="text-end">
              <div className="mb-2">ColoredStrategies Inc</div>
              <div className="text-small text-muted">4 Glamis Avenue, Strathmore Park, Wellington 6022, New Zealand</div>
              <div className="text-small text-muted">+6443884455</div>
            </Col>
          </Row>
          <div className="separator separator-light mt-5 mb-5" />
          <Row className="g-1 mb-5">
            <Col md="8">
              <div className="py-3">
                <div>Blaine Cottrell</div>
                <div>55 Esk Street, Invercargill 9810, New Zealand</div>
              </div>
            </Col>
            <Col md="4">
              <div className="py-3 text-md-end">
                <div>Invoice #: 741</div>
                <div>02.02.2019</div>
              </div>
            </Col>
          </Row>
          <div>
            <Row className="mb-4 d-none d-sm-flex">
              <Col xs="6">
                <p className="mb-0 text-small text-muted">ITEM NAME</p>
              </Col>
              <Col xs="3">
                <p className="mb-0 text-small text-muted">COUNT</p>
              </Col>
              <Col xs="3" className="text-end">
                <p className="mb-0 text-small text-muted">PRICE</p>
              </Col>
            </Row>
            <Row className="mb-4 mb-sm-2">
              <Col sm="6">
                <h6 className="mb-0">Spelt Bread</h6>
              </Col>
              <Col sm="3">
                <p className="mb-0 text-alternate">3 pcs</p>
              </Col>
              <Col sm="3" className="text-sm-end">
                <p className="mb-0 text-alternate">$ 14.82</p>
              </Col>
            </Row>
            <Row className="mb-4 mb-sm-2">
              <Col sm="6">
                <h6 className="mb-0">Naan</h6>
              </Col>
              <Col sm="3">
                <p className="mb-0 text-alternate">2 pcs</p>
              </Col>
              <Col sm="3" className="text-sm-end">
                <p className="mb-0 text-alternate">$ 8.97</p>
              </Col>
            </Row>
            <Row className="mb-4 mb-sm-2">
              <Col sm="6">
                <h6 className="mb-0">Cozonac</h6>
              </Col>
              <Col sm="3">
                <p className="mb-0 text-alternate">2 pcs</p>
              </Col>
              <Col sm="3" className="text-sm-end">
                <p className="mb-0 text-alternate">$ 18.24</p>
              </Col>
            </Row>
            <Row className="mb-4 mb-sm-2">
              <Col sm="6">
                <h6 className="mb-0">Michetta</h6>
              </Col>
              <Col sm="3">
                <p className="mb-0 text-alternate">2 pcs</p>
              </Col>
              <Col sm="3" className="text-sm-end">
                <p className="mb-0 text-alternate">$ 4.24</p>
              </Col>
            </Row>
            <Row className="mb-4 mb-sm-2">
              <Col sm="6">
                <h6 className="mb-0">Arepa</h6>
              </Col>
              <Col sm="3">
                <p className="mb-0 text-alternate">3 pcs</p>
              </Col>
              <Col sm="3" className="text-sm-end">
                <p className="mb-0 text-alternate">$ 6.27</p>
              </Col>
            </Row>
            <Row className="mb-4 mb-sm-2">
              <Col sm="6">
                <h6 className="mb-0">Pita</h6>
              </Col>
              <Col sm="3">
                <p className="mb-0 text-alternate">2 pcs</p>
              </Col>
              <Col sm="3" className="text-sm-end">
                <p className="mb-0 text-alternate">$ 10.97</p>
              </Col>
            </Row>
            <Row className="mb-4 mb-sm-2">
              <Col sm="6">
                <h6 className="mb-0">Zopf</h6>
              </Col>
              <Col sm="3">
                <p className="mb-0 text-alternate">2 pcs</p>
              </Col>
              <Col sm="3" className="text-sm-end">
                <p className="mb-0 text-alternate">$ 21.24</p>
              </Col>
            </Row>
            <Row className="mb-4 mb-sm-2">
              <Col sm="6">
                <h6 className="mb-0">Kommissbrot</h6>
              </Col>
              <Col sm="3">
                <p className="mb-0 text-alternate">3 pcs</p>
              </Col>
              <Col sm="3" className="text-sm-end">
                <p className="mb-0 text-alternate">$ 42.15</p>
              </Col>
            </Row>
            <Row className="mb-4 mb-sm-2">
              <Col sm="6">
                <h6 className="mb-0">Ruisreikäleipä</h6>
              </Col>
              <Col sm="3">
                <p className="mb-0 text-alternate">1 pcs</p>
              </Col>
              <Col sm="3" className="text-sm-end">
                <p className="mb-0 text-alternate">$ 11.15</p>
              </Col>
            </Row>
            <Row className="mb-4 mb-sm-2">
              <Col sm="6">
                <h6 className="mb-0">Cornbread</h6>
              </Col>
              <Col sm="3">
                <p className="mb-0 text-alternate">2 pcs</p>
              </Col>
              <Col sm="3" className="text-sm-end">
                <p className="mb-0 text-alternate">$ 35.25</p>
              </Col>
            </Row>
            <Row className="mb-4 mb-sm-2">
              <Col sm="6">
                <h6 className="mb-0">Yeast Karavai</h6>
              </Col>
              <Col sm="3">
                <p className="mb-0 text-alternate">5 pcs</p>
              </Col>
              <Col sm="3" className="text-sm-end">
                <p className="mb-0 text-alternate">$ 63.75</p>
              </Col>
            </Row>
            <Row className="mb-4 mb-sm-2">
              <Col sm="6">
                <h6 className="mb-0">Bammy</h6>
              </Col>
              <Col sm="3">
                <p className="mb-0 text-alternate">2 pcs</p>
              </Col>
              <Col sm="3" className="text-sm-end">
                <p className="mb-0 text-alternate">$ 13.25</p>
              </Col>
            </Row>
            <Row className="mb-4 mb-sm-2">
              <Col sm="6">
                <h6 className="mb-0">Buccellato di Lucca</h6>
              </Col>
              <Col sm="3">
                <p className="mb-0 text-alternate">2 pcs</p>
              </Col>
              <Col sm="3" className="text-sm-end">
                <p className="mb-0 text-alternate">$ 19.50</p>
              </Col>
            </Row>
          </div>
          <div className="separator separator-light mt-5 mb-5" />
          <Row>
            <Col className="text-sm-end text-muted">
              <div>Subtotal :</div>
              <div>Tax :</div>
              <div>Shipping :</div>
              <div>Total :</div>
            </Col>
            <Col xs="auto" className="text-end">
              <div>$ 61.82</div>
              <div>$ 2.18</div>
              <div>$ 3.21</div>
              <div>$ 68.14</div>
            </Col>
          </Row>
          <div className="separator separator-light mt-5 mb-5" />
          <div className="text-small text-muted text-center">Invoice was created on a computer and is valid without the signature and seal.</div>
        </Card.Body>
      </Card>
      {/* Standard End */}

      {/* Inline Styled Start */}
      <h2 className="small-title">Inline Styled</h2>
      <Card>
        <Card.Body>
          <div
            dangerouslySetInnerHTML={{
              __html: `<div style="width: 100%; font-family: Helvetica, Arial, sans-serif !important; position: relative">
              <table style="width: 100%; border-collapse: separate !important; border-spacing: 0; color: #242128; margin: 0">
                <tbody>
                  <tr>
                    <td style="padding-bottom: 35px; border-top: 0; width: 100% !important; text-align: left; vertical-align: center">
                      <img src="/img/logo/logo-blue-light.svg" style="width: 140px" alt="logo" />
                    </td>
                    <td style="padding-bottom: 35px; padding-top: 5px; border-top: 0; width: 100% !important; text-align: right; vertical-align: center">
                      <p style="color: #4e4e4e; font-weight: normal; line-height: 1.2; font-size: 14px; white-space: nowrap">ColoredStrategies Inc</p>
                      <p style="color: #afafaf; font-weight: normal; line-height: 1.2; font-size: 11px; white-space: nowrap; margin-bottom: 0">
                        4 Glamis Avenue, Strathmore Park, Wellington 6022, New Zealand
                      </p>
                      <p style="color: #afafaf; font-weight: normal; line-height: 1.2; font-size: 11px; white-space: nowrap; margin-bottom: 0">
                        +6443884455
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="2" style="padding-top: 30px; border-top: 1px solid #f1f1f1">
                      <table style="width: 100%">
                        <tbody>
                          <tr>
                            <td style="vertical-align: middle; padding-top: 20px; padding-bottom: 20px">
                              <p style="color: #4e4e4e; font-size: 14px; line-height: 1.6; margin: 0; padding: 0">
                                Blaine Cottrell
                                <br />
                                55 Esk Street, Invercargill 9810, New Zealand
                              </p>
                            </td>

                            <td
                              style="
                                text-align: right;
                                padding-top: 0px;
                                padding-bottom: 0;
                                vertical-align: middle;
                                padding-bottom: 20px;
                                padding-top: 20px;
                              "
                            >
                              <p style="color: #4e4e4e; font-size: 14px; padding: 0; line-height: 1.6; margin: 0">
                                Invoice #: 741
                                <br />
                                02.02.2019
                              </p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <table style="width: 100%; margin-top: 40px">
                        <thead>
                          <tr>
                            <th style="text-align: left; font-weight: 400; font-size: 11px; color: #afafaf; padding-bottom: 15px">ITEM NAME</th>
                            <th style="text-align: left; font-weight: 400; font-size: 11px; color: #afafaf; padding-bottom: 15px">COUNT</th>
                            <th style="text-align: right; font-weight: 400; font-size: 11px; color: #afafaf; padding-bottom: 15px">PRICE</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td style="padding-top: 0px; padding-bottom: 5px">
                              <h6 style="font-size: 14px; line-height: 1; margin-bottom: 0; color: #4e4e4e; font-weight: 500; margin-top: 10px">
                                Spelt Bread
                              </h6>
                            </td>
                            <td>
                              <p style="font-size: 14px; text-decoration: none; line-height: 1; color: #7c7c7c; margin-top: 0px; margin-bottom: 0">
                                3 pcs
                              </p>
                            </td>
                            <td style="padding-top: 0px; padding-bottom: 0; text-align: right">
                              <p
                                style="
                                  font-size: 14px;
                                  line-height: 1;
                                  color: #4e4e4e;
                                  margin-bottom: 0;
                                  margin-top: 0;
                                  vertical-align: top;
                                  white-space: nowrap;
                                "
                              >
                                $ 14.82
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding-top: 0px; padding-bottom: 5px">
                              <h6 style="font-size: 14px; line-height: 1; margin-bottom: 0; color: #4e4e4e; font-weight: 500; margin-top: 10px">Naan</h6>
                            </td>
                            <td>
                              <p style="font-size: 14px; text-decoration: none; line-height: 1; color: #7c7c7c; margin-top: 0px; margin-bottom: 0">
                                2 pcs
                              </p>
                            </td>
                            <td style="padding-top: 0px; padding-bottom: 0; text-align: right">
                              <p
                                style="
                                  font-size: 14px;
                                  line-height: 1;
                                  color: #4e4e4e;
                                  margin-bottom: 0;
                                  margin-top: 0;
                                  vertical-align: top;
                                  white-space: nowrap;
                                "
                              >
                                $ 8.97
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding-top: 0px; padding-bottom: 5px">
                              <h6 style="font-size: 14px; line-height: 1; margin-bottom: 0; color: #4e4e4e; font-weight: 500; margin-top: 10px">
                                Cozonac
                              </h6>
                            </td>
                            <td>
                              <p style="font-size: 14px; text-decoration: none; line-height: 1; color: #7c7c7c; margin-top: 0px; margin-bottom: 0">
                                2 pcs
                              </p>
                            </td>
                            <td style="padding-top: 0px; padding-bottom: 0; text-align: right">
                              <p
                                style="
                                  font-size: 14px;
                                  line-height: 1;
                                  color: #4e4e4e;
                                  margin-bottom: 0;
                                  margin-top: 0;
                                  vertical-align: top;
                                  white-space: nowrap;
                                "
                              >
                                $ 18.24
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding-top: 0px; padding-bottom: 5px">
                              <h6 style="font-size: 14px; line-height: 1; margin-bottom: 0; color: #4e4e4e; font-weight: 500; margin-top: 10px">
                                Michetta
                              </h6>
                            </td>
                            <td>
                              <p style="font-size: 14px; text-decoration: none; line-height: 1; color: #7c7c7c; margin-top: 0px; margin-bottom: 0">
                                2 pcs
                              </p>
                            </td>
                            <td style="padding-top: 0px; padding-bottom: 0; text-align: right">
                              <p
                                style="
                                  font-size: 14px;
                                  line-height: 1;
                                  color: #4e4e4e;
                                  margin-bottom: 0;
                                  margin-top: 0;
                                  vertical-align: top;
                                  white-space: nowrap;
                                "
                              >
                                $ 4.24
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding-top: 0px; padding-bottom: 5px">
                              <h6 style="font-size: 14px; line-height: 1; margin-bottom: 0; color: #4e4e4e; font-weight: 500; margin-top: 10px">Arepa</h6>
                            </td>
                            <td>
                              <p style="font-size: 14px; text-decoration: none; line-height: 1; color: #7c7c7c; margin-top: 0px; margin-bottom: 0">
                                3 pcs
                              </p>
                            </td>
                            <td style="padding-top: 0px; padding-bottom: 0; text-align: right">
                              <p
                                style="
                                  font-size: 14px;
                                  line-height: 1;
                                  color: #4e4e4e;
                                  margin-bottom: 0;
                                  margin-top: 0;
                                  vertical-align: top;
                                  white-space: nowrap;
                                "
                              >
                                $ 6.27
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding-top: 0px; padding-bottom: 5px">
                              <h6 style="font-size: 14px; line-height: 1; margin-bottom: 0; color: #4e4e4e; font-weight: 500; margin-top: 10px">Pita</h6>
                            </td>
                            <td>
                              <p style="font-size: 14px; text-decoration: none; line-height: 1; color: #7c7c7c; margin-top: 0px; margin-bottom: 0">
                                2 pcs
                              </p>
                            </td>
                            <td style="padding-top: 0px; padding-bottom: 0; text-align: right">
                              <p
                                style="
                                  font-size: 14px;
                                  line-height: 1;
                                  color: #4e4e4e;
                                  margin-bottom: 0;
                                  margin-top: 0;
                                  vertical-align: top;
                                  white-space: nowrap;
                                "
                              >
                                $ 10.97
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding-top: 0px; padding-bottom: 5px">
                              <h6 style="font-size: 14px; line-height: 1; margin-bottom: 0; color: #4e4e4e; font-weight: 500; margin-top: 10px">Zopf</h6>
                            </td>
                            <td>
                              <p style="font-size: 14px; text-decoration: none; line-height: 1; color: #7c7c7c; margin-top: 0px; margin-bottom: 0">
                                2 pcs
                              </p>
                            </td>
                            <td style="padding-top: 0px; padding-bottom: 0; text-align: right">
                              <p
                                style="
                                  font-size: 14px;
                                  line-height: 1;
                                  color: #4e4e4e;
                                  margin-bottom: 0;
                                  margin-top: 0;
                                  vertical-align: top;
                                  white-space: nowrap;
                                "
                              >
                                $ 21.24
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding-top: 0px; padding-bottom: 5px">
                              <h6 style="font-size: 14px; line-height: 1; margin-bottom: 0; color: #4e4e4e; font-weight: 500; margin-top: 10px">
                                Cholermüs
                              </h6>
                            </td>
                            <td>
                              <p style="font-size: 14px; text-decoration: none; line-height: 1; color: #7c7c7c; margin-top: 0px; margin-bottom: 0">
                                4 pcs
                              </p>
                            </td>
                            <td style="padding-top: 0px; padding-bottom: 0; text-align: right">
                              <p
                                style="
                                  font-size: 14px;
                                  line-height: 1;
                                  color: #4e4e4e;
                                  margin-bottom: 0;
                                  margin-top: 0;
                                  vertical-align: top;
                                  white-space: nowrap;
                                "
                              >
                                $ 14.50
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding-top: 0px; padding-bottom: 5px">
                              <h6 style="font-size: 14px; line-height: 1; margin-bottom: 0; color: #4e4e4e; font-weight: 500; margin-top: 10px">
                                Ruisreikäleipä
                              </h6>
                            </td>
                            <td>
                              <p style="font-size: 14px; text-decoration: none; line-height: 1; color: #7c7c7c; margin-top: 0px; margin-bottom: 0">
                                4 pcs
                              </p>
                            </td>
                            <td style="padding-top: 0px; padding-bottom: 0; text-align: right">
                              <p
                                style="
                                  font-size: 14px;
                                  line-height: 1;
                                  color: #4e4e4e;
                                  margin-bottom: 0;
                                  margin-top: 0;
                                  vertical-align: top;
                                  white-space: nowrap;
                                "
                              >
                                $ 11.90
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding-top: 0px; padding-bottom: 5px">
                              <h6 style="font-size: 14px; line-height: 1; margin-bottom: 0; color: #4e4e4e; font-weight: 500; margin-top: 10px">
                                Cholermüs
                              </h6>
                            </td>
                            <td>
                              <p style="font-size: 14px; text-decoration: none; line-height: 1; color: #7c7c7c; margin-top: 0px; margin-bottom: 0">
                                1 pcs
                              </p>
                            </td>
                            <td style="padding-top: 0px; padding-bottom: 0; text-align: right">
                              <p
                                style="
                                  font-size: 14px;
                                  line-height: 1;
                                  color: #4e4e4e;
                                  margin-bottom: 0;
                                  margin-top: 0;
                                  vertical-align: top;
                                  white-space: nowrap;
                                "
                              >
                                $ 1.45
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding-top: 0px; padding-bottom: 5px">
                              <h6 style="font-size: 14px; line-height: 1; margin-bottom: 0; color: #4e4e4e; font-weight: 500; margin-top: 10px">
                                Barmbrack
                              </h6>
                            </td>
                            <td>
                              <p style="font-size: 14px; text-decoration: none; line-height: 1; color: #7c7c7c; margin-top: 0px; margin-bottom: 0">
                                2 pcs
                              </p>
                            </td>
                            <td style="padding-top: 0px; padding-bottom: 0; text-align: right">
                              <p
                                style="
                                  font-size: 14px;
                                  line-height: 1;
                                  color: #4e4e4e;
                                  margin-bottom: 0;
                                  margin-top: 0;
                                  vertical-align: top;
                                  white-space: nowrap;
                                "
                              >
                                $ 15.00
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding-top: 0px; padding-bottom: 5px">
                              <h6 style="font-size: 14px; line-height: 1; margin-bottom: 0; color: #4e4e4e; font-weight: 500; margin-top: 10px">Bagel</h6>
                            </td>
                            <td>
                              <p style="font-size: 14px; text-decoration: none; line-height: 1; color: #7c7c7c; margin-top: 0px; margin-bottom: 0">
                                3 pcs
                              </p>
                            </td>
                            <td style="padding-top: 0px; padding-bottom: 0; text-align: right">
                              <p
                                style="
                                  font-size: 14px;
                                  line-height: 1;
                                  color: #4e4e4e;
                                  margin-bottom: 0;
                                  margin-top: 0;
                                  vertical-align: top;
                                  white-space: nowrap;
                                "
                              >
                                $ 42.15
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding-top: 0px; padding-bottom: 5px">
                              <h6 style="font-size: 14px; line-height: 1; margin-bottom: 0; color: #4e4e4e; font-weight: 500; margin-top: 10px">
                                Buccellato di Lucca
                              </h6>
                            </td>
                            <td>
                              <p style="font-size: 14px; text-decoration: none; line-height: 1; color: #7c7c7c; margin-top: 0px; margin-bottom: 0">
                                5 pcs
                              </p>
                            </td>
                            <td style="padding-top: 0px; padding-bottom: 0; text-align: right">
                              <p
                                style="
                                  font-size: 14px;
                                  line-height: 1;
                                  color: #4e4e4e;
                                  margin-bottom: 0;
                                  margin-top: 0;
                                  vertical-align: top;
                                  white-space: nowrap;
                                "
                              >
                                $ 84.75
                              </p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table style="width: 100%; border-collapse: separate !important; border-spacing: 0; color: #242128; margin: 0; padding-top: 20px">
                <tr>
                  <td colspan="2" style="border-top: 1px solid #f1f1f1">&nbsp;</td>
                </tr>
                <tr>
                  <td style="width: 100%">
                    <p
                      style="
                        font-size: 13px;
                        text-decoration: none;
                        line-height: 1.6;
                        color: #afafaf;
                        margin-top: 0px;
                        margin-bottom: 0;
                        text-align: right;
                      "
                    >
                      Subtotal :
                    </p>
                  </td>
                  <td style="padding-top: 0px; text-align: right">
                    <p
                      style="
                        font-size: 13px;
                        line-height: 1.6;
                        color: #4e4e4e;
                        margin-bottom: 0;
                        margin-top: 0;
                        vertical-align: top;
                        white-space: nowrap;
                        margin-left: 15px;
                      "
                    >
                      $ 61.82
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style="width: 100%">
                    <p
                      style="
                        font-size: 13px;
                        text-decoration: none;
                        line-height: 1.6;
                        color: #afafaf;
                        margin-top: 0px;
                        margin-bottom: 0;
                        text-align: right;
                      "
                    >
                      Tax :
                    </p>
                  </td>
                  <td style="padding-top: 0px; text-align: right">
                    <p
                      style="
                        font-size: 13px;
                        line-height: 1.6;
                        color: #4e4e4e;
                        margin-bottom: 0;
                        margin-top: 0;
                        vertical-align: top;
                        white-space: nowrap;
                        margin-left: 15px;
                      "
                    >
                      $ 2.18
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style="width: 100%">
                    <p
                      style="
                        font-size: 13px;
                        text-decoration: none;
                        line-height: 1.6;
                        color: #afafaf;
                        margin-top: 0px;
                        margin-bottom: 0;
                        text-align: right;
                      "
                    >
                      Shipping :
                    </p>
                  </td>
                  <td style="padding-top: 0px; text-align: right">
                    <p
                      style="
                        font-size: 13px;
                        line-height: 1.6;
                        color: #4e4e4e;
                        margin-bottom: 0;
                        margin-top: 0;
                        vertical-align: top;
                        white-space: nowrap;
                        margin-left: 15px;
                      "
                    >
                      $ 3.21
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style="width: 100%; padding-bottom: 15px">
                    <p
                      style="
                        font-size: 13px;
                        text-decoration: none;
                        line-height: 1.6;
                        color: #afafaf;
                        margin-top: 0px;
                        margin-bottom: 0;
                        text-align: right;
                      "
                    >
                      Total :
                    </p>
                  </td>
                  <td style="padding-top: 0px; text-align: right; padding-bottom: 15px">
                    <p
                      style="
                        font-size: 13px;
                        line-height: 1.6;
                        color: #4e4e4e;
                        margin-bottom: 0;
                        margin-top: 0;
                        vertical-align: top;
                        white-space: nowrap;
                        margin-left: 15px;
                      "
                    >
                      $ 68.14
                    </p>
                  </td>
                </tr>
                <tr>
                  <td colspan="2" style="border-top: 1px solid #f1f1f1">&nbsp;</td>
                </tr>
                <tr>
                  <td colspan="2" style="text-align: center">
                    <p style="color: #afafaf; font-size: 11px; text-align: center">
                      Invoice was created on a computer and is valid without the signature and seal.
                    </p>
                  </td>
                </tr>
              </table>
            </div>`,
            }}
          />
        </Card.Body>
      </Card>
      {/* Inline Styled End */}
    </>
  );
};

export default Invoice;
