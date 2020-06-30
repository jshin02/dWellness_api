API="http://localhost:4741"

curl "${API}/places/${PLACE_ID}/notes/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --data '{
    "note": {
      "love": "'"${LOVE}"'"
    }
  }'
