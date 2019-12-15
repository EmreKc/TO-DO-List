import React from 'react';
import { connect } from 'react-redux';

import Content from '../components/Content/Content';

import { ReorderItem } from '../actions/ReorderItem';

const ContentContainer = props => <Content {...props} />;

const mapStateToProps = state => ({
  items: state.items,
  filter: state.filter
});

const mapDispatchToProps = {
  handleReorderItem: ReorderItem,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContentContainer);
