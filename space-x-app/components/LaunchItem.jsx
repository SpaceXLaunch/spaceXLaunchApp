import React, { Component, Fragment } from 'react';
import styles from '../styles/Home.module.css';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

class LaunchItem extends Component {
    constructor() {
        super();
        this.state = {
            showLaunchDetailsClicked: false 
        };
        this.showLaunchDetails = this.showLaunchDetails.bind(this);
    }

    showLaunchDetails (e) {
      this.setState({
        showLaunchDetailsClicked: !this.state.showLaunchDetailsClicked
      });
      
    }

    render(props) {
        const ROCKET_QUERY = gql`
            query RocketQuery {
                rockets {
                    name
                    first_flight
                    active
                    type
                    description
                }
            }
            `
        return (
            <div className="card card-body mb-3">
                <h3>Mission: {this.props.launch.name}</h3>
                <h4>Flight Number: {this.props.launch.flight_number}</h4>
                <p>Date: {this.props.launch.date_local}</p>
    
                {this.props.launch.success ? <span className={styles.success}> Mission Succeeded!</span> : <span className={styles.fail}> Mission Failed!</span>}
                {this.props.launch.upcoming ? <span> New Future Missions!</span> : <span> No New Missions!</span>}
                <button onClick={this.showLaunchDetails}>Click to See Launch Details</button>
                { this.state.showLaunchDetailsClicked ? 
                <Query query={ROCKET_QUERY}>
                {
                    ({ loading, error, data }) => {
                        if (loading) {
                            return <h4>Loading....</h4>
                        }
                        if (error) {
                            console.log(error)
                        }
                        console.log('This is data-->', data)
                        if (data) {
                            return <Fragment>
                            {
                                data.rockets.map((rocket, i) => {
                                    return (
                                        <div className="card card-body mb-3" key={i}>
                                            <h3>Name: {rocket.name}</h3>
                                            <h4>Flight Date: {rocket.first_flight}</h4>
                                            <p>Description {rocket.description}</p>
                                        </div> 
                                    )
                                })
                            }
                        </Fragment>

                        } else {
                            return null
                        }
                        
                    }
                }
            </Query> : null }
            </div>
        )
    }
    
} 

export default LaunchItem;