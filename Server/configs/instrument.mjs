import * as Sentry from "@sentry/node"


Sentry.init({
  dsn: "https://a0e407c39710a5489af5e3345bebd13f@o4511692879101952.ingest.us.sentry.io/4511692894830592",
  dataCollection: {
    // To disable sending user data and HTTP bodies, uncomment the lines below. For more info visit:
    // https://docs.sentry.io/platforms/javascript/guides/node/configuration/options/#dataCollection
    // userInfo: false,
    // httpBodies: [],
  },
});