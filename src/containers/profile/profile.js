import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {Form,Map} from '../../components';
import {profileConnector} from '../../connectors';

class Profile extends Component {

      componentDidMount(){
        this.props.fetchProfile()
      }


      componentWillUnmount(){
        console.log('unsubscribe')
        this.props.unsubscribe();
      }

    onSubmit = formData => {
      const profileSubmission = {
        name:formData.name,
        lat:this.props.lat,
        lng:this.props.lng
      }
      this.props.enterWorld(profileSubmission);
    }

    fn = (val,i) => (
      <li>
        <p>{val['name']}</p>
        <p>{val['lng']}</p>
        <p>{val['lat']}</p>
      </li>
    )

    render() {
        return (
            <div className="class-name">
                <Link to='/'>Sign up</Link>
                <Form onSubmit={this.onSubmit}>
                  <Form.InputField
                    placeholder='your name'
                    name="name"
                    type='text'
                    autoComplete='false'/>
                    <Form.ButtonField buttonText='submitButton'/>
                </Form>
                <ul>
                  <Map data={this.props.profileList} fn={this.fn}/>
                </ul>
            </div>
        );
    }
}


export default profileConnector(Profile)
