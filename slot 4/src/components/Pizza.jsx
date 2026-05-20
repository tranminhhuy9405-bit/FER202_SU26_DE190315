import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';

function Pizza({ pizza }) {
  return (
    <Card style={{ width: '18rem' }} className="mx-auto my-3">
      {/* Hiển thị Tag nếu có */}
      {pizza.tag && (
        <Badge bg="danger" style={{ position: 'absolute', top: '10px', left: '10px' }}>
          {pizza.tag}
        </Badge>
      )}
      
      <Card.Img variant="top" src={pizza.imageUrl} alt={pizza.name} />
      
      <Card.Body>
        <Card.Title>{pizza.name}</Card.Title>
        <Card.Text className="text-muted" style={{ fontSize: '0.8rem' }}>
          ID: {pizza.id}
        </Card.Text>
        <Card.Text>{pizza.description}</Card.Text>
        
        {/* Hiển thị giá */}
        <div className="mb-3">
          <span style={{ textDecoration: 'line-through', color: 'gray' }}>
            ${pizza.original}
          </span>
          <span className="ms-2 fw-bold text-danger">
            ${pizza.salePrice}
          </span>
        </div>

        <Button variant="secondary" className="w-100">Add to Cart</Button>
      </Card.Body>
    </Card>
  );
}

export default Pizza;