const Footer = require('./footer')
const Header = require('./header')
const Main = require('./main')
const arc = require('@architect/functions')

module.exports = function Layout (props) {

return `
<!DOCTYPE html>
<html lang="en">
<head>
<link rel="apple-touch-icon-precomposed" sizes="57x57" href="./favicon/apple-touch-icon-57x57.png" />
  <link rel="apple-touch-icon-precomposed" sizes="114x114" href="./favicon/apple-touch-icon-114x114.png" />
  <link rel="apple-touch-icon-precomposed" sizes="72x72" href="./favicon/apple-touch-icon-72x72.png" />
  <link rel="apple-touch-icon-precomposed" sizes="144x144" href="./favicon/apple-touch-icon-144x144.png" />
  <link rel="apple-touch-icon-precomposed" sizes="60x60" href="./favicon/apple-touch-icon-60x60.png" />
  <link rel="apple-touch-icon-precomposed" sizes="120x120" href="./favicon/apple-touch-icon-120x120.png" />
  <link rel="apple-touch-icon-precomposed" sizes="76x76" href="./favicon/apple-touch-icon-76x76.png" />
  <link rel="apple-touch-icon-precomposed" sizes="152x152" href="./favicon/apple-touch-icon-152x152.png" />
  <link rel="icon" type="image/png" href="./favicon/favicon-196x196.png" sizes="196x196" />
  <link rel="icon" type="image/png" href="./favicon/favicon-96x96.png" sizes="96x96" />
  <link rel="icon" type="image/png" href="./favicon/favicon-32x32.png" sizes="32x32" />
  <link rel="icon" type="image/png" href="./favicon/favicon-16x16.png" sizes="16x16" />
  <link rel="icon" type="image/png" href="./favicon/favicon-128.png" sizes="128x128" />
  <meta name="application-name" content="&nbsp;" />
  <meta name="msapplication-TileColor" content="#FFFFFF" />
  <meta name="msapplication-TileImage" content="mstile-144x144.png" />
  <meta name="msapplication-square70x70logo" content="mstile-70x70.png" />
  <meta name="msapplication-square150x150logo" content="mstile-150x150.png" />
  <meta name="msapplication-wide310x150logo" content="mstile-310x150.png" />
  <meta name="msapplication-square310x310logo" content="mstile-310x310.png" />

<!-- COMMON TAGS -->
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, minimum-scale=1, initial-scale=1">
<title>ServerlessBootstrap</title>

<!-- Search Engine -->
<meta name="description" content="Learn how to bootstrap a serverless SaaS business">
<meta name="image" content="https://static-p26ue2-staging.begin.app/blink-l4i/meta.png">

<!-- Schema.org for Google -->
<meta itemprop="name" content="ServerlessBootstrap™">
<meta itemprop="description" content="Learn how to bootstrap a serverless SaaS business">
<meta itemprop="image" content="https://static-p26ue2-staging.begin.app/blink-l4i/meta.png">

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="ServerlessBootstrap">
<meta name="twitter:description" content="Learn how to bootstrap a serverless SaaS business">
<meta name="twitter:image:src" content="https://static-p26ue2-staging.begin.app/blink-l4i/meta.png">

<!-- Open Graph general (Facebook, Pinterest & Google+) -->
<meta name="og:title" content="ServerlessBootstrap">
<meta name="og:description" content="Learn how to bootstrap a serverless SaaS business">
<meta name="og:image" content="https://static-p26ue2-staging.begin.app/blink-l4i/meta.png">
<meta name="og:url" content="https://serverlessbootstrap.com">
<meta name="og:site_name" content="ServerlessBootstrap">
<meta name="og:type" content="website">

<!-- Styles -->
<link rel="stylesheet" type="text/css" href="${arc.static('/styles/styles.css')}">
<link rel="stylesheet" type="text/css" href="${arc.static('/styles/custom.css')}">
<style>
@import url('https://fonts.googleapis.com/css2?family=Eczar:wght@800&family=Work+Sans:wght@300;400;500&display=swap');
</style>
</head>
<body>
    <div class="wrapper">
        ${Header(props)}
        ${Main(props)}
        ${Footer(props)} 
    </div>
</body>
</html>
`;
}

