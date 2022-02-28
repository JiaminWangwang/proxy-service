var express = require('express');
var router = express.Router();

const rp = require('request-promise');

/* GET users listing. */
router.post('/login', async function(req, res, next) {
  // 密码加密
  const newPassword = req.body.password;

  const data = await rp({
    method: 'POST',
    url: 'http://localhost:3000/users/login',
    body: {
      username: req.body.username,
      password: newPassword,
    },
    json: true,
  });
  console.log(data);
  res.send(data)
});

module.exports = router;
