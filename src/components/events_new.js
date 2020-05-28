// イベント新規作成のコンポーネント
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { Link } from 'react-router-dom';
import { postEvent } from '../actions';
class EventsNew extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  renderField(field) {
    const {
      input,
      label,
      type,
      meta: { touched, error },
    } = field;
    return (
      <TextField
        hintText={label}
        floatingLabelText={label}
        type={type}
        errorText={touched && error}
        {...input}
        fullWidth={true}
      />
    );
  }
  async onSubmit(values) {
    await this.props.postEvent(values);
    this.props.history.push('/');
  }
  render() {
    // prisine とsubmittingはredux-formの機能
    const { handleSubmit, pristine, submitting, invalid } = this.props;
    const style = { margin: 12 };
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <div>
          <Field
            label="Title"
            name="title"
            type="text"
            component={this.renderField}
          />
        </div>
        <div>
          <Field
            label="Body"
            name="body"
            type="text"
            component={this.renderField}
          />
        </div>
        <RaisedButton
          label="submit"
          type="submit"
          style={style}
          disabled={pristine || submitting || invalid}
        />
        <RaisedButton
          label="Cancel"
          style={style}
          containerElement={<Link to="/" />}
        />
      </form>
    );
  }
}

const validate = (values) => {
  const errors = {};
  if (!values.title) errors.title = 'enter a title';
  if (!values.body) errors.body = 'enter a body';
  return errors;
};
const mapDispatchToProps = { postEvent };

export default connect(
  null,
  mapDispatchToProps
)(reduxForm({ validate, form: 'eventNewForm' })(EventsNew));
