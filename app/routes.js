var express = require('express');
var router = express.Router() // google express Router() later

// router  supports .use .get .post. put. patch .delete

router.get('/home', function(req, res, next) {
    res.send('gob bleuth')
});

router.get('/', function(req, res) {
    res.sendfile('./public/index.html')
})


module.exports = router;