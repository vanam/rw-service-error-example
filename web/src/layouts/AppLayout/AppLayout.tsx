import { Toaster } from '@redwoodjs/web/toast'

import Header from 'src/components/Header'

type AppLayoutProps = {
  children?: React.ReactNode
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <>
      <div className="flex h-screen flex-col font-normal">
        <div className="container mx-auto flex max-w-7xl grow flex-col px-5">
          <Header />

          <div>
            <div className="absolute -right-14 top-80 -z-50 block h-[400px] w-[400px] rounded-full bg-blue-200 md:-right-20 md:top-72 md:h-[700px] md:w-[700px] lg:-right-40 lg:-top-56"></div>
          </div>

          <main className="flex grow flex-col py-5 text-xl">
            <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
            {children}
          </main>
        </div>
      </div>
    </>
  )
}

export default AppLayout
