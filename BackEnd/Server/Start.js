let app = require("express")();

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
	console.log(`Listening on ${PORT}`);
});

module.exports = app;
