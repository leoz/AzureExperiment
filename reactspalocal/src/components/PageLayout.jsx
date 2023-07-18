/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from "react-bootstrap/Navbar";

import { useIsAuthenticated } from "@azure/msal-react";
import { SignInButton } from "./SignInButton";
import { SignOutButton } from "./SignOutButton";

/**
 * Renders the navbar component with a sign in or sign out button depending on whether or not a user is authenticated
 * @param props
 */
export const PageLayout = (props) => {
    const isAuthenticated = useIsAuthenticated();

    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">Azure Experiment</Navbar.Brand>
                    <div className="collapse navbar-collapse justify-content-end">
                        {isAuthenticated ? <SignOutButton /> : <SignInButton />}
                    </div>
                </Container>
            </Navbar>
            <br />
            <br />
            <h5>
                <center>
                    Welcome to Azure Experiment
                </center>
            </h5>
            <br />
            <br />
            {props.children}
        </>
    );
};