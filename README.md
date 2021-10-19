# Parsechat
Simple string msg parser using regex pattern mapping.

# Assumptions
Chat agent name does not include special characters

# How to run
Download the repo and create ".env" file in root with below info.

#PORT
PORT=3005

#ENV
NODE_ENV=dev

1) npm install
2) npm start

# How it works
1) Accept the sring and check for # of lines
2) If multiline, use multiline formatter or else call the single line formatter
3) Construct the output and return as JSON array


# Technologies
  AngularJS simple UI and NodeJS backend,
  SPA
