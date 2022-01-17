import React from 'react';
import { Spinner as BootstrapSpinner } from 'react-bootstrap';
import './spinner.scss';

const Spinner = ({}) => {
  return <BootstrapSpinner animation={'border'} className="spinner" />;
};

export default Spinner;
