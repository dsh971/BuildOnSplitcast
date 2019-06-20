import React from 'react';
import { Query } from 'react-apollo';
import { loader } from 'graphql.macro';
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';
import { PageLoader } from './PageLoader';

export const UniqueCountiesList = () => {
    const UniqueCounties = loader('../graphql/queries/UniqueCounties.graphql');
    const renderCountyList = (arrObj) => (
        <CardColumns>
        {
            arrObj.map(({county_name}) => (
                <Card key={county_name.split(' ').join('')} className="text-center">
                <Card.Body>
                    <Card.Title>
                    <ButtonToolbar>
                        <Button variant="link" href={`/county/${county_name.toLowerCase().replace(" ", "-")}`} size="lg">
                            {county_name}
                        </Button>
                    </ButtonToolbar>
                    </Card.Title>
                </Card.Body>
                </Card>
            ))
        }
        </CardColumns>
    );
    return (
        <>
            <div style={{ 'marginTop': '10px', 'paddingTop': '10px'  }}>
                <p className="font-weight-bold">Below are a list of counties in California where we have acess to surf data:</p>
            </div>
            <Query
                query={UniqueCounties}
            >
                {({loading, data}) => {
                const displayLogic = loading ? <PageLoader /> : renderCountyList(data.uniqueCounties);
                return displayLogic;
                }}
            </Query>
        </>
    );
};