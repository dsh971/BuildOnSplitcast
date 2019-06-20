import React from 'react';
import { Query } from 'react-apollo';
import { loader } from 'graphql.macro';
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { PageLoader } from './PageLoader';

export const CountySpotsList = props => {
    const countyName = props.match.params.countyName.replace("-", " ");
    const RegionSpots = loader('../graphql/queries/RegionSpots.graphql');
    const displayCards = (spotLists) => (
        <>
            <div style={{ 'marginTop': '10px', 'paddingTop': '10px'  }}>
                <p className="font-weight-bold">Below are a list of spots for in {countyName} county:</p>
            </div>
            <CardColumns>
            {
                spotLists.map((obj) => (
                    <Card key={obj.spot_id} id={obj.spot_id}>
                        <Card.Body>
                            <Card.Title>{obj.spot_name}</Card.Title>
                            <Card.Text>({obj.latitude.toString()}, {obj.longitude.toString()})</Card.Text>
                            <Button href={`/county/${props.match.params.countyName}/spot/${obj.spot_id}`}>
                                View Details
                            </Button>
                        </Card.Body>
                    </Card>
                ))
            }
            </CardColumns>
        </>
    );
    const noSpotsFound = () => (
        <div>
            <p>
                <span>
                    Hmmm...Looks like there are no spots data available for {countyName} county at this moment.
                    Stay tuned. SpitCast team are in the process of adding spot forecasts for this region. 
                </span>
                <span>
                    <Button variant="link" href={`/`} style={{'padding': '0px', 'paddingLeft': '5px', 'marginBottom': '2px'}}>
                        Back to home page
                    </Button>
                </span>
            </p>
        </div>
    );
    return (
        <>
            <Query
                query={RegionSpots}
                variables={{ countyName: props.match.params.countyName }}
            >
                {({loading, data}) => (
                    loading 
                    ? <PageLoader /> 
                    : (
                        data.regionSpots && data.regionSpots.length === 0
                        ? noSpotsFound()
                        : displayCards(data.regionSpots)
                    )
                )}
            </Query>
        </>
    );
};