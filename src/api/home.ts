import axiosJson from '../utils/axiosJson'


export const getAllHcData = () => axiosJson.post('SixPromotionWar/promotion/hcDiseasesClassificationEntity/getAllHcData')