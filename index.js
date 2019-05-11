const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const PORT = process.env.PORT || 8080

app.use(bodyParser.json())
app.use(cors())

let LOGS = []

app.post(`/gps`, (req, res) => {
	const body = req.body || {}
	const ip =  req.headers['x-forwarded-for'] || req.connection.remoteAddress
	
	res.send(`Received GPS Data - ip -> ${ip} & data body ${JSON.stringify(body)}`)
	console.log(`Received data IP: ${ip} & BODY -> `, body)
	LOGS.push(`Received data IP: ${ip} & BODY: ${JSON.stringify(body)}`)
})

app.get('/logs', (req, res) => {
	const reloadScript = `<script>setTimeout(() => window.location.reload(), 5000)</script>`
	const body = LOGS.slice(0).reverse().join('<br>')
	const html = `
	<!DOCTYPE html>
	<html>
		<head>
		</head>
		<body>
			${body}
			${reloadScript}
		</body>
	</html>
	`
	res.send(html)
})

app.get('/clear-logs', (req, res) => {
	LOGS = []
	res.send('OK')
})

app.listen(PORT, () => console.log(`[Server] Listening on PORT ${PORT}`))