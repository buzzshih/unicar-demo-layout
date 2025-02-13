// Mock data for demonstration
export const user = {
  phone: "0912345678",
  name: "王大明",
  line_id: "U33789de88d410b87748afe7425a9475b",
  email: "test@example.com", // 空值
  birthday: "", // 空值
  gender: 0, // 已設定為女性
  role_code_ids: [1, 2, 3, 4, 5, 6]
};

export type CarType = {
  id: number;
  license_number: string;
  car_brand_code: string;
  car_model_code: string;
  manufactured_at: string;
  car_code: string;
  equipment: string | null;
  equity_steps: number;
  equity_steps_name: string;
  dividend_amount: number;
  image_url: string | null;
  image_url_ary: string[] | null;
  price_new: number | null;
  price_bank: number | null;
  price_sale: number | null;
  price_sold: number | null;
  currency: string;
  is_new_car: number;
  is_new_name: string;
  roi?: number;
};

export type CarServiceLogType = {
  id: number;
  car_service_log_id: number;
  user_id: number;
  mobile_number: string;
  user_name: string;
  car_id: number;
  car_code: string;
  car_brand_code: string;
  car_model_code: string;
  license_number: string;
  bought_at: string | null;
  car_store_id: number;
  store_name: string;
  serviced_at: string;
  image_url: string | null;
  dealer_id: number;
  dealer_mobile: string;
  dealer_name: string;
  car_status_id: number;
  status_name: string;
  service_amount: number;
  service_content: string;
};

export const roleCodes = [
  { id: 0, key: "", label: "全部角色", color: "info" },
  { id: 1, key: "car_beauty", label: "美容會員", color: "info" },
  { id: 2, key: "car_maintenance", label: "保養會員", color: "info" },
  { id: 3, key: "car_owner", label: "車主", color: "success" },
  { id: 4, key: "car_shareholder", label: "股東", color: "warning" },
  { id: 5, key: "car_dealer", label: "經銷商", color: "warning" },
  { id: 6, key: "car_manager", label: "經理", color: "warning" },
  { id: 7, key: "car_general_manager", label: "總經理", color: "warning" }
];

export const carStatuses = [
  { id: 14, label: "回廠保養" },
  { id: 15, label: "回廠美容" }
];
// Mock commission data
export const commissionData = [
  { date: "2024/03", amount: 150000 },
  { date: "2024/02", amount: 180000 },
  { date: "2024/01", amount: 120000 }
];

// Mock cars data
export const cars: CarType[] = [
  {
    id: 7,
    license_number: "SCH-0007",
    car_brand_code: "Benz",
    car_model_code: "GLC 300 SUV",
    manufactured_at: "2019",
    car_code: "20230813-5",
    equipment:
      "免鑰匙啟動、摸門開關、全景天窗、電動尾門、盲點偵測\n\n智慧頭燈、倒車影像、記憶座椅、恆溫空調、定速巡航\n\nABS、SRS...",
    equity_steps: 1,
    equity_steps_name: "驗資中",
    dividend_amount: 20577,
    image_url: null,
    image_url_ary: [],
    price_new: null,
    price_bank: null,
    price_sale: null,
    price_sold: null,
    currency: "NTD",
    is_new_car: 0,
    is_new_name: "中古車"
  },
  {
    id: 38,
    license_number: "Test-1234",
    car_brand_code: "BMW",
    car_model_code: "440i M版 5AU",
    manufactured_at: "2020",
    car_code: "20250130-01",
    equipment: "2.5L 油電混合\n\n自動跟車",
    equity_steps: 1,
    equity_steps_name: "驗資中",
    dividend_amount: 15032,
    image_url: null,
    image_url_ary: [],
    price_new: null,
    price_bank: null,
    price_sale: null,
    price_sold: null,
    currency: "NTD",
    is_new_car: 0,
    is_new_name: "中古車"
  }
];

