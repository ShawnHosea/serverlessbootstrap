const arc = require('@architect/functions')


module.exports = function Header(props) {
    
    let logo = arc.static('logo.png')
   
return `
    <div class='Header'>
        <div class='HeaderGroup'>
            <a href="/"><img height='30px' alt='logo' src="${logo}"></a>
        </div>
    </div>
    `;
}
    