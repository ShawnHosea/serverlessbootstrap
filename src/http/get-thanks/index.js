const Layout = require('@architect/views/layout.js')

exports.handler = async function About (req) {

  let body = Layout({ 
    content: 
    `<div class="main">
      <h1>Thanks for signing up!</h1>
      <p>Please <strong>confirm your email address.</strong> It could be in your spam/promotions folder.</p>
      <p>You'll be notified when things start moving.
      </p>
      <p><a target="_blank"
        href="https://twitter.com/intent/tweet?text=Learn%20how%20to%20bootstrap%20a%20serverless%20SaaS%20business%20here:%20https://serverlessbootstrap.com">🔗 Share
        this on Twitter</a></p>
   
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