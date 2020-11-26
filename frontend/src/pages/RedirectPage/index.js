import React from 'react';
import Header from '../../components/Header';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ShortenerSevice from '../../services/shortenerService';
import { StatsContainer } from './styles';

export default class RedirectPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            url: '',
            errorMessage: '',
        }
    }

    async componentDidMount() {
        const { code } = this.props.match.params;

        try {
            const service = new ShortenerSevice();
            const { url } = await service.getLink(code);

            window.location = url;

        } catch (error) {
            this.setState({ isLoading: false, erorMessage: 'Ops, a url solicitada não existe.' });
        }
    }

    render() {
        const { errorMessage } = this.state;
        return (
            <Container>
                {errorMessage ? (
                    <>
                        <Header>
                            Seu novo Encurtador de urls. :)
                        </Header>
                        <StatsContainer className="text-center">
                            <FontAwesomeIcon size="3x" color="#f8d7da" icon="faExclamationTriangle" />
                            <p className="m-3">{errorMessage}</p>
                            <a className="btn btn-primary" href="/">Encurtar nova URL</a>
                        </StatsContainer>
                    </>
                ) : (
                        <p className="text-center">Redirecionando</p>
                    )
                }
            </Container>
        )
    }
}