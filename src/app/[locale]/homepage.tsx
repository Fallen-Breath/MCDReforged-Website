import { Link as NaLink } from "@/common/navigation";
import { siteConfig } from "@/config/site";
import { Button, Divider, Text, ThemeIcon, Title } from '@mantine/core';
import { Icon, IconBook2, IconDevicesCheck, IconExternalLink, IconPackage, IconPackages, IconPlant2 } from "@tabler/icons-react";
import { clsx } from "clsx";
import { getTranslations } from "next-intl/server";
import { Poppins } from "next/font/google";
import React from "react";
import styles from './homepage.module.css';

const titleFont = Poppins({ subsets: ['latin'], weight: ['700'] })

interface FeatureItem {
  id: string
  Icon: Icon
  color: string
}

const features: FeatureItem[] = [
  {
    id: 'vanilla',
    Icon: IconPlant2,
    color: 'green',
  },
  {
    id: 'plugins',
    Icon: IconPackage,
    color: 'primary',
  },
  {
    id: 'compatibility',
    Icon: IconDevicesCheck,
    color: 'blue',
  },
]

async function Hero() {
  const t = await getTranslations('page.home')

  const buttonWidth = 180
  return (
    <div className={clsx("w-full pt-[3rem] pb-[5rem] sm:py-[8rem]", "bg-[var(--mantine-color-white-filled)]")}>
      <div className="max-w-screen-lg mx-auto px-8">
        <div className="max-lg:flex max-lg:flex-col lg:grid lg:grid-cols-2 gap-16">

          <div className="max-lg:*:text-center max-w-[600px] mx-auto">
            <Title className={clsx(
              "font-bold text-4xl min-[400px]:text-5xl sm:text-6xl mb-7",
              styles.title,
              titleFont.className,
            )}>
              MCD
              <Text component="span" variant="gradient" gradient={{ from: 'blue.5', to: 'cyan' }} inherit>
                Reforged
              </Text>
            </Title>

            <Text c="gray" size="md">{t('description_alt')}</Text>
            <Text size="xl" className="mt-3">{t('description')}</Text>

            <div className="mt-5 sm:mt-10 flex flex-wrap gap-x-5 gap-y-3 justify-center">
              <Button w={buttonWidth} leftSection={<IconPackages size={18} stroke={1.4}/>} component={NaLink} href="/plugins">
                {t('catalogue')}
              </Button>
              <Button
                w={buttonWidth}
                leftSection={<IconBook2 size={20} stroke={1.6}/>}
                rightSection={<IconExternalLink size={16} stroke={1.6}/>}
                variant="default"
                component={NaLink}
                target="_blank"
                href={siteConfig.links.docs}
              >
                {t('docs')}
              </Button>
            </div>

            <p className="text-lg italic bg-red-200 rounded mt-3 text-center">Note: This website is still under development</p>
          </div>

          <div className="max-w-[600px] mx-auto">
            <Divider className="my-4 lg:hidden" variant="dashed"/>

            <div className="flex flex-col gap-5">
              {features.map(feat => (
                <div key={feat.id} className="">
                  <div className="flex items-center">
                    <ThemeIcon size={36} radius="xl" bg={feat.color}>
                      <feat.Icon size={22} stroke={1.6}/>
                    </ThemeIcon>
                    <p className="font-bold text-lg ml-3">{t(`feature.${feat.id}_t`)}</p>
                  </div>
                  <p className="mt-2 text-base">
                    {t(`feature.${feat.id}`)}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export async function HomePage() {
  return (
    <div>
      <Hero/>
    </div>
  )
}
