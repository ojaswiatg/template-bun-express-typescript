# BET Stack - Bun Express Typescript

Uses bun as environment and package manager.
<br/>
Set the origin to your repository.

## Features

1. Express equipped with dotenv, cors, and cookie-parser.
2. Typescript is equipped with paths.
3. Develop on steroids with Lodash, Prettier, and ESLint already configured.
4. Typscript enabled.
5. Mongoose installed.
6. Zod validation library installed.
7. Tools like bcrypt, uuid, jose installed.
8. Other helping tools like Node Mailer and Unstorage installed.
9. Preconfigured dockerfile and app.yaml to deploy on Google App Engine - configure as you wish!

## Getting Started

1. Replace the package name in package.json and start building
2. Do a `bun install`
3. Checkout the scripts in package.json.

## Read these before deploying your app to the Google App Engine
You must have a valid Google Cloud Account with a project and a repository setup in Google Artifact Registry

1. [Push your docker image to the Goolge Artifact Registry for deployment](https://cloud.google.com/artifact-registry/docs/docker/pushing-and-pulling)
2. [Deploy your app on Google App Engine](https://cloud.google.com/artifact-registry/docs/integrate-app-engine)

## Tips

1. You can put some commonly used commands like build and release commands on a release.sh file and add a script to run in package.json file.
2. Don't forget to set the origin to your repository!!!

## How to build and deploy your app
This is a guide to deploy your app to the Google App Engine.</br>
Make sure you are logged in to your account in gcloud<br/><br/>
1. Create a docker image
    ```bash
    docker build -t <image_name> .
    ```

2. Test the docker image locally
    ```bash
    docker run -p <host_port>:<port_specified_in_app> run <image_name>
    ```
    Now you can visit http://localhost<host_port> to see the app running.

3. Login to the gcloud cli
    ```bash
    gcloud auth login
    ```

4. Select the correct project id
    ```bash
    gcloud config set project <your_google_cloud_project_id>
    ```

5. Authenticate to your repo
    ```bash
    gcloud auth configure-docker <region_name>-docker.pkg.dev
    ```

6. Tag the docker image
    ```bash
    docker tag <image_name> <region_name>-docker.pkg.dev/<project_id>/<repository_name>/<image_name>:<tag>
    ```

7. Push the docker image to the Google Artifact Registry
    ```bash
    docker push <region_name>-docker.pkg.dev/<project_id>/<repository_name>/<image_name>:<tag>
    ```

8. Deploy the image to the Google App Engine - read the instructions carefully and answer the prompts asked
    ```bash
    gcloud app deploy --image-url=<region_name>-docker.pkg.dev/<project_id>/<repository_name>/<image_name>:<tag>
    ```

9. Browse your app
    ```bash
    gcloud app browse
    ```

#### <span style="color: red">Warning! Don't forget to stop the locally running docker container(s)</span>
Follow the steps below:
1. List all the running containers
    ```bash
    docker ps
    ```
2. Stop the container
    ```bash
    docker stop <container_id>
    ```
3. Wait and check again if the container stopped
    ```bash
    docker ps
    ```
5. If the container is unresponsive kill it
   ```bash
   docker kill <container_id>
   ```

### Happy Building!
