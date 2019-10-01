import React, { PureComponent } from "react";
import { connect } from "react-redux";

import { Form } from "components";
import { createCard } from "actions";

export class index extends PureComponent {
  onSubmit = formValues => {
    this.props.createCard(formValues);
  };

  render() {
    return (
      <div className='create'>
        <Form heading='Create Card' onSubmit={this.onSubmit} />
      </div>
    );
  }
}
export default connect(
  null,
  {
    createCard
  }
)(index);
