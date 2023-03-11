import React from 'react'
import Products from '../../Products/products'
import ProductScreen from '../ProductScreen/ProductScreen'
import { Row, Col } from 'react-bootstrap'
import products from '../../Products/products'

const HomeScreen = () => {
  return (
    <>
        <Row>
            {
                Products.map(Products => (
                    <Col>
                        <ProductScreen Products = {products} />
                    </Col>
                ))
            }
        </Row>
    </>
  )
}

export default HomeScreen