import fetchData from '@/app/utils/fetchData';
import type { NextApiRequest, NextApiResponse } from 'next';

const urls = [
  'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1'
]


export default function handler(req: NextApiRequest,
  res: NextApiResponse) {
  if (req.method === 'GET') {
    // Fetch data or perform some logic here
    // call fetch
    const data = fetchData(urls[0])
    // const result = { data };

    res.status(200).json(data);
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}