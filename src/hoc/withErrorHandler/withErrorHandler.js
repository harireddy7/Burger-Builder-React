import React, { Component } from 'react';
import Aux from '../AuxWrapper/AuxWrapper';
import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = (WrappedComponent, axios) => {
    return class withErrorHandler extends Component {

        state = {
            error: null
        }

        componentWillMount() {
            this.reqInterceptor = axios.interceptors.request.use(req => {
                this.setState({error: null});
                return req;
            });
            this.resInterceptor = axios.interceptors.response.use(res => res, error => {
                this.setState({error: error});
            });
        }

        onErrorModalClosed = () => {
            this.setState({error: null});
        }

        render() {
            return (
                <Aux>
                    <Modal show={this.state.error} modalClosed={this.onErrorModalClosed}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent />
                </Aux>
            );
        }

        componentWillUnmount() {
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        }
    }
}

export default withErrorHandler;