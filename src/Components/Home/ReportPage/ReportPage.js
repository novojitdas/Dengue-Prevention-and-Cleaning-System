import React from 'react';
import Home from '../Home';
import "./ReportPage.scss";
import SearchForm from '../../SearchForm/SearchForm';

class ReportPage extends React.Component {
    
    constructor(props) {
        super(props);
    
        this.state = {
          leftOpen: true,
          rightOpen: true,
        }
      }


    toggleSidebar = (event) => {
        let key = `${event.currentTarget.parentNode.id}Open`;
        this.setState({ [key]: !this.state[key] });
      }



    render() {
        let leftOpen = this.state.leftOpen ? 'open' : 'closed';
    return (
        <div id='layout'>

          <div id='left' className={leftOpen} >
              <div className='icon'
                   onClick={this.toggleSidebar} >
                   &equiv;
              </div>
              <div className={`sidebar ${leftOpen}`} >
                  <div className='header'>
                    <h3 className='title'>
                      Search for Report
                    </h3>
                  </div>
                  <div className='content'>
                      <h3>Left content</h3>
                    <SearchForm/>

                  </div>
              </div>
          </div>

          <div id='main'>
              <div className='header'>
                  <h3 className={`
                      title
                      ${'left-' + leftOpen}
                  `}>
                      Search for Report
                  </h3>
              </div>
              <div className='content'>
                  <Home></Home>
              </div>
          </div>

      </div>
    );
};
};

export default ReportPage;