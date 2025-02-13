import { useEffect, useState } from "react";
import { Card, Button, Select, TextInput } from "flowbite-react";
import {
  Calendar,
  Clock,
  MapPin,
  Building,
  Sparkles,
  Wrench,
  ArrowLeft
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export function Reserve() {
  const location = useLocation();
  const [step, setStep] = useState(1);
  const [appointmentType, setAppointmentType] = useState<
    "beauty" | "maintenance" | null
  >(null);
  const [appointment, setAppointment] = useState({});

  useEffect(() => {
    if (location.state?.type) {
      setAppointmentType(location.state.type);
      setStep(2);
    }
  }, [location.state?.type]);

  const handleSubmit = () => {
    // Handle appointment submission
    console.log("預約已送出:", appointment);
    // Show success message and reset form
    setStep(1);
    setAppointmentType(null);
    setAppointment({});
  };

  return (
    <div className="mx-auto max-w-2xl">
      {step === 1 && (
        <div className="mb-6">
          <Link
            to="/"
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="mr-2 size-5" />
            返回
          </Link>
        </div>
      )}

      <h1 className="mb-6 text-3xl font-bold">預約服務</h1>

      {step === 1 && (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Button
            size="xl"
            color="info"
            className="h-24 text-lg"
            onClick={() => {
              setAppointmentType("beauty");
              setStep(2);
            }}
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
            onClick={() => {
              setAppointmentType("maintenance");
              setStep(2);
            }}
          >
            <div className="flex items-center justify-center gap-3">
              <Wrench className="size-6" />
              <span>預約保養服務</span>
            </div>
          </Button>
        </div>
      )}

      {step === 2 && (
        <Card>
          <h2 className="mb-4 text-2xl font-bold">
            {appointmentType === "beauty" ? "預約美容服務" : "預約保養服務"}
          </h2>

          <div className="space-y-4">
            <div>
              <label className="mb-2 block">地區</label>
              <Select
                icon={MapPin}
                onChange={(e) =>
                  setAppointment({ ...appointment, region: e.target.value })
                }
              >
                <option value="">請選擇地區</option>
                <option value="taipei">台北</option>
                <option value="taichung">台中</option>
                <option value="kaohsiung">高雄</option>
              </Select>
            </div>

            <div>
              <label className="mb-2 block">服務據點</label>
              <Select
                icon={Building}
                onChange={(e) =>
                  setAppointment({ ...appointment, store: e.target.value })
                }
              >
                <option value="">請選擇服務據點</option>
                <option value="store1">直營店 1</option>
                <option value="store2">特約店 2</option>
              </Select>
            </div>

            <div>
              <label className="mb-2 block">日期</label>
              <TextInput
                type="date"
                icon={Calendar}
                onChange={(e) =>
                  setAppointment({ ...appointment, date: e.target.value })
                }
              />
            </div>

            <div>
              <label className="mb-2 block">時間</label>
              <Select
                icon={Clock}
                onChange={(e) =>
                  setAppointment({ ...appointment, time: e.target.value })
                }
              >
                <option value="">請選擇時間</option>
                <option value="09:00">09:00</option>
                <option value="10:00">10:00</option>
                <option value="11:00">11:00</option>
                <option value="14:00">14:00</option>
                <option value="15:00">15:00</option>
                <option value="16:00">16:00</option>
              </Select>
            </div>

            <div className="flex gap-4">
              <Button color="gray" onClick={() => setStep(1)}>
                返回
              </Button>
              <Button color="success" onClick={handleSubmit}>
                確認預約
              </Button>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
}
