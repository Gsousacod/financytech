import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";

const NotificationButton = () => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button size="icon" variant="ghost">
          <Bell className="w-6 h-6" />
          <span className="sr-only">Notificações</span>
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-96">
        <h4 className="font-semibold text-sm">Notificações</h4>
        <ul className="mt-2 space-y-2 text-sm">
          <li>Você não tem Notificações no momento!</li>
        </ul>
      </HoverCardContent>
    </HoverCard>
  );
};

export default NotificationButton;
