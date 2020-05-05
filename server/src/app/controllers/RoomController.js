import * as Yup from 'yup';
import Room from '../models/Room';
import File from '../models/File';

class RoomController {
  async index(req, res) {
    const room = await Room.findAll({
      include: [
        {
          model: File,
          as: 'logo',
        },
      ],
    });

    return res.json(room);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      description: Yup.string().required(),
      type: Yup.string().required(),
      logo_id: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const room = await Room.create(req.body);

    return res.json(room);
  }

  async update(req, res) {
    const room = await Room.create(req.body);

    return res.json(room);
  }
}

export default new RoomController();
