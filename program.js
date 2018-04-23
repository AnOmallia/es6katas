// module.exports = (str, size = str.length) =>{
// 	return str + "!".repeat(size)
// }






function html(arg1, ...arg2) {
    var result = arg1[0];
    for (var i = 0; i < arg2.length; ++i) {
        result += escape(arg2[i]) + arg1[i + 1];
    }

    return result;
}

function escape(s) {
    return s.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/'/g, "&apos;")
            .replace(/"/g, "&quot;");
}
console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);