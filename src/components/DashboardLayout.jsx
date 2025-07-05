/* eslint-disable react/prop-types */
import DashboardHeader from './DashboardHeader'
import LeftSideBar from './LeftSideBar'

const DashboardLayout = ({children, className}) => {
  return (
    <>
      <main className="flex flex-col w-full h-screen items-center justify-start">
        <DashboardHeader />
        <section className="w-full  border-b-0 h-full flex">
          <LeftSideBar />
          <div className={`w-full h-full flex border-b-4 border-line ${className}`}>
          {children}
          </div>
        </section>
      </main>
    </>
  )
}

export default DashboardLayout
