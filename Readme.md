Steps to start development server

- Run `docker-compose up -d` to start the Database and related services.
- To migrate the database and generate client library run - `npx prisma migrate dev`
- Add Symlinks to clients libraryies

  ```shell
    mkdir -p  ./services/cdac-send-svc/prisma/generated/client
    mkdir -p  ./services/cdac-track-svc/prisma/generated/client
    mkdir -p  ./api/prisma/generated/client

    cd ./services/cdac-send-svc/prisma/generated/client
    ln -s ../../../../../db/client/* .

    cd ../../../../../services/cdac-track-svc/prisma/generated/client
    ln -s ../../../../../db/client/* .

    cd ../../../../../api/prisma/generated/client
    ln -s ../../../../db/client/* .
  ```

- `yarn start:dev` on all the sub folders (`api`, `services/cdac-send-svc`, `services/cdac-track-svc`).

Usability

- This project is under heavy development and APIs can change without notice. Documentation can also be out of date.
