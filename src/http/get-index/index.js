const Layout = require('@architect/views/layout.js')
const arc = require('@architect/functions')


exports.handler = async function Index (req) {

  // let heroimg = arc.static('heroimg.png')

  let body = Layout({ 
    content: 
    `<div class="main">
      <h1>ServerlessBootstrap</h1>
      <h3>Watch as I bootstrap a serverless SaaS business from $0 to $10k per month.</h3>
      <p>Serverless architecture empowers the solo developer to build & interate with immense speed & scalability while keeping costs low.</p>

      <form method="post" action="https://sendfox.com/form/3l6k00/3ok6lo" class="sendfox-form" id="3ok6lo" data-async="true" data-recaptcha="true">
      <p><input type="text" placeholder="First Name" name="first_name" required /></p>
      <p><input type="text" placeholder="Last Name" name="last_name" required /></p>
      <p><input type="email" placeholder="Email" name="email" required /></p>
      <!-- no botz please -->
      <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="a_password" tabindex="-1" value="" autocomplete="off" /></div>
      <p><button type="submit">Watch me build!</button></p>
      </form>
      <script src="https://sendfox.com/js/form.js"></script>
    </div>
    ` 
  })

  
  return {
    statusCode: 200,
    headers: {
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
      'content-type': 'text/html; charset=utf8'
    },
    body
    
  }
}