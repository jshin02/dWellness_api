API="http://localhost:4741"
URL_PATH="/places/"

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
