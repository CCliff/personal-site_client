import StoryblokClient from 'storyblok-js-client';

const Storyblok = new StoryblokClient({
  accessToken: 'zbtACEQA8z99SFr6O110Bwtt',
  cache: {
    clear: 'auto',
    type: 'memory',
  },
});

export default Storyblok;
