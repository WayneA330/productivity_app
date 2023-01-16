const dayjs = require("dayjs");
const { knexDb } = require("../../../utils/routes.imports.utils");

const addSpace = async (req, res) => {
  try {
    const { name } = req.body;

    await knexDb(`[PRODUCTIVITY_APP].[dbo].[Spaces]`).insert({
      name,
      is_active: 1,
      created_at: dayjs().toJSON(),
      updated_at: dayjs().toJSON(),
    });

    res.status(200).send({
      message: "Added space successfully!",
      payload: req?.body,
    });
  } catch (err) {
    console.log(err);
    res.status(404).send({
      message: "Error occured when adding space!",
    });
  }
};

module.exports = addSpace;
