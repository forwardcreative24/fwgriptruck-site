// One address for search engines: anything that isn't www.fwgriptruck.com
// (the bare domain, fortwaynegriptruck.com) gets a 301 to the same path there.
// Preview links (*.workers.dev) and local testing are left alone.
const HOME = 'www.fwgriptruck.com';

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const host = url.hostname;
    if (host !== HOME && !host.endsWith('.workers.dev') && host !== 'localhost' && host !== '127.0.0.1') {
      return Response.redirect(`https://${HOME}${url.pathname}${url.search}`, 301);
    }
    return env.ASSETS.fetch(request);
  },
};
