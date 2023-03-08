import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Rating from 'react-rating';
import Lightbox from 'react-image-lightbox';
import { Row, Col, Button, Dropdown, Card, Form, Spinner, ProgressBar, Badge } from 'react-bootstrap';
import HtmlHead from 'components/html-head/HtmlHead';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import * as Icon from 'react-bootstrap-icons';
import GlideGallery from 'components/carousel/GlideGallery';
import Clamp from 'components/clamp';
import 'react-image-lightbox/style.css';

const Detail = () => {
  const title = 'Pulse Showcase';
  const description = 'Ecommerce Storefront Detail Page';

  const galleyItems = [
    {
      large: 'https://i.pinimg.com/564x/13/13/5f/13135f28ba3e842602d92d089a868fbe.jpg',
      thumb: 'https://i.pinimg.com/564x/13/13/5f/13135f28ba3e842602d92d089a868fbe.jpg',
    },
    {
      large: 'https://i.pinimg.com/564x/39/14/db/3914db76b6a5711ede12c7210364007b.jpg',
      thumb: 'https://i.pinimg.com/564x/39/14/db/3914db76b6a5711ede12c7210364007b.jpg',
    },
    {
      large: 'https://i.pinimg.com/564x/33/ee/62/33ee62f248cad4454868b213f8a399e4.jpg',
      thumb: 'https://i.pinimg.com/564x/33/ee/62/33ee62f248cad4454868b213f8a399e4.jpg',
    },
    {
      large: 'https://i.pinimg.com/564x/70/52/f1/7052f1ee8d86626c1261d7356a174ee3.jpg',
      thumb: 'https://i.pinimg.com/564x/70/52/f1/7052f1ee8d86626c1261d7356a174ee3.jpg',
    },
    {
      large: 'https://i.pinimg.com/564x/ee/61/b6/ee61b63841830aeba32146c9e2cf0217.jpg',
      thumb: 'https://i.pinimg.com/564x/ee/61/b6/ee61b63841830aeba32146c9e2cf0217.jpg',
    },
  ];

  const [valueSize, setValueSize] = useState();
  const optionsSize = [
    { value: 'S', label: 'S' },
    { value: 'M', label: 'M' },
    { value: 'L', label: 'L' },
    { value: 'XL', label: 'XL' },
  ];

  const [valueQuantity, setValueQuantity] = useState();
  const optionsQuantity = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
  ];

  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const openLightbox = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

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
            <Button variant="outline-primary" className="btn-icon btn-icon-start w-100 w-md-auto">
              <CsLineIcons icon="edit-square" /> <span>Edit</span>
            </Button>
            <Dropdown className="ms-1" align="end">
              <Dropdown.Toggle className="btn-icon btn-icon-only dropdown-toggle-no-arrow" variant="outline-primary">
                <CsLineIcons icon="more-horizontal" />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>Move</Dropdown.Item>
                <Dropdown.Item>Unpublish</Dropdown.Item>
                <Dropdown.Item>Delete</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          {/* Top Buttons End */}
        </Row>
      </div>

      {/* Product Start */}
      <Card className="mb-5">
        <Card.Body>
          <Row className="g-5">
            <Col xl="7" className="position-relative">

              <span className="badge rounded-pill bg-primary me-1 position-absolute e-n1 t-3 z-index-1 py-2 px-3">
                <CsLineIcons icon="crown" size="15" className="text-white" />
                {" "} Popular
              </span>
              <GlideGallery>
                <GlideGallery.LargeItems>
                  {galleyItems.map((item, index) => (
                    <GlideGallery.Item key={`boxed.large.${index}`}>
                      <img
                        alt="detail"
                        src={item.large}
                        className="responsive border-0 rounded-md img-fluid mb-3 w-100 sh-35 sh-md-45 sh-xl-60"
                        onClick={() => openLightbox(index)}
                      />
                    </GlideGallery.Item>
                  ))}
                </GlideGallery.LargeItems>
                <GlideGallery.ThumbItems>
                  {galleyItems.map((item, index) => (
                    <GlideGallery.Item key={`boxed.thumb.${index}`}>
                      <img alt="thumb" src={item.thumb} className="responsive rounded-md img-fluid" />
                    </GlideGallery.Item>
                  ))}
                </GlideGallery.ThumbItems>
              </GlideGallery>
            </Col>
            <Col xl="5" className="sh-xl-60 d-flex flex-column justify-content-between">
              <div>
                <Button variant="link" className="mb-1 d-inline-block text-small p-0">
                  <CsLineIcons icon="gear" size="17" className="text-primary" />
                  {" "}Adjust preferences
                </Button>
                <h4 className="mb-2">Stephanie Salazar (24)</h4>
                <div className="mb-4">
                  <Rating
                    className="me-2"
                    initialRating={4}
                    readonly
                    emptySymbol={<i className="cs-star text-primary" />}
                    fullSymbol={<i className="cs-star-full text-primary" />}
                  />
                  <div className="text-muted d-inline-block text-small align-text-top">(25 Reviews)</div>
                </div>

                <Row className="mb-2 g-3">
                  <Col xs="auto">
                    <div className="mb-5">
                      <p className="text-small text-muted mb-2">PERSONAL INFORMATION </p>
                      <Row className="g-0 mb-2">
                        <Col xs="auto">
                          <div className="sw-3 me-1">
                            <Icon.GenderAmbiguous className="text-primary" size={16} />
                          </div>
                        </Col>
                        <Col className="text-alternate">Femenino</Col>
                      </Row>
                      <Row className="g-0 mb-2">
                        <Col xs="auto">
                          <div className="sw-3 me-1">
                            <Icon.Magic className="text-primary" size={16} />
                          </div>
                        </Col>
                        <Col className="text-alternate">No binario / Pansexual</Col>
                      </Row>
                      <Row className="g-0 mb-2">
                        <Col xs="auto">
                          <div className="sw-3 me-1">
                            <Icon.ArrowThroughHeart className="text-primary" size={16} />
                          </div>
                        </Col>
                        <Col className="text-alternate">Soltero/a</Col>
                      </Row>
                      <Row className="g-0 mb-2">
                        <Col xs="auto">
                          <div className="sw-3 me-1">
                            <Icon.GeoAlt className="text-primary" size={16} />
                          </div>
                        </Col>
                        <Col className="text-alternate">Ciudad de México, México</Col>
                      </Row>
                      <Row className="g-0 mb-2">
                        <Col xs="auto">
                          <div className="sw-3 me-1">
                            <Icon.Translate className="text-primary" size={16} />
                          </div>
                        </Col>
                        <Col className="text-alternate">Español e inglés</Col>
                      </Row>
                      <Row className="g-0 mb-2">
                        <Col xs="auto">
                          <div className="sw-3 me-1">
                            <Icon.Box2Heart className="text-primary" size={16} />
                          </div>
                        </Col>
                        <Col className="text-alternate">Arte, diseño, música, cine, leer, viajar</Col>
                      </Row>

                    </div>
                  </Col>
                  <Col xs="auto">
                    <div className="mb-5">
                      <p className="text-small text-muted mb-2">MOST ABOUT ME </p>
                      <Row className="g-0 mb-2">
                        <Col xs="auto">
                          <div className="sw-3 me-1">
                            <Icon.Mortarboard className="text-primary" size={16} />
                          </div>
                        </Col>
                        <Col className="text-alternate">Licenciatura en diseño gráfico</Col>
                      </Row>
                      <Row className="g-0 mb-2">
                        <Col xs="auto">
                          <div className="sw-3 me-1">
                            <Icon.Briefcase className="text-primary" size={16} />
                          </div>
                        </Col>
                        <Col className="text-alternate">Diseñador gráfico</Col>
                      </Row>
                      <Row className="g-0 mb-2">
                        <Col xs="auto">
                          <div className="sw-3 me-1">
                            <Icon.UniversalAccess className="text-primary" size={16} />
                          </div>
                        </Col>
                        <Col className="text-alternate">1.60m / 55kg</Col>
                      </Row>
                      <Row className="g-0 mb-2">
                        <Col xs="auto">
                          <div className="sw-3 me-1">
                            <Icon.ChatHeart className="text-primary" size={16} />
                          </div>
                        </Col>
                        <Col className="text-alternate">Social</Col>
                      </Row>
                      {/* email */}
                      <Row className="g-0 mb-2">
                        <Col xs="auto">
                          <div className="sw-3 me-1">
                            <Icon.Fire className="text-primary" size={16} />
                          </div>
                        </Col>
                        <Col className="text-alternate">No Fumo</Col>
                      </Row>
                      <Row className="g-0 mb-2">
                        <Col xs="auto">
                          <div className="sw-3 me-1">
                            <Icon.CupStraw className="text-primary" size={16} />
                          </div>
                        </Col>
                        <Col className="text-alternate">Bebo Socialmente</Col>
                      </Row>
                    </div>
                  </Col>
                </Row>

                <p className="mt-2 mb-4">
                  <footer className="blockquote-footer">Soy una persona creativa y apasionada por el arte y el diseño. Me gusta pasar tiempo en museos y galerías de arte, pero también disfruto de
                  una buena película o serie en Netflix. Me encanta la música y toco la guitarra en mi tiempo libre. Estoy buscando a alguien con quien pueda
                  compartir mi amor por la creatividad y la cultura.<br/>
                    <cite title="Source Title"><strong>Carmen Elena (24)</strong></cite></footer>
                </p>
              </div>
              <div>
                <Button variant="outline-primary" className="btn-icon btn-icon-end mb-1">
                  <span>Nevermind</span> <CsLineIcons icon="leaf" />
                </Button>{' '}
                <Button variant="primary" className="btn-icon btn-icon-end mb-1">
                  <span>Pulse</span> <CsLineIcons icon="activity" />
                </Button>{' '}
                <Button variant="quaternary" className="btn-icon btn-icon-end mb-1">
                  <span>gift</span> <CsLineIcons icon="gift" />
                </Button>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      {/* Product End */}


      {/* Lightbox Start */}
      {isOpen && (
        <Lightbox
          mainSrc={galleyItems[photoIndex].large}
          nextSrc={galleyItems[(photoIndex + 1) % galleyItems.length].large}
          prevSrc={galleyItems[(photoIndex + galleyItems.length - 1) % galleyItems.length].large}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() => setPhotoIndex((photoIndex + galleyItems.length - 1) % galleyItems.length)}
          onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % galleyItems.length)}
          loader={<Spinner animation="border" />}
          wrapperClassName="rounded-lg"
        />
      )}
      {/* Lightbox End */}
    </>
  );
};

export default Detail;
