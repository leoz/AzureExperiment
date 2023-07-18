//
//
import React from "react";
import { DataTable } from './DataTable';
/**
 * Renders information about the user obtained from MS Graph 
 * @param props
 */
export const ServiceData = (props) => {
    const { data } = props;
    const getHeadings = () => {
        return Object.keys(data[0]);
    }

    return (
        <div className="container">
            <DataTable theadData={getHeadings()} tbodyData={data} />
        </div>
    );
};