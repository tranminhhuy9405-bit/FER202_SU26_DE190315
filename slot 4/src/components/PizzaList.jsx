//Hiển thị 

import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import Pizza from './Pizza';
import PizzaData from '../PizzaData';

function PizzaList() {
    return (
        <Container className="my-4">
            <Row>
                {PizzaData.map(p => (
                    <Col key={p.id} md={4} className="mb-4">
                        <Pizza pizza={p} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default PizzaList;