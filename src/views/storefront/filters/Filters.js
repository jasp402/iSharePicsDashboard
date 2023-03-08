import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useWindowSize } from 'hooks/useWindowSize';
import Rating from 'react-rating';
import Clamp from 'components/clamp';
import { Row, Col, Button, Dropdown, Form, Card, Badge, Pagination, Modal } from 'react-bootstrap';
import HtmlHead from 'components/html-head/HtmlHead';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import CheckAll from 'components/check-all/CheckAll';
import FilterMenuContent from './components/FilterMenuContent';

const Filters = () => {
  const title = 'Filters';
  const description = 'Ecommerce Storefront Filters Page';

  const { themeValues } = useSelector((state) => state.settings);
  const lgBreakpoint = parseInt(themeValues.lg.replace('px', ''), 10);
  const { width } = useWindowSize();
  const [isLgScreen, setIsLgScreen] = useState(false);
  const [isOpenFiltersModal, setIsOpenFiltersModal] = useState(false);

  useEffect(() => {
    if (width) {
      if (width >= lgBreakpoint) {
        if (!isLgScreen) setIsLgScreen(true);
        if (isOpenFiltersModal) setIsOpenFiltersModal(false);
      } else if (isLgScreen) setIsLgScreen(false);
    }
    return () => {};
    // eslint-disable-next-line
  }, [width]);

  const allItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const [selectedItems, setSelectedItems] = useState([]);
  const checkItem = (item) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((x) => x !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };
  const toggleCheckAll = (allSelect) => {
    if (allSelect) {
      setSelectedItems(allItems);
    } else {
      setSelectedItems([]);
    }
  };

  return (
    <>
      <HtmlHead title={title} description={description} />
      {/* Title Start */}
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
            <Button variant="outline-primary" className="btn-icon btn-icon-only ms-1 d-inline-block d-lg-none" onClick={() => setIsOpenFiltersModal(true)}>
              <CsLineIcons icon="filter" />
            </Button>
            <Dropdown className="ms-1 w-100 w-md-auto" align="end">
              <Dropdown.Toggle variant="outline-primary" className="w-100 w-md-auto">
                Order: Default
              </Dropdown.Toggle>
              <Dropdown.Menu align="end" className="w-100 w-md-auto">
                <Dropdown.Item>Default</Dropdown.Item>
                <Dropdown.Item>Price Asc</Dropdown.Item>
                <Dropdown.Item>Price Desc</Dropdown.Item>
                <Dropdown.Item>Rating</Dropdown.Item>
                <Dropdown.Item>Newest</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <div className="btn-group ms-1 check-all-container">
              <CheckAll
                allItems={allItems}
                selectedItems={selectedItems}
                onToggle={toggleCheckAll}
                inputClassName="form-check"
                className="btn btn-outline-primary btn-custom-control py-0"
              />
              <Dropdown align="end">
                <Dropdown.Toggle className="dropdown-toggle dropdown-toggle-split" variant="outline-primary" />
                <Dropdown.Menu>
                  <Dropdown.Item>Move</Dropdown.Item>
                  <Dropdown.Item>Archive</Dropdown.Item>
                  <Dropdown.Item>Delete</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Col>
          {/* Top Buttons End */}
        </Row>
      </div>
      {/* Title End */}

      <Row>
        {isLgScreen && (
          <Col lg="4" xl="3" className="d-none d-lg-block">
            {/* Filters Start */}
            <Card className="mb-5">
              <Card.Body>
                <FilterMenuContent />
              </Card.Body>
            </Card>
            {/* Filters End */}
          </Col>
        )}

        <Col lg="8" xl="9">
          {/* Product Thumbnails Start */}
          <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-2 row-cols-xl-3 g-2 mb-5">
            <Col>
              <Card className={`h-100 mb-2 ${selectedItems.includes(1) && 'selected'}`}>
                <Badge bg="primary" className="me-1 position-absolute e-3 t-n2 z-index-1">
                  SALE
                </Badge>
                <Card.Img src="/img/product/small/product-1.webp" className="card-img-top sh-22" alt="card image" />
                <Card.Body className="pb-3">
                  <h5 className="heading mb-0 d-flex">
                    <Form.Check className="form-check" type="checkbox" checked={selectedItems.includes(1)} onChange={() => checkItem(1)} />
                    <NavLink to="#" className="body-link d-block sh-5 mb-0 h6 heading lh-1-5">
                      <Clamp tag="span" clamp="2">
                        Plain Baguette
                      </Clamp>
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
              <Card className={`h-100 mb-2 ${selectedItems.includes(2) && 'selected'}`}>
                <Card.Img src="/img/product/small/product-2.webp" className="card-img-top sh-22" alt="card image" />
                <Card.Body className="pb-3">
                  <h5 className="heading mb-0 d-flex">
                    <Form.Check className="form-check" type="checkbox" checked={selectedItems.includes(2)} onChange={() => checkItem(2)} />
                    <NavLink to="#" className="body-link d-block sh-5 mb-0 h6 heading lh-1-5">
                      <Clamp tag="span" clamp="2">
                        Sandwitch Bread with Sesame Seeds
                      </Clamp>
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
                    <div className="text-muted text-overline text-small" />
                    <div>$ 8.50</div>
                  </div>
                </Card.Footer>
              </Card>
            </Col>
            <Col>
              <Card className={`h-100 mb-2 ${selectedItems.includes(3) && 'selected'}`}>
                <Badge bg="primary" className="me-1 position-absolute e-3 t-n2 z-index-1">
                  SALE
                </Badge>
                <Card.Img src="/img/product/small/product-3.webp" className="card-img-top sh-22" alt="card image" />
                <Card.Body className="pb-3">
                  <h5 className="heading mb-0 d-flex">
                    <Form.Check className="form-check" type="checkbox" checked={selectedItems.includes(3)} onChange={() => checkItem(3)} />
                    <NavLink to="#" className="body-link d-block sh-5 mb-0 h6 heading lh-1-5">
                      <Clamp tag="span" clamp="2">
                        Basler Brot
                      </Clamp>
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
              <Card className={`h-100 mb-2 ${selectedItems.includes(4) && 'selected'}`}>
                <Card.Img src="/img/product/small/product-4.webp" className="card-img-top sh-22" alt="card image" />
                <Card.Body className="pb-3">
                  <h5 className="heading mb-0 d-flex">
                    <Form.Check className="form-check" type="checkbox" checked={selectedItems.includes(4)} onChange={() => checkItem(4)} />
                    <NavLink to="#" className="body-link d-block sh-5 mb-0 h6 heading lh-1-5">
                      <Clamp tag="span" clamp="2">
                        Pullman Loaf
                      </Clamp>
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
                    <div className="text-muted d-inline-block text-small align-text-top ms-1">(39)</div>
                  </div>
                  <div className="card-text mb-0">
                    <div className="text-muted text-overline text-small" />
                    <div>$ 12.00</div>
                  </div>
                </Card.Footer>
              </Card>
            </Col>
            <Col>
              <Card className={`h-100 mb-2 ${selectedItems.includes(5) && 'selected'}`}>
                <Card.Img src="/img/product/small/product-5.webp" className="card-img-top sh-22" alt="card image" />
                <Card.Body className="pb-3">
                  <h5 className="heading mb-0 d-flex">
                    <Form.Check className="form-check" type="checkbox" checked={selectedItems.includes(5)} onChange={() => checkItem(5)} />
                    <NavLink to="#" className="body-link d-block sh-5 mb-0 h6 heading lh-1-5">
                      <Clamp tag="span" clamp="2">
                        Bucellato di Lucca
                      </Clamp>
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
                    <div className="text-muted d-inline-block text-small align-text-top ms-1">(5)</div>
                  </div>
                  <div className="card-text mb-0">
                    <div className="text-muted text-overline text-small" />
                    <div>$ 6.25</div>
                  </div>
                </Card.Footer>
              </Card>
            </Col>
            <Col>
              <Card className={`h-100 mb-2 ${selectedItems.includes(6) && 'selected'}`}>
                <Card.Img src="/img/product/small/product-6.webp" className="card-img-top sh-22" alt="card image" />
                <Card.Body className="pb-3">
                  <h5 className="heading mb-0 d-flex">
                    <Form.Check className="form-check" type="checkbox" checked={selectedItems.includes(6)} onChange={() => checkItem(6)} />
                    <NavLink to="#" className="body-link d-block sh-5 mb-0 h6 heading lh-1-5">
                      <Clamp tag="span" clamp="2">
                        Zopf
                      </Clamp>
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
                    <div className="text-muted d-inline-block text-small align-text-top ms-1">(12)</div>
                  </div>
                  <div className="card-text mb-0">
                    <div className="text-muted text-overline text-small" />
                    <div>$ 3.25</div>
                  </div>
                </Card.Footer>
              </Card>
            </Col>
            <Col>
              <Card className={`h-100 mb-2 ${selectedItems.includes(7) && 'selected'}`}>
                <Card.Img src="/img/product/small/product-7.webp" className="card-img-top sh-22" alt="card image" />
                <Card.Body className="pb-3">
                  <h5 className="heading mb-0 d-flex">
                    <Form.Check className="form-check" type="checkbox" checked={selectedItems.includes(7)} onChange={() => checkItem(7)} />
                    <NavLink to="#" className="body-link d-block sh-5 mb-0 h6 heading lh-1-5">
                      <Clamp tag="span" clamp="2">
                        Steirer Brot
                      </Clamp>
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
                    <div className="text-muted d-inline-block text-small align-text-top ms-1">(12)</div>
                  </div>
                  <div className="card-text mb-0">
                    <div className="text-muted text-overline text-small" />
                    <div>$ 2.25</div>
                  </div>
                </Card.Footer>
              </Card>
            </Col>
            <Col>
              <Card className={`h-100 mb-2 ${selectedItems.includes(8) && 'selected'}`}>
                <Card.Img src="/img/product/small/product-8.webp" className="card-img-top sh-22" alt="card image" />
                <Card.Body className="pb-3">
                  <h5 className="heading mb-0 d-flex">
                    <Form.Check className="form-check" type="checkbox" checked={selectedItems.includes(8)} onChange={() => checkItem(8)} />
                    <NavLink to="#" className="body-link d-block sh-5 mb-0 h6 heading lh-1-5">
                      <Clamp tag="span" clamp="2">
                        Pain de Campagne
                      </Clamp>
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
                    <div className="text-muted d-inline-block text-small align-text-top ms-1">(91)</div>
                  </div>
                  <div className="card-text mb-0">
                    <div className="text-muted text-overline text-small" />
                    <div>$ 7.25</div>
                  </div>
                </Card.Footer>
              </Card>
            </Col>
            <Col>
              <Card className={`h-100 mb-2 ${selectedItems.includes(9) && 'selected'}`}>
                <Card.Img src="/img/product/small/product-9.webp" className="card-img-top sh-22" alt="card image" />
                <Card.Body className="pb-3">
                  <h5 className="heading mb-0 d-flex">
                    <Form.Check className="form-check" type="checkbox" checked={selectedItems.includes(9)} onChange={() => checkItem(9)} />
                    <NavLink to="#" className="body-link d-block sh-5 mb-0 h6 heading lh-1-5">
                      <Clamp tag="span" clamp="2">
                        Rugbraud
                      </Clamp>
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
                    <div className="text-muted d-inline-block text-small align-text-top ms-1">(3)</div>
                  </div>
                  <div className="card-text mb-0">
                    <div className="text-muted text-overline text-small" />
                    <div>$ 6.00</div>
                  </div>
                </Card.Footer>
              </Card>
            </Col>
            <Col>
              <Card className={`h-100 mb-2 ${selectedItems.includes(10) && 'selected'}`}>
                <Card.Img src="/img/product/small/product-10.webp" className="card-img-top sh-22" alt="card image" />
                <Card.Body className="pb-3">
                  <h5 className="heading mb-0 d-flex">
                    <Form.Check className="form-check" type="checkbox" checked={selectedItems.includes(10)} onChange={() => checkItem(10)} />
                    <NavLink to="#" className="body-link d-block sh-5 mb-0 h6 heading lh-1-5">
                      <Clamp tag="span" clamp="2">
                        Guernsey Gache
                      </Clamp>
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
                    <div className="text-muted d-inline-block text-small align-text-top ms-1">(3)</div>
                  </div>
                  <div className="card-text mb-0">
                    <div className="text-muted text-overline text-small" />
                    <div>$ 3.25</div>
                  </div>
                </Card.Footer>
              </Card>
            </Col>
            <Col>
              <Card className={`h-100 mb-2 ${selectedItems.includes(11) && 'selected'}`}>
                <Card.Img src="/img/product/small/product-7.webp" className="card-img-top sh-22" alt="card image" />
                <Card.Body className="pb-3">
                  <h5 className="heading mb-0 d-flex">
                    <Form.Check className="form-check" type="checkbox" checked={selectedItems.includes(11)} onChange={() => checkItem(11)} />
                    <NavLink to="#" className="body-link d-block sh-5 mb-0 h6 heading lh-1-5">
                      <Clamp tag="span" clamp="2">
                        Toast Bread
                      </Clamp>
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
                    <div className="text-muted d-inline-block text-small align-text-top ms-1">(3)</div>
                  </div>
                  <div className="card-text mb-0">
                    <div className="text-muted text-overline text-small" />
                    <div>$ 2.50</div>
                  </div>
                </Card.Footer>
              </Card>
            </Col>
            <Col>
              <Card className={`h-100 mb-2 ${selectedItems.includes(12) && 'selected'}`}>
                <Card.Img src="/img/product/small/product-4.webp" className="card-img-top sh-22" alt="card image" />
                <Card.Body className="pb-3">
                  <h5 className="heading mb-0 d-flex">
                    <Form.Check className="form-check" type="checkbox" checked={selectedItems.includes(12)} onChange={() => checkItem(12)} />
                    <NavLink to="#" className="body-link d-block sh-5 mb-0 h6 heading lh-1-5">
                      <Clamp tag="span" clamp="2">
                        Michetta
                      </Clamp>
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
                    <div className="text-muted d-inline-block text-small align-text-top ms-1">(8)</div>
                  </div>
                  <div className="card-text mb-0">
                    <div className="text-muted text-overline text-small" />
                    <div>$ 4.50</div>
                  </div>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
          {/* Product Thumbnails End */}

          {/* Pagination Start */}
          <div className="d-flex justify-content-center mt-5">
            <Pagination>
              <Pagination.Prev className="shadow" disabled>
                <CsLineIcons icon="chevron-left" />
              </Pagination.Prev>
              <Pagination.Item className="shadow" active>
                1
              </Pagination.Item>
              <Pagination.Item className="shadow">2</Pagination.Item>
              <Pagination.Item className="shadow">3</Pagination.Item>
              <Pagination.Next className="shadow">
                <CsLineIcons icon="chevron-right" />
              </Pagination.Next>
            </Pagination>
          </div>
          {/* Pagination End */}
        </Col>
      </Row>

      {/* Filters Modal Start */}
      {!isLgScreen && (
        <Modal className="modal-left" show={isOpenFiltersModal} onHide={() => setIsOpenFiltersModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title as="h5">Filters</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FilterMenuContent />
          </Modal.Body>
        </Modal>
      )}
      {/* Filters Modal End */}
    </>
  );
};

export default Filters;
