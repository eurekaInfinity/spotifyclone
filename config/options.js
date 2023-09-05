export const optionsConsult = {
    optionSpotify : {
        method: 'GET',
        url: 'https://spotify23.p.rapidapi.com/search/',
        params: {
          q: '<REQUIRED>',
          type: 'multi',
          offset: '0',
          limit: '10',
          numberOfTopResults: '5'
        },
        headers: {
          'X-RapidAPI-Key': '7b4bec0f5fmsha9a55c4950497c2p119941jsnb36c0e019541',
          'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
        }
      },
      optionsMusicApi : {
        method: 'GET',
        url: 'https://musicapi13.p.rapidapi.com/public/search/introspection',
        headers: {
          'X-RapidAPI-Key': '7b4bec0f5fmsha9a55c4950497c2p119941jsnb36c0e019541',
          'X-RapidAPI-Host': 'musicapi13.p.rapidapi.com'
        }
      }, 
      options : {
        method: 'GET',
        url: 'https://moviesdatabase.p.rapidapi.com/actors',
        headers: {
          'X-RapidAPI-Key': '7b4bec0f5fmsha9a55c4950497c2p119941jsnb36c0e019541',
          'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
        }
      }
}