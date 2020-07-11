# dWellness API: Documentation to handle CRUD requests

This documentation provides details and instructions for working with the dWellness API.

## Important Links

- [Client Repo](https://github.com/jshin02/dWellness)
- [Deployed API](https://git.heroku.com/damp-shore-57998.git)
- [Deployed Client](https://jshin02.github.io/dWellness/)

## API

Use this as the basis for your own API documentation. Add a new third-level
heading for your custom entities, and follow the pattern provided for the
built-in user authentication documentation.

Scripts are included in [`curl-scripts`](curl-scripts) to test built-in actions.
Add your own scripts to test your custom API.

### Technologies Used

- express API
- MongoDB
- Mongoose
- Javascript
- Passport

### Authentication

| Verb   | URI Pattern            | Controller#Action |
|--------|------------------------|-------------------|
| POST   | `/sign-up`             | `users#signup`    |
| POST   | `/sign-in`             | `users#signin`    |
| PATCH  | `/change-password/` | `users#changepw`  |
| DELETE | `/sign-out/`        | `users#signout`   |

#### POST /sign-up

Request:

```sh
curl --include --request POST http://localhost:4741/sign-up \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "an@example.email",
      "password": "an example password",
      "password_confirmation": "an example password"
    }
  }'
```

```sh
curl-scripts/sign-up.sh
```

Response:

```md
HTTP/1.1 201 Created
Content-Type: application/json; charset=utf-8

{
  "user": {
    "id": 1,
    "email": "an@example.email"
  }
}
```

#### POST /sign-in

Request:

```sh
curl --include --request POST http://localhost:4741/sign-in \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "an@example.email",
      "password": "an example password"
    }
  }'
```

```sh
curl-scripts/sign-in.sh
```

Response:

```md
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
  "user": {
    "id": 1,
    "email": "an@example.email",
    "token": "33ad6372f795694b333ec5f329ebeaaa"
  }
}
```

#### PATCH /change-password/

Request:

```sh
curl --include --request PATCH http://localhost:4741/change-password/ \
  --header "Authorization: Token token=$TOKEN" \
  --header "Content-Type: application/json" \
  --data '{
    "passwords": {
      "old": "an example password",
      "new": "super sekrit"
    }
  }'
```

```sh
TOKEN=33ad6372f795694b333ec5f329ebeaaa curl-scripts/change-password.sh
```

Response:

```md
HTTP/1.1 204 No Content
```

#### DELETE /sign-out/

Request:

```sh
curl --include --request DELETE http://localhost:4741/sign-out/ \
  --header "Authorization: Token token=$TOKEN"
```

```sh
TOKEN=33ad6372f795694b333ec5f329ebeaaa curl-scripts/sign-out.sh
```

Response:

```md
HTTP/1.1 204 No Content
```
### Places
| Verb   | URI Pattern            | Controller#Action |
|--------|------------------------|-------------------|
| POST   | `/places`              | `places#create`   |
| GET    | `/places:id`           | `places#show`     |
| PATCH  | `/places/:id`          | `places#update`   |
| DELETE | `/places/:id`          | `places#delete`   |

#### POST /places

Request:

```sh
curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "place": {
      "title": "'"${TITLE}"'",
      "address": "'"${ADDRESS}"'",
      "city": "'"${CITY}"'",
      "country": "'"${COUNTRY}"'",
      "owner": "'"${OWNER_ID}"'"
    }
  }'
```

```sh
ID="si513840fkjblaiwj1234" TOKEN=33ad6372f795694b333ec5f329ebeaaa curl-scripts/places/create.sh
```

Response:

```md
HTTP/1.1 201 Created
Content-Type: application/json; charset=utf-8

{
  "place": {
    "title": example_title,
    "address": example_address,
    "city": example_city,
    "country": example_country,
    "owner": owner_id
  }
}
```

#### GET /places/id

Request:

```sh
curl "${API}${URL_PATH}${ID}" \
  --include \
  --request GET \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
  }'

```

```sh
ID="si513840fkjblaiwj1234" TOKEN=33ad6372f795694b333ec5f329ebeaaa curl-scripts/places/show.sh
```

Response:

```md
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
  "place": {
    "title": example_title,
    "address": example_address,
    "city": example_city,
    "country": example_country,
    "owner": owner_id
  }
}
```

#### PATCH /update-place/

Request:

```sh
curl "${API}${URL_PATH}${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "place":{
      "title": "'"${TITLE}"'",
      "address": "'"${ADDRESS}"'",
      "city": "'"${CITY}"'",
      "country": "'"${COUNTRY}"'",
      "owner": "'"${OWNER_ID}"'"
    }
  }'
```

```sh
ID="si513840fkjblaiwj1234" TOKEN=33ad6372f795694b333ec5f329ebeaaa curl-scripts/change-password.sh
```

Response:

```md
HTTP/1.1 204 No Content
```

#### DELETE /delete/

Request:

```sh
curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request DELETE \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
  }'
```

```sh
ID="si513840fkjblaiwj1234" TOKEN=33ad6372f795694b333ec5f329ebeaaa curl-scripts/sign-out.sh
```

Response:

```md
HTTP/1.1 204 No Content
```
