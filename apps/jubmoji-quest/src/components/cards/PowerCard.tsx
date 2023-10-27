import React from "react";
import { Card } from "./Card";
import { PowerIcons } from "../icons/PowerIcons";
import { $Enums } from "@prisma/client";
import { Icons } from "../Icons";
import { cn } from "@/lib/utils";

export interface PowerCardProps {
  title: string;
  description?: string;
  powerType: $Enums.PowerType;
  disabled?: boolean;
  shortDescription?: boolean;
  bookmarked?: boolean;
}

export const PowerTypeIconMapping: Record<$Enums.PowerType, any> = {
  // "GROUP": <PowerIcons.group />,
  // "ACCESS": <PowerIcons.access />,
  QR_CODE: <PowerIcons.group />, // Todo: QR code icon
  TWITTER: <PowerIcons.twitter />,
  TELEGRAM: <PowerIcons.telegram />,
};

const PowerCard = ({
  title,
  description,
  powerType,
  disabled = false,
  shortDescription = false,
  bookmarked = false,
}: PowerCardProps) => {
  const powerIcon = PowerTypeIconMapping[powerType];

  return (
    <Card.Base>
      <Card.Content className="relative" spacing="sm">
        <div className="flex gap-2 self-stretch">
          <div className="flex gap-3">
            <div
              className={cn(
                "flex items-start gap-2 h-12",
                disabled ? "disabled-element" : ""
              )}
            >
              {powerIcon}
            </div>
            <div className="flex flex-col">
              <Card.Title disabled={disabled}>{title}</Card.Title>
              {description && (
                <Card.Description
                  disabled={disabled}
                  truncate={shortDescription}
                >
                  {description}
                </Card.Description>
              )}
            </div>
          </div>
          <button
            type="button"
            onClick={(e) => {
              console.log("button clicked");
              e.stopPropagation();
              e.nativeEvent.stopImmediatePropagation();
            }}
            className="flex items-start ml-auto w-6 h-6 z-[2] p-1"
          >
            {bookmarked ? <Icons.starSolid /> : <Icons.star />}
          </button>
        </div>
      </Card.Content>
    </Card.Base>
  );
};

PowerCard.displayName = "PowerCard";

export { PowerCard };
