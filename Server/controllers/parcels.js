import Joi from 'joi';
import parcels from '../models/parcels';

export default class Parcels {
  static allParcels(req, res) {
    res.send({ parcels });
  }

  static create(req, res) {
    const schema = {
      parcelName: Joi.string().required(),
      pickup: Joi.string().required(),
      destination: Joi.string().required(),
      weight: Joi.number().required()
    };
    const output = Joi.validate(req.body, schema);
    if (output.error) {
      res.status(400).send('Invalid input, Please fill all the fields');
      return;
    }

    const newparcel = {
      id: parcels.length + 1,
      parcelName: req.body.parcelName,
      pickup: req.body.pickup,
      destination: req.body.destination,
      weight: req.body.weight
    };

    parcels.push(newparcel);
    res.status(201).json(parcels[parcels.length - 1]);
  }

  static getParcebyId(req, res) {
    const parcel = parcels.find(
      item => item.id === parseInt(req.params.id, 10)
    );
    !parcel
      ? res.status(404).send('The parcel the ID entered is not found')
      : res.json(parcel);
  }

  static canceParcel(req, res) {
    const parcel = parcels.find(
      item => item.id === parseInt(req.params.id, 10)
    );
    if (!parcel) {
      res.status(404).send('The parcel the ID entered is not found');
    }

    const schema = {
      parcelName: Joi.string().required(),
      pickup: Joi.string().required(),
      destination: Joi.string().required(),
      weight: Joi.number().required()
    };
    const output = Joi.validate(req.body, schema);
    if (output.error) {
      res.status(400).send('Invalid input, Please fill all the fields');
      return;
    }
    // parcel.
    res.send(parcel);
  }
}
