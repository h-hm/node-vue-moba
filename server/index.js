var express = require('express')
var app = express()
app.use(express.json())

app.use(require('cors')())

require('./routes/admin/index.js')(app)
require('./plugins/db.js')(app)

app.listen(3000, () => {

})