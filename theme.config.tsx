import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  (
    <span style={{ display: 'flex', alignItems: 'center' }}>
      <Image src={archivalogo.png} alt="Archiva Logo" width={30} height={30} />
      <span style={{ marginLeft: '8px' }}>Archiva</span>
    </span>
  ),
  project: {
    link: 'https://github.com/shuding/nextra-docs-template',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    text: 'Nextra Docs Template',
  },
}

export default config
