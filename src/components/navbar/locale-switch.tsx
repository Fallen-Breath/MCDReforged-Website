'use client'

import { usePathname, useRouter } from "@/common/navigation";
import { siteConfig } from "@/site/config";
import { ActionIcon, Menu } from '@mantine/core';
import { IconWorld } from '@tabler/icons-react';
import { useLocale, useTranslations } from "next-intl";
import { useContext, useState, useTransition } from 'react';
import { NavbarSwitchStateContext, NavbarSwitchStateContextValue } from "./navbar-switch-state";

export function LocaleSwitch() {
  const currentLocale = useLocale()
  const t = useTranslations('layout.nav_bar.locale_switch')
  const ctx = useContext<NavbarSwitchStateContextValue>(NavbarSwitchStateContext)

  const pathname = usePathname()
  const router = useRouter()

  const [isPending, startTransition] = useTransition()
  const [selectedLocale, setSelectedLocale] = useState(currentLocale)

  function onSelectChange(newLocale: string) {
    if (newLocale !== selectedLocale) {
      setSelectedLocale(newLocale)
      startTransition(() => {
        router.push(pathname, {locale: newLocale, scroll: false})
      })
    }
  }

  return (
    <Menu
      width="6rem" radius="md"
      trigger="click-hover"
      openDelay={100} closeDelay={400}
      opened={ctx.shouldOpen('locale')} onChange={o => ctx.setOpen('locale', o)}
    >
      <Menu.Target>
        <ActionIcon variant="default" size="lg">
          <IconWorld aria-label="Language switch" stroke={1.5} className="text-mantine-text"/>
        </ActionIcon>
      </Menu.Target>
      <Menu.Dropdown>
        {siteConfig.languages.map((locale) => (
          <Menu.Item
            onClick={() => onSelectChange(locale)}
            disabled={isPending || locale === currentLocale}
            key={locale}
          >
            {t(locale)}
          </Menu.Item>
        ))}
      </Menu.Dropdown>
    </Menu>
  );
}
