import PropTypes from "prop-types";
import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { useToasts } from "react-toast-notifications";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import { connect } from "react-redux";
// import { getDiscountPrice } from "../../helpers/product";
import constant from '../../util/constant';
import WebService from '../../util/webService';
// import { addToCart } from "../../redux/actions/cartActions";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import { isValidObject } from "../../util/helper";
import { multilanguage } from "redux-multilanguage";

const OrderDetails = ({
    location,
    orderID,
    strings

}) => {
    // const { addToast } = useToasts();
    const { pathname } = location;
    const [orderDetails, setorderDetails] = useState({});
    useEffect(() => {
        getOrderDetails();
    }, [])

    const getOrderDetails = async () => {
        let action = constant.ACTION.AUTH + constant.ACTION.ORDERS + orderID;
        try {
            let response = await WebService.get(action);
            if (response) {
                console.log(response)
                // setOrderData(response)
                // // setConfig(response)
            }
        } catch (error) {
            console.log(error, '------------')
        }
        console.log({ "id": 2754, "totals": [{ "id": 2862, "title": null, "text": null, "code": "order.total.subtotal", "order": 5, "module": "subtotal", "value": 129.9900 }, { "id": 2863, "title": null, "text": null, "code": "order.total.shipping", "order": 100, "module": "shipping", "value": 0.0000 }, { "id": 2864, "title": null, "text": null, "code": "order.total.total", "order": 500, "module": "total", "value": 129.9900 }], "attributes": [], "paymentType": "CREDITCARD", "paymentModule": "stripe", "shippingModule": "storePickUp", "previousOrderStatus": null, "orderStatus": "PROCESSED", "creditCard": null, "datePurchased": "2021-01-12", "currency": "USD", "customerAgreed": false, "confirmedAddress": true, "comments": null, "customer": { "id": 5253, "emailAddress": "patel@gmail.com", "billing": { "postalCode": null, "countryCode": null, "firstName": "Patel", "lastName": "James", "bilstateOther": null, "company": null, "phone": null, "address": null, "city": null, "stateProvince": "TIAT", "billingAddress": false, "latitude": null, "longitude": null, "zone": null, "country": "AT" }, "delivery": null, "gender": "M", "language": "en", "firstName": "Patel", "lastName": "James", "provider": null, "storeCode": null, "userName": "patel@gmail.com", "rating": 0.0, "ratingCount": 0, "attributes": [], "groups": [] }, "products": [{ "id": 2754, "orderedQuantity": 1, "product": { "id": 100, "price": 129.99, "quantity": 37, "sku": "UC100", "productShipeable": true, "preOrder": false, "productVirtual": false, "quantityOrderMaximum": 1, "quantityOrderMinimum": 1, "productIsFree": false, "available": true, "visible": true, "productSpecifications": { "height": 17.00, "weight": 11.00, "length": 52.00, "width": 12.00, "model": null, "manufacturer": null, "dimensionUnitOfMeasure": null, "weightUnitOfMeasure": null }, "rating": 0.0, "ratingCount": 0, "sortOrder": 1000, "dateAvailable": "2019-06-17", "refSku": "", "condition": null, "creationDate": "2019-06-17", "rentalDuration": 0, "rentalPeriod": 0, "rentalStatus": null, "description": { "id": 1250, "language": "en", "name": "Sofa available in different size and colors", "description": "<p>\r\n\tThis is a product having a choice of colors and sizes</p>\r\n", "friendlyUrl": "sofa-available-in-different-size-and-colors", "keyWords": "", "highlights": "", "metaDescription": "", "title": "Product with options and sizes" }, "productPrice": { "id": 1601, "originalPrice": "US$129.99", "finalPrice": "US$129.99", "discounted": false, "description": { "id": 7752, "language": "en", "name": null, "description": null, "friendlyUrl": null, "keyWords": null, "highlights": null, "metaDescription": null, "title": null, "priceAppender": null } }, "finalPrice": "US$129.99", "originalPrice": "US$129.99", "discounted": false, "image": { "id": 851, "imageName": "27.jpg", "imageUrl": "https://s3.ca-central-1.amazonaws.com/shopizer-lightsail/products/DEFAULT/UC100/SMALL/27.jpg", "externalUrl": null, "videoUrl": null, "imageType": 0, "defaultImage": true }, "images": [{ "id": 851, "imageName": "27.jpg", "imageUrl": "https://s3.ca-central-1.amazonaws.com/shopizer-lightsail/products/DEFAULT/UC100/SMALL/27.jpg", "externalUrl": null, "videoUrl": null, "imageType": 0, "defaultImage": true }], "manufacturer": { "id": 1, "code": "DEFAULT", "order": 0, "description": { "id": 0, "language": null, "name": "DEFAULT", "description": null, "friendlyUrl": null, "keyWords": null, "highlights": null, "metaDescription": null, "title": null } }, "attributes": null, "options": [{ "id": 1, "code": "COLOR", "type": "radio", "readOnly": false, "name": "Color", "lang": "en", "optionValues": [{ "id": 402, "code": "light-grey", "defaultValue": true, "sortOrder": 0, "image": "https://s3.ca-central-1.amazonaws.com/shopizer-lightsail/files/DEFAULT/PROPERTY/grey-100.jpg", "order": 0, "price": null, "description": { "id": 0, "language": "en", "name": "Light Grey", "description": null, "friendlyUrl": null, "keyWords": null, "highlights": null, "metaDescription": null, "title": null } }, { "id": 403, "code": "charcoal", "defaultValue": false, "sortOrder": 1, "image": "https://s3.ca-central-1.amazonaws.com/shopizer-lightsail/files/DEFAULT/PROPERTY/charcoal-100.jpg", "order": 0, "price": "US$10.00", "description": { "id": 0, "language": "en", "name": "Charcoal", "description": null, "friendlyUrl": null, "keyWords": null, "highlights": null, "metaDescription": null, "title": null } }] }, { "id": 2, "code": "SIZE", "type": "select", "readOnly": false, "name": "Size", "lang": "en", "optionValues": [{ "id": 4, "code": "SMALL", "defaultValue": false, "sortOrder": 0, "image": null, "order": 0, "price": null, "description": { "id": 0, "language": "en", "name": "Small", "description": null, "friendlyUrl": null, "keyWords": null, "highlights": null, "metaDescription": null, "title": null } }, { "id": 6, "code": "LARGE", "defaultValue": true, "sortOrder": 0, "image": null, "order": 0, "price": null, "description": { "id": 0, "language": "en", "name": "Large", "description": null, "friendlyUrl": null, "keyWords": null, "highlights": null, "metaDescription": null, "title": null } }] }], "categories": [{ "id": 53, "code": "decorations", "sortOrder": 50, "visible": true, "featured": false, "lineage": "/53/", "depth": 0, "parent": null, "description": { "id": 53, "language": null, "name": "Decorations", "description": "\r\n\tIndoor and outdoor decorations\r\n", "friendlyUrl": "decorations", "keyWords": "", "highlights": "", "metaDescription": "", "title": "Importa - Décorations" }, "productCount": 0, "store": null, "children": [] }], "type": { "id": 1, "code": "GENERAL", "name": "GENERAL", "allowAddToCart": false }, "canBePurchased": true, "owner": null }, "productName": "Sofa available in different size and colors", "price": "US$129.99", "subTotal": "US$129.99", "attributes": [], "sku": "UC100", "image": "27.jpg" }], "currencyModel": { "id": 61, "currency": "USD", "supported": true, "code": "USD", "name": "USD", "symbol": "USD", "new": false } })
        setorderDetails({ "id": 2754, "totals": [{ "id": 2862, "title": null, "text": null, "code": "order.total.subtotal", "order": 5, "module": "subtotal", "value": 129.9900 }, { "id": 2863, "title": null, "text": null, "code": "order.total.shipping", "order": 100, "module": "shipping", "value": 0.0000 }, { "id": 2864, "title": null, "text": null, "code": "order.total.total", "order": 500, "module": "total", "value": 129.9900 }], "attributes": [], "paymentType": "CREDITCARD", "paymentModule": "stripe", "shippingModule": "storePickUp", "previousOrderStatus": null, "orderStatus": "PROCESSED", "creditCard": null, "datePurchased": "2021-01-12", "currency": "USD", "customerAgreed": false, "confirmedAddress": true, "comments": null, "customer": { "id": 5253, "emailAddress": "patel@gmail.com", "billing": { "postalCode": null, "countryCode": null, "firstName": "Patel", "lastName": "James", "bilstateOther": null, "company": null, "phone": null, "address": null, "city": null, "stateProvince": "TIAT", "billingAddress": false, "latitude": null, "longitude": null, "zone": null, "country": "AT" }, "delivery": null, "gender": "M", "language": "en", "firstName": "Patel", "lastName": "James", "provider": null, "storeCode": null, "userName": "patel@gmail.com", "rating": 0.0, "ratingCount": 0, "attributes": [], "groups": [] }, "products": [{ "id": 2754, "orderedQuantity": 1, "product": { "id": 100, "price": 129.99, "quantity": 37, "sku": "UC100", "productShipeable": true, "preOrder": false, "productVirtual": false, "quantityOrderMaximum": 1, "quantityOrderMinimum": 1, "productIsFree": false, "available": true, "visible": true, "productSpecifications": { "height": 17.00, "weight": 11.00, "length": 52.00, "width": 12.00, "model": null, "manufacturer": null, "dimensionUnitOfMeasure": null, "weightUnitOfMeasure": null }, "rating": 0.0, "ratingCount": 0, "sortOrder": 1000, "dateAvailable": "2019-06-17", "refSku": "", "condition": null, "creationDate": "2019-06-17", "rentalDuration": 0, "rentalPeriod": 0, "rentalStatus": null, "description": { "id": 1250, "language": "en", "name": "Sofa available in different size and colors", "description": "<p>\r\n\tThis is a product having a choice of colors and sizes</p>\r\n", "friendlyUrl": "sofa-available-in-different-size-and-colors", "keyWords": "", "highlights": "", "metaDescription": "", "title": "Product with options and sizes" }, "productPrice": { "id": 1601, "originalPrice": "US$129.99", "finalPrice": "US$129.99", "discounted": false, "description": { "id": 7752, "language": "en", "name": null, "description": null, "friendlyUrl": null, "keyWords": null, "highlights": null, "metaDescription": null, "title": null, "priceAppender": null } }, "finalPrice": "US$129.99", "originalPrice": "US$129.99", "discounted": false, "image": { "id": 851, "imageName": "27.jpg", "imageUrl": "https://s3.ca-central-1.amazonaws.com/shopizer-lightsail/products/DEFAULT/UC100/SMALL/27.jpg", "externalUrl": null, "videoUrl": null, "imageType": 0, "defaultImage": true }, "images": [{ "id": 851, "imageName": "27.jpg", "imageUrl": "https://s3.ca-central-1.amazonaws.com/shopizer-lightsail/products/DEFAULT/UC100/SMALL/27.jpg", "externalUrl": null, "videoUrl": null, "imageType": 0, "defaultImage": true }], "manufacturer": { "id": 1, "code": "DEFAULT", "order": 0, "description": { "id": 0, "language": null, "name": "DEFAULT", "description": null, "friendlyUrl": null, "keyWords": null, "highlights": null, "metaDescription": null, "title": null } }, "attributes": null, "options": [{ "id": 1, "code": "COLOR", "type": "radio", "readOnly": false, "name": "Color", "lang": "en", "optionValues": [{ "id": 402, "code": "light-grey", "defaultValue": true, "sortOrder": 0, "image": "https://s3.ca-central-1.amazonaws.com/shopizer-lightsail/files/DEFAULT/PROPERTY/grey-100.jpg", "order": 0, "price": null, "description": { "id": 0, "language": "en", "name": "Light Grey", "description": null, "friendlyUrl": null, "keyWords": null, "highlights": null, "metaDescription": null, "title": null } }, { "id": 403, "code": "charcoal", "defaultValue": false, "sortOrder": 1, "image": "https://s3.ca-central-1.amazonaws.com/shopizer-lightsail/files/DEFAULT/PROPERTY/charcoal-100.jpg", "order": 0, "price": "US$10.00", "description": { "id": 0, "language": "en", "name": "Charcoal", "description": null, "friendlyUrl": null, "keyWords": null, "highlights": null, "metaDescription": null, "title": null } }] }, { "id": 2, "code": "SIZE", "type": "select", "readOnly": false, "name": "Size", "lang": "en", "optionValues": [{ "id": 4, "code": "SMALL", "defaultValue": false, "sortOrder": 0, "image": null, "order": 0, "price": null, "description": { "id": 0, "language": "en", "name": "Small", "description": null, "friendlyUrl": null, "keyWords": null, "highlights": null, "metaDescription": null, "title": null } }, { "id": 6, "code": "LARGE", "defaultValue": true, "sortOrder": 0, "image": null, "order": 0, "price": null, "description": { "id": 0, "language": "en", "name": "Large", "description": null, "friendlyUrl": null, "keyWords": null, "highlights": null, "metaDescription": null, "title": null } }] }], "categories": [{ "id": 53, "code": "decorations", "sortOrder": 50, "visible": true, "featured": false, "lineage": "/53/", "depth": 0, "parent": null, "description": { "id": 53, "language": null, "name": "Decorations", "description": "\r\n\tIndoor and outdoor decorations\r\n", "friendlyUrl": "decorations", "keyWords": "", "highlights": "", "metaDescription": "", "title": "Importa - Décorations" }, "productCount": 0, "store": null, "children": [] }], "type": { "id": 1, "code": "GENERAL", "name": "GENERAL", "allowAddToCart": false }, "canBePurchased": true, "owner": null }, "productName": "Sofa available in different size and colors", "price": "US$129.99", "subTotal": "US$129.99", "attributes": [], "sku": "UC100", "image": "27.jpg" }], "currencyModel": { "id": 61, "currency": "USD", "supported": true, "code": "USD", "name": "USD", "symbol": "USD", "new": false } })
    }
    return (
        <Fragment>
            <MetaTags>
                <title>Importa | Order Details</title>
                {/* <meta
          name="description"
          content="Wishlist page of flone react minimalist eCommerce template."
        /> */}
            </MetaTags>

            <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
            <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
                Order Details
            </BreadcrumbsItem>

            <LayoutOne headerContainerClass="container-fluid"
                headerPaddingClass="header-padding-2"
                headerTop="visible">
                {/* breadcrumb */}
                <Breadcrumb />
                <div className="cart-main-area pt-90 pb-100">
                    <div className="container">
                        {isValidObject(orderDetails) ? (
                            <Fragment>
                                <h3 className="cart-page-title">Your orders details</h3>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="table-content table-responsive cart-table-content">
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th>Image</th>
                                                        <th>Product Name</th>
                                                        <th>Unit Price</th>
                                                        <th>Qty</th>
                                                        <th>Subtotal</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {orderDetails.products.map((orderItem, key) => {

                                                        return (
                                                            <tr key={key}>
                                                                <td className="product-thumbnail">
                                                                    <Link to={"/product/" + orderItem.product.description.friendlyUrl}>
                                                                        <img
                                                                            style={{ width: 140 }}
                                                                            className="img-fluid"
                                                                            src={orderItem.product.image.imageUrl}
                                                                            alt=""
                                                                        />
                                                                    </Link>
                                                                </td>

                                                                <td className="product-name">
                                                                    <Link to={"/product/" + orderItem.product.description.friendlyUrl}>
                                                                        {orderItem.productName}
                                                                    </Link>
                                                                    <br />
                                                                    SKU: {orderItem.sku}
                                                                </td>

                                                                <td className="product-price-cart">
                                                                    <span className="amount">
                                                                        {orderItem.orderedQuantity}
                                                                    </span>
                                                                </td>
                                                                <td className="product-price-cart">
                                                                    <span className="amount">
                                                                        {orderItem.price}
                                                                    </span>
                                                                </td>
                                                                <td className="product-status">
                                                                    {/* {order.orderStatus} */}
                                                                </td>
                                                            </tr>
                                                        );
                                                    })}
                                                </tbody>

                                            </table>

                                        </div>
                                    </div>
                                </div>
                            </Fragment>
                        ) : (
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="item-empty-area text-center">
                                            <div className="item-empty-area__icon mb-30">
                                                <i className="pe-7s-shopbag"></i>
                                            </div>
                                            <div className="item-empty-area__text">
                                                No items found  <br />{" "}
                                                <Link to={"/"}>
                                                    Shop Now
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                    </div>
                </div>
            </LayoutOne>
        </Fragment>
    );
};

OrderDetails.propTypes = {
    location: PropTypes.object
};

const mapStateToProps = (state, ownProps) => {
    const order_id = ownProps.match.params.id;
    return {
        orderID: order_id
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(multilanguage(OrderDetails));
