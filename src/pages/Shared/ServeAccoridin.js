import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import './ServeAccordin.css'
const ServeAccoridin = () => {
    return (
        <div className='mt-4'>
    <Accordion defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header> <h4 className='accor-font'>Is the platform free to use?</h4></Accordion.Header>
        <Accordion.Body >
        Absolutely. There are no additional charges or hidden fees. Your company is only billed when you order food using credits.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header><h4 className='accor-font'> What are the benefits</h4></Accordion.Header>
        <Accordion.Body>
        Other than getting access to exclusive vendors, menus and discounts, our platform helps you manage a comprehensive corporate meal program at ease!
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header><h4 className='accor-font'> Is my employee data safe?</h4> </Accordion.Header>
        <Accordion.Body>
        Data security is our top priority. That's why we are proud to count some of the most prestigious banks and consultancies among our clients.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </div>
    );
};

export default ServeAccoridin;