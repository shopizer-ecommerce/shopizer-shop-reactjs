import PropTypes from "prop-types";
import React, { Fragment, useState, useEffect } from 'react';
import MetaTags from 'react-meta-tags';
import { useHistory } from "react-router-dom";
import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic';
import { connect } from 'react-redux';
import Layout from '../../layouts/Layout';
import Breadcrumb from '../../wrappers/breadcrumb/Breadcrumb';
import ShopSidebar from '../../wrappers/product/ShopSidebar';
import ShopTopbar from '../../wrappers/product/ShopTopbar';
import ShopProducts from '../../wrappers/product/ShopProducts';
import WebService from '../../util/webService';
import constant from '../../util/constant';
import { setLoader } from "../../redux/actions/loaderActions";
import { setCategoryID } from "../../redux/actions/productActions";
import { multilanguage } from "redux-multilanguage";

const SearchProduct = ({ strings, location, defaultStore, currentLanguageCode, setLoader, searchID, setCategoryID, merchant }) => {
    const [layout, setLayout] = useState('grid three-column');

    const [productData, setProductData] = useState([]);
    const [totalProduct, setTotalProduct] = useState(0);
    const [subCategory, setSubCategory] = useState([]);

    const { pathname } = location;
    const history = useHistory()
    const getLayout = (layout) => {
        setLayout(layout)
    }

    const getCategoryParams = (sortType, sortValue) => {
        // console.log(sortValue)
        setCategoryID(sortValue.id)
        history.push("/category/" + sortValue.description.friendlyUrl)
    }

    useEffect(() => {

        getProductList()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const getProductList = async (e) => {
        setLoader(true)
        let action = constant.ACTION.SEARCH;
        let param = { 'query': searchID }
        try {
            let response = await WebService.post(action, param);
            if (response) {
                // console.log(response)
                // console.log(response.categoryFacets)
                setProductData(response.products);
                setTotalProduct(response.productCount);
                setSubCategory(response.categoryFacets)
            }
            setLoader(false)
        } catch (error) {
            setLoader(false)
        }


    }

    return (
        <Fragment>
            <MetaTags>
                <title>{merchant.name} | {strings["Search"]}</title>
                <meta name="description" content="" />
            </MetaTags>

            <BreadcrumbsItem to={process.env.PUBLIC_URL + '/'}>{strings["Home"]}</BreadcrumbsItem>
            <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>{strings["Search"]}</BreadcrumbsItem>

            <Layout headerContainerClass="container-fluid"
                headerPaddingClass="header-padding-2"
                headerTop="visible">
                {/* breadcrumb */}
                <Breadcrumb />

                <div className="shop-area pt-95 pb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 order-2 order-lg-1">

                                <ShopSidebar string={strings} getCategoryParams={getCategoryParams} uniqueCategories={subCategory} uniqueColors={[]} uniqueSizes={[]} uniqueManufacture={[]} sideSpaceClass="mr-30" />
                            </div>
                            <div className="col-lg-9 order-1 order-lg-2">

                                <ShopTopbar strings={strings} getLayout={getLayout} productCount={totalProduct} offset={1} sortedProductCount={productData.length} />

                                {/* shop page content default */}
                                <ShopProducts strings={strings} layout={layout} products={productData} />


                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </Fragment>
    )
}

SearchProduct.propTypes = {
    location: PropTypes.object,
    products: PropTypes.array
}

const mapStateToProps = (state, ownProps) => {
    const searchID = ownProps.match.params.id;
    return {
        currentLanguageCode: state.multilanguage.currentLanguageCode,
        defaultStore: state.merchantData.defaultStore,
        searchID: searchID,
        merchant: state.merchantData.merchant
    }
}
const mapDispatchToProps = dispatch => {
    return {
        setLoader: (value) => {
            dispatch(setLoader(value));
        },
        setCategoryID: (value) => {
            dispatch(setCategoryID(value));
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(multilanguage(SearchProduct));