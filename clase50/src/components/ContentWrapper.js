import React from "react";

import TopBar from "./TopBar";
import ContentRowTop from "./ContentRowTop";
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
            </div>
            {/* <!-- End of MainContent --> */}

            {/* <!-- Footer --> */}
            <Footer></Footer>
            {/* <!-- End of Footer --> */}

        </div>
    );
}

export default ContentWrapper;