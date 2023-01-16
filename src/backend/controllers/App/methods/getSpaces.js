const { knexDb } = require("../../../utils/routes.imports.utils");

const getSpaces = async (req, res) => {
  try {
    const response = await knexDb.raw(
      "SELECT space_id, name FROM [PRODUCTIVITY_APP].[dbo].[Spaces]"
    );

    res.status(200).send({
      message: "Got spaces successfully!",
      payload: response,
    });
  } catch (err) {
    res.status(404).send({
      message: "Error occured when getting spaces!",
      payload: err,
    });
  }
};

module.exports = getSpaces;
