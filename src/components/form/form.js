import React,{PureComponent} from 'react';

const curseWordArray = ['fuck','bitch','ass']


const maybe = fn => str => fn(str) ? [str] : [];
const data = str =>  curseWordArray.find(value => value === str) === undefined ? true : false

const dataMaybe = maybe(data)

export default class Form extends PureComponent {

    state = {
      value:"no bad word"
    }

    componentDidMount() {
      const itemArray = dataMaybe(this.props.item)
      if(itemArray.length > 0){
        this.setState({value:itemArray[0]})
      }
    }


    render() {
        return (
            <li>
              {this.state.value}
            </li>
        );
    }
}
