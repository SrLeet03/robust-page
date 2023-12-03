import { Container, Typography, Link } from '@mui/material';

const PrivacyPolicy = () => {
	return (
		<Container sx={{width : '30rem' , textAlign:'center'}}>
		  <Typography variant="h4" component="h1" align="center" mt={3} mb={3}>
			Privacy Policy
		  </Typography>
	
		  <Typography variant="body1" mb={2}>
			<strong>Last updated: 26 Nov, 2023</strong>
		  </Typography>
	
		  <Typography variant="body1">
			<strong>Introduction</strong>
		  </Typography>
		  <Typography variant="body2" mb={2}>
			Robust Software is committed to safeguarding the privacy of our users. This Privacy Policy outlines the types of personal information we collect, how we use it, and the measures we take to ensure the security of your data.
		  </Typography>
	
		  <Typography variant="body1">
			<strong>Information We Collect</strong>
			<li>Client Name , Email</li>
			<li>Required Documents shared as a leads take</li>
			<br/>
		  </Typography>
		
		  <Typography variant="body1">
			<strong>Contact Information</strong>
		  </Typography>
		  <Typography variant="body2" mb={2}>
			If you have any questions or concerns regarding this privacy policy, please contact us at{' '}
			<Link href="mailto:contact@ekinch.com">sarveshr.1299@gmail.com</Link>.
		  </Typography>
	
		  <Typography variant="body1">
			<strong>Changes to This Policy</strong>
		  </Typography>
		  <Typography variant="body2" mb={2}>
			We may update this privacy policy to reflect changes in our practices. Users will be notified of any updates through the app or website.
		  </Typography>
		</Container>
	  );
};

export default PrivacyPolicy;
