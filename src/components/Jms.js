import React from "react";
import { Jon } from "../assets";
import { Container, Grid, Header, Image } from "semantic-ui-react";


function Jms() {
    return (
        <Grid>
            <Grid.Row>
                <Grid.Column computer={3} tablet={1}></Grid.Column>
                <Grid.Column computer={4} tablet={16}>
                    <Image src={Jon} />
                </Grid.Column>
                <Grid.Column computer={6} tablet={16}>
                    <Container textAlign='center'>
                        <Header size='large'>
                            Welcome to the vitrual home of Jonathan Singh<br /> an aspiring Full Stack Developer
                        </Header>
                        <br />
                        Coding for me began physically for me in late 2020 when I began
                        learning Python and Javascript. The idea began much earlier as
                        I was stuggling with my mental health. Taking the first step of
                        reaching out to others for help felt harder than learning to fly
                        without wings. So I wanted to build something that would metaphorically
                        give me those wings.
                    </Container>
                </Grid.Column>
                <Grid.Column computer={3} tablet={1}></Grid.Column>
            </Grid.Row>
        </Grid>
    )
}

export default Jms