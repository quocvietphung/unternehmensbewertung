import React from 'react';
import { Container, Header as SemanticHeader } from 'semantic-ui-react';
import './Home.scss';

const Home = () => {
    return (
        <div className="Home">
            <Container text textAlign="center" className="home-container">
                <SemanticHeader as="h1" className="home-header">
                    Willkommen auf unserer Webseite
                </SemanticHeader>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dignissim lectus id mattis dignissim.
                    Donec commodo mi vitae nisi fermentum fringilla. Quisque sem mauris, mollis sit amet felis eu, suscipit
                    consequat turpis. Proin elementum nibh at semper malesuada.
                </p>
            </Container>
        </div>
    );
};

export default Home;
