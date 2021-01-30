module.exports = function Footer() {
    let date = new Date().getFullYear()

return `
    <div class="footer">
        <span>© ${date} Powered by</span>
        <a href="https://begin.com/">Begin</a>
    </div>
    `
}
    
    