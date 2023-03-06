import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import LayoutFullpage from 'layout/LayoutFullpage';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import HtmlHead from 'components/html-head/HtmlHead';
import { useDispatch } from 'react-redux';
import { logout } from '../../auth/authSlice';
import { auth } from '../../firebase';

const Logout = () => {
  const dispatch = useDispatch();
  const title = 'Logout';
  const description = 'Logout Page';

  useEffect(() => {
    dispatch(logout());
    auth.signOut();
  }, [dispatch]);

  const leftSide = (
    <div className="min-h-100 d-flex align-items-center">
      <div className="w-100 w-lg-75 w-xxl-50">
        <div>
          <div className="mb-5">
            <h1 className="display-3 text-white">Multiple Niches</h1>
            <h1 className="display-3 text-white">Ready for Your Project</h1>
          </div>
          <p className="h6 text-white lh-1-5 mb-5">
            Dynamically target high-payoff intellectual capital for customized technologies. Objectively integrate emerging core competencies before
            process-centric communities...
          </p>
          <div className="mb-5">
            <Button size="lg" variant="outline-white" href="/">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
  const rightSide = (
    <div className="sw-lg-80 min-h-100 bg-foreground d-flex justify-content-center align-items-center shadow-deep py-5 full-page-content-right-border">
      <div className="sw-lg-60 px-5">
        <div className="sh-11">
          <NavLink to="/">
            <div className="logo-default" />
          </NavLink>
        </div>
        <div className="mb-5">
          <h2 className="cta-1 mb-0 text-primary">Ooops, it looks like an error!</h2>
          <h2 className="display-2 text-primary">Unauthorized</h2>
        </div>
        <div className="mb-5">
          <p className="h6">It looks like the page you are looking for is not available.</p>
          <p className="h6">
            If you think that is a mistake, please <NavLink to="/">contact</NavLink> us.
          </p>
        </div>
        <div>
          <NavLink to="/" className="btn btn-icon btn-icon-start btn-primary">
            <CsLineIcons icon="arrow-left" /> <span>Back to Home</span>
          </NavLink>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <HtmlHead title={title} description={description} />
      <LayoutFullpage left={leftSide} right={rightSide} />
    </>
  );
};

export default Logout;
