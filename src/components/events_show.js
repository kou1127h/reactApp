// イベント新規作成のコンポーネント
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

import { getEvent, deleteEvent, putEvent } from '../actions';
class EventsShow extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onDeleteClick = this.onDeleteClick.bind(this);
  }
  renderField(field) {
    const {
      input,
      label,
      type,
      meta: { touched, error },
    } = field;
    return (
      <div>
        <input {...input} placeholder={label} type={type} />
        {touched && error && <span>{error}</span>}
      </div>
    );
  }
  async onSubmit(values) {
    // await this.props.postEvent(values);
    this.props.history.push('/');
  }
  async onDeleteClick() {
    const { id } = this.props.match.params;
    await this.props.deleteEvent(id);
    this.props.history.push('/');
  }
  render() {
    // prisine とsubmittingはredux-formの機能
    const { handleSubmit, pristine, submitting } = this.props;
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
        <div>
          <input
            value="Submit"
            type="submit"
            disabled={pristine || submitting}
          />
          <Link to="/">cancel</Link>
          <Link to="/" onClick={this.onDeleteClick}>
            delete
          </Link>
        </div>
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
const mapDispatchToProps = { deleteEvent };

export default connect(
  null,
  mapDispatchToProps
)(reduxForm({ validate, form: 'eventShowForm' })(EventsShow));
