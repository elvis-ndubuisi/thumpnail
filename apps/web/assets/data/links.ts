import {
  BanknoteIcon,
  BoltIcon,
  BookOpenTextIcon,
  BookTextIcon,
  CircleGaugeIcon,
  CircleHelpIcon,
  FolderKanbanIcon,
  LucideIcon,
  MessageSquareReplyIcon,
  SettingsIcon,
  ToyBrickIcon,
} from "lucide-react";

export const DLINKS: {
  title: string;
  label?: string;
  icon: LucideIcon;
  to?: string;
  variant: "default" | "ghost" | "outline" | "secondary";
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
      icon: FolderKanbanIcon,
      label: "",
      title: "Projects",
      to: "/projects",
      variant: "outline",
    },
    {
      title: "Integration",
      label: "",
      to: "/integration",
      icon: ToyBrickIcon,
      variant: "outline",
    },
    {
      title: "Billing",
      label: "",
      to: "/billing",
      icon: BanknoteIcon,
      variant: "outline",
    },
    {
      title: "Tokens",
      label: "",
      to: "/billing",
      icon: BoltIcon,
      variant: "outline",
    },
  ],
  [
    {title: "Settings", icon: SettingsIcon, variant: "ghost", to: "/settings"},
    {title: "Get Support", icon: CircleHelpIcon, variant: "ghost"},
    {
      title: "Feedback",
      label: "",
      icon: MessageSquareReplyIcon,
      variant: "ghost",
    },
    {title: "Documentation", icon: BookOpenTextIcon, variant: "ghost"},
  ],
];
