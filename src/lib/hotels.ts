import axios from 'axios'
import {APP_ID, BASE_URL} from 'rakuten/config'
// import {Hotels} from 'types/hotels';

export const searchHotels = async (keyword: string): Promise<void> => {
  try {
    const res = await axios.get(BASE_URL + '&applicationId=' + APP_ID + '&keyword=' + keyword)
    console.log(res.data.hotels)
  } catch (e) {
    console.error(e)
  }
}