import Cors from 'cors'

import { getFiles } from 'src/services/data-manager'

const cors = Cors({
  methods: ['GET']
})

function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
}

export default async (req, res) => {
  await runMiddleware(req, res, cors)

  try {
    const files = getFiles()

    if (!files || !files.length) {
      res.status(404).json({ data: [] })
    }

    if (files) {
      res.status(200).json({ data: files })
    }
  } catch (error) {
    console.error('Houston, we have a problem!', error)
  }
};
