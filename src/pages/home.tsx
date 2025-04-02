import { useState } from "react";
import { Typography } from "@/components/ui/typography";
import { Win98Window } from "@/components/win98-window";
import { Win98Button } from "@/components/win98-button";
import { Win98Menu } from "@/components/win98-menu";
import { Win98Taskbar } from "@/components/win98-taskbar";
import { ModeToggle } from "@/components/mode-toggle";
import { Computer, Folder, HardDrive, Settings } from "lucide-react";

export function Home() {
  const [activeWindows, setActiveWindows] = useState<string[]>([]);
  const [showStartMenu, setShowStartMenu] = useState(false);

  const startMenuItems = [
    {
      label: "Мой компьютер",
      onClick: () => handleWindowOpen("computer"),
    },
    {
      label: "Проводник",
      onClick: () => handleWindowOpen("explorer"),
    },
    {
      label: "Настройки",
      onClick: () => handleWindowOpen("settings"),
    },
  ];

  const handleWindowOpen = (windowId: string) => {
    if (!activeWindows.includes(windowId)) {
      setActiveWindows([...activeWindows, windowId]);
    }
    setShowStartMenu(false);
  };

  const handleWindowClose = (windowId: string) => {
    setActiveWindows(activeWindows.filter((id) => id !== windowId));
  };

  return (
    <div className="relative min-h-screen bg-[#008080] p-4">
      {/* Windows */}
      {activeWindows.includes("computer") && (
        <Win98Window
          title="Мой компьютер"
          onClose={() => handleWindowClose("computer")}
          className="absolute left-8 top-8"
        >
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <HardDrive className="size-8 text-black" />
              <Typography.P>Локальный диск (C:)</Typography.P>
            </div>
            <div className="flex items-center gap-2">
              <HardDrive className="size-8 text-black" />
              <Typography.P>Локальный диск (D:)</Typography.P>
            </div>
          </div>
        </Win98Window>
      )}

      {activeWindows.includes("explorer") && (
        <Win98Window
          title="Проводник"
          onClose={() => handleWindowClose("explorer")}
          className="absolute left-16 top-16"
        >
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Folder className="size-8 text-black" />
              <Typography.P>Мои документы</Typography.P>
            </div>
            <div className="flex items-center gap-2">
              <Folder className="size-8 text-black" />
              <Typography.P>Загрузки</Typography.P>
            </div>
          </div>
        </Win98Window>
      )}

      {activeWindows.includes("settings") && (
        <Win98Window
          title="Настройки"
          onClose={() => handleWindowClose("settings")}
          className="absolute left-24 top-24"
        >
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Settings className="size-8 text-black" />
              <Typography.P>Тема оформления</Typography.P>
            </div>
            <ModeToggle />
          </div>
        </Win98Window>
      )}

      {/* Start Menu */}
      {showStartMenu && (
        <Win98Menu
          className="absolute bottom-10 left-2"
          items={startMenuItems}
        />
      )}

      {/* Taskbar */}
      <Win98Taskbar
        items={[
          {
            label: "Пуск",
            active: showStartMenu,
            onClick: () => setShowStartMenu(!showStartMenu),
          },
          ...activeWindows.map((windowId) => ({
            label:
              windowId === "computer"
                ? "Мой компьютер"
                : windowId === "explorer"
                ? "Проводник"
                : "Настройки",
            active: true,
            onClick: () => handleWindowClose(windowId),
          })),
        ]}
      />
    </div>
  );
}