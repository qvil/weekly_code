import React, { Component } from 'react';
import { Button, Header, Image, Modal } from 'semantic-ui-react';
import MafiaImage from '../../img/Wanted001.jpg';
import { ButtonCircularSNS } from '../components/main-page';

class MainPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: true,
            dimmer: true,
            button: {
                loading: false
            }
        };
    }

    // state = { open: false }
    show = (dimmer) => () => { this.setState({ dimmer: dimmer, open: true }) }

    open = () => this.setState({ open: true })
    close = () => this.setState({ open: false })

    ready = () => {
        // TODO: ajax call to server
        // This is just example
        this.setState({ button: { loading: true } })

        setTimeout(() => {
            this.close()
            this.setState({ button: { loading: false } })
        }, 1000);
    }

    render() {
        const { open, dimmer } = this.state;

        return(
            <div>
                {/* <Button onClick={ this.show(true) }>Default</Button>
                <Button onClick={ this.show('inverted') }>inverted</Button>
                <Button onClick={ this.show('blurring') }>blurring</Button> */}
                <Modal
                    dimmer={ dimmer }
                    open={ open }
                    onClose={ this.close }
                >
                    <Modal.Header>Welcome To Mafia Game</Modal.Header>
                    <Modal.Content image>
                        <Image wrapped size="medium" src={ MafiaImage } />
                        <Modal.Description>
                            <Header>You just to find out the mafia!</Header>
                            <p>Are You Ready?</p>
                        </Modal.Description>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button
                            color="red"
                            content="Like"
                            icon="heart"
                            label={{ basic: true, color: 'red', pointing: 'left', content: '0629' }}
                        />
                        <NestedModal />
                        <Button negative content="Nope" onClick={ this.close } />
                        <Button
                            positive
                            loading={ this.state.button.loading }
                            icon="checkmark"
                            labelPosition="right"
                            content="Ready"
                            onClick={ this.ready } />
                    </Modal.Actions>
                </Modal>
            </div>
        );
    }
}

class NestedModal extends (Component, MainPage) {
  state = { open: false }

  render() {
    const { open } = this.state

    return (
      <Modal
        dimmer={true}
        open={open}
        onOpen={this.open}
        onClose={this.close}
        size='small'
        trigger={
            <Button
                color="blue"
                content="Share"
                icon="share"
                label={{ as: 'a', basic: true, color: 'blue', pointing: 'left', content: '0916' }}
            />
        }
        closeIcon="close"
      >
        <Modal.Header>Share to SNS</Modal.Header>
        <Modal.Content>
          <p>Thank you for using!</p>
          <p>Let's share with friends!</p>
        </Modal.Content>
        <Modal.Actions>
            <ButtonCircularSNS />
        </Modal.Actions>
      </Modal>
    )
  }
}

export default MainPage;