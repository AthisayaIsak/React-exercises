import React from 'react';
import { Typography } from '@mui/material';

const Footer = () => {
  return (
    <footer style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f5f5f5', marginTop: '20px' }}>
      <Typography variant="body2" color="textSecondary">
        © 2024 eBook Store. All rights reserved.
      </Typography>
    </footer>
  );
};

export default Footer;
