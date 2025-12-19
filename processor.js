const fs = require('fs');
const FormData = require('form-data');

module.exports = {
  upload: function(req, ctx, ee, next) {
    const form = new FormData();
    form.append('file', fs.createReadStream('sample.pdf'));
    req.body = form;
    req.headers = {...form.getHeaders(), Authorization: req.headers.Authorization};
    next();
  }
};
