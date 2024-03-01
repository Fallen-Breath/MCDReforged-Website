import CommonCard from "@/components/common-card";
import { clsx } from "clsx";
import React from "react";

export function SidebarCard({children}: {children: React.ReactNode}) {
  return (
    <CommonCard className="p-5 overflow-hidden">
      <div className="flex flex-col gap-5">
        {children}
      </div>
    </CommonCard>
  )
}

export function CardSection({title, className, children}: {title: React.ReactNode, children: React.ReactNode, className?: string}) {
  return (
    <div className={clsx('flex flex-col', className)}>
      <p className="text-lg font-bold">{title}</p>
      {children}
    </div>
  )
}
