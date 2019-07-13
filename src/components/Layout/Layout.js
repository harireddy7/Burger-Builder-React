import React from 'react';
import Aux from '../../hoc/AuxWrapper';

const Layout = props => (
    <Aux>
        <div>Toolbar..., Sidebar...., Backdrawer</div>
        <main>
            {props.children}
        </main>
    </Aux>
);

export default Layout