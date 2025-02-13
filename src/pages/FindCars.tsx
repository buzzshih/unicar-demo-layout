import { useState } from "react";
import { Card, Button, Select, Modal, Carousel } from "flowbite-react";
import { Filter } from "lucide-react";
import { CarInventory } from "../config";
import image1 from "../../public/images/image1.jpg";
import image2 from "../../public/images/image2.jpg";
import image3 from "../../public/images/image3.jpg";
import image4 from "../../public/images/image4.jpg";
import image5 from "../../public/images/image5.jpg";
import image6 from "../../public/images/image6.jpg";
import image7 from "../../public/images/image7.jpg";
import image8 from "../../public/images/image8.jpg";
import image9 from "../../public/images/image9.jpg";
import image10 from "../../public/images/image10.jpg";
import image11 from "../../public/images/image11.jpg";
import image12 from "../../public/images/image12.jpg";
import image13 from "../../public/images/image13.jpg";
import image14 from "../../public/images/image14.jpg";
import image15 from "../../public/images/image15.jpg";
import image16 from "../../public/images/image16.jpg";

const carImages = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16
];

export function FindCars() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    brand: "",
    model: "",
    year: "",
    specs: ""
  });

  const [selectedCar, setSelectedCar] = useState<
    (typeof CarInventory)[0] | null
  >(null);
  const [showDetailModal, setShowDetailModal] = useState(false);

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold">庫存車輛</h1>
        <Button
          onClick={() => setIsFilterOpen(true)}
          className="flex items-center gap-2"
        >
          <Filter className="size-5" />
          進階搜尋
        </Button>
      </div>

      <div className=" grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {CarInventory.map((car, index) => (
          <div key={index} className="h-full">
            <div className="h-96 w-full">
              <Carousel
                pauseOnHover
                slide={false}
                theme={{
                  root: {
                    base: "relative h-96",
                    leftControl:
                      "absolute left-0 top-1/2 flex -translate-y-1/2 items-center justify-center focus:outline-none",
                    rightControl:
                      "absolute right-0 top-1/2 flex -translate-y-1/2 items-center justify-center focus:outline-none"
                  },
                  control: {
                    base: "inline-flex size-8 items-center justify-center rounded-full bg-gray-900/40 backdrop-blur transition-all duration-200 group-hover:bg-gray-900/60 group-focus:outline-none group-focus:ring-4 group-focus:ring-gray-900/30 sm:size-10",
                    icon: "size-5 text-white/90 sm:size-6"
                  }
                }}
              >
                {[0, 1, 2].map((offset) => {
                  const startIndex =
                    Math.floor(index % (carImages.length / 3)) * 3;
                  const imageIndex = startIndex + offset;
                  // console.log("Car ID:", car.id);
                  // console.log("Start Index:", startIndex);
                  // console.log("Image Index:", imageIndex);
                  return (
                    <div key={offset} className="size-full bg-gray-200">
                      <img
                        src={carImages[imageIndex]}
                        alt={`${car.car_brand_code} ${
                          car.car_model_code
                        } - 圖片 ${offset + 1}`}
                        className="size-full object-contain"
                      />
                    </div>
                  );
                })}
              </Carousel>
            </div>
            {/* <Card key={car.id} className="h-[calc(100%-24rem)]">
              <div className="flex h-full flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold">
                    {car.car_brand_code} {car.car_model_code}
                  </h3>
                  <div className="mt-2 space-y-2">
                    <div className="text-base text-gray-600">
                      {car.manufactured_at} 年 ｜ {car.is_new_name}
                    </div>
                    <div className="text-base text-gray-600">規格 : </div>
                    <div className="font-medium">{car.equipment}</div>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <p className="text-lg font-bold">
                  $ {car.price_new?.toLocaleString()} 萬
                </p>
              </div>

              <Button
                color="info"
                onClick={() => {
                  setSelectedCar(car);
                  setShowDetailModal(true);
                }}
                className="mt-4 w-full"
              >
                查看詳情
              </Button>
            </Card> */}
            <Card key={car.id} className="h-[calc(100%-24rem)]">
              <div className="flex h-full flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold">
                    {car.car_brand_code} {car.car_model_code}
                  </h3>

                  <div className="mt-2 space-y-3">
                    <div className="flex items-center gap-2 text-base text-gray-600">
                      <span>{car.manufactured_at} 年</span>
                      <span className="h-4 w-px bg-gray-300"></span>
                      <span>{car.is_new_name}</span>
                    </div>

                    <div className="space-y-1.5">
                      <div className="text-base text-gray-600">規格：</div>
                      <div className="flex flex-wrap gap-2">
                        {car.equipment &&
                          car.equipment.split("、").map((spec, index) => (
                            <span
                              key={index}
                              className="inline-flex rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600"
                            >
                              {spec}
                            </span>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <p className="mb-2 text-lg font-bold text-blue-600">
                    $ {car.price_new?.toLocaleString()} 萬
                  </p>
                  <p className="mb-2 text-base font-semibold text-green-600">
                    投報率: {car.roi}%
                  </p>

                  <Button
                    color="info"
                    onClick={() => {
                      setSelectedCar(car);
                      setShowDetailModal(true);
                    }}
                    className="w-full"
                  >
                    查看詳情
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>

      <Modal
        show={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        size="lg"
      >
        <Modal.Header>
          <span className="text-xl font-bold">進階搜尋</span>
        </Modal.Header>
        <Modal.Body>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="mb-2 block">品牌</label>
              <Select
                value={filters.brand}
                onChange={(e) =>
                  setFilters({ ...filters, brand: e.target.value })
                }
              >
                <option value="">所有品牌</option>
                <option value="toyota">豐田</option>
                <option value="honda">本田</option>
                <option value="lexus">凌志</option>
              </Select>
            </div>

            <div>
              <label className="mb-2 block">型號</label>
              <Select
                value={filters.model}
                onChange={(e) =>
                  setFilters({ ...filters, model: e.target.value })
                }
              >
                <option value="">所有型號</option>
                <option value="camry">Camry</option>
                <option value="accord">Accord</option>
                <option value="es">ES</option>
              </Select>
            </div>

            <div>
              <label className="mb-2 block">年份</label>
              <Select
                value={filters.year}
                onChange={(e) =>
                  setFilters({ ...filters, year: e.target.value })
                }
              >
                <option value="">所有年份</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
              </Select>
            </div>

            <div>
              <label className="mb-2 block">規格</label>
              <Select
                value={filters.specs}
                onChange={(e) =>
                  setFilters({ ...filters, specs: e.target.value })
                }
              >
                <option value="">所有規格</option>
                <option value="hybrid">油電混合</option>
                <option value="gasoline">汽油</option>
                <option value="electric">電動</option>
              </Select>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="flex w-full gap-4">
            <Button
              color="gray"
              onClick={() => setIsFilterOpen(false)}
              className="flex-1"
            >
              取消
            </Button>
            <Button
              color="info"
              onClick={() => {
                // 套用篩選邏輯
                setIsFilterOpen(false);
              }}
              className="flex-1"
            >
              套用篩選
            </Button>
          </div>
        </Modal.Footer>
      </Modal>

      <Modal
        show={showDetailModal}
        onClose={() => setShowDetailModal(false)}
        size="4xl"
      >
        <Modal.Header>
          <span className="text-2xl font-bold">
            {selectedCar?.car_brand_code} {selectedCar?.car_model_code}
          </span>
        </Modal.Header>
        <Modal.Body>
          <div className="grid gap-6 lg:grid-cols-2">
            <div>
              <Carousel
                pauseOnHover
                slide={false}
                theme={{
                  root: {
                    base: "relative h-96",
                    leftControl:
                      "absolute left-0 top-1/2 flex -translate-y-1/2 items-center justify-center focus:outline-none",
                    rightControl:
                      "absolute right-0 top-1/2 flex -translate-y-1/2 items-center justify-center focus:outline-none"
                  },
                  control: {
                    base: "inline-flex size-8 items-center justify-center rounded-full bg-gray-900/40 backdrop-blur transition-all duration-200 group-hover:bg-gray-900/60 group-focus:outline-none group-focus:ring-4 group-focus:ring-gray-900/30 sm:size-10",
                    icon: "size-5 text-white/90 sm:size-6"
                  }
                }}
              >
                {[0, 1, 2].map((offset) => {
                  const imageIndex = offset;
                  return (
                    <div key={offset} className="size-full bg-gray-200">
                      <img
                        src={carImages[imageIndex]}
                        alt={`${selectedCar?.car_brand_code} ${
                          selectedCar?.car_model_code
                        } - 圖片 ${offset + 1}`}
                        className="size-full object-contain"
                      />
                    </div>
                  );
                })}
              </Carousel>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold">基本資訊</h3>
                <div className="mt-2 grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">年份</p>
                    <p className="font-medium">
                      {selectedCar?.manufactured_at} 年
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">車況</p>
                    <p className="font-medium">{selectedCar?.is_new_name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">售價</p>
                    <p className="text-xl font-bold text-blue-600">
                      $ {selectedCar?.price_new?.toLocaleString()} 萬
                    </p>
                    <p className="mb-2 text-base font-semibold text-green-600">
                      投報率: {selectedCar?.roi}%
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold">規格配備</h3>
                <div className="mt-2 whitespace-pre-line rounded-lg bg-gray-50 p-4">
                  {selectedCar?.equipment}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold">聯絡資訊</h3>
                <div className="mt-2 space-y-2">
                  <p className="flex items-center gap-2">
                    <span className="text-gray-600">聯絡電話：</span>
                    <span className="font-medium">02-XXXX-XXXX</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-gray-600">營業時間：</span>
                    <span className="font-medium">週一至週日 09:00-18:00</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-gray-600">展示地點：</span>
                    <span className="font-medium">
                      高雄市信義區信義路五段7號
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="flex w-full gap-4">
            <Button
              color="gray"
              onClick={() => setShowDetailModal(false)}
              className="flex-1"
            >
              關閉
            </Button>
            <Button color="info" className="flex-1">
              預約看車
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
