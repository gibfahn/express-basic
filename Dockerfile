FROM registry.ng.bluemix.net/ibmnode

# TODO(gib): should this change with the appname?
	ADD . /app

	ENV NODE_ENV production
	ENV PORT <%= port %>

	EXPOSE <%= port %>

	WORKDIR "/app"

	CMD ["npm", "start"]
