import React from 'react';
import { connect } from 'react-redux';

import PropertyBar from '../components/PropertyBar/PropertyBar';

import { DeleteItem } from '../actions/DeleteItem';

const PropertyBarContainer = props => <PropertyBar {...props} />;


const mapDispatchToProps = {
  handleDeleteItem: DeleteItem,
};

export default connect(
  null,
  mapDispatchToProps,
)(PropertyBarContainer);
