import {
  LucideIcon,
  CircleGaugeIcon,
  ToyBrickIcon,
  BanknoteIcon,
  MessageSquareReplyIcon,
  BookTextIcon,
  UserCog2Icon,
} from "lucide-react";

export const DLINKS: {
  title: string;
  label?: string;
  icon: LucideIcon;
  to?: string;
  variant: "default" | "ghost" | "outline";
}[][] = [
  [
    {
      icon: CircleGaugeIcon,
      label: "",
      title: "Dashboard",
      to: "/dashboard",
      variant: "default",
    },
    {
      title: "Integration",
      label: "",
      to: "/integration",
      icon: ToyBrickIcon,
      variant: "default",
    },
    {
      title: "Billing",
      label: "",
      to: "/billing",
      icon: BanknoteIcon,
      variant: "ghost",
    },
  ],
  [
    {title: "Settings", icon: UserCog2Icon, variant: "default", to: "/settings"},
    {
      title: "Feedback",
      label: "",
      icon: MessageSquareReplyIcon,
      variant: "outline",
    },
    {title: "Guide", icon: BookTextIcon, variant: "ghost"},
  ],
];
