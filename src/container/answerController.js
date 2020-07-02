const Answers = require('../../models/aboutUs/answer')
const Question = require('../../models/aboutUs/question')
const User = require('../../models/user')

class AnswersController{
  
  static async create(req, res, next){
    try{
      const { answer } = req.body
      const { questionId, categoryId } = req.params
      const userId = req.user.id
      const dataQuestion = await Question.findById(questionId)
      const cekDataAnswer = await Answers.findOne({ questionId })
      
      if(cekDataAnswer){
        const updateData = {}
        updateData[dataQuestion.tag] = answer
        
        const gantiAnswer = await Answers.findByIdAndUpdate(cekDataAnswer._id, { answer })
        const dataUserUpdate = await User.findByIdAndUpdate( userId, updateData)

        res.status(200).json({messages: 'Jawaban Anda Telah Diganti'})
      } else {
        const dataAnswer  = await Answers.create({ answer, questionId, userId, categoryId })
        const update = {}
        update[dataQuestion.tag] = dataAnswer.answer

        const dataUser = await User.findByIdAndUpdate(userId, update )
        res.status(201).json({ messages: 'Answer was Choice' })
      }
    }
    catch(err){
      next(err)
    }
  }

  static async findAnswerQuestion(req, res, next){
    try{
      const userId = req.user.id
      const { categoryId } = req.params
      let dataQuestion = await Question.find({ categoryId })
      let dataAnswer = await Answers.find({ categoryId, userId }).populate('questionId')
      
      dataQuestion.forEach((el, i) => {
        dataAnswer.forEach((element,j) => {
          if(dataQuestion[i]._id.toString() === dataAnswer[j].questionId._id.toString()){
            dataQuestion[i]['answer'] = dataAnswer[j].answer
            dataQuestion[i]['answerId'] = dataAnswer[j]._id
          }
        });
      });
      res.status(200).json( dataQuestion )
    }
    catch(err){
      next(err)
    }
  }

  static async findOne(req, res, next){
    try{
      const { id } = req.params
      const listAnswers = await Answers.findById( id )
      res.status(200).json( listAnswers )
    }
    catch(err){
      next(err)
    }
  }

  // static async update(req, res, next){
  //   try{
  //     const { id } = req.params
  //     const { answer } = req.body
  //     const userId = req.user.id
  //     const dataAnswer = await (await Answers.findById(id)).populate('QuestionId')
  //     // const data = await Answers.findByIdAndUpdate(id, { answer })
  //     let user = await User.findById(userId)
      

  //     res.status(200).json( {messages: 'List Answers Updated'})
  //   }
  //   catch(err){
  //     next(err)
  //   }
  // }

  static async delete(req, res, next){
    try{
      const { id } = req.params
      const data = await Answers.findByIdAndRemove(id)
      res.status(200).json({ messages: 'List Answers Deleted'})
    }
    catch(err){
      next(err)
    }
  }
}

module.exports = AnswersController