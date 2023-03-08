import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useWindowSize } from 'hooks/useWindowSize';
import { Row, Col, Button, Badge, Card, Modal } from 'react-bootstrap';
import Rating from 'react-rating';
import { NavLink } from 'react-router-dom';
import HtmlHead from 'components/html-head/HtmlHead';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import Clamp from 'components/clamp';
import CategoryMenuContent from './components/CategoryMenuContent';

const Home = () => {
  const title = 'Storefront';
  const description = 'Ecommerce Storefront Home Page';

  const { themeValues } = useSelector((state) => state.settings);
  const xlBreakpoint = parseInt(themeValues.xl.replace('px', ''), 10);
  const { width } = useWindowSize();
  const [isXlScreen, setIsXlScreen] = useState(false);
  const [isOpenCategoriesModal, setIsOpenCategoriesModal] = useState(false);

  useEffect(() => {
    if (width) {
      if (width >= xlBreakpoint) {
        if (!isXlScreen) setIsXlScreen(true);
        if (isOpenCategoriesModal) setIsOpenCategoriesModal(false);
      } else if (isXlScreen) setIsXlScreen(false);
    }
    return () => {};
    // eslint-disable-next-line
  }, [width]);

  return (
    <>
      <HtmlHead title={title} description={description} />
      {/* Title Start */}
      <div className="page-title-container">
        <Row className="g-0">
          {/* Title Start */}
          <Col xs="auto" className="mb-3 mb-sm-0 me-auto">
            <NavLink className="muted-link pb-1 d-inline-block hidden breadcrumb-back" to="/">
              <CsLineIcons icon="chevron-left" size="13" />
              <span className="align-middle text-small ms-1">Home</span>
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
              className="btn-icon btn-icon-start w-100 w-md-auto d-inline-block d-xl-none"
              onClick={() => setIsOpenCategoriesModal(true)}
            >
              <CsLineIcons icon="more-horizontal" /> <span>Categories</span>
            </Button>
          </Col>
          {/* Top Buttons End */}
        </Row>
      </div>
      {/* Title End */}

      <Row>
        {/* In Page Menu Start */}
        {isXlScreen && (
          <Col xl="3" className=" d-none d-xl-block mb-5">
            <Card>
              <Card.Body className="d-flex flex-column justify-content-between">
                <CategoryMenuContent />
              </Card.Body>
            </Card>
          </Col>
        )}
        {/* In Page Menu End */}

        {/* Cta Banners Start */}
        <Col xl="9" className="mb-5">
          <Row className="g-2 mb-2">
            <Col sm="6" md="8">
              <Card className="sh-30 sh-sm-45 hover-img-scale-up">
                <img src="/img/banner/cta-standard-1.webp" className="card-img h-100 scale" alt="card image" />
                <div className="card-img-overlay d-flex flex-column justify-content-between bg-transparent">
                  <div>
                    <div className="cta-1 mb-3 text-black w-md-100 w-75">Healthy and Sweet Treats with Fruits</div>
                    <div className="w-50 text-black d-none d-md-block">
                      Lollipop chocolate marzipan marshmallow gummi bears. Tootsie roll liquorice cake jelly beans.
                    </div>
                  </div>
                  <div>
                    <NavLink to="/storefront/filters" className="btn btn-icon btn-icon-start btn-outline-primary mt-3 stretched-link">
                      <CsLineIcons icon="chevron-right" /> <span>View</span>
                    </NavLink>
                  </div>
                </div>
              </Card>
            </Col>
            <Col sm="6" md="4">
              <Card className="sh-30 sh-sm-45 hover-img-scale-up">
                <img src="/img/banner/cta-vertical-3.webp" className="card-img h-100 scale" alt="card image" />
                <div className="card-img-overlay d-flex flex-column justify-content-between bg-transparent">
                  <div className="cta-1 mb-3 text-black w-md-100 w-75">Vegetable and Fruit Flavored Breads</div>
                  <div>
                    <NavLink to="/storefront/filters" className="btn btn-icon btn-icon-start btn-outline-primary mt-3 stretched-link">
                      <CsLineIcons icon="chevron-right" /> <span>View</span>
                    </NavLink>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
          <Row className="g-2">
            <Col sm="6">
              <Card className="sh-22 sh-xl-19 hover-img-scale-up">
                <Badge bg="primary" className="me-1 position-absolute e-2 t-2 z-index-1">
                  SALE
                </Badge>
                <img src="/img/banner/cta-horizontal-short-1.webp" className="card-img h-100 scale" alt="card image" />
                <div className="card-img-overlay d-flex flex-column justify-content-between bg-transparent">
                  <div className="cta-3 mb-3 text-black w-75 w-md-50">10% Discount for Canned Products</div>
                  <div>
                    <NavLink to="/storefront/filters" className="btn btn-icon btn-icon-start btn-outline-primary stretched-link">
                      <CsLineIcons icon="chevron-right" /> <span>Buy Now</span>
                    </NavLink>
                  </div>
                </div>
              </Card>
            </Col>
            <Col sm="6">
              <Card className="sh-22 sh-xl-19 hover-img-scale-up">
                <Badge bg="primary" className="me-1 position-absolute e-2 t-2 z-index-1">
                  SALE
                </Badge>
                <img src="/img/banner/cta-horizontal-short-2.webp" className="card-img h-100 scale" alt="card image" />
                <div className="card-img-overlay d-flex flex-column justify-content-between bg-transparent">
                  <div className="cta-3 mb-3 text-black w-75 w-md-50">20% Discount for Bagged Products</div>
                  <div>
                    <NavLink to="/storefront/filters" className="btn btn-icon btn-icon-start btn-outline-primary stretched-link">
                      <CsLineIcons icon="chevron-right" /> <span>Buy Now</span>
                    </NavLink>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </Col>
        {/* Cta Banners End */}
      </Row>

      {/* Trending Start */}
      <h2 className="small-title">Trending</h2>
      <Row className="row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-4 g-2 mb-5">
        <Col>
          <Card className="h-100">
            <Badge bg="primary" className="me-1 position-absolute e-3 t-n2 z-index-1">
              SALE
            </Badge>
            <Card.Img src="/img/product/small/product-1.webp" className="card-img-top sh-22" alt="card image" />
            <Card.Body>
              <h5 className="heading mb-0">
                <NavLink to="/storefront/detail" className="body-link stretched-link">
                  Plain Baguette
                </NavLink>
              </h5>
            </Card.Body>
            <Card.Footer className="border-0 pt-0">
              <div className="mb-2">
                <Rating
                  initialRating={5}
                  readonly
                  emptySymbol={<i className="cs-star text-primary" />}
                  fullSymbol={<i className="cs-star-full text-primary" />}
                />
                <div className="text-muted d-inline-block text-small align-text-top ms-1">(22)</div>
              </div>
              <div className="card-text mb-0">
                <div className="text-muted text-overline text-small">
                  <del>$ 14.25</del>
                </div>
                <div>$ 8.50</div>
              </div>
            </Card.Footer>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Img src="/img/product/small/product-2.webp" className="card-img-top sh-22" alt="card image" />
            <Card.Body>
              <h5 className="heading mb-0">
                <NavLink to="/storefront/detail" className="body-link stretched-link">
                  Sandwitch Bread with Sesame Seeds
                </NavLink>
              </h5>
            </Card.Body>
            <Card.Footer className="border-0 pt-0">
              <div className="mb-2">
                <Rating
                  initialRating={5}
                  readonly
                  emptySymbol={<i className="cs-star text-primary" />}
                  fullSymbol={<i className="cs-star-full text-primary" />}
                />
                <div className="text-muted d-inline-block text-small align-text-top ms-1">(44)</div>
              </div>
              <div className="card-text mb-0">
                <div>$ 4.25</div>
              </div>
            </Card.Footer>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Img src="/img/product/small/product-3.webp" className="card-img-top sh-22" alt="card image" />
            <Card.Body>
              <h5 className="heading mb-0">
                <NavLink to="/storefront/detail" className="body-link stretched-link">
                  Basler Brot
                </NavLink>
              </h5>
            </Card.Body>
            <Card.Footer className="border-0 pt-0">
              <div className="mb-2">
                <Rating
                  initialRating={5}
                  readonly
                  emptySymbol={<i className="cs-star text-primary" />}
                  fullSymbol={<i className="cs-star-full text-primary" />}
                />
                <div className="text-muted d-inline-block text-small align-text-top ms-1">(7)</div>
              </div>
              <div className="card-text mb-0">
                <div className="text-muted text-overline text-small">
                  <del>$ 12.25</del>
                </div>
                <div>$ 9.50</div>
              </div>
            </Card.Footer>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Badge bg="primary" className="me-1 position-absolute e-3 t-n2 z-index-1">
              SALE
            </Badge>
            <Card.Img src="/img/product/small/product-4.webp" className="card-img-top sh-22" alt="card image" />
            <Card.Body>
              <h5 className="heading mb-0">
                <NavLink to="/storefront/detail" className="body-link stretched-link">
                  Pullman Loaf
                </NavLink>
              </h5>
            </Card.Body>
            <Card.Footer className="border-0 pt-0">
              <div className="mb-2">
                <Rating
                  initialRating={5}
                  readonly
                  emptySymbol={<i className="cs-star text-primary" />}
                  fullSymbol={<i className="cs-star-full text-primary" />}
                />
                <div className="text-muted d-inline-block text-small align-text-top ms-1">(38)</div>
              </div>
              <div className="card-text mb-0">
                <div>$ 9.50</div>
              </div>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
      {/* Trending End */}

      {/* Popular Categories Start */}
      <h2 className="small-title">Popular Categories</h2>
      <Row className="g-2 row-cols-2 row-cols-md-3 row-cols-xl-6 mb-5">
        <Col className="sh-19">
          <Card className="h-100 hover-border-primary">
            <Card.Body className="text-center">
              <NavLink to="/storefront/categories">
                <CsLineIcons icon="pepper" className="text-primary" />
                <p className="heading mt-3 text-body">Pepper</p>
                <div className="text-extra-small fw-medium text-muted">14 PRODUCTS</div>
              </NavLink>
            </Card.Body>
          </Card>
        </Col>
        <Col className="sh-19">
          <Card className="h-100 hover-border-primary">
            <Card.Body className="text-center">
              <NavLink to="/storefront/categories">
                <CsLineIcons icon="radish" className="text-primary" />
                <p className="heading mt-3 text-body">Radish</p>
                <div className="text-extra-small fw-medium text-muted">3 PRODUCTS</div>
              </NavLink>
            </Card.Body>
          </Card>
        </Col>
        <Col className="sh-19">
          <Card className="h-100 hover-border-primary">
            <Card.Body className="text-center">
              <NavLink to="/storefront/categories">
                <CsLineIcons icon="loaf" className="text-primary" />
                <p className="heading mt-3 text-body">Bread</p>
                <div className="text-extra-small fw-medium text-muted">8 PRODUCTS</div>
              </NavLink>
            </Card.Body>
          </Card>
        </Col>
        <Col className="sh-19">
          <Card className="h-100 hover-border-primary">
            <Card.Body className="text-center">
              <NavLink to="/storefront/categories">
                <CsLineIcons icon="pear" className="text-primary" />
                <p className="heading mt-3 text-body">Pear</p>
                <div className="text-extra-small fw-medium text-muted">9 PRODUCTS</div>
              </NavLink>
            </Card.Body>
          </Card>
        </Col>
        <Col className="sh-19">
          <Card className="h-100 hover-border-primary">
            <Card.Body className="text-center">
              <NavLink to="/storefront/categories">
                <CsLineIcons icon="banana" className="text-primary" />
                <p className="heading mt-3 text-body">Banana</p>
                <div className="text-extra-small fw-medium text-muted">3 PRODUCTS</div>
              </NavLink>
            </Card.Body>
          </Card>
        </Col>
        <Col className="sh-19">
          <Card className="h-100 hover-border-primary">
            <Card.Body className="text-center">
              <NavLink to="/storefront/categories">
                <CsLineIcons icon="loaf" className="text-primary" />
                <p className="heading mt-3 text-body">Mushrooms</p>
                <div className="text-extra-small fw-medium text-muted">4 PRODUCTS</div>
              </NavLink>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* Popular Categories End */}

      {/* Discover Start */}
      <h2 className="small-title">Discover</h2>
      <Row className="g-2 row-cols-1 row-cols-md-2 row-cols-xl-2 row-cols-xxl-3">
        <Col>
          <Card>
            <Row className="g-0 sh-16 sh-sm-17">
              <Col xs="auto" className="h-100 position-relative">
                <Badge bg="primary" className="me-1 position-absolute e-n2 t-2 z-index-1">
                  SALE
                </Badge>
                <img src="/img/product/small/product-5.webp" alt="alternate text" className="card-img card-img-horizontal h-100 sw-11 sw-sm-16 sw-lg-20" />
              </Col>
              <Col>
                <Card.Body className="d-flex align-items-center h-100 py-3">
                  <div className="mb-0 h6">
                    <NavLink to="/storefront/detail" className="body-link stretched-link d-block mb-1 sh-3 h6 lh-1-5">
                      <Clamp tag="span" clamp="1">
                        Plain Baguette
                      </Clamp>
                    </NavLink>
                    <div className="card-text mb-2">
                      <div className="text-muted text-overline text-small sh-2">
                        <del>$ 12.25</del>
                      </div>
                      <div>$ 8.50</div>
                    </div>
                    <div>
                      <Rating
                        initialRating={5}
                        readonly
                        emptySymbol={<i className="cs-star text-primary" />}
                        fullSymbol={<i className="cs-star-full text-primary" />}
                      />
                      <div className="text-muted d-inline-block text-small align-text-top">(5)</div>
                    </div>
                  </div>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col>
          <Card>
            <Row className="g-0 sh-16 sh-sm-17">
              <Col xs="auto" className="h-100 position-relative">
                <img src="/img/product/small/product-6.webp" alt="alternate text" className="card-img card-img-horizontal h-100 sw-11 sw-sm-16 sw-lg-20" />
              </Col>
              <Col>
                <Card.Body className="d-flex align-items-center h-100 py-3">
                  <div className="mb-0 h6">
                    <NavLink to="/storefront/detail" className="body-link stretched-link d-block mb-1 sh-3 h6 lh-1-5">
                      <Clamp tag="span" clamp="1">
                        Bucellato di Lucca
                      </Clamp>
                    </NavLink>
                    <div className="card-text mb-2">
                      <div className="text-muted text-overline text-small sh-2" />
                      <div>$ 7.50</div>
                    </div>
                    <div>
                      <Rating
                        initialRating={5}
                        readonly
                        emptySymbol={<i className="cs-star text-primary" />}
                        fullSymbol={<i className="cs-star-full text-primary" />}
                      />
                      <div className="text-muted d-inline-block text-small align-text-top">(2)</div>
                    </div>
                  </div>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col>
          <Card>
            <Row className="g-0 sh-16 sh-sm-17">
              <Col xs="auto" className="h-100 position-relative">
                <img src="/img/product/small/product-7.webp" alt="alternate text" className="card-img card-img-horizontal h-100 sw-11 sw-sm-16 sw-lg-20" />
              </Col>
              <Col>
                <Card.Body className="d-flex align-items-center h-100 py-3">
                  <div className="mb-0 h6">
                    <NavLink to="/storefront/detail" className="body-link stretched-link d-block mb-1 sh-3 h6 lh-1-5">
                      <Clamp tag="span" clamp="1">
                        Steirer Brot
                      </Clamp>
                    </NavLink>
                    <div className="card-text mb-2">
                      <div className="text-muted text-overline text-small sh-2" />
                      <div>$ 4.25</div>
                    </div>
                    <div>
                      <Rating
                        initialRating={5}
                        readonly
                        emptySymbol={<i className="cs-star text-primary" />}
                        fullSymbol={<i className="cs-star-full text-primary" />}
                      />
                      <div className="text-muted d-inline-block text-small align-text-top">(8)</div>
                    </div>
                  </div>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col>
          <Card>
            <Row className="g-0 sh-16 sh-sm-17">
              <Col xs="auto" className="h-100 position-relative">
                <img src="/img/product/small/product-8.webp" alt="alternate text" className="card-img card-img-horizontal h-100 sw-11 sw-sm-16 sw-lg-20" />
              </Col>
              <Col>
                <Card.Body className="d-flex align-items-center h-100 py-3">
                  <div className="mb-0 h6">
                    <NavLink to="/storefront/detail" className="body-link stretched-link d-block mb-1 sh-3 h6 lh-1-5">
                      <Clamp tag="span" clamp="1">
                        Michetta
                      </Clamp>
                    </NavLink>
                    <div className="card-text mb-2">
                      <div className="text-muted text-overline text-small sh-2" />
                      <div>$ 12.25</div>
                    </div>
                    <div>
                      <Rating
                        initialRating={5}
                        readonly
                        emptySymbol={<i className="cs-star text-primary" />}
                        fullSymbol={<i className="cs-star-full text-primary" />}
                      />
                      <div className="text-muted d-inline-block text-small align-text-top">(12)</div>
                    </div>
                  </div>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col>
          <Card>
            <Row className="g-0 sh-16 sh-sm-17">
              <Col xs="auto" className="h-100 position-relative">
                <Badge bg="primary" className="me-1 position-absolute e-n2 t-2 z-index-1">
                  SALE
                </Badge>
                <img src="/img/product/small/product-9.webp" alt="alternate text" className="card-img card-img-horizontal h-100 sw-11 sw-sm-16 sw-lg-20" />
              </Col>
              <Col>
                <Card.Body className="d-flex align-items-center h-100 py-3">
                  <div className="mb-0 h6">
                    <NavLink to="/storefront/detail" className="body-link stretched-link d-block mb-1 sh-3 h6 lh-1-5">
                      <Clamp tag="span" clamp="1">
                        Plain Baguette
                      </Clamp>
                    </NavLink>
                    <div className="card-text mb-2">
                      <div className="text-muted text-overline text-small sh-2">
                        <del>$ 3.25</del>
                      </div>
                      <div>$ 2.50</div>
                    </div>
                    <div>
                      <Rating
                        initialRating={5}
                        readonly
                        emptySymbol={<i className="cs-star text-primary" />}
                        fullSymbol={<i className="cs-star-full text-primary" />}
                      />
                      <div className="text-muted d-inline-block text-small align-text-top">(9)</div>
                    </div>
                  </div>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col>
          <Card>
            <Row className="g-0 sh-16 sh-sm-17">
              <Col xs="auto" className="h-100 position-relative">
                <Badge bg="primary" className="me-1 position-absolute e-n2 t-2 z-index-1">
                  SALE
                </Badge>
                <img src="/img/product/small/product-10.webp" alt="alternate text" className="card-img card-img-horizontal h-100 sw-11 sw-sm-16 sw-lg-20" />
              </Col>
              <Col>
                <Card.Body className="d-flex align-items-center h-100 py-3">
                  <div className="mb-0 h6">
                    <NavLink to="/storefront/detail" className="body-link stretched-link d-block mb-1 sh-3 h6 lh-1-5">
                      <Clamp tag="span" clamp="1">
                        Zopf
                      </Clamp>
                    </NavLink>
                    <div className="card-text mb-2">
                      <div className="text-muted text-overline text-small sh-2">
                        <del>$ 5.25</del>
                      </div>
                      <div>$ 2.85</div>
                    </div>
                    <div>
                      <Rating
                        initialRating={5}
                        readonly
                        emptySymbol={<i className="cs-star text-primary" />}
                        fullSymbol={<i className="cs-star-full text-primary" />}
                      />
                      <div className="text-muted d-inline-block text-small align-text-top">(3)</div>
                    </div>
                  </div>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      {/* Discover End */}

      {/* Categories Modal Start */}
      {!isXlScreen && (
        <Modal className="modal-right" show={isOpenCategoriesModal} onHide={() => setIsOpenCategoriesModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title as="h5">Categories</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <CategoryMenuContent />
          </Modal.Body>
        </Modal>
      )}
      {/* Categories Modal End */}
    </>
  );
};

export default Home;
