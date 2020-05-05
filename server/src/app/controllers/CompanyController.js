import * as Yup from 'yup';
import Company from '../models/Company';
import File from '../models/File';

class CompanyController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const userExists = await Company.findOne({
      where: { name: req.body.name },
    });

    if (userExists) {
      return res.status(400).json({ error: 'Company alredy exists.' });
    }
    const { id, name, company_logo } = await Company.create(req.body);

    return res.json({
      id,
      name,
      company_logo,
    });
  }
}

export default new CompanyController();