export const CarInventory: CarType[] = [
  {
    id: 38,
    license_number: "Test-1234",
    car_brand_code: "BMW",
    car_model_code: "440i M版 5AU",
    manufactured_at: "2020",
    car_code: "20250130-01",
    equipment: "2.5L 油電混合\n\n自動跟車",
    equity_steps: 1,
    equity_steps_name: "驗資中",
    image_url: "brand/cars/Y35yc5tuuMvSkRZG930S4mD13yxY9hfxw7sIcd0I.jpg",
    image_url_ary: [],
    price_new: 120,
    price_bank: null,
    price_sale: null,
    price_sold: null,
    currency: "NTD",
    is_new_car: 0,
    is_new_name: "中古車",
    dividend_amount: 15032,
    roi: 7.5
  },
  {
    id: 37,
    car_brand_code: "Benz",
    car_model_code: "GLC 300 SUV",
    car_code: "20250124-12",
    manufactured_at: "2019",
    image_url: "brand/cars/w1CYI1hJQ5JyDo7sj5UX7nu9brgPse1kcVj6VOlU.jpg",
    image_url_ary: [],
    price_new: 180,
    price_bank: 220,
    price_sale: 165,
    price_sold: 165,
    currency: "NTD",
    is_new_car: 1,
    is_new_name: "新古車",
    equipment:
      "免鑰匙啟動、摸門開關、全景天窗、電動尾門、盲點偵測\n\n智慧頭燈、倒車影像、記憶座椅、恆溫空調、定速巡航\n\nABS、SRS...",
    dividend_amount: 15032,
    license_number: "Test-5678",
    equity_steps: 1,
    equity_steps_name: "驗資中",
    roi: 21.5
  },
  {
    id: 36,
    car_brand_code: "Benz",
    car_model_code: "GLC 300 SUV",
    car_code: "20250124-11",
    manufactured_at: "2019",
    image_url: "brand/cars/U6cOKs9y5iLvKMVWMEVBN4cUDxJPWCmYwfx96Qmq.jpg",
    image_url_ary: [],
    price_new: 150,
    price_bank: 220,
    price_sale: 165,
    price_sold: 165,
    currency: "NTD",
    equipment:
      "免鑰匙啟動、摸門開關、全景天窗、電動尾門、盲點偵測\n\n智慧頭燈、倒車影像、記憶座椅、恆溫空調、定速巡航\n\nABS、SRS...",
    is_new_car: 1,
    is_new_name: "新古車",
    dividend_amount: 15032,
    license_number: "Test-4321",
    equity_steps: 1,
    equity_steps_name: "驗資中",
    roi: 15.3
  },
  {
    id: 35,
    car_brand_code: "Benz",
    car_model_code: "GLC 300 SUV",
    car_code: "20250124-10",
    manufactured_at: "2019",
    image_url: "brand/cars/BBOGcIGE74HKa8XCZh9bVnQM75qOvsSHdULVdMft.jpg",
    image_url_ary: [],
    price_new: 350,
    price_bank: 220,
    price_sale: 165,
    price_sold: 165,
    currency: "NTD",
    equipment:
      "免鑰匙啟動、摸門開關、全景天窗、電動尾門、盲點偵測\n\n智慧頭燈、倒車影像、記憶座椅、恆溫空調、定速巡航\n\nABS、SRS...",
    is_new_car: 1,
    is_new_name: "新古車",
    dividend_amount: 15032,
    license_number: "Test-3456",
    equity_steps: 1,
    equity_steps_name: "驗資中",
    roi: 17.8
  },
  {
    id: 34,
    car_brand_code: "Benz",
    car_model_code: "GLC 300 SUV",
    car_code: "20250124-09",
    manufactured_at: "2019",
    image_url: "brand/cars/v4a9WHD8rHQbqRq2P4wElB8SmCZ9Z1jDMgbM5TWw.jpg",
    image_url_ary: [],
    price_new: 235,
    price_bank: 220,
    price_sale: 165,
    price_sold: 165,
    currency: "NTD",
    equipment:
      "免鑰匙啟動、摸門開關、全景天窗、電動尾門、盲點偵測\n\n智慧頭燈、倒車影像、記憶座椅、恆溫空調、定速巡航\n\nABS、SRS...",
    is_new_car: 1,
    is_new_name: "新古車",
    dividend_amount: 15032,
    license_number: "Test-2345",
    equity_steps: 1,
    equity_steps_name: "驗資中",
    roi: 12.5
  },
  {
    id: 33,
    car_brand_code: "Benz",
    car_model_code: "GLC 300 SUV",
    car_code: "20250124-08",
    manufactured_at: "2019",
    image_url: "brand/cars/PMTYBh6DPEU4IUKwFslsEwoeufXghvCGTVU25dXR.jpg",
    image_url_ary: [],
    price_new: 225,
    price_bank: 220,
    price_sale: 165,
    price_sold: 165,
    currency: "NTD",
    equipment:
      "免鑰匙啟動、摸門開關、全景天窗、電動尾門、盲點偵測\n\n智慧頭燈、倒車影像、記憶座椅、恆溫空調、定速巡航\n\nABS、SRS...",
    is_new_car: 1,
    is_new_name: "新古車",
    dividend_amount: 15032,
    license_number: "Test-1234",
    equity_steps: 1,
    equity_steps_name: "驗資中",
    roi: 11.8
  }
];

