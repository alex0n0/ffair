import React from 'react';
import BasicHeader from '../../components/BasicHeader';
import BasicFooter from '../../components/BasicFooter';

export default function ErrorPage(props) {
const handleClickBackToHome = () => {
        props.history.goBack();
    }
    return (
        <>
            <div className="ui--layout overflow-c">
                <BasicHeader></BasicHeader>
                <main className="page-c pt-5 pb-5">
                    <div className="container mb-5">
                        <button className="button--transparent mr-auto mb-5 px-0" onClick={handleClickBackToHome} style={{ textDecoration: "none", color: "black" }}>&#8592; Back to Home</button>
                        <p className="text-center">404 Page Not Found</p>
                        <h3 className="text-center">The page you are looking for does not exist</h3>
                    </div>
                </main>
                <BasicFooter></BasicFooter>
            </div>
        </>
    );
}