## run server
1. `npm install`
2. `.env` file with your `DATABASE_URL`
3. `npx prisma migrate dev`
4. `npx prisma db seed`
5. `npm run dev`

## test routes
Use Insomnia

## Routes

### GET /userlanguages
all users

### GET /userlanguages/:language
all users who speak a specific language.
Example: `GET /userlanguages/English`

### POST /userlanguages
new user.
Body:
```json
{
  "name": "John",
  "email": "john@mail.com",
  "languages": ["English", "Spanish"],
  "age": 25
}
```

### PUT /userlanguages
Updates Alice's languages.

### DELETE /userlanguages
Deletes all users under 18 years old and  how many were deleted.