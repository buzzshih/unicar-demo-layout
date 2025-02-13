import { useState } from "react";
import {
  Card,
  Badge,
  Select,
  Accordion,
  Button,
  Modal,
  TextInput,
  Label
} from "flowbite-react";
import { User, Crown, Calendar, Wrench, Car, Sparkles } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { cars, carServiceLogs, carStatuses, roleCodes, user } from "../config";
// import type { User as UserType } from "../types";

const getRoleName = (roleCode: number) => {
  const role = roleCodes.find((role) => role.id === roleCode);
  return {
    name: role ? role.label : "未知角色",
    color: role ? role.color : "info"
  };
};

const getCarStatusName = (carStatusId: number) => {
  const status = carStatuses.find((status) => status.id === carStatusId);
  return status ? status.label : "未知狀態";
};

const getLastCarServiceLog = (car_status_id: number, car_id: number) => {
  const result = carServiceLogs.find(
    (log) => log.car_id === car_id && log.car_status_id === car_status_id
  );
  return result;
};

export function MyProfile() {
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">我的資料</h1>

      {/* Basic Info */}
      <Card>
        <div className="flex flex-col justify-start ">
          <div className="flex items-center justify-between gap-4 ">
            <div className="flex">
              <User className="size-12 text-gray-600" />
              <div>
                <h2 className="text-2xl font-bold">{user.name || "未設定"}</h2>
                <p className="text-base text-gray-600">
                  {user.phone || "未設定"}
                </p>
              </div>
            </div>
            <Button size="sm" onClick={() => setIsEditProfileOpen(true)}>
              編輯資料
            </Button>
          </div>

          <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-3">
            <div className=" text-base">
              <span className="font-bold text-gray-500">電子信箱：</span>
              <span className="break-all">{user.email || "未設定"}</span>
            </div>
            <div className="text-base">
              <span className="font-bold text-gray-500">生日：</span>
              <span>{user.birthday || "未設定"}</span>
            </div>
            <div className="text-base ">
              <span className="font-bold text-gray-500">性別：</span>
              <span>{user.gender ? "男" : "女"}</span>
            </div>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {user.role_code_ids.map((roleCode) => (
            <Badge key={roleCode} color={getRoleName(roleCode).color}>
              <span className="text-sm">{getRoleName(roleCode).name}</span>
            </Badge>
          ))}
        </div>
      </Card>
      <Modal
        show={isEditProfileOpen}
        onClose={() => setIsEditProfileOpen(false)}
      >
        <Modal.Header>編輯個人資料</Modal.Header>
        <Modal.Body className="space-y-4">
          <div className="flex flex-col gap-2">
            <div>
              <Label className="text-base">姓名:</Label>
            </div>
            <div>
              <TextInput
                type="text"
                placeholder="ex: 王大明"
                defaultValue={user.name}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div>
              <Label className="text-base">電話:</Label>
            </div>
            <div>
              <TextInput
                type="text"
                placeholder="ex: 0912345678"
                defaultValue={user.phone}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div>
              <Label className="text-base">Email:</Label>
            </div>
            <div>
              <TextInput
                type="text"
                placeholder="ex: test@example.com"
                defaultValue={user.email || ""}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div>
              <Label className="text-base">性別</Label>
            </div>
            <div>
              <Select defaultValue={user.gender.toString() || ""}>
                <option value="">請選擇</option>
                <option value="0">女</option>
                <option value="1">男</option>
              </Select>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button color="gray" onClick={() => setIsEditProfileOpen(false)}>
            取消
          </Button>
          <Button onClick={() => setIsEditProfileOpen(false)}>儲存</Button>
        </Modal.Footer>
      </Modal>

      {/* Quick Service Buttons */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <Button
          size="xl"
          className="h-24 text-lg"
          onClick={() => navigate("/reserve", { state: { type: "beauty" } })}
        >
          <div className="flex items-center justify-center gap-3">
            <Sparkles className="size-6" />
            <span>預約美容服務</span>
          </div>
        </Button>
        <Button
          size="xl"
          color="success"
          className="h-24 text-lg"
          onClick={() =>
            navigate("/reserve", { state: { type: "maintenance" } })
          }
        >
          <div className="flex items-center justify-center gap-3">
            <Wrench className="size-6" />
            <span>預約保養服務</span>
          </div>
        </Button>
        <Button
          size="xl"
          className="h-24 text-lg"
          onClick={() => navigate("/find")}
        >
          <div className="flex items-center justify-center gap-3">
            <Car className="size-6" />
            <span>尋找愛車</span>
          </div>
        </Button>
      </div>

      {user.role_code_ids.includes(3) && (
        <div className="space-y-6">
          {/* <Card> */}
          <h2 className="mb-4 text-2xl font-bold">我的愛車</h2>
          <Card>
            <Accordion collapseAll>
              {cars.map((car) => (
                <Accordion.Panel key={car.license_number}>
                  <Accordion.Title className=" hover:bg-gray-50">
                    <div className="flex w-full items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Car className="size-8 text-gray-600" />
                        <span className="font-semibold">
                          {car.license_number}
                        </span>
                      </div>
                    </div>
                  </Accordion.Title>
                  <Accordion.Content>
                    {/* 車輛規格區塊 */}
                    {/* <Card className="w-full transition-shadow hover:shadow-lg"> */}
                    {/* <div className="mb-4 whitespace-pre-line rounded-lg ">
                    <h4 className="mb-2 font-medium text-gray-700">車輛規格</h4>
                    <p className="rounded-lg bg-gray-100  p-4 text-justify text-sm text-gray-600">
                      {car.equipment}
                    </p>
                  </div> */}
                    {/* 最近服務資訊 - 優化手機版顯示 */}
                    <div className="mt-4 space-y-3 md:grid md:grid-cols-2 md:gap-4 md:space-y-0">
                      <div className="rounded-lg bg-blue-50 p-3">
                        <div className="flex items-center gap-2">
                          <Calendar className="size-5 shrink-0 text-blue-500" />
                          <div className="min-w-0">
                            <div className="text-sm font-medium">最近美容</div>
                            <time className="block text-sm text-blue-700">
                              {getLastCarServiceLog(15, car.id)?.serviced_at &&
                                format(
                                  new Date(
                                    getLastCarServiceLog(15, car.id)
                                      ?.serviced_at ?? ""
                                  ),
                                  "yyyy/MM/dd"
                                )}
                            </time>
                            <div className="text-sm">
                              {
                                getLastCarServiceLog(15, car.id)
                                  ?.service_content
                              }
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-lg bg-green-50 p-3">
                        <div className="flex items-center gap-2">
                          <Wrench className="size-5 shrink-0 text-green-500" />
                          <div className="min-w-0">
                            <div className="text-sm font-medium">最近保養</div>
                            <time className="block text-sm text-green-700">
                              {getLastCarServiceLog(14, car.id) &&
                                format(
                                  new Date(
                                    getLastCarServiceLog(14, car.id)
                                      ?.serviced_at ?? ""
                                  ),
                                  "yyyy/MM/dd"
                                )}
                            </time>
                            <div className="text-sm">
                              {getLastCarServiceLog(14, car.id)
                                ?.service_content ?? "無"}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 最近記錄列表 - 只顯示最近 2 筆 */}
                    <div className="mt-4">
                      <div className="mb-2 text-sm font-medium">最近記錄</div>
                      <div className="space-y-2">
                        {carServiceLogs
                          .filter((record) => record.car_id === car.id)
                          .slice(0, 2)
                          .map((record, index) => (
                            <div
                              key={index}
                              className={`flex items-center gap-2 rounded-lg p-2 text-sm ${
                                record.status_name === "回廠美容"
                                  ? "bg-blue-50"
                                  : "bg-green-50"
                              }`}
                            >
                              <div
                                className={`shrink-0 rounded px-2 py-0.5 text-sm ${
                                  record.status_name === "回廠美容"
                                    ? "bg-blue-100 text-blue-700"
                                    : "bg-green-100 text-green-700"
                                }`}
                              >
                                {getCarStatusName(record.car_status_id)}
                              </div>
                              <div className="min-w-0 flex-1">
                                <div className="truncate text-sm">
                                  {record.service_content}
                                </div>
                              </div>
                              <time className="shrink-0 text-xs text-gray-500">
                                {format(
                                  new Date(record.serviced_at),
                                  "yyyy/MM/dd"
                                )}
                              </time>
                            </div>
                          ))}
                      </div>
                    </div>
                    <div className="m-2 flex justify-end">
                      <Link
                        to={`/car/${car.license_number}`}
                        className="font-medium text-blue-600 hover:text-blue-800"
                      >
                        查看詳細資訊 →
                      </Link>
                    </div>
                    {/* </Card> */}
                  </Accordion.Content>
                </Accordion.Panel>
              ))}
            </Accordion>
          </Card>
        </div>
      )}
      {/* </section> */}
      {/* </Card> */}

      {/* Shareholder Section */}
      {user.role_code_ids.includes(4) && (
        <div>
          <h2 className="mb-4 text-2xl font-bold">我的股權</h2>
          <Card className="w-full transition-shadow hover:shadow-lg ">
            <Accordion collapseAll>
              {cars.map((car) => (
                <Accordion.Panel key={car.license_number}>
                  <Accordion.Title key={car.license_number}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Crown className="size-6 text-yellow-500" />
                        <span className="font-semibold">
                          {car.license_number}
                        </span>
                      </div>
                    </div>
                  </Accordion.Title>
                  <Accordion.Content>
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold">
                        {car.license_number}
                      </h3>
                    </div>
                    <p className="text-gray-600">
                      憑證狀態：{car.equity_steps_name}
                    </p>
                    <div className="mt-4">
                      <h4 className="mb-2 font-semibold">每月股息</h4>
                      <p className="text-lg font-bold text-green-600">
                        $ {car.dividend_amount.toLocaleString()}
                      </p>
                    </div>
                    <div className="m-2 flex justify-end">
                      <Link
                        to={`/car/${car.license_number}?tab=dividend`}
                        className="font-medium text-blue-600 hover:text-blue-800"
                      >
                        查看詳細資訊 →
                      </Link>
                    </div>
                  </Accordion.Content>
                </Accordion.Panel>
              ))}
            </Accordion>
          </Card>
        </div>
      )}

      {/* Commission Section */}
      {user.role_code_ids.includes(5) && (
        <section>
          <h2 className="mb-4 text-2xl font-bold">我的佣金</h2>
          <div className="space-y-4">
            <Card>
              <div className="grid gap-4 md:grid-cols-3">
                <div>
                  <h3 className="mb-2 text-lg font-semibold">累積佣金總額</h3>
                  <p className="text-2xl font-bold text-green-600">
                    $ 1,500,000
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold">本月佣金</h3>
                  <p className="text-2xl font-bold text-green-600">$ 150,000</p>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold">今年佣金</h3>
                  <p className="text-2xl font-bold text-green-600">$ 450,000</p>
                </div>
              </div>
              <div className="m-2 flex justify-end">
                <Link
                  to={`/commission`}
                  className="font-medium text-blue-600 hover:text-blue-800"
                >
                  查看詳細資訊 →
                </Link>
              </div>
            </Card>
          </div>
        </section>
      )}
    </div>
  );
}
