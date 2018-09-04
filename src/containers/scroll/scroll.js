import React,{Component,PureComponent} from 'react';
import {connect} from 'react-redux';
import './scroll.css';
import {fetchData,changePage} from '../../actions'
const promisify = fn => new Promise(resolve => resolve(fn()))
class Message extends PureComponent{
  render(){
    return(
      <li style={{padding:'6rem'}}>
        <p>{this.props.name}</p>
        <p>{Date.now()}</p>
      </li>
    )
  }
}



class Scroll extends Component {
    componentDidMount() {
      const {page,per} = this.props;
      this.props.fetchData({page,per});
    }
    componentWillMount() {
      window.addEventListener('scroll', (e) => {
          this.handleScroll(e)
      })
      }

    handleScroll =  () => {
      const { totalPages,scrolling, page,per} = this.props;
      if (scrolling) return
      if (totalPages <= page) return
      var lastLi = document.querySelector('ul.contacts > li:last-child')
      var lastLiOffset = lastLi.offsetTop + lastLi.clientHeight
      var pageOffset = window.pageYOffset + window.innerHeight
      var bottomOffset = 20
      if (pageOffset > lastLiOffset - bottomOffset) {
        this.loadMore();
      }
    }

    loadMore = async () => {
      console.log('called')
      const { page,per} = this.props;
      const newPage = page + 1;
      await promisify(() => this.props.changePage(newPage))
      this.props.fetchData({newPage,per});
    }


    render() {
        return (
            <ul className="contacts">
                {
                  this.props.contacts.reduce((acc,val,i) => {
                    const newVal = <Message key={val.name+i} {...val}/>
                    acc[i] = newVal
                    return acc;
                  }, new Array(this.props.contacts))
                }
            </ul>
        );
    }
}

const mapStateToProps = ({scroll}) => {
  const {page,per,contacts,loading,totalPages,scrolling} = scroll;
  return{page,per,contacts,loading,totalPages,scrolling}
}

export default  connect(mapStateToProps,{fetchData,changePage})(Scroll);
