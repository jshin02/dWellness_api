API="http://localhost:4741"
URL_PATH="/places"

curl "${API}${URL_PATH}${ID}" \
  --include \
  --request GET \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
  }'
