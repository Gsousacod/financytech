import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";
import {  Plus } from "lucide-react";
import { TrendingUp, TrendingDown, Shield, Target } from "lucide-react";


const OptionsRealeses = () => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button size="icon" variant="ghost" className="bg-red-600 rounded-e-lg">
            <Plus className="h-9 w-9 " />
          <span className="sr-only">Notificações</span>
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-35">
        <ul className="space-y-2 text-sm">
          <li >
            <Button variant="ghost">
                <TrendingDown className="h-5 w-5 text-red-500" />
                Despesa
            </Button>
            </li>
          <li>
            <Button variant="ghost">
                <TrendingUp className="h-5 w-5 text-green-500" />
                Receita
                </Button>
                </li>
          <li>
            <Button variant="ghost">
                <Shield className="h-5 w-5 text-blue-500" />
                Reserva
                </Button>
                </li>
        </ul>
      </HoverCardContent>
    </HoverCard>
  );
};

export default OptionsRealeses;
