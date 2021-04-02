import { NextApiRequest, NextApiResponse } from 'next';
import { createApi } from 'unsplash-js';

export default function getUser(req: NextApiRequest, res: NextApiResponse) {
  return new Promise((resolve) => {
    const u = createApi({ accessKey: process.env.UNSPLASH_ACCESS_KEY });

    u.users
      .get({username: process.env.UNSPLASH_USER})
      .then((json) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Cache-Control', 'max-age=180000');
        res.end(JSON.stringify(json.response));
      })
      .catch((error) => {
        res.json(error);
        res.status(405).end();
      });
  });
}
