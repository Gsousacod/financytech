import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, TrendingDown, Shield, Target } from "lucide-react";

const financeData = [
  {
    title: "Despesa",
    value: "$500.00",
    change: "-5.2%",
    icon: <TrendingDown className="h-5 w-5 text-red-500" />,
    color: "text-red-500",
  },
  {
    title: "Receita",
    value: "$1,200.00",
    change: "+12.4%",
    icon: <TrendingUp className="h-5 w-5 text-green-500" />,
    color: "text-green-500",
  },
  {
    title: "Reserva de Emergência",
    value: "$2,500.00",
    change: "+3.0%",
    icon: <Shield className="h-5 w-5 text-blue-500" />,
    color: "text-blue-500",
  },
  {
    title: "Meta",
    value: "$1,000.00",
    change: "+8.5%",
    icon: <Target className="h-5 w-5 text-yellow-500" />,
    color: "text-yellow-500",
  },
];

export default function FinanceCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {financeData.map((item, index) => (
        <Card key={index} className="p-4 shadow-md">
          <CardContent className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              {item.icon}
              <p className="text-sm font-medium text-gray-600">{item.title}</p>
            </div>
            <p className="text-2xl font-bold">{item.value}</p>
            <p className={`text-sm font-medium ${item.color}`}>{item.change}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
