
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
import { isCheckValueAndSetParams } from '../../util/helper';

const Content = ({ strings, contentID, setLoader, currentLanguageCode }) => {

    const [contentDetails, setContentDetail] = useState('');
    useEffect(() => {
        console.log(contentID)
        getContent();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [contentID]);

    const getContent = async () => {
        setLoader(true)
        let action = `${constant.ACTION.CONTENT}${constant.ACTION.PAGES}${contentID}${isCheckValueAndSetParams('?lang=', currentLanguageCode)}`;
        try {
            let response = await WebService.get(action);
            if (response) {
                console.log(response)
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
                <title>{contentDetails && contentDetails.description.title}</title>
                <meta
                    name="description"
                    content={contentDetails && contentDetails.description.metaDescription}
                />
            </MetaTags>

            <BreadcrumbsItem to="/">{strings["Home"]}</BreadcrumbsItem>
            <BreadcrumbsItem to="/content">{contentDetails && contentDetails.description.name} </BreadcrumbsItem>

            <Layout headerContainerClass="container-fluid"
                headerPaddingClass="header-padding-2"
                headerTop="visible">
                {/* breadcrumb */}
                <Breadcrumb />
                <div className="cart-main-area pt-90 pb-100">
                    <div className="container">
                        {
                            contentDetails &&
                            <p dangerouslySetInnerHTML={{ __html: contentDetails.description.description }} ></p>
                        }
                    </div>
                </div>
            </Layout>
        </Fragment>
    );
};

const mapStateToProps = (state) => {
    return {
        currentLanguageCode: state.multilanguage.currentLanguageCode,
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
