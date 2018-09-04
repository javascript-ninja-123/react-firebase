import React,{Component} from 'react';
import RequireLogin from '../../hoc/requiredLogin';
import {compose} from 'redux';
import {Form} from '../../components';
import RequiredLocation from '../../hoc/requiredLocation';
import {profileConnector} from '../../connectors';

class Profile extends Component {

    onSubmit = formData => {
      const profileSubmission = {
        name:formData.name,
        lat:this.props.lat,
        lng:this.props.lng
      }
      this.props.enterWorld(profileSubmission);
    }

    render() {
        return (
            <div className="class-name">
                <Form onSubmit={this.onSubmit}>
                  <Form.InputField
                    placeholder='your name'
                    name="name"
                    type='text'
                    autoComplete='false'/>
                    <Form.ButtonField buttonText='submitButton'/>
                </Form>
            </div>
        );
    }
}


export default compose(
profileConnector,
RequireLogin,
RequiredLocation
)(Profile)
