import './setting.scss'
export const Setting = (): JSX.Element => {
  return (
    <main className="setting-page">
      <h1>软件配置</h1>
      <section>
        <h2>快捷键配置</h2>
        <input type="text" placeholder="请输入快捷键" />
      </section>
      <section>
        <h2>片段存放位置</h2>
        <input type="text" placeholder="选择存放位置" />
      </section>
    </main>
  )
}