// mock car service logs data
export const carServiceLogs: CarServiceLogType[] = [
  {
    id: 11,
    car_service_log_id: 11,
    user_id: 169,
    mobile_number: "0900000000",
    user_name: "測試是否可以重複新增相同手機號碼的會員",
    car_id: 38,
    car_code: "20250130-01",
    car_brand_code: "BMW",
    car_model_code: "440i M版 5AU",
    license_number: "Test-1234",
    bought_at: null,
    car_store_id: 1,
    store_name: "高雄旗艦店",
    serviced_at: "2025-02-27T03:49:00+08:00",
    image_url: "brand/cars/Y35yc5tuuMvSkRZG930S4mD13yxY9hfxw7sIcd0I.jpg",
    dealer_id: 171,
    dealer_mobile: "0900000001",
    dealer_name: "20250121Test1",
    car_status_id: 15,
    status_name: "回廠美容",
    service_amount: 10000,
    service_content: "Test by Stone"
  },
  {
    id: 6,
    car_service_log_id: 6,
    user_id: 27,
    mobile_number: "0922890565",
    user_name: "蘇長秀",
    car_id: 7,
    car_code: "20230813-5",
    car_brand_code: "Benz",
    car_model_code: "GLC 300 SUV",
    license_number: "SCH-0007",
    bought_at: "2024-12-30T12:05:14+08:00",
    car_store_id: 1,
    store_name: "高雄旗艦店",
    serviced_at: "2025-01-07T15:08:06+08:00",
    image_url: null,
    dealer_id: 7,
    dealer_mobile: "0961005853",
    dealer_name: "Mike-853",
    car_status_id: 14,
    status_name: "回廠保養",
    service_amount: 5300,
    service_content: "回廠保養 test by RichardSu"
  },
  {
    id: 6,
    car_service_log_id: 6,
    user_id: 27,
    mobile_number: "0922890565",
    user_name: "蘇長秀",
    car_id: 7,
    car_code: "20230813-5",
    car_brand_code: "Benz",
    car_model_code: "GLC 300 SUV",
    license_number: "SCH-0007",
    bought_at: "2024-12-30T12:05:14+08:00",
    car_store_id: 1,
    store_name: "高雄旗艦店",
    serviced_at: "2025-01-07T15:08:06+08:00",
    image_url: null,
    dealer_id: 7,
    dealer_mobile: "0961005853",
    dealer_name: "Mike-853",
    car_status_id: 14,
    status_name: "回廠保養",
    service_amount: 5300,
    service_content: "回廠保養 test by RichardSu"
    // created_at: "2025-01-09T16:29:35+08:00",
    // updated_at: "2025-01-09T16:29:35+08:00"
  },
  {
    id: 5,
    car_service_log_id: 5,
    user_id: 27,
    mobile_number: "0922890565",
    user_name: "蘇長秀",
    car_id: 7,
    car_code: "20230813-5",
    car_brand_code: "Benz",
    car_model_code: "GLC 300 SUV",
    license_number: "SCH-0007",
    bought_at: "2024-12-30T12:05:14+08:00",
    car_store_id: 1,
    store_name: "高雄旗艦店",
    serviced_at: "2025-01-08T16:08:06+08:00",
    image_url: null,
    dealer_id: 7,
    dealer_mobile: "0961005853",
    dealer_name: "Mike-853",
    car_status_id: 15,
    status_name: "回廠美容",
    service_amount: 40000,
    service_content: "回廠美容 test by RichardSu"
    // created_at: "2025-01-09T16:28:04+08:00",
    // updated_at: "2025-01-09T16:28:04+08:00"
  },
  {
    id: 3,
    car_service_log_id: 3,
    user_id: 27,
    mobile_number: "0922890565",
    user_name: "蘇長秀",
    car_id: 7,
    car_code: "20230813-5",
    car_brand_code: "Benz",
    car_model_code: "GLC 300 SUV",
    license_number: "SCH-0007",
    bought_at: "2024-12-30T12:05:14+08:00",
    car_store_id: 1,
    store_name: "高雄旗艦店",
    serviced_at: "2025-01-09T16:23:06+08:00",
    image_url: null,
    dealer_id: 7,
    dealer_mobile: "0961005853",
    dealer_name: "Mike-853",
    car_status_id: 15,
    status_name: "回廠美容",
    service_amount: 3600,
    service_content: "回廠美容 test by RichardSu"
    // created_at: "2025-01-09T16:23:06+08:00",
    // updated_at: "2025-01-09T16:23:06+08:00"
  },
  {
    id: 1,
    car_service_log_id: 1,
    user_id: 27,
    mobile_number: "0922890565",
    user_name: "蘇長秀",
    car_id: 7,
    car_code: "20230813-5",
    car_brand_code: "Benz",
    car_model_code: "GLC 300 SUV",
    license_number: "SCH-0007",
    bought_at: "2024-12-30T12:05:14+08:00",
    car_store_id: 1,
    store_name: "高雄旗艦店",
    serviced_at: "2025-01-09T16:02:04+08:00",
    image_url: null,
    dealer_id: 7,
    dealer_mobile: "0961005853",
    dealer_name: "Mike-853",
    car_status_id: 14,
    status_name: "回廠保養",
    service_amount: 3600,
    service_content: "回廠保養 test by RichardSu"
    // created_at: "2025-01-09T16:02:04+08:00",
    // updated_at: "2025-01-09T16:02:04+08:00"
  }
];
