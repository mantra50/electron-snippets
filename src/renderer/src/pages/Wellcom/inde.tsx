import { CodeBrackets } from '@icon-park/react'

export default function Wellcom(): JSX.Element {
  return (
    <main className="w-full h-full flex flex-col justify-center items-center text-2xl font-bold text-gray-600">
      <CodeBrackets theme="outline" size="40" fill="#4b5563" />
      <div>HappySnippets</div>
    </main>
  )
}
