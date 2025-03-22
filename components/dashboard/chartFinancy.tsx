"use client"


import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { cn } from "@/lib/utils"

const chartData = [
  { month: "Janeiro", desktop: 186, mobile: 80 },
  { month: "Fevereiro", desktop: 305, mobile: 200 },
  { month: "Março", desktop: 237, mobile: 120 },
  { month: "Abril", desktop: 73, mobile: 190 },
  { month: "Maio", desktop: 209, mobile: 130 },
  { month: "Junho", desktop: 214, mobile: 140 },
  { month: "Julho", desktop: 73, mobile: 190 },
  { month: "Agosto", desktop: 209, mobile: 130 },
  { month: "Setembro", desktop: 214, mobile: 140 },
  { month: "Outrubro", desktop: 73, mobile: 190 },
  { month: "Novembro", desktop: 209, mobile: 130 },
  { month: "Dezembro", desktop: 214, mobile: 140 },
]

const chartConfig = {
  desktop: {
    label: "Receita",
    color: "#0ef600",
  },
  mobile: {
    label: "Despesa",
    color: "#e61603",
  },
} satisfies ChartConfig

type chartFinacy = {
  className: string;
}

export function ChartFinancy({ className }: chartFinacy) {
  return (
    <Card className={cn("", className)}>
      <CardHeader>
        <CardTitle>Distribuição Mensal</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 h-full">
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
            <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
     
    </Card>
  )
}
