
import React, { useEffect, Fragment, useState } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import WebService from '../../util/webService';
import constant from '../../util/constant';
import { setLoader } from "../../redux/actions/loaderActions";
import Layout from "../../layouts/Layout";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import { connect } from 'react-redux';
import { multilanguage } from "redux-multilanguage";

const Content = ({ strings, contentID, setLoader }) => {

    const [contentDetails, setContentDetail] = useState('');
    useEffect(() => {
        getContent();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getContent = async () => {
        setLoader(true)
        let action = constant.ACTION.CONTENT + constant.ACTION.PAGES + contentID;
        try {
            let response = await WebService.get(action);
            if (response) {
                // console.log(response)
                setContentDetail(response)
            }
            setLoader(false)
        } catch (error) {
            setLoader(false)
        }
    }
    return (
        <Fragment>
            <MetaTags>
                <title>{contentDetails.title}</title>
                <meta
                    name="description"
                    content={contentDetails.metaDetails}
                />
            </MetaTags>

            <BreadcrumbsItem to="/">{strings["Home"]}</BreadcrumbsItem>
            <BreadcrumbsItem to="/content">{contentDetails.name} </BreadcrumbsItem>

            <Layout headerContainerClass="container-fluid"
                headerPaddingClass="header-padding-2"
                headerTop="visible">
                {/* breadcrumb */}
                <Breadcrumb />
                <div className="cart-main-area pt-90 pb-100">
                    <div className="container">
                        <p dangerouslySetInnerHTML={{ __html: contentDetails.pageContent }} ></p>
                    </div>
                </div>
            </Layout>
        </Fragment>
    );
};

const mapStateToProps = (state) => {
    return {
        contentID: state.content.contentId
    };
};
const mapDispatchToProps = dispatch => {

    return {
        setLoader: (value) => {
            dispatch(setLoader(value));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(multilanguage(Content));
