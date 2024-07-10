import { useStore } from '@renderer/store/useStore'
import { useState } from 'react'
import { Form } from 'react-router-dom'
import './setting.scss'
export const Setting = (): JSX.Element => {
  const [keys, setKeys] = useState<string[]>([])
  const config = useStore((state) => state.config)
  const setConfig = useStore((state) => state.setConfig)
  return (
    <Form method="POST">
      <main className="setting-page">
        <h1>软件配置</h1>
        <section>
          <h2>快捷键配置</h2>
          <input
            readOnly
            type="text"
            placeholder="请输入快捷键"
            name="shortCut"
            defaultValue={config.shortCut}
            onKeyDown={(e) => {
              if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) {
                const code = e.code.replace(/Left|Right|Key|Digit/, '')
                if (keys.includes(code)) return
                keys.push(code)
                setKeys(keys)
                if (code.match(/^(\w|Space)$/gi)) {
                  e.currentTarget.value = keys.join('+')
                  setKeys([])
                  setConfig({ ...config, shortCut: e.currentTarget.value })
                  window.api.shortCut(e.currentTarget.value)
                }
              }
            }}

          />
        </section>
        <section>
          <h2>片段存放位置</h2>
          <input
            type="text"
            readOnly
            placeholder="选择存放位置"
            name="databaseDirectory"
            defaultValue={config.databaseDirectory}
            onClick={async (e: any) => {
              const res = await window.api.selectDabaseDirectory()
              setConfig({ ...config, databaseDirectory: res })
              e.target.value = res
              window.api.setDatabaseDirectory(res)
              window.api.initDabase()
            }}
          />
        </section>
      </main>
    </Form>
  )
}
