const checkUrl=function(req,res,next)
{
    console.warn("Current From other File Route is "+req.originalUrl);
    next();
}
module.exports=checkUrl;