var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var fileSchema = new Schema({

  fileId: { type: String, Required:  'File ID cannot be left blank.' },
  
  binary: { type: Buffer, }

});

module.exports = mongoose.model('File', fileSchema);