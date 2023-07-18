//
//
import React, { useState } from 'react';
import { tokenScopeService } from '../authConfig';
import { calMyService } from '../api/service';
import { ServiceData } from './ServiceData';
import { useMsal } from '@azure/msal-react';
import Button from 'react-bootstrap/Button';

/**
* Renders information about the signed-in user or a button to retrieve data about the user
*/
export const ServiceContent = () => {
    const { instance, accounts } = useMsal();
    const [data, setData] = useState(null);

    function requestData() {
        // Silently acquires an access token which is then attached to a request for MS Graph data
        instance
            .acquireTokenSilent({
                ...tokenScopeService,
                account: accounts[0],
            })
            .then((response) => {
                calMyService(response.accessToken).then((response) => setData(response));
            });
    }

    return (
        <>
            <br />
            <br />
            <br />
            {data ? (
                <ServiceData data={data} />
            ) : (
                <Button variant="secondary" onClick={requestData}>
                    Request Service Data
                </Button>
            )}
        </>
    );
};
