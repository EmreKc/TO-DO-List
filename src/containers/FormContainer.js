import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Form from '../components/Form/Form';

import { AddItem, FilterItem } from '../actions/AddItem';

const FormContainer = props => <Form {...props} />;


const mapDispatchToProps = {
  handleAddItem: AddItem,
  handleFilterItem: FilterItem
};

export default connect(
  null,
  mapDispatchToProps,
)(FormContainer);
