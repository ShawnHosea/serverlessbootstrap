const Layout = require('@architect/views/layout.js')
const arc = require('@architect/functions')


exports.handler = async function Index (req) {

  let avi = arc.static('avi.jpg')

  let body = Layout({ 
    content: 
    `<div class="main">
      <h1>ServerlessBootstrap</h1>
      <div class="subHeading">
        <a href="https://twitter.com/SHAWNHOSEA"><img height='30px' alt='logo' src="${avi}"></a>
        <h3>Watch me bootstrap a serverless SaaS business from $0 to $10k per month.</h3>
      </div>
      <p>Serverless architecture empowers the solo developer to <strong>build & iterate</strong> with immense <strong>speed & scalability</strong> while keeping overhead costs low.</p>
      <ul>
        <li>I already began working on the idea.</li>
        <li>I will be using Begin.com to do this.</li>
        <li>I'll email you with updates only once or twice a month.</li>
      </ul>
      <div className="group">
      <form method="post" action="https://sendfox.com/form/3l6k00/3ok6lo" class="sendfox-form" id="3ok6lo" data-async="true" data-recaptcha="true">
      <p><input type="text" placeholder="First Name" name="first_name" class="formInput" required /></p>
      <p><input type="text" placeholder="Last Name" name="last_name" class="formInput" required /></p>
      <p><input type="email" placeholder="Email" name="email" class="formInput" required /></p>
      <!-- no botz please -->
      <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="a_password" tabindex="-1" value="" autocomplete="off" /></div>
      <p class="button"><button class="btn" type="submit">Watch me build!</button></p>
      </form>
    </div>
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