import Question from '../models/Question';
import User from '../models/User';
import File from '../models/File';

class QuestionsController {
  async index(req, res) {
    const response = await Question.findAll({
      where: { lecture_code: req.params.id },
      include: [
        {
          model: User,
          as: 'user',
          attributes: ['name', 'job_title', 'job_position', 'avatar_id'],
          include: [
            {
              model: File,
              as: 'avatar',
              required: false,
            },
          ],
        },
      ],
    });

    return res.json(response);
  }

  async store(req, res) {
    const { question, user_id, lecture_code } = req.body;

    const response = await Question.create({
      question,
      lecture_code,
      user_id,
      likes: 0,
      answered: 0,
    });

    return res.json(response);
  }

  async update(req, res) {
    const { id } = req.params;

    const question = await Question.findByPk(id);

    await question.update(req.body);
  }
}

export default new QuestionsController();
