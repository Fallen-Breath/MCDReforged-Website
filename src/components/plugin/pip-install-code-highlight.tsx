'use client'

import { CodeHighlightTabs, HighlightProvider } from "@/lib/mantine-code-highlight-lite";

import hljs from "highlight.js/lib/core";
import { useTranslations } from "next-intl";
import React from "react";

hljs.registerLanguage(
  "bash",
  require("highlight.js/lib/languages/bash")
)

export default function PipInstallCodeHighlight({requirements}: {requirements: string[]}) {
  const t = useTranslations('component.pip_install_code_highlight')

  const pipInstallCommand = 'pip install ' + requirements.map(req => {
    if (req.match(/^[a-zA-Z0-9.~^=_-]+$/)) {
      return req
    }
    return '"' + req.replace('"', '\\"') + '"'
  }).join(' ')

  return (
    <HighlightProvider hljsInstance={hljs}>
      <CodeHighlightTabs
        code={[
          { fileName: 'Windows', code: pipInstallCommand, language: 'bash' },
          { fileName: 'Linux', code: pipInstallCommand.replace(/^pip/, 'pip3'), language: 'bash' },
        ]}
        copyLabel={t('copy')}
        copiedLabel={t('copied')}
      />
    </HighlightProvider>
  )
}
