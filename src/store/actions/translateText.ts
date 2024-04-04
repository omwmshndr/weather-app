import axios from 'axios'

const API_KEY = 'AIzaSyAyuUoQlcWRMfbF4vL2vqapDsqpmSWXnm0'
const targetLanguage = 'uk'

export const translateText = async (text: string) => {
  try {
    const response = await axios.post(
      `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}&q=${encodeURIComponent(text)}&target=${targetLanguage}`,
    )
    return response.data.data.translations[0].translatedText as string
  } catch (error) {
    console.error('Ошибка перевода:', error)
    return text
  }
}