import React,{Component} from 'react';
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'

export default BaseComponent => {
  class requiredLocation extends Component {

      state = {
        error:null,
        latitude:null,
        longitude:null
      }

      error = () => {
        this.setState({error:'cannot fetch your geolocation'})
      }

      success = ({coords}) => {
        this.setState({latitude:coords.latitude, longitude:coords.longitude})
      }

      componentDidMount(){
        navigator.geolocation.getCurrentPosition(this.success,this.error)
      }


      render() {
          if(this.state.latitude && this.state.longitude){
            return <BaseComponent {...this.props} lat={this.state.latitude} lng={this.state.longitude}/>
          }
          else{
            return (
              <Segment>
                   <Dimmer active inverted>
                     <Loader inverted>Loading</Loader>
                   </Dimmer>
                 </Segment>
            )
          }
      }
  }
  return requiredLocation;
}
