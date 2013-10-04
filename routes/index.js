
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' },function(err,code){
  	if(!err){
  		console.log(code);
  		res.write(code);
  		res.end();
  	}
  	

  });
};