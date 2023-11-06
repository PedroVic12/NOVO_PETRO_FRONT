// RowWidget.js
import React from 'react';

import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/icons-material/Menu'


const RowWidget = ({ children }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            {children}
        </div>
    );
}

export { RowWidget };



const ColumnWidget = ({ children }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}>
            {children}
        </div>
    );
}

export default ColumnWidget;
