const sessions = require('../session.json');
exports.getUserInfo = async (req, res, next) => {
  try{
    const {sessionId} = req.query;
    for(let i = 0 ; i < sessions.length; i++){
      if(sessionId == sessions[i].sessionId) return res.json(sessions[i]);
    }
    return res.status(401).json({message:'Session is not correct.'});
  }catch(e){
    return res.status(401).json({message:'Something went wrong.'})
  }
};
