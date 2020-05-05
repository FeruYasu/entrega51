import Event from '../models/Event';

class EventController {
  async store(req, res) {
    const event = await Event.create(req.body);

    return res.json(event);
  }
}

export default new EventController();
