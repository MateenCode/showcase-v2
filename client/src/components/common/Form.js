import React, { PureComponent } from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";

export class Form extends PureComponent {
  renderInput(formProps) {
    return <input {...formProps.input} />;
  }

  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  };

  render() {
    const { heading } = this.props;
    return (
      <div className='container'>
        <h2 className='container__header'>{heading}</h2>

        <form
          className='form'
          onSubmit={this.props.handleSubmit(this.onSubmit)}
        >
          <p className='form__text'>title:</p>
          <Field
            className='form__input'
            name='title'
            component={this.renderInput}
          />
          <p className='form__text'>image:</p>
          <Field
            className='form__input'
            name='image'
            component={this.renderInput}
          />
          <p className='form__text'>description:</p>
          <Field
            className='form__input'
            name='description'
            component={this.renderInput}
          />
          <p className='form__text'>github:</p>
          <Field
            className='form__input'
            name='github'
            component={this.renderInput}
          />
          <p className='form__text'>live:</p>
          <Field
            className='form__input'
            name='live'
            component={this.renderInput}
          />
          <br />
          <button className='form__btn'>Submit</button>
          <br />
        </form>

        <Link to={"/"} className='container__back'>
          <span>&#8592; go back</span>
        </Link>
      </div>
    );
  }
}

export default reduxForm({
  form: "Form"
})(Form);
