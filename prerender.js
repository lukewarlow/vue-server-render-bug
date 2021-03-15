const fs = require('fs');
const path = require('path');

const toAbsolute = (p) => path.resolve(__dirname, p);

const template = fs.readFileSync(toAbsolute('dist/static/index.html'), 'utf-8');
const { render } = require('./dist/server/entry-server.js');

(async () => {
	const url = '/';
	const [appHtml] = await render(url);

	const html = template
		.replace(`<!--app-html-->`, appHtml);

	fs.writeFileSync(toAbsolute(`dist/static/index.html`), html);

	// done, delete ssr manifest
	fs.unlinkSync(toAbsolute('dist/static/ssr-manifest.json'));
})()
