FROM registry.ng.bluemix.net/ibmnode

# TODO(gib): Should this change with the appname?
	ADD . /app

	ENV NODE_ENV production
	ENV PORT <%= config.port %>

	EXPOSE 8080

	WORKDIR "/app"

# TODO(gib): Should we use strong-supervisor, eg:
#   RUN npm install strong-supervisor
#   CMD ./node_modules/.bin/sl-run .
	CMD ["npm", "start"]
