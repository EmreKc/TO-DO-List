import React from 'react';
import { connect } from 'react-redux';

import FormItem from '../components/FormItem/FormItem';

import { ItemCompletion } from '../actions/ItemCompletion';

const FormItemContainer = props => <FormItem {...props} />;


const mapDispatchToProps = {
  handleItemCompletion: ItemCompletion,
};

export default connect(
  null,
  mapDispatchToProps,
)(FormItemContainer);
