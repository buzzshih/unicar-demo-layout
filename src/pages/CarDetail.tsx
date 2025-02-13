import { useParams, useSearchParams } from "react-router-dom";
import { Card, Badge, Table, Carousel } from "flowbite-react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { carServiceLogs, cars, CarType, CarServiceLogType } from "../config";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import Tabs from "../components/Tabs";
import image1 from "../../public/images/image1.jpg";
import image2 from "../../public/images/image2.jpg";
import image3 from "../../public/images/image3.jpg";

export function CarDetail() {
  const [searchParams] = useSearchParams();
  const [carInfo, setCarInfo] = useState<CarType | null>(null);
  const [carServiceLogsData, setCarServiceLogsData] = useState<
    CarServiceLogType[]
  >([]);

  const [tabIndex, setTabIndex] = useState<number>(0);
  const { id } = useParams();
  const tab = searchParams.get("tab");
  useEffect(() => {
    const car = cars.find((car) => car.license_number === id);
    const carServiceLog = carServiceLogs.filter(
      (log) => log.license_number === id
    );
    car && setCarInfo(car);
    carServiceLog && setCarServiceLogsData(carServiceLog);
  }, [id]);

  useEffect(() => {
    switch (tab) {
      case tabsItems[0].key:
        setTabIndex(0);
        break;
      case tabsItems[1].key:
        setTabIndex(1);
        break;
      case tabsItems[2].key:
        setTabIndex(2);
        break;
    }
  }, [tab]);

  const tabsItems = [
    {
      key: "beauty",
      title: "美容記錄",
      active: tab === "beauty"
    },
    {
      key: "description",
      title: "保養記錄",
      active: tab === "description"
    },
    {
      key: "dividend",
      title: "股權資訊",
      active: tab === "dividend"
    }
  ];

  // Mock data - 實際應用中應從 API 獲取
  const carDetails = {
    shareholderInfo: {
      certificateStatus: "processing",
      monthlyDividend: 20577,
      dividendHistory: [
        { date: "2024/02", amount: 20577 },
        { date: "2024/01", amount: 20577 }
      ]
    }
  };

  const handleTabChange = (index: number) => {
    console.log("index:", index);
    setTabIndex(index);
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="mb-6">
        <Link
          to="/"
          className="flex items-center text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="mr-2 size-5" />
          返回
        </Link>
      </div>

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
          <div className="size-full bg-gray-200">
            <img
              src={image1}
              alt="Car Image"
              className=" size-full object-contain"
            />
          </div>
          <div className="size-full bg-gray-200">
            <img
              src={image2}
              alt="Car Image"
              className=" size-full object-contain"
            />
          </div>
          <div className="size-full bg-gray-200">
            <img
              src={image3}
              alt="Car Image"
              className=" size-full object-contain"
            />
          </div>
        </Carousel>
      </div>
      <Card className="mb-6">
        <div className="flex   justify-between md:flex-row">
          <div className="flex-1 space-y-4">
            <h1 className="mb-4 text-3xl font-bold">
              {carInfo?.license_number}
            </h1>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              <div>
                <div className="mb-1 text-sm text-gray-600">品牌</div>
                <div className="font-medium">{carInfo?.car_brand_code}</div>
              </div>
              <div>
                <div className="mb-1 text-sm text-gray-600">型號</div>
                <div className="font-medium">{carInfo?.car_model_code}</div>
              </div>
              <div>
                <div className="mb-1 text-sm text-gray-600">年份</div>
                <div className="font-medium">{carInfo?.manufactured_at}</div>
              </div>
            </div>
            <div className="space-y-1.5">
              <div className="text-base text-gray-600">規格：</div>
              <div className="flex flex-wrap gap-2">
                {carInfo?.equipment &&
                  carInfo.equipment.split("、").map((spec, index) => (
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
      </Card>

      <Tabs
        aria-label="車輛資訊標籤"
        // style="underline"
        onActiveTabChange={handleTabChange}
        tabsItems={tabsItems}
      >
        {tabIndex === 0 && (
          <Card>
            <Table>
              <Table.Head className="text-base">
                <Table.HeadCell>日期</Table.HeadCell>
                <Table.HeadCell>服務項目</Table.HeadCell>
              </Table.Head>
              <Table.Body className="text-base">
                {carServiceLogsData
                  .filter((log) => log.car_status_id === 15)
                  .map((record, index) => (
                    <Table.Row key={index} className="bg-white">
                      <Table.Cell>
                        {record.serviced_at
                          ? format(new Date(record.serviced_at), "yyyy/MM/dd")
                          : "無"}
                      </Table.Cell>
                      <Table.Cell>
                        <Badge
                          className="whitespace-nowrap text-base"
                          color="info"
                        >
                          {record.status_name}
                        </Badge>
                      </Table.Cell>
                    </Table.Row>
                  ))}
              </Table.Body>
            </Table>
          </Card>
        )}

        {tabIndex === 1 && (
          <Card>
            <Table>
              <Table.Head className="text-base">
                <Table.HeadCell>日期</Table.HeadCell>
                <Table.HeadCell>服務項目</Table.HeadCell>
              </Table.Head>
              <Table.Body className="text-base">
                {carServiceLogsData.length > 0 ? (
                  carServiceLogsData.filter((log) => log.car_status_id === 14)
                    .length > 0 ? (
                    carServiceLogsData
                      .filter((log) => log.car_status_id === 14)
                      .map((record, index) => (
                        <Table.Row key={index} className="bg-white">
                          <Table.Cell>
                            {record.serviced_at
                              ? format(
                                  new Date(record.serviced_at),
                                  "yyyy/MM/dd"
                                )
                              : "無"}
                          </Table.Cell>
                          <Table.Cell>
                            <Badge
                              className="whitespace-nowrap text-base"
                              color="success"
                            >
                              {record.status_name}
                            </Badge>
                          </Table.Cell>
                        </Table.Row>
                      ))
                  ) : (
                    <Table.Row>
                      <Table.Cell colSpan={2}>無資料</Table.Cell>
                    </Table.Row>
                  )
                ) : (
                  <Table.Row>
                    <Table.Cell colSpan={2}>無資料</Table.Cell>
                  </Table.Row>
                )}
              </Table.Body>
            </Table>
          </Card>
        )}

        {tabIndex === 2 && (
          <Card>
            <div className="space-y-6">
              <div>
                <h3 className="mb-2 text-lg font-semibold">憑證狀態</h3>
                <Badge className="whitespace-nowrap text-base" color="warning">
                  處理中
                </Badge>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold">每月股息</h3>
                <p className="text-2xl font-bold text-green-600">
                  ${" "}
                  {carDetails.shareholderInfo.monthlyDividend.toLocaleString()}
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold">股息歷史記錄</h3>
                <Table>
                  <Table.Head className="text-base">
                    <Table.HeadCell>月份</Table.HeadCell>
                    <Table.HeadCell>金額</Table.HeadCell>
                  </Table.Head>
                  <Table.Body className="w-full break-words text-base">
                    {carDetails.shareholderInfo.dividendHistory.map(
                      (dividend, index) => (
                        <Table.Row key={index} className="w-full bg-white">
                          <Table.Cell>{dividend.date}</Table.Cell>
                          <Table.Cell className="font-semibold text-green-600">
                            $ {dividend.amount.toLocaleString()}
                          </Table.Cell>
                        </Table.Row>
                      )
                    )}
                  </Table.Body>
                </Table>
              </div>
            </div>
          </Card>
        )}
      </Tabs>
    </div>
  );
}
