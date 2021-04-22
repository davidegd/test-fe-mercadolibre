const Joi = require("joi");
const Services = require("./itemsServices");

exports.checkStatus = function (req, res, next) {
  res.status(200).send({ message: "API working properly" });
};

exports.GetItems = function (req, res, next) {
  const {
    query: { offset = 0, limit = 10, q = "" },
  } = req;

  Services.GetItems({
    offset,
    limit,
    q,
  })
    .then((response) => {
      res.status(response.status).send(response.data);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send(error);
    });
};

exports.GetItemDetail = function (req, res, next) {
  const { params } = req;
  const { id } = params;

  const requiredSchema = Joi.object().keys({
    id: Joi.string().required(),
  });

  const schemaValidation = requiredSchema.validate(params);
  if (schemaValidation.error) {
    return res.status(400).json({ error: schemaValidation.error });
  }

  Services.GetItemDetail(id)
    .then((response) => {
      res.status(response.status).send(response.data);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send(error);
    });
};
