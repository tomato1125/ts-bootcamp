export interface HotelBasicInfo{
  access: string
  address1: string
  address2: string
  dpPlanListUrl: string
  faxNo: string
  hotelImageUrl: string
  hotelInformationUrl: string
  hotelKanaName: null
  hotelMapImageUrl: string
  hotelMinCharge: 2912
  hotelName: string
  hotelNo: 175329
  hotelSpecial: string
  hotelThumbnailUrl: string
  latitude: 123580.64
  longitude: 482638.2
  nearestStation: string
  parkingInformation: string
  planListUrl: string
  postalCode: string
  reviewAverage: null
  reviewCount: 1
  reviewUrl: string
  roomImageUrl: null
  roomThumbnailUrl: null
  telephoneNo: string
  userReview: null
}

export interface HotelRatingInfo{
  bathAverage: null
  equipmentAverage: null
  locationAverage: null
  mealAverage: null
  roomAverage: null
  serviceAverage: null
}

export type Hotel = [{hotelBasicInfo: HotelBasicInfo}, {hotelRatingInfo: HotelRatingInfo}]
export type Hotels = Array<Hotel>
