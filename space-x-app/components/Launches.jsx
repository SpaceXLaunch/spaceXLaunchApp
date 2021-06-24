import React, { Component, Fragment } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import LaunchItem from './LaunchItem.jsx';

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
      launches {
          id
          flight_number
          name
          date_local
          upcoming 
          success
      }
  }
`

class Launches extends Component {
    constructor () {
        super();
        this.state = {
            launchClicked: false
        };
        this.handleLaunchClick = this.handleLaunchClick.bind(this);
    }

    handleLaunchClick (e) {
        this.setState({
            launchClicked: !this.state.launchClicked
        })
    }  

    render () {
        return (
          <Fragment>
            <h1 className="display-4 my-3" onClick={this.handleLaunchClick}>Click To See Launches</h1>
            <Query query={LAUNCHES_QUERY}>
                {
                    ({ loading, error, data }) => {
                        if (loading) {
                            return <h4>Loading....</h4>
                        }
                        if (error) {
                            console.log(error)
                        }
                        if (this.state.launchClicked) {
                            return <Fragment>
                            {
                                data.launches.map(launch => {
                                    return <LaunchItem key={launch.id} launch={launch} rocket={launch.rocket}/>
                                })
                            }
                        </Fragment>

                        } else {
                            return null
                        }
                        
                    }
                }
            </Query>
          </Fragment>
        )
    }
}

export default Launches; 