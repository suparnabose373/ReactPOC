import React, { Suspense, lazy } from 'react';
import { Route, useHistory } from 'react-router-dom';
import { Security, SecureRoute, LoginCallback } from '@okta/okta-react';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import config from './config';
import Main from './components/main';
import Authentication from './authentication';
import custCallback from './custCallback';
import ErrorScreen from './errorScreen';
import Loader from './common/loader';

const dashboard = lazy(() => import('./components/Dashboard/index'));
const oktaAuth = new OktaAuth(config.oidc);
const NoAccess = () => {<div>NO ACCESS</div>}

const Routes = () => {
    const history = useHistory();

    function WaitingComponent(Component) {
        return props => (
            <Suspense fallback={<Loader />}>
                <Component {...props} />
            </Suspense>
        )
    }

    const restoreOriginalUri = async (_oktaAuth, originalUri) => {
        history.replaceState(toRelativeUrl(originalUri, window.location.origin));
    }

    return (
        <div>
            
            <div className='grid-container'>
                <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
                    <Route path='/' exact component={Authentication} />
                    <Route path='/home' component={custCallback} />
                    <Route path='/login/callback' component={LoginCallback} />
                    
                    
                    

                    <SecureRoute path='/dashboard' component={WaitingComponent(dashboard)}/>
                    <SecureRoute path='/errorScreen' component={ErrorScreen} />                  
                </Security>
            </div>
        </div>
    );
}

export default Routes;