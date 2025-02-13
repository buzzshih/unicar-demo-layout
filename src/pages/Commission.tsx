import { Card, Select, Table } from "flowbite-react";
import { commissionData } from "../config";
import { useState } from "react";

const Commission = () => {
  const [commissionPeriod, setCommissionPeriod] = useState("month");
  const [selectedYear, setSelectedYear] = useState("2024");
  const [selectedMonth, setSelectedMonth] = useState("3");
  return (
    <Card>
      <div className="mb-4 flex flex-wrap items-end gap-4">
        <div>
          <label className="mb-1 block text-base font-medium text-gray-700">
            查詢方式
          </label>
          <Select
            value={commissionPeriod}
            onChange={(e) => setCommissionPeriod(e.target.value)}
          >
            <option value="month">依月份</option>
            <option value="year">依年度</option>
          </Select>
        </div>

        <div>
          <label className="mb-1 block text-base font-medium text-gray-700">
            年度
          </label>
          <Select
            className=" text-base"
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
          >
            <option value="2024">2024</option>
            <option value="2023">2023</option>
          </Select>
        </div>

        {commissionPeriod === "month" && (
          <div>
            <label className="mb-1 block text-base font-medium text-gray-700 ">
              月份
            </label>
            <Select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
            >
              {[...Array(12)].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1} 月
                </option>
              ))}
            </Select>
          </div>
        )}
      </div>

      <Table>
        <Table.Head className="text-base">
          <Table.HeadCell>期間</Table.HeadCell>
          <Table.HeadCell>佣金金額</Table.HeadCell>
        </Table.Head>
        <Table.Body className="text-base">
          {commissionData.map((commission, index) => (
            <Table.Row key={index} className="bg-white">
              <Table.Cell className="whitespace-nowrap">
                {commission.date}
              </Table.Cell>
              <Table.Cell className="font-semibold text-green-600">
                $ {commission.amount.toLocaleString()}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </Card>
  );
};

export default Commission;
