//
//

import React from 'react';
import { PageLayout } from './components/PageLayout';
import { ProfileContent } from './components/ProfileContent';
import { ServiceContent } from './components/ServiceContent';

import { AuthenticatedTemplate, UnauthenticatedTemplate } from '@azure/msal-react';

import './styles/App.css';

/**
* If a user is authenticated the ProfileContent component above is rendered. Otherwise a message indicating a user is not authenticated is rendered.
*/
const MainContent = () => {
    return (
        <div className="App">
            <AuthenticatedTemplate>
                <ProfileContent />
                <ServiceContent />
            </AuthenticatedTemplate>

            <UnauthenticatedTemplate>
                <h5>
                    <center>
                        Please sign-in to see your profile information.
                    </center>
                </h5>
            </UnauthenticatedTemplate>
        </div>
    );
};

export default function App() {
    return (
        <PageLayout>
            <center>
                <MainContent />
            </center>
        </PageLayout>
    );
}
