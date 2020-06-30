API="http://localhost:4741"
URL_PATH="/notes"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "note": {
      "title": "'"${TITLE}"'",
      "body": "'"${BODY}"'",
      "health": "'"${HEALTH}"'",
      "work": "'"${WORK}"'",
      "play": "'"${PLAY}"'",
      "love": "'"${LOVE}"'",
      "place_id": "'"${ID}"'"
    }
  }'
