import React from "react"
// import { Icon } from "../../components/icon"
// import { ArrowRight } from 'react-bootstrap-icons';
import { Row, Col, Container, Card, Button } from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons'

export default function ShopPage() {
    return (
        <Container fluid>
            <Row>
                <Col>
                <h1>Shop Page</h1>
                </Col>
            </Row>
            <Icon.XLg color="#3E3BE1" size={24} />
           
            <Row>
                <Col><Icon.Stars color="#3E3BE1" size={48} /></Col>
                <Col><Icon.Image color="#B83280" size={48} /></Col>
                <Col><Icon.BagHeart color="#9C4221" size={48} /></Col>
                <Col><Icon.Shop color="#38B2AC" size={48}/></Col>
            </Row>
            
            
            todo create cards for the sale items!
        </Container>
    )
} 