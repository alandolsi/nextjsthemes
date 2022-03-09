import Head from 'next/head'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-primary dark:bg-primary-dark">
      <h1 className="font-bold text-7xl text-label dark:text-label-dark">Hyperjump Technology</h1>
      <h1 className="mt-10 font-semibold text-3xl text-label dark:text-label-dark">
        Open source first. Cloud native. DevOps excellence.
      </h1>
    </div>
  )
}
