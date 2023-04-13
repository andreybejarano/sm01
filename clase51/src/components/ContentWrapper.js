import React from "react";

import TopBar from "./TopBar";
import ContentRowTop from "./ContentRowTop";
import ContentRowMovies from "./ContentRowMovies";
import Footer from "./Footer";

function ContentWrapper() {
    return (
        <div id="content-wrapper" className="d-flex flex-column">

            {/* <!-- Main Content --> */}
            <div id="content">

                {/* <!-- Topbar --> */}
                <TopBar></TopBar>
                {/* <!-- End of Topbar --> */}
                
                {/* <!-- Content Row Top --> */}
                <ContentRowTop></ContentRowTop>
                {/* <!--End Content Row Top--> */}
                {/* <!-- Content Row Last Movie in Data Base --> */}
                <ContentRowMovies></ContentRowMovies>
            </div>
            {/* <!-- End of MainContent --> */}

            {/* <!-- Footer --> */}
            <Footer></Footer>
            {/* <!-- End of Footer --> */}

        </div>
    );
}

export default ContentWrapper;