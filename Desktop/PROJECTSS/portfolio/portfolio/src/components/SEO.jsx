import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = "Gopal Dhakal - Full Stack Developer",
  description = "MERN Stack Developer specializing in building exceptional digital experiences"
}) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content="MERN stack, web developer, React developer, Node.js, MongoDB, Express.js, JavaScript" />
      <meta name="author" content="Gopal Dhakal" />
      <meta name="language" content="English" />
      <link rel="canonical" href="https://gopaldhakal.com" />

      

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Gopal Dhakal",
          "url": "https://gopaldhakal.com",
          "sameAs": [
            "https://github.com/gopaldhakal",
            "https://www.linkedin.com/in/gopal-dhakal-060326197"
          ],
          "jobTitle": "Full Stack Developer",
          "knowsAbout": ["MERN Stack", "Web Development", "JavaScript", "React"]
        })}
      </script>
    </Helmet>
  );
};

export default SEO;