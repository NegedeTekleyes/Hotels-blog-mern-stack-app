# Hotels-blog-mern-stack-app

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## How to run this project:

### For Frontend

Follow the below steps to run the project:

- Firstly clone or unzip the project folder.

* Go to the frontend directory by using the following command `cd frontend`.

- Then run `npm install` commend to install node dependencies.

* Finally, to run the project, use `npm run dev` command.

### For Backend

Follow the below steps to run the project:

- Firstly clone or unzip the project folder.

* Go to the backend directory by using the following command `cd backend`.

- Then run `npm install` commend to install node dependencies.

* create a **.env** file in the backend root directory as the same level where the **package.json** is located and keep the following environment variables there:

```
MONGODB_URL = 'mongodb+srv://helpyourassistant:HIXeuf3vpLAF2iCq@hotel-rooftop-cluster.1ufdyqh.mongodb.net/hotels-rooftop?retryWrites=true&w=majority&appName=hotel-rooftop-cluster'
JWT_SECRET_KEY = "4b74bc201ddfc036db3f2cf8171565a306dffa7caef5074ea9429ddf7532522722e8a36f699945d34e605b34f9a33d89f00084197e3564a8ba6a948e6c2ad1ce"

Note: Please setup mongodb and change the MongoDB url and set your jwt secret key above.
```

- Finally, to run the project, use `npm run start:dev` command.
