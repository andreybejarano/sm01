import React from "react";

import LastMovieInDb from "./LastMovieInDb";
import GenresInDb from "./GenresInDb";

function ContentRowMovies() {
    return (
        <div className="row">
            {/* <!-- Last Movie in DB --> */}
            <LastMovieInDb></LastMovieInDb>
            {/* <!-- End content row last movie in Data Base --> */}
            <GenresInDb></GenresInDb>
            {/* <!-- Genres in DB --> */}

        </div>
    );
}

export default ContentRowMovies;