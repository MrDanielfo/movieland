This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

Some essentials commands

```bash
# to get the appropiate linting and format
npm run lint
# to run test once
npm run test
# to run test and listen to any change or update
npm run test:watch
```

## The Movie Database
For reaching the purpose of this application, I used the TMDB with its respective API_KEY AND TOKEN. 
In order to see the data, those previous values are needed. 
Just for this case I did not selected the .env file to be ignored, otherwise, those previous values and the REST API would not work. 

This REST API has some interesting things, for example it has no endpoint to get a single movie by movieId. 
You have to retrieve that information using an endpoint who gives you data by the title of the movie. 
Sometimes there is more than one movie with the same name, but the most recent comes at the beginning of the data.


## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


## Architecture Topic and Scalation of this App

In these situation I would have the advantage that I have my test directory separated, so it would not be a problem to scale to more test cases and directories.
About the components, it would be almost the same situation. Those are separated by directories, so it would be easier to create more components inside new directories
instead to get a general components directory with more than 50 or 100 components files. 
About Routing, Next.js has the advantage that gives you the chance to create routes inside a directory and even nested routes inside those directories. 
So in general terms, the more isolated you can have your files, the easier it would be to make it bigger and scalable. 
