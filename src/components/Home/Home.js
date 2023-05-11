import React from 'react';
import { Container, Header } from 'semantic-ui-react';
import './Home.scss';

const Home = () => {
    return (
        <div className="Home">
            <Container text textAlign="center" className="home-container">
                <Header as="h1">Willkommen auf unserer Webseite</Header>
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
