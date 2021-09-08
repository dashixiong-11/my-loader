const commonmark = require('commonmark')

const transform = code => {
	const fileContent = JSON.parse(JSON.stringify(code))
	const reader = new commonmark.Parser()
	const writer = new commonmark.HtmlRenderer()
	const content = writer.render(reader.parse(fileContent.trim()))
	console.log(content);

	return `
	 const content = ${JSON.stringify(content)}
	 export default content
	  `
}

// const transform = code => `
// const div = ${JSON.stringify(code)}
// const fileContent = JSON.parse(JSON.stringify(div))
// const reader = new commonmark.Parser()
// const writer = new commonmark.HtmlRenderer()
// const content = writer.render(reader.parse(fileContent.trim()))
// export default content
// `
module.exports = transform