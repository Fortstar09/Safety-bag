/* eslint-disable react/prop-types */
import DashboardHeader from './DashboardHeader'
import LeftSideBar from './LeftSideBar'

const DashboardLayout = ({children, className}) => {
  return (
    <>
      <main className="flex flex-col w-full h-screen items-center justify-start">
        <DashboardHeader />
        <section className="w-full border-b-0 h-full flex">
          <LeftSideBar />
          <div className={`mt-15 ml-[200px] w-full h-full ${className}`}>
          {children}
          </div>
        </section>
      </main>
    </>
  )
}

export default DashboardLayout
