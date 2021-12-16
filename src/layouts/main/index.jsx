import React, {Fragment} from 'react';

import Banner from 'views/banner';
import Interest from 'views/interest';
import Projects from 'views/projects';

const Main = () => {
    return (
        <Fragment>
            <Banner/>
            <Interest/>
            <Projects/>
        </Fragment>
    );
};

export default Main;