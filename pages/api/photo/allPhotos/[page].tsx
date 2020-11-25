import { NextApiRequest, NextApiResponse } from 'next';
import Unsplash, { toJson } from 'unsplash-js';

export default function getAllPhotos(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { page },
  } = req;

  return new Promise((resolve) => {
    const u = new Unsplash({ accessKey: process.env.UNSPLASH_ACCESS_KEY });

    u.photos
      .listPhotos(parseInt(page.toString()), 20, 'latest')
      .then(toJson)
      .then((json: string) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Cache-Control', 'max-age=180000');
        res.end(JSON.stringify(json));
        resolve();
      })
      .catch((error) => {
        res.json(error);
        res.status(405).end();
        resolve();
      });
  });
}
