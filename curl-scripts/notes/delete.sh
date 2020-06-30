API="http://localhost:4741"

curl "${API}/places/${PLACE_ID}/notes/${ID}" \
  --include \
  --request DELETE \
  --header "Content-Type: application/json" \
  --data '{
  }'
