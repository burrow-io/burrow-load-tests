Step 1.) Make sure to add "" around the env values
```
npm install
cp .env.example .env
```

Step 2.) To test users logging in and requesting documents 
```
npm run management
```

Step 3.) To test users requesting chunk/doc counts from aurora via query-api
```
npm run query
```

Step 4.) To test users logging in and uploading documents 
```
npm run ingestion
```
