import PropTypes from "prop-types";
import React, { Fragment, useState, useEffect } from 'react';
import MetaTags from 'react-meta-tags';
import Paginator from 'react-hooks-paginator';
import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic';
import { connect } from 'react-redux';
import { getSortedProducts } from '../../helpers/product';
import LayoutOne from '../../layouts/LayoutOne';
import Breadcrumb from '../../wrappers/breadcrumb/Breadcrumb';
import ShopSidebar from '../../wrappers/product/ShopSidebar';
import ShopTopbar from '../../wrappers/product/ShopTopbar';
import ShopProducts from '../../wrappers/product/ShopProducts';
import WebService from '../../util/webService';
import constant from '../../util/constant';

const ShopGridStandard = ({ location, defaultStore, currentLanguageCode, categoryID }) => {
    const [layout, setLayout] = useState('grid three-column');
    // const [sortType, setSortType] = useState('');
    // const [sortValue, setSortValue] = useState('');
    // const [filterSortType, setFilterSortType] = useState('');
    // const [filterSortValue, setFilterSortValue] = useState('');
    const [offset, setOffset] = useState(0);
    // const [skip, setSkip] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageLimit, setPageLimit] = useState(12);
    const [productData, setProductData] = useState([]);
    const [totalProduct, setTotalProduct] = useState(0);
    const [productDetails, setProductDetails] = useState('');
    // const [sortedProducts, setSortedProducts] = useState([]);

    // const pageLimit = 15;
    const { pathname } = location;

    const getLayout = (layout) => {
        setLayout(layout)
    }

    // const getSortParams = (sortType, sortValue) => {
    //     setSortType(sortType);
    //     setSortValue(sortValue);
    // }

    // const getFilterSortParams = (sortType, sortValue) => {
    //     setFilterSortType(sortType);
    //     setFilterSortValue(sortValue);
    // }

    useEffect(() => {
        getProductList()
        getCategoryDetails()
        // let sortedProducts = getSortedProducts(products, sortType, sortValue);
        // const filterSortedProducts = getSortedProducts(sortedProducts, filterSortType, filterSortValue);
        // sortedProducts = filterSortedProducts;
        // setSortedProducts(sortedProducts);
        // setProductData(sortedProducts.slice(offset, offset + pageLimit));
    }, [categoryID, offset]);
    const getProductList = async () => {
        let action = constant.ACTION.PRODUCTS + '?store=' + defaultStore + '&lang=' + currentLanguageCode + '&start=' + offset + '&count=' + pageLimit + '&category=' + categoryID;
        try {
            let response = await WebService.get(action);
            if (response) {
                setProductData(response.products);
                setTotalProduct(response.recordsTotal)
            }
        } catch (error) {
        }
    }
    const getCategoryDetails = async () => {
        let action = constant.ACTION.CATEGORY + categoryID + '?store=' + defaultStore;
        try {
            let response = await WebService.get(action);
            if (response) {
                setProductDetails(response)
            }
        } catch (error) {
        }
    }
    return (
        <Fragment>
            <MetaTags>
                <title>{productDetails && productDetails.description.title}</title>
                <meta name="description" content={productDetails && productDetails.description.metaDescription} />
            </MetaTags>

            <BreadcrumbsItem to={process.env.PUBLIC_URL + '/'}>Home</BreadcrumbsItem>
            <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>{productDetails && productDetails.description.name}</BreadcrumbsItem>

            <LayoutOne headerContainerClass="container-fluid"
                headerPaddingClass="header-padding-2"
                headerTop="visible">
                {/* breadcrumb */}
                <Breadcrumb />

                <div className="shop-area pt-95 pb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 order-2 order-lg-1">
                                {/* shop sidebar */}
                                {/* <ShopSidebar products={products} getSortParams={getSortParams} sideSpaceClass="mr-30" /> */}
                                <ShopSidebar products={productData} sideSpaceClass="mr-30" />
                            </div>
                            <div className="col-lg-9 order-1 order-lg-2">
                                {/* shop topbar default */}
                                {/* <ShopTopbar getLayout={getLayout} getFilterSortParams={getFilterSortParams} productCount={products.length} sortedProductCount={productData.length} /> */}
                                <ShopTopbar getLayout={getLayout} productCount={totalProduct} sortedProductCount={productData.length} />

                                {/* shop page content default */}
                                <ShopProducts layout={layout} products={productData} />

                                {/* shop product pagination */}
                                <div className="pro-pagination-style text-center mt-30">
                                    <Paginator
                                        totalRecords={totalProduct}
                                        pageLimit={pageLimit}
                                        pageNeighbours={2}
                                        setOffset={setOffset}
                                        currentPage={currentPage}
                                        setCurrentPage={setCurrentPage}
                                        pageContainerClass="mb-0 mt-0"
                                        pagePrevText="«"
                                        pageNextText="»"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutOne>
        </Fragment>
    )
}

ShopGridStandard.propTypes = {
    location: PropTypes.object,
    products: PropTypes.array
}

const mapStateToProps = state => {

    return {
        currentLanguageCode: state.multilanguage.currentLanguageCode,
        defaultStore: state.merchantData.defaultStore,
        categoryID: state.productData.categoryid
        // products: state.productData.products
    }
}

export default connect(mapStateToProps, null)(ShopGridStandard);