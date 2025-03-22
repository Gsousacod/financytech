"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { cn } from "@/lib/utils"
import { useState } from "react"

type GoalPlanProps = {
  className?: string
}

const months = [
  "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
  "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
]

export function GoalPlan({ className }: GoalPlanProps) {
  const [checkedMonths, setCheckedMonths] = useState<string[]>([])

  const toggleMonth = (month: string) => {
    setCheckedMonths(prev =>
      prev.includes(month) ? prev.filter(m => m !== month) : [...prev, month]
    )
  }

  return (
    <Card className={cn("w-full max-w-md", className)}>
      <CardHeader>
        <CardTitle>Plano Anual de Metas</CardTitle>
      </CardHeader>
      <CardContent className="space-y-1">
        {months.map((month) => (
          <div key={month} className="flex items-center gap-2">
            <Checkbox
              id={month}
              checked={checkedMonths.includes(month)}
              onCheckedChange={() => toggleMonth(month)}
            />
            <label htmlFor={month} className="cursor-pointer">
              {month}
            </label>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
