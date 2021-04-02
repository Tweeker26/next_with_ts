import { NextApiRequest, NextApiResponse } from 'next';
import { createApi } from 'unsplash-js';

export default function getCollection(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { id },
  } = req;

  return new Promise((resolve) => {
    const u = createApi({ accessKey: process.env.UNSPLASH_ACCESS_KEY });

    u.collections
      .getCollection(parseInt(id.toString()))
      .then((json) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Cache-Control', 'max-age=180000');
        res.end(JSON.stringify([json]));
      })
      .catch((error) => {
        res.json(error);
        res.status(405).end();
      });
  });
}
