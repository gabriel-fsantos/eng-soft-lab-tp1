import { success, notFound } from '../../services/response/'
import { product } from '.'

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  product.count(query)
    .then(count => product.find(query, select, cursor)
      .then(districts => ({
        rows: districts.map((product) => product),
        count
      }))
    )
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  product.findById(params.id)
    .then(notFound(res))
    .then((user) => user)
    .then(success(res))
    .catch(next)

export const showMe = ({ user }, res) =>
  res.json(user.view(true))

export const create = ({ bodymen: { body } }, res, next) =>
  product.create(body)
    .then((product) => product)
    .then(success(res, 201))
    .catch((err) => {
      /* istanbul ignore else */
      if (err.name === 'MongoError' && err.code === 11000) {
        res.status(409).json({
          valid: false,
          param: 'email',
          message: 'email already registered'
        })
      } else {
        next(err)
      }
    })

export const update = ({ bodymen: { body }, params, user }, res, next) =>
  product.findById(params.id)
    .then(notFound(res))
    .then((result) => {
      return result
    })
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  product.findById(params.id)
    .then(notFound(res))
    .then((user) => user ? user.remove() : null)
    .then(success(res, 204))
    .catch(next)
