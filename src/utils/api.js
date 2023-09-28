import axios from 'axios';

const sugApiUrl = 'https://api.datamuse.com/sug';

export const fetchWordSuggestions = async (term) => {
  try {
    const response = await axios.get(`${sugApiUrl}?s=${term}`);
    return response.data.map((item) => item.word);
  } catch (error) {
    console.error('Error fetching word suggestions:', error);
    return [];
  }
};
